import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";

/**
 * Durumsuz (stateless) matematik sorusu doğrulaması.
 * Sunucu soruyu üretir; cevap istemciye gönderilmez, yalnızca HMAC imzası içinde yer alır.
 * Token biçimi: `<son geçerlilik ms>.<nonce>.<imza>`
 */

const TTL_MS = 10 * 60 * 1000;
const DEV_SECRET = "bgts-dev-captcha-secret";

function getSecret(): string {
    const secret = process.env.CAPTCHA_SECRET || process.env.LEAGUE_SECRET;
    if (secret) return secret;
    if (process.env.NODE_ENV !== "production") return DEV_SECRET;
    throw new Error("Burs başvurusu: CAPTCHA_SECRET (veya LEAGUE_SECRET) tanımlı değil.");
}

function sign(answer: number, expires: number, nonce: string): string {
    return createHmac("sha256", getSecret()).update(`${answer}.${expires}.${nonce}`).digest("base64url");
}

// Tek kullanım: aynı sunucu örneğinde çözülmüş token tekrar kabul edilmez (serverless'ta en iyi çaba).
const usedNonces = new Map<string, number>();

function markUsed(nonce: string, expires: number): boolean {
    const now = Date.now();
    for (const [n, exp] of usedNonces) if (exp < now) usedNonces.delete(n);
    if (usedNonces.has(nonce)) return false;
    usedNonces.set(nonce, expires);
    return true;
}

export type MathChallenge = { question: string; token: string };

export function createChallenge(now = Date.now()): MathChallenge {
    const kind = randomInt(3);
    let a: number, b: number, op: string, answer: number;
    if (kind === 0) {
        a = randomInt(2, 21); b = randomInt(2, 21); op = "+"; answer = a + b;
    } else if (kind === 1) {
        a = randomInt(10, 31); b = randomInt(1, a); op = "−"; answer = a - b;
    } else {
        a = randomInt(2, 10); b = randomInt(2, 10); op = "×"; answer = a * b;
    }
    const expires = now + TTL_MS;
    const nonce = randomBytes(9).toString("base64url");
    return { question: `${a} ${op} ${b}`, token: `${expires}.${nonce}.${sign(answer, expires, nonce)}` };
}

export function verifyChallenge(token: unknown, answer: unknown, now = Date.now()): boolean {
    if (typeof token !== "string" || (typeof answer !== "string" && typeof answer !== "number")) return false;
    const [expiresRaw, nonce, signature] = token.split(".");
    const expires = Number(expiresRaw);
    const value = String(answer).trim();
    if (!nonce || !signature || !Number.isFinite(expires) || expires < now || !/^-?\d{1,4}$/.test(value)) return false;

    const expected = Buffer.from(sign(Number(value), expires, nonce));
    const given = Buffer.from(signature);
    if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;
    return markUsed(nonce, expires);
}
