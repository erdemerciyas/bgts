import { escapeHtml } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";
import type { ScholarshipData } from "./schema";
import { EMAIL_LOGO_CID } from "./email-logo";

/**
 * BGTS ekibine giden burs başvurusu e-postası (Türkçe).
 * E-posta istemcisi uyumluluğu için tablo tabanlı yerleşim ve satır içi stiller kullanılır.
 */

const BRAND = "#0056A7";
const BRAND_DARK = "#003a73";
const NAVY = "#0b1f3a";
const INK = "#0f172a";
const MUTED = "#64748b";
const LINE = "#e6ebf2";
const SOFT = "#f4f7fb";
const FONT = "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif";

const OPTION_LABELS: Record<string, Record<string, string>> = {
    gender: { female: "Kadın", male: "Erkek" },
    maritalStatus: { single: "Bekâr", married: "Evli", divorced: "Boşanmış", widowed: "Dul" },
    yesNo: { yes: "Evet", no: "Hayır" },
    grade: { prep: "Hazırlık", "1": "1. Sınıf", "2": "2. Sınıf", "3": "3. Sınıf", "4": "4. Sınıf", "5": "5. Sınıf", "6": "6. Sınıf" },
    housing: { rent: "Kira", owned: "Mülk" },
};

const opt = (group: string, value: string) => OPTION_LABELS[group]?.[value] ?? value;
const yes = (value: string) => opt("yesNo", value);
const money = (value: string) => (value ? `${Number(value).toLocaleString("tr-TR")} ₺` : "");
const formatDate = (value: string) => (value ? value.split("-").reverse().join(".") : "");
const telHref = (phone: string) => `tel:+90${phone.replace(/\D/g, "").replace(/^0/, "")}`;

const esc = (value: string) => escapeHtml(value).replace(/\n/g, "<br>");
const valueOrDash = (value: string) =>
    value ? esc(value) : `<span style="color:#a0aec0">—</span>`;

/** Başvuru referans numarası: BRS-YYAAGG-XXXX */
export function scholarshipReference(date = new Date()) {
    const ymd = date.toISOString().slice(2, 10).replace(/-/g, "");
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `BRS-${ymd}-${rand}`;
}

function section(no: number, title: string, rows: [string, string][], extra = "") {
    return `
    <tr><td style="padding:28px 32px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td width="28" valign="middle">
            <div style="width:24px;height:24px;line-height:24px;border-radius:7px;background:${BRAND};color:#ffffff;font:700 12px ${FONT};text-align:center">${no}</div>
          </td>
          <td valign="middle" style="padding-left:10px;font:700 15px ${FONT};color:${INK};letter-spacing:-0.1px">${escapeHtml(title)}</td>
        </tr>
      </table>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;border:1px solid ${LINE};border-radius:12px;border-collapse:separate;overflow:hidden">
        ${rows
            .map(
                ([label, value], i) => `
        <tr>
          <td width="42%" style="padding:11px 16px;font:500 13px ${FONT};color:${MUTED};background:${SOFT};${i ? `border-top:1px solid ${LINE};` : ""}">${escapeHtml(label)}</td>
          <td style="padding:11px 16px;font:600 14px ${FONT};color:${INK};${i ? `border-top:1px solid ${LINE};` : ""}">${valueOrDash(value)}</td>
        </tr>`
            )
            .join("")}
      </table>${extra}
    </td></tr>`;
}

function stat(label: string, value: string) {
    return `
    <td width="25%" valign="top" style="padding:14px 12px;border-right:1px solid ${LINE}">
      <div style="font:600 10px ${FONT};color:${MUTED};text-transform:uppercase;letter-spacing:0.6px">${escapeHtml(label)}</div>
      <div style="margin-top:4px;font:700 15px ${FONT};color:${INK}">${valueOrDash(value)}</div>
    </td>`;
}

function siblingsBlock(d: ScholarshipData) {
    if (d.siblings.length === 0) {
        return `<p style="margin:12px 0 0;font:500 13px ${FONT};color:${MUTED}">Adayın kardeşi bulunmuyor.</p>`;
    }
    const heads = ["#", "Ad Soyad", "Yaş", "Okul / Sınıf", "İşi", "Medeni Durum"];
    const th = (h: string) =>
        `<th align="left" style="padding:10px 12px;font:600 11px ${FONT};color:#ffffff;background:${BRAND};text-transform:uppercase;letter-spacing:0.4px">${h}</th>`;
    return `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;border:1px solid ${LINE};border-radius:12px;border-collapse:separate;overflow:hidden">
        <tr>${heads.map(th).join("")}</tr>
        ${d.siblings
            .map(
                (s, i) => `
        <tr style="background:${i % 2 ? SOFT : "#ffffff"}">
          ${[String(i + 1), s.fullName, s.age, s.school, s.job, opt("maritalStatus", s.maritalStatus)]
              .map(
                  (v, j) =>
                      `<td style="padding:10px 12px;font:${j === 1 ? 600 : 500} 13px ${FONT};color:${j === 0 ? MUTED : INK};border-top:1px solid ${LINE}">${valueOrDash(v)}</td>`
              )
              .join("")}
        </tr>`
            )
            .join("")}
      </table>`;
}

