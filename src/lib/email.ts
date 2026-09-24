import { google } from "googleapis";

export type EmailAttachment = {
    filename: string;
    content: Buffer | string;
    contentType?: string;
};

/** HTML içinde src="cid:<cid>" ile gösterilen gömülü görsel. */
export type InlineImage = {
    cid: string;
    filename: string;
    content: Buffer;
    contentType: string;
};

type SendEmailOptions = {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
    attachments?: EmailAttachment[];
    inlineImages?: InlineImage[];
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

/** RFC 2045: base64 gövde en fazla 76 karakterlik satırlara bölünür (bazı istemciler uzun satırları hatalı çözer). */
function toMimeBase64(content: string | Buffer) {
    const buffer = Buffer.isBuffer(content) ? content : Buffer.from(content, "utf-8");
    return buffer.toString("base64").replace(/.{76}(?=.)/g, "$&\r\n");
}

/** HTML'e UTF-8 bildirimi ekler; header'ı yok sayan istemcilerde de Türkçe karakterler doğru görünür. */
function withCharset(html: string) {
    return /<meta[^>]+charset/i.test(html)
        ? html
        : `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>${html}</body></html>`;
}

function toBase64Url(content: string) {
    return Buffer.from(content)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/g, "");
}

/** HTML gövdesi; satır içi görsel varsa multipart/related içinde (cid: referanslarıyla) gönderilir. */
function htmlEntity(html: string, inlineImages: InlineImage[]): string[] {
    const htmlPart = [
        "Content-Type: text/html; charset=UTF-8",
        "Content-Transfer-Encoding: base64",
        "",
        toMimeBase64(withCharset(html)),
    ];
    if (inlineImages.length === 0) return htmlPart;

    const boundary = `bgts_rel_${Date.now()}`;
    const lines = [`Content-Type: multipart/related; boundary="${boundary}"`, "", `--${boundary}`, ...htmlPart];
    for (const image of inlineImages) {
        lines.push(
            `--${boundary}`,
            `Content-Type: ${image.contentType}; name="${image.filename}"`,
            "Content-Transfer-Encoding: base64",
            `Content-ID: <${image.cid}>`,
            `Content-Disposition: inline; filename="${image.filename}"`,
            "",
            toMimeBase64(image.content)
        );
    }
    lines.push(`--${boundary}--`);
    return lines;
}

function buildMimeMessage({
    from,
    to,
    subject,
    html,
    replyTo,
    attachments = [],
    inlineImages = [],
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
        headers.push(...htmlEntity(html, inlineImages));
        return headers.join("\r\n");
    }

    const boundary = `bgts_${Date.now()}`;
    headers.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);
    headers.push("");

    const parts = [`--${boundary}`, ...htmlEntity(html, inlineImages)];

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
            toMimeBase64(content)
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
    inlineImages,
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
            inlineImages,
        })
    );

    try {
        const response = await gmail.users.messages.send({
            userId: "me",
            requestBody: { raw },
        });

        return response.data;
    } catch (error) {
        const data = (error as { response?: { data?: { error?: string } } }).response?.data;
        if (data?.error === "invalid_grant") {
            throw new Error(
                "Gmail refresh token geçersiz veya süresi dolmuş (invalid_grant). `npm run gmail:auth` ile yeni token alın ve GMAIL_REFRESH_TOKEN değerini güncelleyin."
            );
        }
        throw error;
    }
};
