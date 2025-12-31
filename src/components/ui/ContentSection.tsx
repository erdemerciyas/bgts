"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
    title: string
    badge?: string
    content: string | React.ReactNode
    image?: React.ReactNode
    reverse?: boolean
    className?: string
}

export default function ContentSection({
    title,
    badge,
    content,
    image,
    reverse = false,
    className
}: ContentSectionProps) {
    return (
        <section className={cn("py-20 bg-white dark:bg-blue-950", className)}>
            <div className="container mx-auto px-6">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                    reverse ? "lg:flex-row-reverse" : ""
                )}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        {badge && (
                            <span className="block text-blue-500 dark:text-blue-400 font-bold tracking-wide uppercase text-sm mb-2">
                                {badge}
                            </span>
                        )}
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                            {title}
                        </h2>
                        <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-blue-100">
                            {typeof content === 'string' ? <p>{content}</p> : content}
                        </div>
                    </motion.div>

                    {/* Visual/Image Area */}
                    {image && (
                        <motion.div
                            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-indigo-950/50 aspect-video flex items-center justify-center">
                                {/* This creates a placeholder gradient if 'image' is just a string or node, but ideally 'image' is an <img /> or custom component */}
                                {image}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}
