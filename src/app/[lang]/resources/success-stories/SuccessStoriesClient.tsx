"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { CaseStudyCard } from "@/components/resources/CaseStudyCard"
import { AnimatedDiv, ScaleIn } from "@/components/ui/AnimatedElements"
import Image from "next/image"
import type { CaseStudy } from "@/data/case-studies.en"
import { useState } from "react"

type FeaturedStory = {
    badge: string
    title: string
    lead: string
    facts: { label: string; value: string }[]
    intro: string
    challengeTitle: string
    challenge: string[]
    solutionTitle: string
    solutionIntro: string
    solutionItems: { title: string; text: string }[]
    solutionOutro: string[]
    resultsTitle: string
    resultsIntro: string
    stats: { value: string; label: string }[]
    quote: string
    quoteAuthor: string
    quoteRole: string
    readMore: string
    readLess: string
}

type SuccessStoriesDict = {
    hero: { title: string; subtitle: string }
    featured: FeaturedStory
    grid: {
        title: string;
        subtitle: string;
        legend: {
            software: string;
            infrastructure: string;
            managed: string;
            education: string;
        }
    }
}

export default function SuccessStoriesClient({ dict: d, cases, lang }: { dict: SuccessStoriesDict, cases: CaseStudy[], lang: string }) {
    return (
        <div className="bg-white min-h-screen">
            {/* ══════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-16 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 min-h-[40vh] flex items-center">
                {/* Immersive Background Effects (Light Mode) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Light dynamic glows */}
                    <div className="absolute -top-40 right-[0%] w-[800px] h-[800px] rounded-full bg-blue-100/50 blur-[120px]" />
                    <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-100/40 blur-[100px]" />

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
                </div>

                <Container className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* LEFT COLUMN: Typography */}
                        <AnimatedDiv className="max-w-2xl">
                            <h1 className="text-corporate-dark font-black tracking-tight leading-[1.1] text-5xl lg:text-[4.5rem] mb-8">
                                <span dangerouslySetInnerHTML={{ __html: d.hero.title }} />
                            </h1>

                            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-normal max-w-lg mb-10">
                                <span dangerouslySetInnerHTML={{ __html: d.hero.subtitle }} />
                            </p>
                        </AnimatedDiv>

                        {/* RIGHT COLUMN: Image Layout */}
                        <ScaleIn className="hidden lg:block relative h-[400px] w-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-50" />
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/images/industries/I53A6435.jpg"
                                        alt="Success Stories"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                                
                            </div>
                        </ScaleIn>
                    </div>
                </Container>
            </section>

            {/* ══════════════════════════════════════════════════════
                PROJECT GRID
            ══════════════════════════════════════════════════════ */}
            <Section background="default" className="py-16 md:py-24">
                <Container>
                    {/* Section header */}
                    <div className="flex items-end justify-between mb-12 flex-wrap gap-4 pb-6 border-b border-slate-100">
                        <div>
                            <Heading variant="h2" className="text-slate-900 font-black text-3xl mb-1.5 tracking-tight">
                                {d.grid.title}
                            </Heading>
                            <Text variant="small" className="text-slate-400 font-medium">
                                {cases.length} {d.grid.subtitle}
                            </Text>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-blue-500 inline-block shrink-0" />{d.grid.legend.software}</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-slate-400 inline-block shrink-0" />{d.grid.legend.infrastructure}</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-emerald-500 inline-block shrink-0" />{d.grid.legend.managed}</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-3 rounded-sm bg-amber-400 inline-block shrink-0" />{d.grid.legend.education}</span>
                        </div>
                    </div>

                    <FeaturedStoryBlock f={d.featured} />

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {cases.map((study, index) => (
                            <CaseStudyCard key={study.id} study={study} index={index} lang={lang} />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}

function FeaturedStoryBlock({ f }: { f: FeaturedStory }) {
    const [open, setOpen] = useState(false)

    return (
        <AnimatedDiv className="mb-12">
            <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-corporate-dark via-[#0f2340] to-corporate-secondary text-white shadow-xl">
                <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-500/20 blur-[100px]" />

                <div className="relative p-6 sm:p-10 lg:p-12">
                    <span className="inline-flex items-center gap-2 rounded-full bg-corporate-highlight/15 border border-corporate-highlight/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-corporate-highlight">
                        <span className="w-1.5 h-1.5 rounded-full bg-corporate-highlight" />
                        {f.badge}
                    </span>

                    <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-10">
                        <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                                {f.title}
                            </h3>
                            <p className="mt-5 text-base lg:text-lg text-blue-100/90 leading-relaxed">
                                {f.lead}
                            </p>
                        </div>

                        <dl className="rounded-2xl bg-white/5 border border-white/10 divide-y divide-white/10 text-sm">
                            {f.facts.map((fact) => (
                                <div key={fact.label} className="grid grid-cols-[120px_1fr] gap-3 px-5 py-3">
                                    <dt className="text-blue-200/70 font-semibold">{fact.label}</dt>
                                    <dd className="text-white">{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-3 gap-4">
                        {f.stats.map((s) => (
                            <div key={s.value} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                <div className="text-2xl lg:text-3xl font-black text-corporate-highlight">{s.value}</div>
                                <div className="mt-1.5 text-sm text-blue-100/80 leading-snug">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <figure className="mt-10 border-l-4 border-corporate-highlight pl-5 lg:pl-6">
                        <blockquote className="text-lg lg:text-xl italic leading-relaxed text-white/95">
                            &ldquo;{f.quote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-3 text-sm">
                            <span className="font-bold">{f.quoteAuthor}</span>
                            <span className="text-blue-200/70">, {f.quoteRole}</span>
                        </figcaption>
                    </figure>

                    {open && (
                        <div className="mt-10 pt-10 border-t border-white/10 grid lg:grid-cols-2 gap-10 text-[15px] leading-relaxed text-blue-50/90">
                            <div className="space-y-4 lg:col-span-2">
                                <p>{f.intro}</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-highlight">{f.challengeTitle}</h4>
                                {f.challenge.map((p) => <p key={p}>{p}</p>)}
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-highlight">{f.solutionTitle}</h4>
                                <p>{f.solutionIntro}</p>
                                <ul className="space-y-3">
                                    {f.solutionItems.map((item) => (
                                        <li key={item.title} className="flex gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-corporate-highlight shrink-0" />
                                            <span><strong className="text-white">{item.title}</strong> {item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                {f.solutionOutro.map((p) => <p key={p}>{p}</p>)}
                            </div>
                            <div className="space-y-2 lg:col-span-2">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-corporate-highlight">{f.resultsTitle}</h4>
                                <p>{f.resultsIntro}</p>
                                <ul className="space-y-1.5">
                                    {f.stats.map((s) => (
                                        <li key={s.value}><strong className="text-white">{s.value}</strong> {s.label}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-corporate-dark px-5 py-2.5 text-sm font-bold hover:bg-blue-50 transition-colors"
                    >
                        {open ? f.readLess : f.readMore}
                        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </article>
        </AnimatedDiv>
    )
}
