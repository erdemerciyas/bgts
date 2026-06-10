"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { cn } from "@/lib/utils"

type StatItem = {
    val: string
    label: string
}

export type ByNumbersDict = {
    heading: string
    subtitle: string
    items: StatItem[]
}

interface AboutStatsSectionProps {
    byNumbers: ByNumbersDict
}

function StatsCardGeometry() {
    const stroke = "#1E5A8A"
    const accent = "#D4A853"

    return (
        <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-[0.35] hidden sm:block" aria-hidden="true">
            <svg viewBox="0 0 256 256" className="w-full h-full" fill="none">
                <circle cx="200" cy="56" r="120" stroke={stroke} strokeOpacity="0.12" strokeWidth="1.5" />
                <polygon
                    points="200,20 268,55 268,125 200,160 132,125 132,55"
                    stroke={stroke}
                    strokeOpacity="0.18"
                    fill={stroke}
                    fillOpacity="0.04"
                />
                <line x1="0" y1="200" x2="256" y2="120" stroke={accent} strokeOpacity="0.15" strokeWidth="1" />
            </svg>
        </div>
    )
}

export function AboutStatsSection({ byNumbers }: AboutStatsSectionProps) {
    return (
        <div className="relative z-20 -mt-14 md:-mt-24 mb-6 md:mb-10">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-sm border border-border bg-white shadow-2xl shadow-slate-900/[0.08]"
                >
                    <div className="h-1 bg-gradient-to-r from-corporate-secondary via-corporate-accent to-corporate-highlight" />
                    <StatsCardGeometry />

                    <div className="relative z-10">
                        <div className="px-6 sm:px-10 lg:px-14 pt-8 md:pt-10 pb-7 md:pb-8 border-b border-border">
                            <Heading variant="h2" className="!text-2xl sm:!text-3xl md:!text-4xl mb-3 md:mb-4">
                                {byNumbers.heading}
                            </Heading>
                            <div className="h-0.5 w-12 bg-corporate-highlight/70 rounded-full mb-4 md:mb-5" />
                            <Text
                                variant="bodyLg"
                                className="!text-text-secondary !text-base md:!text-lg !leading-relaxed max-w-2xl"
                            >
                                {byNumbers.subtitle}
                            </Text>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
                            {byNumbers.items.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.45, delay: 0.12 + index * 0.07 }}
                                    className={cn(
                                        "group py-7 md:py-8 px-4 sm:px-6 text-center transition-colors duration-300",
                                        "hover:bg-corporate-surface/90",
                                        index === byNumbers.items.length - 1 && "col-span-2 md:col-span-1"
                                    )}
                                >
                                    <div className="text-3xl sm:text-4xl font-black text-corporate-secondary tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">
                                        {item.val}
                                    </div>
                                    <div className="h-px w-8 bg-corporate-highlight/50 mx-auto mb-3 rounded-full" />
                                    <div className="text-xs sm:text-sm font-semibold text-slate-600 leading-snug">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}
