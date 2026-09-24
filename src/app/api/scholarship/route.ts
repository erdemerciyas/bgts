import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { normalizeScholarship, validateScholarship } from "@/lib/scholarship/schema";
import { buildScholarshipEmail, scholarshipReference } from "@/lib/scholarship/email-template";
import { EMAIL_LOGO_CID, EMAIL_LOGO_PNG_BASE64 } from "@/lib/scholarship/email-logo";

// Cloudflare test secret'ı her doğrulamayı geçirir — yalnızca geliştirme ortamında yedek olarak kullanılır.
const DEV_TURNSTILE_SECRET = "1x0000000000000000000000000000000AA";

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
    const secret =
        process.env.TURNSTILE_SECRET_KEY ||
        (process.env.NODE_ENV !== "production" ? DEV_TURNSTILE_SECRET : "");
    if (!secret) {
        console.error("Burs Başvurusu: TURNSTILE_SECRET_KEY tanımlı değil.");
        return false;
    }

    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);

    try {
        const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body,
        });
        const data = (await res.json()) as { success?: boolean };
        return data.success === true;
    } catch (error) {
        console.error("Turnstile doğrulama hatası:", error);
        return false;
    }
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { data?: unknown; turnstileToken?: unknown; website?: unknown };

        // Honeypot: bot'a başarılı gibi görün, e-posta gönderme.
        if (typeof body.website === "string" && body.website.trim() !== "") {
            return NextResponse.json({ message: "Başvuru alındı." });
        }

        const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip");
        const token = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
        if (!token || !(await verifyTurnstile(token, ip))) {
            return NextResponse.json({ message: "Güvenlik doğrulaması başarısız.", code: "turnstile" }, { status: 400 });
        }

        const result = validateScholarship(body.data);
        if (!result.success) {
            return NextResponse.json({ message: "Geçersiz form verisi.", errors: result.errors }, { status: 400 });
        }

        const d = normalizeScholarship(result.data);
        const reference = scholarshipReference();

        await sendEmail({
            to: process.env.SCHOLARSHIP_EMAIL || process.env.CONTACT_EMAIL || "info@bgts.com",
            subject: `Burs Başvurusu – ${d.firstName} ${d.lastName} – ${d.university} [${reference}]`,
            html: buildScholarshipEmail(d, reference),
            replyTo: d.email,
            inlineImages: [
                { cid: EMAIL_LOGO_CID, filename: "bgts-logo.png", contentType: "image/png", content: Buffer.from(EMAIL_LOGO_PNG_BASE64, "base64") },
            ],
        });

        return NextResponse.json({ message: "Başvuru alındı." });
    } catch (error) {
        console.error("Burs Başvurusu Hatası:", error);
        return NextResponse.json({ message: "Başvuru gönderilirken bir hata oluştu." }, { status: 500 });
    }
}
