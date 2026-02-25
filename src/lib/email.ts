import nodemailer from "nodemailer";

export const createTransporter = async () => {
    // Ethereal (Test) veya Gerçek SMTP ayarları
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    let user = process.env.SMTP_USER;
    let pass = process.env.SMTP_PASS;

    // Eğer SMTP_USER veya SMTP_PASS verilmemişse otomatik bir Ethereal test hesabı oluştur
    if (!user || !pass) {
        const testAccount = await nodemailer.createTestAccount();
        user = testAccount.user;
        pass = testAccount.pass;
        console.log("TEST E-POSTA HESABI OLUŞTURULDU:", { user, pass });
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: {
            user,
            pass,
        },
    });

    return transporter;
};

export const sendEmail = async ({
    to,
    subject,
    html,
    replyTo,
    attachments,
}: {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
    attachments?: Array<any>;
}) => {
    const transporter = await createTransporter();

    const mailOptions = {
        from: `"BGTS Web Sistem" <${process.env.SMTP_USER || "noreply@bgts.com.tr"}>`,
        to,
        replyTo,
        subject,
        html,
        attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    // Ethereal üzerinden gönderildiyse önizleme adresini konsola yazdır
    if (process.env.SMTP_HOST?.includes("ethereal")) {
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    return info;
};
