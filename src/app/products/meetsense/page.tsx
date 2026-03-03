"use client"

import React from "react"
import Link from "next/link"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    Mic, FileAudio, FileText, BrainCircuit, Activity, Settings, CalendarCheck, CheckCircle2,
    Calendar, Bot, ArrowRight, Play, Database, Search, Terminal, MessageSquare, ListTodo, ShieldCheck, TrendingUp
} from "lucide-react"

/* ── Animations ─────────────────────────────────────── */
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

/* ── Platform Capabilities ──────────────────────────── */
const capabilities = [
    { name: "Takvim Entegrasyonu", icon: CalendarCheck, desc: "Takviminizi okur, planlanmış toplantılarınıza otomatik olarak katılır." },
    { name: "Yüksek Kaliteli Kayıt", icon: Mic, desc: "Otomatik ses kaydı ile konuşulan her şeyi güvenle yedekler." },
    { name: "AI Transkript", icon: FileText, desc: "Speaker Diarization ile kimin ne dediğini metne dökerek ayrıştırır." },
    { name: "Derinlemesine Analiz", icon: BrainCircuit, desc: "Gelişmiş AI destekli analizler ile kararları ve aksiyonları tespit eder." },
]

/* ── Process Steps ──────────────────────────────────── */
const processSteps = [
    { num: "01", title: "Planlandı", desc: "Takvim entegrasyonu ile otomatik veya manuel olarak toplantılar tespit edilir.", icon: Calendar },
    { num: "02", title: "Bot Katılıyor", desc: "Kural bazlı veya manuel tetikleyici ile sanal asistanımız görüşmeye katılır.", icon: Bot },
    { num: "03", title: "Kayıt Ediliyor", desc: "Yüksek kalitede ses ve veri kaydı aktif hale gelir.", icon: Activity },
    { num: "04", title: "İşleniyor", desc: "Ses verisi AI ile metne dökülür ve anlamlı analizler için işlenir.", icon: Settings },
    { num: "05", title: "Tamamlandı", desc: "Zengin raporlar, aksiyon maddeleri ve entegrasyon çıktıları sunulur.", icon: CheckCircle2 },
]

/* ── Core Modules/Features ──────────────────────────── */
const coreFeatures = [
    {
        id: "ai-transcript",
        title: "AI Transkript ve Analiz Detayları",
        description: "Klasik metin dökümünün ötesinde, her konuşmayı bağlamına oturtan gelişmiş analizler.",
        icon: FileAudio,
        gradient: "from-blue-500 to-indigo-600",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        image: "/images/products/meetsense/feature-3.png",
        items: [
            { title: "Konuşmacı Bazlı Ayrım", desc: "Speaker Diarization ile her sözün sahibini net biçimde tespit eder." },
            { title: "Segment Bazlı Dinleme", desc: "Transkripte tıklayarak o anki sese anında gidin." },
        ]
    },
    {
        id: "chat-bot",
        title: "MeetSense Chatbot",
        description: "Verilerinizle doğal dilde konuşun. Geçmişi veya mevcut toplantıyı anlık olarak sorgulayın.",
        icon: MessageSquare,
        gradient: "from-fuchsia-500 to-rose-600",
        iconBg: "bg-fuchsia-50",
        iconColor: "text-fuchsia-600",
        image: "/images/products/meetsense/chatbot-interface.png",
        items: [
            { title: "Anlık Analiz", desc: "Devam eden toplantıda bile anında özet alın." },
            { title: "Geçmiş Tarama", desc: "Belirli bir projeye veya ekibe ait toplantı serilerini tarayın." },
        ]
    },
    {
        id: "dashboard",
        title: "Organizasyonel İçgörüler",
        description: "Tüm toplantılarınızın büyük resmi. Ekiplerin üretkenliğini kuş bakışı değerlendirin.",
        icon: Search,
        gradient: "from-emerald-500 to-teal-600",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        image: "/images/products/meetsense/feature-4.png",
        items: [
            { title: "Haftalık & Aylık Özetler", desc: "Toplantı, karar ve aksiyon istatistiklerine tek bakış." },
            { title: "Trend Analizi", desc: "En çok konuşulan konuları ve riskleri tespit edin." },
        ]
    },
    {
        id: "integrations",
        title: "İş Takibi & Entegrasyonlar",
        description: "AI ile alınan kararlar otomatik olarak Jira, Trello gibi iş platformlarınıza akar.",
        icon: ListTodo,
        gradient: "from-orange-500 to-amber-600",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
        image: "/images/products/meetsense/feature-5.png",
        items: [
            { title: "Jira Entegrasyonu", desc: "Teknik kararları otomatik Jira tasklerine dönüştürün." },
            { title: "AI Atama Algoritması", desc: "Görevi transkripten çıkarıp doğru kişiye linkler." },
        ]
    },
]

