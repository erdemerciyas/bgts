"use client"

import Link from "next/link"
import { localizedPathForLang } from "@/lib/routes"
import type { Locale } from "@/i18n-config"
import { Users, Heart, Zap, Smile, BookOpen, Coffee, Target, Rocket, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Hero from "@/components/ui/Hero"
import CultureCard from "@/components/ui/CultureCard"
import { Button } from "@/components/ui/Button"
import TestimonialCard from "@/components/ui/TestimonialCard"

type HRDict = {
    hero: { title: string; subtitle: string }
    values: {
        title: string
        subtitle: string
        innovation: { title: string; description: string }
        success: { title: string; description: string }
        human: { title: string; description: string }
    }
    life: {
        title: string
        subtitle: string
        caption1: string
        caption2: string
        caption3: string
        location: string
    }
    why: {
        title: string
        items: { title: string; desc: string }[]
    }
    young_teaser: {
        title: string
        subtitle: string
        cta: string
    }
    passion: {
        title: string
        subtitle: string
        path: { title: string; desc: string }
        vision: { title: string; desc: string }
        talent_count: string
        talent_wait: string
    }
    testimonials: {
        title: string
        items: { quote: string; author: string; role: string }[]
    }
    footer_cta: {
        title: string
        subtitle: string
        cta: string
    }
}

export default function HRClient({ dict: d, lang }: { dict: HRDict; lang: Locale }) {
    const WHY_ICONS = [BookOpen, Coffee, Smile, Target]

    return (
        <div className="bg-white min-h-screen">

            <Hero
                title={d.hero.title}
                subtitle={d.hero.subtitle}
                className="bg-rose-600"
                backgroundImage="/images/culture/culture-1.jpg"
            />

            {/* Culture Values */}
            <Section>
                <Container>
                    <Heading variant="h2" className="text-center mb-4">{d.values.title}</Heading>
                    <Text variant="lead" className="text-center mb-16 max-w-2xl mx-auto">
                        {d.values.subtitle}
                    </Text>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CultureCard
                            title={d.values.innovation.title}
                            description={d.values.innovation.description}
                            icon={Zap}
                            color="blue"
                            delay={0}
                        />
                        <CultureCard
                            title={d.values.success.title}
                            description={d.values.success.description}
                            icon={Users}
                            color="purple"
                            delay={0.1}
                        />
                        <CultureCard
                            title={d.values.human.title}
                            description={d.values.human.description}
                            icon={Heart}
                            color="orange"
                            delay={0.2}
                        />
                    </div>
                </Container>
            </Section>

            {/* Life at BGTS - Gallery Section */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center mb-12">
                        <Heading variant="h2" className="mb-4">{d.life.title}</Heading>
                        <Text className="text-slate-600 max-w-2xl mx-auto">
                            {d.life.subtitle}
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        {/* Large item on the left */}
                        <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/culture/culture-2.jpg"
                                alt="BGTS Office Life"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">{d.life.caption1}</span>
                            </div>
                        </div>

                        {/* Top right item 1 */}
                        <div className="relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-3.jpg"
                                alt="BGTS Team Meeting"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Top right item 2 */}
                        <div className="relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-5.jpg"
                                alt="Social Events"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Bottom right wide item */}
                        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group min-h-[200px]">
                            <Image
                                src="/images/culture/culture-6.jpg"
                                alt="Engineering Team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">{d.life.caption2}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Benefits */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-16">{d.why.title}</Heading>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {d.why.items.map((benefit, i) => {
                            const Icon = WHY_ICONS[i]
                            return (
                                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <Heading variant="h4" className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</Heading>
                                    <Text variant="small" className="text-slate-600">{benefit.desc}</Text>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </Section>

            {/* Young Engineers Teaser */}
            <Section className="bg-slate-900 py-24 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <Container className="relative z-10 text-center">
                    <Heading variant="h2" className="text-white text-4xl md:text-5xl mb-6">
                        {d.young_teaser.title}
                    </Heading>

                    <Text className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        {d.young_teaser.subtitle}
                    </Text>

                    <div className="flex justify-center">
                        <Link href={localizedPathForLang(lang, '/genc-muhendis-programi')} className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                {d.young_teaser.cta} <Rocket className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* Life at BGTS / Why Join */}
            <Section className="bg-white py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">

                            <Heading variant="h2" className="text-slate-900 text-4xl leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.passion.title }} />
                            </Heading>
                            <Text variant="lead" className="text-slate-600">
                                {d.passion.subtitle}
                            </Text>

                            <div className="space-y-6 pt-4">
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Rocket className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">{d.passion.path.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{d.passion.path.desc}</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-violet-600 transition-colors duration-300">
                                        <Globe className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-1">{d.passion.vision.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{d.passion.vision.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                                <div className="flex -space-x-4">
                                    {[2, 3, 5, 6].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white relative overflow-hidden shadow-sm">
                                            <Image src={`/images/culture/culture-${i}.jpg`} alt="Team" fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900">{d.passion.talent_count}</p>
                                    <p className="text-slate-500">{d.passion.talent_wait}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Right Side */}
                        <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 rotate-1 hover:rotate-0 transition-all duration-700 group border-8 border-white bg-slate-100">
                            <Image
                                src="/images/headers/kariyer-gelisim-firsatlari.jpg"
                                alt="Life at BGTS"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-10 left-10 right-10 text-white transform group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" />
                                <p className="font-bold text-3xl mb-3">{d.life.caption3}</p>
                                <p className="text-slate-300 text-lg">{d.life.location}</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Testimonials */}
            <Section className="bg-slate-50">
                <Container>
                    <Heading variant="h2" className="text-center mb-12">{d.testimonials.title}</Heading>
                    <div className="grid md:grid-cols-2 gap-8">
                        {d.testimonials.items.map((t, i) => (
                            <TestimonialCard
                                key={i}
                                quote={t.quote}
                                author={t.author}
                                role={t.role}
                                rating={5}
                                color={i === 0 ? "purple" : "blue"}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* General CTA / Contact */}
            <Section className="bg-slate-50 border-t border-slate-200">
                <Container className="text-center">
                    <Heading variant="h2" className="mb-6">{d.footer_cta.title}</Heading>
                    <Text className="max-w-2xl mx-auto mb-8 text-slate-600">
                        {d.footer_cta.subtitle}
                    </Text>
                    <Link href="https://linkedin.com" target="_blank">
                        <Button size="lg" variant="outline" className="gap-2">
                            {d.footer_cta.cta} <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </Container>
            </Section>
        </div >
    )
}
