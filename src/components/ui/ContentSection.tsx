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

import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function ContentSection({
    title,
    badge,
    content,
    image,
    reverse = false,
    className
}: ContentSectionProps) {
    return (
        <Section className={cn("bg-white", className)}>
            <Container>
                <div className={cn(
                    "flex flex-col lg:flex-row gap-12 lg:gap-20",
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
                            <span className="block text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">
                                {badge}
                            </span>
                        )}
                        <Heading variant="h2" className="text-slate-900 mb-6">
                            {title}
                        </Heading>
                        <div className="prose prose-lg text-slate-600">
                            {typeof content === 'string' ? <Text>{content}</Text> : content}
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
            </Container>
        </Section>
    )
}
