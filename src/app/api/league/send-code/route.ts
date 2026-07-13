import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { isStaffEmail, normalizeStaffEmail } from "@/lib/league/crypto";
import { buildLeagueOtpEmailHtml } from "@/lib/league/otp-email";
import { cookieOptions, createOtpToken, OTP_COOKIE } from "@/lib/league/session";

const schema = z.object({
  name: z.string().trim().min(3).max(80),
  email: z.string().email().max(254),
});

function classifyConfigError(error: unknown): NextResponse | null {
  const msg = error instanceof Error ? error.message : String(error);

  if (msg.includes("LEAGUE_SECRET")) {
    return NextResponse.json(
      {
        message:
          "Sunucu yapılandırması eksik: Vercel Environment Variables içine LEAGUE_SECRET ekleyin (min 16 karakter).",
        code: "LEAGUE_SECRET_MISSING",
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
          "E-posta servisi yapılandırması eksik veya geçersiz. Vercel'de GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN ve GMAIL_USER değişkenlerini kontrol edin.",
        code: "GMAIL_CONFIG_ERROR",
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
      { message: "Kod gönderilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
