"use client"

import { Container } from "@/components/ui/Container"
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

export default function TalentAccelerationSection({ dict: d }: { dict: TalentAccelerationDict }) {
    return (
        <div className="bg-white">
            {/* BLUE SECTION - Case Study Header & Process */}
            <section className="relative bg-[#1a3a5c] py-16 lg:py-24">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Header Section */}
                        <div className="mb-16">
                            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8">
                                {d.enterpriseChallenge.title}
                            </h2>
                            <div className="space-y-5 text-white/90 text-base lg:text-lg leading-relaxed">
                                <p>{d.enterpriseChallenge.p1}</p>
                                <p>{d.enterpriseChallenge.p2}</p>
                            </div>
                        </div>

                        {/* Process Flow - Horizontal Steps */}
                        <div className="mb-16">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-center">
                                {d.processFlow.steps.map((step, i) => (
                                    <div key={step.key} className="flex items-center w-full sm:w-auto justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.08 }}
                                            className="bg-[#2a6fa8] px-6 sm:px-8 py-4 text-white font-semibold text-sm sm:text-base whitespace-nowrap"
                                        >
                                            {step.title}
                                        </motion.div>
                                        {i < d.processFlow.steps.length - 1 && (
                                            <div className="hidden sm:block w-8 lg:w-12 h-px bg-[#66d9ff]/50 mx-1" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Scale & Impact Metrics */}
                        <div>
                            <h3 className="text-white text-xl lg:text-2xl font-semibold mb-8 tracking-wide text-center sm:text-left">
                                {d.scaleImpact.title}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                                {d.scaleImpact.metrics.map((metric, i) => (
                                    <motion.div
                                        key={`${metric.val}-${metric.label}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex flex-col items-center sm:items-start text-center sm:text-left"
                                    >
                                        <div className="text-[#66d9ff] text-4xl lg:text-5xl font-bold mb-2 leading-none">
                                            {metric.val}
                                        </div>
                                        <div className="text-white/80 text-sm lg:text-base leading-snug">
                                            {metric.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* WHITE SECTION - Approach, Execution Model, Outcome */}
            <section className="bg-white py-16 lg:py-24">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        {/* Two Column Layout for Approach */}
                        <AnimatedDiv className="mb-16">
                            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                                {/* Left Column - Title & Description */}
                                <div className="lg:col-span-1">
                                    <h3 className="text-slate-900 text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">
                                        {d.approach.title}
                                    </h3>
                                    <p className="text-slate-600 text-base leading-relaxed">
                                        {d.approach.intro}
                                    </p>
                                </div>
                                
                                {/* Right Column - Bullet Points */}
                                <div className="lg:col-span-2">
                                    <ul className="space-y-3">
                                        {d.approach.bullets.map((bullet, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                className="flex items-start gap-3 text-slate-700 text-base leading-relaxed"
                                            >
                                                <span className="text-[#12A8FF] text-lg leading-none mt-0.5">•</span>
                                                <span>{bullet}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedDiv>

                        {/* Execution Model - Highlighted Box */}
                        <AnimatedDiv className="mb-16">
                            <div className="bg-[#e8f4f8] border border-[#12A8FF]/40 rounded-xl p-8 lg:p-10">
                                <h4 className="text-slate-900 text-xl lg:text-2xl font-semibold mb-6 tracking-wide">
                                    {d.executionModel.title}
                                </h4>
                                <ul className="space-y-4">
                                    {d.executionModel.bullets.map((bullet, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-slate-700 text-base leading-relaxed"
                                        >
                                            <span className="text-[#12A8FF] text-lg leading-none mt-0.5">•</span>
                                            <span>{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>

                        {/* Outcome */}
                        <AnimatedDiv>
                            <h4 className="text-slate-900 text-xl lg:text-2xl font-semibold mb-6 tracking-wide">
                                {d.outcome.title}
                            </h4>
                            <ul className="space-y-3">
                                {d.outcome.bullets.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.05 }}
                                        className="flex items-start gap-3 text-slate-700 text-base leading-relaxed"
                                    >
                                        <span className="text-[#12A8FF] text-lg leading-none mt-0.5">•</span>
                                        <span>{bullet}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </AnimatedDiv>
                    </div>
                </Container>
            </section>
        </div>
    )
}