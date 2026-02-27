"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Server, Activity, Database, Code, Cpu, Globe, Shield, ShoppingBag,
    CheckCircle2, ArrowRight, Terminal, FileText, PlayCircle, Linkedin, Briefcase,
    Zap, Bot, Landmark, TrendingUp, Radio, ShieldAlert, RefreshCw, Code2, Layers,
    Calendar, ArrowUpRight, BarChart3, Quote,
    GraduationCap, Heart, Rocket, Smile
} from "lucide-react"
import { STYLES } from "./data"

const BackgroundPattern = () => (
    <div className="absolute -bottom-24 -right-24 w-64 h-64 opacity-[0.03] pointer-events-none z-0 rotate-12 text-slate-900">
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" />
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" transform="translate(50, 50)" />
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" transform="translate(-50, 50)" />
        </svg>
    </div>
)



export const ServicesMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Hizmetler menüsü"
    >
        <div className="grid grid-cols-3">
            {/* Column 1: Yazılım Hizmetleri */}
            <div className="bg-blue-50/40 p-10 border-r border-slate-200/80 flex flex-col relative">
                <h3 className={STYLES.columnHeader}>Yazılım ve Teknoloji Servisleri</h3>
                <div className="space-y-6">
                    <Link onClick={closeMenu} href="/services/software-development#bigdata" className="group flex items-center gap-3">
                        <Database className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-indigo-600 transition-colors">Büyük Veri & Gerçek Zamanlı Veri İşleme</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#ai" className="group flex items-center gap-3">
                        <Cpu className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-amber-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-amber-600 transition-colors">Yapay Zekâ & AI-First Mimari Çözümleri</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#modernization" className="group flex items-center gap-3">
                        <RefreshCw className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-cyan-600 transition-colors">Yazılım Modernizasyonu & Mikroservis Dönüşümü</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#development-services" className="group flex items-center gap-3">
                        <Layers className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">Yazılım Geliştirme Hizmetleri</h4>
                    </Link>
                </div>
            </div>

            {/* Column 2: Sektörel Çözümler */}
            <div className="bg-white p-10 border-r border-slate-200/80 flex flex-col relative">
                <h3 className={STYLES.columnHeader}>SEKTÖREL YAZILIM ÇÖZÜMLERİ</h3>
                <div className="space-y-6">
                    <Link onClick={closeMenu} href="/services/software-development#banking" className="group flex items-center gap-3">
                        <Landmark className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-emerald-600 transition-colors">Bankacılık & Finansal Sistemler</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#trading" className="group flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-sky-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-sky-600 transition-colors">E-Trading & Market Data & Düşük Gecikmeli Sistemler</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#telecom" className="group flex items-center gap-3">
                        <Radio className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-violet-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-violet-600 transition-colors">Telekom & Dijital İletişim Platformları</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/software-development#fraud" className="group flex items-center gap-3">
                        <ShieldAlert className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-rose-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-rose-600 transition-colors">Fraud & Risk & AI Destekli Doğrulama Sistemleri</h4>
                    </Link>
                </div>
            </div>

            {/* Column 3: Yönetilen Hizmetler */}
            <div className="bg-[#f8f9fa] p-10 flex flex-col relative">
                <h3 className={STYLES.columnHeader}>YÖNETİLEN HİZMETLER (MSP)</h3>
                <div className="space-y-6">
                    <Link onClick={closeMenu} href="/services/managed-services#data-center" className="group flex items-center gap-3">
                        <Server className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-slate-600 transition-colors">Veri Merkezi Yönetimi</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/managed-services#monitoring" className="group flex items-center gap-3">
                        <Activity className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-sky-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-sky-600 transition-colors">7/24 İzleme & NOC</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/managed-services#desktop-support" className="group flex items-center gap-3">
                        <Terminal className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-teal-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-teal-600 transition-colors">Son Kullanıcı ve Cihaz Yönetimi</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/managed-services#itsm" className="group flex items-center gap-3">
                        <FileText className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">ITSM as a Service</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/managed-services#sccm" className="group flex items-center gap-3">
                        <RefreshCw className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-green-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-green-600 transition-colors">SCCM & SRE Hizmetleri</h4>
                    </Link>
                    <Link onClick={closeMenu} href="/services/managed-services#devops" className="group flex items-center gap-3">
                        <Code className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-red-600 transition-colors" />
                        <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-red-600 transition-colors">DevOps as a Service</h4>
                    </Link>
                </div>
            </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
    </motion.div>
)

