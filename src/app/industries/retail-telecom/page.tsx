"use strict";
"use client";

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CaseStudyCard from "@/components/ui/CaseStudyCard"
import Image from "next/image"
import { ShoppingCart, Smartphone, Tags, Truck, Wifi, BarChart3, Users, Zap, Globe, ArrowRight, CheckCircle2, Wallet, Layers, ShieldCheck } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"

export default function RetailTelecomPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: ShoppingCart },
                        { label: "Perakende & Telekom", href: "/industries/retail-telecom", icon: Smartphone }
                    ]}
                />

                <Hero
                    title="Müşteri Deneyimini Yeniden Tanımlayın"
                    subtitle="Omnichannel perakende ve yüksek hızlı telekom çözümleri ile milyonlarca müşteriye kusursuz, kesintisiz ve kişiselleştirilmiş hizmet sunun."
                    badge="Tüketici Odaklı Teknoloji"
                    className="bg-slate-900"
                    backgroundImage="/images/headers/perakende-ve-telekom-cozumleri.jpg"
                />

                {/* Retail Transformation */}
                <ContentSection
                    title="Akıllı Perakende Dönüşümü"
                    badge="Retail 4.0"
                    content={
                        <div className="space-y-8">
                            <Text variant="large" className="text-slate-600">
                                Fiziksel ve dijital mağazacılık arasındaki sınırları kaldırıyoruz. <strong className="text-action-blue">E-ticaret platformları</strong>, <strong className="text-action-blue">stok optimizasyonu</strong> ve <strong className="text-action-blue">kişiselleştirilmiş müşteri deneyimi</strong> çözümleri ile satışlarınızı artırıyoruz.
                            </Text>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        <Tags className="w-6 h-6 text-action-blue" />
                                    </div>
                                    <Heading variant="h5" className="font-bold text-slate-800 mb-2">Dinamik Fiyatlama</Heading>
                                    <Text variant="small" className="text-slate-500">Yapay zeka ile rakip analizi ve anlık fiyat optimizasyonu.</Text>
                                </div>
                                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        <Truck className="w-6 h-6 text-action-blue" />
                                    </div>
                                    <Heading variant="h5" className="font-bold text-slate-800 mb-2">Akıllı Tedarik Zinciri</Heading>
                                    <Text variant="small" className="text-slate-500">Talep tahmini ve otomatik stok yenileme sistemleri.</Text>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <Users className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <Users className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <Users className="w-5 h-5 text-slate-400" />
                                    </div>
                                </div>
                                <Text variant="small" className="font-medium text-slate-600">
                                    <span className="text-action-blue font-bold">+500K</span> Memnun Müşteri Etkileşimi
                                </Text>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/industries/retail-telecom/retail-transformation.png"
                                alt="Retail Store"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-12 left-12 md:bottom-20 md:left-20 text-white max-w-sm z-20">
                                <div className="flex items-center gap-2 mb-3 bg-action-blue/90 backdrop-blur-md px-4 py-1.5 rounded-full w-fit shadow-lg">
                                    <BarChart3 className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Başarı Metriği</span>
                                </div>
                                <Text className="text-5xl font-bold font-heading mb-2 text-white drop-shadow-md">+%45</Text>
                                <Text variant="small" className="opacity-95 text-slate-100 font-medium drop-shadow-sm leading-relaxed">
                                    Omnichannel entegrasyonu sonrası online satış artışı ve müşteri bağlılığı.
                                </Text>
                            </div>
                        </div>
                    }
                />

                {/* Telecom Solutions */}
                <ContentSection
                    reverse
                    title="Geleceğin Telekom Altyapısı"
                    badge="5G & IoT Ready"
                    content={
                        <div className="space-y-8">
                            <Text variant="large" className="text-slate-600">
                                Yüksek trafikli ağları yönetmek ve yeni nesil servisleri hayata geçirmek için <strong className="text-indigo-600">ölçeklenebilir bulut tabanlı altyapılar</strong> kuruyoruz. OSS/BSS dönüşümü ve 5G entegrasyonu konularında uçtan uca uzmanlık sunuyoruz.
                            </Text>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                        <Wifi className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h6" className="text-slate-900 mb-1">Network Function Virtualization (NFV)</Heading>
                                        <Text variant="small" className="text-slate-500">Donanım bağımlılığını azaltan sanallaştırılmış ağ fonksiyonları.</Text>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h6" className="text-slate-900 mb-1">Dijital Müşteri Deneyimi</Heading>
                                        <Text variant="small" className="text-slate-500">Yapay zeka destekli müşteri hizmetleri ve self-servis kanallar.</Text>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <Heading variant="h6" className="text-slate-900 mb-1">IoT ve Akıllı Şehirler</Heading>
                                        <Text variant="small" className="text-slate-500">Milyonlarca cihazı birbirine bağlayan güvenli iletişim protokolleri.</Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/industries/retail-telecom/telecom-infrastructure.png"
                                alt="Telecom Tower"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply"></div>
                            <div className="absolute top-12 right-12 md:top-20 md:right-20 z-20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
                                    <Globe className="w-8 h-8 text-white mb-2" />
                                    <Text className="text-white font-bold text-lg drop-shadow-md">Global Bağlantı</Text>
                                    <Text className="text-indigo-100 text-sm font-medium">7/24 Kesintisiz</Text>
                                </div>
                            </div>
                        </div>
                    }
                />

                {/* Tech Stack / Features Stripe */}
                <Section className="bg-slate-900 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <Container className="relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Heading variant="h2" className="text-white mb-4">Teknoloji Yığınımız</Heading>
                            <Text className="text-slate-400">
                                Perakende ve Telekom projelerinde kullandığımız modern teknolojiler ve standartlar.
                            </Text>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { title: "Mikroservisler", icon: Layers, desc: "Ölçeklenebilir mimari" },
                                { title: "Cloud Native", icon: Globe, desc: "AWS, Azure, Google Cloud" },
                                { title: "Siber Güvenlik", icon: ShieldCheck, desc: "ISO 27001, GDPR Uyumlu" },
                                { title: "Big Data", icon: BarChart3, desc: "Gerçek zamanlı analitik" }
                            ].map((tech, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors group">
                                    <tech.icon className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-white font-bold text-lg mb-2">{tech.title}</h3>
                                    <p className="text-slate-400 text-sm">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Case Studies */}
                <Section className="bg-slate-50">
                    <Container>
                        <Heading variant="h2" className="text-center mb-4 text-slate-900">Sektörel Başarı Hikayeleri</Heading>
                        <Text className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
                            Lider markaların dijital dönüşüm yolculuklarında elde ettiğimiz somut sonuçlar.
                        </Text>
                        <div className="grid md:grid-cols-2 gap-8">
                            <CaseStudyCard
                                title="Omnichannel E-Ticaret Dönüşümü"
                                description="Türkiye'nin önde gelen moda perakendecisi için mağaza ve online kanalları tek platformda birleştirdik. Stok yönetimi ve sipariş karşılama süreçleri %60 hızlandı."
                                client="Moda Perakendecisi"
                                image="/images/industries/retail-telecom/retail-case-study.png"
                                href="/case-studies/retail-omnichannel"
                                color="blue"
                                metrics={[
                                    { label: "Ciro Artışı", value: "%60", icon: BarChart3 },
                                    { label: "Stok Doğruluğu", value: "%99", icon: CheckCircle2 },
                                    { label: "Müşteri Sadakati", value: "+%25", icon: Users }
                                ]}
                            />
                            <CaseStudyCard
                                title="5G Ağı İzleme Platformu"
                                description="Global bir telekom operatörü için geliştirdiğimiz gerçek zamanlı ağ izleme aracı ile arıza tespit sürelerini dakikalardan saniyelere indirdik."
                                client="Global Telekom"
                                image="/images/industries/retail-telecom/telecom-case-study.png"
                                href="/case-studies/telecom-monitoring"
                                color="blue"
                                metrics={[
                                    { label: "Tespit Süresi", value: "-95%", icon: Zap },
                                    { label: "Veri İşleme", value: "10TB/gün", icon: BarChart3 },
                                    { label: "Maliyet", value: "-%30", icon: Wallet }
                                ]}
                            />
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}
