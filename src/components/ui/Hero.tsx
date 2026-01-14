"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

interface HeroProps {
    title: string
    subtitle: string
    badge?: string
    ctaText?: string
    ctaLink?: string
    pattern?: "grid" | "dots" | "none"
    align?: "left" | "center"
    className?: string
    layout?: "simple" | "split"
    image?: React.ReactNode
    videoSrc?: string
    backgroundImage?: string
}

export default function Hero({
    title,
    subtitle,
    badge,
    ctaText,
    ctaLink,
    pattern = "dots",
    align = "center",
    className,
    layout = "simple",
    image,
    videoSrc,
    backgroundImage
}: HeroProps) {

    if (layout === "split") {
        return (
            <Section className={cn("pt-32 pb-20 lg:pt-48 lg:pb-32", className)}>
                {/* Background Patterns */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {pattern === "grid" && (
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    )}
                    {pattern === "dots" && (
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    )}
                </div>

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            {badge && (
                                <div className="inline-flex items-center rounded-full border border-corporate-accent/30 bg-corporate-surface px-3 py-1 text-sm font-medium text-corporate-primary mb-6">
                                    <span className="flex h-2 w-2 rounded-full bg-corporate-secondary mr-2"></span>
                                    {badge}
                                </div>
                            )}
                            <Heading variant="h1" className="text-corporate-primary mb-6">
                                {title}
                            </Heading>
                            <Text variant="large" className="text-text-secondary mb-8 max-w-lg">
                                {subtitle}
                            </Text>

                            {ctaLink && (
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={ctaLink}
                                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-corporate-secondary rounded-full hover:bg-corporate-primary hover:scale-105 shadow-xl shadow-corporate-secondary/20"
                                    >
                                        {ctaText || "Keşfedin"}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-corporate-primary transition-all bg-white border border-border rounded-full hover:bg-corporate-surface hover:border-corporate-accent shadow-sm"
                                    >
                                        İletişime Geçin
                                    </Link>
                                </div>
                            )}
                        </motion.div>

                        {/* Image / Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative lg:h-[600px] flex items-center justify-center"
                        >
                            {image ? image : (
                                <div className="w-full h-full bg-slate-100 rounded-3xl animate-pulse"></div>
                            )}
                        </motion.div>
                    </div>
                </Container>
            </Section>
        )
    }

    // Simple Layout (Centered) - Enhanced for Video Background
    return (
        <Section className={cn("py-32 lg:py-48 min-h-[80vh] flex items-center", className)}>
            <div className="absolute inset-0 z-0">
                {videoSrc ? (
                    <>
                        {/* Video Background */}
                        {videoSrc.includes('vidyard.com') ? (
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <iframe
                                    src={videoSrc}
                                    className="absolute top-1/2 left-1/2 min-w-[177.77vh] min-h-[56.25vw] w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 scale-150"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    frameBorder="0"
                                    title="Hero Video"
                                />
                            </div>
                        ) : (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={videoSrc} type="video/mp4" />
                            </video>
                        )}

                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-corporate-primary/70" />
                    </>
                ) : backgroundImage ? (
                    <>
                        <div className="absolute inset-0">
                            <Image
                                src={backgroundImage}
                                alt="Hero Background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 bg-corporate-primary/75" />
                    </>
                ) : (
                    <>
                        {/* Fallback Patterns */}
                        {pattern === "grid" && (
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        )}
                        {pattern === "dots" && (
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        )}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-corporate-surface/80 blur-[100px] rounded-full mix-blend-multiply opacity-70"></div>
                    </>
                )}
            </div>

            <Container className="relative z-10 text-center">
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center mb-6 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-corporate-primary"
                        >
                            <span className="w-2 h-2 rounded-full bg-corporate-tertiary mr-2 animate-pulse"></span>
                            {badge}
                        </motion.div>
                    )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Heading
                        variant="h1"
                        className={cn(
                            "max-w-4xl mx-auto mb-6 text-5xl md:text-7xl leading-tight",
                            (videoSrc || backgroundImage) && "text-white drop-shadow-md"
                        )}>
                        {title}
                    </Heading>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Text
                        variant="large"
                        className={cn(
                            "max-w-2xl mx-auto mb-10",
                            (videoSrc || backgroundImage) ? "text-slate-100/90" : "text-slate-600"
                        )}>
                        {subtitle}
                    </Text>
                </motion.div>

                {ctaLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all transform bg-corporate-secondary rounded-full hover:bg-corporate-primary hover:scale-105 shadow-xl shadow-corporate-secondary/20"
                        >
                            {ctaText || "Daha Fazlası"}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                )}
            </Container>
        </Section>
    )
}
