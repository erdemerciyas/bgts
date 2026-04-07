"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import {
    Award, Users, MonitorPlay, ArrowRight
} from "lucide-react"

type LearningDict = {
    hero: { title: string; subtitle: string }
    cta: string
    section1: { title: string; desc: string; certification: string; certificationDesc: string; access: string; accessDesc: string }
    section2: { title: string; desc: string; strategic: string; strategicDesc: string; mentorship: string; mentorshipDesc: string }
    section3: { title: string; desc: string; boxTitle: string; boxDesc: string }
}

export default function LearningClient({ dict: d }: { dict: LearningDict }) {
    return (
        <div className="bg-white min-h-screen">
            {/* ═══════════ HERO ═══════════ */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden text-white">
                <Image
                    src="/images/headers/ogrenme-hero.jpg"
                    alt="Learning"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-950/70 to-teal-950/60" />

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

            {/* ═══════════ SECTION 1 ═══════════ */}
            <section id="learning-details" className="py-20 bg-white scroll-mt-20">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <AnimatedDiv className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-6.jpg"
                                        alt="Training"
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
                                {[
                                    { icon: Award, title: d.section1.certification, desc: d.section1.certificationDesc, color: "from-emerald-500 to-teal-600" },
                                    { icon: MonitorPlay, title: d.section1.access, desc: d.section1.accessDesc, color: "from-blue-500 to-indigo-600" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100/50 hover:shadow-md transition-all">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shrink-0`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                        </div>
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
                            <div className="space-y-4">
                                {[
                                    { num: "1", title: d.section2.strategic, desc: d.section2.strategicDesc },
                                    { num: "2", title: d.section2.mentorship, desc: d.section2.mentorshipDesc },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-rose-100/50 hover:shadow-md transition-all">
                                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shrink-0 font-black text-sm">
                                            {item.num}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedDiv>

                        <AnimatedDiv className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-3.jpg"
                                        alt="Leadership"
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
                                <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/culture/culture-1.jpg"
                                        alt="Community"
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
                            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-2xl border border-indigo-100/50">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6" />
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
        </div>
    )
}
