import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const applicationSchema = z.object({
    fullName: z.string().min(2).max(100),
    email: z.string().email().max(254),
    phone: z.string().max(20).optional().default(""),
    university: z.string().max(200).optional().default(""),
    department: z.string().max(200).optional().default(""),
    grade: z.string().max(50).optional().default(""),
    message: z.string().max(2000).optional().default(""),
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const fields = {
            fullName: formData.get("fullName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            university: formData.get("university") as string,
            department: formData.get("department") as string,
            grade: formData.get("grade") as string,
            message: formData.get("message") as string,
        };

        const result = applicationSchema.safeParse(fields);
        if (!result.success) {
            return NextResponse.json(
                { message: "Geçersiz form verisi.", errors: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { fullName, email, phone, university, department, grade, message } = result.data;

        const cv = formData.get("cv") as File | null;
        if (!cv) {
            return NextResponse.json(
                { message: "CV dosyası zorunludur." },
                { status: 400 }
            );
        }

        if (cv.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { message: "CV dosyası 5MB'den büyük olamaz." },
                { status: 400 }
            );
        }

        if (!ALLOWED_FILE_TYPES.includes(cv.type)) {
            return NextResponse.json(
                { message: "Yalnızca PDF ve Word dosyaları kabul edilmektedir." },
                { status: 400 }
            );
        }

        const html = `
      <h2>Yeni İş Başvurusu</h2>
      <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Üniversite:</strong> ${escapeHtml(university || "-")}</p>
      <p><strong>Bölüm:</strong> ${escapeHtml(department || "-")}</p>
      <p><strong>Sınıf:</strong> ${escapeHtml(grade || "-")}</p>
      <hr />
      <h3>Not:</h3>
      <p>${escapeHtml(message || "").replace(/\n/g, "<br>")}</p>
    `;

        const arrayBuffer = await cv.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const attachments = [{
            filename: cv.name,
            content: buffer,
            contentType: cv.type,
        }];

        await sendEmail({
            to: process.env.HR_EMAIL || "hr@bgts.com.tr",
            subject: `İş Başvurusu: ${escapeHtml(fullName)}`,
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
