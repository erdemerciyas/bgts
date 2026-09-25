import type { ScholarshipData } from "./schema";

/** Burs başvurusu değerlerinin Türkçe gösterimi (e-posta + Excel). */

const OPTION_LABELS: Record<string, Record<string, string>> = {
    gender: { female: "Kadın", male: "Erkek" },
    maritalStatus: { single: "Bekâr", married: "Evli", divorced: "Boşanmış", widowed: "Dul" },
    yesNo: { yes: "Evet", no: "Hayır" },
    grade: { prep: "Hazırlık", "1": "1. Sınıf", "2": "2. Sınıf", "3": "3. Sınıf", "4": "4. Sınıf", "5": "5. Sınıf", "6": "6. Sınıf" },
    housing: { rent: "Kira", owned: "Mülk" },
};

export const opt = (group: string, value: string) => OPTION_LABELS[group]?.[value] ?? value;
export const yes = (value: string) => opt("yesNo", value);
export const money = (value: string) => (value ? `${Number(value).toLocaleString("tr-TR")} ₺` : "");
export const formatDate = (value: string) => (value ? value.split("-").reverse().join(".") : "");

export type Column = { header: string; width: number; value: (d: ScholarshipData) => string | number };

const num = (value: string) => (value ? Number(value) : "");

/** Form bölümleri ve sütunları — sıra formdaki adım sırasını izler (Excel + yönetim önizlemesi). */
export const SECTIONS: { title: string; columns: Column[] }[] = [
    {
        title: "Kişisel Bilgiler",
        columns: [
            { header: "Ad", width: 16, value: (d) => d.firstName },
            { header: "Soyad", width: 16, value: (d) => d.lastName },
            { header: "Doğum Yeri (İl)", width: 16, value: (d) => d.birthCity },
            { header: "Doğum Yeri (İlçe)", width: 16, value: (d) => d.birthDistrict },
            { header: "Doğum Tarihi", width: 13, value: (d) => formatDate(d.birthDate) },
            { header: "Cinsiyet", width: 10, value: (d) => opt("gender", d.gender) },
            { header: "Medeni Hal", width: 12, value: (d) => opt("maritalStatus", d.maritalStatus) },
            { header: "Uyruk", width: 12, value: (d) => d.nationality },
            { header: "Anne Adı", width: 14, value: (d) => d.motherName },
            { header: "Baba Adı", width: 14, value: (d) => d.fatherName },
        ],
    },
    {
        title: "Eğitim",
        columns: [
            { header: "Üniversite", width: 28, value: (d) => d.university },
            { header: "Fakülte", width: 24, value: (d) => d.faculty },
            { header: "Bölüm", width: 24, value: (d) => d.department },
            { header: "Sınıf", width: 10, value: (d) => opt("grade", d.grade) },
            { header: "Giriş Tarihi", width: 13, value: (d) => formatDate(d.entryDate) },
            { header: "Hazırlık Okudu mu?", width: 12, value: (d) => yes(d.prepAttended) },
            { header: "GNO", width: 8, value: (d) => (d.gpa ? Number(d.gpa.replace(",", ".")) : "") },
            { header: "Mezun Olunan Lise", width: 24, value: (d) => d.highSchool },
        ],
    },
    {
        title: "Aile & Gelir",
        columns: [
            { header: "Baba Hayatta mı?", width: 12, value: (d) => yes(d.fatherAlive) },
            { header: "Babanın İşi", width: 18, value: (d) => d.fatherJob },
            { header: "Babanın Net Maaşı (₺)", width: 14, value: (d) => num(d.fatherIncome) },
            { header: "Anne Hayatta mı?", width: 12, value: (d) => yes(d.motherAlive) },
            { header: "Annenin İşi", width: 18, value: (d) => d.motherJob },
            { header: "Annenin Net Maaşı (₺)", width: 14, value: (d) => num(d.motherIncome) },
            { header: "Çalışan Kişi Sayısı", width: 10, value: (d) => num(d.workingCount) },
            { header: "Diğer Gelirler (₺)", width: 14, value: (d) => num(d.otherIncome) },
            { header: "Toplam Aylık Gelir (₺)", width: 14, value: (d) => num(d.totalIncome) },
            { header: "Veli Telefonu", width: 15, value: (d) => d.guardianPhone },
            { header: "Ev Durumu", width: 10, value: (d) => opt("housing", d.housing) },
            { header: "Kira Tutarı (₺)", width: 12, value: (d) => num(d.rentAmount) },
        ],
    },
    {
        title: "Kardeşler",
        columns: [
            { header: "Kardeşi Var mı?", width: 10, value: (d) => yes(d.hasSiblings) },
            { header: "Kardeş Sayısı (aday dahil)", width: 10, value: (d) => num(d.siblingCount) },
            {
                header: "Kardeşler",
                width: 50,
                value: (d) =>
                    d.siblings
                        .map((s) => `${s.fullName} (${[`${s.age} yaş`, s.school, s.job, opt("maritalStatus", s.maritalStatus)].filter(Boolean).join(", ")})`)
                        .join("; "),
            },
        ],
    },
    {
        title: "İletişim",
        columns: [
            { header: "Ev Adresi", width: 40, value: (d) => d.address },
            { header: "Telefon", width: 15, value: (d) => d.phone },
            { header: "İkinci Telefon", width: 15, value: (d) => d.phone2 },
            { header: "E-posta", width: 28, value: (d) => d.email },
        ],
    },
    {
        title: "Onaylar",
        columns: [
            { header: "KVKK Okundu", width: 10, value: (d) => (d.kvkkRead ? "Evet" : "Hayır") },
            { header: "Açık Rıza", width: 10, value: (d) => (d.consent ? "Evet" : "Hayır") },
        ],
    },
];

export const EXPORT_COLUMNS: Column[] = SECTIONS.flatMap((s) => s.columns);

export const toRow = (d: ScholarshipData) => EXPORT_COLUMNS.map((c) => c.value(d));
