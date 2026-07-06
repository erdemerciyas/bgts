"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Article } from "@/data/articles.tr"
import { cn } from "@/lib/utils"
import ArticlesHero from "@/components/resources/ArticlesHero"

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

export default function ArticlesClient(props: ArticlesClientProps) {
    return (
        <Suspense fallback={<ArticlesPageFallback {...props} />}>
            <ArticlesClientInner {...props} />
        </Suspense>
    )
}

function ArticlesPageFallback({ articles, dict }: ArticlesClientProps) {
    return (
        <div className="bg-white min-h-screen">
            <ArticlesHero dict={dict} />
            <Section background="default" className="py-16 md:py-24">
                <Container>
                    <Heading variant="h2" className="text-slate-900 font-black text-3xl mb-12 tracking-tight">
                        {dict.allArticles}
                    </Heading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <div key={article.id} className="h-72 rounded-3xl bg-slate-100 animate-pulse" />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}

function ArticlesClientInner({ articles, dict, lang }: ArticlesClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

    useEffect(() => {
        const articleId = searchParams.get("article")
        if (!articleId) return
        const article = articles.find((a) => a.id === articleId)
        if (article) setSelectedArticle(article)
    }, [searchParams, articles])

    const closeModal = useCallback(() => {
        setSelectedArticle(null)
        const params = new URLSearchParams(searchParams.toString())
        params.delete("article")
        const query = params.toString()
        router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
    }, [pathname, router, searchParams])

    const openArticle = useCallback(
        (article: Article) => {
            setSelectedArticle(article)
            const params = new URLSearchParams(searchParams.toString())
            params.set("article", article.id)
            router.replace(`${pathname}?${params.toString()}`, { scroll: false })
        },
        [pathname, router, searchParams]
    )

    return (
        <div className="bg-white min-h-screen">
            <ArticlesHero dict={dict} />

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
                                onClick={() => openArticle(article)}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Article detail modal */}
            <ArticleModal
                article={selectedArticle}
                onClose={closeModal}
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
