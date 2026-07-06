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

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
    }),
}

export default function ArticlesHero({ dict }: ArticlesHeroProps) {
    return (
        <section className="relative overflow-hidden border-b border-border/70 bg-corporate-surface pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,22,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,22,40,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-8 h-[460px] w-[460px] rounded-full bg-corporate-secondary/[0.06] blur-[100px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corporate-highlight/60 to-transparent"
            />

            <Container className="relative z-10">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    <div className="max-w-xl lg:max-w-2xl">
                        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
                            <Heading
                                variant="h1"
                                className="mb-6 text-4xl font-black tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]"
                            >
                                {dict.title}
                            </Heading>
                        </motion.div>

                        <motion.div custom={0.1} variants={fadeUp} initial="hidden" animate="visible">
                            <div className="mb-7 h-px w-16 bg-gradient-to-r from-corporate-highlight to-corporate-secondary/30" />
                            <Text variant="lead" className="max-w-lg text-text-secondary">
                                {dict.subtitle}
                            </Text>
                        </motion.div>
                    </div>

                    {/* Decorative editorial visual — no article metadata */}
                    <motion.div
                        custom={0.2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="relative mx-auto hidden h-[340px] w-full max-w-md lg:block lg:max-w-none lg:h-[380px]"
                        aria-hidden
                    >
                        <div className="absolute right-[12%] top-8 h-[72%] w-[58%] rounded-[1.5rem] border border-white/80 bg-white/40 shadow-[0_20px_60px_-20px_rgba(10,22,40,0.18)]" />
                        <div className="absolute left-[8%] top-0 h-[58%] w-[52%] overflow-hidden rounded-[1.25rem] border border-white/90 shadow-[0_24px_70px_-18px_rgba(10,22,40,0.22)] ring-1 ring-corporate-dark/[0.04]">
                            <Image
                                src="/images/articles/kurumlarda-yapay-zeka.jpg"
                                alt=""
                                width={1920}
                                height={768}
                                className="h-full w-full object-cover object-left"
                                sizes="320px"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 h-[52%] w-[48%] overflow-hidden rounded-[1.25rem] border-4 border-white shadow-[0_28px_80px_-20px_rgba(10,22,40,0.24)]">
                            <Image
                                src="/images/articles/malicious-server-cagi.jpg"
                                alt=""
                                width={1920}
                                height={768}
                                className="h-full w-full object-cover object-right"
                                sizes="280px"
                            />
                        </div>
                        <div className="absolute -left-2 bottom-[18%] hidden h-20 w-20 rounded-full border border-corporate-highlight/25 xl:block" />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
