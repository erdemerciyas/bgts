"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Kalam } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ScholarshipDict } from "./types";

// Modal (Zod + form kodu) ana bundle'a girmez; hover/focus'ta önden yüklenir.
const loadModal = () => import("./ScholarshipModal");
const ScholarshipModal = dynamic(loadModal, { ssr: false });

const hand = Kalam({ subsets: ["latin", "latin-ext"], weight: "700", display: "swap" });

const NAVY = "#0b2a6b";
const YELLOW = "#fbbf24";

type Props = {
    dict: ScholarshipDict;
};

/** Sarı kıvılcım çizgileri; `reduce` kapalıyken hafifçe yanıp söner. */
function Sparks({ className, reduce, delay = 0 }: { className?: string; reduce: boolean; delay?: number }) {
    return (
        <motion.svg
            aria-hidden
            viewBox="0 0 24 24"
            className={cn("pointer-events-none absolute", className)}
            fill="none"
            stroke={YELLOW}
            strokeWidth={2.6}
            strokeLinecap="round"
            animate={reduce ? undefined : { opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.2, delay }}
        >
            <path d="M7 3 L9 8" />
            <path d="M14 9 L19 5" />
            <path d="M15 14 L21 14" />
        </motion.svg>
    );
}

function Cap() {
    return (
        <svg aria-hidden viewBox="0 0 64 48" className="h-10 w-12 drop-shadow-sm transition-transform duration-300 group-hover:-rotate-6">
            <path d="M14 21 v11 c0 5 8 8.5 18 8.5 s18-3.5 18-8.5 v-11 l-18 7 z" fill="#fff" stroke={NAVY} strokeWidth={3} strokeLinejoin="round" />
            <polygon points="32,4 62,16 32,28 2,16" fill="#fff" stroke={NAVY} strokeWidth={3} strokeLinejoin="round" />
            <path d="M32 16 L53 21 V35" fill="none" stroke={YELLOW} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50 35 h6 l1.5 8 h-9 z" fill={YELLOW} stroke={NAVY} strokeWidth={1.5} strokeLinejoin="round" />
        </svg>
    );
}

export default function ScholarshipWidget({ dict }: Props) {
    const pathname = usePathname();
    const reduce = !!useReducedMotion();
    const [open, setOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // League sayfalarında site kromu gizli; burs sayfasında form zaten açık — buton gösterilmez.
    if (/\/(?:league|burs-basvurusu|scholarship)(?:\/|$)/.test(pathname ?? "")) return null;

    const prefetch = () => void loadModal();
    const [firstWord, ...rest] = dict.button.split(" ");

    return (
        <>
            <div className="fixed right-0 top-1/2 z-[90] -translate-y-1/2">
                <motion.button
                    type="button"
                    onClick={() => {
                        setLoaded(true);
                        setOpen(true);
                    }}
                    onPointerEnter={prefetch}
                    onFocus={prefetch}
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    aria-label={dict.button}
                    initial={reduce ? { opacity: 0 } : { x: "110%" }}
                    animate={reduce ? { opacity: 1 } : { x: 0 }}
                    whileHover={reduce ? undefined : { x: -6 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    transition={{ delay: 2, type: "spring", stiffness: 260, damping: 24 }}
                    className="group relative flex flex-col items-center gap-2 rounded-l-[1.75rem] bg-gradient-to-b from-[#2468dc] via-[#1a56c4] to-[#0f47ad] px-2.5 py-4 text-white shadow-[0_0_45px_12px_rgba(37,99,235,0.45)] transition-shadow duration-300 hover:shadow-[0_0_60px_18px_rgba(37,99,235,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 sm:gap-2.5 sm:py-6 sm:pl-4 sm:pr-3"
                >
                    <span className="relative">
                        <Cap />
                        <Sparks reduce={reduce} className="-right-1.5 -top-3 h-4 w-4 sm:-right-4 sm:h-5 sm:w-5" />
                    </span>

                    {/* Metin + sarı alt çizgi (mobilde gizli) */}
                    <span className={cn(hand.className, "relative hidden -rotate-3 flex-col items-center text-center leading-[0.95] drop-shadow-[0_2px_0_rgba(11,42,107,0.55)] sm:flex")}>
                        <span className="text-[1.6rem]">{firstWord}</span>
                        {rest.length > 0 && <span className="text-[1.6rem]">{rest.join(" ")}</span>}
                        <svg aria-hidden viewBox="0 0 100 12" className="mt-1 h-2.5 w-[90%]" fill="none">
                            <path d="M3 9 Q 50 1 97 5" stroke={YELLOW} strokeWidth={4.5} strokeLinecap="round" />
                        </svg>
                    </span>

                    {/* Ok dairesi */}
                    <span className="relative mt-1">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#0b2a6b] bg-white text-[#0b2a6b] shadow-md transition-transform duration-300 group-hover:translate-x-0.5 sm:h-11 sm:w-11">
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
                        </span>
                        <Sparks reduce={reduce} delay={0.9} className="-right-4 -top-1 hidden h-5 w-5 sm:block" />
                    </span>
                </motion.button>
            </div>

            {loaded && <ScholarshipModal open={open} onClose={() => setOpen(false)} dict={dict} />}
        </>
    );
}
