"use client"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { Monitor, HeartHandshake, Database, LineChart, Users, Laptop, ArrowRight, ShieldCheck } from "lucide-react"

export default function DesktopSupportPage() {
    return (
        <div className="bg-white min-h-screen">
            <Hero
                title="Uçtan Uca Kullanıcı ve Cihaz Yönetimi"
                subtitle="L1 Desteği sadece buz dağının görünen kısmıdır. Süreç danışmanlığı, merkezi yönetim ve yapay zeka operasyonları ile fark yaratın."

                className="bg-indigo-900"
                backgroundImage="/images/headers/msp/Desktop-Support.png"
            />

            {/* Buz Dağının Görünen Kısmı */}
            <Section className="py-20">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <Heading variant="h2" className="text-slate-900 mb-6">L1: Buz Dağının Görünen Kısmı</Heading>
                            <Text variant="large" className="text-slate-600 mb-6 leading-relaxed">
                                Gerçek değer, suyun altında yatan stratejik katmanlarda gizlidir. Sadece "destek" değil, "yönetim ve danışmanlık" sunuyoruz.
                                Geleneksel L1 desteğinin ötesine geçerek, işletmenizin teknolojik olgunluğunu artırıyoruz.
                            </Text>

                            <div className="space-y-4 mt-8">
                                <div className="border-l-4 border-indigo-600 pl-6 py-2">
                                    <Heading variant="h4" className="text-slate-900">Süreç Danışmanlığı</Heading>
                                    <Text className="text-slate-600 text-sm">Servis organizasyonu kurma ve süreç optimizasyonu.</Text>
                                </div>
                                <div className="border-l-4 border-indigo-600 pl-6 py-2">
                                    <Heading variant="h4" className="text-slate-900">Teknoloji Danışmanlığı</Heading>
                                    <Text className="text-slate-600 text-sm">Otomasyon, merkezi yönetim (SCCM, MDM) ve güvenlik.</Text>
                                </div>
                                <div className="border-l-4 border-indigo-600 pl-6 py-2">
                                    <Heading variant="h4" className="text-slate-900">ITSM Araçları</Heading>
                                    <Text className="text-slate-600 text-sm">Xurrent, Service Tree, CMDB entegrasyonları.</Text>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-slate-50 p-10 rounded-3xl border border-slate-200">
                            <Heading variant="h3" className="text-slate-900 mb-6">Derin Uzmanlık</Heading>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-white rounded-xl shadow-sm">
                                    <ShieldCheck className="w-8 h-8 text-indigo-600 mb-3" />
                                    <div className="font-bold text-slate-800">Güvenlik & Compliance</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm">
                                    <LineChart className="w-8 h-8 text-indigo-600 mb-3" />
                                    <div className="font-bold text-slate-800">Analitik & Raporlama</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm">
                                    <Laptop className="w-8 h-8 text-indigo-600 mb-3" />
                                    <div className="font-bold text-slate-800">Zero-touch Deployment</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl shadow-sm">
                                    <HeartHandshake className="w-8 h-8 text-indigo-600 mb-3" />
                                    <div className="font-bold text-slate-800">Auto-Remediation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Uzmanlık Alanlarımız */}
            <Section className="py-20 bg-indigo-50">
                <Container>
                    <div className="text-center mb-16">
                        <Heading variant="h2" className="text-slate-900 mb-4">Uzmanlık Alanlarımız</Heading>
                        <Text variant="large" className="text-slate-600">Operasyonel mükemmellik için geliştirdiğimiz yetkinlikler.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Akıllı Operasyon Merkezi", desc: "Agentic AI, LLM entegrasyonları ve Omni-channel çağrı yönetimi.", icon: Monitor },
                            { title: "Güçlü CMDB & Envanter", desc: "Donanım/Yazılım envanteri, AI destekli keşif ve analitik raporlama.", icon: Database },
                            { title: "VIP Support Uzmanlığı", desc: "Özel iletişim eğitimi almış ekipler ve kişiye özel SLA tanımlamaları.", icon: Users },
                            { title: "Teknoloji Adaptasyonu", desc: "Windows 11 migration, versiyon yükseltmeleri ve uyumluluk analizleri.", icon: Laptop }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <item.icon className="w-10 h-10 text-indigo-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">{item.title}</Heading>
                                <Text className="text-slate-600 text-sm">{item.desc}</Text>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Sürekli İyileştirme Yol Haritası */}
            <Section className="py-20">
                <Container>
                    <Heading variant="h2" className="text-slate-900 mb-12 text-center">Sürekli Hizmet İyileştirme Yol Haritası</Heading>
                    <div className="space-y-12">
                        {[
                            {
                                lvl: "L1 / Başlangıç",
                                title: "Devralma & Tanışma",
                                items: ["Profil Analizleri", "Ekip Tanışması", "Teknik Oryantasyon", "Hedeflerin Verilmesi"]
                            },
                            {
                                lvl: "L2 / Gelişim",
                                title: "Süreç & Teknoloji Kurulumu",
                                items: ["Mevcut Süreç Analizi", "Envanter Süreci Devir", "Servis Katalog Güncelleme", "CMDB Optimizasyonu"]
                            },
                            {
                                lvl: "L3 / Uzmanlık",
                                title: "Otomasyon & Optimizasyon",
                                items: ["Zero Touch - Auto Pilot", "Auto-Remediation", "Kök Sebep İyileştirmeleri", "İleri Raporlama"]
                            }
                        ].map((phase, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 last:border-0 pb-12 last:pb-0">
                                <div className="w-full md:w-1/4 text-center md:text-left">
                                    <div className="text-indigo-600 font-bold mb-1">{phase.lvl}</div>
                                    <Heading variant="h3" className="text-slate-900">{phase.title}</Heading>
                                </div>
                                <div className="w-full md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {phase.items.map((item, j) => (
                                        <div key={j} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200">
                                            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                            <span className="text-slate-700 text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Customer Success Management */}
            <Section className="py-20 bg-slate-900 text-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Heading variant="h2" className="text-white mb-6">Customer Success Management</Heading>
                            <Text variant="large" className="text-slate-300 mb-8">
                                Sadece bir hizmet sağlayıcı değil, başarınızın ortağıyız. Faydanın sürekliliği için yanınızdayız.
                            </Text>
                            <ul className="space-y-6">
                                {[
                                    { title: "SLA Breach Detection", desc: "Olası ihlalleri önceden tespit ediyor ve önlüyoruz." },
                                    { title: "PowerBI Raporlama", desc: "Dinamik ve anlık performans takibi sunuyoruz." },
                                    { title: "360° Analiz", desc: "Kişi, lokasyon ve teknoloji bazlı detaylı raporlar." },
                                    { title: "Kontrat Yönetimi", desc: "Hedeflenen iş faydalarını sürekli takip ediyoruz." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <LineChart className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <Heading variant="h4" className="text-white mb-1">{item.title}</Heading>
                                            <Text className="text-slate-400 text-sm">{item.desc}</Text>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
                            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative">
                                <Heading variant="h3" className="text-white mb-6">Kullanıcı Deneyimini Dönüştürün</Heading>
                                <Text className="text-slate-300 mb-8">
                                    Mevcut durumunuzu analiz edelim ve size özel çözüm haritasını çıkaralım. Teknolojiyi değere dönüştürüyoruz.
                                </Text>
                                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                                    Hemen Başlayın <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
