"use client"

import { useState, useRef } from "react"
import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { ContactForm } from "@/components/forms/ContactForm"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Globe, Award, ShieldCheck, Lightbulb,
    Building2, CheckCircle2, MapPin, ArrowRight, Mail, Phone
} from "lucide-react"

const offices = [
    { id: "istanbul", city: "İstanbul", country: "Türkiye", address: "İTU Teknokent Arı 3 B3 Katar Caddesi İstanbul 34467", email: "info-tr@bgts.com", phone: "+90 444 3330", x: 55.92, y: 27.01, type: "office" as const },
    { id: "ankara", city: "Ankara", country: "Türkiye", address: "Üniversiteler Mah. Şehit Mustafa Tayyarcan Cad. No: 91 Çankaya/Ankara", email: "info-tr@bgts.com", phone: "+90 444 3330", x: 57.41, y: 28.53, type: "office" as const },
    { id: "london", city: "Londra", country: "Birleşik Krallık", address: "180 Strand London WC2R 1EA", email: "info-uk@bgts.com", phone: "+44 (845) 5947971", x: 45.02, y: 19.89, type: "office" as const },
    { id: "sheffield", city: "Sheffield", country: "Birleşik Krallık", address: "Pennine 5, 1 Tenter Street, Block 2, S1 4BY", email: "info-uk@bgts.com", phone: "+44 (845) 5947971", x: 44.22, y: 17.78, type: "office" as const },
    { id: "dusseldorf", city: "Düsseldorf", country: "Almanya", address: "Neubrückstr. 1 40213 Düsseldorf", email: "info-de@bgts.com", phone: "+49 (211) 90760230", x: 47.01, y: 22.01, type: "office" as const },
    { id: "amsterdam", city: "Amsterdam", country: "Hollanda", address: "Gustav Mahlerplein 2, 1082 MA, Amsterdam (Zuidas)", email: "info-nl@bgts.com", phone: "+31 20 3691184", x: 46.32, y: 20.22, type: "office" as const },
]

