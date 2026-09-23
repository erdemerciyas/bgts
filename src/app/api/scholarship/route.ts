import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { escapeHtml } from "@/lib/utils";
import { normalizeScholarship, validateScholarship, type ScholarshipData } from "@/lib/scholarship/schema";

// Cloudflare test secret'ı her doğrulamayı geçirir — yalnızca geliştirme ortamında yedek olarak kullanılır.
const DEV_TURNSTILE_SECRET = "1x0000000000000000000000000000000AA";

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
    const secret =
        process.env.TURNSTILE_SECRET_KEY ||
        (process.env.NODE_ENV !== "production" ? DEV_TURNSTILE_SECRET : "");
    if (!secret) {
        console.error("Burs Başvurusu: TURNSTILE_SECRET_KEY tanımlı değil.");
        return false;
    }

    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);

    try {
        const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body,
        });
        const data = (await res.json()) as { success?: boolean };
        return data.success === true;
    } catch (error) {
        console.error("Turnstile doğrulama hatası:", error);
        return false;
    }
}

/* ── E-posta içeriği (BGTS ekibine gider, Türkçe) ── */

const OPTION_LABELS: Record<string, Record<string, string>> = {
    gender: { female: "Kadın", male: "Erkek" },
    maritalStatus: { single: "Bekâr", married: "Evli", divorced: "Boşanmış", widowed: "Dul" },
    yesNo: { yes: "Evet", no: "Hayır" },
    grade: { prep: "Hazırlık", "1": "1. Sınıf", "2": "2. Sınıf", "3": "3. Sınıf", "4": "4. Sınıf", "5": "5. Sınıf", "6": "6. Sınıf" },
    housing: { rent: "Kira", owned: "Mülk" },
};

const opt = (group: string, value: string) => OPTION_LABELS[group]?.[value] ?? value;
const money = (value: string) => (value ? `${Number(value).toLocaleString("tr-TR")} ₺` : "");
const formatDate = (value: string) => (value ? value.split("-").reverse().join(".") : "");

const cell = (value: string) =>
    value ? escapeHtml(value).replace(/\n/g, "<br>") : '<span style="color:#94a3b8">—</span>';

const TH = 'style="text-align:left;padding:8px 12px;background:#f1f5f9;border:1px solid #e2e8f0;width:40%;font-weight:600;color:#334155"';
const TD = 'style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f172a"';

function section(title: string, rows: [string, string][]) {
    return `
      <h3 style="margin:24px 0 8px;color:#0056A7;font-size:16px">${escapeHtml(title)}</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows.map(([label, value]) => `<tr><th ${TH}>${escapeHtml(label)}</th><td ${TD}>${cell(value)}</td></tr>`).join("")}
      </table>`;
}

function siblingsTable(d: ScholarshipData) {
    if (d.siblings.length === 0) return `<p style="font-size:14px;color:#475569">Kardeş yok.</p>`;
    const heads = ["#", "Ad Soyad", "Yaş", "Okul / Sınıf", "İşi", "Medeni Durum"];
    return `
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr>${heads.map((h) => `<th ${TH.replace("width:40%;", "")}>${h}</th>`).join("")}</tr>
        ${d.siblings
            .map(
                (s, i) =>
                    `<tr>${[String(i + 1), s.fullName, s.age, s.school, s.job, opt("maritalStatus", s.maritalStatus)]
                        .map((v) => `<td ${TD}>${cell(v)}</td>`)
                        .join("")}</tr>`
            )
            .join("")}
      </table>`;
}

function buildEmail(d: ScholarshipData) {
    const yes = (v: string) => opt("yesNo", v);
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:720px;margin:0 auto;color:#0f172a">
      <h2 style="margin:0 0 4px;color:#0f172a">Yeni Burs Başvurusu</h2>
      <p style="margin:0;color:#64748b;font-size:13px">${escapeHtml(new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" }))}</p>
      ${section("Kişisel Bilgiler", [
          ["Ad Soyad", `${d.firstName} ${d.lastName}`],
          ["Doğum Yeri", `${d.birthCity} / ${d.birthDistrict}`],
          ["Doğum Tarihi", formatDate(d.birthDate)],
          ["Cinsiyet", opt("gender", d.gender)],
          ["Medeni Hal", opt("maritalStatus", d.maritalStatus)],
          ["Uyruk", d.nationality],
          ["Anne Adı", d.motherName],
          ["Baba Adı", d.fatherName],
      ])}
      ${section("Eğitim", [
          ["Üniversite", d.university],
          ["Fakülte", d.faculty],
          ["Bölüm", d.department],
          ["Sınıf", opt("grade", d.grade)],
          ["Giriş Tarihi", formatDate(d.entryDate)],
          ["Hazırlık Okudu mu?", yes(d.prepAttended)],
          ["GNO (4'lük)", d.gpa],
          ["Mezun Olunan Lise", d.highSchool],
      ])}
      ${section("Aile & Gelir", [
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
      ${section("Kardeşler", [
          ["Kardeşi Var mı?", yes(d.hasSiblings)],
          ["Kardeş Sayısı (kendisi dahil)", d.siblingCount],
      ])}
      <div style="margin-top:8px">${siblingsTable(d)}</div>
      ${section("İletişim", [
          ["Ev Adresi", d.address],
          ["Telefon", d.phone],
          ["İkinci Telefon", d.phone2],
          ["E-posta", d.email],
      ])}
      ${section("Onaylar", [
          ["KVKK Aydınlatma Metni", d.kvkkRead ? "Okundu" : "Hayır"],
          ["Açık Rıza", d.consent ? "Verildi" : "Hayır"],
      ])}
    </div>`;
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { data?: unknown; turnstileToken?: unknown; website?: unknown };

        // Honeypot: bot'a başarılı gibi görün, e-posta gönderme.
        if (typeof body.website === "string" && body.website.trim() !== "") {
            return NextResponse.json({ message: "Başvuru alındı." });
        }

        const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip");
        const token = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
        if (!token || !(await verifyTurnstile(token, ip))) {
            return NextResponse.json({ message: "Güvenlik doğrulaması başarısız.", code: "turnstile" }, { status: 400 });
        }

        const result = validateScholarship(body.data);
        if (!result.success) {
            return NextResponse.json({ message: "Geçersiz form verisi.", errors: result.errors }, { status: 400 });
        }

        const d = normalizeScholarship(result.data);

        await sendEmail({
            to: process.env.SCHOLARSHIP_EMAIL || process.env.CONTACT_EMAIL || "info@bgts.com",
            subject: `Burs Başvurusu – ${d.firstName} ${d.lastName} – ${d.university}`,
            html: buildEmail(d),
            replyTo: d.email,
        });

        return NextResponse.json({ message: "Başvuru alındı." });
    } catch (error) {
        console.error("Burs Başvurusu Hatası:", error);
        return NextResponse.json({ message: "Başvuru gönderilirken bir hata oluştu." }, { status: 500 });
    }
}
