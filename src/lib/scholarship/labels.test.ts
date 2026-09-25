import { describe, expect, it } from "vitest";
import { EMPTY_SCHOLARSHIP, normalizeScholarship, type ScholarshipData } from "./schema";
import { EXPORT_COLUMNS, toRow } from "./labels";

const base: ScholarshipData = {
    ...EMPTY_SCHOLARSHIP,
    firstName: "Ayşe", lastName: "Yılmaz", birthDate: "2004-05-12", gender: "female", maritalStatus: "single",
    grade: "2", gpa: "3,25", prepAttended: "yes",
    fatherAlive: "yes", fatherJob: "Memur", fatherIncome: "30000", motherAlive: "no",
    totalIncome: "30000", housing: "owned",
    hasSiblings: "yes", siblingCount: "3",
    siblings: [
        { fullName: "Mehmet Yılmaz", age: "15", school: "Lise 9", job: "", maritalStatus: "single" },
        { fullName: "Zeynep Yılmaz", age: "28", school: "", job: "Öğretmen", maritalStatus: "married" },
    ],
    kvkkRead: true, consent: true,
};

const cell = (d: ScholarshipData, header: string) => toRow(d)[EXPORT_COLUMNS.findIndex((c) => c.header === header)];

describe("scholarship export row", () => {
    it("her sütun için bir değer üretir", () => {
        expect(toRow(base)).toHaveLength(EXPORT_COLUMNS.length);
    });

    it("seçimleri Türkçe etikete, tutarları sayıya çevirir", () => {
        expect(cell(base, "Cinsiyet")).toBe("Kadın");
        expect(cell(base, "Sınıf")).toBe("2. Sınıf");
        expect(cell(base, "Doğum Tarihi")).toBe("12.05.2004");
        expect(cell(base, "GNO")).toBe(3.25);
        expect(cell(base, "Babanın Net Maaşı (₺)")).toBe(30000);
        expect(cell(base, "Kira Tutarı (₺)")).toBe("");
        expect(cell(base, "KVKK Okundu")).toBe("Evet");
    });

    it("kardeşleri tek hücrede birleştirir", () => {
        expect(cell(base, "Kardeşler")).toBe("Mehmet Yılmaz (15 yaş, Lise 9, Bekâr); Zeynep Yılmaz (28 yaş, Öğretmen, Evli)");
        expect(cell(normalizeScholarship({ ...base, hasSiblings: "no" }), "Kardeşler")).toBe("");
    });
});
