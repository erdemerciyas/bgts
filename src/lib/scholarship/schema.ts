import { z } from "zod";

/**
 * Burs başvuru formu şemaları — client (adım bazlı doğrulama) ve server (tam doğrulama)
 * aynı kuralları kullanır. Hata mesajları sözlükteki `scholarship.errors` anahtarlarıdır.
 */

export const GENDERS = ["female", "male"] as const;
export const MARITAL_STATUSES = ["single", "married", "divorced", "widowed"] as const;
export const GRADES = ["prep", "1", "2", "3", "4", "5", "6"] as const;
export const YES_NO = ["yes", "no"] as const;
export const HOUSING = ["rent", "owned"] as const;
export const MAX_SIBLINGS = 10;

export const ERR = {
    required: "required",
    tooLong: "tooLong",
    email: "invalidEmail",
    phone: "invalidPhone",
    date: "invalidDate",
    gpa: "invalidGpa",
    number: "invalidNumber",
    count: "invalidCount",
    accept: "mustAccept",
} as const;

export type ErrorCode = (typeof ERR)[keyof typeof ERR];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const GPA_RE = /^\d(?:[.,]\d{1,2})?$/;

export function phoneDigits(value: string): string {
    const digits = value.replace(/\D/g, "");
    return digits.startsWith("0") ? digits.slice(1) : digits;
}

/** TR telefon: 0 hariç 10 hane, alan kodu 2–5 ile başlar (sabit hat + GSM). */
export function isValidPhone(value: string): boolean {
    return /^[2-5]\d{9}$/.test(phoneDigits(value));
}

function isPastDate(value: string): boolean {
    const date = new Date(`${value}T00:00:00Z`);
    return !Number.isNaN(date.getTime()) && date.getTime() <= Date.now() && date.getUTCFullYear() >= 1900;
}

export function isValidGpa(value: string): boolean {
    if (!GPA_RE.test(value)) return false;
    const n = Number(value.replace(",", "."));
    return n >= 0 && n <= 4;
}

const text = (max = 100) => z.string({ message: ERR.required }).trim().max(max, ERR.tooLong);
const required = (max = 100) => text(max).min(1, ERR.required);
const date = () => required(10).refine((v) => v === "" || (DATE_RE.test(v) && isPastDate(v)), ERR.date);
const phone = () => required(20).refine((v) => v === "" || isValidPhone(v), ERR.phone);
/** Para alanları yalnızca rakam olarak tutulur (biçimlendirme istemcide yapılır). */
const money = () => z.string({ message: ERR.required }).trim().regex(/^\d{0,9}$/, ERR.number);
const choice = <T extends readonly [string, ...string[]]>(values: T) => z.enum(values, { message: ERR.required });

/** Koşullu kurallar ham veri üzerinde çalışır; böylece alan hataları olsa bile tüm hatalar tek seferde gösterilir. */
type Raw = Record<string, unknown>;
type Add = (path: string, code?: ErrorCode) => void;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/* ── Adım 1: Kişisel bilgiler ── */
const step1Shape = {
    firstName: required(60),
    lastName: required(60),
    birthCity: required(60),
    birthDistrict: required(60),
    birthDate: date(),
    gender: choice(GENDERS),
    maritalStatus: choice(MARITAL_STATUSES),
    nationality: required(60),
    motherName: required(60),
    fatherName: required(60),
};

/* ── Adım 2: Eğitim ── */
const step2Shape = {
    university: required(150),
    faculty: required(150),
    department: required(150),
    grade: choice(GRADES),
    entryDate: date(),
    prepAttended: choice(YES_NO),
    gpa: text(4),
    highSchool: required(150),
};

function refineStep2(d: Raw, add: Add) {
    const grade = str(d.grade);
    if (!grade || grade === "prep") return;
    const gpa = str(d.gpa);
    if (!gpa) add("gpa");
    else if (!isValidGpa(gpa)) add("gpa", ERR.gpa);
}

/* ── Adım 3: Aile & gelir ── */
const step3Shape = {
    fatherAlive: choice(YES_NO),
    fatherJob: text(100),
    fatherIncome: money(),
    motherAlive: choice(YES_NO),
    motherJob: text(100),
    motherIncome: money(),
    workingCount: required(2).regex(/^\d{1,2}$/, ERR.number),
    otherIncome: money(),
    totalIncome: money().min(1, ERR.required),
    guardianPhone: phone(),
    housing: choice(HOUSING),
    rentAmount: money(),
};

function refineStep3(d: Raw, add: Add) {
    for (const parent of ["father", "mother"] as const) {
        if (d[`${parent}Alive`] !== "yes") continue;
        if (!str(d[`${parent}Job`])) add(`${parent}Job`);
        if (!str(d[`${parent}Income`])) add(`${parent}Income`);
    }
    if (d.housing === "rent" && !str(d.rentAmount)) add("rentAmount");
}

/* ── Adım 4: Kardeşler ── */
export const siblingSchema = z.object({
    fullName: required(100),
    age: required(3).regex(/^\d{1,3}$/, ERR.number),
    school: text(150),
    job: text(100),
    maritalStatus: choice(MARITAL_STATUSES),
});

const step4Shape = {
    hasSiblings: choice(YES_NO),
    siblingCount: text(2),
    siblings: z.array(siblingSchema).max(MAX_SIBLINGS),
};