export const IndustriesMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Sektörler menüsü"
    >
        <div className="flex">
            <div className="w-[50%] bg-blue-50/50 p-10 border-r border-blue-100 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>KURUMSAL & SAVUNMA</h3>
                <div className="space-y-6">
                    <Link onClick={closeMenu} href="/industries/banking" className={STYLES.linkGroup}>
                        <Globe className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Bankacılık & Finans</h4><p className={STYLES.itemDesc}>Dijital kanallar ve regülasyon uyumu için uçtan uca çözümler.</p></div>
                        </div>
                    </Link>
                    <Link onClick={closeMenu} href="/industries/defense" className={STYLES.linkGroup}>
                        <Shield className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Savunma Sanayi</h4><p className={STYLES.itemDesc}>15288 & 12207 standartlarına uygun kritik görev sistemleri.</p></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-[50%] bg-[#f8f9fa] p-10 flex flex-col justify-start">
                <h3 className={STYLES.columnHeader}>TİCARİ & TELEKOM</h3>
                <div className="space-y-6">
                    <Link onClick={closeMenu} href="/industries/telecommunications" className={STYLES.linkGroup}>
                        <Server className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Telekomünikasyon</h4><p className={STYLES.itemDesc}>OSS/BSS ve dijital kanal platformlarında 7/24 erişilebilirlik.</p></div>
                        </div>
                    </Link>
                    <Link onClick={closeMenu} href="/industries/retail" className={STYLES.linkGroup}>
                        <ShoppingBag className={STYLES.iconContainer} />
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1"><h4 className={STYLES.itemTitle}>Perakende & E-Ticaret</h4><p className={STYLES.itemDesc}>Omnichannel yapılar ve yüksek hacimli işlem yönetimi.</p></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    </motion.div>
)

export const ProductsMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={STYLES.megaMenuWrapper}
        role="menu"
        aria-label="Ürünler menüsü"
    >
        <div className="flex">
            {/* Column 1: İşe Alım */}
            <div className="w-[33.33%] bg-blue-50/30 p-8 border-r border-blue-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h3 className={STYLES.columnHeader}>İŞE ALIM TEKNOLOJİLERİ</h3>
                    <div className="space-y-3">
                        <Link onClick={closeMenu} href="/products/ai-hiring-assistant" className={STYLES.linkGroup}>
                            <CheckCircle2 className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>AI HIRING ASSISTANT</h4>
                                    <p className={STYLES.itemDescItalic}>“İşe alım süreçlerini yapay zeka ile hızlandırın.”</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href="/products/cv-converter" className={STYLES.linkGroup}>
                            <FileText className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>CV-CONVERTER</h4>
                                    <p className={STYLES.itemDescItalic}>“Dağınık CV formatlarını standart hale getirin.”</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Column 2: Kurumsal Çözümler */}
            <div className="w-[33.33%] bg-[#f8fafc] p-8 border-r border-slate-100 flex flex-col justify-start">
                <div className="mb-auto">
                    <h3 className={STYLES.columnHeader}>KURUMSAL ÇÖZÜMLER</h3>
                    <div className="space-y-3">
                        <Link onClick={closeMenu} href="/products/cortex" className={STYLES.linkGroup}>
                            <Cpu className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>BGTS CORTEX</h4>
                                    <p className={STYLES.itemDescItalic}>“Yazılım yaşam döngüsünü AI agent'larla otomatikleştirin.”</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href="/products/hcm" className={STYLES.linkGroup}>
                            <Briefcase className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>HCM Platformu</h4>
                                    <p className={STYLES.itemDescItalic}>“İK operasyonlarınızı uçtan uca dijitalleştiren HCM platformumuz.”</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href="/products/praxila" className={STYLES.linkGroup}>
                            <Activity className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>PRAXILA</h4>
                                    <p className={STYLES.itemDescItalic}>“Yeni nesil otomasyon ve operasyon yönetimi platformumuz.”</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Column 3: Doküman & Bilgi Yönetimi */}
            <div className="w-[33.33%] bg-[#f8fafc] p-8 flex flex-col justify-start">
                <div className="mb-auto">
                    <h3 className={STYLES.columnHeader}>DOKÜMAN & BİLGİ YÖNETİMİ</h3>
                    <div className="space-y-3">
                        <Link onClick={closeMenu} href="/products/doc2bot" className={STYLES.linkGroup}>
                            <Bot className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>DOC2BOT</h4>
                                    <p className={STYLES.itemDescItalic}>“Kurum içi bilgi bankanızı akıllı bir asistana dönüştürün.”</p>
                                </div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href="/products/docmind" className={STYLES.linkGroup}>
                            <Code className={cn(STYLES.iconContainer, STYLES.iconLarge)} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>DOCMIND</h4>
                                    <p className={STYLES.itemDescItalic}>“Kod tabanınızdan otomatik teknik dokümantasyon üretin.”</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
)

