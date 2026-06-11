import { google } from "googleapis";

export type EmailAttachment = {
    filename: string;
    content: Buffer | string;
    contentType?: string;
};

type SendEmailOptions = {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
    attachments?: EmailAttachment[];
};

const GMAIL_SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

function getGmailConfig() {
    const clientId = process.env.GMAIL_CLIENT_ID;
    const clientSecret = process.env.GMAIL_CLIENT_SECRET;
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    const user = process.env.GMAIL_USER;

    if (!clientId || !clientSecret || !refreshToken || !user) {
        throw new Error(
            "Gmail yapılandırması eksik. GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN ve GMAIL_USER ortam değişkenlerini ayarlayın."
        );
    }

    return { clientId, clientSecret, refreshToken, user };
}

async function createGmailClient() {
    const { clientId, clientSecret, refreshToken } = getGmailConfig();

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({
        refresh_token: refreshToken,
        scope: GMAIL_SCOPES.join(" "),
    });

    return google.gmail({ version: "v1", auth: oauth2Client });
}

function encodeHeaderValue(value: string) {
    return `=?UTF-8?B?${Buffer.from(value, "utf-8").toString("base64")}?=`;
}

function toBase64Url(content: string) {
    return Buffer.from(content)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/g, "");
}

function buildMimeMessage({
    from,
    to,
    subject,
    html,
    replyTo,
    attachments = [],
}: SendEmailOptions & { from: string }) {
    const headers = [
        `From: "BGTS Web Sistem" <${from}>`,
        `To: ${to}`,
        `Subject: ${encodeHeaderValue(subject)}`,
        "MIME-Version: 1.0",
    ];

    if (replyTo) {
        headers.push(`Reply-To: ${replyTo}`);
    }

    if (attachments.length === 0) {
        headers.push("Content-Type: text/html; charset=UTF-8");
        headers.push("Content-Transfer-Encoding: base64");
        headers.push("");
        headers.push(Buffer.from(html, "utf-8").toString("base64"));

        return headers.join("\r\n");
    }

    const boundary = `bgts_${Date.now()}`;
    headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);
    headers.push("");

    const parts = [
        `--${boundary}`,
        "Content-Type: text/html; charset=UTF-8",
        "Content-Transfer-Encoding: base64",
        "",
        Buffer.from(html, "utf-8").toString("base64"),
    ];

    for (const attachment of attachments) {
        const content = Buffer.isBuffer(attachment.content)
            ? attachment.content
            : Buffer.from(attachment.content);

        parts.push(
            `--${boundary}`,
            `Content-Type: ${attachment.contentType || "application/octet-stream"}; name="${attachment.filename}"`,
            "Content-Transfer-Encoding: base64",
            `Content-Disposition: attachment; filename="${attachment.filename}"`,
            "",
            content.toString("base64")
        );
    }

    parts.push(`--${boundary}--`);
    headers.push(parts.join("\r\n"));

    return headers.join("\r\n");
}

export const sendEmail = async ({
    to,
    subject,
    html,
    replyTo,
    attachments,
}: SendEmailOptions) => {
    const { user } = getGmailConfig();
    const gmail = await createGmailClient();

    const raw = toBase64Url(
        buildMimeMessage({
            from: user,
            to,
            subject,
            html,
            replyTo,
            attachments,
        })
    );

    const response = await gmail.users.messages.send({
        userId: "me",
        requestBody: { raw },
    });

    return response.data;
};
