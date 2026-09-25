import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { normalizeScholarship, validateScholarship } from "@/lib/scholarship/schema";
import { buildConfirmationEmail, scholarshipReference } from "@/lib/scholarship/email-template";
import { EMAIL_LOGO_CID, EMAIL_LOGO_PNG_BASE64 } from "@/lib/scholarship/email-logo";
import { insertApplication } from "@/lib/scholarship/db";

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { data?: unknown; website?: unknown };

        // Honeypot: bot'a başarılı gibi görün, kayıt yapma.
        if (typeof body.website === "string" && body.website.trim() !== "") {
            return NextResponse.json({ message: "Başvuru alındı." });
        }

        const result = validateScholarship(body.data);
        if (!result.success) {
            return NextResponse.json({ message: "Geçersiz form verisi.", errors: result.errors }, { status: 400 });
        }

        const d = normalizeScholarship(result.data);
        const reference = scholarshipReference();

        await insertApplication(reference, d);

        // Kayıt DB'de güvende; onay e-postası gönderilemezse başvuru yine başarılı sayılır.
        try {
            await sendEmail({
                to: d.email,
                subject: `BGTS Burs Başvurunuz Alındı [${reference}]`,
                html: buildConfirmationEmail(d, reference),
                inlineImages: [
                    { cid: EMAIL_LOGO_CID, filename: "bgts-logo.png", contentType: "image/png", content: Buffer.from(EMAIL_LOGO_PNG_BASE64, "base64") },
                ],
            });
        } catch (error) {
            console.error(`Burs onay e-postası gönderilemedi [${reference}]:`, error);
        }

        return NextResponse.json({ message: "Başvuru alındı.", reference });
    } catch (error) {
        console.error("Burs Başvurusu Hatası:", error);
        return NextResponse.json({ message: "Başvuru gönderilirken bir hata oluştu." }, { status: 500 });
    }
}