const deliveryCenters = [
    { id: "polonya", city: "Polonya", x: 51.92, y: 19.71 },
    { id: "macaristan", city: "Macaristan", x: 52.42, y: 22.51 },
    { id: "sirbistan", city: "Sırbistan", x: 53.62, y: 23.51 },
    { id: "hindistan", city: "Hindistan", x: 71.12, y: 49.61 },
    { id: "kirgizistan", city: "Kırgızistan", x: 68.3, y: 29.21 },
    { id: "ozbekistan", city: "Özbekistan", x: 65.5, y: 28.41 },
    { id: "azerbaycan", city: "Azerbaycan", x: 62.12, y: 29.81 },
    { id: "gurcistan", city: "Gürcistan", x: 60.82, y: 27.41 },
    { id: "estonya", city: "Estonya", x: 53.72, y: 17.11 },
    { id: "cekya", city: "Çekya", x: 49.52, y: 20.11 },
    { id: "avusturya", city: "Avusturya", x: 50.12, y: 22.11 },
    { id: "arnavutluk", city: "Arnavutluk", x: 52.82, y: 26.31 },
    { id: "bulgaristan", city: "Bulgaristan", x: 54.62, y: 25.51 },
    { id: "ispanya", city: "İspanya", x: 44.12, y: 27.11 },
    { id: "romanya", city: "Romanya", x: 54.42, y: 22.11 },
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}
function LocationsMap() {
    const [activeId, setActiveId] = useState<string | null>(null)
    const cardContainerRef = useRef<HTMLDivElement>(null)

    const scrollToCard = (id: string) => {
        setActiveId(id)
        const card = document.getElementById(`office-card-${id}`)
        if (card && cardContainerRef.current) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
        }
    }

    return (
        <Section className="bg-[#0B1628] text-white relative overflow-hidden py-20">
            <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3 block">Küresel Varlık</span>
                    <Heading variant="h2" className="mb-4 !text-3xl md:!text-4xl !font-bold text-white">
                        Konumlar
                    </Heading>
                    <Text className="text-slate-400 text-lg max-w-2xl">
                        BGTS&apos;in İngiltere, Avrupa ve Türkiye&apos;de toplam 8 ofisi bulunmaktadır. Bu ofislere ek olarak, birçok stratejik konumda hizmet noktalarımız yer almaktadır.
                    </Text>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
                >
                    <Image
                        src="/images/bgts-map.png"
                        alt="BGTS Dünya Haritası"
                        width={2023}
                        height={844}
                        className="w-full h-auto"
                    />

                    {/* Office Pins */}
                    {offices.map((office) => (
                        <button
                            key={office.id}
                            onClick={() => scrollToCard(office.id)}
                            className="absolute group cursor-pointer"
                            style={{ left: `${office.x}%`, top: `${office.y}%`, transform: "translate(-50%, -50%)" }}
                            aria-label={office.city}
                        >
                            {/* Pulse ring for active pin */}
                            {activeId === office.id && (
                                <span className="absolute inset-0 w-8 h-8 -ml-2 -mt-2 rounded-full bg-green-400/30 animate-ping" />
                            )}
                            <span className={`block w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${activeId === office.id
                                ? "bg-green-400 scale-150 shadow-green-400/50"
                                : "bg-yellow-400 group-hover:bg-green-400 group-hover:scale-125"
                                }`} />
                            {/* Tooltip */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-slate-900/95 border border-slate-600 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                                <span className="font-bold">{office.city}</span>
                                <br />
                                <span className="text-slate-400">{office.country} • Ofis</span>
                            </span>
                        </button>
                    ))}

                    {/* Delivery Center Pins */}
                    {deliveryCenters.map((dc) => (
                        <button
                            key={dc.id}
                            onClick={() => setActiveId(dc.id)}
                            className="absolute group cursor-pointer"
                            style={{ left: `${dc.x}%`, top: `${dc.y}%`, transform: "translate(-50%, -50%)" }}
                            aria-label={dc.city}
                        >
                            {activeId === dc.id && (
                                <span className="absolute inset-0 w-6 h-6 -ml-1 -mt-1 rounded-full bg-cyan-400/30 animate-ping" />
                            )}
                            <span className={`block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent transition-all duration-300 ${activeId === dc.id
                                ? "border-b-cyan-400 scale-150"
                                : "border-b-white/70 group-hover:border-b-cyan-400 group-hover:scale-125"
                                }`} />
                            {/* Tooltip */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-slate-900/95 border border-slate-600 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                                <span className="font-bold">{dc.city}</span>
                                <br />
                                <span className="text-slate-400">Hizmet Noktası</span>
                            </span>
                        </button>
                    ))}

                    {/* Office Cards Overlay — sits on bottom of map */}
                    <div className="absolute bottom-0 left-0 right-0 z-20">
                        <div className="bg-gradient-to-t from-[#0B1628] via-[#0B1628]/90 to-transparent pt-16 pb-4 px-4">
                            <div
                                ref={cardContainerRef}
                                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 map-scrollbar"
                            >
                                {offices.map((office) => (
                                    <div
                                        key={office.id}
                                        id={`office-card-${office.id}`}
                                        onClick={() => setActiveId(office.id)}
                                        className={`snap-start shrink-0 w-[260px] rounded-xl p-4 cursor-pointer transition-all duration-300 border backdrop-blur-md ${activeId === office.id
                                            ? "bg-slate-700/70 border-cyan-500/50 shadow-[0_0_30px_rgba(0,180,216,0.15)]"
                                            : "bg-slate-800/60 border-slate-700/40 hover:bg-slate-800/80 hover:border-slate-500"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <Globe className="w-3.5 h-3.5 text-slate-500" />
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{office.country}</span>
                                        </div>
                                        <div className="border-b border-slate-700/50 mb-2" />
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                                            <h4 className="text-base font-bold text-white">{office.city}</h4>
                                        </div>
                                        <p className="text-[12px] text-slate-400 leading-relaxed mb-2">{office.address}</p>
                                        <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 text-[12px] text-blue-400 hover:text-blue-300 transition-colors mb-0.5">
                                            <Mail className="w-3 h-3" /> {office.email}
                                        </a>
                                        <a href={`tel:${office.phone}`} className="flex items-center gap-1.5 text-[12px] text-blue-400 hover:text-blue-300 transition-colors">
                                            <Phone className="w-3 h-3" /> {office.phone}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Delivery Center List */}
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2 self-center">Hizmet Noktaları:</span>
                    {deliveryCenters.map((dc) => (
                        <button
                            key={dc.id}
                            onClick={() => setActiveId(dc.id)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${activeId === dc.id
                                ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                                : "bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500 hover:text-slate-300"
                                }`}
                        >
                            {dc.city}
                        </button>
                    ))}
                </div>
            </Container>
        </Section>
    )
}

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* ═══ HERO ═══ */}
            <Hero
                title="Hakkımızda"
                subtitle="Bizi biz yapan kültürümüzden besleniyor, eklektik yapımızla inovasyonu harmanlayarak bilgi okyanusunda emin adımlarla rotamızı çiziyoruz."
                backgroundImage="/images/headers/bgts-hakkimizda-ekip.jpg"
                className="bg-slate-900"
            />


            {/* ═══ FLOATING STATS BAR — overlaps hero bottom ═══ */}
            <div className="relative z-20 -mt-16 px-4 lg:px-0">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-100"
                    >
                        {[
                            { val: "30", unit: "Yıl", label: "Deneyim" },
                            { val: "3000+", unit: "", label: "Proje" },
                            { val: "14", unit: "", label: "Aktif Ülke" },
                            { val: "850+", unit: "", label: "Uzman" },
                            { val: "100+", unit: "", label: "Partner" },
                        ].map((s, i) => (
                            <div key={i} className="py-8 px-6 text-center group hover:bg-blue-50/50 transition-colors first:rounded-l-2xl last:rounded-r-2xl">
                                <div className="text-3xl lg:text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform inline-block">{s.val}<span className="text-lg font-bold">{s.unit}</span></div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </div>


            {/* ═══ GENEL BAKIŞ — Asymmetric Split ═══ */}
            <Section className="pt-24 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <motion.div {...fadeUp} className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl -z-10" />
                                <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/images/culture/culture-1.jpg" alt="BGTS Kültür" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                                            <p className="text-white/90 font-medium text-sm leading-relaxed">
                                                &ldquo;1997&apos;den bu yana edindiğimiz kurumsal deneyim ve sektörel uzmanlığımızla geleceğin teknolojilerine yön vermeye devam ediyoruz.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-7">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Genel Bakış</span>
                            <Heading variant="h2" className="mb-6 text-slate-900 !text-4xl !font-bold">
                                Dijital Dönüşümün<br />Güvenilir Adresi
                            </Heading>
                            <div className="space-y-5 text-slate-600 text-[17px] leading-relaxed">
                                <p>
                                    Uygulama Geliştirme, Veri Analitiği, Sistem Altyapıları, Güvenlik ve Uyumluluk ile Yazılım süreçlerimizi modern iş mimarisine dayalı platformlar üzerinden yürütür, kurumunuzun
                                    <strong className="text-blue-700 font-semibold"> dijital dönüşümünü vizyoner</strong> bir bakış açısıyla tasarlar, en ileri teknoloji ile hayata geçirir ve destekleriz.
                                </p>
                                <p>
                                    Hizmet ağımızı uluslararası standartlarda daha ileriye taşımak için özveriyle çalışıyor, her yeni projede dünün bilgi birikimini bugünün dehasıyla harmanlıyor; geleceğin teknolojilerine yön vermek adına sektörel liderliğimizi sürdürüyoruz.
                                </p>
                            </div>

                            {/* Inline feature chips */}
                            <div className="flex flex-wrap gap-3 mt-8">
                                {["Yazılım Geliştirme", "Veri Analitiği", "Sistem Altyapıları", "Güvenlik & Uyumluluk", "DevOps", "Yapay Zeka"].map((tag, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-semibold text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>


            {/* ═══ FULL-WIDTH IMAGE BREAK ═══ */}
            <div className="relative h-[300px] lg:h-[400px] my-8 lg:my-16 overflow-hidden">
                <Image src="/images/culture/culture-3.jpg" alt="Çalışma Kültürü" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent" />
                <Container className="relative z-10 h-full flex items-center">
                    <motion.div {...fadeUp} className="max-w-xl text-white">
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-black text-white mb-4">
                            Kanıtlanmış Uzmanlık
                        </Heading>
                        <p className="text-blue-100/90 text-lg leading-relaxed mb-6">
                            Bilişim 500 araştırmasına göre finans ve bankacılık yazılımlarında 5 yıldır peş peşe ilk 5'te yer almanın gururunu yaşıyoruz.
                        </p>
                        <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/30 transition-all text-sm">
                            Detaylı Bilgi <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </motion.div>
                </Container>
            </div>


            {/* ═══ ŞİRKET DEĞERLERİ — Sticky Sidebar + Scrolling Cards (like Banking) ═══ */}
            <Section className="bg-slate-50 relative overflow-hidden py-24">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sticky Left Panel */}
                        <motion.div {...fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl mix-blend-overlay" />
                                <div className="relative z-10">
                                    <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-4 block">Temel Prensipler</span>
                                    <h3 className="text-3xl font-bold mb-4">Şirket Değerleri</h3>
                                    <p className="text-blue-100/90 leading-relaxed text-[15px]">
                                        Sürdürülebilir büyüme, yenilikçi anlayış ve müşteri odaklılık standartlarımızın en önemli temel prensipleridir.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Scrolling Value Cards */}
                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    { icon: ShieldCheck, title: "Kalite", desc: "Hizmetlerimizde en yüksek kalite standartlarını sunmayı hedefler, müşteri odaklı yaklaşımımızla uluslararası platformlarda başarıyı güvence altına alırız.", color: "blue" },
                                    { icon: Lightbulb, title: "Sürekli İnovasyon", desc: "Geçmişin deneyimini geleceğin vizyonuyla harmanlıyor; teknolojiyi ilk kullanan ve sektörel standartları belirleyen oyuncu olmayı hedefliyoruz.", color: "violet" },
                                    { icon: Globe, title: "Küresel Uzmanlık", desc: "Dünyanın dört bir yanındaki ofislerimizle uluslararası standartlarda işbirlikleri ve çözümler sunarak küresel pazarda büyüyoruz.", color: "emerald" },
                                    { icon: Award, title: "Gurur Duyuyoruz", desc: "Başarılarımızın her zaman en iyi referans olacağına inanıyor, sağladığımız katma değer ve ödüllerle motivasyonumuzu artırıyoruz.", color: "amber" },
                                ].map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className={`w-12 h-12 bg-${v.color}-50/50 border border-${v.color}-100 group-hover:bg-${v.color}-600 rounded-xl flex items-center justify-center shrink-0 transition-colors`}>
                                                <v.icon className={`w-6 h-6 text-${v.color}-600 group-hover:text-white transition-colors`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight">{v.title}</h4>
                                                <p className="text-[14px] text-slate-500 leading-relaxed">{v.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>


            {/* ═══ İŞ ORTAKLARI — Dark Premium Section ═══ */}
            <div className="relative bg-[#0F1B2D] py-24 overflow-hidden">
                {/* Decorative orbs */}
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs block mb-3">Ekosistem</span>
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-white mb-4">İş Ortaklıkları</Heading>
                        <p className="text-slate-400 text-[15px] leading-relaxed">Güçlü ekosistemimiz, sektörün liderleriyle olan entegre işbirliklerimize dayanır.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { src: "/logos/partners/microsoft-logo.webp", alt: "Microsoft" },
                            { src: "/logos/partners/aws-partner.webp", alt: "AWS Partner" },
                            { src: "/logos/partners/atlassian-logo.webp", alt: "Atlassian" },
                            { src: "/logos/partners/servicenow-partner.png", alt: "ServiceNow" },
                            { src: "/logos/partners/redhat-partner.png", alt: "Red Hat" },
                            { src: "/logos/partners/qlik-partner.png", alt: "Qlik Partner" },
                            { src: "/logos/partners/mendix-logo.webp", alt: "Mendix" },
                            { src: "/logos/partners/4me-partner.webp", alt: "4me Partner" },
                            { src: "/logos/partners/temenos-partner.jpg", alt: "Temenos" },
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                className="flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 p-4 h-40"
                            >
                                <div className="relative w-full h-full">
                                    <Image src={p.src} alt={p.alt} fill className="object-contain" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ═══ SERTİFİKASYONLAR — Warm Light Section ═══ */}
            <div className="relative py-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 overflow-hidden">
                {/* Subtle mesh pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)", backgroundSize: "32px 32px" }} />

                <Container className="relative z-10">
                    <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-amber-600 font-bold tracking-widest uppercase text-xs block mb-3">Uyumluluk</span>
                        <Heading variant="h2" className="!text-3xl md:!text-4xl !font-bold text-slate-900 mb-4">Sertifikasyonlar</Heading>
                        <p className="text-slate-500 text-[15px] leading-relaxed">Uluslararası standartlarda sunduğumuz hizmetlerin kalitesi yetkili denetim kuruluşları tarafından onaylanmaktadır.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                        {[
                            { src: "/logos/certifications/iso-9001.png", label: "Kalite Yönetim Sistemleri" },
                            { src: "/logos/certifications/iso-27001.png", label: "Bilgi Güvenliği Yönetim Sistemleri" },
                            { src: "/logos/certifications/iso-20000.png", label: "Servis Yönetimi" },
                            { src: "/logos/certifications/iso-15504.png", label: "Süreç Değerlendirme" },
                            { src: "/logos/certifications/iso-27701.png", label: "Gizlilik Bilgi Yönetimi" },
                            { src: "/logos/certifications/iso-12207.png", label: "Yazılım Yaşam Döngüsü" },
                        ].map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex flex-col items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                <div className="relative w-24 h-24 mb-4">
                                    <Image src={cert.src} alt={cert.label} fill className="object-contain" />
                                </div>
                                <span className="text-[11px] text-slate-500 font-semibold leading-tight">{cert.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>


            {/* ═══ REFERANSLAR — Infinite Scrolling Marquee ═══ */}
            <div className="border-y border-slate-100 py-16 bg-slate-50/50 overflow-hidden">
                <Container>
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs block mb-2">Güvenilir İşbirlikleri</span>
                        <Heading variant="h3" className="!text-2xl !font-bold text-slate-900">Başlıca Referanslarımız</Heading>
                    </motion.div>
                </Container>

                {/* Marquee Row 1 */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
                        {[
                            "BASF", "booking-com", "BurganBank_Logo", "coca-cola", "dhl", "honda",
                            "hsbc", "hyundaiassan", "ibm-1", "ing-bank", "intel", "jti", "karcher",
                            "BASF", "booking-com", "BurganBank_Logo", "coca-cola", "dhl", "honda",
                            "hsbc", "hyundaiassan", "ibm-1", "ing-bank", "intel", "jti", "karcher",
                        ].map((logo, i) => (
                            <div key={i} className="relative w-28 h-12 shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                <Image src={`/logos/references/${logo}.png`} alt={logo} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 — reverse direction */}
                <div className="relative w-full overflow-hidden mt-8">
                    <div className="flex animate-marquee-reverse gap-12 items-center whitespace-nowrap">
                        {[
                            "kpmg", "lseg-1", "mercedes-benz", "microsoft", "mox", "nike",
                            "peek-cloppenburg", "rabobank", "rbs", "samsung", "standart-chartered", "vodafone", "warner-bros",
                            "kpmg", "lseg-1", "mercedes-benz", "microsoft", "mox", "nike",
                            "peek-cloppenburg", "rabobank", "rbs", "samsung", "standart-chartered", "vodafone", "warner-bros",
                        ].map((logo, i) => (
                            <div key={i} className="relative w-28 h-12 shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                <Image src={`/logos/references/${logo}.png`} alt={logo} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* ═══ KONUMLAR — Interactive Map ═══ */}
            <LocationsMap />


            {/* ═══ BİZE ULAŞIN — Premium Split with Image ═══ */}
            <Section className="pt-24 lg:pt-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <motion.div {...fadeUp} className="lg:col-span-5">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3 block">İletişim</span>
                            <Heading variant="h2" className="mb-6 !text-4xl !font-bold text-slate-900">
                                Geleceği Birlikte<br />Tasarlayalım
                            </Heading>
                            <p className="text-slate-600 text-[17px] leading-relaxed mb-10">
                                İhtiyaçlarınıza özel stratejik çözüm ortaklığı için bizimle iletişime geçin. Uzman ekibimiz en kısa sürede projeniz için hazır olacaktır.
                            </p>
                            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/images/culture/culture-8.jpg" alt="BGTS Ofis" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="grid grid-cols-2 gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                        <div className="text-center">
                                            <div className="text-lg font-black text-white">0850</div>
                                            <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Destek Hattı</div>
                                        </div>
                                        <div className="text-center border-l border-white/20">
                                            <div className="text-lg font-black text-white">7/24</div>
                                            <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Uzman Desteği</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-7">
                            <ContactForm />
                        </motion.div>
                    </div>
                </Container>
            </Section>

        </div>
    )
}
