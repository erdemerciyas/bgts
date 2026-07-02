"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
    Server, Activity, Database, Code, Cpu, Globe, Shield, ShoppingBag, Mic,
    CheckCircle2, ArrowRight, FileText, Linkedin, Briefcase,
    Bot, Landmark, TrendingUp, Radio, ShieldAlert, RefreshCw, Layers,
    Calendar, ArrowUpRight, BarChart3, Quote,
    GraduationCap, Heart, Rocket, Smile
} from "lucide-react"
import { STYLES } from "./data"
import { highlightAI } from "@/lib/highlight-ai"
import { localizedHref } from "@/lib/routes"
import { getLocaleFromPathname } from "@/lib/base-path"
import type { Locale } from "@/i18n-config"

const BackgroundPattern = () => (
    <div className="absolute -bottom-24 -right-24 w-64 h-64 opacity-[0.03] pointer-events-none z-0 rotate-12 text-slate-900">
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" />
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" transform="translate(50, 50)" />
            <path d="M50 0a50 50 0 1 0 0 100A50 50 0 0 0 50 0zm0 90a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" transform="translate(-50, 50)" />
        </svg>
    </div>
)

const ProductsBackgroundPattern = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute bottom-4 left-[3%] w-[200px] h-[180px] text-blue-500/[0.09]" viewBox="0 0 200 200" fill="none" stroke="currentColor">
            <polygon points="100,15 165,50 165,130 100,165 35,130 35,50" strokeWidth="1.8" />
            <polygon points="100,38 148,60 148,118 100,140 52,118 52,60" strokeWidth="1.3" />
            <polygon points="100,58 132,72 132,108 100,122 68,108 68,72" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-6 left-[16%] w-[100px] h-[80px] text-slate-400/[0.12]" viewBox="0 0 100 80" fill="currentColor">
            {Array.from({ length: 5 }).map((_, col) =>
                Array.from({ length: 4 }).map((_, row) => (
                    <circle key={`dl-${col}-${row}`} cx={10 + col * 20} cy={10 + row * 20} r={2} />
                ))
            )}
        </svg>
        <svg className="absolute bottom-3 right-[4%] w-[180px] h-[170px] text-indigo-400/[0.09]" viewBox="0 0 160 160" fill="none" stroke="currentColor">
            <circle cx="80" cy="80" r="72" strokeWidth="1.6" />
            <circle cx="80" cy="80" r="50" strokeWidth="1.2" />
            <circle cx="80" cy="80" r="28" strokeWidth="1" />
            <circle cx="80" cy="80" r="6" fill="currentColor" opacity="0.25" />
        </svg>
        <svg className="absolute bottom-8 right-[18%] w-[80px] h-[70px] text-blue-400/[0.11]" viewBox="0 0 80 70" fill="currentColor">
            {Array.from({ length: 4 }).map((_, col) =>
                Array.from({ length: 3 }).map((_, row) => (
                    <circle key={`dr-${col}-${row}`} cx={10 + col * 20} cy={12 + row * 22} r={2} />
                ))
            )}
        </svg>
        <svg className="absolute bottom-2 left-[38%] w-[120px] h-[110px] text-slate-400/[0.07]" viewBox="0 0 120 120" fill="none" stroke="currentColor">
            <rect x="20" y="20" width="80" height="80" strokeWidth="1.4" transform="rotate(45 60 60)" />
            <rect x="35" y="35" width="50" height="50" strokeWidth="1" transform="rotate(45 60 60)" />
        </svg>
        <svg className="absolute top-[15%] left-[31%] w-[40px] h-[60px] text-blue-400/[0.10]" viewBox="0 0 40 60" fill="none" stroke="currentColor">
            <line x1="20" y1="0" x2="20" y2="60" strokeWidth="1.2" />
            <circle cx="20" cy="15" r="4" strokeWidth="1" />
            <circle cx="20" cy="45" r="4" strokeWidth="1" />
        </svg>
        <svg className="absolute top-[20%] left-[64%] w-[40px] h-[50px] text-indigo-400/[0.10]" viewBox="0 0 40 50" fill="none" stroke="currentColor">
            <rect x="8" y="8" width="24" height="24" strokeWidth="1" transform="rotate(45 20 20)" />
            <circle cx="20" cy="40" r="3" strokeWidth="1" />
        </svg>
    </div>
)

// Helper hook to get current language
function useLang() {
    const pathname = usePathname()
    return getLocaleFromPathname(pathname)
}

