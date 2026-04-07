"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    MessageCircle, Globe, Zap, Heart, GraduationCap,
    ArrowRight, Coffee, Gamepad2, Music, PartyPopper
} from "lucide-react"

type CultureDict = {
    hero: { title: string; subtitle: string }
    cta: string
    mosaic: { title: string }
    section1: { title: string; desc: string; points: { title: string; desc: string }[] }
    section2: { title: string; desc: string; points: { title: string; desc: string }[] }
    section3: { title: string; desc: string; activities: string[]; training: { title: string; desc: string } }
}

const SECTION1_ICONS = [MessageCircle, Heart]
const SECTION1_COLORS = ["blue", "pink"]

const SECTION2_ICONS = [Zap, Globe]
const SECTION2_GRADIENTS = ["from-amber-500 to-orange-500", "from-emerald-500 to-teal-500"]

const SECTION3_ICONS = [Coffee, Gamepad2, Music, PartyPopper]
const SECTION3_COLORS = [
    "from-amber-500 to-orange-500",
    "from-violet-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-blue-500 to-indigo-500"
]

export default function CultureClient({ dict: d }: { dict: CultureDict }) {
    return (
        <div className="bg-white min-h-screen">
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden text-white">
                <Image
                    src="/images/headers/culture-hero.jpg"
                    alt="BGTS Culture"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-950/70 to-purple-950/60" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            <span dangerouslySetInnerHTML={{ __html: d.hero.title }} />
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            {d.hero.subtitle}
                        </p>

                        <AnimatedDiv delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                {d.cta} <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ PHOTO MOSAIC ═══════════ */}
            <section className="py-16 bg-slate-50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
                            <span dangerouslySetInnerHTML={{ __html: d.mosaic.title }} />
                        </h2>
                    </div>
                    <AnimatedDiv className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            "/images/culture/culture-1.jpg",
                            "/images/culture/culture-2.jpg",
                            "/images/culture/culture-3.jpg",
                            "/images/culture/culture-4.jpg",
                        ].map((src, i) => (
                            <div key={i} className="relative h-48 rounded-2xl overflow-hidden group">
                                <Image
                                    src={src}
                                    alt={`Culture ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </AnimatedDiv>
                </Container>
            </section>

            {/* ═══════════ SECTION 1 ═══════════ */}
            <section id="culture-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-7.jpg"
                                        alt="Culture"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.section1.title }} />
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {d.section1.desc}
                            </p>
                            <div className="grid gap-3">
                                {d.section1.points.map((item, i) => {
                                    const Icon = SECTION1_ICONS[i] || MessageCircle;
                                    const color = SECTION1_COLORS[i] || "blue";
                                    return (
                                        <div key={i} className={`flex gap-4 p-4 bg-${color}-50/50 rounded-xl border border-${color}-100/50 hover:shadow-md transition-all`}>
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 text-white flex items-center justify-center shrink-0`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 2 ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.section2.title }} />
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {d.section2.desc}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {d.section2.points.map((item, i) => {
                                    const Icon = SECTION2_ICONS[i] || Zap;
                                    const gradient = SECTION2_GRADIENTS[i] || SECTION2_GRADIENTS[0];
                                    return (
                                        <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-lg transition-all group">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/esnek-calisma.jpg"
                                        alt="Agile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 3 ═══════════ */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-2.jpg"
                                        alt="Social"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2 order-1 lg:order-2">

                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.section3.title }} />
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {d.section3.desc}
                            </p>

                            <div className="grid grid-cols-4 gap-3 mb-8">
                                {d.section3.activities.map((label, i) => {
                                    const Icon = SECTION3_ICONS[i] || Coffee;
                                    const color = SECTION3_COLORS[i] || SECTION3_COLORS[0];
                                    return (
                                        <div key={i} className="text-center group cursor-default">
                                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-600">{label}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="bg-gradient-to-br from-violet-50 to-pink-50 p-6 rounded-2xl border border-violet-100/50">
                                <div className="flex gap-4 items-start">
                                    <GraduationCap className="w-7 h-7 text-violet-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{d.section3.training.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {d.section3.training.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>
        </div>
    )
}
