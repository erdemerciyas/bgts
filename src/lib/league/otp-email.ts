import { escapeHtml } from "@/lib/utils";

/** BGTS LİG — kurumsal OTP mail şablonu */
export function buildLeagueOtpEmailHtml(name: string, code: string): string {
  const safeName = escapeHtml(name);
  const safeCode = escapeHtml(code);
  const digits = safeCode.split("");

  const digitCells = digits
    .map(
      (d) =>
        `<td style="width:42px;height:50px;text-align:center;vertical-align:middle;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;font-family:'Courier New',Courier,monospace;font-size:24px;font-weight:700;color:#0f172a;letter-spacing:0.05em;">${d}</td>`
    )
    .join('<td style="width:8px;"></td>');

  return `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BGTS LİG Doğrulama</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;color:#1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px;background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.06);">
          <tr>
            <td style="padding:0;">
              <div style="height:3px;background:#0284c7;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 28px 16px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#64748b;font-weight:600;">BGTS LİG</p>
              <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#0f172a;">Doğrulama Kodunuz</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.55;color:#64748b;">Personel bilgi yarışmasına giriş için aşağıdaki kodu kullanın.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 28px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 6px;font-size:15px;color:#1e293b;">Merhaba ${safeName},</p>
              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#475569;">Doğrulama ekranına 6 haneli kodu girerek işleminizi tamamlayabilirsiniz.</p>
              <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:0 auto 24px;">
                <tr>${digitCells}</tr>
              </table>
              <p style="margin:0;font-size:13px;line-height:1.55;color:#64748b;text-align:center;padding:12px 14px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">
                Bu kod <strong style="color:#1e293b;">10 dakika</strong> geçerlidir. Yalnızca <strong style="color:#1e293b;">@bgts.com</strong> adresleri kabul edilir.
              </p>
              <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;text-align:center;">Bu isteği siz yapmadıysanız bu e-postayı dikkate almayın.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.06em;color:#94a3b8;text-align:center;">
              BilgeAdam Technology &amp; Software · İnsan Kaynakları
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