export const TalentMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(STYLES.megaMenuWrapper, "p-5")}
        role="menu"
        aria-label="Genç mühendisler menüsü"
    >
        <div className="grid grid-cols-5 gap-4 h-[400px]">

            {/* HERO CARD: Genç Mühendis Programı (2 cols) */}
            <Link
                href="/young-engineers"
                onClick={closeMenu}
                className="col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-lg"
            >
                <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Genç Mühendis Programı"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                <div className="relative h-full flex flex-col justify-between p-7 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                            <GraduationCap className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-[10px] font-black text-white/70 tracking-[0.2em] uppercase">Genç Mühendis Programı</span>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                            Geleceğini <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Kodla</span>
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-5 max-w-[280px]">
                            Gerçek projelerde deneyim kazan, mentorlarla çalış ve kariyerine güçlü bir başlangıç yap.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white text-slate-900 pl-4 pr-3 py-2 rounded-full font-bold text-xs hover:bg-cyan-50 transition-all group-hover:gap-3">
                            Programı Keşfet <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </Link>

            {/* MIDDLE COLUMN - 3 Stacked Track Cards (2 cols) */}
            <div className="col-span-2 flex flex-col gap-3">

                {/* Yazılım */}
                <Link
                    href="/young-engineers#tracks"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                        <Code className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">Yazılım — Full-Stack Geliştirici</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">React, .NET, Node.js ile gerçek dünya projeleri.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:text-blue-600 transition-colors shrink-0" />
                </Link>

                {/* Teknoloji */}
                <Link
                    href="/young-engineers#tracks"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                        <Server className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">Teknoloji — Sistem & DevOps</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">Cloud, altyapı ve kurumsal sistemler.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                </Link>

                {/* Test & Analiz */}
                <Link
                    href="/young-engineers#tracks"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-violet-200">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">Test & Analiz — QA Mühendisi</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">Otomasyon, kalite ve veri odaklı analiz.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-violet-300 group-hover:text-violet-600 transition-colors shrink-0" />
                </Link>
            </div>

            {/* CTA CARD: Ekibe Katıl (1 col) */}
            <Link
                href="/young-engineers#application-form"
                onClick={closeMenu}
                className="col-span-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
                {/* Animated background circles */}
                <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />

                <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 text-white transition-all group-hover:scale-110">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <h4 className="font-black text-white text-lg leading-tight">Ekibe<br />Katıl!</h4>
                    <p className="text-blue-200 text-[11px] mt-2 mb-4 leading-snug">Başvurunu yap,<br />programa katıl</p>
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-[11px] font-bold border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-all">
                        Başvur <ArrowUpRight className="w-3 h-3" />
                    </div>
                </div>
            </Link>

        </div>
    </motion.div>
)

