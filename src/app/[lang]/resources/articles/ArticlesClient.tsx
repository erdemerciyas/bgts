"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { AnimatedDiv, ScaleIn } from "@/components/ui/AnimatedElements"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Article } from "@/data/articles.tr"
import { cn } from "@/lib/utils"

const ArticleModal = dynamic(() => import("@/components/resources/ArticleModal"), { ssr: false })

/* ── Category badge colors ── */
const CATEGORY_COLORS: Record<string, string> = {
    // TR
    "Yapay Zeka":    "bg-blue-50 text-blue-700 border-blue-100",
    "Otomasyon":     "bg-amber-50 text-amber-700 border-amber-100",
    "Güvenlik":      "bg-rose-50 text-rose-700 border-rose-100",
    "Yönetişim":     "bg-violet-50 text-violet-700 border-violet-100",
    "Altyapı":       "bg-emerald-50 text-emerald-700 border-emerald-100",
    // EN
    "Artificial Intelligence": "bg-blue-50 text-blue-700 border-blue-100",
    "Automation":              "bg-amber-50 text-amber-700 border-amber-100",
    "Security":                "bg-rose-50 text-rose-700 border-rose-100",
    "Governance":              "bg-violet-50 text-violet-700 border-violet-100",
    "Infrastructure":          "bg-emerald-50 text-emerald-700 border-emerald-100",
}

type ArticlesDict = {
    title: string
    subtitle: string
    readMore: string
    allArticles: string
    closeModal: string
    readTime: string
    by: string
    category: string
    publishedOn: string
}

interface ArticlesClientProps {
    articles: Article[]
    dict: ArticlesDict
    lang: string
}

export default function ArticlesClient({ articles, dict, lang }: ArticlesClientProps) {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

    return (
        <div className="bg-white min-h-screen">
            {/* ══════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 min-h-[40vh] flex items-center">
                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 right-[0%] w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-[120px]" />
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                </div>

                <Container className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* LEFT: Typography */}
                        <AnimatedDiv className="max-w-2xl">
                            <h1 className="text-corporate-dark font-black tracking-tight leading-[1.1] text-5xl lg:text-[4.5rem] mb-8">
                                {dict.title}
                            </h1>
                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-normal max-w-lg mb-10">
                                {dict.subtitle}
                            </p>
                        </AnimatedDiv>

                        {/* RIGHT: Featured image */}
                        <ScaleIn className="hidden lg:block relative h-[400px] w-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/images/articles/kurumlarda-yapay-zeka.jpg"
                                        alt={dict.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </ScaleIn>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════
                ARTICLES GRID
            ══════════════════════════════════════════════════════ */}
            <Section background="default" className="py-16 md:py-24">
                <Container>
                    {/* Section header */}
                    <div className="flex items-end justify-between mb-12 flex-wrap gap-4 pb-6 border-b border-slate-100">
                        <div>
                            <Heading variant="h2" className="text-slate-900 font-black text-3xl mb-1.5 tracking-tight">
                                {dict.allArticles}
                            </Heading>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                                    {articles.length}
                                </span>
                                <Text variant="small" className="text-slate-400 font-medium">
                                    {dict.subtitle}
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                index={index}
                                dict={dict}
                                onClick={() => setSelectedArticle(article)}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Article detail modal */}
            <ArticleModal
                article={selectedArticle}
                onClose={() => setSelectedArticle(null)}
                lang={lang}
                dict={dict}
            />
        </div>
    )
}

/* ── Article Card ── */
function ArticleCard({
    article,
    index,
    dict,
    onClick,
}: {
    article: Article
    index: number
    dict: ArticlesDict
    onClick: () => void
}) {
    const categoryClass = CATEGORY_COLORS[article.category] ?? "bg-slate-50 text-slate-600 border-slate-100"

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.38, delay: (index % 3) * 0.06 }}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    onClick()
                }
            }}
            tabIndex={0}
            role="button"
            aria-label={article.title}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300 flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {/* Cover image */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge overlay */}
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border",
                        categoryClass
                    )}>
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow px-6 pt-5 pb-4">
                <Heading
                    variant="h3"
                    className="text-[1.05rem] font-extrabold text-slate-900 leading-snug line-clamp-2 mb-3 group-hover:text-blue-700 transition-colors duration-200"
                >
                    {article.title}
                </Heading>

                <Text variant="muted" className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {article.excerpt}
                </Text>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 truncate max-w-[60%]">
                    {article.author}
                </span>
                <span className="flex items-center gap-1 shrink-0">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {article.readTime} {dict.readTime}
                </span>
            </div>
        </motion.article>
    )
}
