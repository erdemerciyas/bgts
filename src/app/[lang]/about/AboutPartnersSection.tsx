"use client"

import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Heading } from "@/components/ui/Typography"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"

export type PartnersDict = {
    heading: string
    subtitle: string
}

const PARTNER_LOGOS = [
    { src: "/logos/partners/microsoft-logo.webp", alt: "Microsoft" },
    { src: "/logos/partners/aws-partner.webp", alt: "AWS Partner" },
    { src: "/logos/partners/atlassian-logo.webp", alt: "Atlassian" },
    { src: "/logos/partners/servicenow-partner.png", alt: "ServiceNow" },
    { src: "/logos/partners/redhat-partner.png", alt: "Red Hat" },
    { src: "/logos/partners/qlik-partner.png", alt: "Qlik Partner" },
    { src: "/logos/partners/mendix-logo.webp", alt: "Mendix" },
    { src: "/logos/partners/4me-partner.webp", alt: "4me Partner" },
    { src: "/logos/partners/temenos-partner.jpg", alt: "Temenos" },
] as const

interface AboutPartnersSectionProps {
    partners: PartnersDict
}

export function AboutPartnersSection({ partners }: AboutPartnersSectionProps) {
    return (
        <div className="relative bg-[#0F1B2D] py-20 md:py-24 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-corporate-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-corporate-accent/8 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10">
                <AnimatedDiv className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                    <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-white mb-4">
                        {partners.heading}
                    </Heading>
                    <p className="text-slate-400 text-[15px] md:text-base leading-relaxed">
                        {partners.subtitle}
                    </p>
                </AnimatedDiv>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
                    {PARTNER_LOGOS.map((partner, i) => (
                        <AnimatedDiv
                            key={partner.alt}
                            delay={i * 0.04}
                            className="flex items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-corporate-secondary/10 hover:-translate-y-1.5 transition-all duration-300 p-4 h-36 md:h-40"
                        >
                            <div className="relative w-full h-full">
                                <Image src={partner.src} alt={partner.alt} fill className="object-contain" sizes="(max-width: 768px) 50vw, 200px" />
                            </div>
                        </AnimatedDiv>
                    ))}
                </div>
            </Container>
        </div>
    )
}
