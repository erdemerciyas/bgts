"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  X, ChevronDown, Phone, Mail,
  Database, Code, Cpu, RefreshCw, Layers,
  Landmark, TrendingUp, Radio, ShieldAlert,
  Server, Activity, Terminal, FileText,
  Globe, Shield, ShoppingBag,
  CheckCircle2, Briefcase, Bot, Mic,
  GraduationCap, Heart, Rocket, Smile,
  BarChart3, Linkedin
} from "lucide-react"

interface SubLink {
  title: string
  href: string
  icon: React.ElementType
}

interface SubGroup {
  heading: string
  links: SubLink[]
}

interface MobileNavSection {
  name: string
  id: string
  href?: string
  subGroups?: SubGroup[]
}

const MOBILE_NAV_DATA: MobileNavSection[] = [
  {
    name: "Hizmetler",
    id: "services",
    subGroups: [
      {
        heading: "Yazılım ve Teknoloji Servisleri",
        links: [
          { title: "Büyük Veri & Gerçek Zamanlı Veri İşleme", href: "/services/software-development#bigdata", icon: Database },
          { title: "Yapay Zekâ & AI-First Mimari", href: "/services/software-development#ai", icon: Cpu },
          { title: "Yazılım Modernizasyonu & Mikroservis", href: "/services/software-development#modernization", icon: RefreshCw },
          { title: "Yazılım Geliştirme Hizmetleri", href: "/services/software-development#development-services", icon: Layers },
        ]
      },
      {
        heading: "Sektörel Yazılım Çözümleri",
        links: [
          { title: "Bankacılık & Finansal Sistemler", href: "/services/software-development#banking", icon: Landmark },
          { title: "E-Trading & Market Data", href: "/services/software-development#trading", icon: TrendingUp },
          { title: "Telekom & Dijital İletişim", href: "/services/software-development#telecom", icon: Radio },
          { title: "Fraud & Risk & AI Doğrulama", href: "/services/software-development#fraud", icon: ShieldAlert },
        ]
      },
      {
        heading: "Yönetilen Hizmetler (MSP)",
        links: [
          { title: "Veri Merkezi Yönetimi", href: "/services/managed-services#data-center", icon: Server },
          { title: "7/24 İzleme & NOC", href: "/services/managed-services#monitoring", icon: Activity },
          { title: "Son Kullanıcı ve Cihaz Yönetimi", href: "/services/managed-services#desktop-support", icon: Terminal },
          { title: "ITSM as a Service", href: "/services/managed-services#itsm", icon: FileText },
          { title: "DevOps as a Service", href: "/services/managed-services#devops", icon: Code },
        ]
      }
    ]
  },
  {
    name: "Sektörler",
    id: "industries",
    subGroups: [
      {
        heading: "Kurumsal & Savunma",
        links: [
          { title: "Bankacılık & Finans", href: "/industries/banking", icon: Globe },
          { title: "Savunma Sanayi", href: "/industries/defense", icon: Shield },
        ]
      },
      {
        heading: "Ticari & Telekom",
        links: [
          { title: "Telekomünikasyon", href: "/industries/telecommunications", icon: Server },
          { title: "Perakende & E-Ticaret", href: "/industries/retail", icon: ShoppingBag },
        ]
      }
    ]
  },
  {
    name: "Ürünler",
    id: "products",
    subGroups: [
      {
        heading: "İşe Alım Teknolojileri",
        links: [
          { title: "AI Hiring Assistant", href: "/products/ai-hiring-assistant", icon: CheckCircle2 },
          { title: "CV-Converter", href: "/products/cv-converter", icon: FileText },
        ]
      },
      {
        heading: "Kurumsal Çözümler",
        links: [
          { title: "Cortex", href: "/products/cortex", icon: Cpu },
          { title: "HCM Platformu", href: "/products/hcm", icon: Briefcase },
          { title: "Praxila", href: "/products/praxila", icon: Activity },
          { title: "MeetSense", href: "/products/meetsense", icon: Mic },
        ]
      },
      {
        heading: "Doküman & Bilgi Yönetimi",
        links: [
          { title: "Doc2Bot", href: "/products/doc2bot", icon: Bot },
          { title: "DocMind", href: "/products/docmind", icon: Code },
        ]
      }
    ]
  },
  {
    name: "Genç Mühendisler",
    id: "talent",
    href: "/genc-muhendis-programi",
    subGroups: [
      {
        heading: "Programlar",
        links: [
          { title: "Yazılımcı Yetiştirme", href: "/genc-muhendis-programi#track-software", icon: Code },
          { title: "Altyapı Teknolojileri", href: "/genc-muhendis-programi#track-infrastructure", icon: Server },
          { title: "Test ve Analist", href: "/genc-muhendis-programi#track-test", icon: BarChart3 },
          { title: "Başvuru Yap", href: "/genc-muhendis-programi#application-form", icon: GraduationCap },
        ]
      }
    ]
  },
  {
    name: "Bilgi Merkezi",
    id: "resources",
    subGroups: [
      {
        heading: "Kaynaklar",
        links: [
          { title: "Başarı Hikayeleri", href: "/resources/success-stories", icon: Heart },
          { title: "İnfografikler", href: "/resources/infographics", icon: BarChart3 },
          { title: "İş Ortakları", href: "/partnerships", icon: Layers },
          { title: "LinkedIn", href: "https://www.linkedin.com/company/bilgeadam/", icon: Linkedin },
        ]
      }
    ]
  },
  {
    name: "Yerini Al",
    id: "careers",
    subGroups: [
      {
        heading: "Yaşam & Kariyer",
        links: [
          { title: "Kültür", href: "/culture", icon: Smile },
          { title: "Kariyer Yolları", href: "/career-paths", icon: Rocket },
          { title: "Eğitim ve Gelişim", href: "/learning", icon: GraduationCap },
          { title: "Sürdürülebilir Değer Programı", href: "/social-contribution", icon: Heart },
        ]
      }
    ]
  },
]

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href?: string; id?: string }>
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null)

  const toggleSection = (id: string) => {
    setExpandedSection(prev => prev === id ? null : id)
  }

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
      setExpandedSection(null)
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[59] lg:hidden"
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-[380px] bg-white z-[60] lg:hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="h-[72px] flex items-center justify-between px-5 border-b border-gray-100 shrink-0">
              <div className="relative w-28 h-9">
                <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" />
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Menüyü kapat"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <nav className="py-3">
                {MOBILE_NAV_DATA.map((section) => {
                  const isExpanded = expandedSection === section.id
                  const hasSubGroups = section.subGroups && section.subGroups.length > 0

                  return (
                    <div key={section.id} className="border-b border-gray-50 last:border-0">
                      {/* Section Header - Accordion Trigger */}
                      <button
                        onClick={() => hasSubGroups ? toggleSection(section.id) : undefined}
                        className="w-full flex items-center justify-between px-5 py-4 text-left group"
                      >
                        <span className="text-[15px] font-bold text-slate-800 tracking-wide">
                          {section.name}
                        </span>
                        {hasSubGroups && (
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center"
                          >
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          </motion.div>
                        )}
                      </button>

                      {/* Expandable Sub-links */}
                      <AnimatePresence initial={false}>
                        {isExpanded && hasSubGroups && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 space-y-5">
                              {section.subGroups!.map((group, gIdx) => (
                                <div key={gIdx}>
                                  <p className="text-[11px] font-extrabold text-slate-400 tracking-[0.15em] uppercase mb-3 px-1">
                                    {group.heading}
                                  </p>
                                  <div className="space-y-1">
                                    {group.links.map((link, lIdx) => {
                                      const Icon = link.icon
                                      const isExternal = link.href.startsWith("http")
                                      return (
                                        <Link
                                          key={lIdx}
                                          href={link.href}
                                          onClick={onClose}
                                          target={isExternal ? "_blank" : undefined}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors group"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center shrink-0 transition-colors">
                                            <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                                          </div>
                                          <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                                            {link.title}
                                          </span>
                                        </Link>
                                      )
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>

              {/* Quick Links */}
              <div className="px-5 py-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/about"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-bold text-slate-700">Hakkımızda</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span className="text-sm font-bold text-white">İletişim</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar - Contact Info */}
            <div className="shrink-0 border-t border-gray-100 px-5 py-4 bg-slate-50">
              <div className="flex items-center justify-between">
                <a href="tel:+902123456789" className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span>İletişim</span>
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/company/bilgeadam/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                    <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                  <a href="mailto:info@bgts.com.tr" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
