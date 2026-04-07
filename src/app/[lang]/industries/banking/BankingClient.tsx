"use client"

import Hero from "@/components/ui/Hero"
import {
    Building2, ShieldCheck, TrendingUp, Users, Wallet, CreditCard,
    PieChart, Globe, Server, Smartphone, FileText, UserCheck, Layers,
    BadgeCheck, Zap, CheckCircle2, Code, Shield, Banknote, Search,
    MonitorPlay, Fingerprint, AlertTriangle, Package, UserPlus, Receipt, Repeat2
} from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const CORE_BANKING_ICONS = [
    Shield, Banknote, Wallet, PieChart, TrendingUp, Repeat2,
    Building2, AlertTriangle, Package, FileText, Receipt
]

const PAYMENT_ICONS = [
    CreditCard, BadgeCheck, Smartphone, Zap, Globe, Server, UserPlus, Fingerprint
]

const CASE_STUDY_ICONS = [
    Server, Code, Layers, FileText, UserCheck, MonitorPlay, Search, ShieldCheck
]

const CASE_STUDY_TECH = [
    ["GRPC", "DB2", "Microservices"],
    ["Java 17", "Spring Boot", "React", "OpenShift"],
    ["Java Fullstack", "ODI", "Monitoring"],
    ["EFA", "GRPC"],
    ["LinkedIn API", "CV Parsing", "Turnkey"],
    ["Web App", "Turnkey", "UI/UX"],
    ["GRPC", "Merkezi Arama", "Dashboard"],
    ["IVR", "Kredi Garanti Fonu", "Test Otomasyon"]
]

const PILLAR_ICONS = [Code, Server, Users]
const PILLAR_COLORS = [
    "from-blue-500 to-blue-700 shadow-blue-200",
    "from-violet-500 to-violet-700 shadow-violet-200",
    "from-emerald-500 to-emerald-700 shadow-emerald-200"
]
const PILLAR_TEXT_COLORS = ["text-blue-500", "text-violet-500", "text-emerald-500"]

type BankingDict = {
    hero: { title: string; subtitle: string }
    overview: { heading: string; p1: string; p1Bold1: string; p1Bold2: string; p2: string; p2Bold: string; stats: { val: string; label: string }[] }
    model: { heading: string; subtitle: string; pillars: { title: string; desc: string; items: string[] }[] }
    solutions: { heading: string; subtitle: string; items: string[] }
    core: { title: string; desc: string; items: { title: string; desc: string }[] }
    payments: { title: string; desc: string; items: { title: string; desc: string }[] }
    caseStudies: { tag: string; heading: string; subtitle: string; items: { title: string; desc: string }[] }
}

