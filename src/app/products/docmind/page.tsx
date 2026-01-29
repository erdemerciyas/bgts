import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Code, FileJson, GitBranch, Settings, ArrowRight, Book, Terminal } from "lucide-react"

export default function DocMindPage() {
    return (
        <div className="bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-mono font-semibold">
                                <Terminal className="w-4 h-4" />
                                <span>Automated Documentation</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Kod Yazmak Size, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Dokümantasyon Bize</span> Kalsın
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                DocMind, kaynak kodunuzu analiz eder, yapısını anlar ve her zaman güncel kalan teknik dokümantasyonlar üretir. "Döküman güncel değil" sorununa son verin.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:scale-105"
                                >
                                    Erken Erişim Başvurusu
                                </Link>
                                <Link
                                    href="#features"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/10"
                                >
                                    Nasıl Çalışır?
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full aspect-video lg:aspect-square max-w-xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-emerald-500/30 rounded-full blur-3xl"></div>
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                                <div className="bg-slate-900 rounded-xl overflow-hidden h-full flex flex-col border border-white/10">
                                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-4 text-xs font-mono text-slate-400">docmind-cli — generated-docs</span>
                                    </div>
                                    <div className="relative flex-1 overflow-hidden">
                                        <Image
                                            src="/images/products/docmind/image3.png"
                                            alt="DocMind Interface"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-white border-b border-slate-200">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4 text-slate-900 border border-slate-200 shadow-sm">
                                    <GitBranch className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900">1. Repo Bağlantısı</h3>
                                <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Bitbucket veya Git reponuzu sisteme tanımlayın.</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-4 text-teal-600 border border-teal-100 shadow-sm">
                                    <Settings className="w-8 h-8 animate-spin-slow" />
                                </div>
                                <h3 className="font-bold text-slate-900">2. AI Analizi</h3>
                                <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Entegre LLM modelleri kod yapınızı tarar ve anlar.</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-slate-300 hidden md:block" />
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600 border border-blue-100 shadow-sm">
                                    <Book className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-slate-900">3. Canlı Doküman</h3>
                                <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Confluence veya PDF çıktılarınız hazır ve güncel.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES LIST */}
            <section id="features" className="py-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity"></div>
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                                <Image
                                    src="/images/products/docmind/image7.png"
                                    alt="Documentation Output"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                                Geliştiricilerin En Sevmediği İşte <br />En Büyük Yardımcı
                            </h2>
                            <p className="text-lg text-slate-600">
                                Kod yazmak keyifli ama dokümantasyon sıkıcıdır. DocMind ile teknik borçlarınız azalır, on-boarding süreleri kısalır.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                        <Code className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Esnek Kapsam</h4>
                                        <p className="text-slate-600 mt-1">İster üst seviye mimari özeti, ister fonksiyon bazlı detaylı API dokümanı. İhtiyacınıza göre ayarlayın.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                        <FileJson className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Özelleştirilebilir Başlıklar</h4>
                                        <p className="text-slate-600 mt-1">"Kurulum", "Veritabanı Şeması", "Sınıf Hiyerarşisi" gibi dilediğiniz başlıkları seçerek doküman yapısını siz belirleyin.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                                        <Settings className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Dil Desteği</h4>
                                        <p className="text-slate-600 mt-1">Dokümanlarınızın dilini seçin (TR/EN). Global ekipler için İngilizce, yerel ekipler için Türkçe çıktılar alın.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <Container>
                    <h2 className="text-3xl font-black mb-8">Teknik Dokümantasyon Artık Yük Değil</h2>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        DocMind ile kodunuz geliştikçe dokümanınız da gelişsin.
                    </p>
                    <Link href="/contact" className="px-10 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-colors inline-flex items-center">
                        Demo Talep Et <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </Container>
            </section>
        </div>
    )
}
