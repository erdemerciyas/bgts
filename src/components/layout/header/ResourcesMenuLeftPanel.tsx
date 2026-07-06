"use client"

import { useMemo, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowUpRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { localizedHref } from "@/lib/routes"
import type { Locale } from "@/i18n-config"
import { ARTICLES_TR } from "@/data/articles.tr"
import { ARTICLES_EN } from "@/data/articles.en"
import type { Article } from "@/data/articles.tr"

function t(lang: string, tr: string, en: string) {
    return lang === "eng" ? en : tr
}

function lh(lang: string, path: string) {
    return localizedHref(lang as Locale, path)
}

function articleHref(lang: string, articleId: string) {
    return `${lh(lang, "/resources/articles")}?article=${encodeURIComponent(articleId)}`
}

function shuffleArray<T>(items: T[]): T[] {
    const arr = [...items]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

function pickRandomBatch(source: Article[], size: number): Article[] {
    return shuffleArray(source).slice(0, Math.min(size, source.length))
}

interface ResourcesMenuLeftPanelProps {
    lang: string
    closeMenu?: () => void
}

function ArticleSlideCard({
    article,
    lang,
    closeMenu,
    className,
}: {
    article: Article
    lang: string
    closeMenu?: () => void
    className?: string
}) {
    return (
        <Link
            href={articleHref(lang, article.id)}
            onClick={closeMenu}
            className={cn(
                "group flex h-full min-h-0 flex-col gap-2.5 rounded-xl border border-slate-200/90 bg-white p-3.5",
                "shadow-[0_4px_20px_-8px_rgba(10,22,40,0.1)] transition-all duration-300",
                "hover:border-corporate-secondary/20 hover:shadow-[0_8px_28px_-10px_rgba(10,22,40,0.14)]",
                className
            )}
        >
            <Quote
                className="h-4 w-4 shrink-0 text-corporate-highlight/80"
                strokeWidth={2.2}
            />
            <p className="min-h-0 flex-1 overflow-hidden text-[13px] leading-relaxed text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                {article.excerpt}
            </p>
            <div className="mt-auto shrink-0 border-t border-slate-100 pt-2.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-corporate-secondary">
                    {article.author}
                </p>
                <p className="mt-1 line-clamp-2 text-[13px] font-semibold leading-snug text-corporate-dark transition-colors group-hover:text-corporate-secondary">
                    {article.title}
                </p>
            </div>
        </Link>
    )
}

function ArticleSlideCarousel({
    allArticles,
    lang,
    closeMenu,
}: {
    allArticles: Article[]
    lang: string
    closeMenu?: () => void
}) {
    const [batch, setBatch] = useState<Article[]>(() => pickRandomBatch(allArticles, 3))
    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [paused, setPaused] = useState(false)

    const goTo = useCallback(
        (index: number) => {
            if (index === activeIndex) return
            const forward =
                index > activeIndex ||
                (activeIndex === batch.length - 1 && index === 0)
            setDirection(forward ? 1 : -1)
            setActiveIndex(index)
        },
        [activeIndex, batch.length]
    )

    const advanceSlide = useCallback(() => {
        setDirection(1)
        setActiveIndex((prev) => {
            if (prev < batch.length - 1) return prev + 1
            setBatch(pickRandomBatch(allArticles, 3))
            return 0
        })
    }, [allArticles, batch.length])

    useEffect(() => {
        if (batch.length <= 1 || paused) return
        const timer = setInterval(advanceSlide, 5000)
        return () => clearInterval(timer)
    }, [batch.length, paused, advanceSlide])

    if (batch.length === 0) return null

    const slideVariants = {
        enter: (d: number) => ({ x: d > 0 ? "105%" : "-105%", opacity: 0.4 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? "-105%" : "105%", opacity: 0.4 }),
    }

    return (
        <div
            className="flex h-full min-h-0 flex-col p-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative min-h-0 flex-1 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={batch[activeIndex].id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        <ArticleSlideCard
                            article={batch[activeIndex]}
                            lang={lang}
                            closeMenu={closeMenu}
                            className="h-full"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {batch.length > 1 && (
                <div className="mt-2.5 flex shrink-0 items-center justify-center gap-2">
                    {batch.map((article, index) => (
                        <button
                            key={article.id}
                            type="button"
                            aria-label={`${index + 1} / ${batch.length}`}
                            onClick={() => goTo(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                index === activeIndex
                                    ? "w-6 bg-corporate-secondary"
                                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export function ResourcesMenuLeftPanel({ lang, closeMenu }: ResourcesMenuLeftPanelProps) {
    const { latest, allArticles } = useMemo(() => {
        const articles = lang === "eng" ? ARTICLES_EN : ARTICLES_TR
        const sorted = [...articles].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        return {
            latest: sorted[0],
            allArticles: articles,
        }
    }, [lang])

    return (
        <div className="grid h-full min-h-0 grid-rows-[53fr_47fr] gap-3">
            {/* Top row: dual cards */}
            <div className="grid min-h-0 grid-cols-2 gap-3">
                {/* Past event */}
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
                            sizes="280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/55 to-slate-900/15" />
                    </div>

                    <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-3.5">
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rose-400/40 bg-rose-500/75 shadow-sm">
                                <Calendar className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
                                {t(lang, "Gerçekleşen Etkinlik", "Past Event")}
                            </span>
                        </div>

                        <div className="min-h-0">
                            <h3 className="mb-1.5 text-sm font-black leading-snug text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
                                EBINTEC BANKING INNOVATION{" "}
                                <span className="text-rose-300">CONFERENCE</span>
                            </h3>
                            <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-slate-200/95 [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                                {t(
                                    lang,
                                    "Ana sponsor olarak yer aldığımız etkinlikte, finans sektörünün dönüşümüne dair güncel içgörüleri paylaştık.",
                                    "As the main sponsor of the event, we shared up-to-date insights on the transformation of the finance sector."
                                )}
                            </p>
                            <p className="flex items-center gap-2 text-[11px] font-semibold text-white/90">
                                <span className="rounded bg-white/15 px-2 py-0.5 backdrop-blur-sm">
                                    {t(lang, "14 Nisan", "April 14")}
                                </span>
                                <span>İstanbul</span>
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Latest article */}
                {latest && (
                    <Link
                        href={articleHref(lang, latest.id)}
                        onClick={closeMenu}
                        className="group flex h-full min-h-0 flex-col gap-1.5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-corporate-secondary/15 hover:shadow-lg"
                    >
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-corporate-secondary">
                            {t(lang, "Son Makale", "Latest Article")}
                        </span>
                        <h4 className="shrink-0 line-clamp-2 text-sm font-bold leading-snug tracking-tight text-corporate-dark transition-colors group-hover:text-corporate-secondary">
                            {latest.title}
                        </h4>
                        <p className="min-h-0 flex-1 overflow-hidden text-[13px] leading-[1.5] text-slate-600 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:12] [overflow-wrap:anywhere]">
                            {latest.excerpt}
                        </p>
                        <span className="inline-flex shrink-0 items-center gap-1 pt-1 text-[11px] font-bold text-corporate-secondary">
                            {t(lang, "Oku", "Read")}
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                )}
            </div>

            {/* Bottom: single-article slide carousel (loop) */}
            <div className="relative min-h-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-corporate-surface">
                <ArticleSlideCarousel
                    allArticles={allArticles}
                    lang={lang}
                    closeMenu={closeMenu}
                />
            </div>
        </div>
    )
}
