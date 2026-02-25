import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, company, phone, message, consent } = data;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Eksik bilgi gonderildi." },
                { status: 400 }
            );
        }

        const html = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${name}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Şirket:</strong> ${company || "-"}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      <p><strong>KVKK Onayı:</strong> ${consent ? "Evet" : "Hayır"}</p>
      <hr />
      <h3>Mesaj:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

        await sendEmail({
            to: process.env.CONTACT_EMAIL || "contact@bgts.com.tr",
            subject: `İletişim Formu: ${name} (${company || 'Bireysel'})`,
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
