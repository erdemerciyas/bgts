"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import TechStackGrid from "@/components/ui/TechStackGrid"
import MetricCard from "@/components/ui/MetricCard" // Added import for MetricCard
import { Code2, Database, Layout, Smartphone, Zap, Cpu, ShieldCheck, GitBranch, PlayCircle, Server, Rocket, Heart, Timer, Award, Globe, Coffee, Terminal } from "lucide-react" // Added new icons
import Image from "next/image"

export default function SoftwareDevPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Hizmetler", href: "/services", icon: Server },
                        { label: "Yazılım Geliştirme", href: "/services/software-development", icon: Code2 }
                    ]}
                />

                <Hero
                    title="Özel Yazılım Geliştirme"
                    subtitle="İş hedeflerinize özel, modern ve ölçeklenebilir yazılım çözümleri."
                    badge="Teknoloji Servisleri"
                    className="bg-blue-900"
                    backgroundImage="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80"
                />

                <div className="container mx-auto px-6 py-20">
                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        <MetricCard
                            title="Proje Başarısı"
                            value="100+"
                            unit="proje"
                            icon={Rocket}
                            trend="up"
                            trendValue="+15%"
                            description="Tamamlanan başarılı proje"
                            color="blue"
                            delay={0}
                        />
                        <MetricCard
                            title="Müşteri Memnuniyeti"
                            value="98"
                            unit="%"
                            icon={Heart}
                            trend="up"
                            trendValue="+5%"
                            description="Net Promoter Score"
                            color="indigo"
                            delay={0.1}
                        />
                        <MetricCard
                            title="Agile Delivery"
                            value="2"
                            unit="hafta"
                            icon={Timer}
                            trend="down"
                            trendValue="-20%"
                            description="Ortalama sprint süresi"
                            color="slate"
                            delay={0.2}
                        />
                        <MetricCard
                            title="Code Quality"
                            value="95"
                            unit="%"
                            icon={Award}
                            trend="up"
                            trendValue="A+"
                            description="SonarQube skoru"
                            color="blue"
                            delay={0.3}
                        />
                    </div>

                    {/* Backend & Frontend Development */}
                    <ContentSection
                        title="Backend & Frontend Geliştirme"
                        badge="Full Stack"
                        content={
                            <div className="space-y-6">
                                <p className="text-lg">
                                    Modern mimarilerde, yüksek performanslı ve güvenli uygulamalar geliştiriyoruz. <strong className="text-blue-700">Microservices, Event-Driven Architecture</strong> ve <strong className="text-blue-700">Serverless</strong> yaklaşımlarıyla geleceğe hazır çözümler sunuyoruz.
                                </p>
                                <p className="text-lg">
                                    Kullanıcı deneyimini merkeze alan, hızlı ve etkileşimli arayüzler tasarlıyoruz.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <Database className="w-5 h-5 text-blue-600" /> Backend
                                        </h4>
                                        <p className="text-slate-600">Java, .NET Core, Go, ve Node.js ile güçlü altyapılar.</p>
                                    </div>
                                    <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-indigo-600" /> Frontend
                                        </h4>
                                        <p className="text-slate-600">React, Vue, Angular ve Next.js ile modern arayüzler.</p>
                                    </div>
                                </div>
                            </div>
                        }
                        image={
                            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                                    alt="Coding"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/80 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <Code2 className="w-24 h-24 mx-auto mb-6" />
                                        <h4 className="text-4xl font-bold mb-2">Modern Stack</h4>
                                        <p className="text-blue-100 text-xl">En güncel teknolojiler</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Mobile & Cloud Section */}
                    <ContentSection
                        reverse
                        title="Mobil & Bulut Çözümleri"
                        badge="Mobilite"
                        content={
                            <div className="space-y-6">
                                <p className="text-lg">
                                    iOS ve Android için native veya cross-platform (Flutter, React Native) mobil uygulamalar. İş süreçlerinizi mobile taşıyın ve her yerden erişilebilir olun.
                                </p>
                                <p className="text-lg">
                                    Bulut tabanlı (Cloud-Native) uygulama geliştirme ile esnek, ölçeklenebilir ve maliyet etkin çözümler.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 mt-4 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Smartphone className="w-5 h-5 text-slate-600" /> Mobil Yetkinlikler
                                    </h4>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> iOS (Swift)</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Android (Kotlin)</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Flutter</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> React Native</li>
                                    </ul>
                                </div>
                            </div>
                        }
                        image={
                            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                                    alt="Mobile Development"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <Smartphone className="w-24 h-24 mx-auto mb-6" />
                                        <h4 className="text-4xl font-bold mb-2">Mobil Öncelikli</h4>
                                        <p className="text-blue-100 text-xl">Her platformda kusursuz deneyim</p>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                    {/* Technology Stack Grid */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold mb-12 text-center font-heading text-slate-900">Teknoloji Yığınımız</h2>
                        <TechStackGrid
                            items={[
                                // Frontend
                                { name: "React", category: "Frontend", icon: Globe },
                                { name: "Next.js", category: "Frontend", icon: Globe },
                                { name: "Vue.js", category: "Frontend", icon: Globe },
                                { name: "Angular", category: "Frontend", icon: Globe },
                                // Backend
                                { name: "Java", category: "Backend", icon: Coffee },
                                { name: ".NET Core", category: "Backend", icon: Code2 },
                                { name: "Node.js", category: "Backend", icon: Server },
                                { name: "Go", category: "Backend", icon: Terminal },
                                // Mobile
                                { name: "Flutter", category: "Mobil", icon: Smartphone },
                                { name: "React Native", category: "Mobil", icon: Smartphone },
                                { name: "Swift", category: "Mobil", icon: Smartphone },
                                // Database
                                { name: "PostgreSQL", category: "Veritabanı", icon: Database },
                                { name: "MongoDB", category: "Veritabanı", icon: Database },
                                { name: "Redis", category: "Veritabanı", icon: Database },
                            ]}
                            color="blue"
                            delay={0}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
