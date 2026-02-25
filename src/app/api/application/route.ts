import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const university = formData.get("university") as string;
        const department = formData.get("department") as string;
        const grade = formData.get("grade") as string;
        const message = formData.get("message") as string;
        const cv = formData.get("cv") as File | null;

        if (!fullName || !email || !cv) {
            return NextResponse.json(
                { message: "Eksik bilgi gonderildi." },
                { status: 400 }
            );
        }

        const html = `
      <h2>Yeni İş Başvurusu</h2>
      <p><strong>Ad Soyad:</strong> ${fullName}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "-"}</p>
      <p><strong>Üniversite:</strong> ${university || "-"}</p>
      <p><strong>Bölüm:</strong> ${department || "-"}</p>
      <p><strong>Sınıf:</strong> ${grade || "-"}</p>
      <hr />
      <h3>Not:</h3>
      <p>${(message || "").replace(/\n/g, "<br>")}</p>
    `;

        const attachments = [];
        if (cv) {
            const arrayBuffer = await cv.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            attachments.push({
                filename: cv.name,
                content: buffer,
                contentType: cv.type,
            });
        }

        await sendEmail({
            to: process.env.HR_EMAIL || "hr@bgts.com.tr",
            subject: `İş Başvurusu: ${fullName}`,
            html,
            replyTo: email,
            attachments,
        });

        return NextResponse.json({ message: "Başvuru başarıyla alındı." });
    } catch (error) {
        console.error("Başvuru Form Hatası:", error);
        return NextResponse.json(
            { message: "Başvuru gönderilirken bir hata oluştu." },
            { status: 500 }
        );
    }
}
