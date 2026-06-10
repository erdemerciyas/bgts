"use client"

import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Typography"
import { AnimatedDiv, ScaleIn } from "@/components/ui/AnimatedElements"

export type CertificationsDict = {
    heading: string
    subtitle: string
    labels: string[]
}

const CERTIFICATION_LOGOS = [
    "/logos/certifications/iso-9001.png",
    "/logos/certifications/iso-27001.png",
    "/logos/certifications/iso-20000.png",
    "/logos/certifications/iso-15504.png",
    "/logos/certifications/iso-27701.png",
    "/logos/certifications/iso-12207.png",
] as const

interface AboutCertificationsSectionProps {
    certifications: CertificationsDict
}

export function AboutCertificationsSection({ certifications }: AboutCertificationsSectionProps) {
    return (
        <div className="relative py-20 md:py-24 bg-gradient-to-b from-corporate-surface via-white to-corporate-surface/60 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <Container className="relative z-10">
                <AnimatedDiv className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                    <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-slate-900 mb-4">
                        {certifications.heading}
                    </Heading>
                    <p className="text-slate-500 text-[15px] md:text-base leading-relaxed">
                        {certifications.subtitle}
                    </p>
                </AnimatedDiv>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 max-w-5xl mx-auto">
                    {CERTIFICATION_LOGOS.map((src, i) => (
                        <ScaleIn
                            key={src}
                            delay={i * 0.06}
                            className="flex flex-col items-center bg-white p-5 md:p-6 rounded-2xl border border-border shadow-md hover:shadow-xl hover:border-corporate-highlight/40 hover:-translate-y-1 transition-all duration-300 text-center"
                        >
                            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 md:mb-4">
                                <Image
                                    src={src}
                                    alt={certifications.labels[i]}
                                    fill
                                    className="object-contain"
                                    sizes="96px"
                                />
                            </div>
                            <span className="text-[11px] md:text-xs text-slate-500 font-semibold leading-tight">
                                {certifications.labels[i]}
                            </span>
                        </ScaleIn>
                    ))}
                </div>
            </Container>
        </div>
    )
}
