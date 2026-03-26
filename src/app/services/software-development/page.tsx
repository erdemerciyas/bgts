/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef } from "react"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { SOFTWARE_DEV_CONTENT } from "@/content/software-development"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SoftwareDevelopmentPage() {
    const { hero, sectoralDomains, technicalDomains, developmentDomains } = SOFTWARE_DEV_CONTENT;

    // Stronger colors for better visibility
    const sectionColors = [
        "bg-slate-100", // Slate 100
        "bg-sky-50",    // Sky 50
        "bg-violet-50", // Violet 50
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
        "text-violet-600",
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
        "bg-violet-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-red-100",
        "bg-orange-100",
        "bg-purple-100",
    ];

    // State for active section
    const [activeSection, setActiveSection] = useState<string>(technicalDomains[0]?.id || "");
    const isScrollingRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const sidebarScrollRef = useRef<HTMLDivElement>(null);
    // Scroll Spy Logic
    useEffect(() => {
        const HEADER_OFFSET = 200;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            const allTargets = [
                ...technicalDomains.map(d => d.id),
                ...developmentDomains.map(d => d.id),
                ...sectoralDomains.map(d => d.id),
            ];

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
    }, [sectoralDomains, technicalDomains, developmentDomains]);


    // Auto-scroll sidebar to keep active link visible
    useEffect(() => {
        if (!activeSection || !sidebarScrollRef.current) return;
        const activeEl = sidebarScrollRef.current.querySelector(`[href="#${activeSection}"]`);
        if (activeEl) {
            (activeEl as HTMLElement).scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }, [activeSection]);

    const handleLinkClick = (id: string) => {
        setActiveSection(id);
        isScrollingRef.current = true;
        // Disable scroll spy briefly while smooth scrolling
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
        }, 1000); // 1s is usually enough for smooth scroll to complete
    };

    // Helper to render domain content with alternating layout
    const renderDomainSection = (domain: Record<string, any>, index: number) => {
        const Icon = domain.icon;
        const isReversed = index % 2 !== 0;
        const bgColor = sectionColors[index % sectionColors.length];
        const isActive = activeSection === domain.id;

        return (
            <div
                id={domain.id}
                className={cn(
                    "scroll-mt-48 mb-16 rounded-[2.5rem] transition-all duration-700 ease-in-out border border-white/50 overflow-hidden shadow-sm hover:shadow-xl",
                    bgColor,
                    isActive || activeSection === ""
                        ? "opacity-100 blur-none scale-100"
                        : "opacity-40 blur-[2px] scale-[0.98] hover:opacity-100 hover:blur-none hover:scale-100"
                )}
            >
                <div className={cn(
                    "flex flex-col lg:flex-row items-stretch min-h-[500px]",
                    isReversed ? "lg:flex-row-reverse" : ""
                )}>
                    {/* Image Section */}
                    <div 
                        className="w-full lg:w-[20%] relative min-h-[300px] lg:min-h-auto shrink-0"
                        style={{
                            WebkitMaskImage: isReversed 
                                ? "linear-gradient(to left, black 40%, transparent 100%)" 
                                : "linear-gradient(to right, black 40%, transparent 100%)",
                            maskImage: isReversed 
                                ? "linear-gradient(to left, black 40%, transparent 100%)" 
                                : "linear-gradient(to right, black 40%, transparent 100%)"
                        }}
                    >
                        <Image
                            src={domain.image}
                            alt={domain.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-[80%] p-8 lg:p-14 flex flex-col justify-center space-y-8">
                        <div>
                            <Heading variant="h2" className="text-slate-900 mb-6 leading-tight">
                                {domain.subtitle}
                            </Heading>
                            <Text className="text-lg text-slate-600 leading-relaxed font-normal">
                                {domain.description}
                            </Text>
                        </div>

                        <div className={cn(
                            domain.features.some((f: any) => f.description) ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-3"
                        )}>
                            {domain.features.map((feature: Record<string, any>, i: number) => (
                                feature.description ? (
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
                                ) : (
                                    <div key={i} className="flex items-center gap-3 p-3 lg:p-4 rounded-2xl bg-white/80 border border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                                        <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                        </div>
                                        <span className="font-bold text-slate-800 text-sm leading-tight pr-2">{feature.title}</span>
                                    </div>
                                )
                            ))}
                        </div>
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
                    "group flex items-center py-2 px-6 relative transition-all duration-300 rounded-lg",
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

    return (
        <>
            <Hero
                title={hero.title}
                subtitle={hero.subtitle}

                layout="simple"
                backgroundImage={hero.backgroundImage}
                align="center"
            />

            {/* Main Content with Sticky Sidebar */}
            <Section background="default" className="py-24 relative overflow-visible">
                {/* Background Blobs - Adjusted z-index to not block interaction but stay behind */}
                {/* Background Blobs - REMOVED due to layout issues */}
                {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10 pointer-events-none" /> */}

                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                        {/* Sidebar Navigation */}
                        <aside className="hidden lg:block w-72 shrink-0">
                            <div className="sticky top-[80px] flex flex-col py-10">
                            <div ref={sidebarScrollRef} className="overflow-y-auto max-h-[calc(100vh-160px)] space-y-10 pr-4 custom-scrollbar">
                                {/* Technical Solutions */}
                                <div className="relative group/section">
                                    {/* Removed the absolute line duplicate if I move track inside */}
                                    {/* Actually keeping the original structure but using SidebarLink */}
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        Yazılım Hizmetleri
                                    </Text>
                                    <nav className="flex flex-col space-y-1 border-l-2 border-slate-100 ml-[7px] pl-2">
                                        {technicalDomains.map((domain, index) => {
                                            const totalPrevIndex = sectoralDomains.length;
                                            return (
                                                <div key={domain.id}>
                                                    {renderSidebarLink(
                                                        domain.id,
                                                        domain.title,
                                                        sectionTextColors[(totalPrevIndex + index) % sectionTextColors.length],
                                                        sectionActiveBgColors[(totalPrevIndex + index) % sectionActiveBgColors.length]
                                                    )}
                                                </div>
                                            );
                                        })}
                                        {/* Development Domains Links */}
                                        {developmentDomains.map((domain, index) => {
                                            const devIdx = sectoralDomains.length + technicalDomains.length + index;
                                            return (
                                                <div key={domain.id}>
                                                    {renderSidebarLink(
                                                        domain.id,
                                                        domain.title,
                                                        sectionTextColors[devIdx % sectionTextColors.length],
                                                        sectionActiveBgColors[devIdx % sectionActiveBgColors.length]
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </nav>
                                </div>
                                {/* Sectoral Solutions */}
                                <div className="relative group/section">
                                    <div className="absolute left-[7px] top-8 bottom-0 w-[2px] bg-slate-100" />
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        Sektörel Yazılım Çözümleri
                                    </Text>
                                    <nav className="flex flex-col space-y-1 border-l-2 border-slate-100 ml-[7px] pl-2">
                                        {sectoralDomains.map((domain, index) => (
                                            <div key={domain.id}>
                                                {renderSidebarLink(
                                                    domain.id,
                                                    domain.title,
                                                    sectionTextColors[index % sectionTextColors.length],
                                                    sectionActiveBgColors[index % sectionActiveBgColors.length]
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1 min-w-0">
                            {/* Technical Domains */}
                            <div className="space-y-12">
                                {technicalDomains.map((domain, index) => (
                                    <div key={domain.id}>
                                        {renderDomainSection(domain, index + sectoralDomains.length)}
                                    </div>
                                ))}
                            </div>

                            <div className="my-24" />

                            {/* Development Domains */}
                            <div className="space-y-12">
                                {developmentDomains.map((domain, index) => (
                                    <div key={domain.id}>
                                        {renderDomainSection(domain, index + sectoralDomains.length + technicalDomains.length)}
                                    </div>
                                ))}
                            </div>

                            <div className="my-24" />

                            {/* Sectoral Domains */}
                            <div className="space-y-12">
                                {sectoralDomains.map((domain, index) => (
                                    <div key={domain.id}>
                                        {renderDomainSection(domain, index)}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
