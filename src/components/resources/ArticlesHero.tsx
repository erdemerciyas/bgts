"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

type ArticlesHeroDict = {
    title: string
    subtitle: string
}

interface ArticlesHeroProps {
    dict: ArticlesHeroDict
}

const ease = [0.22, 1, 0.36, 1] as const

export default function ArticlesHero({ dict }: ArticlesHeroProps) {
    return (
        <section className="relative isolate overflow-hidden min-h-[42vh] lg:min-h-[48vh] flex items-end">
            {/* Full-bleed visual plane */}
            <motion.div
                aria-hidden
                className="absolute inset-0"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease }}
            >
                <Image
                    src="/images/headers/analizler.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_35%]"
                />
            </motion.div>

            {/* Layered atmosphere */}
            <div aria-hidden className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-corporate-dark/88 to-corporate-dark/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark via-corporate-dark/40 to-corporate-dark/20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(58,124,181,0.28),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(212,168,83,0.14),transparent_45%)]" />
                <div className="absolute inset-0 opacity-[0.35] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Soft top highlight */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />

            <Container className="relative z-10 w-full pt-32 pb-14 lg:pt-40 lg:pb-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-corporate-highlight" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-corporate-highlight/90">
                            BGTS
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08, ease }}
                    >
                        <Heading
                            variant="h1"
                            className="mb-6 text-white text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                        >
                            {dict.title}
                        </Heading>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.18, ease }}
                    >
                        <Text
                            variant="lead"
                            className="max-w-lg text-[1.05rem] leading-relaxed text-slate-200/90 sm:text-lg font-normal"
                        >
                            {dict.subtitle}
                        </Text>
                    </motion.div>
                </div>
            </Container>

            {/* Bottom edge accent */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-corporate-secondary via-corporate-highlight/80 to-corporate-tertiary/70"
            />
        </section>
    )
}
