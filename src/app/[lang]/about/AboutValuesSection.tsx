"use client"

import { motion } from "framer-motion"
import { Users, Shield, Lightbulb, Award, Leaf, type LucideIcon } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import { cn } from "@/lib/utils"

type Principle = {
    number: string
    title: string
    desc: string
}

export type PeopleFirstDict = {
    badge: string
    heading: string
    subtitle: string
    principles: Principle[]
}

const PRINCIPLE_ICONS: LucideIcon[] = [Users, Shield, Lightbulb, Award, Leaf]

function ValuesGeometryBackdrop() {
    const stroke = "#1E5A8A"
    const fill = "#1E5A8A"
    const accent = "#D4A853"

    return (
        <>
            <div className="absolute -top-16 -right-20 w-72 h-72 pointer-events-none opacity-40 hidden lg:block" aria-hidden="true">
                <svg viewBox="0 0 320 320" className="w-full h-full" fill="none">
                    <circle cx="160" cy="160" r="140" stroke={stroke} strokeOpacity="0.15" strokeWidth="1.5" />
                    <polygon points="160,48 248,99 248,201 160,252 72,201 72,99" stroke={stroke} strokeOpacity="0.2" fill={fill} fillOpacity="0.05" />
                    <polygon points="160,110 198,160 160,210 122,160" stroke={accent} strokeOpacity="0.35" fill={accent} fillOpacity="0.08" />
                </svg>
            </div>
            <div className="absolute bottom-8 -left-16 w-56 h-56 pointer-events-none opacity-30 hidden md:block" aria-hidden="true">
                <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                    <circle cx="100" cy="100" r="90" stroke={stroke} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 8" />
                    <rect x="60" y="60" width="80" height="80" rx="2" stroke={stroke} strokeOpacity="0.15" transform="rotate(45 100 100)" fill={fill} fillOpacity="0.06" />
                </svg>
            </div>
        </>
    )
}

interface AboutValuesSectionProps {
    peopleFirst: PeopleFirstDict
}

export function AboutValuesSection({ peopleFirst }: AboutValuesSectionProps) {
    return (
        <Section background="muted" className="overflow-hidden relative py-16 md:py-28">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-corporate-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <ValuesGeometryBackdrop />

            <Container className="relative z-10">
                {/* Wide header */}
                <AnimatedDiv className="max-w-4xl mb-14 lg:mb-20">
                    <Heading variant="h2" className="!text-3xl md:!text-5xl mb-6">
                        {peopleFirst.heading}
                    </Heading>
                    <Text variant="bodyLg" className="!text-text-secondary !text-lg md:!text-xl !leading-relaxed max-w-3xl">
                        {peopleFirst.subtitle}
                    </Text>
                </AnimatedDiv>

                {/* Full-width value panels */}
                <div className="space-y-5 lg:space-y-6">
                    {peopleFirst.principles.map((principle, index) => {
                        const Icon = PRINCIPLE_ICONS[index % PRINCIPLE_ICONS.length]

                        return (
                            <motion.div
                                key={principle.number}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.55, delay: index * 0.07 }}
                                whileHover={{ y: -2 }}
                                className={cn(
                                    "group relative w-full rounded-sm border border-border bg-white",
                                    "p-7 sm:p-9 lg:p-10 transition-all duration-300",
                                    "hover:border-corporate-secondary/40 hover:shadow-lg"
                                )}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10 lg:gap-14">
                                    {/* Number + icon column */}
                                    <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-5 shrink-0 sm:w-28 lg:w-36">
                                        <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-corporate-highlight/25 leading-none select-none">
                                            {principle.number}
                                        </span>
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-sm bg-corporate-secondary/10 flex items-center justify-center">
                                            <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-corporate-secondary" />
                                        </div>
                                    </div>

                                    {/* Content column */}
                                    <div className="flex-1 min-w-0">
                                        <Heading variant="h3" className="!text-xl md:!text-2xl lg:!text-3xl mb-4 lg:mb-5">
                                            {principle.title}
                                        </Heading>
                                        <Text
                                            variant="bodyLg"
                                            className="!text-text-secondary !text-base md:!text-lg lg:!text-xl !leading-relaxed !font-normal max-w-4xl"
                                        >
                                            {principle.desc}
                                        </Text>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}
