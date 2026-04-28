"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Users, Star, Award, Briefcase, TrendingUp, UserCheck, MapPin, PersonStanding, Play } from "lucide-react"
import { FadeInLeft, StaggerContainer, StaggerItem, FadeInRight } from "@/components/ui/AnimatedElements"
import Link from "next/link"

const ICONS = [Users, UserCheck, Star, TrendingUp]
const ICON_COLORS = ["text-blue-600", "text-emerald-600", "text-amber-500", "text-violet-600"]
const VALUE_COLORS = ["text-blue-600", "text-emerald-500", "text-amber-500", "text-violet-600"]
const LINE_COLORS = ["bg-blue-200", "bg-emerald-200", "bg-amber-200", "bg-violet-200"]

type InfographicsDict = {
    hero: { title: string; subtitle: string }
    stats: { heading: string; desc: string; items: { value: string; title: string; desc: string }[] }
    discoverCta: string
    team: {
        heading: string; desc: string; totalEmployees: string; engineers: string;
        dynamicTeam: string; dynamicTeamDesc: string;
        equality: { title: string; general: string; female: string; male: string; managers: string; femaleManager: string; maleManager: string }
        geo: { title: string; outOfIstanbul: string; outOfIstanbulDesc: string; abroad: string; abroadDesc: string; projectDesc: string }
    }
}

export default function InfographicsClient({ dict: d }: { dict: InfographicsDict }) {
    return (
        <div className="bg-white min-h-screen">
            {/* Custom Hero Section */}
            <Section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B0F25]">
                {/* Background Image */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src="/images/products/info-hero.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F25] via-[#0B0F25]/70 to-transparent" />
                </div>

                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
                </div>

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <FadeInLeft>
                            <Heading variant="h1" className="text-white text-5xl lg:text-7xl font-black mb-6 leading-tight">
                                <span dangerouslySetInnerHTML={{ __html: d.hero.title }} />
                            </Heading>
                            <Text variant="large" className="text-slate-300 mb-10 max-w-lg text-lg leading-relaxed">
                                {d.hero.subtitle}
                            </Text>
                        </FadeInLeft>
                    </div>
                </Container>
            </Section>

            {/* Infographic 1: Recruitment Statistics */}
            <Section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10" />

                <Container>
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <Heading variant="h2" className="text-slate-900 mb-6">
                            {d.stats.heading}
                        </Heading>
                        <Text variant="large" className="text-slate-600">
                            {d.stats.desc}
                        </Text>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {d.stats.items.map((stat, idx) => {
                            const Icon = ICONS[idx] || Users;
                            return (
                                <StaggerItem key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-blue-50 hover:shadow-xl transition-all relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Icon className={`w-24 h-24 ${ICON_COLORS[idx] || "text-blue-600"}`} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className={`text-4xl lg:text-5xl font-black ${VALUE_COLORS[idx] || "text-blue-600"} mb-2`}>{stat.value}</div>
                                        <div className={`h-1 w-12 ${LINE_COLORS[idx] || "bg-blue-200"} mb-4 rounded-full`} />
                                        <h3 className="font-bold text-slate-800 text-lg mb-2">{stat.title}</h3>
                                        <p className="text-slate-500 text-sm">{stat.desc}</p>
                                    </div>
                                </StaggerItem>
                            )
                        })}
                    </StaggerContainer>

                    <div className="mt-12 flex justify-center">
                        <Link
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7408814201223249920"
                            target="_blank"
                            className="inline-flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg group-hover:bg-blue-700 transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 duration-300">
                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                            <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {d.discoverCta}
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* Infographic 2: Team Structure */}
            <Section className="py-20 bg-slate-50 relative">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                {d.team.heading}
                            </Heading>
                            <Text variant="large" className="text-slate-600 mb-8">
                                {d.team.desc}
                            </Text>

                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
                                    <div>
                                        <div className="text-5xl font-black text-slate-900">2000+</div>
                                        <div className="text-slate-500 font-medium mt-1">{d.team.totalEmployees}</div>
                                    </div>
                                    <div className="h-12 w-px bg-slate-200" />
                                    <div>
                                        <div className="text-5xl font-black text-indigo-600">1400+</div>
                                        <div className="text-slate-500 font-medium mt-1">{d.team.engineers}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                        <PersonStanding className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{d.team.dynamicTeam}</div>
                                        <div className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: d.team.dynamicTeamDesc }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {/* Gender Distribution */}
                            <FadeInRight className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-indigo-600" /> {d.team.equality.title}
                                </h3>

                                <div className="space-y-6">
                                    {/* General Stats */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-medium text-slate-600">
                                            <span>{d.team.equality.general}</span>
                                            <span>{d.team.equality.female} (%33)</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                                            <div className="h-full bg-rose-400 w-[33%]" />
                                            <div className="h-full bg-blue-500 w-[67%]" />
                                        </div>
                                        <div className="flex justify-between text-xs mt-2 text-slate-400">
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-400" /> {d.team.equality.female}</span>
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /> {d.team.equality.male} (%67)</span>
                                        </div>
                                    </div>

                                    {/* Leadership Stats */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2 font-medium text-slate-600">
                                            <span>{d.team.equality.managers}</span>
                                            <span>{d.team.equality.femaleManager} (%36)</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                                            <div className="h-full bg-rose-500 w-[36%]" />
                                            <div className="h-full bg-blue-600 w-[64%]" />
                                        </div>
                                        <div className="flex justify-between text-xs mt-2 text-slate-400">
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500" /> {d.team.equality.femaleManager}</span>
                                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-600" /> {d.team.equality.maleManager} (%64)</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInRight>

                            {/* Geo Distribution */}
                            <FadeInRight delay={0.1} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-indigo-600" /> {d.team.geo.title}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <div className="text-3xl font-black text-indigo-600 mb-1">%40</div>
                                        <div className="text-sm font-bold text-slate-800">{d.team.geo.outOfIstanbul}</div>
                                        <div className="text-xs text-slate-500 mt-1">{d.team.geo.outOfIstanbulDesc}</div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <div className="text-3xl font-black text-indigo-600 mb-1">150</div>
                                        <div className="text-sm font-bold text-slate-800">{d.team.geo.abroad}</div>
                                        <div className="text-xs text-slate-500 mt-1">{d.team.geo.abroadDesc}</div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-indigo-600" />
                                        <div className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: d.team.geo.projectDesc }} />
                                    </div>
                                </div>
                            </FadeInRight>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7363897243139026944"
                            target="_blank"
                            className="inline-flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-lg group-hover:bg-blue-700 transition-all shadow-md group-hover:shadow-lg group-hover:-translate-y-0.5 duration-300">
                                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                            </div>
                            <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {d.discoverCta}
                            </span>
                        </Link>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
