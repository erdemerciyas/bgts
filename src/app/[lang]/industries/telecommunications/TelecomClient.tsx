"use client"

import Hero from "@/components/ui/Hero"
import { Server, Database, Globe, Layers, Activity, Cloud, Zap, Code, Settings, Eye, FileText, Users, Network, Shield, BarChart3, HardDrive, Wrench, MonitorSmartphone } from "lucide-react"
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

const SECTION_ICONS = [Layers, Database, Activity, Server]
const SECTION_COLORS = [
    "from-indigo-600 to-indigo-800",
    "from-violet-600 to-violet-800",
    "from-cyan-600 to-teal-800",
    "from-blue-700 to-indigo-900"
]
const ITEM_ICONS = [
    [MonitorSmartphone, Code, Network, Zap],
    [FileText, Settings, Server, Wrench],
    [Globe, Shield, Cloud, BarChart3],
    [Users, HardDrive, Eye, Activity]
]

type TelecomDict = {
    hero: { title: string; subtitle: string }
    overview: { heading: string; p1: string; p2: string; p3: string }
    services: { title: string; description: string; items: { title: string; desc: string }[] }[]
}

export default function TelecomClient({ dict: d }: { dict: TelecomDict }) {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title={d.hero.title}
                subtitle={d.hero.subtitle}
                className="bg-slate-900"
                backgroundImage="/images/headers/I53A6349.jpg"
            />

            {/* Overview */}
            <Section className="pt-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                {d.overview.heading}
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>{d.overview.p1}</p>
                                <p>{d.overview.p2}</p>
                                <p className="font-semibold text-slate-700">{d.overview.p3}</p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl -z-10 opacity-60" />
                                <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                                    <Image
                                        src="/images/industries/retail-telecom/telecom-infrastructure.png"
                                        alt="Telecom Infrastructure"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent" />
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
                                            const ItemIcon = itemIcons[i] || Code
                                            return (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-indigo-50 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                            <ItemIcon className="w-5 h-5 text-indigo-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-1">{item.title}</h4>
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
