import { cookies } from "next/headers";
import {
  generateOtpCode,
  hashOtp,
  normalizeStaffEmail,
  safeEqualHash,
  signPayload,
  verifySignedPayload,
} from "./crypto";

export const OTP_COOKIE = "bgts_league_otp";
export const SESSION_COOKIE = "bgts_league_session";

const OTP_TTL_MS = 10 * 60 * 1000;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

type OtpPayload = {
  e: string;
  n: string;
  h: string;
  exp: number;
};

type SessionPayload = {
  e: string;
  n: string;
  exp: number;
};

function encodeJson(data: unknown): string {
  return Buffer.from(JSON.stringify(data), "utf8").toString("base64url");
}

function decodeJson<T>(payload: string): T | null {
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}

export function createOtpToken(name: string, email: string): { code: string; token: string } {
  const code = generateOtpCode();
  const payload: OtpPayload = {
    e: normalizeStaffEmail(email),
    n: name.trim(),
    h: hashOtp(code),
    exp: Date.now() + OTP_TTL_MS,
  };
  return { code, token: signPayload(encodeJson(payload)) };
}

export function verifyOtpToken(
  token: string,
  email: string,
  code: string
): { name: string; email: string } | null {
  const raw = verifySignedPayload(token);
  if (!raw) return null;
  const data = decodeJson<OtpPayload>(raw);
  if (!data || data.exp < Date.now()) return null;
  if (data.e !== normalizeStaffEmail(email)) return null;
  if (!safeEqualHash(data.h, hashOtp(code.trim()))) return null;
  return { name: data.n, email: data.e };
}

export function createSessionToken(name: string, email: string): string {
  const payload: SessionPayload = {
    e: normalizeStaffEmail(email),
    n: name.trim(),
    exp: Date.now() + SESSION_TTL_MS,
  };
  return signPayload(encodeJson(payload));
}

export function readSessionFromToken(token: string): { name: string; email: string } | null {
  const raw = verifySignedPayload(token);
  if (!raw) return null;
  const data = decodeJson<SessionPayload>(raw);
  if (!data || data.exp < Date.now()) return null;
  return { name: data.n, email: data.e };
}

export async function getLeagueSession(): Promise<{ name: string; email: string } | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return readSessionFromToken(token);
}

export const cookieOptions = {
  otp: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(OTP_TTL_MS / 1000),
  },
  session: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  },
};
