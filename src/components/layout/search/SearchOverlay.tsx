"use client"

import React, { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ArrowRight, CornerDownLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { SEARCH_ITEMS, SearchItem } from "./data"

interface SearchOverlayProps {
    isOpen: boolean
    onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("")

    // Reset query when closed
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>
        if (!isOpen) {
            timeoutId = setTimeout(() => setQuery(""), 150)
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

    // Close on escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [onClose])

    const filteredResults = useMemo(() => {
        if (!query.trim()) return []
        const q = query.toLowerCase()
        return SEARCH_ITEMS.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags?.some(tag => tag.toLowerCase().includes(q))
        ).slice(0, 6) // Limit results
    }, [query])

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
                        >
                            {/* Header / Input */}
                            <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                                <Search className="w-6 h-6 text-slate-400 shrink-0" />
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Aramak istediğiniz konuyu yazın..."
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
                            <div className="overflow-y-auto p-2">
                                {!query && (
                                    <div className="p-8 text-center">
                                        <p className="text-slate-500 text-sm mb-6">Popüler Aramalar</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {["Yazılım Geliştirme", "Staj", "Veri Merkezi", "Kariyer", "İletişim"].map(tag => (
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
                                        {filteredResults.map((item, i) => (
                                            <Link
                                                key={i}
                                                href={item.href}
                                                onClick={onClose}
                                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 transition-colors"
                                            >
                                                <div className={cn(
                                                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1",
                                                    item.category === "Hizmet" ? "bg-blue-100 text-blue-600" :
                                                        item.category === "Sektör" ? "bg-purple-100 text-purple-600" :
                                                            item.category === "Kariyer" ? "bg-orange-100 text-orange-600" :
                                                                "bg-slate-100 text-slate-600"
                                                )}>
                                                    <ArrowRight className="w-5 h-5 -rotate-45" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white border border-slate-100 px-2 py-0.5 rounded">{item.category}</span>
                                                        <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                                                    </div>
                                                    <p className="text-sm text-slate-500 line-clamp-1">{item.description}</p>
                                                </div>
                                                <CornerDownLeft className="w-4 h-4 text-slate-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        ))}
                                    </div>
                                )}

                                {query && filteredResults.length === 0 && (
                                    <div className="p-12 text-center">
                                        <p className="text-slate-900 font-bold text-lg mb-2">Sonuç Bulunamadı</p>
                                        <p className="text-slate-500">"{query}" ile ilgili bir içerik eşleşmedi. Lütfen farklı anahtar kelimeler deneyin.</p>
                                    </div>
                                )}
                            </div>

                            {/* Footer hint */}
                            {query && filteredResults.length > 0 && (
                                <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
                                    Seçmek için <span className="font-bold text-slate-600">Enter</span>, kapatmak için <span className="font-bold text-slate-600">Esc</span> basın.
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
