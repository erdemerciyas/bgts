"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import {
    Code, BarChart3, Server, ArrowRight, CheckCircle2,
    Users, Rocket, GraduationCap, BriefcaseBusiness,
    FileSearch, BookOpen, Layers, Terminal, Zap, Target,
    TrendingUp, ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ApplicationForm from "@/components/hr/ApplicationForm"
import TalentAccelerationSection from "@/components/hr/TalentAccelerationSection"
import { motion } from "framer-motion"
import {
    AnimatedDiv, FadeInRight,
    ScaleIn, StaggerContainer, StaggerItem
} from "@/components/ui/AnimatedElements"

const PROGRAM_ICONS = [Code, BarChart3, Server]
const PROGRAM_ACCENTS = ["blue", "violet", "emerald"] as const
const PROGRAM_GRADIENTS = ["from-blue-500 to-blue-600", "from-violet-500 to-violet-600", "from-emerald-500 to-emerald-600"]
const STEP_ICONS = [FileSearch, Users, GraduationCap, BriefcaseBusiness]
const STEP_ACCENTS = ["blue", "violet", "cyan", "emerald"] as const
const FEATURE_ICONS = [Target, Users, Zap, TrendingUp]
const METRIC_ICONS = [Layers, BookOpen, Users, Rocket]
const METRIC_ACCENTS = ["blue", "violet", "cyan", "emerald"] as const

type YoungEngineersDict = {
    hero: { title: string; highlight: string; subtitle: string; subtitleBold: string; subtitleEnd: string; applyBtn: string; exploreBtn: string }
    metrics: { val: string; label: string; desc: string }[]
    culture: { heading: string; headingLine2: string; imageAlt: string; quote: string; p1: string; p1Bold: string; p2: string; p2Bold: string; features: { title: string; desc: string }[] }
    photoStrip: { img: string; title: string; tag: string }[]
    programs: { sectionHeading: string; sectionHeadingHighlight: string; sectionSubtitle: string; applyLink: string; items: { id: string; title: string; desc: string; items: string[] }[] }
    steps: { sectionHeading: string; sectionSubtitle: string; stepLabel: string; items: { step: string; title: string; desc: string }[] }
    application: { heading: string; headingHighlight: string; subtitle: string; tipsHeading: string; tips: string[]; notice: string }
    talentAcceleration: {
        enterpriseChallenge: { tag: string; title: string; p1: string; p2: string }
        processFlow: { title: string; subtitle: string; steps: { key: string; title: string; businessObj: string; operationalValue: string }[] }
        scaleImpact: { title: string; metrics: { val: string; label: string }[] }
        approach: { title: string; intro: string; bullets: string[] }
        executionModel: { title: string; bullets: string[] }
        outcome: { title: string; bullets: string[] }
    }
    form: any
}