function refineStep4(d: Raw, add: Add) {
    if (d.hasSiblings !== "yes") return;
    const raw = str(d.siblingCount);
    if (!raw) return add("siblingCount");
    const count = Number(raw);
    const siblings = Array.isArray(d.siblings) ? d.siblings : [];
    if (!/^\d+$/.test(raw) || count < 2 || count > MAX_SIBLINGS + 1 || siblings.length !== count - 1) {
        add("siblingCount", ERR.count);
    }
}

/* ── Adım 5: İletişim ── */
const step5Shape = {
    address: required(500),
    phone: phone(),
    phone2: text(20),
    email: required(254).regex(EMAIL_RE, ERR.email),
};

function refineStep5(d: Raw, add: Add) {
    const p2 = str(d.phone2);
    if (p2 && !isValidPhone(p2)) add("phone2", ERR.phone);
}

/* ── Adım 6: Onaylar ── */
const step6Shape = {
    kvkkRead: z.boolean({ message: ERR.accept }).refine((v) => v, ERR.accept),
};

const STEPS = [
    { shape: step1Shape },
    { shape: step2Shape, refine: refineStep2 },
    { shape: step3Shape, refine: refineStep3 },
    { shape: step4Shape, refine: refineStep4 },
    { shape: step5Shape, refine: refineStep5 },
    { shape: step6Shape },
];

export const STEP_COUNT = STEPS.length;

const stepSchemas = STEPS.map((s) => z.object(s.shape));

export const scholarshipSchema = z.object({
    ...step1Shape, ...step2Shape, ...step3Shape, ...step4Shape, ...step5Shape, ...step6Shape,
});

export type ScholarshipData = z.infer<typeof scholarshipSchema>;
export type Sibling = z.infer<typeof siblingSchema>;

/** Hata yolunun ait olduğu adım (ör. "siblings.0.fullName" → 3). */
export function stepOfPath(path: string): number {
    const key = path.split(".")[0];
    return STEPS.findIndex((s) => key in s.shape);
}

function collect(schema: z.ZodType, refines: ((d: Raw, add: Add) => void)[], input: unknown) {
    const errors: Record<string, string> = {};
    const add: Add = (path, code = ERR.required) => {
        if (!(path in errors)) errors[path] = code;
    };
    const result = schema.safeParse(input);
    if (!result.success) {
        for (const i of result.error.issues) add(i.path.join("."), i.message as ErrorCode);
    }
    const raw = input && typeof input === "object" ? (input as Raw) : {};
    refines.forEach((refine) => refine(raw, add));
    return { errors, data: result.success ? result.data : undefined };
}

/** Tek adımı doğrular; { "alan.yolu": "hataKodu" } döner (boş = geçerli). */
export function validateStep(step: number, input: unknown): Record<string, string> {
    const refine = STEPS[step].refine;
    return collect(stepSchemas[step], refine ? [refine] : [], input).errors;
}

/** Tüm formu doğrular (server + gönderim öncesi client). */
export function validateScholarship(input: unknown):
    | { success: true; data: ScholarshipData }
    | { success: false; errors: Record<string, string> } {
    const refines = STEPS.flatMap((s) => (s.refine ? [s.refine] : []));
    const { errors, data } = collect(scholarshipSchema, refines, input);
    return data && Object.keys(errors).length === 0
        ? { success: true, data: data as ScholarshipData }
        : { success: false, errors };
}

/** Form başlangıç değerleri — seçim alanları boş string ile başlar. */
export const EMPTY_SCHOLARSHIP = {
    firstName: "", lastName: "", birthCity: "", birthDistrict: "", birthDate: "",
    gender: "", maritalStatus: "", nationality: "", motherName: "", fatherName: "",
    university: "", faculty: "", department: "", grade: "", entryDate: "",
    prepAttended: "", gpa: "", highSchool: "",
    fatherAlive: "", fatherJob: "", fatherIncome: "",
    motherAlive: "", motherJob: "", motherIncome: "",
    workingCount: "", otherIncome: "", totalIncome: "", guardianPhone: "",
    housing: "", rentAmount: "",
    hasSiblings: "", siblingCount: "", siblings: [],
    address: "", phone: "", phone2: "", email: "",
    kvkkRead: false,
} as unknown as ScholarshipData;

export const EMPTY_SIBLING = { fullName: "", age: "", school: "", job: "", maritalStatus: "" } as unknown as Sibling;

/** Gizli (koşula bağlı) alanları temizler; e-postada "—" görünmesini sağlar. */
export function normalizeScholarship(d: ScholarshipData): ScholarshipData {
    const hasSiblings = d.hasSiblings === "yes";
    return {
        ...d,
        gpa: d.grade === "prep" ? "" : d.gpa,
        fatherJob: d.fatherAlive === "yes" ? d.fatherJob : "",
        fatherIncome: d.fatherAlive === "yes" ? d.fatherIncome : "",
        motherJob: d.motherAlive === "yes" ? d.motherJob : "",
        motherIncome: d.motherAlive === "yes" ? d.motherIncome : "",
        rentAmount: d.housing === "rent" ? d.rentAmount : "",
        siblingCount: hasSiblings ? d.siblingCount : "",
        siblings: hasSiblings ? d.siblings : [],
    };
}
