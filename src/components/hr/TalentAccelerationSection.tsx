"use client"

import { Container } from "@/components/ui/Container"
import {
    CheckCircle2, Users, GraduationCap, Rocket, Server, FileSearch,
    Target, Flag,
} from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"

type TalentAccelerationDict = {
    enterpriseChallenge: {
        tag: string
        title: string
        p1: string
        p2: string
    }
    processFlow: {
        title: string
        subtitle: string
        steps: {
            key: string
            title: string
            businessObj: string
            operationalValue: string
        }[]
    }
    scaleImpact: {
        title: string
        metrics: { val: string; label: string }[]
    }
    approach: {
        title: string
        intro: string
        bullets: string[]
    }
    executionModel: {
        title: string
        bullets: string[]
    }
    outcome: {
        title: string
        bullets: string[]
    }
}

const PROCESS_ICONS: Record<string, React.ElementType> = {
    select: Users,
    train: GraduationCap,
    deploy: Rocket,
    operate: Server,
    transfer: FileSearch,
}

const PROCESS_COLORS = ["blue", "violet", "cyan", "emerald", "orange"] as const

export default function TalentAccelerationSection({ dict: d }: { dict: TalentAccelerationDict }) {
    return (
        <div className="bg-white">
            {/* TOP SEPARATOR */}
            <div className="h-[3px] bg-gradient-to-r from-[#12A8FF] via-cyan-400 to-[#12A8FF]" />

            {/* TALENT ACCELERATION SECTION - Offset Containers */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
                {/* Decorative elements - offset corners */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#12A8FF]/8 to-transparent -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/8 to-transparent translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-400/5 to-transparent -translate-x-1/2 translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-400/5 to-transparent translate-x-1/2 translate-y-1/2" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:48px_48px]" />

                <Container className="relative z-10 px-6 lg:px-12">
                    {/* Header */}
                    <AnimatedDiv className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5 tracking-tight">
                            {d.enterpriseChallenge.title}
                        </h2>
                        <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                            {d.enterpriseChallenge.p1}
                        </p>
                    </AnimatedDiv>

                    {/* Process Flow */}
                    <div className="relative max-w-5xl mx-auto mb-14">
                        <div className="flex items-center justify-between relative px-4">
                            {d.processFlow.steps.map((step, i) => {
                                const Icon = PROCESS_ICONS[step.key]
                                const color = PROCESS_COLORS[i]
                                return (
                                    <div key={step.key} className="flex flex-col items-center relative z-10">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className={`w-[68px] h-[68px] rounded-2xl bg-gradient-to-br ${
                                                color === 'blue' ? 'from-blue-500 to-blue-600' :
                                                color === 'violet' ? 'from-violet-500 to-violet-600' :
                                                color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                                                color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                                                'from-orange-500 to-orange-600'
                                            } text-white flex items-center justify-center mb-4 shadow-lg ${
                                                color === 'blue' ? 'shadow-blue-500/30' :
                                                color === 'violet' ? 'shadow-violet-500/30' :
                                                color === 'cyan' ? 'shadow-cyan-500/30' :
                                                color === 'emerald' ? 'shadow-emerald-500/30' :
                                                'shadow-orange-500/30'
                                            } hover:scale-105 transition-all duration-300`}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </motion.div>
                                        <span className={`text-sm font-bold uppercase tracking-wider block mb-2 ${
                                            color === 'blue' ? 'text-blue-600' :
                                            color === 'violet' ? 'text-violet-600' :
                                            color === 'cyan' ? 'text-cyan-600' :
                                            color === 'emerald' ? 'text-emerald-600' :
                                            'text-orange-600'
                                        }`}>{step.title}</span>
                                        {i < d.processFlow.steps.length - 1 && (
                                            <div className="absolute top-[34px] left-full w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 z-0" style={{ width: 'calc(100% + 2rem)' }} />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Scale & Impact - KPIs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 px-4">
                        {d.scaleImpact.metrics.map((metric) => (
                            <div key={`${metric.val}-${metric.label}`} className="relative rounded-2xl border-2 p-5 text-center bg-white border-slate-200 shadow-sm">
                                <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-xl bg-[#12A8FF]" />
                                <div className="text-2xl lg:text-3xl font-bold text-[#0E355F] font-heading mb-2">{metric.val}</div>
                                <div className="text-xs text-slate-500 font-medium">{metric.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Approach / Execution Model / Outcome */}
                    <div className="max-w-4xl mx-auto space-y-6 mb-12 px-4">
                        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-6 md:p-8 hover:shadow-md hover:border-slate-300 transition-all duration-300">
                            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#12A8FF]/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-[#12A8FF]" />
                                </div>
                                {d.approach.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-5">{d.approach.intro}</p>
                            <ul className="space-y-3">
                                {d.approach.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#12A8FF] shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border-2 border-[#12A8FF]/40 bg-gradient-to-br from-[#12A8FF]/12 to-blue-50 shadow-sm p-6 md:p-8">
                            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#12A8FF]/15 flex items-center justify-center border border-[#12A8FF]/25">
                                    <Rocket className="w-5 h-5 text-[#12A8FF]" />
                                </div>
                                {d.executionModel.title}
                            </h3>
                            <ul className="space-y-3">
                                {d.executionModel.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#12A8FF] shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm p-6 md:p-8 hover:shadow-md hover:border-slate-300 transition-all duration-300">
                            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                    <Flag className="w-5 h-5 text-emerald-600" />
                                </div>
                                {d.outcome.title}
                            </h3>
                            <ul className="space-y-3">
                                {d.outcome.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* BOTTOM SEPARATOR */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
    )
}