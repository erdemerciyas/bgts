"use client"

import React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Bot, Globe, Zap, MessageSquare, ArrowRight, BookOpen } from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const FEATURE_ICONS = [BookOpen, Zap, Globe, MessageSquare]
const FEATURE_COLORS = [
    { bg: "bg-orange-100", icon: "text-orange-600" },
    { bg: "bg-purple-100", icon: "text-purple-600" },
    { bg: "bg-blue-100", icon: "text-blue-600" },
    { bg: "bg-green-100", icon: "text-green-600" },
]

type Doc2BotDetail = {
    hero: { title: string; titleAccent: string; subtitle: string; cta: string; chatQ1: string; chatA1: string; chatQ2: string; chatA2: string }
    features: {
        whyLabel: string; heading: string; body: string; learnMore: string
        items: { title: string; desc: string }[]
    }
}

export default function Doc2BotClient({ dict, lang }: { dict: Doc2BotDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white">
            <SoftwareApplicationStructuredData
                name="Doc2Bot"
                description={d.features.body}
                url="/products/doc2bot"
            />

            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                {d.hero.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    {d.hero.titleAccent}
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {d.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
                                >
                                    {d.hero.cta} <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full" />
                                <div className="relative h-full w-full bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-auto text-xs text-slate-400">Doc2Bot Status: Online</span>
                                    </div>
                                    <div className="flex-1 space-y-4 overflow-hidden">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><span className="text-xs">U</span></div>
                                            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200">{d.hero.chatQ1}</div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-white" /></div>
                                            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-blue-100" dangerouslySetInnerHTML={{ __html: d.hero.chatA1 }} />
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><span className="text-xs">U</span></div>
                                            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200">{d.hero.chatQ2}</div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-white" /></div>
                                            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-blue-100">{d.hero.chatA2}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-6">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">{d.features.whyLabel}</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">{d.features.heading}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">{d.features.body}</p>
                            <Link href={`/${lang}/contact`} className="inline-flex items-center font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                {d.features.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            {d.features.items.map((feature, i) => {
                                const Icon = FEATURE_ICONS[i] ?? BookOpen
                                const color = FEATURE_COLORS[i] ?? FEATURE_COLORS[0]
                                return (
                                    <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                        <div className={`w-12 h-12 rounded-lg ${color.bg} flex items-center justify-center mb-4 ${color.icon} group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
