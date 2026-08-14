"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    ArrowRight,
    Users,
    Briefcase,
    GraduationCap,
    TrendingUp,
    Target,
    Link2,
} from "lucide-react"

const LINKEDIN_JOBS = "https://www.linkedin.com/company/bilgeadam/jobs/"

/** Optimized WebP assets — semantic mapping for ConnectED content */
const IMAGES = {
    hero: {
        src: "/images/connected/hero.webp",
        alt: "ConnectED kariyer ve gelişim programı",
    },
    intro: {
        src: "/images/connected/intro.webp",
        alt: "Genç yetenekler staj ve proje deneyimi kazanıyor",
    },
    value: {
        src: "/images/connected/value.webp",
        alt: "Uzman seçme ve yerleştirme ekibi toplantısı",
    },
    gallery: [
        {
            src: "/images/connected/gallery-team.webp",
            alt: "BGTS ekip çalışması ve iş birliği",
            className: "col-span-2 row-span-2 min-h-[280px] lg:min-h-[360px]",
        },
        {
            src: "/images/connected/gallery-workspace.webp",
            alt: "Modern ve esnek çalışma ortamı",
            className: "min-h-[140px] lg:min-h-[172px]",
        },
        {
            src: "/images/connected/gallery-collab.webp",
            alt: "Proje ekiplerinde birlikte üretim",
            className: "min-h-[140px] lg:min-h-[172px]",
        },
        {
            src: "/images/connected/gallery-office.webp",
            alt: "Ofis yaşamı ve ekip etkinlikleri",
            className: "col-span-2 min-h-[160px] lg:min-h-[172px]",
        },
    ],
} as const

const JOURNEY_ICONS = [Link2, Briefcase, GraduationCap, TrendingUp]
const BENEFIT_ICONS = [Users, Target, GraduationCap, TrendingUp]

type ConnectedDict = {
    hero: {
        title: string
        tagline: string
        paragraph1: string
        paragraph2: string
    }
    cta: string
    ctaExplore: string
    intro: { title: string; desc: string }
    journey: {
        title: string
        subtitle: string
        steps: { title: string; desc: string }[]
    }
    benefits: {
        items: { title: string; points: string[] }[]
    }
    value: { title: string; desc: string }
    gallery: { title: string }
    closingCta: { title: string; subtitle: string }
}