/* ── Value Proposition ──────────────────────────────── */
const values = [
    { title: "Zaman Tasarrufu", desc: "Not alma ve rapor yazma süreleri ortadan kalkar.", num: "01" },
    { title: "Güvenli İçerik", desc: "Hassas içerikler sadece yetkili kişilere ulaşır.", num: "02" },
    { title: "Aksiyon Takibi", desc: "Her karar kaydedilir, sorumlu atanır ve takip edilir.", num: "03" },
    { title: "Derin Analiz", desc: "Riskler ve açık konular otomatik tespit edilir.", num: "04" },
    { title: "Doğal Dil Sorgusu", desc: "Okumak yerine soru sorun, anında cevap alın.", num: "05" },
    { title: "Trend & Pattern", desc: "Çoklu toplantı verilerinden trendleri yakalayın.", num: "06" },
]


/* ── Page Component ─────────────────────────────────── */
export default function MeetSensePage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <div className="relative pt-32 pb-32 overflow-hidden bg-slate-50">
                {/* Decorative Gradients */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                                Meet<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Sense</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 mb-6">
                                Toplantılarınızı AI'ın Gücüyle Dönüştürün.
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                                Akıllı asistan, canlı transkript, otomatik Jira entegrasyonu ve organizasyonel içgörüler ile toplantılarınızı kalıcı kurumsal hafızaya dönüştürün.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 rounded-2xl" />
                            <img
                                src="/images/products/meetsense/dashboard-overview.png"
                                alt="MeetSense Dashboard"
                                className="w-full h-auto rounded-xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-0"
                            />
                        </motion.div>
                    </div>
                </Container>
            </div>

            {/* ═══════════ OVERVIEW CARDS ═══════════ */}
            <Section className="py-24 bg-white relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-slate-900">MeetSense Nedir?</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">
                            Kurumsal ekiplerin toplantılarına otomatik katılır, yüksek kaliteli ses kaydı alır, AI ile transkript üretir ve analizlerle değerini maksimize eder.
                        </Text>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                                    <cap.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{cap.name}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ LIFECYCLE / PROCESS ═══════════ */}
            <Section className="py-24 bg-slate-50 overflow-hidden relative">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="text-slate-900">Toplantı Yaşam Döngüsü</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">
                            Başlangıçtan tamamlanmaya kadar her adım otomatik yönetilir.
                        </Text>
                    </div>

                    {/* Timeline Grid */}
                    <div className="grid md:grid-cols-5 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group text-center"
                            >
                                {/* Connection Line (Desktop) */}
                                {i !== processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-indigo-100 z-0" />
                                )}

                                <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <step.icon className="w-8 h-8 text-indigo-600" />
                                </div>

                                <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ FEATURES GRID ═══════════ */}
            <Section id="features" className="py-24 bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Heading variant="h2" className="text-slate-900">Platformun Gücünü Keşfedin</Heading>
                        <Text variant="large" className="text-slate-600 mt-4">
                            Sadece kayıt tutmanın ötesine geçen, yapay zeka destekli akıllı özellikler.
                        </Text>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {coreFeatures.map((feature, i) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Subtle Gradient overlay on hover */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${feature.gradient} rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <div className="space-y-4">
                                        {feature.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="mt-1">
                                                    <CheckCircle2 className={`w-5 h-5 ${feature.iconColor}`} />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Image Integration */}
                                    <div className="mt-8 relative rounded-xl overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ VALUE PROPOSITION / VALUES ═══════════ */}
            <Section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <TrendingUp className="w-96 h-96" />
                </div>

                <Container>
                    <div className="grid lg:grid-cols-3 gap-16 relative z-10">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Sözde Kalmasın,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">İşe Dönüşsün</span>
                            </h2>
                            <p className="text-lg font-medium text-slate-300 mb-8">
                                MeetSense size sadece kayıt araçları sunmaz; aksiyon alır, riskleri tespit eder ve toplantılarınızı organizasyonel değere dönüştürür.
                            </p>
                            <Link href="/contact" className="inline-flex flex-wrap items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300">
                                Daha Fazla Bilgi İstiyorum
                            </Link>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                                {values.map((val, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        <div className="absolute top-[-8px] left-0 text-3xl font-bold text-indigo-500/30">
                                            {val.num}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2 text-white">{val.title}</h4>
                                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{val.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

        </div>
    )
}
