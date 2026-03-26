import nodemailer from "nodemailer";

export const createTransporter = async () => {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        throw new Error("SMTP yapılandırması eksik. SMTP_HOST, SMTP_USER ve SMTP_PASS ortam değişkenlerini ayarlayın.");
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
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
    return info;
};
