"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { HOME_CONTENT } from "@/content/home"
import { cn } from "@/lib/utils"

export function IndustriesGrid() {
    const { badge, heading, description, items } = HOME_CONTENT.industries;

    return (
        <Section background="default" className="relative pb-32">


            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-6 py-2 rounded-full bg-corporate-tertiary/10 text-corporate-tertiary font-bold text-sm tracking-wide mb-6">
                        {badge}
                    </span>
                    <Heading variant="h2" className="text-corporate-primary mb-6">
                        {heading}
                    </Heading>
                    <Text variant="large" className="text-text-secondary">
                        {description}
                    </Text>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-corporate-tertiary/30 flex flex-col h-full"
                            >
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/90 via-corporate-dark/40 to-transparent"></div>

                                    <div className="absolute bottom-8 left-8 text-white z-20">
                                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 group-hover:bg-corporate-tertiary/20 group-hover:border-corporate-tertiary/50 transition-all">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 flex flex-col flex-1 bg-white relative">
                                    {/* Hover Accent Line */}
                                    <div className="absolute top-0 left-0 w-0 h-1 bg-corporate-tertiary transition-all duration-500 group-hover:w-full" />

                                    <Heading variant="h4" className="text-corporate-primary mb-4 text-2xl group-hover:text-corporate-tertiary transition-colors">
                                        {item.title}
                                    </Heading>
                                    <Text className="text-text-secondary mb-8 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </Text>

                                    <div className="mt-auto flex items-center font-bold text-corporate-primary text-sm tracking-wide group-hover:text-corporate-tertiary transition-colors">
                                        İNCELE <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}
