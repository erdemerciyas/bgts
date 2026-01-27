"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Settings } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"
import { cn } from "@/lib/utils"

export function DeliveryModels() {
    const { badge, heading, description, models } = HOME_CONTENT.deliveryModels;

    return (
        <Section className="relative z-0 overflow-hidden bg-[#0f172a] py-24 lg:py-32">
            {/* Background Pattern & Gradient */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/home/bgts-calisma-modelleri-arkaplan.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-100"
                />

                {/* Additional overlay for text readability - reduced opacity to let image show */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/40 to-[#0f172a]/80" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center mb-20">
                    <Text variant="small" className="text-blue-400 font-bold tracking-[0.2em] uppercase mb-4 block">
                        {badge}
                    </Text>
                    <Heading variant="h2" className="mb-6 text-white">
                        {heading}
                    </Heading>
                    <Text variant="large" className="text-slate-400 max-w-2xl mx-auto font-medium">
                        {description}
                    </Text>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                    {models.map((model) => (
                        <div
                            key={model.id}
                            className={cn(
                                "group relative p-12 rounded-[2.5rem] transition-all duration-500",
                                model.variant === "light"
                                    ? "bg-white border text-corporate-primary shadow-xl hover:shadow-2xl hover:border-corporate-secondary/20"
                                    : "bg-corporate-primary text-white shadow-2xl hover:shadow-corporate-primary/40 hover:-translate-y-2"
                            )}
                        >
                            <div className={cn(
                                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-lg",
                                model.variant === "light" ? "bg-corporate-secondary text-white shadow-corporate-secondary/20" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
                            )}>
                                {model.id === "turnkey" ? <Settings className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                            </div>

                            <Heading variant="h3" className={cn("mb-4", model.variant === "light" ? "text-corporate-primary" : "text-white")}>
                                {model.title}
                            </Heading>

                            <Text className={cn("mb-10 text-lg leading-relaxed", model.variant === "light" ? "text-text-secondary" : "text-blue-100/80")}>
                                {model.description}
                            </Text>

                            <div className="space-y-5 mb-10">
                                {model.features.map(item => (
                                    <div key={item} className={cn("flex items-center gap-4 font-semibold", model.variant === "light" ? "text-corporate-dark" : "text-white")}>
                                        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", model.variant === "light" ? "bg-corporate-surface" : "bg-white/10")}>
                                            <CheckCircle className={cn("w-5 h-5", model.variant === "light" ? "text-corporate-secondary" : "text-corporate-tertiary")} />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={model.ctaLink}
                                className={cn(
                                    "block w-full py-5 rounded-2xl font-bold text-center transition-all duration-300",
                                    model.variant === "light"
                                        ? "border-2 border-corporate-border text-corporate-primary hover:border-corporate-secondary hover:text-white hover:bg-corporate-secondary"
                                        : "bg-corporate-tertiary text-white hover:bg-white hover:text-corporate-primary hover:shadow-lg"
                                )}
                            >
                                {model.ctaText}
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
