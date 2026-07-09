"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

interface ResourcesMenuLeftPanelProps {
    lang: string
    closeMenu?: () => void
}

function t(lang: string, tr: string, en: string) {
    return lang === "eng" ? en : tr
}

export function ResourcesMenuLeftPanel({ lang, closeMenu }: ResourcesMenuLeftPanelProps) {
    return (
        <Link
            href="https://www.linkedin.com/feed/update/urn:li:activity:7449781930562101248"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-md ring-1 ring-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/25"
        >
            <div className="absolute inset-0">
                <Image
                    src="/images/events/ebintec-2026.jpg"
                    alt={t(lang, "EBINTEC Banking Innovation Conference", "EBINTEC Banking Innovation Conference")}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    sizes="560px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/55 to-slate-900/15" />
            </div>

            <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-6">
                <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rose-400/40 bg-rose-500/75 shadow-sm">
                        <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/90">
                        {t(lang, "Gerçekleşen Etkinlik", "Past Event")}
                    </span>
                </div>

                <div className="min-h-0">
                    <h3 className="mb-2.5 text-2xl font-black leading-snug text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                        EBINTEC BANKING INNOVATION{" "}
                        <span className="text-rose-300">CONFERENCE</span>
                    </h3>
                    <p className="mb-4 max-w-md text-sm leading-relaxed text-slate-200/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                        {t(
                            lang,
                            "Ana sponsor olarak yer aldığımız etkinlikte, finans sektörünün dönüşümüne dair güncel içgörüleri paylaştık.",
                            "As the main sponsor of the event, we shared up-to-date insights on the transformation of the finance sector."
                        )}
                    </p>
                    <p className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                        <span className="rounded bg-white/15 px-2.5 py-1 backdrop-blur-sm">
                            {t(lang, "14 Nisan", "April 14")}
                        </span>
                        <span>İstanbul</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}
