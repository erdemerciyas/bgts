"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    Mic, FileAudio, FileText, BrainCircuit, Activity, Settings, CalendarCheck, CheckCircle2,
    Calendar, Bot, ArrowRight, Search, MessageSquare, ListTodo, TrendingUp
} from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const CAPABILITY_ICONS = [CalendarCheck, Mic, FileText, BrainCircuit]
const PROCESS_ICONS = [Calendar, Bot, Activity, Settings, CheckCircle2]
const FEATURE_ICONS_MAP: Record<string, typeof FileAudio> = {
    "ai-transcript": FileAudio,
    "chat-bot": MessageSquare,
    "dashboard": Search,
    "integrations": ListTodo,
}
const FEATURE_COLORS: Record<string, { gradient: string; iconBg: string; iconColor: string }> = {
    "ai-transcript": { gradient: "from-blue-500 to-indigo-600", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
    "chat-bot": { gradient: "from-fuchsia-500 to-rose-600", iconBg: "bg-fuchsia-50", iconColor: "text-fuchsia-600" },
    "dashboard": { gradient: "from-emerald-500 to-teal-600", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
    "integrations": { gradient: "from-orange-500 to-amber-600", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
}
const FEATURE_IMAGES: Record<string, string> = {
    "ai-transcript": "/images/products/meetsense/feature-3.png",
    "chat-bot": "/images/products/meetsense/chatbot-interface.png",
    "dashboard": "/images/products/meetsense/feature-4.png",
    "integrations": "/images/products/meetsense/feature-5.png",
}

type MeetSenseDetail = {
    hero: { tagline: string; subtitle: string; cta: string }
    overview: {
        heading: string; subtitle: string
        capabilities: { name: string; desc: string }[]
    }
    process: {
        heading: string; subtitle: string
        steps: { num: string; title: string; desc: string }[]
    }
    features: {
        heading: string; subtitle: string
        items: { id: string; title: string; description: string; items: { title: string; desc: string }[] }[]
    }
    values: {
        heading: string; headingAccent: string; subtitle: string; cta: string
        items: { title: string; desc: string; num: string }[]
    }
}

export default function MeetSenseClient({ dict, lang }: { dict: MeetSenseDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white min-h-screen">
            <SoftwareApplicationStructuredData
                name="MeetSense"
                description={d.overview.subtitle}
                url="/products/meetsense"
            />

            {/* HERO */}
            <div className="relative pt-32 pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                                Meet<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Sense</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 mb-6">{d.hero.tagline}</h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">{d.hero.subtitle}</p>
                            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300">
                                {d.hero.cta} <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 rounded-2xl" />
                            <Image
                                src="/images/products/meetsense/dashboard-overview.png"
                                alt="MeetSense Dashboard"
                                width={800} height={500}
                                className="w-full h-auto rounded-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-0"
                            />
                        </motion.div>
                    </div>
                </Container>
            </div>

            {/* OVERVIEW */}
            <Section className="py-24 bg-white relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-slate-900">{d.overview.heading}</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">{d.overview.subtitle}</Text>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {d.overview.capabilities.map((cap, i) => {
                            const Icon = CAPABILITY_ICONS[i] ?? CalendarCheck
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.name}</h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{cap.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* PROCESS */}
            <Section className="py-24 bg-slate-50 overflow-hidden relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-slate-900">{d.process.heading}</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">{d.process.subtitle}</Text>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        {d.process.steps.map((step, i) => {
                            const Icon = PROCESS_ICONS[i] ?? Calendar
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="relative group text-center">
                                    {i !== d.process.steps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-indigo-100 z-0" />
                                    )}
                                    <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                                    <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* FEATURES */}
            <Section id="features" className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Heading variant="h2" className="text-slate-900">{d.features.heading}</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">{d.features.subtitle}</Text>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {d.features.items.map((feature, i) => {
                            const Icon = FEATURE_ICONS_MAP[feature.id] ?? FileAudio
                            const color = FEATURE_COLORS[feature.id] ?? FEATURE_COLORS["ai-transcript"]
                            const image = FEATURE_IMAGES[feature.id]
                            return (
                                <motion.div key={feature.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${color.gradient} rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 ${color.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                                            <Icon className={`w-7 h-7 ${color.iconColor}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                        <p className="text-slate-600 font-medium mb-8 leading-relaxed">{feature.description}</p>
                                        <div className="space-y-4">
                                            {feature.items.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-4">
                                                    <div className="mt-1"><CheckCircle2 className={`w-5 h-5 ${color.iconColor}`} /></div>
                                                    <div>
                                                        <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                                                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {image && (
                                            <div className="mt-8 relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                                                <Image src={image} alt={feature.title} width={600} height={340} className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* VALUES */}
            <Section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <TrendingUp className="w-96 h-96" />
                </div>
                <Container>
                    <div className="grid lg:grid-cols-3 gap-16 relative z-10">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                {d.values.heading}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{d.values.headingAccent}</span>
                            </h2>
                            <p className="text-lg font-medium text-slate-300 mb-8">{d.values.subtitle}</p>
                            <Link href={`/${lang}/contact`} className="inline-flex flex-wrap items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300">
                                {d.values.cta}
                            </Link>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                                {d.values.items.map((val, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                        className="relative pl-12">
                                        <div className="absolute top-[-8px] left-0 text-3xl font-bold text-indigo-500/30">{val.num}</div>
                                        <h4 className="text-xl font-bold mb-2 text-white">{val.title}</h4>
                                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{val.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
