import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { normalizeScholarship, validateScholarship } from "@/lib/scholarship/schema";
import { buildScholarshipEmail, scholarshipReference } from "@/lib/scholarship/email-template";
import { EMAIL_LOGO_CID, EMAIL_LOGO_PNG_BASE64 } from "@/lib/scholarship/email-logo";
import { verifyChallenge } from "@/lib/scholarship/captcha";

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { data?: unknown; captchaToken?: unknown; captchaAnswer?: unknown; website?: unknown };

        // Honeypot: bot'a başarılı gibi görün, e-posta gönderme.
        if (typeof body.website === "string" && body.website.trim() !== "") {
            return NextResponse.json({ message: "Başvuru alındı." });
        }

        // Matematik güvenlik sorusu (imzalı, süreli, tek kullanımlık)
        if (!verifyChallenge(body.captchaToken, body.captchaAnswer)) {
            return NextResponse.json({ message: "Güvenlik sorusu yanlış veya süresi dolmuş.", code: "captcha" }, { status: 400 });
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
