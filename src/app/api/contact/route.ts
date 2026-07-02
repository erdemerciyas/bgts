import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(254),
    company: z.string().max(200).optional().default(""),
    phone: z.string().max(20).optional().default(""),
    message: z.string().min(10).max(2000),
    consent: z.boolean(),
});

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const result = contactSchema.safeParse(data);

        if (!result.success) {
            return NextResponse.json(
                { message: "Geçersiz form verisi.", errors: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, company, phone, message, consent } = result.data;

        const html = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
      <p><strong>Şirket:</strong> ${escapeHtml(company || "-")}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>KVKK Onayı:</strong> ${consent ? "Evet" : "Hayır"}</p>
      <hr />
      <h3>Mesaj:</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

        await sendEmail({
            to: process.env.CONTACT_EMAIL || "info@bgts.com",
            subject: `İletişim Formu: ${escapeHtml(name)} (${escapeHtml(company || 'Bireysel')})`,
            html,
            replyTo: email,
        });

        return NextResponse.json({ message: "Mesaj başarıyla gönderildi." });
    } catch (error) {
        console.error("İletişim Formu Hatası:", error);
        return NextResponse.json(
            { message: "Mesaj gönderilirken bir hata oluştu." },
            { status: 500 }
        );
    }
}