function ImageFrame({
    src,
    alt,
    priority = false,
    sizes,
    className = "aspect-[4/3]",
}: {
    src: string
    alt: string
    priority?: boolean
    sizes: string
    className?: string
}) {
    return (
        <div className="relative">
            <div className="absolute -inset-2 bg-corporate-secondary/10 rounded-2xl blur-xl" />
            <div className={`relative overflow-hidden rounded-2xl border border-border shadow-lg ${className}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    quality={85}
                    className="object-cover"
                />
            </div>
        </div>
    )
}

export default function ConnectedClient({ dict: d }: { dict: ConnectedDict }) {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden text-white">
                <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    priority
                    sizes="100vw"
                    quality={85}
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark/90 via-corporate-dark/80 to-corporate-secondary/70" />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <Heading
                            as="h1"
                            variant="h1"
                            className="text-white font-black text-4xl lg:text-6xl tracking-tight"
                        >
                            {d.hero.title}
                        </Heading>

                        <div className="space-y-4 max-w-2xl mx-auto">
                            <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                                {d.hero.paragraph1}
                            </p>
                            <p className="text-base lg:text-lg text-slate-300/90 leading-relaxed">
                                {d.hero.paragraph2}
                            </p>
                        </div>

                        <AnimatedDiv delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                href={LINKEDIN_JOBS}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-corporate-surface text-corporate-dark font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                            >
                                {d.cta} <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                            <Link
                                href="#connected-detay"
                                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {d.ctaExplore}
                            </Link>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* Intro */}
            <Section id="connected-detay" className="scroll-mt-24 py-20 lg:py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedDiv>
                            <ImageFrame
                                src={IMAGES.intro.src}
                                alt={IMAGES.intro.alt}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </AnimatedDiv>

                        <AnimatedDiv className="space-y-6">
                            <div className="w-12 h-1 rounded-full bg-corporate-secondary" />
                            <Heading variant="h2" className="text-3xl lg:text-4xl font-black leading-tight">
                                {d.intro.title}
                            </Heading>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.intro.desc}
                            </Text>
                        </AnimatedDiv>
                    </div>
                </Container>
            </Section>

            {/* Journey */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                        <Heading variant="h2" className="text-3xl lg:text-4xl font-black">
                            {d.journey.title}
                        </Heading>
                        <Text variant="bodyLg" className="text-text-secondary">
                            {d.journey.subtitle}
                        </Text>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-corporate-secondary/30 to-transparent" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                            {d.journey.steps.map((step, i) => {
                                const Icon = JOURNEY_ICONS[i] ?? Link2
                                const stepNum = String(i + 1).padStart(2, "0")
                                return (
                                    <AnimatedDiv key={step.title} delay={i * 0.08} className="relative text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                                            <div className="relative mx-auto lg:mx-0 shrink-0">
                                                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center">
                                                    <Icon className="w-7 h-7 text-corporate-secondary" strokeWidth={1.75} />
                                                </div>
                                                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-corporate-secondary text-white text-[11px] font-black flex items-center justify-center shadow">
                                                    {stepNum}
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-bold text-corporate-dark">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm text-text-secondary leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </AnimatedDiv>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Benefits */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="space-y-3">
                        {d.benefits.items.map((item, i) => {
                            const Icon = BENEFIT_ICONS[i] ?? Users
                            return (
                                <AnimatedDiv key={item.title} delay={i * 0.06}>
                                    <div className="group flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-corporate-surface border border-border hover:border-corporate-secondary/30 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center gap-5 lg:w-[42%] shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-corporate-secondary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                                                <Icon className="w-6 h-6" strokeWidth={1.75} />
                                            </div>
                                            <h3 className="text-lg font-bold text-corporate-dark leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <ul className="lg:flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                                            {item.points.map((point) => (
                                                <li
                                                    key={point}
                                                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-corporate-secondary mt-2.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedDiv>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* Value */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <AnimatedDiv className="space-y-6 order-2 lg:order-1">
                            <div className="w-12 h-1 rounded-full bg-corporate-secondary" />
                            <Heading variant="h2" className="text-3xl lg:text-4xl font-black leading-tight">
                                {d.value.title}
                            </Heading>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.value.desc}
                            </Text>
                        </AnimatedDiv>

                        <AnimatedDiv className="order-1 lg:order-2">
                            <ImageFrame
                                src={IMAGES.value.src}
                                alt={IMAGES.value.alt}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </AnimatedDiv>
                    </div>
                </Container>
            </Section>

            {/* Gallery — editorial bento */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
                        <Heading variant="h2" className="text-3xl lg:text-4xl font-black">
                            {d.gallery.title}
                        </Heading>
                    </div>

                    <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-fr">
                        {IMAGES.gallery.map((img, i) => (
                            <div
                                key={img.src}
                                className={`relative overflow-hidden rounded-2xl border border-border group ${img.className}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                                    quality={85}
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </AnimatedDiv>
                </Container>
            </Section>

            {/* Closing CTA */}
            <Section background="dark" className="py-20 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(58,124,181,0.2),transparent_60%)]" />

                <Container className="relative z-10">
                    <AnimatedDiv className="max-w-2xl mx-auto text-center space-y-6">
                        <Heading variant="h2" className="text-white text-3xl lg:text-4xl font-black">
                            {d.closingCta.title}
                        </Heading>
                        <p className="text-lg text-corporate-accent font-medium">
                            {d.closingCta.subtitle}
                        </p>
                        <Link
                            href={LINKEDIN_JOBS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-corporate-surface text-corporate-dark font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                        >
                            {d.cta} <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </AnimatedDiv>
                </Container>
            </Section>
        </div>
    )
}
