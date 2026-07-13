import { createHmac, randomInt, timingSafeEqual } from "crypto";

const DOMAIN = () =>
  (process.env.STAFF_EMAIL_DOMAIN || "bgts.com").toLowerCase().replace(/^@/, "");

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

function getSecret(): string {
  const secret = process.env.LEAGUE_SECRET;
  if (!secret || secret.length < 16) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("LEAGUE_SECRET ortam değişkeni gerekli (min 16 karakter).");
    }
    return "dev-league-secret-change-me";
  }
  return secret;
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
