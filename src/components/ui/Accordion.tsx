"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
    className?: string
}

export function AccordionItem({ title, children, defaultOpen = false, className }: AccordionItemProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div className={cn("border border-slate-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-blue-950/30 mb-4 shadow-sm backdrop-blur-sm", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-left group transition-colors hover:bg-slate-50 dark:hover:bg-blue-900/50"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <span className="text-lg font-semibold text-slate-900 dark:text-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-slate-400 dark:text-blue-300 transition-transform duration-300",
                        isOpen ? "rotate-180" : ""
                    )}
                    aria-hidden="true"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                        role="region"
                        aria-labelledby={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <div className="px-6 py-4 border-t border-slate-100 dark:border-blue-900 text-slate-600 dark:text-blue-100">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
    return <div className="space-y-4">{children}</div>
}
