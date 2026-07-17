"use client"

import { useState, useEffect, useCallback, useMemo, Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import type { Article } from "@/data/articles.tr"
import {
    ArticleCardTags,
    ArticleCardQuoteRow,
    ArticleCardDivider,
    articleTypography,
    CARD_THEMES,
} from "@/components/resources/ArticleCardHeader"
import ArticlesHero from "@/components/resources/ArticlesHero"
import { getLatestArticles } from "@/lib/articles"

const ArticleModal = dynamic(() => import("@/components/resources/ArticleModal"), { ssr: false })

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
    viewOnLinkedIn: string
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
    const sortedArticles = getLatestArticles(articles, articles.length)

    return (
        <div className="bg-[#F8F9FA] min-h-screen">
            <ArticlesHero dict={dict} />
            <Section background="default" className="bg-[#F8F9FA] py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-6 [grid-template-columns:repeat(1,minmax(0,1fr))] md:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
                        {sortedArticles.map((article) => (
                            <div
                                key={article.id}
                                className="h-80 animate-pulse rounded-xl border border-slate-100 bg-white"
                            />
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
    const sortedArticles = useMemo(
        () => getLatestArticles(articles, articles.length),
        [articles]
    )

    useEffect(() => {
        const articleId = searchParams.get("article")
        if (!articleId) return
        const article = sortedArticles.find((a) => a.id === articleId)
        if (article) setSelectedArticle(article)
    }, [searchParams, sortedArticles])

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
        <div className="bg-[#F8F9FA] min-h-screen">
            <ArticlesHero dict={dict} />

            <Section background="default" className="bg-[#F8F9FA] py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-6 [grid-template-columns:repeat(1,minmax(0,1fr))] md:[grid-template-columns:repeat(2,minmax(0,1fr))] lg:[grid-template-columns:repeat(3,minmax(0,1fr))]">
                        {sortedArticles.map((article, index) => (
                            <ArticleCard
                                key={article.id}
                                article={article}
                                index={index}
                                dict={dict}
                                lang={lang}
                                onClick={() => openArticle(article)}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            <ArticleModal
                article={selectedArticle}
                onClose={closeModal}
                lang={lang}
                dict={dict}
            />
        </div>
    )
}

function ArticleCard({
    article,
    index,
    dict,
    lang,
    onClick,
}: {
    article: Article
    index: number
    dict: ArticlesDict
    lang: string
    onClick: () => void
}) {
    const theme = CARD_THEMES[article.cardTheme]

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
            className="group grid h-full min-w-0 cursor-pointer grid-rows-subgrid rounded-xl border bg-white shadow-[0_4px_6px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 [grid-row:span_4]"
            style={{ borderColor: `color-mix(in srgb, ${theme.accent} 32%, transparent)` }}
        >
            <div className="px-6 pt-6">
                <ArticleCardTags article={article} variant="card" />
            </div>

            <div className="px-6 pb-1">
                <ArticleCardQuoteRow article={article} lang={lang} variant="card" />
            </div>

            <ArticleCardDivider article={article} />

            <div className="flex min-h-0 flex-col gap-3.5 p-6 pt-5">
                <h3 className={articleTypography.cardTitle}>{article.title}</h3>

                <p className={articleTypography.cardExcerpt}>{article.excerpt}</p>

                <div className={`mt-auto flex items-center justify-between pt-2 ${articleTypography.cardFooter}`}>
                    <span
                        className="inline-flex items-center gap-1 font-semibold transition-opacity group-hover:opacity-80"
                        style={{ color: theme.accent }}
                    >
                        {dict.readMore}
                        <span aria-hidden>&rarr;</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 text-slate-400">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <polyline
                                points="12 6 12 12 16 14"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {article.readTime} {dict.readTime}
                    </span>
                </div>
            </div>
        </motion.article>
    )
}
