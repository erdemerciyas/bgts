"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"

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
        <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-[#F4F6F8] pt-16 pb-12 lg:pt-28 lg:pb-16">
            <motion.div
                aria-hidden
                className="absolute inset-0"
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease }}
            >
                <Image
                    src="/images/headers/analizler-hero.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </motion.div>

            <div aria-hidden className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/15" />
            </div>

            <Container className="relative z-10 w-full">
                <AnimatedDiv className="max-w-2xl">
                    <h1 className="mb-8 text-5xl font-black leading-[1.1] tracking-tight text-corporate-dark lg:text-[4.5rem]">
                        {dict.title}
                    </h1>

                    <p className="max-w-lg text-lg font-normal leading-relaxed text-slate-600 lg:text-xl">
                        {dict.subtitle}
                    </p>
                </AnimatedDiv>
            </Container>
        </section>
    )
}
