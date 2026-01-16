"use client"

import Hero from "@/components/ui/Hero"
import ContentSection from "@/components/ui/ContentSection"
import Breadcrumb from "@/components/ui/Breadcrumb"
import { Shield, ShieldAlert, Lock, Radio, Crosshair, Server, Eye, FileCheck, CheckCircle2, ChevronDown, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function DefensePage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Breadcrumb
                    items={[
                        { label: "Sektörler", href: "/industries", icon: Shield },
                        { label: "Savunma Sanayi", href: "/industries/defense", icon: ShieldAlert }
                    ]}
                />

                <Hero
                    title="Milli Savunma İçin Kritik Teknolojiler"
                    subtitle="TSK ve savunma sanayi ekosistemi için yerli, güvenli ve yüksek performanslı yazılım çözümleri."
                    badge="Savunma & Havacılık"
                    className="bg-slate-900"
                    backgroundImage="/images/industries/defense-hero.png"
                />

                {/* Compliance Badges */}
                <Section className="bg-slate-50 border-b border-slate-200">
                    <Container>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {[
                                { icon: Shield, label: "Milli Gizli" },
                                { icon: Lock, label: "NATO Secret" },
                                { icon: FileCheck, label: "DO-178C" },
                                { icon: CheckCircle2, label: "ISO 27001" },
                            ].map((badge, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-full bg-slate-200 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                                        <badge.icon className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="font-bold text-slate-900">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Mission Critical Systems */}
                <ContentSection
                    title="Görev Kritik Sistemler"
                    badge="Mission Critical"
                    content={
                        <div className="space-y-6">
                            <Text variant="large">
                                Savunma sanayinin zorlu gereksinimlerine uygun, gerçek zamanlı (Real-Time) işletim sistemleri ve gömülü yazılım çözümleri geliştiriyoruz. <strong className="text-blue-700">Aviyonik sistemler</strong>, <strong className="text-blue-700">Komuta Kontrol (C4ISR)</strong> ve <strong className="text-blue-700">Simülasyon</strong> teknolojilerinde derin uzmanlığa sahibiz.
                            </Text>
                            <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-700 mt-6">
                                <Heading variant="h4" className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <Radio className="w-5 h-5 text-red-500 animate-pulse" />
                                    Operasyonel Üstünlük
                                </Heading>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                                        <Crosshair className="w-4 h-4 mt-1 text-blue-500" />
                                        Milisaniye hassasiyetinde tepki süreleri
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                                        <Shield className="w-4 h-4 mt-1 text-blue-500" />
                                        Siber tehditlere karşı maksimum direnç
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                                        <Server className="w-4 h-4 mt-1 text-blue-500" />
                                        %99.999 erişilebilirlik garantisi
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                    image={
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
                            <Image
                                src="https://images.unsplash.com/photo-1542289548-52cb2fead4cd?auto=format&fit=crop&q=80"
                                alt="Radar Interface"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
                            {/* HUD Effect */}
                            <div className="absolute inset-0 pointer-events-none border-[20px] border-transparent border-t-green-500/20 border-b-green-500/20"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-green-500/30 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                            </div>
                        </div>
                    }
                />

                {/* Detailed Capabilities - Accordion Style */}
                <Section className="bg-slate-900 text-white">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <Heading variant="h2" className="text-white mb-6">Teknolojik Yetkinlikler</Heading>
                                <Text className="text-slate-400 mb-8 leading-relaxed">
                                    Savunma sanayisinin tüm katmanlarında uçtan uca çözümler sunuyoruz. Veri analitiğinden otonom sistemlere kadar geniş bir yelpazede hizmet veriyoruz.
                                </Text>
                                <CapabilitiesAccordion />
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
                                        alt="Advanced Technology"
                                        width={600}
                                        height={800}
                                        className="w-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                                            Ar-Ge Odaklı
                                        </div>
                                        <Heading variant="h3" className="text-xl font-bold text-white">Geleceğin Savaş Sahası</Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Security Focus */}
                <Section>
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Heading variant="h2" className="mb-4">Önce Güvenlik</Heading>
                            Tüm süreçlerimizde &quot;Security by Design&quot; prensibini benimsiyoruz.
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Kriptoloji", desc: "Askeri standartlarda veri şifreleme ve güvenli iletişim protokolleri." },
                                { title: "Sızma Testleri", desc: "Düzenli red-teaming operasyonları ile sistem zafiyetlerinin tespiti." },
                                { title: "Güvenli Yazılım Yaşam Döngüsü", desc: "SSDLC süreçleri ile kodlama aşamasından itibaren güvenlik." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="w-16 h-16 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-6">
                                        <ShieldCheck className="w-8 h-8 text-slate-700" />
                                    </div>
                                    <Heading variant="h4" className="text-lg font-bold text-slate-900 mb-3">{item.title}</Heading>
                                    <Text variant="small" className="text-slate-500 leading-relaxed">{item.desc}</Text>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            </div>
        </>
    )
}

function CapabilitiesAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const items = [
        {
            title: "Komuta Kontrol Sistemleri",
            content: "C4ISR sistemleri için durumsal farkındalık, ortak harekat resmi oluşturma ve karar destek mekanizmaları geliştiriyoruz."
        },
        {
            title: "Simülasyon ve Eğitim",
            content: "Sanal ve artırılmış gerçeklik tabanlı eğitim simülatörleri, harp oyunları ve taktik eğitim sistemleri."
        },
        {
            title: "İnsansız Sistemler",
            content: "İHA/SİHA yer kontrol istasyonları, otonom uçuş algoritmaları ve görüntü işleme çözümleri."
        },
        {
            title: "Siber Güvenlik",
            content: "Ulusal siber güvenlik stratejilerine uygun, yerli güvenlik duvarı, IDPS ve SIEM çözümleri."
        }
    ]

    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <div key={i} className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800/50">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-white hover:bg-slate-700/50 transition-colors"
                    >
                        {item.title}
                        <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", openIndex === i ? "rotate-180" : "")} />
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
