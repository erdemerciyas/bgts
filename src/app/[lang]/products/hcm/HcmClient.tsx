"use client"

import { localizedPathForLang } from '@/lib/routes'
import Image from "next/image"
import React from "react"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    Users, Award, BookOpen, ClipboardCheck,
    GraduationCap, FileCheck, BarChart3, Video, Globe,
    Wallet, CalendarClock, Receipt, FileText, HelpCircle,
    Briefcase, Layers, Shield, Smartphone, Link2, Sparkles,
    CheckCircle2, Server, Database, Code, Cloud, Terminal,
    MessageSquare, Cpu
} from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const MODULE_CONFIG = [
    {
        gradient: "from-orange-500 to-amber-600",
        iconBg: "bg-orange-50", iconBgHover: "group-hover:bg-orange-100",
        iconColor: "text-orange-600", hoverBorder: "hover:border-orange-200",
        hoverText: "group-hover:text-orange-600",
        icon: Users,
        moduleIcons: [Users, ClipboardCheck, Receipt, Briefcase],
    },
    {
        gradient: "from-emerald-500 to-green-600",
        iconBg: "bg-emerald-50", iconBgHover: "group-hover:bg-emerald-100",
        iconColor: "text-emerald-600", hoverBorder: "hover:border-emerald-200",
        hoverText: "group-hover:text-emerald-600",
        icon: Award,
        moduleIcons: [Award, BarChart3, Layers, BookOpen],
    },
    {
        gradient: "from-sky-500 to-blue-600",
        iconBg: "bg-sky-50", iconBgHover: "group-hover:bg-sky-100",
        iconColor: "text-sky-600", hoverBorder: "hover:border-sky-200",
        hoverText: "group-hover:text-sky-600",
        icon: GraduationCap,
        moduleIcons: [GraduationCap, FileCheck, Video, Globe],
    },
    {
        gradient: "from-purple-500 to-violet-600",
        iconBg: "bg-purple-50", iconBgHover: "group-hover:bg-purple-100",
        iconColor: "text-purple-600", hoverBorder: "hover:border-purple-200",
        hoverText: "group-hover:text-purple-600",
        icon: FileText,
        moduleIcons: [Wallet, CalendarClock, FileText, HelpCircle],
    },
]

const HIGHLIGHT_ICONS = [Link2, Shield, Sparkles, Smartphone]
const HIGHLIGHT_COLORS = [
    { bgClass: "bg-orange-50", textClass: "text-orange-600" },
    { bgClass: "bg-emerald-50", textClass: "text-emerald-600" },
    { bgClass: "bg-sky-50", textClass: "text-sky-600" },
    { bgClass: "bg-purple-50", textClass: "text-purple-600" },
]

const DIFF_ICONS = [Layers, BarChart3, Code]
const DIFF_GRADIENTS = ["from-orange-500 to-amber-500", "from-emerald-500 to-green-500", "from-purple-500 to-violet-500"]

const technologies = [
    { name: "ASP.NET Core", icon: Code },
    { name: "Web API", icon: Globe },
    { name: "Swagger", icon: FileText },
    { name: "Node.js", icon: Server },
    { name: "Redis", icon: Database },
    { name: "RabbitMQ", icon: MessageSquare },
    { name: "SignalR", icon: Sparkles },
    { name: "WebRTC", icon: Video },
    { name: "React Native", icon: Smartphone },
    { name: "Entity Framework", icon: Layers },
    { name: "Docker", icon: Cloud },
    { name: "Kubernetes", icon: Cpu },
    { name: "Git", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "SQL", icon: Database },
    { name: "Elasticsearch", icon: BarChart3 },
]

type HcmModule = { title: string; desc: string }
type HcmModuleGroup = { id: string; title: string; description: string; modules: HcmModule[] }
type HcmDetail = {
    hero: { subtitle: string; ctaText: string }
    overview: { heading: string; p1: string; p2: string; p3: string; badge1: string; badge2: string }
    highlights: { label: string; desc: string }[]
    differentiators: { heading: string; subtitle: string; items: { title: string; desc: string; stat: string; statLabel: string }[] }
    video: { heading: string; body: string; bullets: string[] }
    modules: HcmModuleGroup[]
    techStack: { heading: string; subtitle: string }
}

