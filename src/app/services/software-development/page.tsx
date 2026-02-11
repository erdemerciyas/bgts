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
    const { hero, sectoralDomains, technicalDomains, capabilities } = SOFTWARE_DEV_CONTENT;

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
                "development-services",
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
    const DomainSection = ({ domain, index }: { domain: any, index: number }) => {
        const Icon = domain.icon;
        const isReversed = index % 2 !== 0;
        const bgColor = sectionColors[index % sectionColors.length];
        const isActive = activeSection === domain.id;

        return (
            <div
                id={domain.id}
                className={cn(
                    "scroll-mt-48 mb-6 p-10 lg:p-16 rounded-[2.5rem] transition-all duration-700 ease-in-out",
                    bgColor,
                    isActive || activeSection === ""
                        ? "opacity-100 blur-none scale-100"
                        : "opacity-40 blur-[2px] scale-[0.98] hover:opacity-100 hover:blur-none hover:scale-100"
                )}
            >
                <div className={cn(
                    "flex flex-col lg:flex-row gap-12 lg:gap-16 items-center",
                    isReversed ? "lg:flex-row-reverse" : ""
                )}>
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-700 bg-white">
                            <Image
                                src={domain.image}
                                alt={domain.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                            {/* Floating Icon Badge */}
                            <div className={cn(
                                "absolute bottom-8 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-4 border border-white/50 transition-transform duration-500 hover:scale-105",
                                isReversed ? "left-8" : "right-8"
                            )}>
                                <div className="p-2.5 bg-blue-50 rounded-xl">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">ALAN</span>
                                    <span className="block text-sm font-bold text-slate-800">{domain.title}</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Pattern - REMOVED */}
                        {/* <div className={cn(
                            "absolute -z-10 w-full h-full border-[3px] border-black/5 rounded-[2.5rem]",
                            isReversed ? "-right-4 -bottom-4" : "-left-4 -bottom-4"
                        )} /> */}
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            {domain.subtitle && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-6 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                    <span className="text-xs font-bold text-blue-700 tracking-wide uppercase">
                                        {domain.subtitle}
                                    </span>
                                </div>
                            )}
                            <Heading variant="h2" className="text-slate-900 mb-6 leading-tight">
                                {domain.title}
                            </Heading>
                            <Text className="text-lg text-slate-600 leading-relaxed">
                                {domain.description}
                            </Text>
                        </div>

                        <div className="space-y-4">
                            {domain.features.map((feature: any, i: number) => (
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
    const SidebarLink = ({ id, title, colorClass, activeBgClass }: { id: string, title: string, colorClass: string, activeBgClass: string }) => {
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
                badge={hero.badge}
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
                        <aside className="hidden lg:block w-72 shrink-0 relative">
                            <div className="sticky top-40 space-y-10 max-h-[calc(100vh-160px)] overflow-y-auto pb-10 pr-4 custom-scrollbar">
                                {/* Sectoral Solutions */}
                                <div className="relative group/section">
                                    <div className="absolute left-[7px] top-8 bottom-0 w-[2px] bg-slate-100" />
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        Sektörel Çözümler
                                    </Text>
                                    <nav className="flex flex-col space-y-1 border-l-2 border-slate-100 ml-[7px] pl-2">
                                        {sectoralDomains.map((domain, index) => (
                                            <SidebarLink
                                                key={domain.id}
                                                id={domain.id}
                                                title={domain.title}
                                                colorClass={sectionTextColors[index % sectionTextColors.length]}
                                                activeBgClass={sectionActiveBgColors[index % sectionActiveBgColors.length]}
                                            />
                                        ))}
                                    </nav>
                                </div>

                                {/* Technical Solutions */}
                                <div className="relative group/section">
                                    {/* Removed the absolute line duplicate if I move track inside */}
                                    {/* Actually keeping the original structure but using SidebarLink */}
                                    <Text variant="small" className="font-extrabold text-slate-900 tracking-widest uppercase mb-4 pl-0 text-xs">
                                        Teknoloji & Mühendislik
                                    </Text>
                                    <nav className="flex flex-col space-y-1 border-l-2 border-slate-100 ml-[7px] pl-2">
                                        {technicalDomains.map((domain, index) => {
                                            const totalPrevIndex = sectoralDomains.length;
                                            return (
                                                <SidebarLink
                                                    key={domain.id}
                                                    id={domain.id}
                                                    title={domain.title}
                                                    colorClass={sectionTextColors[(totalPrevIndex + index) % sectionTextColors.length]}
                                                    activeBgClass={sectionActiveBgColors[(totalPrevIndex + index) % sectionActiveBgColors.length]}
                                                />
                                            );
                                        })}
                                        {/* Software Development Services Link */}
                                        <SidebarLink
                                            id="development-services"
                                            title="Yazılım Geliştirme Hizmetleri"
                                            colorClass="text-blue-600"
                                            activeBgClass="bg-blue-50"
                                        />
                                    </nav>
                                </div>


                            </div>
                        </aside>

                        {/* Content Area */}
                        <div className="flex-1 min-w-0">
                            <div className="space-y-12">
                                {sectoralDomains.map((domain, index) => (
                                    <DomainSection key={domain.id} domain={domain} index={index} />
                                ))}
                            </div>

                            <div className="my-24" />

                            {/* Technical Domains - RESTORED */}
                            <div className="space-y-12">
                                {technicalDomains.map((domain, index) => (
                                    <DomainSection
                                        key={domain.id}
                                        domain={domain}
                                        index={index + sectoralDomains.length}
                                    />
                                ))}
                            </div>




                        </div>
                    </div>
                </Container>
            </Section>

            {/* Capabilities Section - Independent */}
            <Section id="development-services" className="py-24 border-t border-slate-200 bg-slate-50">
                <Container>
                    <div className="space-y-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600 mb-6 uppercase tracking-wider">
                                YETKİNLİKLERİMİZ
                            </span>
                            <Heading variant="h2" className="text-slate-900 mb-6">
                                {capabilities.title}
                            </Heading>
                            <Text className="text-slate-600 text-lg">
                                {capabilities.subtitle}
                            </Text>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {capabilities.items.map((cap: any, index: number) => {
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
                                            {cap.features.map((feat: any, i: number) => (
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