// Simple inline translator: returns TR or EN text
function t(lang: string, tr: string, en: string) {
    return lang === 'eng' ? en : tr
}

function lh(lang: string, path: string) {
    return localizedHref(lang as Locale, path)
}

export const ServicesMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
    const lang = useLang()
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={STYLES.megaMenuWrapper}
            role="menu"
            aria-label={t(lang, "Hizmetler menüsü", "Services menu")}
        >
            <div className="grid grid-cols-3">
                {/* Column 1: Software Development */}
                <div className="bg-blue-50/40 p-10 border-r border-slate-200/80 flex flex-col relative">
                    <h3 className={STYLES.columnHeader}>{t(lang, "Yazılım Geliştirme", "Software Development")}</h3>
                    <div className="space-y-6">
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#development-services')} className="group flex items-center gap-3">
                            <Layers className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-blue-600 transition-colors">{t(lang, "Yazılım Geliştirme Hizmetleri", "Software Development Services")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#ai')} className="group flex items-center gap-3">
                            <Cpu className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-amber-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-amber-600 transition-colors">{t(lang, "Yapay Zekâ & AI-First Mimari Çözümleri", "AI & AI-First Architectural Solutions")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#modernization')} className="group flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-cyan-600 transition-colors">{t(lang, "Yazılım Modernizasyonu & Mikroservis Dönüşümü", "Software Modernization & Microservices")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#bigdata')} className="group flex items-center gap-3">
                            <Database className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-indigo-600 transition-colors">{t(lang, "Büyük Veri & Gerçek Zamanlı Veri İşleme", "Big Data & Real-Time Processing")}</h4>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Sectoral Solutions */}
                <div className="bg-white p-10 border-r border-slate-200/80 flex flex-col relative">
                    <h3 className={STYLES.columnHeader}>{t(lang, "SEKTÖREL YAZILIM ÇÖZÜMLERİ", "SECTORAL SOFTWARE SOLUTIONS")}</h3>
                    <div className="space-y-6">
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#banking')} className="group flex items-center gap-3">
                            <Landmark className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-emerald-600 transition-colors">{t(lang, "Bankacılık & Finansal Sistemler", "Banking & Financial Systems")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#trading')} className="group flex items-center gap-3">
                            <TrendingUp className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-sky-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-sky-600 transition-colors">{t(lang, "E-Trading & Market Data & Düşük Gecikmeli Sistemler", "E-Trading & Market Data & Low-Latency Systems")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#telecom')} className="group flex items-center gap-3">
                            <Radio className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-violet-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-violet-600 transition-colors">{t(lang, "Telekom & Dijital İletişim Platformları", "Telecom & Digital Communication Platforms")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/software-development#fraud')} className="group flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-rose-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-rose-600 transition-colors">{t(lang, "Fraud & Risk & AI Destekli Doğrulama Sistemleri", "Fraud & Risk & AI-Supported Verification Systems")}</h4>
                        </Link>
                    </div>
                </div>

                {/* Column 3: Technology Services */}
                <div className="bg-[#f8f9fa] p-10 flex flex-col relative">
                    <h3 className={STYLES.columnHeader}>{t(lang, "Teknoloji Servisleri", "Technology Services")}</h3>
                    <div className="space-y-6">
                        <Link onClick={closeMenu} href={lh(lang, '/services/managed-services#p1')} className="group flex items-center gap-3">
                            <Server className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-emerald-600 transition-colors">{highlightAI(t(lang, "MSP & AIOps", "MSP & AIOps"))}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/managed-services#p2')} className="group flex items-center gap-3">
                            <Cpu className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-sky-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-sky-600 transition-colors">{t(lang, "Teknoloji Danışmanlığı", "Technology Consulting")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/managed-services#p3')} className="group flex items-center gap-3">
                            <RefreshCw className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-indigo-600 transition-colors">{t(lang, "Süreç Danışmanlığı", "Process Consulting")}</h4>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/services/managed-services#p4')} className="group flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-purple-600 transition-colors" />
                            <h4 className="font-bold text-slate-900 text-[15px] leading-tight group-hover:text-purple-600 transition-colors">{t(lang, "Uyumluluk, Güvenlik & IT Olgunluk", "Compliance, Security & IT Maturity")}</h4>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
        </motion.div>
    )
}

