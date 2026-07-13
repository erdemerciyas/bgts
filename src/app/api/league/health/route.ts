import { NextResponse } from "next/server";
import { getLeagueEnvStatus } from "@/lib/league/crypto";

export const runtime = "nodejs";

/** Ortam değişkenlerinin yüklü olup olmadığını kontrol eder (değerleri göstermez). */
export async function GET() {
  const env = getLeagueEnvStatus();
  const ok =
    env.LEAGUE_SECRET &&
    env.GMAIL_CLIENT_ID &&
    env.GMAIL_CLIENT_SECRET &&
    env.GMAIL_REFRESH_TOKEN &&
    env.GMAIL_USER;

  return NextResponse.json({
    ok,
    env,
    hint: ok
      ? "Yapılandırma tamam."
      : "Eksik değişkenler var. Vercel → Settings → Environment Variables → ilgili ortam (Production/Preview) → Save → Redeploy.",
  });
}
