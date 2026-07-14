"use client"

import { Fragment } from "react"
import type { Article, ArticleCardTheme } from "@/data/articles.tr"
import { getAuthorProfile } from "@/lib/articles"
import { cn } from "@/lib/utils"

export const CARD_THEMES: Record<
    ArticleCardTheme,
    { accent: string; tagBg: string; tagText: string }
> = {
    blue: { accent: "#3482C4", tagBg: "#E8F1F9", tagText: "#3482C4" },
    green: { accent: "#2D8B78", tagBg: "#E6F4F1", tagText: "#2D8B78" },
    orange: { accent: "#D9A14F", tagBg: "#FBF3E6", tagText: "#C4892E" },
    violet: { accent: "#6B5BCC", tagBg: "#EEEBFA", tagText: "#6B5BCC" },
    rose: { accent: "#C45C7A", tagBg: "#FAEEF2", tagText: "#C45C7A" },
    cyan: { accent: "#2A9CB8", tagBg: "#E5F5F9", tagText: "#2A9CB8" },
}

export const articleTypography = {
    tag: "text-xs font-medium tracking-normal",
    quoteCard: "text-[0.9375rem] font-semibold leading-[1.55] text-slate-800",
    quoteModal: "text-lg font-semibold leading-[1.55] text-slate-800 sm:text-xl",
    authorName: "break-words font-semibold text-slate-900",
    authorNameCard: "text-sm",
    authorNameModal: "text-base",
    authorMeta: "break-words leading-normal text-slate-500",
    authorMetaCard: "text-xs",
    authorMetaModal: "text-sm",
    authorDept: "break-words leading-normal text-slate-400",
    authorDeptCard: "text-xs",
    authorDeptModal: "text-sm",
    cardTitle: "break-words text-base font-bold leading-snug text-slate-900",
    cardExcerpt: "line-clamp-3 text-sm leading-[1.65] text-slate-600",
    cardFooter: "text-xs text-slate-500",
} as const

export function HighlightedQuote({
    quote,
    highlight,
    accent,
}: {
    quote: string
    highlight: string
    accent: string
}) {
    if (!highlight || !quote.includes(highlight)) {
        return <>{quote}</>
    }

    const parts = quote.split(highlight)

    return (
        <>
            {parts.map((part, index) => (
                <Fragment key={index}>
                    {part}
                    {index < parts.length - 1 && (
                        <span className="font-semibold" style={{ color: accent }}>
                            {highlight}
                        </span>
                    )}
                </Fragment>
            ))}
        </>
    )
}

type HeaderVariant = "card" | "modal"

function useHeaderContext(article: Article, lang: string, variant: HeaderVariant) {
    return {
        theme: CARD_THEMES[article.cardTheme],
        authorProfile: getAuthorProfile(article.author, lang),
        isModal: variant === "modal",
    }
}

export function ArticleCardTags({
    article,
    variant = "card",
    className,
}: {
    article: Article
    variant?: HeaderVariant
    className?: string
}) {
    const theme = CARD_THEMES[article.cardTheme]
    const isModal = variant === "modal"

    return (
        <div className={cn("flex flex-wrap content-start gap-2", className)}>
            {article.cardTags.map((tag) => (
                <span
                    key={tag}
                    className={cn(
                        "inline-flex items-center rounded-md px-2.5 py-1",
                        articleTypography.tag,
                        isModal && "text-xs"
                    )}
                    style={{ backgroundColor: theme.tagBg, color: theme.tagText }}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

export function ArticleCardQuoteRow({
    article,
    lang,
    variant = "card",
    className,
}: {
    article: Article
    lang: string
    variant?: HeaderVariant
    className?: string
}) {
    const { theme, authorProfile, isModal } = useHeaderContext(article, lang, variant)

    return (
        <div
            className={cn(
                "flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5",
                className
            )}
        >
            <p
                className={cn(
                    "min-w-0 flex-1",
                    isModal ? articleTypography.quoteModal : articleTypography.quoteCard
                )}
            >
                <span className="text-slate-300">&ldquo;</span>
                <HighlightedQuote
                    quote={article.cardQuote}
                    highlight={article.cardQuoteHighlight}
                    accent={theme.accent}
                />
                <span className="text-slate-300">&rdquo;</span>
            </p>

            <div
                aria-hidden
                className="hidden w-px shrink-0 self-stretch border-l border-dashed border-slate-200 sm:block"
            />

            <div className="min-w-0 shrink-0 sm:w-[9.5rem] lg:w-[10.5rem]">
                <p
                    className={cn(
                        articleTypography.authorName,
                        isModal ? articleTypography.authorNameModal : articleTypography.authorNameCard
                    )}
                >
                    {article.author}
                </p>
                {authorProfile?.title && (
                    <p
                        className={cn(
                            "mt-1",
                            articleTypography.authorMeta,
                            isModal ? articleTypography.authorMetaModal : articleTypography.authorMetaCard
                        )}
                    >
                        {authorProfile.title}
                    </p>
                )}
                {authorProfile?.department && (
                    <p
                        className={cn(
                            "mt-0.5",
                            articleTypography.authorDept,
                            isModal ? articleTypography.authorDeptModal : articleTypography.authorDeptCard
                        )}
                    >
                        {authorProfile.department}
                    </p>
                )}
            </div>
        </div>
    )
}

export function ArticleCardDivider({
    article,
    className,
}: {
    article: Article
    className?: string
}) {
    const theme = CARD_THEMES[article.cardTheme]

    return (
        <div
            className={cn("h-1 w-full shrink-0", className)}
            style={{ backgroundColor: theme.accent }}
        />
    )
}

interface ArticleCardHeaderProps {
    article: Article
    lang: string
    variant?: HeaderVariant
    className?: string
}

export function ArticleCardHeader({
    article,
    lang,
    variant = "card",
    className,
}: ArticleCardHeaderProps) {
    const isModal = variant === "modal"

    return (
        <div className={cn("shrink-0", className)}>
            <div
                className={cn(
                    "flex flex-col gap-4",
                    isModal ? "px-6 pt-6 pb-5 sm:px-8 sm:pt-8" : "gap-4 p-6 pb-5"
                )}
            >
                <ArticleCardTags article={article} variant={variant} />
                <ArticleCardQuoteRow article={article} lang={lang} variant={variant} />
            </div>
            <ArticleCardDivider article={article} />
        </div>
    )
}
