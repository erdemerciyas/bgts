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

    const { code, token } = createOtpToken(name, email);

    await sendEmail({
      to: email,
      subject: "BGTS League — Doğrulama Kodu",
      html: buildLeagueOtpEmailHtml(name, code),
    });

    const res = NextResponse.json({
      message: "Doğrulama kodu e-posta adresine gönderildi.",
      email,
    });
    res.cookies.set(OTP_COOKIE, token, cookieOptions.otp);
    return res;
  } catch (error) {
    console.error("League send-code error:", error);
    return NextResponse.json(
      { message: "Kod gönderilirken bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
