"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { SOFTWARE_DEV_CONTENT } from "@/content/software-development"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SoftwareDevelopmentPage() {
    const { hero, domains, capabilities } = SOFTWARE_DEV_CONTENT;

    return (
        <>
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}
                badge={hero.badge}
                layout="simple"
                backgroundImage="/images/services/yazilim-gelistirme-hero.png"
                align="center"
            />

            {/* Main Content with Sticky Sidebar */}
            <Section background="default" className="py-24">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

                        {/* Sidebar Navigation (Hidden on Mobile) */}
                        <aside className="hidden lg:block w-72 shrink-0">
                            <div className="sticky top-32 space-y-2">
                                <Text variant="small" className="font-bold text-slate-400 tracking-widest uppercase mb-6 pl-4">
                                    Sektörel Çözümler
                                </Text>
                                <nav className="flex flex-col border-l-2 border-slate-100">
                                    {domains.map((domain) => (
                                        <Link
                                            key={domain.id}
                                            href={`#${domain.id}`}
                                            className="group flex items-center py-3 pl-6 border-l-2 -ml-[2px] border-transparent hover:border-corporate-primary transition-all text-slate-500 hover:text-corporate-primary"
                                        >
                                            <span className="font-medium text-sm transition-transform group-hover:translate-x-1 duration-300">
                                                {domain.title}
                                            </span>
                                        </Link>
                                    ))}
                                    <div className="pt-8 pl-6">
                                        <Link
                                            href="#capabilities"
                                            className="inline-flex items-center text-sm font-bold text-corporate-secondary group"
                                        >
                                            Teknik Yetenekler <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-32">
                                {domains.map((domain) => {
                                    const Icon = domain.icon;
                                    return (
                                        <div key={domain.id} id={domain.id} className="scroll-mt-32 group">

                                            {/* Section Image & Header Combined */}
                                            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                                {/* Image */}
                                                <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg border border-border">
                                                    <Image
                                                        src={domain.image}
                                                        alt={domain.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                    {/* Icon Overlay */}
                                                    <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-corporate-primary shadow-sm">
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                </div>

                                                {/* Title & Desc */}
                                                <div className="flex-1 pt-2">
                                                    <Heading variant="h3" className="text-corporate-primary mb-4">
                                                        {domain.title}
                                                    </Heading>
                                                    <Text variant="large" className="text-slate-600 leading-relaxed">
                                                        {domain.description}
                                                    </Text>
                                                </div>
                                            </div>

                                            {/* Features List - Keeping the clean look */}
                                            <div className="pl-4 border-l border-slate-100 ml-5 space-y-8">
                                                {domain.features.map((feature, i) => (
                                                    <div key={i} className="pl-8 relative">
                                                        {/* Dot indicator */}
                                                        <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-corporate-secondary transition-colors duration-500" />

                                                        <Heading variant="h4" className="text-slate-900 text-lg font-bold mb-2">
                                                            {feature.title}
                                                        </Heading>
                                                        <Text className="text-slate-500 leading-relaxed">
                                                            {feature.description}
                                                        </Text>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </Container>
            </Section>

            {/* Core Capabilities - Technical Strip */}
            <div id="capabilities" className="scroll-mt-24">
                <Section background="dark" className="relative py-24">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Heading variant="h2" className="text-white mb-6">
                                {capabilities.title}
                            </Heading>
                            <Text className="text-slate-300 text-lg">
                                {capabilities.subtitle}
                            </Text>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t md:border-t-0 border-white/10 pt-12 md:pt-0">
                            {capabilities.items.map((cap, index) => {
                                const Icon = cap.icon;
                                return (
                                    <div key={index} className="px-6 first:pl-0 last:pr-0 pt-12 md:pt-0 first:pt-0">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icon className="w-6 h-6 text-corporate-accent" />
                                            <h3 className="text-xl font-bold text-white">{cap.title}</h3>
                                        </div>

                                        <div className="space-y-6">
                                            {cap.features.map((feat, i) => (
                                                <div key={i} className="group">
                                                    <h4 className="text-white/90 font-medium mb-2 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-corporate-accent" />
                                                        {feat.title}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm leading-relaxed pl-3.5">
                                                        {feat.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}
