"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    ArrowRight,
    Check,
    GraduationCap,
    Layers,
    Link2,
    Plus,
    Sparkles,
    Target,
    TrendingUp,
    UserPlus,
    Users,
} from "lucide-react"

const APPLY_FORM =
    "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=1C_AnU3vWE2CLmh88-G621dwCQF5et1CuSvVsbV3b2ZUMDRYTkdFSVlNOTA1V1c3NjhIQTRXNEJNTi4u"

const IMAGES = {
    hero: {
        src: "/images/connected/hero.webp",
        alt: "ConnectED kariyer ve gelişim programı",
    },
    logo: {
        src: "/images/connected/logo.png",
        dark: "/images/connected/logo-on-dark.png",
        alt: "BGTS ConnectED",
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
            className: "lg:row-span-2 min-h-[280px] lg:min-h-[360px]",
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
            className: "lg:col-span-2 min-h-[160px] lg:min-h-[172px]",
        },
    ],
} as const

const PILLAR_ACCENT = [
    { bar: "bg-corporate-tertiary", letter: "text-corporate-tertiary" },
    { bar: "bg-corporate-accent", letter: "text-corporate-accent" },
    { bar: "bg-corporate-dark", letter: "text-corporate-dark" },
] as const

const PROGRAM_ICONS = [UserPlus, Sparkles, Layers, TrendingUp]
const BENEFIT_ICONS = [Link2, Target, GraduationCap, TrendingUp]

type Stat = { value: string; label: string }
type Pillar = { letter: string; title: string; desc: string; points: string[] }
type ProgramStep = { title: string; desc: string; points: string[]; badge: string }
type Benefit = { title: string; badge: string; points: string[] }
type Track = { title: string; desc: string }
type AudienceGroup = { title: string; desc: string }
type FaqItem = { q: string; a: string }
type Quote = { text: string; name: string; role: string }

type ConnectedDict = {
    hero: { title: string; subtitle: string; stats: Stat[] }
    cta: string
    ctaExplore: string
    pillars: { words: string; items: Pillar[] }
    intro: { title: string; desc: string; desc2: string; minis: Stat[] }
    kpi: { title: string; desc: string; items: Stat[]; sectors: string[]; disclaimer: string }
    program: { title: string; subtitle: string; steps: ProgramStep[]; disclaimer: string }
    tracks: { title: string; subtitle: string; items: Track[]; disclaimer: string }
    benefits: { title: string; subtitle: string; items: Benefit[] }
    value: { title: string; desc: string; desc2: string }
    audience: { title: string; subtitle: string; groups: AudienceGroup[]; reqs: string[] }
    gallery: { title: string }
    quotes: Quote[]
    faq: { title: string; items: FaqItem[] }
    closingCta: { title: string; subtitle: string; cta: string }
}

function isDevBadge(badge: string) {
    return badge.includes("Development")
}

function Badge({ label }: { label: string }) {
    return (
        <span
            lang="en"
            className={`inline-block self-start rounded-full px-2.5 py-1 text-[10.5px] font-heading font-semibold uppercase tracking-[0.12em] ${
                isDevBadge(label)
                    ? "bg-[#E7EFFB] text-[#1F4E9C]"
                    : "bg-[#E3F5F3] text-[#0B7F79]"
            }`}
        >
            {label}
        </span>
    )
}

function ImageFrame({
    src,
    alt,
    sizes,
    className = "aspect-[4/3]",
}: {
    src: string
    alt: string
    sizes: string
    className?: string
}) {
    return (
        <div className={`relative overflow-hidden rounded-[20px] shadow-[0_30px_60px_-40px_rgba(11,27,51,0.6)] ${className}`}>
            <Image src={src} alt={alt} fill sizes={sizes} quality={85} className="object-cover" />
        </div>
    )
}

function Logo({
    onDark = false,
    className = "h-16 w-[280px]",
}: {
    onDark?: boolean
    className?: string
}) {
    const image = (
        <div className={`relative mx-auto ${className}`}>
            <Image
                src={onDark ? IMAGES.logo.dark : IMAGES.logo.src}
                alt={IMAGES.logo.alt}
                fill
                priority={onDark}
                sizes="300px"
                className="object-contain"
            />
        </div>
    )

    if (!onDark) return image

    return (
        <div className="inline-flex items-center rounded-2xl bg-white px-5 py-3 shadow-sm">
            {image}
        </div>
    )
}

