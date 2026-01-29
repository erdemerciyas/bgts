"use client"

import Hero from "@/components/ui/Hero"
import ServiceCard from "@/components/ui/ServiceCard"
import { Server, Monitor, Database, Activity, Code2, Cpu, Zap, Shield } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"

export default function ServicesPage() {
    return (
        <>
            <div className="bg-white min-h-screen">

                <Hero
                    title="Technology Services"
                    subtitle="End-to-end management of critical systems for operational excellence."
                    badge="Services"
                    className="bg-blue-900"
                    backgroundImage="/images/headers/teknoloji-servisleri-genel.jpg"
                />

                {/* Services Grid */}
                <Section className="py-20">
                    <Container>
                        <div className="text-center mb-16">
                            <Heading variant="h2" className="text-slate-900 mb-4">
                                Teknoloji Hizmetlerimiz
                            </Heading>
                            <Text variant="large" className="text-slate-600 max-w-2xl mx-auto">
                                Kurumlarınızın dijital dönüşüm yolculuğunda uçtan uca stratejik ortağınız
                            </Text>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                            <ServiceCard
                                title="Yönetilen Hizmetler"
                                description="Kritik altyapı ve uygulama yönetimi için 7/24 uzman destek ve AIOps otomasyonu."
                                icon={Activity}
                                href="/services/managed-services"
                                features={[
                                    "7/24 İzleme & Destek",
                                    "AIOps & Otomasyon",
                                    "SRE Disiplini"
                                ]}
                                color="blue"
                                delay={0}
                            />
                            <ServiceCard
                                title="Yazılım Geliştirme"
                                description="Mikroservis mimarileri ve modern teknolojilerle ölçeklenebilir, güvenli çözümler."
                                icon={Code2}
                                href="/services/software-development"
                                features={[
                                    "Mikroservis Mimarisi",
                                    "API-First Yaklaşım",
                                    "Cloud-Native Dönüşüm"
                                ]}
                                color="indigo"
                                delay={0.1}
                            />
                            <ServiceCard
                                title="DevOps & SRE"
                                description="CI/CD pipeline'ları ve Kubernetes orkestrasyonu ile hızlı ve güvenilir teslimat."
                                icon={Zap}
                                href="/services/devops"
                                features={[
                                    "Otomatik Dağıtım",
                                    "Kubernetes & Konteyner",
                                    "Site Reliability"
                                ]}
                                color="slate"
                                delay={0.2}
                            />
                            <ServiceCard
                                title="Veri Hizmetleri"
                                description="Büyük veri ve analitik altyapıları ile veriye dayalı kararlar alın."
                                icon={Database}
                                href="/services"
                                features={[
                                    "Veri Ambarı",
                                    "Analitik & Raporlama",
                                    "Gerçek Zamanlı İçgörü"
                                ]}
                                color="blue"
                                delay={0.3}
                            />
                            <ServiceCard
                                title="Masaüstü Yönetimi"
                                description="AI destekli masaüstü ve mobil cihaz yönetimi ile kesintisiz çalışan deneyimi."
                                icon={Monitor}
                                href="/services/managed-services"
                                features={[
                                    "Self-Healing",
                                    "Omni-Channel Destek",
                                    "AIOps Bilet Yönetimi"
                                ]}
                                color="indigo"
                                delay={0.4}
                            />
                            <ServiceCard
                                title="Güvenlik & Uyumluluk"
                                description="Cyber güvenlik, regülasyon uyumu ve risk yönetimi çözümleri."
                                icon={Shield}
                                href="/services"
                                features={[
                                    "Penetration Testing",
                                    "ISO 27001 Uyumluluk",
                                    "Risk Yönetimi"
                                ]}
                                color="slate"
                                delay={0.5}
                            />
                        </div>

                        {/* Why Choose Us Section */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-16 mb-24">
                            <div className="text-center mb-12">
                                <Heading variant="h2" className="text-slate-900 mb-4">
                                    Neden BGTS?
                                </Heading>
                                <Text variant="large" className="text-slate-600 max-w-2xl mx-auto">
                                    25 yılı aşkın deneyimimizle, işletmelerin sürdürülebilir büyüme elde etmelerini sağlıyoruz
                                </Text>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
                                        <Cpu className="w-8 h-8 text-white" />
                                    </div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">1,400+ Mühendis</Heading>
                                    <Text className="text-slate-600">Global yetenek havuzu</Text>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-600/30">
                                        <Server className="w-8 h-8 text-white" />
                                    </div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">25+ Yıl</Heading>
                                    <Text className="text-slate-600">Deneyim ve uzmanlık</Text>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-600/30">
                                        <Shield className="w-8 h-8 text-white" />
                                    </div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">%99.9 Uptime</Heading>
                                    <Text className="text-slate-600">Kesintisiz operasyon</Text>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <Heading variant="h4" className="text-slate-900 mb-2">7/24 Destek</Heading>
                                    <Text className="text-slate-600">Her zaman yanınızdayız</Text>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Models */}
                        <div>
                            <div className="text-center mb-12">
                                <Heading variant="h2" className="text-slate-900 mb-4">
                                    Proje Teslim Modellerimiz
                                </Heading>
                                <Text variant="large" className="text-slate-600 max-w-2xl mx-auto">
                                    İhtiyaçlarınıza özel esnek çalışma modelleri
                                </Text>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Server className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <Heading variant="h3" className="text-slate-900">Anahtar Teslim</Heading>
                                            <Text className="text-blue-600 font-semibold">TurnKey</Text>
                                        </div>
                                    </div>
                                    <Text variant="large" className="text-slate-700 mb-6">
                                        Projenizi A&apos;dan Z&apos;ye biz yönetelim. Sabit kapsamlı projeleriniz için analiz, tasarım, geliştirme ve test süreçlerini üstleniyoruz.
                                    </Text>
                                    <ul className="space-y-3">
                                        {["Sabit Bütçe & Zaman", "Tek Sorumluluk Noktası", "Uçtan Uca Teslimat", "Minimum Müşteri Eforu"].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl border-2 border-slate-700 hover:shadow-2xl transition-all duration-300 text-white">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                                            <Activity className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <Heading variant="h3" className="text-white">Efor Bazlı</Heading>
                                            <Text className="text-blue-400 font-semibold">Time & Material</Text>
                                        </div>
                                    </div>
                                    <Text variant="large" className="text-slate-300 mb-6">
                                        Kendi ekibinizi bizim uzmanlarımızla güçlendirin. Çevik süreçlerinize anında uyum sağlayan elit mühendisler.
                                    </Text>
                                    <ul className="space-y-3">
                                        {["Esnek Ölçeklendirme", "Tam Kontrol & Şeffaflık", "Hızlı Adaptasyon", "Maksimum Esneklik"].map(item => (
                                            <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                                                <div className="w-2 h-2 rounded-full bg-blue-400"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}
