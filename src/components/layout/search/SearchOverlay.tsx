"use client"

import React, { useState, useMemo, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ArrowRight, CornerDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    SEARCH_ITEMS,
    POPULAR_SEARCHES,
    SEARCH_NO_RESULTS,
    SEARCH_PLACEHOLDER,
    getSearchTitle,
    getSearchDescription,
    getSearchCategoryLabel,
} from "./data"
import { localizedHref } from "@/lib/routes"
import { getLocaleFromPathname } from "@/lib/base-path"
import type { Locale } from "@/i18n-config"

interface SearchOverlayProps {
    isOpen: boolean
    onClose: () => void
}

const CATEGORY_COLOR: Record<string, string> = {
    "Hizmet": "bg-blue-100 text-blue-600",
    "Sektör": "bg-purple-100 text-purple-600",
    "Ürün": "bg-emerald-100 text-emerald-600",
    "Kariyer": "bg-orange-100 text-orange-600",
    "Kurumsal": "bg-slate-100 text-slate-600",
    // English fallbacks
    "Service": "bg-blue-100 text-blue-600",
    "Industry": "bg-purple-100 text-purple-600",
    "Product": "bg-emerald-100 text-emerald-600",
    "Career": "bg-orange-100 text-orange-600",
    "Corporate": "bg-slate-100 text-slate-600",
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const pathname = usePathname()
    const currentLang = getLocaleFromPathname(pathname)
    const locale = currentLang as "tr" | "eng"
    const resultsRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Reset query when closed
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>
        if (!isOpen) {
            timeoutId = setTimeout(() => {
                setQuery("")
                setSelectedIndex(0)
            }, 150)
        }
        return () => clearTimeout(timeoutId)
    }, [isOpen])

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const filteredResults = useMemo(() => {
        if (!query.trim()) return []
        const q = query.toLowerCase()
        return SEARCH_ITEMS.filter(item => {
            const title = getSearchTitle(item, currentLang as Locale)
            const desc = getSearchDescription(item, currentLang as Locale)
            return (
                title.toLowerCase().includes(q) ||
                desc.toLowerCase().includes(q) ||
                item.tags?.some(tag => tag.toLowerCase().includes(q)) ||
                // Also search in English fields when locale is TR (and vice versa)
                (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
                (item.descriptionEn && item.descriptionEn.toLowerCase().includes(q))
            )
        }).slice(0, 8)
    }, [query, currentLang])

    // Reset selected index when results change
    useEffect(() => {
        setSelectedIndex(0)
    }, [filteredResults])

    // Scroll selected item into view
    useEffect(() => {
        if (resultsRef.current && filteredResults.length > 0) {
            const items = resultsRef.current.querySelectorAll("[data-search-item]")
            const selectedItem = items[selectedIndex] as HTMLElement | undefined
            if (selectedItem) {
                selectedItem.scrollIntoView({ block: "nearest" })
            }
        }
    }, [selectedIndex, filteredResults])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (filteredResults.length === 0) return

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault()
                setSelectedIndex(prev => (prev + 1) % filteredResults.length)
                break
            case "ArrowUp":
                e.preventDefault()
                setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length)
                break
            case "Enter":
                e.preventDefault()
                if (filteredResults[selectedIndex]) {
                    const href = localizedHref(currentLang, filteredResults[selectedIndex].href)
                    window.location.href = href
                    onClose()
                }
                break
        }
    }, [filteredResults, selectedIndex, currentLang, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex justify-center items-start pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[70vh]"
                            onKeyDown={handleKeyDown}
                        >
                            {/* Header / Input */}
                            <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                                <Search className="w-6 h-6 text-slate-400 shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    autoFocus
                                    placeholder={SEARCH_PLACEHOLDER[locale]}
                                    className="flex-1 text-xl font-medium text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:bg-slate-200 transition-colors text-xs font-bold uppercase tracking-wider"
                                >
                                    ESC
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="overflow-y-auto p-2" ref={resultsRef}>
                                {!query && (
                                    <div className="p-8 text-center">
                                        <p className="text-slate-500 text-sm mb-6">
                                            {locale === "eng" ? "Popular Searches" : "Popüler Aramalar"}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {POPULAR_SEARCHES[locale].map(tag => (
                                                <button
                                                    key={tag}
                                                    onClick={() => setQuery(tag)}
                                                    className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-600 text-sm hover:bg-slate-100 hover:border-slate-200 transition-colors"
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {query && filteredResults.length > 0 && (
                                    <div className="grid gap-1">
                                        {filteredResults.map((item, i) => {
                                            const catLabel = getSearchCategoryLabel(item, currentLang as Locale)
                                            const colorClass = CATEGORY_COLOR[item.category] ?? CATEGORY_COLOR["Kurumsal"]
                                            return (
                                                <Link
                                                    key={i}
                                                    href={localizedHref(currentLang, item.href)}
                                                    onClick={onClose}
                                                    data-search-item
                                                    className={cn(
                                                        "group flex items-start gap-4 p-4 rounded-xl transition-colors",
                                                        i === selectedIndex
                                                            ? "bg-blue-50 ring-1 ring-blue-200"
                                                            : "hover:bg-blue-50/50"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1",
                                                        colorClass
                                                    )}>
                                                        <ArrowRight className="w-5 h-5 -rotate-45" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">
                                                                {catLabel}
                                                            </span>
                                                            <h4 className={cn(
                                                                "font-bold transition-colors",
                                                                i === selectedIndex
                                                                    ? "text-blue-700"
                                                                    : "text-slate-900 group-hover:text-blue-700"
                                                            )}>
                                                                {getSearchTitle(item, currentLang as Locale)}
                                                            </h4>
                                                        </div>
                                                        <p className="text-sm text-slate-500 line-clamp-1">
                                                            {getSearchDescription(item, currentLang as Locale)}
                                                        </p>
                                                    </div>
                                                    <CornerDownLeft className={cn(
                                                        "w-4 h-4 text-slate-300 mt-3 transition-opacity",
                                                        i === selectedIndex ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                                    )} />
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}

                                {query && filteredResults.length === 0 && (
                                    <div className="p-12 text-center">
                                        <p className="text-slate-900 font-bold text-lg mb-2">
                                            {SEARCH_NO_RESULTS[locale].title}
                                        </p>
                                        <p className="text-slate-500">
                                            {SEARCH_NO_RESULTS[locale].desc(query)}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Footer hint */}
                            {query && filteredResults.length > 0 && (
                                <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400 flex items-center justify-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">↑</kbd>
                                        <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">↓</kbd>
                                        <span className="ml-1">{locale === "eng" ? "navigate" : "gezin"}</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">Enter</kbd>
                                        <span>{locale === "eng" ? "select" : "seç"}</span>
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">Esc</kbd>
                                        <span>{locale === "eng" ? "close" : "kapat"}</span>
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
