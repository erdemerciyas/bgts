/**
 * Gmail API refresh token alma yardımcı scripti.
 *
 * Kullanım:
 * 1. .env.local dosyanıza GMAIL_CLIENT_ID ve GMAIL_CLIENT_SECRET ekleyin
 * 2. node scripts/gmail-get-refresh-token.mjs
 * 3. Tarayıcıda açılan URL'ye gidin, izin verin
 * 4. Dönen refresh token'ı .env.local dosyanıza GMAIL_REFRESH_TOKEN olarak kaydedin
 */

import { createServer } from "node:http";
import { google } from "googleapis";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filename) {
    const filePath = resolve(process.cwd(), filename);
    if (!existsSync(filePath)) return;

    const content = readFileSync(filePath, "utf8");
    for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;

        const separatorIndex = trimmed.indexOf("=");
        if (separatorIndex === -1) continue;

        const key = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
            process.env[key] = value;
        }
    }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
const redirectUri = process.env.GMAIL_REDIRECT_URI || "http://localhost:3001/oauth2callback";

if (!clientId || !clientSecret) {
    console.error("GMAIL_CLIENT_ID ve GMAIL_CLIENT_SECRET .env.local dosyasında tanımlı olmalı.");
    process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
});

const server = createServer(async (req, res) => {
    if (!req.url?.startsWith("/oauth2callback")) {
        res.writeHead(404);
        res.end("Not found");
        return;
    }

    const url = new URL(req.url, "http://localhost:3001");
    const code = url.searchParams.get("code");

    if (!code) {
        res.writeHead(400);
        res.end("Authorization code bulunamadı.");
        server.close();
        return;
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Refresh token alındı.</h1><p>Bu pencereyi kapatabilirsiniz. Terminal çıktısına bakın.</p>");

        console.log("\nGmail API token bilgileri:\n");
        console.log(`GMAIL_REFRESH_TOKEN=${tokens.refresh_token || ""}`);
        if (!tokens.refresh_token) {
            console.log("\nUyarı: refresh_token dönmedi. Google hesabından uygulama erişimini kaldırıp tekrar deneyin.");
        }
    } catch (error) {
        res.writeHead(500);
        res.end("Token alınırken hata oluştu.");
        console.error(error);
    } finally {
        server.close();
    }
});

server.listen(3001, () => {
    console.log("Gmail OAuth yardımcı sunucusu http://localhost:3001 üzerinde çalışıyor.");
    console.log("\nBu URL'yi tarayıcıda açın ve izin verin:\n");
    console.log(authUrl);
});
