/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef } from "react"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { ChevronRight, Layers, CheckSquare, Settings, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import {
  Server, ShieldCheck, Database, LayoutTemplate,
  Users, Lock, Cloud, AppWindow,
  Monitor, LineChart, Cpu, RefreshCw, LayoutGrid, ShieldAlert, GitBranch, Infinity
} from "lucide-react";

const ICONS: Record<string, any> = {
  Server, ShieldCheck, Database, LayoutTemplate, Users, Settings, Lock, Cloud, AppWindow, Monitor, LineChart, Cpu, RefreshCw, LayoutGrid, ShieldAlert, GitBranch, Infinity, Activity
};

const IMAGES: Record<string, string> = {
  "veri-merkezi": "/images/iso/datacenter.jpg",
  "noc": "/images/iso/monitoring.jpg",
  "euc": "/images/iso/desktop.jpg",
  "sccm": "/images/iso/endpoint.jpg",
  "itsm": "/images/iso/itsm.jpg",
  "devops": "/images/iso/devops.jpg",
  "sre": "/images/iso/sre.jpg",
  "dba": "/images/iso/database.jpg",
  "cloud": "/images/iso/cloud.jpg",
  "finops": "/images/iso/finops.jpg",
  "m365": "/images/iso/m365.jpg",
  "bcdr": "/images/iso/bcdr.jpg",
  "ai": "/images/iso/ai.jpg",
  "bakim": "/images/iso/support.jpg",
  "surec": "/images/iso/process.jpg",
  "risk": "/images/iso/risk.jpg",
  "maturity": "/images/iso/maturity.jpg",
  "hardening": "/images/iso/hardening.jpg",
};

export default function ManagedServicesClient({ pillars }: { pillars: any[] }) {
    // Stronger colors for better visibility
    const sectionColors = [
        "bg-slate-100", // Slate 100
        "bg-sky-50",    // Sky 50
        "bg-teal-50",   // Teal 50
        "bg-blue-50",   // Blue 50
        "bg-green-50",  // Green 50
        "bg-red-50",    // Red 50
        "bg-orange-50", // Orange 50
        "bg-purple-50", // Purple 50
    ];

    // Corresponding text colors for sidebar
    const sectionTextColors = [
        "text-slate-600",
        "text-sky-600",
        "text-teal-600",
        "text-blue-600",
        "text-green-600",
        "text-red-600",
        "text-orange-600",
        "text-purple-600",
    ];

    // Corresponding bg colors for sidebar active state
    const sectionActiveBgColors = [
        "bg-slate-100",
        "bg-sky-100",
        "bg-teal-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
        "bg-purple-100",
    ];

    // State for active section
    const [activeSection, setActiveSection] = useState<string>(pillars[0]?.services[0]?.id || "");
    const isScrollingRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const HEADER_OFFSET = window.innerHeight * 0.4; // Responsive offset (40% down from top)

            if (isScrollingRef.current) return;

            const allTargets = pillars.flatMap((p: any) => [p.id, ...p.services.map((s: any) => s.id)]);

            // Find the last section whose top is above the header offset line.
            // This reliably gives us whichever section the user is currently reading.
            let current = allTargets[0];
            for (const id of allTargets) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= HEADER_OFFSET) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [pillars]);

    const handleLinkClick = (id: string) => {
        setActiveSection(id);
        isScrollingRef.current = true;
        // Disable scroll spy briefly while smooth scrolling
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
        }, 1000); // 1s is usually enough for smooth scroll to complete
    };

    const renderPillarOverview = (pillar: any) => {
        if (!pillar.overview) return null;
        const ov = pillar.overview;

        return (
            <div className="mb-20 space-y-16">
                {/* 1. Header (Title & Desc) */}
                <div className="space-y-6 max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        {ov.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl">
                        {ov.description}
                    </p>
                </div>

                {/* 2. Stats Grid */}
                {ov.stats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {ov.stats.map((stat: any, i: number) => (
                            <div key={i} className={cn(
                                "p-6 rounded-[1.25rem] flex flex-col items-center text-center justify-center transition-transform hover:scale-[1.02] duration-300",
                                i < 4 ? "bg-[#0f2044] text-white" : "bg-[#162d5a] text-white"
                            )}>
                                <div className="text-3xl md:text-4xl font-black mb-2 tracking-tight">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-200">{stat.label}</div>
                                {stat.sub && <div className="text-[11px] text-slate-400 mt-1 opacity-80">{stat.sub}</div>}
                            </div>
                        ))}
                    </div>
                )}

                {/* 3. Model Description */}
                {ov.model && (
                    <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">{ov.model.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {ov.model.description}
                        </p>
                    </div>
                )}

                {/* 4. Layers (Üst Seviye Hizmet Kapsamı vs) */}
                {ov.layers && (
                    <div className="space-y-8">
                        {ov.layersTitle && <h3 className="text-2xl font-bold text-slate-900">{ov.layersTitle}</h3>}
                        <div className="grid gap-6">
                            {ov.layers.map((layer: any, i: number) => (
                                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
                                            <Layers className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{layer.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: layer.description.replace(/—/g, '<br/><span class="text-slate-400">—</span>').replace(/AIOps|L0|L1|L2–L3|Yapay Zeka|Teknoloji Danışmanlığı|ITSM\/ITIL|Customer Success Management|Operasyonel Zeka|Stratejik Performans/g, '<strong>$&</strong>') }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 5. KOM Grid */}
                {ov.kom && (
                    <div className="space-y-8">
                        {ov.komTitle && <h3 className="text-2xl font-bold text-slate-900">{ov.komTitle}</h3>}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ov.kom.map((cat: any, i: number) => (
                                <div key={i} className="bg-white border text-left border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                        <CheckSquare className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-4 min-h-10 leading-snug break-words">{cat.title}</h4>
                                    <ul className="space-y-3">
                                        {cat.items.map((item: string, j: number) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {ov.komTags && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {ov.komTags.map((t: string, i: number) => (
                                    <span key={i} className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* 6. Management */}
                {ov.management && (
                    <div className="space-y-8">
                        {ov.managementTitle && <h3 className="text-2xl font-bold text-slate-900 pt-8 border-t border-slate-200">{ov.managementTitle}</h3>}
                        <div className="grid gap-6">
                            {ov.management.map((item: any, i: number) => (
                                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description.replace(/kurulum, konfigürasyon ve yaşam döngüsü yönetimi|proaktif izleme, kapasite yönetimi ve servis sağlığı|performans izleme, yedekleme ve erişim yönetimi|konfigürasyon, güncelleme ve servis izleme|sanal makine yaşam döngüsü, kaynak havuzu optimizasyonu ve kapasite planlaması/g, '<strong>$&</strong>') }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 7. Analytics */}
                {ov.analytics && (
                    <div className="space-y-8">
                        {ov.analyticsTitle && <h3 className="text-2xl font-bold text-slate-900 pt-8 border-t border-slate-200">{ov.analyticsTitle}</h3>}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ov.analytics.map((cat: any, i: number) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                     <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-4 min-h-10 leading-snug break-words">{cat.title}</h4>
                                    <ul className="space-y-3">
                                        {cat.items.map((item: string, j: number) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Visual Separator before the actual services map */}
                <div className="pt-12 text-sm font-black text-slate-400 tracking-widest uppercase mb-8">
                    {pillar.catalog || "Hizmetleri Kataloğu"}
                    <div className="h-px bg-slate-200 w-full mt-4" />
                </div>
            </div>
        )
    };

    // Helper to render domain content with alternating layout
    const renderDomainSection = (domain: Record<string, any>, index: number) => {
        const isReversed = index % 2 !== 0;
        const bgColor = sectionColors[index % sectionColors.length];
        const isActive = activeSection === domain.id;

        return (
            <div
                id={domain.id}
                className={cn(
                    "scroll-mt-48 mb-8 rounded-[2rem] transition-all duration-700 ease-in-out border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl",
                    bgColor,
                    isActive || activeSection === ""
                        ? "opacity-100 blur-none scale-100"
                        : "opacity-40 blur-[2px] scale-[0.98] hover:opacity-100 hover:blur-none hover:scale-100"
                )}
            >
                <div className={cn(
                    "flex flex-row items-stretch min-h-[300px] lg:min-h-[500px]",
                    isReversed ? "flex-row-reverse" : ""
                )}>
                    {/* Image Section - Full Bleed */}
                    <div 
                        className="w-[10%] lg:w-[20%] relative shrink-0"
                        style={{
                            WebkitMaskImage: isReversed 
                                ? "linear-gradient(to left, black 40%, transparent 100%)" 
                                : "linear-gradient(to right, black 40%, transparent 100%)",
                            maskImage: isReversed 
                                ? "linear-gradient(to left, black 40%, transparent 100%)" 
                                : "linear-gradient(to right, black 40%, transparent 100%)"
                        }}
                    >
                        {IMAGES[domain.id] && (
                          <Image
                              src={IMAGES[domain.id]}
                              alt={domain.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                    </div>

                    {/* Content Section */}
                    <div className="w-[90%] lg:w-[80%] p-5 lg:p-14 flex flex-col justify-center">
                        <div className="mb-8">
                            <Heading variant="h2" className="text-slate-900 mb-4 leading-tight">
                                {domain.title}
                            </Heading>
                            <Text className="text-base text-slate-500 leading-relaxed font-normal whitespace-pre-line">
                                {domain.description}
                            </Text>
                        </div>

                        <div className="space-y-4">
                            {domain.features.map((feature: Record<string, any>, i: number) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/80 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            <ChevronRight className="w-4 h-4 text-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {domain.tags && domain.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100/50">
                                {domain.tags.map((tag: string, i: number) => (
                                    <span key={i} className={cn(
                                        "px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide",
                                        "border bg-white transition-colors duration-300",
                                        // Colors matching reference
                                        index % 8 === 0 ? "border-emerald-200 text-emerald-800 hover:bg-emerald-50" :
                                        index % 8 === 1 ? "border-sky-200 text-sky-800 hover:bg-sky-50" :
                                        index % 8 === 2 ? "border-teal-200 text-teal-800 hover:bg-teal-50" :
                                        index % 8 === 3 ? "border-indigo-200 text-indigo-800 hover:bg-indigo-50" :
                                        index % 8 === 4 ? "border-green-200 text-green-800 hover:bg-green-50" :
                                        index % 8 === 5 ? "border-rose-200 text-rose-800 hover:bg-rose-50" :
                                        index % 8 === 6 ? "border-orange-200 text-orange-800 hover:bg-orange-50" :
                                        "border-purple-200 text-purple-800 hover:bg-purple-50"
                                    )}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Helper for sidebar items
    const renderSidebarLink = (id: string, title: string, colorClass: string, activeBgClass: string) => {
        const isActive = activeSection === id;
        return (
            <Link
                href={`#${id}`}
                data-section={id}
                onClick={() => handleLinkClick(id)}
                className={cn(
                    "group flex items-center py-1.5 px-6 relative transition-all duration-300 rounded-lg text-sm",
                    isActive
                        ? cn("font-bold translate-x-1", colorClass, activeBgClass)
                        : "text-slate-500 font-medium hover:text-slate-900 hover:bg-slate-50"
                )}
            >
                {/* Active Indicator */}
                <span className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-lg transition-all duration-300",
                    isActive ? cn("scale-100", colorClass.replace("text-", "bg-")) : "bg-transparent scale-0"
                )} />

                <span className="leading-tight">
                    {title}
                </span>
            </Link>
        );
    };

    let flatServiceIndex = 0;

    return (
        <Section background="default" className="py-24 relative overflow-visible">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-[80px] flex flex-col py-6">
                        <div className="space-y-6 pr-4">
                            
                            {pillars.map((pillar) => {
                                const isPillarActive = activeSection === pillar.id || pillar.services.some((s: any) => s.id === activeSection);
                                return (
                                <div key={pillar.id} className="relative group/section">
                                    {/* Show vertical line for subsequent sections to connect them visually if wanted, or default existing style */}
                                    <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-slate-100" />
                                    
                                    <Link 
                                        href={`#${pillar.id}`} 
                                        className="block group/head relative"
                                        onClick={() => {
                                            handleLinkClick(pillar.id);
                                        }}
                                    >
                                        {/* Active Pillar Indicator */}
                                        <span className={cn(
                                            "absolute -left-2 top-1.5 w-1 h-3.5 rounded-r transition-all duration-300",
                                            isPillarActive ? "bg-blue-600 scale-100" : "bg-transparent scale-0"
                                        )} />
                                        <Text variant="small" className={cn(
                                            "font-extrabold tracking-widest uppercase mb-2 pl-0 text-xs transition-colors",
                                            isPillarActive ? "text-blue-700 px-1" : "text-slate-900 group-hover/head:text-blue-600"
                                        )}>
                                            {pillar.title}
                                        </Text>
                                    </Link>
                                    <nav className="flex flex-col space-y-1 border-l-2 border-slate-100 ml-[7px] pl-2">
                                        {pillar.services.map((service: any) => {
                                            const currentIndex = flatServiceIndex++;
                                            return (
                                                <div key={service.id}>
                                                    {renderSidebarLink(
                                                        service.id,
                                                        service.title,
                                                        sectionTextColors[currentIndex % sectionTextColors.length],
                                                        sectionActiveBgColors[currentIndex % sectionActiveBgColors.length]
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </nav>
                                </div>
                                );
                            })}
                        </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1 min-w-0">
                        <div className="space-y-32">
                            {pillars.map((pillar) => (
                                <div id={pillar.id} key={pillar.id} className="space-y-12 scroll-mt-32">
                                    {/* Render Overview Content First */}
                                    {renderPillarOverview(pillar)}

                                    {/* Render Each Sub-Service */}
                                    {pillar.services.map((service: any, index: number) => (
                                        <div key={service.id}>
                                            {renderDomainSection(service, index)}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
