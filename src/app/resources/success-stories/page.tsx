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
                HERO — Premium Soft Blue Corporate
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 min-h-[70vh] flex items-center">
                {/* Immersive Background Effects (Light Mode) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Light dynamic glows */}
                    <div className="absolute -top-40 right-[0%] w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-[120px]" />
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[100px]" />

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
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
                            <h1 className="text-corporate-dark font-black tracking-tight leading-[1.1] text-5xl lg:text-[4.5rem] mb-8">
                                Teknoloji İle<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-secondary to-blue-500">
                                    Dönüşen Kurumlar
                                </span>
                            </h1>

                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-normal max-w-lg mb-10">
                                Finans, savunma ve telekomünikasyonun lider markalarıyla hayata geçirdiğimiz, <strong className="text-slate-800 font-bold">teknoloji yığınlarıyla kanıtlanmış</strong> dijital dönüşüm projeleri.
                            </p>
                        </motion.div>

                        {/* RIGHT COLUMN: Abstract Tech/Project Visualization (Light Mode) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                            className="hidden lg:block relative h-[500px] w-full perspective-1000"
                        >
                            {/* Central glowing core / orbit */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200 rounded-full bg-white/50 shadow-sm" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-dashed border-blue-400/30 rounded-full animate-[spin_60s_linear_infinite]" />

                            {/* Floating Glass Panels simulating dashboards/projects */}
                            <motion.div
                                className="absolute top-[10%] left-[10%] w-[60%] h-[30%] bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 flex flex-col justify-between overflow-hidden"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-full h-1/2 bg-gradient-to-r from-blue-50 to-transparent rounded-lg mb-4" />
                                <div className="space-y-2">
                                    <div className="w-3/4 h-2 bg-slate-200 rounded-full" />
                                    <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-[10%] right-[0%] w-[55%] h-[40%] bg-white/90 backdrop-blur-xl rounded-2xl border border-blue-100/50 shadow-[0_20px_40px_rgba(37,99,235,0.08)] p-6 z-10"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                                        <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                                    </div>
                                    <div className="w-16 h-4 bg-emerald-50 rounded-full flex items-center px-2">
                                        <div className="w-full h-1 bg-emerald-400 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-4 h-4 rounded-full border border-slate-200" />
                                            <div className="flex-1 h-3 bg-slate-100 rounded-full" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating nodes */}
                            <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                            <div className="absolute bottom-[30%] left-[5%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
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