export default function YoungEngineersClient({ dict: d, lang }: { dict: YoungEngineersDict; lang: string }) {

    const accentMap = {
        blue: { border: "border-blue-200 hover:border-blue-400", bg: "bg-blue-500", text: "text-blue-600", glow: "shadow-blue-500/10 hover:shadow-blue-500/20", check: "text-blue-400", iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20", hoverBorder: "hover:border-blue-500/30", line: "from-blue-500" },
        violet: { border: "border-violet-200 hover:border-violet-400", bg: "bg-violet-500", text: "text-violet-600", glow: "shadow-violet-500/10 hover:shadow-violet-500/20", check: "text-violet-400", iconBg: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20", hoverBorder: "hover:border-violet-500/30", line: "from-violet-500" },
        emerald: { border: "border-emerald-200 hover:border-emerald-400", bg: "bg-emerald-500", text: "text-emerald-600", glow: "shadow-emerald-500/10 hover:shadow-emerald-500/20", check: "text-emerald-400", iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20", hoverBorder: "hover:border-emerald-500/30", line: "from-emerald-500" },
        cyan: { border: "border-cyan-200 hover:border-cyan-400", bg: "bg-cyan-500", text: "text-cyan-600", glow: "shadow-cyan-500/10 hover:shadow-cyan-500/20", check: "text-cyan-400", iconBg: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20", hoverBorder: "hover:border-cyan-500/30", line: "from-cyan-500" },
    }

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[90vh] flex items-center bg-[#060B18] overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/genc-muhendis/hero.png" alt={d.hero.title} fill className="object-cover object-[center_25%] opacity-80" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/60 via-[#060B18]/20 to-[#060B18]" />
                </div>
                <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-blob" />
                <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none animate-blob animation-delay-2000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                <Container className="relative z-10 pt-28 pb-32">
                    <div className="max-w-3xl">
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8">
                            {d.hero.title}<br />
                            <span className="relative inline-block mt-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">{d.hero.highlight}</span>
                                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-400/60 via-cyan-300/40 to-transparent" />
                            </span>
                        </motion.h1>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <p className="text-white/90 max-w-xl mb-10 text-lg md:text-xl leading-relaxed font-medium drop-shadow-lg">
                                {d.hero.subtitle}{" "}<span className="text-white font-semibold">{d.hero.subtitleBold}</span>{" "}{d.hero.subtitleEnd}
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
                            <Link href="#application-form">
                                <Button size="xl" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-full px-10 h-14 text-base font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.03] transition-all group">
                                    {d.hero.applyBtn}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="#tracks">
                                <Button size="xl" variant="outline" className="bg-white/[0.04] text-white border-white/10 rounded-full px-10 h-14 text-base font-bold hover:bg-white/[0.08] hover:border-white/20 transition-all backdrop-blur-sm">
                                    {d.hero.exploreBtn}
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* METRICS STRIP */}
            <div className="relative z-20 -mt-16">
                <Container>
                    <AnimatedDiv className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {d.metrics.map((s, i) => {
                            const a = accentMap[METRIC_ACCENTS[i]]
                            const Icon = METRIC_ICONS[i]
                            return (
                                <div key={i} className={`group relative bg-white rounded-2xl border ${a.border} p-5 lg:p-6 shadow-lg ${a.glow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${a.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-9 h-9 rounded-lg ${a.bg} text-white flex items-center justify-center`}><Icon className="w-4 h-4" /></div>
                                        <span className={`text-3xl lg:text-4xl font-bold ${a.text} font-heading leading-none`}>{s.val}</span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-800">{s.label}</div>
                                    <div className="text-xs text-slate-400 font-medium mt-0.5">{s.desc}</div>
                                </div>
                            )
                        })}
                    </AnimatedDiv>
                </Container>
            </div>

            {/* CULTURE */}
            <Section className="!pt-20 lg:!pt-28 !pb-12 lg:!pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-16 right-[6%] w-72 h-72 border-2 border-blue-200/40 rounded-3xl rotate-12" />
                    <div className="absolute top-36 right-[14%] w-44 h-44 border-2 border-cyan-300/30 rounded-2xl rotate-[25deg]" />
                    <div className="absolute bottom-20 left-[4%] w-56 h-56 border-2 border-violet-200/30 rounded-full" />
                </div>
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <AnimatedDiv className="lg:col-span-5 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-gradient-to-br from-blue-100/80 to-cyan-100/60 rounded-[20px] -z-10" />
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/5]">
                                        <Image src="/images/genc-muhendis/culture.png" alt={d.culture.imageAlt} fill className="object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5">
                                            <p className="text-white/90 font-medium text-sm leading-relaxed italic">&ldquo;{d.culture.quote}&rdquo;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDiv>

                        <FadeInRight className="lg:col-span-7 order-1 lg:order-2">
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-3xl md:!text-[2.5rem] !font-bold !leading-tight">
                                {d.culture.heading}<br />{d.culture.headingLine2}
                            </Heading>
                            <div className="space-y-4 text-slate-500 text-[16px] leading-relaxed">
                                <p>
                                    {d.culture.p1.split(d.culture.p1Bold).map((part, i, arr) =>
                                        i < arr.length - 1
                                            ? <span key={i}>{part}<strong className="text-slate-800">{d.culture.p1Bold}</strong></span>
                                            : <span key={i}>{part}</span>
                                    )}
                                </p>
                                <p>
                                    {d.culture.p2.split(d.culture.p2Bold).map((part, i, arr) =>
                                        i < arr.length - 1
                                            ? <span key={i}>{part}<strong className="text-slate-800">{d.culture.p2Bold}</strong></span>
                                            : <span key={i}>{part}</span>
                                    )}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {d.culture.features.map((f, i) => {
                                    const Icon = FEATURE_ICONS[i]
                                    return (
                                        <div key={i} className="group flex items-start gap-3 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-800">{f.title}</div>
                                                <div className="text-xs text-slate-400 font-medium mt-0.5">{f.desc}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </FadeInRight>
                    </div>
                </Container>
            </Section>

            {/* PHOTO STRIP */}
            <div className="pb-12 lg:pb-20">
                <Container>
                    <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        {d.photoStrip.map((story, i) => (
                            <StaggerItem key={i} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-default">
                                <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-bold uppercase tracking-wider mb-2">{story.tag}</span>
                                    <h3 className="text-white font-bold text-sm font-heading">{story.title}</h3>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Container>
            </div>

            {/* PROGRAM CARDS */}
            <section id="tracks" className="relative py-24 lg:py-32 bg-[#060B18] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
                <Container className="relative z-10">
                    <AnimatedDiv className="max-w-2xl mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
                            {d.programs.sectionHeading}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{d.programs.sectionHeadingHighlight}</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium max-w-lg">{d.programs.sectionSubtitle}</p>
                    </AnimatedDiv>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                        {d.programs.items.map((program, i) => {
                            const a = accentMap[PROGRAM_ACCENTS[i]]
                            const Icon = PROGRAM_ICONS[i]
                            return (
                                <AnimatedDiv key={program.id} delay={i * 0.1} id={program.id}
                                    className={`group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] ${a.hoverBorder} p-7 lg:p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${PROGRAM_GRADIENTS[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className={`w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center mb-6 transition-colors`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-white mb-3">{program.title}</h3>
                                    <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">{program.desc}</p>
                                    <ul className="space-y-3 mb-6">
                                        {program.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
                                                <CheckCircle2 className={`w-4 h-4 ${a.check} shrink-0 mt-0.5`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="#application-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-white transition-colors group/link">
                                        {d.programs.applyLink}
                                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                                    </Link>
                                </AnimatedDiv>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* PROCESS */}
            <Section className="!py-24 lg:!py-32 overflow-hidden" background="muted">
                <Container>
                    <AnimatedDiv className="max-w-2xl mx-auto text-center mb-16 relative z-10">
                        <Heading variant="h2" className="mb-5 !text-3xl md:!text-4xl !font-bold">{d.steps.sectionHeading}</Heading>
                        <Text variant="large" className="text-slate-400">{d.steps.sectionSubtitle}</Text>
                    </AnimatedDiv>
                    <div className="max-w-4xl mx-auto relative z-10">
                        {d.steps.items.map((item, i) => {
                            const a = accentMap[STEP_ACCENTS[i]]
                            const Icon = STEP_ICONS[i]
                            return (
                                <ScaleIn key={i} delay={i * 0.08} className="relative flex items-start gap-6 lg:gap-8 group">
                                    <div className="flex flex-col items-center shrink-0">
                                        <div className={`w-12 h-12 rounded-xl ${a.bg} text-white flex items-center justify-center shadow-lg relative z-10`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        {i < d.steps.items.length - 1 && (
                                            <div className={`w-px h-16 bg-gradient-to-b ${a.line} to-transparent opacity-30`} />
                                        )}
                                    </div>
                                    <div className={`${i === d.steps.items.length - 1 ? "pb-0" : "pb-10"}`}>
                                        <span className={`text-xs font-bold ${a.text} tracking-wide uppercase`}>{d.steps.stepLabel} {item.step}</span>
                                        <h4 className="font-heading text-lg font-bold text-slate-800 mt-1 mb-1.5">{item.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">{item.desc}</p>
                                    </div>
                                </ScaleIn>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* TALENT ACCELERATION MODEL - New Section */}
            <TalentAccelerationSection dict={d.talentAcceleration} />

            {/* APPLICATION FORM */}
            <section id="application-form" className="relative bg-[#060B18] py-24 lg:py-32 overflow-hidden">
                <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px]" />
                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <AnimatedDiv className="space-y-8 lg:sticky lg:top-24">
                            <div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                                    {d.application.heading}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{d.application.headingHighlight}</span>
                                </h2>
                                <p className="text-slate-400 text-base leading-relaxed max-w-lg font-medium">{d.application.subtitle}</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                <h4 className="font-bold text-sm text-white mb-4 flex items-center gap-2 font-heading uppercase tracking-wide">
                                    <Terminal className="w-4 h-4 text-blue-400" /> {d.application.tipsHeading}
                                </h4>
                                <ul className="space-y-3">
                                    {d.application.tips.map((tip, i) => (
                                        <li key={i} className="flex gap-3 text-slate-400 text-sm font-medium">
                                            <span className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4 p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/10">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <p className="text-sm text-slate-400 font-medium">{d.application.notice}</p>
                            </div>
                        </AnimatedDiv>
                        <FadeInRight className="bg-white text-slate-900 p-2 rounded-2xl shadow-2xl shadow-black/20">
                            <ApplicationForm dict={d.form} />
                        </FadeInRight>
                    </div>
                </Container>
            </section>
        </div>
    )
}
