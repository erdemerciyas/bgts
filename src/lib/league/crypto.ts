import { createHmac, randomInt, timingSafeEqual } from "crypto";

// Vercel/Next: env anahtarları statik erişimle bundle'a dahil edilir
const LEAGUE_SECRET_ENV = process.env.LEAGUE_SECRET;
const STAFF_EMAIL_DOMAIN_ENV = process.env.STAFF_EMAIL_DOMAIN;

const DOMAIN = () =>
  (STAFF_EMAIL_DOMAIN_ENV || "bgts.com").toLowerCase().replace(/^@/, "");

export function getStaffEmailDomain(): string {
  return DOMAIN();
}

export function isStaffEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  const domain = DOMAIN();
  const re = new RegExp(`^[a-z0-9._%+-]+@${domain.replace(/\./g, "\\.")}$`);
  return re.test(normalized);
}

export function normalizeStaffEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Vercel'de tırnak/boşlukla yapıştırılan değerleri temizler */
function normalizeSecret(raw: string | undefined): string {
  if (!raw) return "";
  let s = raw.trim();
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

export function getLeagueEnvStatus() {
  const secret = normalizeSecret(LEAGUE_SECRET_ENV);
  return {
    LEAGUE_SECRET: secret.length >= 16,
    LEAGUE_SECRET_LENGTH: secret.length,
    GMAIL_CLIENT_ID: Boolean(process.env.GMAIL_CLIENT_ID?.trim()),
    GMAIL_CLIENT_SECRET: Boolean(process.env.GMAIL_CLIENT_SECRET?.trim()),
    GMAIL_REFRESH_TOKEN: Boolean(process.env.GMAIL_REFRESH_TOKEN?.trim()),
    GMAIL_USER: Boolean(process.env.GMAIL_USER?.trim()),
    STAFF_EMAIL_DOMAIN: DOMAIN(),
    NODE_ENV: process.env.NODE_ENV ?? null,
    VERCEL_ENV: process.env.VERCEL_ENV ?? null,
  };
}

function getSecret(): string {
  const secret = normalizeSecret(LEAGUE_SECRET_ENV);
  if (secret.length >= 16) return secret;

  if (process.env.NODE_ENV === "production") {
    throw new Error(
      secret.length > 0
        ? `LEAGUE_SECRET çok kısa (${secret.length} karakter). En az 16 karakter olmalı.`
        : "LEAGUE_SECRET ortam değişkeni gerekli (min 16 karakter)."
    );
  }
  return "dev-league-secret-change-me";
}

export function signPayload(payload: string): string {
  const sig = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySignedPayload(token: string): string | null {
  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return null;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  return payload;
}

export function hashOtp(code: string): string {
  return createHmac("sha256", getSecret()).update(`otp:${code}`).digest("hex");
}

export function generateOtpCode(): string {
  return String(randomInt(100000, 1000000));
}

export function safeEqualHash(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a);
    const bb = Buffer.from(b);
    if (ba.length !== bb.length) return false;
    return timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}
