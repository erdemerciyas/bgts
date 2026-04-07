"use client"

import React from "react"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    Activity, Layers, Server, Database, Smartphone,
    Monitor, ShieldCheck, Clock, FileText, Zap, BarChart3,
    Users, Network, GitPullRequest, Settings,
    CheckCircle2, Cpu, Globe, Workflow, Search, AlertTriangle,
    Package, Kanban, Bot, BrainCircuit, MessageSquare,
    FolderKanban, Target, Wallet, Code, CalendarClock
} from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const FOUNDATION_ICONS = [Database, FolderKanban, Globe, FileText, Clock, MessageSquare, Users, CalendarClock, Clock, CheckCircle2, Workflow]
const ADVANCED_ICONS = [Kanban, BarChart3, Bot, Monitor, Users, BrainCircuit, MessageSquare]

const MODULE_CONFIG: Record<string, {
    gradient: string; iconBg: string; iconBgHover: string; iconColor: string
    hoverBorder: string; hoverText: string; icon: typeof Activity
    moduleIcons: typeof Activity[]
}> = {
    "itsm": {
        gradient: "from-indigo-500 to-blue-600", iconBg: "bg-indigo-50",
        iconBgHover: "group-hover:bg-indigo-100", iconColor: "text-indigo-600",
        hoverBorder: "hover:border-indigo-200", hoverText: "group-hover:text-indigo-600",
        icon: Activity, moduleIcons: [Globe, AlertTriangle, CheckCircle2, Search, GitPullRequest, Package, Database],
    },
    "ppm": {
        gradient: "from-emerald-500 to-teal-600", iconBg: "bg-emerald-50",
        iconBgHover: "group-hover:bg-emerald-100", iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-200", hoverText: "group-hover:text-emerald-600",
        icon: Layers, moduleIcons: [Target, FolderKanban, Layers, Wallet, Code],
    },
    "itom": {
        gradient: "from-purple-500 to-violet-600", iconBg: "bg-purple-50",
        iconBgHover: "group-hover:bg-purple-100", iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-200", hoverText: "group-hover:text-purple-600",
        icon: Server, moduleIcons: [Workflow, Smartphone, Network, Settings, Zap],
    },
}

type PraxilaModule = { title: string; desc: string }
type PraxilaModuleGroup = { id: string; title: string; subtitle: string; description: string; modules: PraxilaModule[] }
type PraxilaFoundationItem = { name: string; desc: string }
type PraxilaAdvancedItem = { name: string; desc: string; isAI: boolean }
type PraxilaStat = { stat: string; label: string }
type PraxilaDetail = {
    hero: { title: string; subtitle: string; ctaText: string }
    overview: { heading: string; p1: string; p2: string; badges: string[]; stats: PraxilaStat[] }
    foundation: { heading: string; subtitle: string; items: PraxilaFoundationItem[] }
    advanced: { heading: string; subtitle: string; items: PraxilaAdvancedItem[] }
    modules: PraxilaModuleGroup[]
}

export default function PraxilaClient({ dict, lang }: { dict: PraxilaDetail; lang: string }) {
    const d = dict
    const GRAD_LIST = ["from-indigo-500 to-blue-600", "from-emerald-500 to-teal-600", "from-purple-500 to-violet-600"]
    return (
        <div className="bg-white min-h-screen">
            <SoftwareApplicationStructuredData
                name="Praxila"
                description={d.overview.heading}
                url="/products/praxila"
            />

            <Hero
                title={d.hero.title}
                subtitle={d.hero.subtitle}
                className="bg-indigo-900"
                backgroundImage="/images/headers/bgts-teknoloji-urunleri.jpg"
                ctaText={d.hero.ctaText}
                ctaLink={`/${lang}/contact`}
            />

            {/* OVERVIEW */}
            <Section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">{d.overview.heading}</Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>{d.overview.p1}</p>
                                <p>{d.overview.p2}</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-8">
                                {d.overview.badges.map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                        <ShieldCheck className="w-4 h-4 text-indigo-400" /> {badge}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="grid grid-cols-3 gap-4">
                                {d.overview.stats.map((item, i) => (
                                    <motion.div key={i}
                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                        className={`bg-gradient-to-br ${GRAD_LIST[i] ?? GRAD_LIST[0]} rounded-2xl p-6 text-center text-white shadow-lg`}>
                                        <div className="text-3xl font-black mb-1">{item.stat}</div>
                                        <div className="text-white/70 text-sm font-medium">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* FOUNDATION */}
            <Section className="py-24 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">{d.foundation.heading}</Heading>
                        <Text variant="large" className="text-slate-600">{d.foundation.subtitle}</Text>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {d.foundation.items.map((item, i) => {
                            const Icon = FOUNDATION_ICONS[i] ?? Database
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-indigo-50 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                            <Icon className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm mb-1">{item.name}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* ADVANCED */}
            <Section className="py-24 bg-white">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">{d.advanced.heading}</Heading>
                        <Text variant="large" className="text-slate-600">{d.advanced.subtitle}</Text>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
                        {d.advanced.items.map((item, i) => {
                            const Icon = ADVANCED_ICONS[i] ?? Kanban
                            return (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className={`rounded-xl p-6 border transition-all group ${item.isAI
                                        ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-300 hover:shadow-lg"
                                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                                    }`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.isAI
                                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200"
                                        : "bg-indigo-50 group-hover:bg-indigo-100"
                                    }`}>
                                        <Icon className={`w-6 h-6 ${item.isAI ? "text-white" : "text-indigo-600"}`} />
                                    </div>
                                    <h4 className={`font-bold mb-2 text-sm ${item.isAI ? "text-indigo-800" : "text-slate-900"}`}>
                                        {item.name}
                                        {item.isAI && <span className="ml-2 text-xs font-bold text-indigo-500 bg-indigo-100 px-2 py-0.5 rounded-full">AI</span>}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* SERVICE MODULES */}
            <div id="modules">
                {d.modules.map((category, catIdx) => {
                    const config = MODULE_CONFIG[category.id]
                    const isAlt = catIdx % 2 !== 0
                    if (!config) return null
                    return (
                        <Section key={category.id} className={`relative overflow-hidden ${isAlt ? 'bg-white' : 'bg-slate-50'}`}>
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${config.gradient}`} />
                            <Container>
                                <div className="grid lg:grid-cols-12 gap-12">
                                    <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                        <div className={`bg-gradient-to-br ${config.gradient} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                            <div className="relative z-10">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                                    <config.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                                <p className="text-white/60 text-sm font-medium mb-4">{category.subtitle}</p>
                                                <p className="text-white/80 leading-relaxed text-sm">{category.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {category.modules.map((mod, i) => {
                                                const ModIcon = config.moduleIcons[i] ?? Globe
                                                return (
                                                    <motion.div key={i}
                                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                                        className={`bg-white rounded-xl p-6 border border-slate-200 ${config.hoverBorder} hover:shadow-lg transition-all group`}>
                                                        <div className="flex items-start gap-4">
                                                            <div className={`w-11 h-11 ${config.iconBg} ${config.iconBgHover} rounded-lg flex items-center justify-center shrink-0 transition-colors`}>
                                                                <ModIcon className={`w-5 h-5 ${config.iconColor}`} />
                                                            </div>
                                                            <div>
                                                                <h4 className={`font-bold text-slate-900 ${config.hoverText} transition-colors mb-1`}>{mod.title}</h4>
                                                                <p className="text-sm text-slate-500 leading-relaxed">{mod.desc}</p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Section>
                    )
                })}
            </div>
        </div>
    )
}
