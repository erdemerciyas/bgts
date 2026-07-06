"use client"

import { useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ReactMarkdown, { Components } from "react-markdown"
import { X, Calendar, Clock, User } from "lucide-react"
import type { Article } from "@/data/articles.tr"

/* ── Category badge colors (mirrors ArticlesClient) ── */
const CATEGORY_COLORS: Record<string, string> = {
    // TR
    "Yapay Zeka":    "bg-blue-100 text-blue-700 border-blue-200",
    "Otomasyon":     "bg-amber-100 text-amber-700 border-amber-200",
    "Güvenlik":      "bg-rose-100 text-rose-700 border-rose-200",
    "Yönetişim":     "bg-violet-100 text-violet-700 border-violet-200",
    "Altyapı":       "bg-emerald-100 text-emerald-700 border-emerald-200",
    // EN
    "Artificial Intelligence": "bg-blue-100 text-blue-700 border-blue-200",
    "Automation":              "bg-amber-100 text-amber-700 border-amber-200",
    "Security":                "bg-rose-100 text-rose-700 border-rose-200",
    "Governance":              "bg-violet-100 text-violet-700 border-violet-200",
    "Infrastructure":          "bg-emerald-100 text-emerald-700 border-emerald-200",
}

interface ArticleModalProps {
    article: Article | null
    onClose: () => void
    lang: string
    dict: {
        readTime: string
        by: string
        publishedOn: string
        closeModal: string
    }
}

/* ── Custom markdown renderers ── */
const markdownComponents: Components = {
    h2: ({ children }) => (
        <h2 className="text-2xl font-black text-slate-900 mt-8 mb-4 tracking-tight leading-tight">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight leading-snug">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="text-lg font-semibold text-slate-700 mt-5 mb-2">
            {children}
        </h4>
    ),
    p: ({ children }) => (
        <p className="text-slate-600 leading-relaxed mb-4 text-base">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="list-disc list-inside space-y-1.5 mb-4 pl-2 text-slate-600">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside space-y-1.5 mb-4 pl-2 text-slate-600">
            {children}
        </ol>
    ),
    li: ({ children }) => (
        <li className="leading-relaxed text-base">{children}</li>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-400 bg-blue-50/60 pl-5 pr-4 py-4 my-6 italic text-slate-700 rounded-r-lg">
            {children}
        </blockquote>
    ),
    strong: ({ children }) => (
        <strong className="font-bold text-slate-800">{children}</strong>
    ),
    em: ({ children }) => (
        <em className="italic text-slate-700">{children}</em>
    ),
    a: ({ href, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
        >
            {children}
        </a>
    ),
    img: ({ src, alt }) => {
        if (!src || typeof src !== "string") return null
        return (
            <span className="block my-6 relative rounded-xl overflow-hidden shadow-md">
                <Image
                    src={src}
                    alt={alt ?? ""}
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </span>
        )
    },
    code: ({ className, children, ...props }) => {
        const isBlock = className?.includes("language-")
        if (isBlock) {
            return (
                <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-x-auto my-5 text-sm font-mono shadow-inner">
                    <code {...props}>{children}</code>
                </pre>
            )
        }
        return (
            <code
                className="bg-slate-100 text-rose-600 rounded px-1.5 py-0.5 text-sm font-mono"
                {...props}
            >
                {children}
            </code>
        )
    },
    table: ({ children }) => (
        <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
                {children}
            </table>
        </div>
    ),
    thead: ({ children }) => (
        <thead className="bg-slate-50">{children}</thead>
    ),
    th: ({ children }) => (
        <th className="text-left font-bold text-slate-700 px-4 py-3 border-b border-slate-200">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="px-4 py-3 text-slate-600 border-b border-slate-100 leading-relaxed">
            {children}
        </td>
    ),
    hr: () => <hr className="border-slate-200 my-8" />,
}

export default function ArticleModal({ article, onClose, lang, dict }: ArticleModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const modalContentRef = useRef<HTMLDivElement>(null)

    /* Stabilize onClose ref to avoid re-rendering useEffect on every parent render */
    const onCloseRef = useRef(onClose)
    onCloseRef.current = onClose

    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseRef.current()
        },
        [] // stable – reads onClose via ref
    )

    /* Focus trap handler */
    const handleTabTrap = useCallback(
        (e: KeyboardEvent) => {
            if (e.key !== "Tab") return
            const modal = modalContentRef.current
            if (!modal) return
            const focusable = modal.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
            if (focusable.length === 0) return
            const first = focusable[0]
            const last = focusable[focusable.length - 1]
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        },
        []
    )

    /* Scroll lock + ESC listener + focus trap */
    useEffect(() => {
        if (!article) return

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", handleEsc)
        document.addEventListener("keydown", handleTabTrap)

        // Focus the close button on open
        setTimeout(() => closeButtonRef.current?.focus(), 50)

        return () => {
            document.body.style.overflow = prevOverflow
            document.removeEventListener("keydown", handleEsc)
            document.removeEventListener("keydown", handleTabTrap)
        }
    }, [article, handleEsc, handleTabTrap])

    const categoryClass =
        article ? (CATEGORY_COLORS[article.category] ?? "bg-slate-100 text-slate-600 border-slate-200") : ""

    /* Format date based on lang */
    const formattedDate = article
        ? new Date(article.date).toLocaleDateString(
              lang === "eng" ? "en-US" : "tr-TR",
              { year: "numeric", month: "long", day: "numeric" }
          )
        : ""

    return createPortal(
        <AnimatePresence>
            {article && (
                <motion.div
                    key="article-modal"
                    ref={modalContentRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-10"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={article.title}
                >
                    {/* Close button – fixed top-right */}
                    <button
                        ref={closeButtonRef}
                        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-slate-700 hover:text-rose-600 hover:bg-white shadow-lg transition-all"
                        onClick={(e) => {
                            e.stopPropagation()
                            onClose()
                        }}
                        aria-label={dict.closeModal}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Content card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative flex w-full max-w-5xl max-h-[min(94dvh,calc(100dvh-1rem))] sm:max-h-[min(90dvh,calc(100dvh-2rem))] flex-col overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Scrollable content (cover + header + body) ── */}
                        <div className="min-h-0 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                            {/* Cover image */}
                            <div className="relative shrink-0 overflow-hidden bg-slate-50">
                                <Image
                                    src={article.coverImage}
                                    alt={article.title}
                                    width={1920}
                                    height={768}
                                    className="block w-full h-auto md:-my-[50px]"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 1024px"
                                />

                                {/* Category badge over image */}
                                <div className="absolute top-2 left-3 sm:top-4 sm:left-5 md:left-7">
                                    <span
                                        className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border backdrop-blur-sm ${categoryClass}`}
                                    >
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Header */}
                            <div className="border-b border-slate-100 px-4 py-3 sm:px-7 sm:pt-6 sm:pb-4">
                                <h2 className="mb-2 text-xl font-black leading-tight tracking-tight text-slate-900 sm:mb-4 sm:text-3xl">
                                    {article.title}
                                </h2>

                                {/* Meta row */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 sm:gap-x-5 sm:gap-y-2 sm:text-sm">
                                    <span className="flex items-center gap-1.5">
                                        <User className="w-4 h-4 text-slate-400" />
                                        <span className="font-semibold text-slate-700">
                                            {article.author}
                                        </span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        {article.readTime} {dict.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Markdown body */}
                            <div className="px-4 py-4 sm:px-7 sm:py-6">
                                {article.body ? (
                                    <ReactMarkdown components={markdownComponents}>
                                        {article.body}
                                    </ReactMarkdown>
                                ) : (
                                    <p className="text-slate-500 italic text-center py-8">
                                        {lang === "eng"
                                            ? "Content for this article will be added soon."
                                            : "Bu makalenin içeriği yakında eklenecektir."}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}
