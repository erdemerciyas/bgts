import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";
import { isStaffEmail, normalizeStaffEmail } from "@/lib/league/crypto";
import {
  cookieOptions,
  createSessionToken,
  OTP_COOKIE,
  SESSION_COOKIE,
  verifyOtpToken,
} from "@/lib/league/session";

const schema = z.object({
  email: z.string().email().max(254),
  code: z.string().regex(/^\d{6}$/),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Geçersiz e-posta veya doğrulama kodu." },
        { status: 400 }
      );
    }

    const email = normalizeStaffEmail(parsed.data.email);
    if (!isStaffEmail(email)) {
      return NextResponse.json(
        { message: "Yalnızca @bgts.com e-posta adresi ile katılabilirsiniz." },
        { status: 403 }
      );
    }

    const jar = await cookies();
    const otpToken = jar.get(OTP_COOKIE)?.value;
    if (!otpToken) {
      return NextResponse.json(
        { message: "Doğrulama oturumu bulunamadı. Lütfen kodu yeniden isteyin." },
        { status: 400 }
      );
    }

    const verified = verifyOtpToken(otpToken, email, parsed.data.code);
    if (!verified) {
      return NextResponse.json(
        { message: "Kod eşleşmedi veya süresi doldu." },
        { status: 401 }
      );
    }

    const sessionToken = createSessionToken(verified.name, verified.email);
    const res = NextResponse.json({
      message: "Doğrulama başarılı.",
      name: verified.name,
      email: verified.email,
    });
    res.cookies.set(SESSION_COOKIE, sessionToken, cookieOptions.session);
    res.cookies.set(OTP_COOKIE, "", { ...cookieOptions.otp, maxAge: 0 });
    return res;
  } catch (error) {
    console.error("League verify error:", error);
    return NextResponse.json(
      { message: "Doğrulama sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
