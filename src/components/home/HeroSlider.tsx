"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronRight, Code, Server, Database, Cloud, Cpu, Smartphone } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

const techBubbles = [
    { icon: Code, label: "React & Next.js", color: "text-cyan-400", bg: "bg-cyan-500/20", top: "10%", right: "15%", delay: 0 },
    { icon: Server, label: ".NET & Java", color: "text-purple-400", bg: "bg-purple-500/20", top: "25%", right: "70%", delay: 1.2 },
    { icon: Database, label: "Veri Tabanı Sistemleri", color: "text-blue-400", bg: "bg-blue-500/20", top: "60%", right: "80%", delay: 2.4 },
    { icon: Cloud, label: "Bulut Bilişim", color: "text-amber-400", bg: "bg-amber-500/20", top: "45%", right: "5%", delay: 1.8 },
    { icon: Cpu, label: "Yapay Zeka & Veri Bilimi", color: "text-emerald-400", bg: "bg-emerald-500/20", top: "75%", right: "35%", delay: 0.7 },
    { icon: Smartphone, label: "Mobil Destek", color: "text-pink-400", bg: "bg-pink-500/20", top: "0%", right: "45%", delay: 2.0 },
]

const SLIDES = [
    {
        id: 1,
        image: "/images/headers/yazilim-gelistirme-ve-inovasyon.jpg",
        title: "Teknoloji Servisleri & Yazılım",
        subtitle: "Modern yazılım çözümleri ve teknoloji servisleri ile işletmenizi geleceğe taşıyın.",
        ctaText: "Hizmetlerimiz",
        ctaLink: "/services/software-development",
    },
    {
        id: 2,
        image: "/images/headers/proje-yapim-sekillerimiz.jpg",
        title: "Proje Yapım Şekillerimiz",
        subtitle: "İhtiyacınıza uygun esnek çalışma modelleri ve çevik süreçler.",
        ctaText: "Nasıl Çalışıyoruz?",
        ctaLink: "#",
    },
    {
        id: 3,
        image: "/images/headers/bgts-kariyer-firsatlari.jpg",
        title: "Geleceği Birlikte Şekillendirelim",
        subtitle: "Şeffaf iletişim, takım ruhu ve sürekli öğrenme tutkusuyla büyüyen global bir aileyiz.",
        ctaText: "Kariyer Fırsatları",
        ctaLink: "/hr",
    },
]

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-play logic: Reset timer whenever currentSlide changes (auto or manual)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
        }, 6000)
        return () => clearTimeout(timer)
    }, [currentSlide])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
    }

    return (
        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
            {/* Background Images */}
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={SLIDES[currentSlide].image}
                        alt={SLIDES[currentSlide].title}
                        fill
                        priority={true}
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </motion.div>
            </AnimatePresence>

            <Container className="relative z-10 h-full flex items-center pb-20 md:pb-0">
                <div className="w-full pt-20 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col xl:flex-row items-center justify-between gap-10"
                        >

                            <div className="max-w-4xl">
                                <Heading variant="h1" className="text-white text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl">
                                    {SLIDES[currentSlide].title}
                                </Heading>

                                <Text variant="large" className="text-slate-200 text-lg md:text-2xl mb-8 md:mb-10 max-w-2xl font-light leading-relaxed drop-shadow-lg opacity-90">
                                    {SLIDES[currentSlide].subtitle}
                                </Text>

                                <Link
                                    href={SLIDES[currentSlide].ctaLink}
                                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-corporate-secondary hover:bg-corporate-dark text-white text-base md:text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 group"
                                >
                                    {SLIDES[currentSlide].ctaText}
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Floating Tech Bubbles - Only visible on the first slide and on larger screens */}
                            {currentSlide === 0 && (
                                <div className="hidden xl:block relative w-full h-[400px] flex-1 max-w-xl">
                                    {techBubbles.map((bubble, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + idx * 0.15, duration: 0.5, ease: "easeOut" }}
                                            className="absolute"
                                            style={{ top: bubble.top, right: bubble.right }}
                                        >
                                            <motion.div
                                                animate={{ y: [0, -15, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: bubble.delay }}
                                                className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-2xl hover:bg-slate-800/60 hover:border-white/20 transition-colors cursor-default"
                                            >
                                                <div className={`p-2 rounded-full ${bubble.bg}`}>
                                                    <bubble.icon className={`w-5 h-5 ${bubble.color}`} />
                                                </div>
                                                <span className="text-white font-medium text-[15px] tracking-wide whitespace-nowrap">{bubble.label}</span>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>

            {/* Navigation Buttons - Hidden on very small screens, visible on md+ */}
            <div className="hidden md:flex absolute bottom-10 right-20 gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group"
                    aria-label="Önceki Slayt"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 active:scale-95 group"
                    aria-label="Sonraki Slayt"
                >
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${currentSlide === index ? "w-8 md:w-12 bg-corporate-secondary" : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                        aria-label={`Slayt ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
