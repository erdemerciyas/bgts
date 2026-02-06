"use client"

import Hero from "@/components/ui/Hero"
import { Activity, Layers, GitPullRequest, Settings, Database, Server, Smartphone, Monitor, ShieldCheck, Clock, FileText, Zap, BarChart3, Users, Network } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"

export default function PraxilaPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Hero
                    title="Praxila: Bütünleşik IT Hizmet & Operasyon Yönetimi"
                    subtitle="ITSM, PPM ve ITOM süreçlerinizi tek bir platformda birleştiren, yapay zeka destekli yeni nesil operasyon yönetim çözümü."
                    badge="Enterprise Service Management"
                    className="bg-indigo-900"
                    backgroundImage="/images/headers/bgts-teknoloji-urunleri.jpg"
                />

                {/* Foundation & Overview */}
                <Section className="pb-0 pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                            <div>
                                <Heading variant="h2" className="mb-6 text-slate-900">Güçlü Temel, Akıllı Operasyon</Heading>
                                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Praxila, <strong>Enterprise Service Management</strong> vizyonuyla tasarlanmış;
                                        esnek, ölçeklenebilir ve yapay zeka destekli güçlü bir "Foundation" üzerine inşa edilmiştir.
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 mt-8">
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3 border-b pb-2">Foundation Core</h4>
                                            <ul className="space-y-2">
                                                {[
                                                    "CMDB", "Service Catalog", "Service Portal",
                                                    "Knowledge", "SLM", "Notification",
                                                    "Multi Tenancy", "Resource Plan",
                                                    "TimeSheet", "Task Management", "Workflow"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3 border-b pb-2">Advanced Features</h4>
                                            <ul className="space-y-2">
                                                {[
                                                    "KanBan Board", "Business Intelligence",
                                                    "Chat Bot", "Remote Desktop",
                                                    "Employee Monitoring"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                        {item}
                                                    </li>
                                                ))}
                                                <li className="flex items-center gap-2 text-sm font-bold text-red-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                                                    Machine Learning
                                                </li>
                                                <li className="flex items-center gap-2 text-sm font-bold text-red-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                                                    Conversational AI
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                                    alt="Praxila Foundation Architecture"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* ITSM MODULE */}
                <DetailedServiceSection
                    title="ITSM"
                    description="Enterprise Service Management çatısı altında uçtan uca IT Hizmet Yönetimi."
                    icon={Activity}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Service Desk",
                            desc: "Tüm taleplerin tek noktadan karşılanması ve yönlendirilmesi."
                        },
                        {
                            title: "Incident",
                            desc: "Hizmet kesintilerinin hızlı çözümü ve yönetimi."
                        },
                        {
                            title: "Request Fulfillment",
                            desc: "Kullanıcı isteklerinin iş akışları ile karşılanması."
                        },
                        {
                            title: "Problem",
                            desc: "Kök neden analizi ile tekrarlayan sorunların engellenmesi."
                        },
                        {
                            title: "Change",
                            desc: "Değişikliklerin risk analizi ve onay süreçleri ile yönetimi."
                        },
                        {
                            title: "Release",
                            desc: "Sürüm ve yaygınlaştırma süreçlerinin planlanması."
                        },
                        {
                            title: "Asset & Capacity",
                            desc: "Varlık yönetimi ve kapasite planlama süreçleri."
                        }
                    ]}
                />

                {/* PPM MODULE */}
                <DetailedServiceSection
                    title="PPM"
                    description="Talep, proje ve portföy süreçlerinin bütünleşik yönetimi."
                    icon={Layers}
                    items={[
                        {
                            title: "Demand",
                            desc: "Taleplerin toplanması, değerlendirilmesi ve önceliklendirilmesi."
                        },
                        {
                            title: "Project",
                            desc: "Onaylanan taleplerin proje olarak planlanması ve yürütülmesi."
                        },
                        {
                            title: "Portfolio",
                            desc: "Projelerin stratejik hedeflere göre portföy bazında yönetimi."
                        },
                        {
                            title: "Finance & Budget",
                            desc: "Proje bütçelerinin ve finansal kaynakların takibi."
                        },
                        {
                            title: "SDLC (Scrum)",
                            desc: "Yazılım geliştirme yaşam döngüsü ve çevik proje yönetimi."
                        }
                    ]}
                />

                {/* ITOM MODULE */}
                <DetailedServiceSection
                    title="ITOM"
                    description="IT Operasyonlarının otomasyon ve keşif yetenekleri ile güçlendirilmesi."
                    icon={Server}
                    bg="bg-slate-50"
                    items={[
                        {
                            title: "Orchestration",
                            desc: "Operasyonel süreçlerin otomasyonu ve iş akışı yönetimi."
                        },
                        {
                            title: "Client Discovery",
                            desc: "Son kullanıcı cihazlarının ağ üzerinde keşfedilmesi."
                        },
                        {
                            title: "Infrastructure Discovery",
                            desc: "Sunucu ve ağ altyapısının otomatik keşfi."
                        },
                        {
                            title: "Service Mapping",
                            desc: "İş servisleri ve altyapı ilişkilerinin haritalanması."
                        },
                        {
                            title: "Event Management",
                            desc: "Olayların izlenmesi, korelasyonu ve yönetimi."
                        }
                    ]}
                />

            </div>
        </>
    )
}

function DetailedServiceSection({ title, description, icon: Icon, items, bg = "bg-white" }: { title: string, description: string, icon: any, items: { title: string, desc: string }[], bg?: string }) {
    return (
        <Section className={bg}>
            <Container>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-200">
                                <Icon className="w-8 h-8" />
                            </div>
                            <Heading variant="h2" className="text-2xl lg:text-3xl text-slate-900">{title}</Heading>
                        </div>
                        <Text className="text-slate-600 leading-relaxed text-lg">
                            {description}
                        </Text>
                        <div className="h-1 w-20 bg-indigo-600 rounded-full mt-6"></div>
                    </div>
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                        {items.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