function consentBadge(label: string, ok: boolean) {
    const color = ok ? "#047857" : "#b91c1c";
    const bg = ok ? "#ecfdf5" : "#fef2f2";
    return `<span style="display:inline-block;margin:0 8px 8px 0;padding:7px 12px;border-radius:999px;background:${bg};color:${color};font:600 12px ${FONT}">${ok ? "✓" : "✕"} ${escapeHtml(label)}</span>`;
}

function button(href: string, label: string, primary: boolean) {
    return `<a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 20px;border-radius:10px;font:700 13px ${FONT};text-decoration:none;${
        primary ? `background:${BRAND};color:#ffffff` : `background:#ffffff;color:${BRAND};border:1.5px solid #c9d8ee`
    }">${escapeHtml(label)}</a>`;
}

export function buildScholarshipEmail(d: ScholarshipData, reference: string, sentAt = new Date()) {
    const fullName = `${d.firstName} ${d.lastName}`;
    const date = sentAt.toLocaleString("tr-TR", { timeZone: "Europe/Istanbul", dateStyle: "long", timeStyle: "short" });
    const program = [d.faculty, d.department].filter(Boolean).join(" · ");
    const preheader = `${fullName} · ${d.university} · Toplam gelir ${money(d.totalIncome)}`;
    const siblingTotal = d.siblings.length ? `${d.siblings.length} kardeş` : "Yok";

    return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>Burs Başvurusu – ${escapeHtml(fullName)}</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#eef2f7">
<tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.08)">

  <!-- Başlık -->
  <tr><td bgcolor="${BRAND}" style="background:${BRAND};background-image:linear-gradient(135deg,${BRAND_DARK} 0%,${BRAND} 55%,#1a73c9 100%);padding:28px 32px 30px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td valign="middle">
          <img src="cid:${EMAIL_LOGO_CID}" width="118" height="52" alt="BGTS" style="display:block;border:0;width:118px;height:auto;font:700 22px ${FONT};color:#ffffff">
        </td>
        <td align="right" valign="middle">
          <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,0.14);border:1px solid rgba(255,255,255,0.28);color:#ffffff;font:700 11px ${FONT};letter-spacing:0.8px;text-transform:uppercase">Burs Başvurusu</span>
        </td>
      </tr>
    </table>
    <div style="margin-top:26px;font:700 24px ${FONT};color:#ffffff;letter-spacing:-0.3px">Yeni burs başvurusu alındı</div>
    <div style="margin-top:6px;font:400 13px ${FONT};color:#cfe0f5">${escapeHtml(date)} &nbsp;·&nbsp; Ref: <span style="color:#ffffff;font-weight:600">${escapeHtml(reference)}</span></div>
  </td></tr>

  <!-- Aday özeti -->
  <tr><td style="padding:28px 32px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${LINE};border-radius:14px;border-collapse:separate;overflow:hidden">
      <tr><td style="padding:20px 20px 16px">
        <div style="font:600 11px ${FONT};color:${BRAND};text-transform:uppercase;letter-spacing:0.8px">Aday</div>
        <div style="margin-top:4px;font:700 22px ${FONT};color:${INK};letter-spacing:-0.2px">${escapeHtml(fullName)}</div>
        <div style="margin-top:4px;font:500 14px ${FONT};color:#334155">${escapeHtml(d.university)}</div>
        <div style="margin-top:2px;font:400 13px ${FONT};color:${MUTED}">${escapeHtml(program)}${program ? " · " : ""}${escapeHtml(opt("grade", d.grade))}</div>
      </td></tr>
      <tr><td style="border-top:1px solid ${LINE};background:${SOFT}">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            ${stat("Toplam Gelir", money(d.totalIncome))}
            ${stat("GNO", d.gpa)}
            ${stat("Ev Durumu", opt("housing", d.housing))}
            <td width="25%" valign="top" style="padding:14px 12px">
              <div style="font:600 10px ${FONT};color:${MUTED};text-transform:uppercase;letter-spacing:0.6px">Kardeş</div>
              <div style="margin-top:4px;font:700 15px ${FONT};color:${INK}">${escapeHtml(siblingTotal)}</div>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
    <div style="margin-top:16px">
      ${button(`mailto:${encodeURIComponent(d.email)}?subject=${encodeURIComponent(`BGTS Burs Başvurunuz (${reference})`)}`, "Adaya E-posta Gönder", true)}
      ${button(telHref(d.phone), `Ara: ${d.phone}`, false)}
    </div>
  </td></tr>

  ${section(1, "Kişisel Bilgiler", [
      ["Ad Soyad", fullName],
      ["Doğum Yeri", `${d.birthCity} / ${d.birthDistrict}`],
      ["Doğum Tarihi", formatDate(d.birthDate)],
      ["Cinsiyet", opt("gender", d.gender)],
      ["Medeni Hal", opt("maritalStatus", d.maritalStatus)],
      ["Uyruk", d.nationality],
      ["Anne Adı", d.motherName],
      ["Baba Adı", d.fatherName],
  ])}

  ${section(2, "Eğitim", [
      ["Üniversite", d.university],
      ["Fakülte", d.faculty],
      ["Bölüm", d.department],
      ["Sınıf", opt("grade", d.grade)],
      ["Giriş Tarihi", formatDate(d.entryDate)],
      ["Hazırlık Okudu mu?", yes(d.prepAttended)],
      ["GNO (4'lük)", d.gpa],
      ["Mezun Olunan Lise", d.highSchool],
  ])}

  ${section(3, "Aile & Gelir", [
      ["Baba Hayatta mı?", yes(d.fatherAlive)],
      ["Babanın İşi", d.fatherJob],
      ["Babanın Net Maaşı", money(d.fatherIncome)],
      ["Anne Hayatta mı?", yes(d.motherAlive)],
      ["Annenin İşi", d.motherJob],
      ["Annenin Net Maaşı", money(d.motherIncome)],
      ["Çalışan Kişi Sayısı", d.workingCount],
      ["Diğer Gelirler", money(d.otherIncome)],
      ["Toplam Aylık Gelir", money(d.totalIncome)],
      ["Veli Telefonu", d.guardianPhone],
      ["Ev Durumu", opt("housing", d.housing)],
      ["Kira Tutarı", money(d.rentAmount)],
  ])}

  ${section(4, "Kardeşler", [
      ["Kardeşi Var mı?", yes(d.hasSiblings)],
      ["Kardeş Sayısı (aday dahil)", d.siblingCount],
  ], siblingsBlock(d))}

  ${section(5, "İletişim", [
      ["Ev Adresi", d.address],
      ["Telefon", d.phone],
      ["İkinci Telefon", d.phone2],
      ["E-posta", d.email],
  ])}

  <!-- Onaylar -->
  <tr><td style="padding:28px 32px 32px">
    <div style="font:700 15px ${FONT};color:${INK}">Onaylar</div>
    <div style="margin-top:12px">
      ${consentBadge("KVKK Aydınlatma Metni okundu", d.kvkkRead)}
      ${consentBadge("Açık rıza verildi", d.consent)}
      ${consentBadge("Robot doğrulaması geçti", true)}
    </div>
  </td></tr>

  <!-- Alt bilgi -->
  <tr><td style="background:${NAVY};padding:24px 32px">
    <div style="font:600 12px ${FONT};color:#ffffff">Gizlilik uyarısı</div>
    <div style="margin-top:6px;font:400 12px/1.6 ${FONT};color:#b6c3d6">Bu ileti, 6698 sayılı KVKK kapsamında kişisel ve hassas nitelikte veri (aile gelir bilgileri dahil) içermektedir. Yalnızca yetkili burs değerlendirme ekibi tarafından, burs değerlendirmesi amacıyla işlenmeli ve üçüncü kişilerle paylaşılmamalıdır.</div>
    <div style="margin-top:16px;padding-top:14px;border-top:1px solid #1e3354;font:400 11px/1.6 ${FONT};color:#8093ad">
      Bu e-posta ${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))} burs başvuru formu aracılığıyla otomatik oluşturulmuştur. Yanıtla dediğinizde doğrudan adaya iletilir.<br>
      BGTS – Business &amp; Global Technology Solutions · Maslak Mah. Büyükdere Cad. No:128, 34398 Sarıyer/İstanbul
    </div>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}
