"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { CheckCircle2, Bot, FileText, Video, Users, ArrowRight } from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const FEATURE_ICONS = [FileText, Users, Bot, CheckCircle2, Video, FileText]
const FEATURE_COLORS = [
    { bg: "bg-blue-50", icon: "text-blue-600" },
    { bg: "bg-purple-50", icon: "text-purple-600" },
    { bg: "bg-cyan-50", icon: "text-cyan-600" },
    { bg: "bg-emerald-50", icon: "text-emerald-600" },
    { bg: "bg-rose-50", icon: "text-rose-600" },
    { bg: "bg-amber-50", icon: "text-amber-600" },
]

type AiHiringDetail = {
    hero: { title: string; titleAccent: string; subtitle: string; cta: string }
    features: {
        heading: string; subheading: string
        items: { title: string; desc: string }[]
    }
    deepDive: { heading: string; body: string; bullets: string[] }
}

export default function AiHiringClient({ dict, lang }: { dict: AiHiringDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white">
            <SoftwareApplicationStructuredData
                name="AI Hiring Assistant"
                description={d.features.subheading}
                url="/products/ai-hiring-assistant"
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                {d.hero.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    {d.hero.titleAccent}
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {d.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
                                >
                                    {d.hero.cta} <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full max-w-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-2xl blur-2xl" />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                                <Image
                                    src="/images/products/ai-hiring/hero-image.png"
                                    alt="AI Hiring Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* KEY FEATURES GRID */}
            <section id="features" className="py-24 bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">{d.features.heading}</h2>
                        <p className="text-slate-600 text-lg">{d.features.subheading}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {d.features.items.map((feature, i) => {
                            const Icon = FEATURE_ICONS[i] ?? FileText
                            const color = FEATURE_COLORS[i] ?? FEATURE_COLORS[0]
                            return (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                                    <div className={`w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-7 h-7 ${color.icon}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* DEEP DIVE SECTION */}
            <section className="py-24 overflow-hidden">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl rounded-full" />
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                                <Image
                                    src="/images/products/ai-hiring/image3.png"
                                    alt="Job Posting Detail"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">{d.deepDive.heading}</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{d.deepDive.body}</p>
                            <ul className="space-y-4">
                                {d.deepDive.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-700 font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
