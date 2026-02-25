/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef } from "react"

import Hero from "@/components/ui/Hero"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Heading, Text } from "@/components/ui/Typography"
import { MANAGED_SERVICES_CONTENT } from "@/content/managed-services"
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ManagedServicesPage() {
    const { hero, sectoralDomains, technicalDomains, capabilities } = MANAGED_SERVICES_CONTENT;

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
    const [activeSection, setActiveSection] = useState<string>(sectoralDomains[0]?.id || "");
    const isScrollingRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return;

            // Collect all targets
            const allTargets = [
                ...sectoralDomains.map(d => d.id),
                ...technicalDomains.map(d => d.id),
                "managed-capabilities",
            ];

            // Measurement line: 30% down from the top of the viewport
            // This is where the user is "reading" usually
            if (typeof window === 'undefined') return;

            const offset = window.innerHeight * 0.3;

            for (const id of allTargets) {
                const element = document.getElementById(id);
                if (!element) continue;

                const rect = element.getBoundingClientRect();

                // If the element covers the "reading line"
                // i.e. Top is above the line, Bottom is below the line
                if (rect.top <= offset && rect.bottom >= offset) {
                    setActiveSection(id);
                    break; // Found the active one, stop active
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount to set initial
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectoralDomains, technicalDomains, capabilities]);

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
                    "scroll-mt-48 mb-8 rounded-[2rem] transition-all duration-700 ease-in-out border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl",
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
                    {/* Image Section - Full Bleed */}
                    <div className="w-full lg:w-[45%] relative min-h-[300px] lg:min-h-auto">
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
                    <div className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center">
                        <div className="mb-8">
                            <Heading variant="h2" className="text-slate-900 mb-4 leading-tight">
                                {domain.title}
                            </Heading>
                            <Text className="text-base text-slate-500 leading-relaxed font-normal">
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
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">

                        {/* Sidebar Navigation */}
                        <aside className="hidden lg:block w-72 shrink-0 relative">
                            <div className="sticky top-40 space-y-10 max-h-[calc(100vh-160px)] overflow-y-auto pb-10 pr-4 custom-scrollbar">
                                {/* Sectoral Solutions */}
                                <div className="relative group/section">
                                    <div className="absolute left-[7px] top-8 bottom-0 w-[2px] bg-slate-100" />
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        MSP & YÖNETİLEN HİZMETLER
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

                                {/* Technical Solutions */}
                                <div className="relative group/section">
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        TEKNOLOJİ SERVİSLERİ
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
                                        {/* Capabilities Link */}
                                        {renderSidebarLink(
                                            "managed-capabilities",
                                            "Neden BGTS MSP?",
                                            "text-blue-600",
                                            "bg-blue-50"
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-12">
                                {sectoralDomains.map((domain, index) => (
                                    <div key={domain.id}>
                                        {renderDomainSection(domain, index)}
                                    </div>
                                ))}
                            </div>

                            <div className="my-24" />

                            <div className="space-y-12">
                                {technicalDomains.map((domain, index) => (
                                    <div key={domain.id}>
                                        {renderDomainSection(domain, index + sectoralDomains.length)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Capabilities Section - Independent */}
            <Section id="managed-capabilities" className="py-24 border-t border-slate-200 bg-slate-50">
                <Container>
                    <div className="space-y-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">

                            <Heading variant="h2" className="text-slate-900 mb-6">
                                {capabilities.title}
                            </Heading>
                            <Text className="text-slate-600 text-lg">
                                {capabilities.subtitle}
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.items.map((cap: Record<string, any>, index: number) => {
                                const Icon = cap.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
                                    >
                                        <div className="mb-8">
                                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {cap.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-6 flex-1">
                                            {cap.features.map((feat: Record<string, any>, i: number) => (
                                                <div key={i} className="relative pl-4 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                                                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                                                        {feat.title}
                                                    </h4>
                                                    <p className="text-slate-500 text-sm leading-relaxed">
                                                        {feat.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
