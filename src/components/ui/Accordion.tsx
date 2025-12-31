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
        <div className={cn("border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 mb-4 shadow-sm", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-left group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
            >
                <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-300",
                        isOpen ? "rotate-180" : ""
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
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