export const IndustriesMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
    const lang = useLang()
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={STYLES.megaMenuWrapper}
            role="menu"
            aria-label={t(lang, "Sektörler menüsü", "Industries menu")}
        >
            <div className="flex">
                <div className="w-[50%] bg-blue-50/50 p-10 border-r border-blue-100 flex flex-col justify-start">
                    <h3 className={STYLES.columnHeader}>{t(lang, "KURUMSAL & SAVUNMA", "ENTERPRISE & DEFENSE")}</h3>
                    <div className="space-y-6">
                        <Link onClick={closeMenu} href={lh(lang, '/industries/banking')} className={STYLES.linkGroup}>
                            <Globe className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1"><h4 className={STYLES.itemTitle}>{t(lang, "Bankacılık & Finans", "Banking & Finance")}</h4><p className={STYLES.itemDesc}>{t(lang, "Dijital kanallar ve regülasyon uyumu için uçtan uca çözümler.", "End-to-end solutions for digital channels and regulatory compliance.")}</p></div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/industries/defense')} className={STYLES.linkGroup}>
                            <Shield className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1"><h4 className={STYLES.itemTitle}>{t(lang, "Savunma Sanayi", "Defense Industry")}</h4><p className={STYLES.itemDesc}>{t(lang, "Komuta kontrol yazılımları, test ve analizleri.", "Command control software, testing and analysis.")}</p></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-[50%] bg-[#f8f9fa] p-10 flex flex-col justify-start">
                    <h3 className={STYLES.columnHeader}>{t(lang, "TİCARİ & TELEKOM", "COMMERCIAL & TELECOM")}</h3>
                    <div className="space-y-6">
                        <Link onClick={closeMenu} href={lh(lang, '/industries/telecommunications')} className={STYLES.linkGroup}>
                            <Server className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1"><h4 className={STYLES.itemTitle}>{t(lang, "Telekomünikasyon & Teknoloji", "Telecommunications & Technology")}</h4><p className={STYLES.itemDesc}>{t(lang, "OSS/BSS ve dijital kanal platformlarında 7/24 erişilebilirlik.", "24/7 availability on OSS/BSS and digital channel platforms.")}</p></div>
                            </div>
                        </Link>
                        <Link onClick={closeMenu} href={lh(lang, '/industries/retail')} className={STYLES.linkGroup}>
                            <ShoppingBag className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1"><h4 className={STYLES.itemTitle}>{t(lang, "Perakende & E-Ticaret", "Retail & E-Commerce")}</h4><p className={STYLES.itemDesc}>{t(lang, "Omnichannel yapılar ve yüksek hacimli işlem yönetimi.", "Omnichannel structures and high-volume transaction management.")}</p></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export const ProductsMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
    const lang = useLang()
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={STYLES.megaMenuWrapper}
            role="menu"
            aria-label={t(lang, "Ürünler menüsü", "Products menu")}
        >
            <div className="relative">
                <ProductsBackgroundPattern />
                <div className="grid grid-cols-2 relative z-10">
                    <div className="bg-blue-50/50 p-10 border-r border-b border-blue-100 flex flex-col justify-start">
                        <h3 className={STYLES.columnHeader}>{t(lang, "AI & OTOMASYON", "AI & AUTOMATION")}</h3>
                        <Link onClick={closeMenu} href={lh(lang, '/products/cortex')} className={STYLES.linkGroup}>
                            <Cpu className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>CORTEX</h4>
                                    <p className={STYLES.itemDesc}>{t(lang, "Yazılım yaşam döngüsünü uçtan uca otomatikleştiren AI agent platformu; kod üretimi, test, dokümantasyon ve operasyon süreçlerini hızlandırır.", "AI agent platform that automates the entire software lifecycle end-to-end; accelerates code generation, testing, documentation, and operations.")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#f8f9fa] p-10 border-b border-slate-100 flex flex-col justify-start">
                        <h3 className={STYLES.columnHeader}>{t(lang, "İNSAN KAYNAKLARI", "HUMAN RESOURCES")}</h3>
                        <Link onClick={closeMenu} href={lh(lang, '/products/hcm')} className={STYLES.linkGroup}>
                            <Briefcase className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>{t(lang, "HCM Platformu", "HCM Platform")}</h4>
                                    <p className={STYLES.itemDesc}>{t(lang, "Bordro, özlük, izin, performans ve yetenek yönetimini tek çatı altında toplayan, İK operasyonlarınızı uçtan uca dijitalleştiren bütünleşik HCM çözümü.", "Integrated HCM solution that unifies payroll, personnel, leave, performance and talent management; digitalizing HR operations end-to-end.")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-[#f8f9fa] p-10 border-r border-slate-100 flex flex-col justify-start">
                        <h3 className={STYLES.columnHeader}>{t(lang, "OPERASYON & OTOMASYON", "OPERATIONS & AUTOMATION")}</h3>
                        <Link onClick={closeMenu} href={lh(lang, '/products/praxila')} className={STYLES.linkGroup}>
                            <Activity className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>PRAXILLA</h4>
                                    <p className={STYLES.itemDesc}>{t(lang, "Süreç otomasyonu, iş akışı yönetimi ve operasyonel görünürlüğü tek platformda birleştiren yeni nesil otomasyon ve operasyon yönetimi çözümü.", "Next-generation automation and operations management platform that unifies process automation, workflow management and operational visibility in a single platform.")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="bg-blue-50/50 p-10 border-blue-100 flex flex-col justify-start">
                        <h3 className={STYLES.columnHeader}>{t(lang, "TOPLANTI & BİLGİ YÖNETİMİ", "MEETING & KNOWLEDGE")}</h3>
                        <Link onClick={closeMenu} href={lh(lang, '/products/meetsense')} className={STYLES.linkGroup}>
                            <Mic className={STYLES.iconContainer} />
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h4 className={STYLES.itemTitle}>MEETSENSE</h4>
                                    <p className={STYLES.itemDesc}>{t(lang, "Toplantıları AI ile kayıt altına alan; özet, aksiyon ve karar üreterek kurumsal hafızaya dönüştüren akıllı toplantı asistanı.", "Smart meeting assistant that records meetings with AI; produces summaries, actions and decisions, turning them into corporate memory.")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />
        </motion.div>
    )
}

export const ResourcesMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
    const lang = useLang()
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn(STYLES.megaMenuWrapper, "p-6")}
            role="menu"
            aria-label={t(lang, "Bilgi merkezi menüsü", "Knowledge center menu")}
        >
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[540px]">

                {/* LEFT COLUMN: Full-height Event Card */}
                <Link
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7449781930562101248"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900 shadow-lg ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/40"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/images/events/ebintec-2026.jpg"
                            alt={t(lang, "BİLGİ MERKEZİ", "KNOWLEDGE CENTER")}
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100 group-hover:blur-[1px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>

                    <div className="relative h-full flex flex-col justify-between p-6 z-10 event-card-hover">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-rose-500/80 shadow-lg flex items-center justify-center border border-rose-400">
                                <Calendar className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-bold text-white drop-shadow-md tracking-widest uppercase">{t(lang, "Gerçekleşen Etkinlik", "Past Event")}</span>
                        </div>

                        <div className="mt-auto p-2 event-card-hover">
                            <h3 className="text-2xl font-black text-white mb-3 leading-tight [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
                                EBINTEC BANKING INNOVATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">CONFERENCE</span>
                            </h3>
                            <p className="text-slate-200 text-sm mb-3 leading-relaxed line-clamp-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
                                {t(
                                    lang,
                                    "Ana sponsor olarak yer aldığımız etkinlikte, finans sektörünün dönüşümüne dair güncel içgörüleri paylaştık.",
                                    "As the main sponsor of the event, we shared up-to-date insights on the transformation of the finance sector."
                                )}
                            </p>
                            <p className="text-slate-200 text-sm font-bold flex items-center gap-2 group-hover:-translate-y-1 transition-transform [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
                                <span className="bg-white/20 px-2 py-1 rounded text-white backdrop-blur-sm">{t(lang, "14 Nisan", "April 14")}</span>
                                <span>İstanbul</span>
                            </p>
                            {/* Makaleler link — below date */}
                            <div
                                role="link"
                                tabIndex={0}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    closeMenu?.();
                                    window.location.href = lh(lang, '/resources/articles');
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        closeMenu?.();
                                        window.location.href = lh(lang, '/resources/articles');
                                    }
                                }}
                                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-900 transition-all cursor-pointer group/articles bg-white px-3.5 py-1.5 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 hover:scale-105 duration-300 ring-1 ring-white/50 w-fit"
                            >
                                <FileText className="w-3.5 h-3.5" />
                                <span>{t(lang, "Etkinlik Makaleleri", "Event Articles")}</span>
                            </div>

                        </div>
                    </div>
                </Link>

                {/* CARD 2: Success Stories */}
                <Link href={lh(lang, '/resources/success-stories')} onClick={closeMenu}
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                    <motion.div
                        className="flex flex-col justify-between h-full"
                        animate="initial"
                        whileHover="hover"
                        initial={false}
                    >
                        <motion.div
                            variants={{
                                hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
                            }}
                        >
                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } }
                                }}
                            >
                                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-white">
                                    <Quote className="w-5 h-5 fill-current" />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } }
                                }}
                            >
                                <h4 className="text-xl font-bold text-white mb-1">{t(lang, "Başarı Hikayeleri", "Success Stories")}</h4>
                            </motion.div>
                            <motion.div
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } }
                                }}
                            >
                                <p className="text-pink-100 text-xs line-clamp-2">{t(lang, "Gerçek projeler, ölçülebilir sonuçlar ve başarıyla tamamlanan dönüşüm hikayeleri.", "Real projects, measurable results and successfully completed transformation stories.")}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="mt-4 flex -space-x-3 items-center"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const, delay: 0.3 } }
                            }}
                        >
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-pink-500 bg-white shadow-sm overflow-hidden relative">
                                    <Image src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="User" fill className="object-cover" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-pink-500 bg-white/20 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-white">+12</div>
                        </motion.div>
                    </motion.div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                </Link>

                {/* CARD 3: LinkedIn */}
                <Link href="https://www.linkedin.com/company/bilgeadam/" target="_blank" onClick={closeMenu}
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-[#0077b5] p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                    <motion.div
                        className="relative z-10 flex flex-col justify-between h-full"
                        animate="initial"
                        whileHover="hover"
                        initial={false}
                    >
                        <motion.div
                            variants={{
                                hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
                            }}
                        >
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <Linkedin className="w-12 h-12 text-white mb-3" />
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <h4 className="font-bold text-white text-lg">{t(lang, "Bizi Takip Edin", "Follow Us")}</h4>
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <p className="text-blue-100 text-xs mt-1 mb-4">{t(lang, "Teknoloji, etkinlikler ve güncel gelişmelerden haberdar olun.", "Stay informed about technology, events and current developments.")}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const, delay: 0.3 } }
                            }}
                        >
                            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold group-hover:bg-white group-hover:text-[#0077b5] transition-colors">@bgts</span>
                        </motion.div>
                    </motion.div>
                </Link>

                {/* CARD 4: Business Partners */}
                <Link href={lh(lang, '/partnerships')} onClick={closeMenu}
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-slate-900 border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-slate-600 flex flex-col justify-between p-6">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-700/30 rounded-full blur-2xl group-hover:bg-slate-600/40 transition-colors"></div>
                    <motion.div
                        className="relative z-10 flex flex-col justify-between h-full"
                        animate="initial"
                        whileHover="hover"
                        initial={false}
                    >
                        <motion.div
                            variants={{
                                hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
                            }}
                        >
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-300 mb-3 group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300 shadow-sm border border-slate-700 group-hover:border-white">
                                    <Layers className="w-5 h-5" />
                                </div>
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <h4 className="font-bold text-white">{t(lang, "İş Ortakları", "Business Partners")}</h4>
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <p className="text-slate-400 text-xs mt-1">{t(lang, "Güçlü iş ortaklıklarıyla oluşturduğumuz teknoloji ekosistemi.", "Technology ecosystem built through strong partnerships.")}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="mt-4 flex items-center text-xs font-bold text-slate-300 group-hover:text-white relative z-10"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const, delay: 0.3 } }
                            }}
                        >
                            {t(lang, "İncele", "Explore")} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </motion.div>
                </Link>

                {/* CARD 5: Infographics */}
                <Link href={lh(lang, '/resources/infographics')} onClick={closeMenu}
                    className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 border border-indigo-400/50 p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                    <BackgroundPattern />
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BarChart3 className="w-24 h-24 text-white" />
                    </div>
                    <motion.div
                        className="relative z-10 flex flex-col justify-between h-full"
                        animate="initial"
                        whileHover="hover"
                        initial={false}
                    >
                        <motion.div
                            variants={{
                                hover: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
                            }}
                        >
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform backdrop-blur-sm shadow-inner shadow-white/20 border border-white/10">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <h4 className="font-bold text-white">{t(lang, "İnfografikler", "Infographics")}</h4>
                            </motion.div>
                            <motion.div variants={{ initial: { y: 0 }, hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const } } }}>
                                <p className="text-indigo-100 text-xs mt-1">{t(lang, "Sektörel veriler, içgörüler ve trend analizleri.", "Industry data, insights and trend analyses.")}</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="mt-4 flex items-center text-xs font-bold text-white relative z-10"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" as const, delay: 0.3 } }
                            }}
                        >
                            {t(lang, "İncele", "Explore")} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </motion.div>
                </Link>

            </div>

        </motion.div>
    )
}