export default function BankingClient({ dict: d, lang }: { dict: BankingDict; lang: string }) {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title={d.hero.title}
                subtitle={d.hero.subtitle}
                className="bg-slate-900"
                backgroundImage="/images/headers/proje-yapim-sekillerimiz.jpg"
            />

            {/* Overview */}
            <Section className="pt-24 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                {d.overview.heading}
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-[17px] leading-relaxed">
                                <p>
                                    {d.overview.p1} {/* Ideally we'd map parts split by p1Bold, but since we didn't inject them dynamically before... */}
                                </p>
                                <p>
                                    {d.overview.p2}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
                                <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/images/industries/I53A6435.jpg" alt="Banking Overview" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                            {d.overview.stats.map((stat, i) => (
                                                <div key={i} className={`text-center ${i > 0 ? "border-l border-white/20" : ""}`}>
                                                    <div className="text-2xl font-black text-white">{stat.val}</div>
                                                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* 3 Pillars */}
            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 rounded-l-[100px] pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 !text-4xl !font-bold text-slate-900">{d.model.heading}</Heading>
                        <Text className="text-slate-600 text-lg">{d.model.subtitle}</Text>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {d.model.pillars.map((pillar, i) => {
                            const Icon = PILLAR_ICONS[i]
                            const color = PILLAR_COLORS[i]
                            const checkColor = PILLAR_TEXT_COLORS[i]
                            return (
                                <motion.div key={i} {...fadeUp} transition={{ delay: (i + 1) * 0.1 }} className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform group">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                                    <p className="text-slate-500 mb-6 text-[15px] leading-relaxed">{pillar.desc}</p>
                                    <ul className="space-y-3">
                                        {pillar.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                                                <CheckCircle2 className={`w-4 h-4 ${checkColor} shrink-0 mt-0.5`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* Solutions Overview */}
            <Section>
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
                        <Heading variant="h2" className="mb-4 !text-4xl !font-bold">{d.solutions.heading}</Heading>
                        <Text className="text-slate-600 text-lg">{d.solutions.subtitle}</Text>
                    </motion.div>
                    <motion.div {...fadeUp} className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {d.solutions.items.map((item, i) => (
                            <div key={i} className="group bg-white py-3 px-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-3 cursor-default">
                                <div className="w-7 h-7 bg-blue-50/50 group-hover:bg-blue-100/50 rounded flex items-center justify-center shrink-0 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                                </div>
                                <span className="font-semibold text-slate-700 group-hover:text-slate-900 text-[13px] leading-snug transition-colors">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* Core Banking & Payments */}
            <Section className="bg-slate-50 relative overflow-hidden py-24">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
                <Container>
                    {/* Core Banking */}
                    <div className="grid lg:grid-cols-12 gap-12 mb-20">
                        <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                        <Wallet className="w-8 h-8 text-white drop-shadow-md" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{d.core.title}</h3>
                                    <p className="text-blue-100/90 leading-relaxed text-[15px]">{d.core.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-5">
                                {d.core.items.map((item, i) => {
                                    const Icon = CORE_BANKING_ICONS[i] || Shield
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                                            <div className="flex flex-col gap-4">
                                                <div className="w-12 h-12 bg-blue-50/50 border border-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{item.title}</h4>
                                                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-200 my-20" />

                    {/* Payments */}
                    <div className="grid lg:grid-cols-12 gap-12">
                        <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                            <div className="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl shadow-violet-900/20 relative overflow-hidden">
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                                        <CreditCard className="w-8 h-8 text-white drop-shadow-md" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{d.payments.title}</h3>
                                    <p className="text-violet-100/90 leading-relaxed text-[15px]">{d.payments.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-5">
                                {d.payments.items.map((item, i) => {
                                    const Icon = PAYMENT_ICONS[i] || Zap
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-900/5 transition-all group">
                                            <div className="flex flex-col gap-4">
                                                <div className="w-12 h-12 bg-violet-50/50 border border-violet-100 group-hover:bg-violet-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                                                    <Icon className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{item.title}</h4>
                                                    <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
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

            {/* Case Studies */}
            <Section className="bg-[#0B0F25] text-white relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light" />
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">{d.caseStudies.tag}</span>
                        <Heading variant="h2" className="mb-6 !text-4xl md:!text-5xl !font-black text-white leading-tight">{d.caseStudies.heading}</Heading>
                        <Text className="text-slate-400 text-lg md:text-xl">{d.caseStudies.subtitle}</Text>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {d.caseStudies.items.map((cs, i) => {
                            const Icon = CASE_STUDY_ICONS[i] || MonitorPlay
                            const tech = CASE_STUDY_TECH[i] || []
                            return (
                                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/60 rounded-3xl p-7 hover:bg-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,180,216,0.1)] transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-500">
                                        <Icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-cyan-100 transition-colors">{cs.title}</h4>
                                    <p className="text-slate-400 text-[14px] leading-relaxed mb-8 flex-grow">{cs.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-700/50 pt-5">
                                        {tech.map((t, idx) => (
                                            <span key={idx} className="text-[10px] uppercase tracking-wider font-bold bg-slate-900 border border-slate-700 text-cyan-300 px-3 py-1.5 rounded-full shadow-inner">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
