import { escapeHtml } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";
import type { ScholarshipData } from "./schema";
import { EMAIL_LOGO_CID } from "./email-logo";

/**
 * Başvuru sahibine giden "başvurunuz alındı" onay e-postası (Türkçe).
 * Hassas veri (gelir, aile) içermez. E-posta istemcisi uyumluluğu için tablo tabanlı yerleşim ve satır içi stiller kullanılır.
 */

const BRAND = "#0056A7";
const BRAND_DARK = "#003a73";
const NAVY = "#0b1f3a";
const INK = "#0f172a";
const MUTED = "#64748b";
const LINE = "#e6ebf2";
const SOFT = "#f4f7fb";
const FONT = "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif";

/** Başvuru referans numarası: BRS-YYAAGG-XXXX */
export function scholarshipReference(date = new Date()) {
    const ymd = date.toISOString().slice(2, 10).replace(/-/g, "");
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `BRS-${ymd}-${rand}`;
}

function row(label: string, value: string, first = false) {
    const border = first ? "" : `border-top:1px solid ${LINE};`;
    return `
        <tr>
          <td width="40%" style="padding:11px 16px;font:500 13px ${FONT};color:${MUTED};background:${SOFT};${border}">${escapeHtml(label)}</td>
          <td style="padding:11px 16px;font:600 14px ${FONT};color:${INK};${border}">${escapeHtml(value)}</td>
        </tr>`;
}

export function buildConfirmationEmail(d: ScholarshipData, reference: string, sentAt = new Date()) {
    const fullName = `${d.firstName} ${d.lastName}`;
    const date = sentAt.toLocaleString("tr-TR", { timeZone: "Europe/Istanbul", dateStyle: "long", timeStyle: "short" });
    const program = [d.faculty, d.department].filter(Boolean).join(" · ");

    return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Burs Başvurunuz Alındı</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Başvuru numaranız: ${escapeHtml(reference)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f7">
<tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.08)">

  <!-- Başlık -->
  <tr><td bgcolor="${BRAND}" style="background:${BRAND};background-image:linear-gradient(135deg,${BRAND_DARK} 0%,${BRAND} 55%,#1a73c9 100%);padding:28px 32px 30px">
    <img src="cid:${EMAIL_LOGO_CID}" width="118" height="52" alt="BGTS" style="display:block;border:0;width:118px;height:auto;font:700 22px ${FONT};color:#ffffff">
    <div style="margin-top:26px;font:700 24px ${FONT};color:#ffffff;letter-spacing:-0.3px">Burs başvurunuz alındı</div>
    <div style="margin-top:6px;font:400 13px ${FONT};color:#cfe0f5">${escapeHtml(date)}</div>
  </td></tr>

  <!-- Mesaj -->
  <tr><td style="padding:28px 32px 0">
    <p style="margin:0;font:600 16px ${FONT};color:${INK}">Sayın ${escapeHtml(fullName)},</p>
    <p style="margin:12px 0 0;font:400 14px/1.7 ${FONT};color:#334155">BGTS Burs Programı'na yaptığınız başvuru başarıyla alınmıştır. Başvurunuz değerlendirme ekibimiz tarafından incelenecek; sonuç hakkında sizinle e-posta veya telefon yoluyla iletişime geçilecektir.</p>
    <p style="margin:12px 0 0;font:400 14px/1.7 ${FONT};color:#334155">İletişimlerinizde aşağıdaki başvuru numarasını belirtmeniz süreci hızlandıracaktır.</p>
  </td></tr>

  <!-- Özet -->
  <tr><td style="padding:22px 32px 32px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${LINE};border-radius:12px;border-collapse:separate;overflow:hidden">
      ${row("Başvuru Numarası", reference, true)}
      ${row("Başvuru Tarihi", date)}
      ${row("Üniversite", d.university)}
      ${program ? row("Fakülte / Bölüm", program) : ""}
    </table>
  </td></tr>

  <!-- Alt bilgi -->
  <tr><td style="background:${NAVY};padding:24px 32px">
    <div style="font:400 12px/1.6 ${FONT};color:#b6c3d6">Bu e-posta, ${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))} üzerindeki burs başvuru formunu doldurmanız üzerine otomatik olarak gönderilmiştir. Kişisel verileriniz 6698 sayılı KVKK kapsamında, Aydınlatma Metni'nde belirtilen amaçlarla işlenmektedir. Sorularınız için info@bgts.com.tr adresine yazabilirsiniz.</div>
    <div style="margin-top:14px;padding-top:14px;border-top:1px solid #1e3354;font:400 11px/1.6 ${FONT};color:#8093ad">
      BGTS – Business &amp; Global Technology Solutions · Maslak Mah. Büyükdere Cad. No:128, 34398 Sarıyer/İstanbul
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
