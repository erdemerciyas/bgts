"use client"

import React from "react"
import Link from "next/link"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { motion } from "framer-motion"
import {
    ArrowRight, Users, Award, BookOpen, ClipboardCheck,
    GraduationCap, FileCheck, BarChart3, Video, Globe,
    Wallet, CalendarClock, Receipt, FileText, HelpCircle,
    Briefcase, Layers, Shield, Smartphone, Link2, Sparkles,
    CheckCircle2, Server, Database, Code, Cloud, Terminal,
    MessageSquare, Cpu, Play
} from "lucide-react"

/* ── Animations ─────────────────────────────────────── */
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

/* ── Module Categories (Defense-page style) ─────────── */
const moduleCategories = [
    {
        id: "temel-ik",
        title: "Temel İK & Organizasyon",
        description: "Organizasyon yapısı, personel yönetimi, işe alım ve bordro süreçlerinin entegre yönetimi.",
        icon: Users,
        gradient: "from-orange-500 to-amber-600",
        iconBg: "bg-orange-50",
        iconBgHover: "group-hover:bg-orange-100",
        iconColor: "text-orange-600",
        hoverBorder: "hover:border-orange-200",
        hoverText: "group-hover:text-orange-600",
        modules: [
            { title: "Temel İK ve Organizasyon", desc: "Organizasyon yapısı, personel kartları ve özlük bilgilerinin merkezi yönetimi.", icon: Users },
            { title: "İşe Alım ve Uyum", desc: "Aday takip, mülakat süreçleri ve onboarding iş akışları.", icon: ClipboardCheck },
            { title: "Bordro ve Teşvik", desc: "Yasal uyumlu bordro hesaplama, SGK ve teşvik raporlaması.", icon: Receipt },
            { title: "Ücret ve Yan Haklar", desc: "Ücret yapısı, terfi/zam simülasyonu ve tazminat yönetimi.", icon: Briefcase },
        ]
    },
    {
        id: "yetenek-performans",
        title: "Yetenek & Performans",
        description: "Çalışan potansiyellerini keşfedin, performansı ölçün ve stratejik işgücü planlaması yapın.",
        icon: Award,
        gradient: "from-emerald-500 to-green-600",
        iconBg: "bg-emerald-50",
        iconBgHover: "group-hover:bg-emerald-100",
        iconColor: "text-emerald-600",
        hoverBorder: "hover:border-emerald-200",
        hoverText: "group-hover:text-emerald-600",
        modules: [
            { title: "Yetenek Yönetimi", desc: "Çalışan potansiyellerinin belirlenmesi, yedekleme planları ve kariyer haritaları.", icon: Award },
            { title: "Performans", desc: "Hedef bazlı değerlendirme, 360° geri bildirim ve OKR yönetimi.", icon: BarChart3 },
            { title: "İşgücü Analitiği ve Planlaması", desc: "Stratejik işgücü planlaması, trend analizi ve dashboard.", icon: Layers },
            { title: "Değerlendirme ve Anket", desc: "Çalışan memnuniyeti, bağlılık ve iklim anketleri.", icon: BookOpen },
        ]
    },
    {
        id: "egitim-iletisim",
        title: "Eğitim & İletişim",
        description: "Sürekli öğrenme kültürü oluşturun, sınav ve sertifikalarla yetkinlikleri doğrulayın.",
        icon: GraduationCap,
        gradient: "from-sky-500 to-blue-600",
        iconBg: "bg-sky-50",
        iconBgHover: "group-hover:bg-sky-100",
        iconColor: "text-sky-600",
        hoverBorder: "hover:border-sky-200",
        hoverText: "group-hover:text-sky-600",
        modules: [
            { title: "Eğitim ve Gelişim Planı", desc: "Eğitim kataloğu, sınıf yönetimi, e-öğrenme entegrasyonu.", icon: GraduationCap },
            { title: "Sınav", desc: "Yetkinlik ve bilgi ölçme sınavları, otomatik puanlama.", icon: FileCheck },
            { title: "Online Toplantı", desc: "WebRTC tabanlı görüntülü toplantılar ve entegre takvim.", icon: Video },
            { title: "İK Portal", desc: "Self-servis çalışan portalı, izin talepleri ve bildirimler.", icon: Globe },
        ]
    },
    {
        id: "operasyonel",
        title: "Operasyonel Süreçler",
        description: "Günlük İK operasyonlarınızı otomatize edin — masraf, zaman, doküman ve talep yönetimi.",
        icon: FileText,
        gradient: "from-purple-500 to-violet-600",
        iconBg: "bg-purple-50",
        iconBgHover: "group-hover:bg-purple-100",
        iconColor: "text-purple-600",
        hoverBorder: "hover:border-purple-200",
        hoverText: "group-hover:text-purple-600",
        modules: [
            { title: "Masraf Yönetimi", desc: "Masraf girişi, onay süreçleri ve muhasebe entegrasyonu.", icon: Wallet },
            { title: "Zaman ve Devamlılık", desc: "Mesai takibi, vardiya planlama ve devamsızlık yönetimi.", icon: CalendarClock },
            { title: "Doküman Yönetimi", desc: "Merkezi belge arşivi, sürüm kontrolü ve dijital imza.", icon: FileText },
            { title: "Sorun ve Talep Yönetimi", desc: "Çalışan talep/şikâyet sistemi, SLA takibi ve raporlama.", icon: HelpCircle },
        ]
    },
]

