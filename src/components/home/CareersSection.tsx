"use client"

import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Heart, Check } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"

export function CareersSection() {
    const { badge, heading, description, image, programs, ctaText, ctaLink, badgeText, badgeDesc } = HOME_CONTENT.careers;

    return (
        <Section background="default" className="pt-20 pb-32">
            <Container>
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-corporate-warm font-bold tracking-widest text-sm uppercase mb-4 block flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-corporate-warm rounded-full"></span>
                            {badge}
                        </span>
                        <Heading variant="h2" className="text-corporate-dark mb-8 leading-tight">
                            {heading}
                        </Heading>
                        <Text variant="large" className="text-text-secondary mb-10 leading-relaxed">
                            {description}
                        </Text>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            {programs.map((prog, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-corporate-surface flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                        <GraduationCap className={`w-6 h-6 ${prog.type === 'secondary' ? 'text-corporate-secondary' : 'text-corporate-tertiary'}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-corporate-dark text-lg mb-1">{prog.title}</h4>
                                        <p className="text-text-secondary text-sm">{prog.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href={ctaLink} className="inline-flex h-14 items-center justify-center rounded- full px-10 text-sm font-bold text-white shadow-xl shadow-corporate-warm/20 transition-all bg-corporate-warm hover:bg-corporate-dark hover:-translate-y-1 rounded-full">
                            {ctaText}
                        </Link>
                    </div>

                    <div className="lg:w-1/2 relative perspective-1000">
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-corporate-surface transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white">
                            <Image
                                src={image}
                                alt="Office Culture"
                                fill
                                className="object-cover"
                            />
                        </div>


                    </div>
                </div>
            </Container>
        </Section>
    )
}
