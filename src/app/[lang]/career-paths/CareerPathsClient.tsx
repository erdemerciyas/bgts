"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    BarChart3, Rocket, Target, Users,
    ArrowRight, TrendingUp, Award
} from "lucide-react"

type CareerPathsDict = {
    hero: { title: string; subtitle: string }
    cta: string
    cta_intern: string
    section1: { title: string; desc: string; points: string[] }
    section2: { title: string; desc: string; targetsTitle: string; targetsDesc: string; feedbackTitle: string; feedbackDesc: string }
    section3: { title: string; desc: string; boxTitle: string; boxDesc: string }
    section4: { title: string; desc: string; competence: string; performance: string; potential: string }
    internship: {
        intro: string
        criteriaTitle: string
        criteria: string[]
    }
}

const SECTION4_ICONS = [Award, BarChart3, Rocket]
const SECTION4_COLORS = [
    "from-emerald-500 to-teal-600",
    "from-blue-500 to-indigo-600",
    "from-violet-500 to-purple-600"
]

export default function CareerPathsClient({ dict: d }: { dict: CareerPathsDict }) {
    return (
        <div className="bg-white min-h-screen">
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden text-white">
                <Image
                    src="/images/headers/kariyerini-sen-sekillendir.jpg"
                    alt="Career Paths"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-950/70 to-indigo-950/60" />

                <Container className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                            <span dangerouslySetInnerHTML={{ __html: d.hero.title }} />
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            {d.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                {d.cta} <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                            <Link
                                href="#staj-programi"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg border border-blue-500/20"
                            >
                                {d.cta_intern} <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>

                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 1 ═══════════ */}
            <section id="career-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-1.jpg"
                                        alt="Career Tracks"
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
                            <div className="space-y-3">
                                {d.section1.points.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center shrink-0">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
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
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-violet-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Target className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{d.section2.targetsTitle}</h4>
                                    <p className="text-sm text-slate-500">{d.section2.targetsDesc}</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-violet-100/50 hover:shadow-lg transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1">{d.section2.feedbackTitle}</h4>
                                    <p className="text-sm text-slate-500">{d.section2.feedbackDesc}</p>
                                </div>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-3.jpg"
                                        alt="Performance"
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
                                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-4.jpg"
                                        alt="Rotations"
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
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100/50">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">{d.section3.boxTitle}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {d.section3.boxDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ SECTION 4 ═══════════ */}
            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.section4.title }} />
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {d.section4.desc}
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {[d.section4.competence, d.section4.performance, d.section4.potential].map((label, i) => {
                                    const Icon = SECTION4_ICONS[i] || Award;
                                    const color = SECTION4_COLORS[i] || SECTION4_COLORS[0];
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
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-5.jpg"
                                        alt="Development"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>

            {/* ═══════════ INTERNSHIP SECTION ═══════════ */}
            <section id="staj-programi" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/genc-muhendis/staj.jpg"
                                        alt="BGTS Staj Programı"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg border border-blue-500/20"
                                >
                                    Programa Başvur <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2 order-1 lg:order-2">
                            <p className="text-lg lg:text-xl text-blue-200 leading-relaxed mb-8">
                                {d.internship.intro}
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {d.internship.criteriaTitle}
                            </h3>
                            <div className="space-y-3">
                                {d.internship.criteria.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-xs font-bold">{i + 1}</span>
                                        </div>
                                        <span className="text-blue-100 leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>
        </div>
    )
}
