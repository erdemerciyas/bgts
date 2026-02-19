"use client"

import React from "react"
import Link from "next/link"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    Activity, Layers, Server, Database, Smartphone,
    Monitor, ShieldCheck, Clock, FileText, Zap, BarChart3,
    Users, Network, GitPullRequest, Settings, ArrowRight,
    CheckCircle2, Cpu, Globe, Workflow, Search, AlertTriangle,
    Package, Kanban, Bot, BrainCircuit, MessageSquare,
    FolderKanban, Target, Wallet, Code, CalendarClock
} from "lucide-react"

/* ── Animations ─────────────────────────────────────── */
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

/* ── Foundation Data ────────────────────────────────── */
const foundationCore = [
    { name: "CMDB", icon: Database, desc: "Konfigürasyon ve varlık ilişkilerinin merkezi yönetimi." },
    { name: "Service Catalog", icon: FolderKanban, desc: "Hizmet kataloğu ve self-servis talep portalı." },
    { name: "Service Portal", icon: Globe, desc: "Kullanıcı dostu self-servis erişim noktası." },
    { name: "Knowledge", icon: FileText, desc: "Bilgi bankası ve çözüm kütüphanesi yönetimi." },
    { name: "SLM", icon: Clock, desc: "Hizmet seviyesi anlaşmaları ve SLA takibi." },
    { name: "Notification", icon: MessageSquare, desc: "Çok kanallı bildirim ve eskalasyon yönetimi." },
    { name: "Multi Tenancy", icon: Users, desc: "Çok kiracılı mimari ile izole ortam desteği." },
    { name: "Resource Plan", icon: CalendarClock, desc: "Kaynak planlama ve kapasite yönetimi." },
    { name: "TimeSheet", icon: Clock, desc: "Zaman takibi ve iş gücü raporlaması." },
    { name: "Task Management", icon: CheckCircle2, desc: "Görev atama, takip ve tamamlama yönetimi." },
    { name: "Workflow", icon: Workflow, desc: "Esnek iş akışı motoruyla süreç otomasyonu." },
]

const advancedFeatures = [
    { name: "KanBan Board", icon: Kanban, desc: "Görsel görev yönetimi ve sprint takibi." },
    { name: "Business Intelligence", icon: BarChart3, desc: "Gelişmiş raporlama ve veri analitiği." },
    { name: "Chat Bot", icon: Bot, desc: "Yapay zeka destekli self-servis destek botu." },
    { name: "Remote Desktop", icon: Monitor, desc: "Uzaktan masaüstü erişimi ve destek." },
    { name: "Employee Monitoring", icon: Users, desc: "Çalışan aktivite izleme ve raporlama." },
    { name: "Machine Learning", icon: BrainCircuit, desc: "Prediktif analiz ve anomali tespiti.", isAI: true },
    { name: "Conversational AI", icon: MessageSquare, desc: "Doğal dil işleme tabanlı etkileşim.", isAI: true },
]