export default function HcmClient({ dict, lang }: { dict: HcmDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white min-h-screen">
            <SoftwareApplicationStructuredData
                name="HCM Platform"
                description={d.overview.heading}
                url={localizedPathForLang(lang, '/products/hcm')}
            />

            <Hero
                title="HR Thema HCM Platform"
                subtitle={d.hero.subtitle}
                className="bg-slate-900"
                backgroundImage="/images/headers/bgts-teknoloji-urunleri.jpg"
                ctaText={d.hero.ctaText}
                ctaLink={localizedPathForLang(lang, '/contact')}
            />

            {/* OVERVIEW */}
            <Section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">{d.overview.heading}</Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>{d.overview.p1}</p>
                                <p>{d.overview.p2}</p>
                                <p>{d.overview.p3}</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                    <Shield className="w-4 h-4 text-orange-400" /> {d.overview.badge1}
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                    <Smartphone className="w-4 h-4 text-green-400" /> {d.overview.badge2}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="grid grid-cols-2 gap-4">
                                {d.highlights.map((item, i) => {
                                    const Icon = HIGHLIGHT_ICONS[i] ?? Link2
                                    const color = HIGHLIGHT_COLORS[i] ?? HIGHLIGHT_COLORS[0]
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl ${color.bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <Icon className={`w-6 h-6 ${color.textClass}`} />
                                            </div>
                                            <h4 className="font-bold text-slate-900 mb-1 text-sm">{item.label}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* DIFFERENTIATORS */}
            <Section className="py-24 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">{d.differentiators.heading}</Heading>
                        <Text variant="large" className="text-slate-600">{d.differentiators.subtitle}</Text>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {d.differentiators.items.map((item, i) => {
                            const Icon = DIFF_ICONS[i] ?? Layers
                            const gradient = DIFF_GRADIENTS[i] ?? DIFF_GRADIENTS[0]
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-200"
                                >
                                    <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="text-right">
                                                <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{item.stat}</div>
                                                <div className="text-xs text-slate-400 font-medium">{item.statLabel}</div>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* VIDEO */}
            <Section className="py-0 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
                </div>
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-28">
                        <motion.div {...fadeUp} className="lg:col-span-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                {d.video.heading}
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">{d.video.body}</p>
                            <div className="space-y-4">
                                {d.video.bullets.map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                        <span className="text-slate-300 text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-8">
                            <a href="https://www.youtube.com/watch?v=me_Z2xoZhEo" target="_blank" rel="noopener noreferrer" className="block relative group">
                                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 via-green-500/20 to-purple-500/30 rounded-2xl blur-sm" />
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                                    <Image
                                        src="/images/products/hcm-cover.png"
                                        alt="HR Thema HCM platform overview"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* MODULES */}
            <div id="modules">
                {d.modules.map((category, catIdx) => {
                    const config = MODULE_CONFIG[catIdx] ?? MODULE_CONFIG[0]
                    const isAlt = catIdx % 2 !== 0
                    return (
                        <Section key={category.id} className={`relative overflow-hidden ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
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
                                                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                                                <p className="text-white/80 leading-relaxed text-sm">{category.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {category.modules.map((mod, i) => {
                                                const ModIcon = config.moduleIcons[i] ?? Users
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                                        className={`bg-white rounded-xl p-6 border border-slate-200 ${config.hoverBorder} hover:shadow-lg transition-all group`}
                                                    >
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

            {/* TECH STACK */}
            <Section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">{d.techStack.heading}</Heading>
                        <Text variant="large" className="text-slate-600">{d.techStack.subtitle}</Text>
                    </motion.div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-md transition-all group cursor-default"
                            >
                                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                                    <tech.icon className="w-5 h-5 text-slate-500 group-hover:text-slate-800 transition-colors" />
                                </div>
                                <div className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{tech.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
