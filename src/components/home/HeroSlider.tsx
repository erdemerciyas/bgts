"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

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
        ctaLink: "/services",
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
        <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <Container className="relative z-10 h-full flex items-center">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                BGTS Teknoloji
                            </div>

                            <Heading variant="h1" className="text-white text-5xl md:text-7xl mb-6 leading-tight drop-shadow-2xl">
                                {SLIDES[currentSlide].title}
                            </Heading>

                            <Text variant="large" className="text-slate-200 text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed drop-shadow-lg">
                                {SLIDES[currentSlide].subtitle}
                            </Text>

                            <Link
                                href={SLIDES[currentSlide].ctaLink}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-corporate-secondary hover:bg-corporate-primary text-white text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 group"
                            >
                                {SLIDES[currentSlide].ctaText}
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>

            {/* Navigation Buttons */}
            <div className="absolute bottom-10 right-4 md:right-20 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Önceki Slayt"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Sonraki Slayt"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${currentSlide === index ? "w-10 bg-corporate-secondary" : "w-2 bg-white/40 hover:bg-white/80"
                            }`}
                        aria-label={`Slayt ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
