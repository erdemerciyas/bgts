"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
            <section className={cn("relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden", className)}>
                {/* Background Patterns */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {pattern === "grid" && (
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    )}
                    {pattern === "dots" && (
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    )}
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            {badge && (
                                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
                                    <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                                    {badge}
                                </div>
                            )}
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15] font-heading">
                                {title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                                {subtitle}
                            </p>

                            {ctaLink && (
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={ctaLink}
                                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20"
                                    >
                                        {ctaText || "Keşfedin"}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300"
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
                </div>
            </section>
        )
    }

    // Simple Layout (Centered) - Enhanced for Video Background
    return (
        <section className={cn("relative py-32 lg:py-48 overflow-hidden min-h-[80vh] flex items-center", className)}>
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
                        <div className="absolute inset-0 bg-slate-900/60" />
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
                        <div className="absolute inset-0 bg-slate-900/70" />
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
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full mix-blend-multiply opacity-70"></div>
                    </>
                )}
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                {badge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center mb-6 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        {badge}
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={cn(
                        "max-w-4xl mx-auto mb-6 text-5xl font-extrabold tracking-tight md:text-7xl font-heading leading-tight",
                        (videoSrc || backgroundImage) ? "text-white" : "text-slate-900"
                    )}
                >
                    {title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={cn(
                        "max-w-2xl mx-auto mb-10 text-xl leading-relaxed",
                        (videoSrc || backgroundImage) ? "text-slate-200" : "text-slate-600"
                    )}
                >
                    {subtitle}
                </motion.p>

                {ctaLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-600/20"
                        >
                            {ctaText || "Daha Fazlası"}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
