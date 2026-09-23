"use client";

import { Home, KeyRound } from "lucide-react";
import { HOUSING, YES_NO, type ScholarshipData } from "@/lib/scholarship/schema";
import { MoneyField, PhoneField, RadioCards, Reveal, SectionTitle, TextField } from "../fields";
import { binder, options, type StepProps } from "../types";

function incomeSum(d: ScholarshipData) {
    const parent = (alive: string, income: string) => (alive === "yes" ? Number(income || 0) : 0);
    return parent(d.fatherAlive, d.fatherIncome) + parent(d.motherAlive, d.motherIncome) + Number(d.otherIncome || 0);
}

export default function FamilyStep(props: StepProps) {
    const { dict, data, err } = props;
    const L = dict.labels;

    // Toplam gelir, kullanıcı elle değiştirmediği sürece (değer önceki toplama eşitse) otomatik güncellenir.
    const update: StepProps["update"] = (patch, clear) => {
        if (!("totalIncome" in patch) && (data.totalIncome === "" || Number(data.totalIncome) === incomeSum(data))) {
            const next = { ...data, ...patch };
            const hasAny = [next.fatherIncome, next.motherIncome, next.otherIncome].some(Boolean);
            patch = { ...patch, totalIncome: hasAny ? String(incomeSum(next)) : "" };
        }
        props.update(patch, clear);
    };

    const bind = binder({ ...props, update });
    const yesNo = options(YES_NO, dict.options.yesNo);

    const parent = (p: "father" | "mother") => {
        const alive = `${p}Alive` as const;
        return (
            <div className="space-y-3">
                <RadioCards
                    id={alive}
                    label={L[alive]}
                    value={data[alive]}
                    onChange={(v) => update({ [alive]: v } as Partial<ScholarshipData>)}
                    error={err(alive)}
                    options={yesNo}
                />
                <Reveal show={data[alive] === "yes"} className="grid gap-3">
                    <TextField {...bind(`${p}Job`)} placeholder={dict.placeholders.job} />
                    <MoneyField {...bind(`${p}Income`)} />
                </Reveal>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                {parent("father")}
                {parent("mother")}
            </div>

            <div className="space-y-4 border-t border-slate-100 pt-5">
                <SectionTitle>{L.totalIncome}</SectionTitle>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField {...bind("workingCount")} inputMode="numeric" maxLength={2} />
                    <MoneyField {...bind("otherIncome")} />
                    <MoneyField {...bind("totalIncome")} hint={L.totalIncomeHint} />
                    <PhoneField {...bind("guardianPhone")} placeholder={dict.placeholders.phone} />
                </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-5">
                <RadioCards
                    id="housing"
                    label={L.housing}
                    value={data.housing}
                    onChange={(v) => update({ housing: v as typeof data.housing })}
                    error={err("housing")}
                    options={options(HOUSING, dict.options.housing).map((o) => ({
                        ...o,
                        hint: dict.options.housingHint[o.value],
                        icon: o.value === "rent" ? <KeyRound className="h-4 w-4" /> : <Home className="h-4 w-4" />,
                    }))}
                />
                <Reveal show={data.housing === "rent"}>
                    <MoneyField {...bind("rentAmount")} className="sm:max-w-[calc(50%-0.5rem)]" />
                </Reveal>
            </div>
        </div>
    );
}
