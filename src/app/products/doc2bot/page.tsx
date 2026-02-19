import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Bot, Database, Globe, Zap, MessageSquare, ArrowRight, BookOpen } from "lucide-react"

export default function Doc2BotPage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>

                <Container className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-blue-200 text-sm font-semibold backdrop-blur-sm">
                                <Bot className="w-4 h-4" />
                                <span>Kurumsal Bilgi Asistanı</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                                Bilgi Bankanız <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Konuşuyor</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Confluence ve dokümanlarınızdaki bilgiye ulaşmak hiç bu kadar kolay olmamıştı. Doc2Bot, çalışanlarınızın sorularını 7/24 anında yanıtlar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:scale-105"
                                >
                                    Botu Deneyin <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link
                                    href="#integrations"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/10"
                                >
                                    Entegrasyonlar
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full"></div>
                                <div className="relative h-full w-full bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col">
                                    {/* Fake Chat Interface */}
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="ml-auto text-xs text-slate-400">Doc2Bot Status: Online</span>
                                    </div>
                                    <div className="flex-1 space-y-4 overflow-hidden">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><span className="text-xs">U</span></div>
                                            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200">
                                                Yemek kartı limitleri bu ay ne kadar oldu?
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-white" /></div>
                                            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-blue-100">
                                                2024 yılı itibarıyla günlük yemek bedeli istisnası <strong>170 TL + KDV</strong> olarak belirlenmiştir. (Kaynak: İK Politikaları v2.4)
                                            </div>
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0"><span className="text-xs">U</span></div>
                                            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 text-sm text-slate-200">
                                                VPN kurulumu nasıl yapılır?
                                            </div>
                                        </div>
                                        <div className="flex gap-3 flex-row-reverse">
                                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-white" /></div>
                                            <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-blue-100">
                                                VPN kurulumu için GlobalProtect istemcisini indirmeniz gerekmektedir. Kurulum adımları şöyledir:<br />1. Portal adresine gidin<br />2. Sertifikayı indirin...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/images/products/doc2bot/image4.png"
                                    alt="Doc2Bot UI"
                                    width={200}
                                    height={200}
                                    className="absolute -bottom-10 -right-10 w-48 h-auto drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURES */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-6">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Neden Doc2Bot?</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                                Ekipleriniz Arasındaki Bilgi Köprüsü
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Kurum içinde tekrar eden sorularla zaman kaybetmeyin. Doc2Bot, dokümantasyonunuzu yaşayan bir bilgi kaynağına dönüştürür.
                            </p>
                            <Link href="/contact" className="inline-flex items-center font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                Detaylı Bilgi Al <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform"><BookOpen className="w-6 h-6" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Confluence Entegrasyonu</h3>
                                <p className="text-slate-600">Mevcut Confluence alanlarınızı (Spaces) doğrudan bağlayın. Ekstra veri girişine gerek kalmadan botunuz hazır.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform"><Zap className="w-6 h-6" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Doğru ve Güvenilir</h3>
                                <p className="text-slate-600">Doc2Bot hayal kurmaz (hallucination-free). Sadece dokümanlarınızda var olan bilgiyi referans vererek sunar.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform"><Globe className="w-6 h-6" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Çoklu Dil Desteği</h3>
                                <p className="text-slate-600">Dokümanlarınız İngilizce olsa bile çalışanlarınız Türkçe sorabilir. Doc2Bot diller arası çeviri yaparak yanıtlar.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform"><MessageSquare className="w-6 h-6" /></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Slack & Teams</h3>
                                <p className="text-slate-600">Çalışanlarınızın halihazırda kullandığı iletişim kanallarına (Slack, MS Teams) entegre olur.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    )
}
