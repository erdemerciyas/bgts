"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
    steps: { title: string }[];
    current: number;
    /** Ulaşılan en ileri adım; bu adıma kadar olanlara tıklanabilir. */
    maxStep: number;
    label: string;
    onJump: (step: number) => void;
};

export default function WizardStepper({ steps, current, maxStep, label, onJump }: Props) {
    const reduce = useReducedMotion();
    const progress = (current + 1) / steps.length;

    return (
        <div className="border-b border-slate-100 px-5 pb-3 pt-4 sm:px-8">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{label}</span>
                <span className="text-slate-800 sm:hidden">{steps[current].title}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-[#0056A7] to-blue-500"
                    initial={false}
                    animate={{ scaleX: progress }}
                    transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 22 }}
                />
            </div>
            <ol className="mt-3 hidden grid-cols-6 gap-2 sm:grid">
                {steps.map((s, i) => {
                    const done = i < maxStep && i !== current;
                    const active = i === current;
                    const reachable = i <= maxStep && !active;
                    return (
                        <li key={s.title}>
                            <button
                                type="button"
                                disabled={!reachable}
                                onClick={() => onJump(i)}
                                aria-current={active ? "step" : undefined}
                                className={cn(
                                    "group flex w-full items-center gap-2 rounded-lg p-1 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40",
                                    reachable ? "cursor-pointer hover:bg-slate-50" : "cursor-default"
                                )}
                            >
                                <span
                                    className={cn(
                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors",
                                        active && "bg-[#0056A7] text-white shadow-md shadow-blue-500/30",
                                        done && "bg-blue-100 text-[#0056A7]",
                                        !active && !done && "bg-slate-100 text-slate-400"
                                    )}
                                >
                                    {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
                                </span>
                                <span
                                    className={cn(
                                        "truncate text-[11px] font-semibold leading-tight",
                                        active ? "text-slate-900" : done ? "text-slate-600" : "text-slate-400"
                                    )}
                                >
                                    {s.title}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
