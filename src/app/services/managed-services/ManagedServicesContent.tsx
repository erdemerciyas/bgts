"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import MetricCard from "@/components/ui/MetricCard"
import { Server, Activity, ShieldCheck, Clock, Zap, Users, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

export default function ManagedServicesContent() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Hizmetler", href: "/services", icon: Server },
                        { label: "Yönetilen Hizmetler", href: "/services/managed-services", icon: Activity }
                    ]}
                />

                <Hero
                    title="Yönetilen Hizmetler"
                    subtitle="Operasyonel mükemmellik ve SRE güvenilirliği ile kritik altyapı yönetimi."
                    badge="Teknoloji Servisleri"
                    className="bg-blue-900"
                    backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                />

                <Section className="py-20">
                    <Container>
                        {/* Key Metrics */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            <MetricCard
                                title="Uptime"
                                value="99.9"
                                unit="%"
                                icon={ShieldCheck}
                                trend="up"
                                trendValue="+0.5%"
                                description="Kesintisiz operasyon"
                                color="blue"
                                delay={0}
                            />
                            <MetricCard
                                title="FCR Oranı"
                                value="92"
                                unit="%"
                                icon={CheckCircle2}
                                trend="up"
                                trendValue="+8%"
                                description="İlk Çağrıda Çözüm"
                                color="indigo"
                                delay={0.1}
                            />
                            <MetricCard
                                title="Response Time"
                                value="5"
                                unit="dakika"
                                icon={Clock}
                                trend="down"
                                trendValue="-30%"
                                description="Ortalama yanıt süresi"
                                color="slate"
                                delay={0.2}
                            />
                            <MetricCard
                                title="7/24 Destek"
                                value="24/7"
                                icon={Users}
                                description="Kesintisiz erişim"
                                color="blue"
                                delay={0.3}
                            />
                        </div>

                        {/* Service Categories */}
                        <div className="grid md:grid-cols-3 gap-8 mb-24">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                                <Server className="w-14 h-14 text-blue-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">Platform Yönetimi</Heading>
                                <Text className="text-slate-600 mb-6">
                                    Veri Merkezi Platformları, Veritabanı sistemleri ve Ara Katman (Middleware) uygulamalarının tam yönetimi.
                                </Text>
                                <ul className="space-y-3">
                                    {["OS & Virtualization", "Database Platforms", "Middleware", "Container Orchestration"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border-2 border-indigo-200 hover:shadow-2xl transition-all duration-300">
                                <Activity className="w-14 h-14 text-indigo-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">AIOps İzleme</Heading>
                                <Text className="text-slate-600 mb-6">
                                    Gelişmiş gözlemlenebilirlik araçları kullanılarak akıllı gürültü azaltma ve otomatik olay çözümü.
                                </Text>
                                <ul className="space-y-3">
                                    {["AI-Powered Monitoring", "Automated Incident Resolution", "Predictive Analytics", "Noise Reduction"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border-2 border-slate-200 hover:shadow-2xl transition-all duration-300">
                                <ShieldCheck className="w-14 h-14 text-slate-600 mb-6" />
                                <Heading variant="h4" className="text-slate-900 mb-3">SRE Disiplini</Heading>
                                <Text className="text-slate-600 mb-6">
                                    Hizmet Seviyesi Hedeflerine (SLO) ve hata bütçesi yönetimine odaklanan güvenilirlik mühendisliği.
                                </Text>
                                <ul className="space-y-3">
                                    {["SLO Monitoring", "Error Budget Management", "SLA Compliance", "Proactive Incident Response"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Operational Excellence */}
                        <ContentSection
                            title="Operasyonel Mükemmellik"
                            badge="Kanıtlanmış Başarı"
                            content={
                                <div className="space-y-6">
                                    <Text variant="large">
                                        Operasyonlarımız <strong className="text-blue-700">%100 ITIL uyumlu</strong> ve şeffaftır. İlk Çağrıda Çözüm (FCR) odaklı <strong className="text-blue-700">7/24</strong> ekiplerimiz, olayların büyük çoğunluğunu ilk seviyede çözer.
                                    </Text>
                                    <Text variant="large">
                                        Karmaşık, çok sağlayıcılı ortamların bile sorunsuz çalışmasını sağlamak için ITSM süreç otomasyonunu derin hizmet analizi ile birleştiriyoruz.
                                    </Text>
                                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                            <Heading variant="h4" className="text-slate-900 mb-3 flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5 text-blue-600" /> Yüksek FCR Oranları
                                            </Heading>
                                            <Text className="text-slate-600">İlk seviyede çözüm oranı %92</Text>
                                        </div>
                                        <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                            <Heading variant="h4" className="text-slate-900 mb-3 flex items-center gap-2">
                                                <Clock className="w-5 h-5 text-indigo-600" /> 7/24 Erişilebilirlik
                                            </Heading>
                                            <Text className="text-slate-600">Kesintisiz destek ve izleme</Text>
                                        </div>
                                    </div>
                                </div>
                            }
                            image={
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-12 rounded-2xl h-full flex flex-col justify-center items-center text-center">
                                    <Clock className="w-32 h-32 text-white mb-6" />
                                    <h4 className="text-5xl font-bold">7 / 24</h4>
                                    <p className="text-blue-100 text-xl">Kesintisiz Operasyon Kapsamı</p>
                                </div>
                            }
                        />

                        {/* Managed Desktop Services */}
                        <ContentSection
                            reverse
                            title="Yönetilen Masaüstü (MDS)"
                            badge="İş Yeri Teknolojileri"
                            content={
                                <div className="space-y-6">
                                    Masaüstü, laptop ve mobil cihazlardan oluşan son kullanıcı ortamınızı <strong className="text-blue-700">AIOps ve Otomasyon</strong> ile güçlendiriyoruz. Sorunları kullanıcılar fark etmeden çözen &quot;Self-Healing&quot; yeteneklerimizle, kesintisiz bir çalışan deneyimi sunuyoruz.
                                    <div className="bg-white p-6 border-2 border-blue-200 rounded-xl shadow-sm mt-4">
                                        <Heading variant="h4" className="text-slate-900 mb-3 flex items-center gap-2">
                                            <Activity className="w-5 h-5 text-blue-600" /> Proaktif & Akıllı Destek
                                        </Heading>
                                        <ul className="space-y-3 text-sm text-slate-600">
                                            <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>AIOps Bilet Yönetimi:</strong> Yapay zeka destekli otomatik sınıflandırma ve yönlendirme.</li>
                                            <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Self-Healing:</strong> Disk alanı, servis hataları gibi sorunların otomatik tespiti ve onarımı.</li>
                                            <li className="flex gap-2"><span className="text-blue-500 font-bold">•</span> <strong>Uçtan Uca Destek:</strong> Windows, MacOS ve Mobil cihazlar için uzaktan veya yerinde destek.</li>
                                        </ul>
                                    </div>
                                </div>
                            }
                            image={
                                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                                        alt="Managed Desktop"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/90 to-blue-600/90 flex items-center justify-center">
                                        <div className="text-center text-white p-8">
                                            <Zap className="w-24 h-24 mx-auto mb-6" />
                                            <h4 className="text-4xl font-bold mb-2">AIOps</h4>
                                            <p className="text-xl text-blue-100">Akıllı Masaüstü Yönetimi</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </Container>
                </Section>
            </div>
        </>
    )
}
