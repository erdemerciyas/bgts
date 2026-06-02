"use client"

import TalentAccelerationSection from "@/components/hr/TalentAccelerationSection"
import { Container } from "@/components/ui/Container"
import Image from "next/image"
import { motion } from "framer-motion"

type YoungEngineersDict = {
    hero: { title: string; highlight: string; subtitle: string; subtitleBold: string; subtitleEnd: string; applyBtn: string; exploreBtn: string }
    talentAcceleration: {
        enterpriseChallenge: { tag: string; title: string; p1: string; p2: string }
        processFlow: { title: string; subtitle: string; steps: { key: string; title: string; businessObj: string; operationalValue: string }[] }
        scaleImpact: { title: string; metrics: { val: string; label: string }[] }
        approach: { title: string; intro: string; bullets: string[] }
        executionModel: { title: string; bullets: string[] }
        outcome: { title: string; bullets: string[] }
    }
}

export default function YoungEngineersClient({ dict: d, lang }: { dict: YoungEngineersDict; lang: string }) {

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center bg-[#060B18] overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/genc-muhendis/hero.png" 
                        alt={d.hero.title} 
                        fill 
                        className="object-cover object-[center_25%] opacity-80" 
                        priority 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/60 via-[#060B18]/20 to-[#060B18]" />
                </div>
                <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-blob" />
                <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none animate-blob animation-delay-2000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                <Container className="relative z-10 pt-28 pb-32">
                    <div className="max-w-3xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="font-heading text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8"
                        >
                            {d.hero.title}<br />
                            <span className="relative inline-block mt-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                                    {d.hero.highlight}
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-400/60 via-cyan-300/40 to-transparent" />
                            </span>
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-white/90 max-w-xl mb-10 text-lg md:text-xl leading-relaxed font-medium drop-shadow-lg">
                                {d.hero.subtitle}{" "}
                                <span className="text-white font-semibold">{d.hero.subtitleBold}</span>{" "}
                                {d.hero.subtitleEnd}
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* TALENT ACCELERATION MODEL */}
            <div id="talent-acceleration">
                <TalentAccelerationSection dict={d.talentAcceleration} />
            </div>
        </div>
    )
}
