"use client"

import { localizedPathForLang } from '@/lib/routes'
import React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CheckCircle2, Bot, ShieldAlert, Code2, Server, FileText, Activity, AlertTriangle, ArrowRight, Cpu } from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const FEATURE_ICONS = [Bot, Code2, FileText, CheckCircle2, Activity, ShieldAlert]
const FEATURE_COLORS = [
    { bg: "bg-blue-50/80", icon: "text-blue-600", bar: "from-blue-400 to-blue-600" },
    { bg: "bg-cyan-50/80", icon: "text-cyan-600", bar: "from-cyan-400 to-cyan-600" },
    { bg: "bg-indigo-50/80", icon: "text-indigo-600", bar: "from-indigo-400 to-indigo-600" },
    { bg: "bg-emerald-50/80", icon: "text-emerald-600", bar: "from-emerald-400 to-emerald-600" },
    { bg: "bg-purple-50/80", icon: "text-purple-600", bar: "from-purple-400 to-purple-600" },
    { bg: "bg-amber-50/80", icon: "text-amber-600", bar: "from-amber-400 to-amber-600" },
]

const AGENT_ICONS = [Bot, CheckCircle2, Code2, Activity, Server, FileText, Code2, Activity]

const SECURITY_ICONS = [AlertTriangle, ShieldAlert, CheckCircle2, Activity]
const SECURITY_COLORS = ["text-rose-400", "text-amber-400", "text-emerald-400", "text-cyan-400"]

type CortexDetail = {
    hero: { title: string; titleAccent: string; subtitle: string; cta: string; visualTitle: string; visualDesc: string }
    features: {
        heading: string; subheading: string; problemLabel: string
        items: { title: string; badge: string; desc: string; problem: string }[]
    }
    agents: {
        heading: string; whatLabel: string; outputLabel: string; ruleLabel: string
        items: { title: string; desc: string; output: string; rule: string }[]
    }
    security: {
        heading: string; subheading: string; visualTitle: string; visualDesc: string
        items: { title: string; desc: string }[]
    }
}

export default function CortexClient({ dict, lang }: { dict: CortexDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white">
            <SoftwareApplicationStructuredData
                name="Cortex"
                description={d.features.subheading}
                url={localizedPathForLang(lang, '/products/cortex')}
            />

            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                                {d.hero.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                    {d.hero.titleAccent}
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {d.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                                <Link
                                    href={localizedPathForLang(lang, '/contact')}
                                    className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105"
                                >
                                    {d.hero.cta} <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full max-w-xl hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-[3rem] blur-3xl mix-blend-screen transform rotate-12" />
                            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-800/40 backdrop-blur-md flex items-center justify-center group">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
                                    <Cpu className="w-24 h-24 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500 ease-out" />
                                    <h3 className="text-2xl font-bold text-white mb-2">{d.hero.visualTitle}</h3>
                                    <p className="text-slate-400 text-sm">{d.hero.visualDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES */}
            <Section background="glazed" id="features">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-corporate-dark mb-6">{d.features.heading}</Heading>
                        <Text variant="lead" className="text-slate-600">{d.features.subheading}</Text>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {d.features.items.map((item, i) => {
                            const Icon = FEATURE_ICONS[i] ?? Bot
                            const color = FEATURE_COLORS[i] ?? FEATURE_COLORS[0]
                            return (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color.bar} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center ${color.icon} group-hover:scale-110 transition-transform shadow-sm`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">{item.badge}</span>
                                        </div>
                                        <Heading variant="h3" className="mb-2 text-corporate-dark">{item.title}</Heading>
                                        <Text variant="default" className="text-slate-600 mb-6">{item.desc}</Text>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100">
                                        <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wider">{d.features.problemLabel}</p>
                                        <p className="text-sm text-slate-700 font-medium">{item.problem}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* AGENTS */}
            <Section background="default" id="agents">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-corporate-dark">{d.agents.heading}</Heading>
                    </div>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {d.agents.items.map((agent, i) => {
                            const Icon = AGENT_ICONS[i] ?? Bot
                            return (
                                <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-corporate-blue/30 transition-colors">
                                    <div className="shrink-0 w-12 h-12 bg-corporate-blue/10 text-corporate-blue rounded-xl flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <Heading variant="h4" className="mb-2 text-corporate-dark">{agent.title}</Heading>
                                        <Text variant="default" className="text-slate-600 mb-1"><strong>{d.agents.whatLabel}</strong> {agent.desc}</Text>
                                        <Text variant="default" className="text-slate-600 mb-2"><strong>{d.agents.outputLabel}</strong> {agent.output}</Text>
                                        <Text variant="small" className="text-slate-500 italic">{d.agents.ruleLabel} {agent.rule}</Text>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* SECURITY */}
            <Section background="navy">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-black text-white">{d.security.heading}</h2>
                            <p className="text-lg text-slate-300">{d.security.subheading}</p>
                            <ul className="space-y-4">
                                {d.security.items.map((item, i) => {
                                    const Icon = SECURITY_ICONS[i] ?? AlertTriangle
                                    return (
                                        <li key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 group hover:bg-white/10 transition-colors cursor-pointer">
                                            <Icon className={`w-6 h-6 ${SECURITY_COLORS[i]} shrink-0 mt-1`} />
                                            <div>
                                                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{item.desc}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl" />
                                <div className="w-full h-[400px] bg-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-slate-400 border border-slate-700/50 relative">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                    <ShieldAlert className="w-24 h-24 mb-6 opacity-30 text-white z-10" />
                                    <p className="text-lg font-medium text-slate-300 z-10">{d.security.visualTitle}</p>
                                    <p className="text-sm mt-2 max-w-xs mx-auto z-10">{d.security.visualDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
