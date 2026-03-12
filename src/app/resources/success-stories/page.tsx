"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CASE_STUDIES } from "@/data/case-studies"
import { CaseStudyCard } from "@/components/resources/CaseStudyCard"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SuccessStoriesPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ══════════════════════════════════════════════════════
                HERO — Premium Soft Blue Corporate
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 min-h-[40vh] flex items-center">
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

                        {/* RIGHT COLUMN: Image Layout */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                            className="hidden lg:block relative h-[400px] w-full"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50" />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/images/industries/I53A6435.jpg"
                                        alt="Başarı Hikayeleri"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                                
                                {/* Floating decorative badges */}
                                <motion.div 
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium">Kanıtlanmış</div>
                                        <div className="text-slate-900 font-bold">Teknoloji</div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium">Başarılı</div>
                                        <div className="text-slate-900 font-bold">Dönüşüm</div>
                                    </div>
                                </motion.div>
                            </div>
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
