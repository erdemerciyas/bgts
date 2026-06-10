"use client"

import { localizedPathForLang } from '@/lib/routes'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { FileText, UploadCloud, Edit3, CheckSquare, ArrowRight, LayoutTemplate } from "lucide-react"
import { SoftwareApplicationStructuredData } from "@/components/seo/StructuredData"

const FEATURE_ICONS = [UploadCloud, LayoutTemplate, Edit3]
const FEATURE_COLORS = [
    { bg: "bg-indigo-100", icon: "text-indigo-600" },
    { bg: "bg-blue-100", icon: "text-blue-600" },
    { bg: "bg-teal-100", icon: "text-teal-600" },
]

type CvConverterDetail = {
    hero: { title: string; titleAccent: string; subtitle: string; cta: string }
    problem: {
        heading: string; body: string
        problemLabel: string; problemDesc: string
        solutionLabel: string; solutionDesc: string
        pdfLabel: string; wordLabel: string; outputLabel: string
    }
    features: {
        heading: string; subheading: string
        items: { title: string; desc: string }[]
    }
    cta: { heading: string; body: string; button: string }
}

export default function CvConverterClient({ dict, lang }: { dict: CvConverterDetail; lang: string }) {
    const d = dict
    return (
        <div className="bg-white">
            <SoftwareApplicationStructuredData
                name="CV Converter"
                description={d.features.subheading}
                url={localizedPathForLang(lang, '/products/cv-converter')}
            />

            {/* HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                {d.hero.title} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                    {d.hero.titleAccent}
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                {d.hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href={localizedPathForLang(lang, '/contact')}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
                                >
                                    {d.hero.cta} <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full aspect-video lg:aspect-square max-w-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-2xl blur-2xl" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm group">
                                <Image
                                    src="/images/products/cv-converter/cv-converter-hero.png"
                                    alt="CV Converter Dashboard"
                                    fill
                                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* PROBLEM / SOLUTION */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">{d.problem.heading}</h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">{d.problem.body}</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                                    <div className="mt-1 text-red-500"><LayoutTemplate className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-red-900">{d.problem.problemLabel}</h4>
                                        <p className="text-sm text-red-700 mt-1">{d.problem.problemDesc}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center py-2">
                                    <ArrowRight className="w-6 h-6 text-slate-400 rotate-90 md:rotate-0" />
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100">
                                    <div className="mt-1 text-green-500"><CheckSquare className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-green-900">{d.problem.solutionLabel}</h4>
                                        <p className="text-sm text-green-700 mt-1">{d.problem.solutionDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                                <FileText className="w-10 h-10 text-slate-400 mb-4" />
                                <span className="font-bold text-slate-700">{d.problem.pdfLabel}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                                <FileText className="w-10 h-10 text-slate-400 mb-4" />
                                <span className="font-bold text-slate-700">{d.problem.wordLabel}</span>
                            </div>
                            <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white flex flex-col items-center text-center shadow-lg shadow-blue-200">
                                <CheckSquare className="w-12 h-12 text-white mb-4" />
                                <span className="font-bold text-xl">{d.problem.outputLabel}</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES GRID */}
            <section id="features" className="py-24 bg-slate-50 border-t border-slate-200">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">{d.features.heading}</h2>
                        <p className="text-slate-600 text-lg">{d.features.subheading}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {d.features.items.map((feature, i) => {
                            const Icon = FEATURE_ICONS[i] ?? FileText
                            const color = FEATURE_COLORS[i] ?? FEATURE_COLORS[0]
                            return (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                                    <div className={`w-12 h-12 rounded-lg ${color.bg} flex items-center justify-center mb-6 ${color.icon}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <Container className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl shadow-blue-200">
                    <h2 className="text-3xl lg:text-4xl font-black mb-6">{d.cta.heading}</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{d.cta.body}</p>
                    <Link
                        href={localizedPathForLang(lang, '/contact')}
                        className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
                    >
                        {d.cta.button}
                    </Link>
                </Container>
            </section>
        </div>
    )
}
