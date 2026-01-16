"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"
import { cn } from "@/lib/utils"

export function ServicesSection() {
    const { badge, heading, description, ctaText, image, sections } = HOME_CONTENT.servicesSummary;

    return (
        <Section background="default" className="pb-0 overflow-visible">
            <Container className="pb-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-corporate-surface text-corporate-primary font-bold text-sm tracking-wide mb-6 border border-corporate-border">
                            {badge}
                        </span>
                        <Heading variant="h2" className="text-corporate-primary mb-6">
                            {heading}
                        </Heading>
                        <Text variant="large" className="text-text-secondary mb-8">
                            {description}
                        </Text>
                        <Link href="/services" className="inline-flex h-14 items-center justify-center rounded-full bg-corporate-secondary px-8 font-bold text-white transition-all hover:bg-corporate-primary hover:shadow-lg hover:-translate-y-1">
                            {ctaText} <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-corporate-primary/40 to-transparent z-10"></div>
                        <Image
                            src={image}
                            alt="Team Meeting"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </Container>

            {/* Services Grid Full Width */}
            <div className="w-full">
                <div className="grid md:grid-cols-3 min-h-[600px]">
                    {sections.map((service) => (
                        <div
                            key={service.id}
                            className={cn(
                                "relative p-12 lg:p-16 flex flex-col justify-between overflow-hidden group border-r border-white/10 last:border-0",
                                service.theme === "dark" ? "bg-[#0A1628] text-white" : "bg-corporate-primary text-white"
                            )}
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                unoptimized
                                className="object-cover opacity-10 group-hover:opacity-25 transition-opacity duration-700 mix-blend-overlay"
                            />
                            <div className={cn("absolute inset-0 pointer-events-none", service.theme === "dark" ? "bg-[#0A1628]/80" : "bg-corporate-primary/80")}></div>

                            {/* Decorative Blur */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-700"></div>

                            <div className="relative z-20">
                                <Heading variant="h3" className="mb-6 text-white font-manrope">{service.title}</Heading>
                                <Text variant="large" className="text-blue-100/90 mb-8 leading-relaxed">
                                    {service.description}
                                </Text>
                                <ul className="space-y-4 mb-8">
                                    {service.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-blue-50 font-medium">
                                            <CheckCircle className="w-5 h-5 text-blue-300" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative z-20 pt-8 mt-auto border-t border-white/10">
                                <Link href={service.ctaLink} className="inline-flex items-center font-bold text-white hover:text-blue-300 transition-colors text-lg group/link">
                                    {service.ctaText}
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