/* ── Service Module Categories ──────────────────────── */
const serviceModules = [
    {
        id: "itsm",
        title: "ITSM",
        subtitle: "IT Service Management",
        description: "Enterprise Service Management çatısı altında uçtan uca IT Hizmet Yönetimi. Talep, olay, problem ve değişiklik süreçlerini tek bir platformda yönetin.",
        icon: Activity,
        gradient: "from-indigo-500 to-blue-600",
        iconBg: "bg-indigo-50",
        iconBgHover: "group-hover:bg-indigo-100",
        iconColor: "text-indigo-600",
        hoverBorder: "hover:border-indigo-200",
        hoverText: "group-hover:text-indigo-600",
        modules: [
            { title: "Service Desk", desc: "Tüm taleplerin tek noktadan karşılanması ve yönlendirilmesi.", icon: Globe },
            { title: "Incident", desc: "Hizmet kesintilerinin hızlı çözümü ve yönetimi.", icon: AlertTriangle },
            { title: "Request Fulfillment", desc: "Kullanıcı isteklerinin iş akışları ile karşılanması.", icon: CheckCircle2 },
            { title: "Problem", desc: "Kök neden analizi ile tekrarlayan sorunların engellenmesi.", icon: Search },
            { title: "Change", desc: "Değişikliklerin risk analizi ve onay süreçleri ile yönetimi.", icon: GitPullRequest },
            { title: "Release", desc: "Sürüm ve yaygınlaştırma süreçlerinin planlanması.", icon: Package },
            { title: "Asset & Capacity", desc: "Varlık yönetimi ve kapasite planlama süreçleri.", icon: Database },
        ]
    },
    {
        id: "ppm",
        title: "PPM",
        subtitle: "Project Portfolio Management",
        description: "Talep, proje ve portföy süreçlerinin bütünleşik yönetimi. Stratejik hedeflerinizi proje portföyünüz ile hizalayın.",
        icon: Layers,
        gradient: "from-emerald-500 to-teal-600",
        iconBg: "bg-emerald-50",
        iconBgHover: "group-hover:bg-emerald-100",
        iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-200",
        hoverText: "group-hover:text-emerald-600",
        modules: [
            { title: "Demand", desc: "Taleplerin toplanması, değerlendirilmesi ve önceliklendirilmesi.", icon: Target },
            { title: "Project", desc: "Onaylanan taleplerin proje olarak planlanması ve yürütülmesi.", icon: FolderKanban },
            { title: "Portfolio", desc: "Projelerin stratejik hedeflere göre portföy bazında yönetimi.", icon: Layers },
            { title: "Finance & Budget", desc: "Proje bütçelerinin ve finansal kaynakların takibi.", icon: Wallet },
            { title: "SDLC (Scrum)", desc: "Yazılım geliştirme yaşam döngüsü ve çevik proje yönetimi.", icon: Code },
        ]
    },
    {
        id: "itom",
        title: "ITOM",
        subtitle: "IT Operations Management",
        description: "IT Operasyonlarının otomasyon ve keşif yetenekleri ile güçlendirilmesi. Altyapınızı proaktif olarak yönetin.",
        icon: Server,
        gradient: "from-purple-500 to-violet-600",
        iconBg: "bg-purple-50",
        iconBgHover: "group-hover:bg-purple-100",
        iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-200",
        hoverText: "group-hover:text-purple-600",
        modules: [
            { title: "Orchestration", desc: "Operasyonel süreçlerin otomasyonu ve iş akışı yönetimi.", icon: Workflow },
            { title: "Client Discovery", desc: "Son kullanıcı cihazlarının ağ üzerinde keşfedilmesi.", icon: Smartphone },
            { title: "Infrastructure Discovery", desc: "Sunucu ve ağ altyapısının otomatik keşfi.", icon: Network },
            { title: "Service Mapping", desc: "İş servisleri ve altyapı ilişkilerinin haritalanması.", icon: Settings },
            { title: "Event Management", desc: "Olayların izlenmesi, korelasyonu ve yönetimi.", icon: Zap },
        ]
    },
]

