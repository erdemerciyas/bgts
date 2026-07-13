import { escapeHtml } from "@/lib/utils";

/** Cortex/League uyumlu OTP mail şablonu */
export function buildLeagueOtpEmailHtml(name: string, code: string): string {
  const safeName = escapeHtml(name);
  const safeCode = escapeHtml(code);

  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BGTS League Doğrulama</title>
</head>
<body style="margin:0;padding:0;background:#0c0e12;color:#f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0c0e12;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px;background:#141820;border:1px solid rgba(255,255,255,0.08);border-radius:8px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px;background:radial-gradient(ellipse 80% 70% at 0% 0%, rgba(14,165,233,0.14), transparent 55%);">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7dd3fc;font-weight:600;">BGTS League</p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.2;letter-spacing:-0.02em;color:#f1f5f9;font-weight:600;">Doğrulama kodun</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 28px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 8px;font-size:15px;color:#f1f5f9;">Merhaba ${safeName},</p>
              <p style="margin:0 0 22px;font-size:14px;line-height:1.55;color:#94a3b8;">Yarışmaya devam etmek için aşağıdaki 6 haneli kodu doğrulama ekranına gir.</p>
              <div style="text-align:center;padding:18px 12px;background:#0c0e12;border:1px solid rgba(56,189,248,0.28);border-radius:8px;margin:0 0 20px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:34px;letter-spacing:0.28em;font-weight:700;color:#7dd3fc;font-variant-numeric:tabular-nums;">${safeCode}</p>
              </div>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#64748b;">Kod 10 dakika geçerlidir. Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 28px;border-top:1px solid rgba(255,255,255,0.08);font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#64748b;">
              BGTS · Internal League
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
