"use client"

import Hero from "@/components/ui/Hero"
import { Smartphone, Wifi, Server, Radio, Database, Globe, Layers, Activity, Lock, Cpu, Cloud, Zap, ArrowRight, CheckCircle2, Code, Settings, Eye, FileText, Users, Network, Shield, BarChart3, HardDrive, Wrench, MonitorSmartphone } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}


const serviceSections = [
    {
        id: "dijital-platform",
        title: "Dijital Platform ve Yazılım Geliştirme",
        description: "Merkez, bayi ve saha ekipleri arasındaki iletişimi güçlendiren ölçeklenebilir, modern yazılım platformları.",
        icon: Layers,
        color: "from-indigo-600 to-indigo-800",
        items: [
            { title: "Kurumsal Uygulamalar", desc: "Merkez ve saha iletişimi, çağrı merkezi ve portal çözümleri için özel geliştirilmiş uygulamalar.", icon: MonitorSmartphone },
            { title: "Modern Teknolojiler", desc: "SharePoint, .NET, React ve SQL tabanlı, yüksek hacimli veri akışlarını yönetebilen ölçeklenebilir mimariler.", icon: Code },
            { title: "Karmaşık Entegrasyonlar", desc: "Farklı sistemlerin birbiriyle konuştuğu, özel iş ihtiyaçlarına yönelik entegrasyon yapıları.", icon: Network },
            { title: "Kesintisiz İşletim", desc: "Geliştirilen platformların bakım, güncelleme ve kesintisiz çalışma garantisi.", icon: Zap },
        ]
    },
    {
        id: "icerik-portal",
        title: "İçerik ve Portal Yönetimi",
        description: "Yüzlerce içeriğin ve dokümanın hızlı, güvenli ve organize bir şekilde yönetilmesini sağlayan altyapılar.",
        icon: Database,
        color: "from-violet-600 to-violet-800",
        items: [
            { title: "Hızlı İçerik Yönetimi", desc: "Editör ekipleri için özel bileşenler ve servis tabanlı içerik akışları.", icon: FileText },
            { title: "Custom Workflow Yapıları", desc: "Onay ve yayın süreçlerini otomatize eden özelleştirilmiş iş akışları.", icon: Settings },
            { title: "SharePoint Altyapı Yönetimi", desc: "Dev, Test, Stg, Prod ortamlarında komple kurulum, farm yönetimi ve güncellemeler.", icon: Server },
            { title: "Operasyonel Bakım", desc: "Portal altyapılarının düzenli bakımı ve performans optimizasyonu.", icon: Wrench },
        ]
    },
    {
        id: "operasyon",
        title: "Operasyon Yönetimi ve Entegrasyon",
        description: "Telekom ekosistemindeki tüm paydaşları bir araya getiren güvenli bilgi akışı servisleri.",
        icon: Activity,
        color: "from-cyan-600 to-teal-800",
        items: [
            { title: "Ekosistem Entegrasyonu", desc: "Merkez, saha ve bayi ağının ortak platform üzerinden doküman ve duyurulara erişimi.", icon: Globe },
            { title: "Bilgi Akışı Güvenliği", desc: "Paydaşlar arasındaki veri trafiğinin güvenli ve kesintisiz sağlanması.", icon: Shield },
            { title: "Merkezi Servis Yapıları", desc: "Arka planda çalışan servisler ile farklı uygulamaların tek çatı altında uyumu.", icon: Cloud },
            { title: "İş Süreçleri Yönetimi", desc: "Operasyonel iş süreçlerinin dijital ortamda takibi ve yönetimi.", icon: BarChart3 },
        ]
    },
    {
        id: "msp",
        title: "MSP, Sunucu Yönetimi ve 7/24 Operasyon",
        description: "Kritik veri merkezi altyapılarınız için uzman ekiplerle kesintisiz yönetim ve destek hizmetleri.",
        icon: Server,
        color: "from-blue-700 to-indigo-900",
        items: [
            { title: "Veri Merkezi Danışmanlığı", desc: "Operatör veri merkezlerinde görev yapan uzman danışman ekipler.", icon: Users },
            { title: "Sistem Yönetimi", desc: "Linux, Windows, sanallaştırma, veritabanı ve yedekleme alanlarında L1-L2 seviyesinde yönetim.", icon: HardDrive },
            { title: "7/24 Operasyonel Destek", desc: "Kritik sistemlerin performans, güvenlik ve kapasite takiplerinin 7/24 yapılması.", icon: Eye },
            { title: "Süreklilik Garantisi", desc: "Servis kesintilerini minimize eden proaktif izleme ve müdahale süreçleri.", icon: Activity },
        ]
    },
]

export default function TelecomPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Hero
                    title="Telekomünikasyon & Dijital Platform Hizmetleri"
                    subtitle="Yüksek trafikli ağlar ve kritik servisler için uçtan uca dijital platform yönetimi, güçlü entegrasyonlar ve 7/24 operasyonel mükemmeliyet."
                    className="bg-slate-900"
                    backgroundImage="/images/headers/I53A6349.jpg"
                />



                {/* Genel Bakış - Premium Split */}
                <Section className="pt-20">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div {...fadeUp}>
                                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                                    <Radio className="w-4 h-4" /> Genel Bakış
                                </div>
                                <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                    Telekom Sektörüne Özel Dijital Platform ve MSP Hizmetleri
                                </Heading>
                                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                    <p>
                                        Telekom sektörünün yüksek trafik, çoklu kanal yönetimi ve kesintisiz hizmet beklentileri;
                                        güçlü entegrasyonlar, stabil altyapı ve 7/24 operasyonel mükemmeliyet gerektirir.
                                    </p>
                                    <p>
                                        Bu alanda uzun yıllara dayanan deneyimimizle, Türkiye'nin lider operatörlerinin merkezi sistemleri,
                                        içerik platformları ve saha iletişim uygulamaları için uçtan uca teknoloji hizmetleri sunuyoruz.
                                    </p>
                                    <p className="font-semibold text-indigo-700 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                        Operatörlerin dijital platformlarını daha güvenli, hızlı, ölçeklenebilir ve operasyonel olarak sürdürülebilir hale getiriyoruz.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl -z-10 opacity-60" />
                                    <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src="/images/industries/retail-telecom/telecom-infrastructure.png"
                                            alt="Telecom Infrastructure"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Service Sections */}
                {serviceSections.map((section, sectionIdx) => {
                    const isAlt = sectionIdx % 2 !== 0
                    return (
                        <Section key={section.id} className={`relative overflow-hidden ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${section.color}`} />
                            <Container>
                                <div className="grid lg:grid-cols-12 gap-12">
                                    {/* Left: Sticky Header Card */}
                                    <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                        <div className={`bg-gradient-to-br ${section.color} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                            <div className="relative z-10">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                                    <section.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                                <p className="text-white/80 leading-relaxed text-sm">{section.description}</p>

                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right: Cards Grid */}
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {section.items.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 bg-indigo-50 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                                            <item.icon className="w-5 h-5 text-indigo-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mb-1">{item.title}</h4>
                                                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Section>
                    )
                })}



            </div>
        </>
    )
}
