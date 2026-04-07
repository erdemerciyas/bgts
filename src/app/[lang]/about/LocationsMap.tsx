"use client"

import { useState, useRef } from "react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Heading, Text } from "@/components/ui/Typography"
import { AnimatedDiv, FadeIn } from "@/components/ui/AnimatedElements"
import Image from "next/image"
import {
    Globe, ArrowRight, Mail, Phone
} from "lucide-react"

const offices = [
    { id: "istanbul", city: "İstanbul", country: "Türkiye", address: "İTU Teknokent Arı 3 B3 Katar Caddesi İstanbul 34467", email: "info@bgts.com", phone: "+90 444 3330", x: 55.92, y: 27.01, type: "office" as const, isCentral: true },
    { id: "ankara", city: "Ankara", country: "Türkiye", address: "Bilkent Cyberpark Ankara", email: "info@bgts.com", phone: "+90 444 3330", x: 57.41, y: 28.53, type: "office" as const, isCentral: true },
    { id: "london", city: "Londra", country: "Birleşik Krallık", address: "180 Strand London WC2R 1EA", email: "info-uk@bgts.com", phone: "+44 (845) 5947971", x: 45.02, y: 19.89, type: "office" as const, isCentral: false },
    { id: "sheffield", city: "Sheffield", country: "Birleşik Krallık", address: "Pennine 5, 1 Tenter Street, Block 2, S1 4BY", email: "info-uk@bgts.com", phone: "+44 (845) 5947971", x: 44.22, y: 17.78, type: "office" as const, isCentral: false },
    { id: "dusseldorf", city: "Düsseldorf", country: "Almanya", address: "Neubrückstr. 1 40213 Düsseldorf", email: "info-de@bgts.com", phone: "+49 (211) 90760230", x: 47.01, y: 22.01, type: "office" as const, isCentral: false },
    { id: "amsterdam", city: "Amsterdam", country: "Hollanda", address: "Gustav Mahlerplein 2, 1082 MA, Amsterdam (Zuidas)", email: "info-nl@bgts.com", phone: "+31 20 3691184", x: 46.32, y: 20.22, type: "office" as const, isCentral: false },
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

export function LocationsMap({ lang = "tr", dict }: { lang?: string; dict?: any }) {
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
                <AnimatedDiv className="mb-10">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3 block">
                        {lang === "en" ? "Global Presence" : "Küresel Varlık"}
                    </span>
                    <Heading variant="h2" className="mb-4 !text-3xl md:!text-4xl !font-bold text-white">
                        {lang === "en" ? "Locations" : "Konumlar"}
                    </Heading>
                    <Text className="text-slate-400 text-lg max-w-2xl">
                        {lang === "en" 
                            ? "BGTS has a total of 8 offices in the UK, Europe, and Turkey. In addition to these offices, we have delivery centers in many strategic locations."
                            : "BGTS'in İngiltere, Avrupa ve Türkiye'de toplam 8 ofisi bulunmaktadır. Bu ofislere ek olarak, birçok stratejik konumda hizmet noktalarımız yer almaktadır."}
                    </Text>
                </AnimatedDiv>

                {/* Map Container */}
                <FadeIn className="relative w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
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
                            className={`absolute group cursor-pointer ${activeId === office.id ? 'z-40' : 'z-10 hover:z-50'}`}
                            style={{ left: `${office.x}%`, top: `${office.y}%`, transform: "translate(-50%, -50%)" }}
                            aria-label={office.city}
                        >
                            {activeId === office.id ? (
                                <span className="absolute inset-0 w-8 h-8 -ml-2 -mt-2 rounded-full bg-green-400/30 animate-ping" />
                            ) : office.isCentral && (
                                <span className="absolute inset-0 w-10 h-10 -ml-3 -mt-3 rounded-full bg-amber-400/40 animate-pulse pointer-events-none" />
                            )}
                            <span className={`block transition-all duration-300 rounded-full border-2 border-white shadow-lg ${activeId === office.id
                                ? "w-5 h-5 -ml-0.5 -mt-0.5 bg-green-400 scale-125 shadow-green-400/50 relative z-20"
                                : office.isCentral
                                    ? "w-6 h-6 -ml-1 -mt-1 bg-amber-500 group-hover:bg-amber-400 shadow-amber-500/50 relative z-10"
                                    : "w-4 h-4 bg-yellow-400 group-hover:bg-green-400 group-hover:scale-125"
                                }`} />
                            {/* Tooltip */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-slate-900/95 border border-slate-600 backdrop-blur-md rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
                                <span className="font-bold">{office.city}</span>
                                <br />
                                <span className="text-slate-400">
                                    {office.country} • {office.isCentral ? (lang === "en" ? "Head Office" : "Merkez Ofis") : (lang === "en" ? "Office" : "Ofis")}
                                </span>
                            </span>
                        </button>
                    ))}

                    {/* Delivery Center Pins */}
                    {deliveryCenters.map((dc) => (
                        <button
                            key={dc.id}
                            onClick={() => setActiveId(dc.id)}
                            className={`absolute group cursor-pointer ${activeId === dc.id ? 'z-40' : 'z-10 hover:z-50'}`}
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
                                <span className="text-slate-400">{lang === "en" ? "Delivery Center" : "Hizmet Noktası"}</span>
                            </span>
                        </button>
                    ))}

                    {/* Office Cards Overlay */}
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
                </FadeIn>

                {/* Delivery Center List */}
                <div className="mt-6 flex flex-wrap gap-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2 self-center">
                        {lang === "en" ? "Delivery Centers:" : "Hizmet Noktaları:"}
                    </span>
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