export default function ConnectedClient({ dict: d }: { dict: ConnectedDict }) {
    const wordParts = d.pillars.words.split(" & ")

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 text-white lg:pt-40">
                <Image
                    src={IMAGES.hero.src}
                    alt={IMAGES.hero.alt}
                    fill
                    priority
                    sizes="100vw"
                    quality={85}
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark/90 via-corporate-dark/88 to-[#0D2344]/94" />

                <Container className="relative z-10">
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                        <AnimatedDiv className="flex justify-center">
                            <Logo onDark className="h-[64px] w-[300px]" />
                        </AnimatedDiv>

                        <Heading
                            as="h1"
                            variant="h1"
                            className="whitespace-pre-line text-4xl font-black tracking-tight text-white lg:text-[54px] lg:leading-[1.15]"
                        >
                            {d.hero.title}
                        </Heading>

                        <Text variant="bodyLg" className="mx-auto max-w-[760px] text-[17px] text-slate-300">
                            {d.hero.subtitle}
                        </Text>

                        <AnimatedDiv delay={0.15} className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
                            <Link
                                href="#basvuru"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-bold text-corporate-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-corporate-surface"
                            >
                                {d.cta} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#program"
                                className="inline-flex items-center justify-center rounded-full border border-white/55 px-8 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                            >
                                {d.ctaExplore}
                            </Link>
                        </AnimatedDiv>
                    </div>

                    <div className="mt-16 grid grid-cols-2 border-t border-white/18 lg:grid-cols-4">
                        {d.hero.stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`px-3 py-6 text-center lg:text-left ${
                                    i < d.hero.stats.length - 1 ? "lg:border-r lg:border-white/18" : ""
                                } ${i < 2 ? "border-b border-white/18 lg:border-b-0" : ""}`}
                            >
                                <div className="font-heading text-3xl font-bold tracking-tight text-white">{stat.value}</div>
                                <Text variant="caption" className="mt-1 text-[12.5px] tracking-wide text-[#A7BFDB]">
                                    {stat.label}
                                </Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* C · E · D */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto max-w-3xl space-y-6 text-center">
                        <Logo className="h-[62px] w-[300px]" />
                        <Text as="p" lang="en" variant="large" className="font-heading text-base font-semibold uppercase tracking-[0.16em] text-corporate-dark md:text-[23px]">
                            {wordParts.map((word, i) => (
                                <span key={word}>
                                    {i > 0 && <span className="mx-1.5 text-corporate-tertiary">&amp;</span>}
                                    {word}
                                </span>
                            ))}
                        </Text>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {d.pillars.items.map((pillar, i) => {
                            const accent = PILLAR_ACCENT[i] ?? PILLAR_ACCENT[0]
                            return (
                                <AnimatedDiv key={pillar.letter} delay={i * 0.08}>
                                    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-[0_1px_2px_rgba(16,32,60,0.04),0_20px_40px_-34px_rgba(16,32,60,0.5)]">
                                        <span className={`absolute inset-y-0 left-0 w-[5px] ${accent.bar}`} />
                                        <div className={`font-heading text-[46px] font-bold leading-none ${accent.letter}`}>
                                            {pillar.letter}
                                        </div>
                                        <Heading variant="h3" className="mt-3.5 text-[19px]">
                                            {pillar.title}
                                        </Heading>
                                        <Text variant="default" className="mt-2.5 text-[14.5px] text-text-secondary">
                                            {pillar.desc}
                                        </Text>
                                        <ul className="mt-4 space-y-1.5">
                                            {pillar.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2.5 text-sm text-text-primary">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corporate-secondary" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </AnimatedDiv>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* Intro */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <AnimatedDiv>
                            <ImageFrame
                                src={IMAGES.intro.src}
                                alt={IMAGES.intro.alt}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </AnimatedDiv>

                        <AnimatedDiv className="space-y-5">
                            <div className="h-1 w-12 rounded-full bg-corporate-secondary" />
                            <Heading variant="h2" className="text-3xl font-black leading-tight lg:text-4xl">
                                {d.intro.title}
                            </Heading>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.intro.desc}
                            </Text>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.intro.desc2}
                            </Text>
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {d.intro.minis.map((mini) => (
                                    <div key={mini.label} className="border-l-[3px] border-border pl-3.5">
                                        <div className="font-heading text-[22px] font-bold text-corporate-secondary">
                                            {mini.value}
                                        </div>
                                        <Text variant="caption" className="mt-0.5 text-[13px] text-text-secondary">
                                            {mini.label}
                                        </Text>
                                    </div>
                                ))}
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </Section>

            {/* KPI */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.kpi.title}
                        </Heading>
                        <Text variant="bodyLg" className="mx-auto text-text-secondary">
                            {d.kpi.desc}
                        </Text>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
                        {d.kpi.items.map((item, i) => (
                            <AnimatedDiv key={item.label} delay={i * 0.06}>
                                <div className="rounded-2xl border border-border bg-white px-5 py-7 text-center">
                                    <div className="font-heading text-[38px] font-bold leading-none text-corporate-secondary">
                                        {item.value}
                                    </div>
                                    <Text variant="caption" className="mt-2.5 text-[13.5px] text-text-secondary">
                                        {item.label}
                                    </Text>
                                </div>
                            </AnimatedDiv>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                        {d.kpi.sectors.map((sector) => (
                            <span
                                key={sector}
                                className="rounded-full border border-border bg-white px-5 py-2 text-sm text-corporate-dark"
                            >
                                {sector}
                            </span>
                        ))}
                    </div>
                    <Text variant="caption" className="mx-auto mt-5 max-w-2xl text-center text-[13px] text-[#93A1B5]">
                        {d.kpi.disclaimer}
                    </Text>
                </Container>
            </Section>

            {/* Program flow */}
            <Section id="program" background="muted" className="scroll-mt-24 py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.program.title}
                        </Heading>
                        <Text variant="bodyLg" className="mx-auto text-text-secondary">
                            {d.program.subtitle}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {d.program.steps.map((step, i) => {
                            const Icon = PROGRAM_ICONS[i] ?? Link2
                            const stepNum = String(i + 1).padStart(2, "0")
                            return (
                                <AnimatedDiv key={step.title} delay={i * 0.08}>
                                    <article className="relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(16,32,60,0.04),0_20px_40px_-34px_rgba(16,32,60,0.5)]">
                                        <span className="absolute right-5 top-4 grid h-7 w-7 place-items-center rounded-full bg-corporate-dark font-heading text-[13px] font-bold text-white">
                                            {stepNum}
                                        </span>
                                        <div className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-corporate-secondary text-white">
                                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                                        </div>
                                        <Heading variant="h3" className="mt-4 text-[16.5px]">
                                            {step.title}
                                        </Heading>
                                        <Text variant="default" className="mt-2.5 text-sm text-text-secondary">
                                            {step.desc}
                                        </Text>
                                        <ul className="mt-3.5 mb-4 space-y-1.5">
                                            {step.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-[13.5px] text-text-primary">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-corporate-tertiary" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-auto">
                                            <Badge label={step.badge} />
                                        </div>
                                    </article>
                                </AnimatedDiv>
                            )
                        })}
                    </div>
                    <Text variant="caption" className="mx-auto mt-5 max-w-2xl text-center text-[13px] text-[#93A1B5]">
                        {d.program.disclaimer}
                    </Text>
                </Container>
            </Section>

            {/* Tracks */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.tracks.title}
                        </Heading>
                        <Text variant="bodyLg" className="mx-auto text-text-secondary">
                            {d.tracks.subtitle}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {d.tracks.items.map((track, i) => (
                            <AnimatedDiv key={track.title} delay={i * 0.04}>
                                <article className="h-full rounded-2xl border border-border bg-white p-5 text-left">
                                    <Heading variant="h4" className="text-[15.5px]">
                                        {track.title}
                                    </Heading>
                                    <Text variant="caption" className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">
                                        {track.desc}
                                    </Text>
                                </article>
                            </AnimatedDiv>
                        ))}
                    </div>
                    <Text variant="caption" className="mx-auto mt-5 max-w-2xl text-center text-[13px] text-[#93A1B5]">
                        {d.tracks.disclaimer}
                    </Text>
                </Container>
            </Section>

            {/* Benefits */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.benefits.title}
                        </Heading>
                        <Text variant="bodyLg" className="mx-auto text-text-secondary">
                            {d.benefits.subtitle}
                        </Text>
                    </div>

                    <div className="space-y-4">
                        {d.benefits.items.map((item, i) => {
                            const Icon = BENEFIT_ICONS[i] ?? Users
                            return (
                                <AnimatedDiv key={item.title} delay={i * 0.06}>
                                    <div className="grid items-center gap-6 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-corporate-secondary/30 hover:shadow-md lg:grid-cols-[64px_1.05fr_1.55fr] lg:gap-6 lg:p-7">
                                        <div className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-corporate-secondary text-white">
                                            <Icon className="h-5 w-5" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <Heading variant="h3" className="text-[17px]">
                                                {item.title}
                                            </Heading>
                                            <div className="mt-2">
                                                <Badge label={item.badge} />
                                            </div>
                                        </div>
                                        <ul className="grid gap-2 sm:grid-cols-3 sm:gap-x-5">
                                            {item.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-sm text-text-secondary">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-corporate-accent" />
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
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <AnimatedDiv className="order-2 space-y-5 lg:order-1">
                            <div className="h-1 w-12 rounded-full bg-corporate-secondary" />
                            <Heading variant="h2" className="text-3xl font-black leading-tight lg:text-4xl">
                                {d.value.title}
                            </Heading>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.value.desc}
                            </Text>
                            <Text variant="bodyLg" className="text-text-secondary">
                                {d.value.desc2}
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

            {/* Audience */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.audience.title}
                        </Heading>
                        <Text variant="bodyLg" className="mx-auto text-text-secondary">
                            {d.audience.subtitle}
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {d.audience.groups.map((group, i) => (
                            <AnimatedDiv key={group.title} delay={i * 0.08}>
                                <article className="h-full rounded-2xl border border-border bg-white p-7 text-left">
                                    <Heading variant="h3" className="mb-2.5 text-[17px]">
                                        {group.title}
                                    </Heading>
                                    <Text variant="default" className="text-[14.5px] text-text-secondary">
                                        {group.desc}
                                    </Text>
                                </article>
                            </AnimatedDiv>
                        ))}
                    </div>

                    <div className="mx-auto mt-9 grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8">
                        {d.audience.reqs.map((req) => (
                            <div key={req} className="flex items-start gap-3 text-left text-[14.5px] text-text-primary">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-corporate-tertiary" strokeWidth={2.5} />
                                {req}
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Gallery */}
            <Section className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.gallery.title}
                        </Heading>
                    </div>

                    <AnimatedDiv className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.32fr_1fr_1fr]">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        ))}
                    </AnimatedDiv>

                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                        {d.quotes.map((quote, i) => (
                            <AnimatedDiv key={quote.name} delay={i * 0.08}>
                                <article className="h-full rounded-2xl border border-border bg-white p-6 text-left">
                                    <div className="font-heading text-[38px] font-bold leading-none text-[#D8E2F0]">“</div>
                                    <Text variant="default" className="mt-2 text-[14.5px] text-text-primary">
                                        {quote.text}
                                    </Text>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-[38px] w-[38px] shrink-0 rounded-full bg-[#DEE6F1]" />
                                        <div>
                                            <Heading variant="h4" className="text-[13.5px]">
                                                {quote.name}
                                            </Heading>
                                            <Text variant="caption" className="block text-[12.5px] text-text-secondary">
                                                {quote.role}
                                            </Text>
                                        </div>
                                    </div>
                                </article>
                            </AnimatedDiv>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section background="muted" className="py-20 lg:py-24">
                <Container>
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <Heading variant="h2" className="text-3xl font-black lg:text-4xl">
                            {d.faq.title}
                        </Heading>
                    </div>

                    <div className="mx-auto max-w-[880px] space-y-3">
                        {d.faq.items.map((item, i) => (
                            <details
                                key={item.q}
                                className="group rounded-2xl border border-border bg-white px-6 py-4"
                                open={i === 0}
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-semibold text-corporate-dark [&::-webkit-details-marker]:hidden">
                                    {item.q}
                                    <Plus className="h-5 w-5 shrink-0 text-corporate-secondary transition-transform duration-200 group-open:rotate-45" />
                                </summary>
                                <Text variant="default" className="mt-3 text-[14.5px] text-text-secondary">
                                    {item.a}
                                </Text>
                            </details>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Closing CTA */}
            <Section id="basvuru" background="dark" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-24">
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-dark via-[#1B3E77] to-corporate-accent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(58,124,181,0.25),transparent_60%)]" />

                <Container className="relative z-10">
                    <AnimatedDiv className="mx-auto max-w-2xl space-y-6 text-center">
                        <Heading variant="h2" className="text-3xl font-black text-white lg:text-4xl">
                            {d.closingCta.title}
                        </Heading>
                        <Text variant="bodyLg" className="text-[#C7D8EE]">
                            {d.closingCta.subtitle}
                        </Text>
                        <div className="flex justify-center pt-2">
                            <Link
                                href={APPLY_FORM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-bold text-corporate-dark shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-corporate-surface"
                            >
                                {d.closingCta.cta} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </AnimatedDiv>
                </Container>
            </Section>
        </div>
    )
}
