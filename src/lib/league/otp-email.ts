import { escapeHtml } from "@/lib/utils";
import { getLeagueAbsoluteUrl, getLeagueDisplayUrl } from "@/lib/league/urls";

/** BGTS Lig — sarı/lacivert OTP mail şablonu (web arayüzü ile uyumlu) */
export function buildLeagueOtpEmailHtml(name: string, code: string): string {
  const safeName = escapeHtml(name);
  const safeCode = escapeHtml(code);
  const displayCode = safeCode.split("").join(" ");
  const leagueUrl = escapeHtml(getLeagueAbsoluteUrl());
  const leagueLabel = escapeHtml(getLeagueDisplayUrl());

  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BGTS Lig — Doğrulama Kodu</title>
</head>
<body style="margin:0;padding:0;background:#0d1826;color:#eaf0f8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0d1826;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;background:#13233a;border:1px solid #24364f;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 10px;background:linear-gradient(180deg, rgba(255,212,59,0.08), transparent 80%);">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#8da2bc;font-weight:700;">BGTS Lig</p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:1.1;letter-spacing:0.02em;text-transform:uppercase;color:#eaf0f8;font-weight:800;">E-postanı doğrula</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 32px 28px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 8px;font-size:16px;color:#eaf0f8;">Merhaba ${safeName},</p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.55;color:#8da2bc;">Yarışmaya devam etmek için aşağıdaki 6 haneli kodu doğrulama ekranına gir. Kod <strong style="color:#eaf0f8;">10 dakika</strong> geçerlidir.</p>
              <div style="text-align:center;padding:22px 16px;background:#0c1727;border:1px solid #24364f;border-radius:12px;margin:0 0 22px;">
                <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#8da2bc;font-weight:600;">Doğrulama kodun</p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:40px;letter-spacing:0.32em;font-weight:800;color:#ffd43b;font-variant-numeric:tabular-nums;">${displayCode}</p>
              </div>
              <p style="margin:0;font-size:13px;line-height:1.55;color:#8da2bc;">Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin. Kod yalnızca <strong style="color:#eaf0f8;">@bgts.com</strong> hesabınla kullanılabilir.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 32px;border-top:1px solid #24364f;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8da2bc;">
              BGTS · Personel Ligi · <a href="${leagueUrl}" style="color:#ffd43b;text-decoration:none;font-weight:600;">${leagueLabel}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
