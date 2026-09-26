"use client";

import { useState } from "react";
import { ChevronDown, FileText, PencilLine } from "lucide-react";
import { normalizeScholarship, type ScholarshipData } from "@/lib/scholarship/schema";
import { cn } from "@/lib/utils";
import { CheckboxField, Reveal } from "../fields";
import type { StepProps } from "../types";

type Field = keyof ScholarshipData & string;

const SECTION_FIELDS: Field[][] = [
    ["firstName", "lastName", "birthCity", "birthDistrict", "birthDate", "gender", "maritalStatus", "nationality", "motherName", "fatherName"],
    ["university", "faculty", "department", "grade", "entryDate", "prepAttended", "gpa", "highSchool"],
    ["fatherAlive", "fatherJob", "fatherIncome", "motherAlive", "motherJob", "motherIncome", "workingCount", "otherIncome", "totalIncome", "guardianPhone", "housing", "rentAmount"],
    ["hasSiblings", "siblingCount"],
    ["address", "phone", "phone2", "email"],
];

const MONEY = new Set<Field>(["fatherIncome", "motherIncome", "otherIncome", "totalIncome", "rentAmount"]);
const DATES = new Set<Field>(["birthDate", "entryDate"]);
const OPTION_GROUP: Partial<Record<Field, string>> = {
    gender: "gender", maritalStatus: "maritalStatus", grade: "grade", housing: "housing",
    prepAttended: "yesNo", fatherAlive: "yesNo", motherAlive: "yesNo", hasSiblings: "yesNo",
};

type Props = StepProps & {
    onEdit: (step: number) => void;
};

export default function ReviewStep({ dict, data, update, err, onEdit }: Props) {
    const [showKvkk, setShowKvkk] = useState(false);
    const n = normalizeScholarship(data);
    const L = dict.labels as Record<string, string>;
    const O = dict.options as unknown as Record<string, Record<string, string>>;

    const display = (field: Field) => {
        const value = n[field];
        if (typeof value !== "string" || value === "") return dict.empty;
        if (MONEY.has(field)) return `${Number(value).toLocaleString("tr-TR")} ₺`;
        if (DATES.has(field)) return value.split("-").reverse().join(".");
        const group = OPTION_GROUP[field];
        return group ? O[group][value] ?? value : value;
    };

    return (
        <div className="space-y-6">
            <p className="text-sm text-slate-500">{dict.review.intro}</p>

            <div className="grid gap-3">
                {SECTION_FIELDS.map((fields, step) => (
                    <section key={step} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                            <h4 className="text-sm font-bold text-slate-800">{dict.steps[step].title}</h4>
                            <button
                                type="button"
                                onClick={() => onEdit(step)}
                                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-[#0056A7] hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                            >
                                <PencilLine className="h-3.5 w-3.5" />
                                {dict.edit}
                            </button>
                        </div>
                        <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                            {fields.map((field) => (
                                <div key={field} className="flex justify-between gap-3 border-b border-slate-200/70 pb-1.5 sm:block sm:border-0 sm:pb-0">
                                    <dt className="text-xs text-slate-500">{L[field]}</dt>
                                    <dd className="text-right font-medium text-slate-800 break-words sm:text-left">{display(field)}</dd>
                                </div>
                            ))}
                        </dl>
                        {step === 3 && n.siblings.length > 0 && (
                            <ul className="mt-3 grid gap-2">
                                {n.siblings.map((s, i) => (
                                    <li key={i} className="rounded-xl bg-white px-3 py-2 text-xs text-slate-600 border border-slate-200">
                                        <span className="font-semibold text-slate-800">{s.fullName}</span>
                                        {" · "}{s.age}
                                        {s.school && <> · {s.school}</>}
                                        {s.job && <> · {s.job}</>}
                                        {" · "}{O.maritalStatus[s.maritalStatus] ?? s.maritalStatus}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </div>

            {/* KVKK Aydınlatma Metni */}
            <section className="rounded-2xl border border-slate-200 p-4 sm:p-5">
                <button
                    type="button"
                    onClick={() => setShowKvkk((v) => !v)}
                    aria-expanded={showKvkk}
                    aria-controls="sch-kvkk-text"
                    className="flex w-full items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-lg"
                >
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-800">
                        <FileText className="h-4 w-4 text-[#0056A7]" />
                        {dict.review.kvkkTitle}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#0056A7]">
                        {showKvkk ? dict.review.kvkkHide : dict.review.kvkkShow}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", showKvkk && "rotate-180")} />
                    </span>
                </button>
                <Reveal show={showKvkk}>
                    <div
                        id="sch-kvkk-text"
                        tabIndex={0}
                        className="mt-3 max-h-60 space-y-2.5 overflow-y-auto rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                    >
                        {dict.review.kvkkText.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </Reveal>
                <div className="mt-4">
                    <CheckboxField
                        id="kvkkRead"
                        label={dict.review.kvkkRead}
                        checked={data.kvkkRead}
                        onChange={(kvkkRead) => update({ kvkkRead })}
                        error={err("kvkkRead")}
                    />
                </div>
            </section>
        </div>
    );
}
