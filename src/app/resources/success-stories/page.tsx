"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CASE_STUDIES } from "@/data/case-studies"
import { CaseStudyCard } from "@/components/resources/CaseStudyCard"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ══════════════════════════════════════════════════════
                HERO — Ultra Premium Dark Corporate
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#05081A] min-h-[70vh] flex items-center">

                {/* Immersive Background Effects */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Deep dynamic glows */}
                    <div className="absolute -top-40 right-[0%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[150px]" />
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />

                    {/* Architectural Tech Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: "linear-gradient(to right, #404567 1px, transparent 1px), linear-gradient(to bottom, #404567 1px, transparent 1px)", backgroundSize: "4rem 4rem" }}
                    />

                    {/* Subtle horizontal light streams */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />
                </div>

                <Container className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                        {/* LEFT COLUMN: Typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-white font-black tracking-tight leading-[1.1] text-5xl lg:text-[4.5rem] mb-8">
                                Teknoloji İle<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                                    Dönüşen Kurumlar
                                </span>
                            </h1>

                            <p className="text-slate-300/90 text-lg lg:text-xl leading-relaxed font-light max-w-lg mb-10">
                                Finans, savunma ve telekomünikasyonun lider markalarıyla hayata geçirdiğimiz, <strong className="text-white font-semibold">teknoloji yığınlarıyla kanıtlanmış</strong> dijital dönüşüm projeleri.
                            </p>
                        </motion.div>

                        {/* RIGHT COLUMN: Abstract Tech/Project Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                            className="hidden lg:block relative h-[500px] w-full perspective-1000"
                        >
                            {/* Central glowing core / orbit */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]" />

                            {/* Floating Glass Panels simulating dashboards/projects */}
                            <motion.div
                                className="absolute top-[10%] left-[10%] w-[60%] h-[30%] bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-full h-1/2 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg mb-4" />
                                <div className="space-y-2">
                                    <div className="w-3/4 h-2 bg-slate-500/30 rounded-full" />
                                    <div className="w-1/2 h-2 bg-slate-500/20 rounded-full" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-[10%] right-[0%] w-[55%] h-[40%] bg-[#0B0F25]/80 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.15)] p-6 z-10"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center border border-blue-500/50">
                                        <div className="w-3 h-3 bg-blue-400 rounded-sm" />
                                    </div>
                                    <div className="w-16 h-4 bg-emerald-500/20 rounded-full flex items-center px-2">
                                        <div className="w-full h-1 bg-emerald-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-4 h-4 rounded-full border border-white/10" />
                                            <div className="flex-1 h-3 bg-white/5 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating nodes */}
                            <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                            <div className="absolute bottom-[30%] left-[5%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════
                PROJECT GRID
            ══════════════════════════════════════════════════════ */}
            <Section background="default" className="py-16 md:py-24">
                <Container>
                    {/* Section header */}
                    <div className="flex items-end justify-between mb-12 flex-wrap gap-4 pb-6 border-b border-slate-100">
                        <div>
                            <Heading variant="h2" className="text-slate-900 font-black text-3xl mb-1.5 tracking-tight">
                                Tüm Projeler
                            </Heading>
                            <Text variant="small" className="text-slate-400 font-medium">
                                {CASE_STUDIES.length} proje — her biri gereksinim, çözüm ve teknoloji yığınıyla belgelenmiş
                            </Text>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-blue-500 inline-block shrink-0" />Yazılım</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-slate-400 inline-block shrink-0" />Altyapı</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-emerald-500 inline-block shrink-0" />Yönetilen Hizmet</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-amber-400 inline-block shrink-0" />Eğitim</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyCard key={study.id} study={study} index={index} />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