/* ── Technology Data ────────────────────────────────── */
const technologies = [
    { name: "ASP.NET Core", icon: Code },
    { name: "Web API", icon: Globe },
    { name: "Swagger", icon: FileText },
    { name: "Node.js", icon: Server },
    { name: "Redis", icon: Database },
    { name: "RabbitMQ", icon: MessageSquare },
    { name: "SignalR", icon: Sparkles },
    { name: "WebRTC", icon: Video },
    { name: "React Native", icon: Smartphone },
    { name: "Entity Framework", icon: Layers },
    { name: "Docker", icon: Cloud },
    { name: "Kubernetes", icon: Cpu },
    { name: "Git", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "SQL", icon: Database },
    { name: "Elasticsearch", icon: BarChart3 },
]

/* ── Page Component ─────────────────────────────────── */
export default function HcmPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══════════ HERO ═══════════ */}
            <Hero
                title="HR Thema HCM Platform"
                subtitle="16 entegre modül ile İK süreçlerinizi uçtan uca dijitalleştirin. İşe alımdan bordro yönetimine, performanstan eğitim planlamasına kadar tek platform."
                className="bg-slate-900"
                backgroundImage="/images/headers/bgts-teknoloji-urunleri.jpg"
                ctaText="Demo Talep Edin"
                ctaLink="/contact"
            />

            {/* ═══════════ OVERVIEW — Premium Split ═══════════ */}
            <Section className="py-24 bg-white">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp}>

                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                İnsan Sermayesi Yönetim Sistemi
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    HRThema HCM, sunduğu modülleri ile <strong className="text-slate-900">tek bir güvenlik modeline</strong> ve
                                    benzer, entegre edilmiş kullanıcı deneyimine sahip <strong className="text-slate-900">uçtan uca bir HCM çözümüdür</strong>.
                                </p>
                                <p>
                                    İşe alımdan bordro süreçlerine, performans yönetiminden eğitim planlamasına kadar
                                    tüm İK operasyonlarını tek bir platformda birleştirerek, kurumunuzun insan kaynağını
                                    stratejik bir varlık olarak yönetmenize olanak tanır.
                                </p>
                                <p>
                                    Kurumunuzun en değerli varlığı olan iş gücünün yönetilmesine stratejik
                                    ve planlı bir yaklaşım getiren platform, iş gücünüzü finansal ve
                                    yönetimsel objektiften anlamak ve ele almak için tasarlanmıştır.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                    <Shield className="w-4 h-4 text-orange-400" />
                                    Tek Güvenlik Modeli
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 rounded-lg text-sm font-semibold text-white">
                                    <Smartphone className="w-4 h-4 text-green-400" />
                                    Mobil Uyumlu
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Uçtan Uca Çözüm", desc: "İşe alımdan çıkışa kadar tüm İK süreçleri tek platformda.", icon: Link2, bgClass: "bg-orange-50", textClass: "text-orange-600" },
                                    { label: "Tek Güvenlik Modeli", desc: "Merkezi yetkilendirme ve veri güvenliği altyapısı.", icon: Shield, bgClass: "bg-emerald-50", textClass: "text-emerald-600" },
                                    { label: "Entegre Deneyim", desc: "Tüm modüllerde tutarlı ve modern kullanıcı arayüzü.", icon: Sparkles, bgClass: "bg-sky-50", textClass: "text-sky-600" },
                                    { label: "Mobil Erişim", desc: "React Native ile her yerden erişilebilir İK portalı.", icon: Smartphone, bgClass: "bg-purple-50", textClass: "text-purple-600" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${item.bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`w-6 h-6 ${item.textClass}`} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-1 text-sm">{item.label}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ═══════════ KEY DIFFERENTIATORS ═══════════ */}
            <Section className="py-24 bg-slate-50">
                <Container>
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Neden HR Thema HCM?</Heading>
                        <Text variant="large" className="text-slate-600">
                            Kurumunuzun İK dönüşümünü hızlandıran üç temel avantaj.
                        </Text>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "16 Entegre Modül",
                                desc: "İşe alımdan bordro süreçlerine, performans yönetiminden eğitim planlamasına kadar tüm İK operasyonlarını tek bir platformda birleştirin. Modüller arası veri akışı otomatik ve kesintisiz.",
                                icon: Layers,
                                gradient: "from-orange-500 to-amber-500",
                                stat: "16",
                                statLabel: "Modül"
                            },
                            {
                                title: "360° İK Yönetimi",
                                desc: "Çalışan yaşam döngüsünün her aşamasını kapsamlı olarak yönetin. Hedef bazlı performans, yetenek analitiği ve stratejik işgücü planlaması ile veriye dayalı kararlar alın.",
                                icon: BarChart3,
                                gradient: "from-emerald-500 to-green-500",
                                stat: "360°",
                                statLabel: "Kapsam"
                            },
                            {
                                title: "Modern Teknoloji",
                                desc: "ASP.NET Core, React Native, Redis, Kubernetes ve daha fazlası ile inşa edilmiş güçlü altyapı. Yüksek performans, ölçeklenebilirlik ve güvenlik garantisi.",
                                icon: Code,
                                gradient: "from-purple-500 to-violet-500",
                                stat: "16+",
                                statLabel: "Teknoloji"
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-200"
                            >
                                <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                                                {item.stat}
                                            </div>
                                            <div className="text-xs text-slate-400 font-medium">{item.statLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ═══════════ VIDEO SHOWCASE — Full-width Dark ═══════════ */}
            <Section className="py-0 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />
                </div>

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-28">
                        {/* Left: Content */}
                        <motion.div {...fadeUp} className="lg:col-span-4">

                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                HR Thema HCM{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-purple-400">
                                    in Aksiyon
                                </span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                Platformumuzun sunduğu kapsamlı İK yönetim deneyimini tanıtım videomuz ile keşfedin.
                                16 entegre modülün nasıl birlikte çalıştığını görün.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: CheckCircle2, text: "İşe alımdan çıkışa kadar tam süreç yönetimi" },
                                    { icon: CheckCircle2, text: "Tek panel üzerinden tüm İK operasyonları" },
                                    { icon: CheckCircle2, text: "Mobil uygulamayla çalışanların self-servis erişimi" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-green-400 shrink-0" />
                                        <span className="text-slate-300 text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:scale-105"
                                >
                                    Demo Talep Edin <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right: Video Embed */}
                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-8">
                            <div className="relative">
                                {/* Glow border effect */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 via-green-500/20 to-purple-500/30 rounded-2xl blur-sm" />
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/me_Z2xoZhEo"
                                        title="HR Thema HCM Tanıtım"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* ═══════════ MODULES — Grouped (Defense-page style) ═══════════ */}
            <div id="modules">
                {moduleCategories.map((category, catIdx) => {
                    const isAlt = catIdx % 2 !== 0
                    return (
                        <Section key={category.id} className={`relative overflow-hidden ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
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
                                                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
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

            {/* ═══════════ TECHNOLOGY STACK — Light Section ═══════════ */}
            <Section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                        <Heading variant="h2" className="mb-4 text-slate-900">Güçlü Teknoloji Altyapısı</Heading>
                        <Text variant="large" className="text-slate-600">
                            HR Thema HCM&apos;in arkasında en yeni teknolojiler ile inşa edilmiş,
                            ölçeklenebilir ve güvenli bir mimari bulunur. İlgili araçları
                            ve analitik verileri kullanarak problemleri derinlemesine inceleyebilir ve
                            kritik kararları teknoloji desteği ile verirsiniz.
                        </Text>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-md transition-all group cursor-default"
                            >
                                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                                    <tech.icon className="w-5 h-5 text-slate-500 group-hover:text-slate-800 transition-colors" />
                                </div>
                                <div className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">
                                    {tech.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

        </div>
    )
}
