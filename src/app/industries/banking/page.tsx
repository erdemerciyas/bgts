"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CaseStudyCard from "@/components/ui/CaseStudyCard"
import { Building2, ShieldCheck, TrendingUp, Users, Wallet, Lock, PieChart, Activity, Globe, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function BankingPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: Building2 },
                        { label: "Bankacılık & Finans", href: "/industries/banking", icon: Wallet }
                    ]}
                />

                <Hero
                    title="Finansın Geleceğini İnşa Ediyoruz"
                    subtitle="Güvenli, ölçeklenebilir ve yenilikçi fintech çözümleri ile dijital bankacılık dönüşümüne liderlik edin."
                    badge="Sektörel Çözümler"
                    className="bg-slate-900"
                    backgroundImage="https://images.unsplash.com/photo-1565514020179-0c2235efe9cd?auto=format&fit=crop&q=80"
                />

                {/* Key Metrics */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid md:grid-cols-4 gap-6 mb-24">
                            {[
                                { label: "İşlem Hacmi", value: "$50B+", icon: Activity, color: "text-blue-600" },
                                { label: "Aktif Kullanıcı", value: "10M+", icon: Users, color: "text-indigo-600" },
                                { label: "Uptime", value: "99.99%", icon: ShieldCheck, color: "text-green-600" },
                                { label: "Maliyet Tasarrufu", value: "%40", icon: TrendingUp, color: "text-orange-600" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
                                    <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-1`}>
                                        {stat.value}
                                    </div>
                                    <Text variant="small" className="text-slate-500 font-medium">{stat.label}</Text>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Strategic Partnership */}
                <ContentSection
                    title="Stratejik Teknoloji İş Ortağınız"
                    badge="Fintech"
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                Bankacılık ve finans sektöründe dijital dönüşüm bir seçenek değil, zorunluluktur. <strong className="text-blue-700">Açık Bankacılık (Open Banking)</strong>, <strong className="text-blue-700">Blockchain</strong> ve <strong className="text-blue-700">Yapay Zeka</strong> tabanlı çözümlerimizle kurumunuzu geleceğe taşıyoruz.
                            </Text>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                {[
                                    { icon: Lock, text: "PCI-DSS Uyumluluğu" },
                                    { icon: Globe, text: "Sınır Ötesi Ödemeler" },
                                    { icon: PieChart, text: "Yapay Zeka Destekli Analiz" },
                                    { icon: ShieldCheck, text: "Siber Güvenlik Odaklı" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <item.icon className="w-5 h-5 text-blue-600" />
                                        <Text variant="small" className="text-slate-700 font-medium">{item.text}</Text>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80"
                                alt="Banking Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur rounded-xl shadow-xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Wallet className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium">Günlük İşlem Kapasitesi</div>
                                        <div className="text-2xl font-bold text-slate-900">2.5 Milyon+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Case Studies */}
                <Section>
                    <Container>
                        <Heading variant="h2" className="text-center mb-12">Başarı Hikayeleri</Heading>
                        <div className="grid md:grid-cols-2 gap-8">
                            <CaseStudyCard
                                title="Yeni Nesil Mobil Bankacılık Deneyimi"
                                description="Türkiye'nin önde gelen özel bankalarından biri için geliştirdiğimiz native mobil uygulama ile müşteri etkileşimini %200 artırdık. Biyometrik doğrulama ve kişiselleştirilmiş finansal asistan özellikleri entegre edildi."
                                client="Tier-1 Banka"
                                image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                                href="/case-studies/mobile-banking"
                                color="blue"
                                metrics={[
                                    { label: "Kullanıcı Artışı", value: "%200", icon: Users },
                                    { label: "İşlem Hızı", value: "2x", icon: Activity },
                                    { label: "Store Puanı", value: "4.8", icon: ArrowRight }
                                ]}
                            />
                            <CaseStudyCard
                                title="Yapay Zeka Destekli Kredi Skorlama"
                                description="Geleneksel skorlama modellerine alternatif, makine öğrenmesi tabanlı risk analiz motoru. Kredi tahsis süreçlerini 3 günden 3 dakikaya indirdik ve batık kredi oranlarını %15 azalttık."
                                client="Fintech Girişimi"
                                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                                href="/case-studies/ai-credit-scoring"
                                color="indigo"
                                metrics={[
                                    { label: "Süreç Hızı", value: "-99%", icon: Activity },
                                    { label: "Risk Düşüşü", value: "%15", icon: ShieldCheck },
                                    { label: "Onay Oranı", value: "+%30", icon: TrendingUp }
                                ]}
                            />
                        </div>
                    </Container>
                </Section>

                {/* Specialized Domains */}
                <Section className="bg-slate-50 dark:bg-slate-900">
                    <Container>
                        <Heading variant="h2" className="text-center mb-12">Uzmanlık Alanları</Heading>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Core Banking",
                                    desc: "Modern, modüler ve API-first temel bankacılık sistemi modernizasyonu.",
                                    items: ["Hesap Yönetimi", "Muhasebe", "Kredi Kartları"]
                                },
                                {
                                    title: "Ödeme Sistemleri",
                                    desc: "Güvenli, hızlı ve global standartlarla uyumlu ödeme altyapıları.",
                                    items: ["Payment Gateway", "Mobil Cüzdan", "Sanal POS"]
                                },
                                {
                                    title: "Yatırım Teknolojileri",
                                    desc: "Algoritmik ticaret ve portföy yönetimi için yüksek performanslı platformlar.",
                                    items: ["Robo-Advisor", "Trading API", "Blockchain Varlıklar"]
                                }
                            ].map((domain, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                    <Heading variant="h3" className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{domain.title}</Heading>
                                    <Text className="text-slate-600 dark:text-slate-300 mb-6">{domain.desc}</Text>
                                    <ul className="space-y-3">
                                        {domain.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}