export const CareersMenu = ({ closeMenu }: { closeMenu?: () => void }) => {
    const lang = useLang()
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn(STYLES.megaMenuWrapper, "p-5")}
            role="menu"
            aria-label={t(lang, "Kariyer menüsü", "Careers menu")}
        >
            <div className="grid grid-cols-5 gap-4 h-[400px]">

                {/* CARD 1: CULTURE - Hero Card */}
                <Link href={lh(lang, '/culture')} onClick={closeMenu}
                    className="col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                    <Image src="/images/headers/bgts-hakkimizda-ekip.jpg" alt="Culture" fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    <div className="relative h-full flex flex-col justify-between p-7 z-10">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                                <Smile className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-[10px] font-black text-white/70 tracking-[0.2em] uppercase">{t(lang, "Yaşam & Kültür", "Life & Culture")}</span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                                {t(lang, "Birlikte", "Growing")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">{t(lang, "Büyüyoruz", "Together")}</span>
                            </h3>
                            <p className="text-white/60 text-xs leading-relaxed mb-5 max-w-[280px]">
                                {t(lang, "Ortak değerler, güçlü ekip ruhu ve sürekli gelişim. Geleceği birlikte inşa ediyoruz.", "Shared values, strong team spirit and continuous development. We build the future together.")}
                            </p>
                            <div className="inline-flex items-center gap-2 bg-white text-slate-900 pl-4 pr-3 py-2 rounded-full font-bold text-xs hover:bg-amber-50 transition-all group-hover:gap-3">
                                {t(lang, "Keşfet", "Explore")} <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    </div>
                </Link>

                {/* MIDDLE COLUMN - 3 Stacked Cards */}
                <div className="col-span-2 flex flex-col gap-3">

                    <Link href={lh(lang, '/career-paths')} onClick={closeMenu}
                        className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-violet-200">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-800 text-sm">{t(lang, "Kariyer Yolları", "Career Paths")}</h4>
                            <p className="text-slate-500 text-xs mt-0.5 leading-snug">{t(lang, "Potansiyelinizi ortaya çıkaran net ve şeffaf kariyer haritaları.", "Clear career maps that unlock your potential.")}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-violet-300 group-hover:text-violet-600 transition-colors shrink-0" />
                    </Link>

                    <Link href={lh(lang, '/learning')} onClick={closeMenu}
                        className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-800 text-sm">{t(lang, "Eğitim ve Sürekli Gelişim", "Training & Continuous Development")}</h4>
                            <p className="text-slate-500 text-xs mt-0.5 leading-snug">{t(lang, "Sürekli öğrenme ve gelişim fırsatları.", "Continuous learning and development opportunities.")}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                    </Link>

                    <Link href={lh(lang, '/social-contribution')} onClick={closeMenu}
                        className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100/80 p-5 flex items-center gap-5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-rose-200">
                            <Heart className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-800 text-sm">{t(lang, "Sürdürülebilir Değer Programı", "Sustainable Value Program")}</h4>
                            <p className="text-slate-500 text-xs mt-0.5 leading-snug">{t(lang, "Eğitim, sürdürülebilirlik ve sosyal sorumluluk projelerimiz.", "Our education, sustainability and social responsibility projects.")}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-rose-300 group-hover:text-rose-600 transition-colors shrink-0" />
                    </Link>
                </div>

                {/* CTA CARD: Join Us */}
                <Link href="https://www.linkedin.com/company/bilgeadam/jobs/" target="_blank" onClick={closeMenu}
                    className="col-span-1 relative group overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">
                    <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-white/10 rounded-full" />
                    <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white/5 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />

                    <div className="relative z-10 flex flex-col items-center px-4">
                        <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 text-white transition-all group-hover:scale-110">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-white text-lg leading-tight">{t(lang, "Aramıza", "Join")}<br />{t(lang, "Katıl!", "Us!")}</h4>
                        <p className="text-blue-200 text-[11px] mt-2 mb-4 leading-snug">{t(lang, "Açık pozisyonları", "Explore open")}<br />{t(lang, "incele", "positions")}</p>
                        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-[11px] font-bold border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-all">
                            LinkedIn <ArrowUpRight className="w-3 h-3" />
                        </div>
                    </div>
                </Link>

            </div>
        </motion.div>
    )
}
