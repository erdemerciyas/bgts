import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import {
  getLeagueEnvStatus,
  isStaffEmail,
  normalizeStaffEmail,
} from "@/lib/league/crypto";
import { buildLeagueOtpEmailHtml } from "@/lib/league/otp-email";
import { cookieOptions, createOtpToken, OTP_COOKIE } from "@/lib/league/session";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(3).max(80),
  email: z.string().email().max(254),
});

function classifyConfigError(error: unknown): NextResponse | null {
  const msg = error instanceof Error ? error.message : String(error);
  const env = getLeagueEnvStatus();

  if (msg.includes("LEAGUE_SECRET")) {
    return NextResponse.json(
      {
        message: env.LEAGUE_SECRET
          ? "LEAGUE_SECRET okunamadı. Vercel'de değeri tırnaksız kaydedip Redeploy edin."
          : "LEAGUE_SECRET bu ortamda yok. Vercel → Environment Variables → Production/Preview işaretli olduğundan emin olun, kaydedin ve Redeploy edin.",
        code: "LEAGUE_SECRET_MISSING",
        env,
      },
      { status: 503 }
    );
  }

  if (
    msg.includes("Gmail yapılandırması eksik") ||
    msg.includes("GMAIL_") ||
    msg.includes("invalid_grant") ||
    msg.includes("unauthorized_client")
  ) {
    return NextResponse.json(
      {
        message:
          "E-posta servisi yapılandırması eksik veya geçersiz. Vercel'de GMAIL_* değişkenlerini kontrol edip Redeploy edin.",
        code: "GMAIL_CONFIG_ERROR",
        env,
      },
      { status: 503 }
    );
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Ad ve geçerli bir e-posta gerekli." },
        { status: 400 }
      );
    }

    const name = parsed.data.name.trim();
    const email = normalizeStaffEmail(parsed.data.email);

    if (!isStaffEmail(email)) {
      return NextResponse.json(
        { message: "Yalnızca @bgts.com e-posta adresi ile katılabilirsiniz." },
        { status: 403 }
      );
    }

    const env = getLeagueEnvStatus();
    if (!env.LEAGUE_SECRET) {
      return NextResponse.json(
        {
          message:
            "LEAGUE_SECRET bu ortamda yok. Vercel → Settings → Environment Variables → Production ve Preview'ı işaretleyin → Save → Deployments → Redeploy.",
          code: "LEAGUE_SECRET_MISSING",
          env,
        },
        { status: 503 }
      );
    }

    let code: string;
    let token: string;
    try {
      ({ code, token } = createOtpToken(name, email));
    } catch (error) {
      const classified = classifyConfigError(error);
      if (classified) return classified;
      throw error;
    }

    try {
      await sendEmail({
        to: email,
        subject: "BGTS League — Doğrulama Kodu",
        html: buildLeagueOtpEmailHtml(name, code),
      });
    } catch (error) {
      const classified = classifyConfigError(error);
      if (classified) return classified;
      console.error("League send-code Gmail error:", error);
      return NextResponse.json(
        {
          message:
            "Doğrulama kodu gönderilemedi. Gmail API yetkilendirmesini kontrol edin.",
          code: "GMAIL_SEND_FAILED",
          env,
        },
        { status: 502 }
      );
    }

    const res = NextResponse.json({
      message: "Doğrulama kodu e-posta adresine gönderildi.",
      email,
    });
    res.cookies.set(OTP_COOKIE, token, cookieOptions.otp);
    return res;
  } catch (error) {
    console.error("League send-code error:", error);
    const classified = classifyConfigError(error);
    if (classified) return classified;
    return NextResponse.json(
      {
        message: "Kod gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        env: getLeagueEnvStatus(),
      },
      { status: 500 }
    );
  }
}
