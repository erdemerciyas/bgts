import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { AnimatedDiv } from "@/components/ui/AnimatedElements"
import { LocationsMap } from "./LocationsMap"

import { getDictionary } from "@/get-dictionary"
import type { Locale } from "@/i18n-config"

export default async function AboutPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const dict = await getDictionary(lang);
    const about = dict.about;

    return (
        <div className="bg-white min-h-screen">

            {/* ═══ HERO — Slider format ═══ */}
            <div className="relative min-h-[55svh] md:h-[75vh] md:min-h-[500px] w-full overflow-hidden bg-slate-900">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/headers/bgts-hakkimizda-ekip.jpg"
                        alt={about.hero.title}
                        fill
                        priority
                        className="object-cover scale-105"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                <Container className="relative z-10 h-full flex flex-col justify-center pt-24 pb-10 md:pb-24 md:pt-24">
                    <div className="w-full md:px-14 lg:px-20">
                        <div className="max-w-4xl">
                            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-[1.1] drop-shadow-2xl font-semibold tracking-tight">
                                {about.hero.title}
                            </h1>
                            <p className="text-slate-200 text-base md:text-xl mb-6 md:mb-8 max-w-2xl font-light leading-relaxed drop-shadow-lg opacity-90">
                                {about.hero.subtitle}
                            </p>
                        </div>
                    </div>
                </Container>
            </div>


            {/* ═══ PEOPLE FIRST — Modern values section ═══ */}
            <Section className="py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white relative">
                {/* Decorative geometric shapes — semi-transparent */}
                <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-violet-100/30 rounded-full blur-[120px] pointer-events-none" />

                {/* Floating geometric SVGs — with visible fills */}
                <svg className="absolute top-32 left-[8%] w-28 h-28 pointer-events-none" viewBox="0 0 80 80"><circle cx="40" cy="40" r="38" fill="#3b82f6" fillOpacity="0.06" stroke="#3b82f6" strokeOpacity="0.18" strokeWidth="2.5" /><circle cx="40" cy="40" r="24" fill="#3b82f6" fillOpacity="0.08" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="2" /><circle cx="40" cy="40" r="10" fill="#3b82f6" fillOpacity="0.15" /></svg>
                <svg className="absolute top-48 right-[6%] w-32 h-32 pointer-events-none" viewBox="0 0 100 100"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#8b5cf6" fillOpacity="0.06" stroke="#8b5cf6" strokeOpacity="0.18" strokeWidth="2.5" /><polygon points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" fill="#8b5cf6" fillOpacity="0.08" stroke="#8b5cf6" strokeOpacity="0.15" strokeWidth="2" /></svg>
                <svg className="absolute top-[40%] left-[3%] w-24 h-24 pointer-events-none" viewBox="0 0 80 80"><rect x="10" y="10" width="60" height="60" rx="8" fill="#10b981" fillOpacity="0.06" stroke="#10b981" strokeOpacity="0.18" strokeWidth="2.5" transform="rotate(45 40 40)" /><rect x="22" y="22" width="36" height="36" rx="4" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeOpacity="0.15" strokeWidth="2" transform="rotate(45 40 40)" /></svg>
                <svg className="absolute top-[55%] right-[10%] w-20 h-20 pointer-events-none" viewBox="0 0 60 60"><polygon points="30,2 58,30 30,58 2,30" fill="#f59e0b" fillOpacity="0.07" stroke="#f59e0b" strokeOpacity="0.20" strokeWidth="2.5" /><polygon points="30,14 46,30 30,46 14,30" fill="#f59e0b" fillOpacity="0.10" stroke="#f59e0b" strokeOpacity="0.16" strokeWidth="2" /></svg>
                <svg className="absolute top-[72%] left-[5%] w-28 h-28 pointer-events-none" viewBox="0 0 80 80"><polygon points="40,5 75,25 75,55 40,75 5,55 5,25" fill="#f43f5e" fillOpacity="0.06" stroke="#f43f5e" strokeOpacity="0.18" strokeWidth="2.5" /><line x1="40" y1="5" x2="40" y2="75" stroke="#f43f5e" strokeOpacity="0.12" strokeWidth="1.5" /><line x1="5" y1="25" x2="75" y2="55" stroke="#f43f5e" strokeOpacity="0.12" strokeWidth="1.5" /><line x1="75" y1="25" x2="5" y2="55" stroke="#f43f5e" strokeOpacity="0.12" strokeWidth="1.5" /></svg>
                <svg className="absolute top-[85%] right-[4%] w-22 h-22 pointer-events-none" viewBox="0 0 80 80"><polygon points="40,4 76,40 40,76 4,40" fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeOpacity="0.18" strokeWidth="2" /><circle cx="40" cy="40" r="16" fill="#3b82f6" fillOpacity="0.10" stroke="#3b82f6" strokeOpacity="0.15" strokeWidth="2" /></svg>
                <svg className="absolute top-16 right-[25%] w-14 h-14 pointer-events-none" viewBox="0 0 40 40"><path d="M20 2 L38 20 L20 38 L2 20 Z" fill="#64748b" fillOpacity="0.08" stroke="#64748b" strokeOpacity="0.18" strokeWidth="2" /><circle cx="20" cy="20" r="5" fill="#64748b" fillOpacity="0.20" /></svg>
                <svg className="absolute top-[62%] left-[22%] w-16 h-16 pointer-events-none" viewBox="0 0 50 50"><circle cx="25" cy="25" r="23" fill="#64748b" fillOpacity="0.05" stroke="#64748b" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="4 4" /><circle cx="25" cy="25" r="12" fill="#64748b" fillOpacity="0.08" stroke="#64748b" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="3 3" /></svg>

                <Container className="relative z-10">
                    {/* Heading — centered */}
                    <AnimatedDiv className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 leading-tight mb-4">
                            {about.peopleFirst.heading}
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                            {about.peopleFirst.subtitle}
                        </p>
                    </AnimatedDiv>

                    {/* Principles — alternating timeline */}
                    <AnimatedDiv delay={0.1} className="relative">
                        {/* Central timeline line — desktop only */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

                        <div className="space-y-8 lg:space-y-12">
                            {about.peopleFirst.principles.map((p: any, i: number) => {
                                const gradients = [
                                    "from-blue-500 to-blue-600",
                                    "from-violet-500 to-violet-600",
                                    "from-emerald-500 to-emerald-600",
                                    "from-amber-500 to-amber-600",
                                    "from-rose-500 to-rose-600",
                                ];
                                const textColors = [
                                    "text-blue-600",
                                    "text-violet-600",
                                    "text-emerald-600",
                                    "text-amber-600",
                                    "text-rose-600",
                                ];
                                const dotColors = [
                                    "bg-blue-500 ring-blue-100",
                                    "bg-violet-500 ring-violet-100",
                                    "bg-emerald-500 ring-emerald-100",
                                    "bg-amber-500 ring-amber-100",
                                    "bg-rose-500 ring-rose-100",
                                ];
                                const isLeft = i % 2 === 0;
                                return (
                                    <div key={i} className="relative">
                                        {/* Timeline dot — desktop */}
                                        <div className={`hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 w-4 h-4 rounded-full ${dotColors[i % 5]} ring-4 items-center justify-center`} />

                                        {/* Card */}
                                        <div className={`lg:w-[calc(50%-2.5rem)] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                                            <div className="group relative flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default border border-slate-100">
                                                <div className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${gradients[i % 5]} text-white font-bold text-xs shadow-md`}>
                                                    {p.number}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className={`font-bold text-[15px] sm:text-base mb-1.5 ${textColors[i % 5]}`}>{p.title}</h3>
                                                    <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">{p.desc}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connector line from dot to card — desktop */}
                                        <div className={`hidden lg:block absolute top-[2.35rem] h-px bg-slate-200 ${isLeft ? 'left-[calc(50%-2.5rem)] w-[2.5rem]' : 'left-1/2 w-[2.5rem]'}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </AnimatedDiv>

                </Container>
            </Section>


            {/* ═══ KONUMLAR — Interactive Map ═══ */}
            <LocationsMap lang={lang} dict={dict} />

        </div>
    )
}