export const ResourcesMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(STYLES.megaMenuWrapper, "p-6")}
        role="menu"
        aria-label="Bilgi merkezi menüsü"
    >
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[480px]">

            {/* FEATURED: Main Knowledge Hub (Spans 2 cols, 2 rows) */}
            <Link
                href="/resources"
                onClick={closeMenu}
                className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 shadow-lg ring-1 ring-slate-900/5"
            >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                        alt="BİLGİ MERKEZİ"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-bold text-white/80 tracking-widest uppercase">Bilgi Kütüphanesi</span>
                    </div>

                    <div>
                        <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                            Geleceği Şekillendiren <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bilgi Hazinesi</span>
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-md mb-8">
                            Dijital dönüşüm, mühendislik pratikleri ve sektör odaklı derinlemesine analizlere ulaşın.
                            Teknoloji dünyasındaki rehberiniz.
                        </p>

                        <div className="inline-flex items-center gap-2 bg-white text-slate-900 pl-5 pr-4 py-3 rounded-full font-bold text-sm hover:bg-cyan-50 transition-all group-hover:gap-4">
                            Tüm İçerikleri Keşfet <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>


            {/* CARD 2: Success Stories (Pink/Purple Gradient) */}
            <Link
                href="/resources/success-stories"
                onClick={closeMenu}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 flex flex-col justify-between shadow-lg hover:shadow-pink-500/25 transition-all hover:-translate-y-1"
            >
                <div>
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-white">
                        <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">Başarı Hikayeleri</h4>
                    <p className="text-pink-100 text-xs line-clamp-2">Gerçek projeler, gerçek sonuçlar ve ilham veren kariyerler.</p>
                </div>

                <div className="mt-4 flex -space-x-3 items-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-pink-500 bg-white shadow-sm overflow-hidden relative">
                            <Image src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="User" fill className="object-cover" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-pink-500 bg-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-white">
                        +12
                    </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
            </Link>


            {/* CARD 3: Follow Us (LinkedIn) */}
            <Link
                href="https://www.linkedin.com/company/bilgeadam/"
                target="_blank"
                onClick={closeMenu}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-[#0077b5] p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-1"
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <Linkedin className="w-12 h-12 text-white mb-3" />
                    <h4 className="font-bold text-white text-lg">Bizi Takip Edin</h4>
                    <p className="text-blue-100 text-xs mt-1 mb-4">Teknoloji dünyasından güncel haberler.</p>

                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold group-hover:bg-white group-hover:text-[#0077b5] transition-colors">
                        @bilgeadam
                    </span>
                </div>
            </Link>


            {/* CARD 4: Events (Webinar) */}
            <Link
                href="https://www.linkedin.com/company/bilgeadam/events/?viewAsMember=true"
                target="_blank"
                onClick={closeMenu}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-white border border-slate-200 p-0 shadow-sm hover:shadow-lg transition-all hover:border-blue-200 flex flex-col"
            >
                <div className="h-1/2 bg-slate-100 relative overflow-hidden">
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
                        WEBINAR
                    </div>
                    <Image src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&q=80" alt="Event" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="h-1/2 p-4 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                            <Calendar className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-wide">15 Ekim • 14:00</span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                            Qlik Cloud Veri Analitiği Lansmanı
                        </h4>
                    </div>
                    <div className="flex items-center text-xs font-bold text-blue-600 mt-2">
                        Kaydol <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                </div>
            </Link>


            {/* CARD 5: Infographics (Stats) */}
            <Link
                href="/resources/infographics"
                onClick={closeMenu}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:bg-white hover:border-slate-200"
            >
                <BackgroundPattern />
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BarChart3 className="w-24 h-24 text-slate-900" />
                </div>

                <div>
                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-transparent">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-800">İnfografikler</h4>
                    <p className="text-slate-500 text-xs mt-1">Sektörel veriler ve trend analizleri.</p>
                </div>

                <div className="mt-4 flex items-center text-xs font-bold text-indigo-600">
                    İncele <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

        </div>
    </motion.div>
)

export const CareersMenu = ({ closeMenu }: { closeMenu?: () => void }) => (
    <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={cn(STYLES.megaMenuWrapper, "p-5")}
        role="menu"
        aria-label="Kariyer menüsü"
    >
        <div className="grid grid-cols-5 gap-4 h-[400px]">

            {/* CARD 1: CULTURE - Hero Card */}
            <Link
                href="/culture"
                onClick={closeMenu}
                className="col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-lg"
            >
                <Image
                    src="/images/headers/bgts-hakkimizda-ekip.jpg"
                    alt="Culture"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                <div className="relative h-full flex flex-col justify-between p-7 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                            <Smile className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-[10px] font-black text-white/70 tracking-[0.2em] uppercase">Yaşam & Kültür</span>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                            Birlikte <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">Büyüyoruz</span>
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-5 max-w-[280px]">
                            Ortak değerler, güçlü ekip ruhu ve sürekli gelişim. Geleceği birlikte inşa ediyoruz.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white text-slate-900 pl-4 pr-3 py-2 rounded-full font-bold text-xs hover:bg-amber-50 transition-all group-hover:gap-3">
                            Keşfet <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </Link>

            {/* MIDDLE COLUMN - 3 Stacked Cards */}
            <div className="col-span-2 flex flex-col gap-3">

                {/* Career Paths */}
                <Link
                    href="/career-paths"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-violet-200">
                        <Rocket className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">Kariyer Yolları</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">Potansiyelinizi ortaya çıkaran net ve şeffaf kariyer haritaları.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-violet-300 group-hover:text-violet-600 transition-colors shrink-0" />
                </Link>

                {/* BGTS Akademi */}
                <Link
                    href="/learning"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">BGTS Akademi</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">Sürekli öğrenme ve gelişim fırsatları.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                </Link>

                {/* Social Contribution */}
                <Link
                    href="/social-contribution"
                    onClick={closeMenu}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-rose-200">
                        <Heart className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-800 text-sm">Toplumsal Katkı</h4>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug">Eğitim, sürdürülebilirlik ve sosyal sorumluluk projelerimiz.</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-rose-300 group-hover:text-rose-600 transition-colors shrink-0" />
                </Link>
            </div>

            {/* CTA CARD: Join Us */}
            <Link
                href="https://www.linkedin.com/company/bilgeadam/jobs/"
                target="_blank"
                onClick={closeMenu}
                className="col-span-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
                {/* Animated background circles */}
                <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />

                <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 text-white transition-all group-hover:scale-110">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h4 className="font-black text-white text-lg leading-tight">Aramıza<br />Katıl!</h4>
                    <p className="text-blue-200 text-[11px] mt-2 mb-4 leading-snug">Açık pozisyonları<br />incele</p>
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-[11px] font-bold border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-all">
                        LinkedIn <ArrowUpRight className="w-3 h-3" />
                    </div>
                </div>
            </Link>

        </div>
    </motion.div>
)


