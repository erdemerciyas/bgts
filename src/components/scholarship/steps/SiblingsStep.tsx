"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";
import { EMPTY_SIBLING, MARITAL_STATUSES, MAX_SIBLINGS, YES_NO, type Sibling } from "@/lib/scholarship/schema";
import { RadioCards, Reveal, SelectField, TextField } from "../fields";
import { options, type StepProps } from "../types";

export default function SiblingsStep({ dict, data, update, err }: StepProps) {
    const reduce = useReducedMotion();
    const L = dict.labels;
    // Sayı geçici olarak düşürülürse (ör. "12" yazarken "1") girilen kart verileri kaybolmasın.
    const cache = useRef<Sibling[]>(data.siblings);

    const setCount = (raw: string) => {
        const siblingCount = raw.replace(/\D/g, "").slice(0, 2);
        const count = Number(siblingCount);
        const cards = count >= 2 ? Math.min(count - 1, MAX_SIBLINGS) : 0;
        cache.current = [...data.siblings, ...cache.current.slice(data.siblings.length)];
        const siblings = Array.from({ length: cards }, (_, i) => data.siblings[i] ?? cache.current[i] ?? EMPTY_SIBLING);
        update({ siblingCount, siblings }, ["siblingCount"]);
    };

    const setSibling = (index: number, field: keyof Sibling, value: string) => {
        const siblings = data.siblings.map((s, i) => (i === index ? { ...s, [field]: value } : s));
        cache.current = [...siblings, ...cache.current.slice(siblings.length)];
        update({ siblings }, [`siblings.${index}.${field}`]);
    };

    const field = (i: number, name: keyof Sibling) => ({
        id: `siblings.${i}.${name}`,
        value: data.siblings[i][name],
        onChange: (v: string) => setSibling(i, name, v),
        error: err(`siblings.${i}.${name}`),
    });

    return (
        <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
                <RadioCards
                    id="hasSiblings"
                    label={L.hasSiblings}
                    value={data.hasSiblings}
                    onChange={(v) => update({ hasSiblings: v as typeof data.hasSiblings })}
                    error={err("hasSiblings")}
                    options={options(YES_NO, dict.options.yesNo)}
                />
                <div>
                    <Reveal show={data.hasSiblings === "yes"}>
                        <TextField
                            id="siblingCount"
                            label={L.siblingCount}
                            placeholder={dict.placeholders.siblingCount}
                            value={data.siblingCount}
                            onChange={setCount}
                            error={err("siblingCount")}
                            inputMode="numeric"
                            maxLength={2}
                        />
                    </Reveal>
                </div>
            </div>

            {data.hasSiblings === "yes" && (
                <motion.div layout={!reduce} className="space-y-4">
                    <AnimatePresence initial={false}>
                        {data.siblings.map((_, i) => (
                            <motion.section
                                key={i}
                                layout={!reduce}
                                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
                                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
                            >
                                <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-800">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0056A7]">
                                        <Users className="h-3.5 w-3.5" />
                                    </span>
                                    {L.siblingCard.replace("{n}", String(i + 1))}
                                </h4>
                                <div className="grid gap-3 sm:grid-cols-6">
                                    <TextField {...field(i, "fullName")} label={L.siblingFullName} className="sm:col-span-4" />
                                    <TextField {...field(i, "age")} label={L.siblingAge} inputMode="numeric" maxLength={3} className="sm:col-span-2" />
                                    <TextField {...field(i, "school")} label={L.siblingSchool} optional={dict.optional} className="sm:col-span-3" />
                                    <TextField {...field(i, "job")} label={L.siblingJob} optional={dict.optional} className="sm:col-span-3" />
                                    <SelectField
                                        {...field(i, "maritalStatus")}
                                        label={L.siblingMarital}
                                        placeholder={dict.placeholders.select}
                                        options={options(MARITAL_STATUSES, dict.options.maritalStatus)}
                                        className="sm:col-span-3"
                                    />
                                </div>
                            </motion.section>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}
