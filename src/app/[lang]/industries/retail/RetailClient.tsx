"use client"

import Hero from "@/components/ui/Hero"
import { ShoppingCart, Users, BarChart3, ShieldCheck, Zap, Headphones, Settings, Activity, Globe, Code, Eye, Brain, BookOpen, Monitor, HardDrive, FileText, Network, Layers } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Typography"
import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const SECTION_ICONS = [ShoppingCart, Users, Settings, Activity]
const SECTION_COLORS = [
    "from-orange-500 to-orange-700",
    "from-violet-600 to-violet-800",
    "from-blue-600 to-blue-800",
    "from-emerald-600 to-emerald-800"
]
const ITEM_ICONS = [
    [Globe, BarChart3, Zap, Network],
    [BarChart3, Layers, Brain, BookOpen],
    [Code, ShieldCheck, Monitor, Activity],
    [Eye, HardDrive, FileText, Headphones]
]

type RetailDict = {
    hero: { title: string; subtitle: string }
    overview: { heading: string; p1: string; p2: string; p3: string }
    services: { title: string; description: string; items: { title: string; desc: string }[] }[]
}

export default function RetailClient({ dict: d }: { dict: RetailDict }) {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title={d.hero.title}
                subtitle={d.hero.subtitle}
                className="bg-slate-900"
                backgroundImage="/images/headers/perakende-ve-telekom-cozumleri.jpg"
            />

            {/* Overview */}
            <Section className="pt-24 pb-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                {d.overview.heading}
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>{d.overview.p1}</p>
                                <p>{d.overview.p2}</p>
                                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-100">
                                    <p className="font-semibold text-orange-800 text-base">
                                        {d.overview.p3}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl -z-10 opacity-60" />
                                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/industries/I53A6435.jpg"
                                        alt="Retail Strategic Overview"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Service Sections */}
            {d.services.map((section, sectionIdx) => {
                const isAlt = sectionIdx % 2 !== 0
                const SectionIcon = SECTION_ICONS[sectionIdx] || Settings
                const sectionColor = SECTION_COLORS[sectionIdx] || "from-slate-700 to-slate-900"
                const itemIcons = ITEM_ICONS[sectionIdx] || []

                return (
                    <Section key={sectionIdx} className={`relative overflow-hidden ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sectionColor}`} />
                        <Container>
                            <div className="grid lg:grid-cols-12 gap-12">
                                {/* Left */}
                                <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                    <div className={`bg-gradient-to-br ${sectionColor} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                                <SectionIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                            <p className="text-white/80 leading-relaxed text-sm">{section.description}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right */}
                                <div className="lg:col-span-8">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {section.items.map((item, i) => {
                                            const ItemIcon = itemIcons[i] || Network
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                            <ItemIcon className="w-5 h-5 text-orange-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 group-hover:text-orange-700 transition-colors mb-1">{item.title}</h4>
                                                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
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
    )
}
