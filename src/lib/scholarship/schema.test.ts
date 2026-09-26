import { describe, expect, it } from "vitest";
import {
    EMPTY_SCHOLARSHIP,
    isValidPhone,
    normalizeScholarship,
    stepOfPath,
    validateScholarship,
    validateStep,
    type ScholarshipData,
} from "./schema";

const valid: ScholarshipData = {
    ...EMPTY_SCHOLARSHIP,
    firstName: "Ayşe", lastName: "Yılmaz", birthCity: "Ankara", birthDistrict: "Çankaya",
    birthDate: "2004-05-12", gender: "female", maritalStatus: "single", nationality: "T.C.",
    motherName: "Fatma", fatherName: "Ali",
    university: "ODTÜ", faculty: "Mühendislik", department: "Bilgisayar", grade: "2",
    entryDate: "2023-09-15", prepAttended: "yes", gpa: "3.25", highSchool: "Ankara Fen Lisesi",
    fatherAlive: "yes", fatherJob: "Memur", fatherIncome: "30000",
    motherAlive: "no", motherJob: "", motherIncome: "",
    workingCount: "1", otherIncome: "0", totalIncome: "30000", guardianPhone: "0 (532) 123 45 67",
    housing: "rent", rentAmount: "12000",
    hasSiblings: "yes", siblingCount: "2",
    siblings: [{ fullName: "Mehmet Yılmaz", age: "15", school: "Lise 9", job: "", maritalStatus: "single" }],
    address: "Örnek Mah. 1. Sok. No:1", phone: "05321234567", phone2: "", email: "ayse@example.com",
    kvkkRead: true,
};

describe("scholarship schema", () => {
    it("geçerli başvuruyu kabul eder", () => {
        expect(validateScholarship(valid).success).toBe(true);
    });

    it("boş adım 1 için tüm zorunlu alanları raporlar", () => {
        const errors = validateStep(0, EMPTY_SCHOLARSHIP);
        expect(errors.firstName).toBe("required");
        expect(errors.gender).toBe("required");
        expect(errors.birthDate).toBe("required");
    });

    it("gelecek tarihli doğum tarihini reddeder", () => {
        expect(validateStep(0, { ...valid, birthDate: "2999-01-01" }).birthDate).toBe("invalidDate");
    });

    it("GNO: hazırlıkta gerekmez, sınıf ≥ 1 ise zorunlu ve 0–4 arası", () => {
        expect(validateStep(1, { ...valid, grade: "prep", gpa: "" })).toEqual({});
        expect(validateStep(1, { ...valid, gpa: "" }).gpa).toBe("required");
        expect(validateStep(1, { ...valid, gpa: "4.5" }).gpa).toBe("invalidGpa");
        expect(validateStep(1, { ...valid, gpa: "3,5" })).toEqual({});
    });

    it("koşullu kurallar diğer alan hatalarıyla birlikte raporlanır", () => {
        const errors = validateStep(1, { ...valid, university: "", gpa: "" });
        expect(errors.university).toBe("required");
        expect(errors.gpa).toBe("required");
    });

    it("ebeveyn hayattaysa iş ve maaş zorunlu, değilse değil", () => {
        const errors = validateStep(2, { ...valid, motherAlive: "yes" });
        expect(errors.motherJob).toBe("required");
        expect(errors.motherIncome).toBe("required");
        expect(validateStep(2, { ...valid, fatherAlive: "no", fatherJob: "", fatherIncome: "" })).toEqual({});
    });

    it("kira tutarı yalnızca kirada zorunlu", () => {
        expect(validateStep(2, { ...valid, rentAmount: "" }).rentAmount).toBe("required");
        expect(validateStep(2, { ...valid, housing: "owned", rentAmount: "" })).toEqual({});
    });

    it("kardeş sayısı ve kart sayısı uyumlu olmalı", () => {
        expect(validateStep(3, { ...valid, siblingCount: "3" }).siblingCount).toBe("invalidCount");
        expect(validateStep(3, { ...valid, siblingCount: "" }).siblingCount).toBe("required");
        expect(validateStep(3, { ...valid, hasSiblings: "no", siblingCount: "", siblings: [] })).toEqual({});
        const errors = validateStep(3, { ...valid, siblings: [{ ...valid.siblings[0], fullName: "" }] });
        expect(errors["siblings.0.fullName"]).toBe("required");
        expect(stepOfPath("siblings.0.fullName")).toBe(3);
    });

    it("telefon ve e-posta formatlarını doğrular", () => {
        expect(isValidPhone("0 (532) 123 45 67")).toBe(true);
        expect(isValidPhone("0 (212) 123 45 67")).toBe(true);
        expect(isValidPhone("12345")).toBe(false);
        expect(validateStep(4, { ...valid, phone2: "123" }).phone2).toBe("invalidPhone");
        expect(validateStep(4, { ...valid, email: "x@y" }).email).toBe("invalidEmail");
    });

    it("onaylar olmadan gönderim geçersiz", () => {
        const result = validateScholarship({ ...valid, kvkkRead: false });
        expect(result.success).toBe(false);
        if (!result.success) expect(result.errors.kvkkRead).toBe("mustAccept");
    });

    it("normalize gizli alanları temizler", () => {
        const n = normalizeScholarship({ ...valid, grade: "prep", housing: "owned", hasSiblings: "no" });
        expect(n.gpa).toBe("");
        expect(n.rentAmount).toBe("");
        expect(n.siblings).toEqual([]);
        expect(n.motherJob).toBe("");
    });
});
