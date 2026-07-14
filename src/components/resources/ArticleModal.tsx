"use client"

import { useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ReactMarkdown, { Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { X, Calendar, Clock, ExternalLink } from "lucide-react"
import type { Article } from "@/data/articles.tr"
import { getArticleLinkedInUrl, stripDuplicateTitleHeading } from "@/lib/articles"
import { ArticleCardHeader } from "@/components/resources/ArticleCardHeader"

interface ArticleModalProps {
    article: Article | null
    onClose: () => void
    lang: string
    dict: {
        readTime: string
        by: string
        publishedOn: string
        closeModal: string
        viewOnLinkedIn: string
    }
}

/* ── Custom markdown renderers ── */
const markdownComponents: Components = {
    h2: ({ children }) => (
        <h2 className="mb-4 mt-8 text-2xl font-bold leading-snug tracking-tight text-slate-900">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="mb-3 mt-6 text-xl font-semibold leading-snug tracking-tight text-slate-800">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="mb-2 mt-5 text-lg font-semibold leading-snug text-slate-700">
            {children}
        </h4>
    ),
    p: ({ children }) => (
        <p className="mb-4 text-base leading-[1.7] text-slate-600">
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
        <li className="text-base leading-[1.7]">{children}</li>
    ),
    blockquote: ({ children }) => (
        <blockquote className="my-6 rounded-r-lg border-l-4 border-blue-400 bg-blue-50/60 py-4 pl-5 pr-4 text-base italic leading-[1.7] text-slate-700">
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
    tbody: ({ children }) => (
        <tbody>{children}</tbody>
    ),
    tr: ({ children }) => (
        <tr className="even:bg-slate-50/40">{children}</tr>
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

    /* Format date based on lang */
    const formattedDate = article
        ? new Date(article.date).toLocaleDateString(
              lang === "eng" ? "en-US" : "tr-TR",
              { year: "numeric", month: "long", day: "numeric" }
          )
        : ""

    const articleBody = article
        ? stripDuplicateTitleHeading(article.body, article.title)
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
                            <ArticleCardHeader article={article} lang={lang} variant="modal" />

                            <div className="border-b border-slate-100 px-6 py-4 sm:px-8 sm:py-5">
                                <h2 className="mb-3 break-words text-xl font-bold leading-snug text-slate-900 sm:mb-4 sm:text-2xl">
                                    {article.title}
                                </h2>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        {formattedDate}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-slate-400" />
                                        {article.readTime} {dict.readTime}
                                    </span>
                                    {getArticleLinkedInUrl(article.id) && (
                                        <a
                                            href={getArticleLinkedInUrl(article.id)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-semibold text-[#0077b5] hover:text-[#005885] transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            {dict.viewOnLinkedIn}
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="px-4 py-4 sm:px-8 sm:py-6">
                                {articleBody ? (
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={markdownComponents}
                                    >
                                        {articleBody}
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