/* ── Page Component ─────────────────────────────────── */
export default function PraxilaPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <Hero
                title="Praxila: Bütünleşik IT Hizmet & Operasyon Yönetimi"
                subtitle="ITSM, PPM ve ITOM süreçlerinizi tek bir platformda birleştiren, yapay zeka destekli yeni nesil operasyon yönetim çözümü."
                className="bg-indigo-900"
                backgroundImage="/images/headers/bgts-teknoloji-urunleri.jpg"
                ctaText="Demo Talep Edin"
                ctaLink="/contact"
            />

            {/* ═══════════ OVERVIEW — Foundation ═══════════ */}
            <Section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp}>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                Güçlü Temel, Akıllı Operasyon
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Praxila, <strong className="text-slate-900">Enterprise Service Management</strong> vizyonuyla tasarlanmış;
                                    esnek, ölçeklenebilir ve yapay zeka destekli güçlü bir &ldquo;Foundation&rdquo; üzerine inşa edilmiştir.
                                </p>
                                <p>
                                    ITSM, PPM ve ITOM modülleri ile IT operasyonlarınızı uçtan uca yönetin.
                                    Gelişmiş otomasyon, keşif ve analitik yetenekleri ile proaktif bir
                                    operasyon yönetimi deneyimi yaşayın.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-8">
                                {[
                                    { icon: ShieldCheck, text: "ITIL Uyumlu" },
                                    { icon: Cpu, text: "AI Destekli" },
                                    { icon: Network, text: "Multi-Tenant" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                        <item.icon className="w-4 h-4 text-indigo-400" />
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Platform Highlights */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { stat: "3", label: "Ana Modül", gradient: "from-indigo-500 to-blue-600" },
                                    { stat: "17+", label: "Alt Süreç", gradient: "from-emerald-500 to-teal-600" },
                                    { stat: "AI", label: "Destekli", gradient: "from-purple-500 to-violet-600" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 text-center text-white shadow-lg`}
                                    >
                                        <div className="text-3xl font-black mb-1">{item.stat}</div>
                                        <div className="text-white/70 text-sm font-medium">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ═══════════ FOUNDATION CORE ═══════════ */}
            <Section className="py-24 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Foundation Core</Heading>
                        <Text variant="large" className="text-slate-600">
                            Tüm modüllerin üzerine inşa edildiği güçlü altyapı bileşenleri.
                        </Text>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {foundationCore.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-indigo-50 group-hover:bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                                        <item.icon className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-sm mb-1">{item.name}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ ADVANCED FEATURES ═══════════ */}
            <Section className="py-24 bg-white">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Gelişmiş Yetenekler</Heading>
                        <Text variant="large" className="text-slate-600">
                            Yapay zeka ve otomasyon ile desteklenen ileri seviye özellikler.
                        </Text>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
                        {advancedFeatures.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`rounded-xl p-6 border transition-all group ${item.isAI
                                        ? "bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 hover:border-indigo-300 hover:shadow-lg"
                                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.isAI
                                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200"
                                        : "bg-indigo-50 group-hover:bg-indigo-100"
                                    }`}>
                                    <item.icon className={`w-6 h-6 ${item.isAI ? "text-white" : "text-indigo-600"}`} />
                                </div>
                                <h4 className={`font-bold mb-2 text-sm ${item.isAI ? "text-indigo-800" : "text-slate-900"}`}>
                                    {item.name}
                                    {item.isAI && <span className="ml-2 text-xs font-bold text-indigo-500 bg-indigo-100 px-2 py-0.5 rounded-full">AI</span>}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ SERVICE MODULES — Grouped ═══════════ */}
            <div id="modules">
                {serviceModules.map((category, catIdx) => {
                    const isAlt = catIdx % 2 !== 0
                    return (
                        <Section key={category.id} className={`relative overflow-hidden ${isAlt ? 'bg-white' : 'bg-slate-50'}`}>
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`} />
                            <Container>
                                <div className="grid lg:grid-cols-12 gap-12">
                                    {/* Left: Sticky Category Card */}
                                    <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                                        <div className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                            <div className="relative z-10">
                                                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                                                    <category.icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                                                <p className="text-white/60 text-sm font-medium mb-4">{category.subtitle}</p>
                                                <p className="text-white/80 leading-relaxed text-sm">{category.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right: Module Cards Grid */}
                                    <div className="lg:col-span-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {category.modules.map((mod, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.08 }}
                                                    className={`bg-white rounded-xl p-6 border border-slate-200 ${category.hoverBorder} hover:shadow-lg transition-all group`}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className={`w-11 h-11 ${category.iconBg} ${category.iconBgHover} rounded-lg flex items-center justify-center shrink-0 transition-colors`}>
                                                            <mod.icon className={`w-5 h-5 ${category.iconColor}`} />
                                                        </div>
                                                        <div>
                                                            <h4 className={`font-bold text-slate-900 ${category.hoverText} transition-colors mb-1`}>{mod.title}</h4>
                                                            <p className="text-sm text-slate-500 leading-relaxed">{mod.desc}</p>
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

            {/* ═══════════ CTA ═══════════ */}
            <Section className="py-24 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10">
                            <Heading variant="h2" className="mb-6 text-white !text-3xl lg:!text-4xl">
                                IT Operasyonlarınızı Dönüştürmeye Hazır mısınız?
                            </Heading>
                            <Text variant="large" className="text-indigo-100 mb-10 max-w-2xl mx-auto">
                                Praxila ile ITSM, PPM ve ITOM süreçlerinizi tek bir platformda birleştirin.
                                Yapay zeka destekli proaktif operasyon yönetimine geçin.
                            </Text>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 py-4 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
                            >
                                Demo Talep Edin <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </Container>
            </Section>

        </div>
    )
}
