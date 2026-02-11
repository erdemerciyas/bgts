"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"
import {
    ChevronDown, Menu, Search, Globe,
    Linkedin, Instagram, Twitter, Mail
} from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { NAV_ITEMS } from "./header/data"
import {
    ServicesMenu, IndustriesMenu, ProductsMenu,
    TalentMenu, ResourcesMenu, CareersMenu
} from "./header/MegaMenus"
import { Container } from "@/components/ui/Container"
import { SearchOverlay } from "./search/SearchOverlay"

// Lazy load mobile nav for better performance
const MobileNav = dynamic(() => import('./MobileNav'), {
    loading: () => null, // You might want a spinner here
    ssr: false,
})

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [hoveredNav, setHoveredNav] = React.useState<string | null>(null)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false) // Added State
    const pathname = usePathname()

    const isHome = pathname === "/"
    const isTransparent = isHome && !isScrolled && hoveredNav === null;

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const textColorClass = isTransparent
        ? "text-white/90 hover:text-white"
        : "text-corporate-primary hover:text-corporate-secondary";

    const logoFilterClass = isTransparent ? "brightness-0 invert opacity-90 hover:opacity-100" : "";
    const headerBgClass = isTransparent ? "bg-transparent border-transparent" : "bg-white/95 border-border shadow-sm backdrop-blur-md";

    return (
        <>
            <header className={cn("fixed top-0 w-full z-50 transition-all duration-300 border-b", headerBgClass)}>
                <Container
                    className="h-[80px] flex items-center justify-between relative"
                    onMouseLeave={() => setHoveredNav(null)}
                >
                    <Link href="/" className="flex items-center gap-2 mr-10 shrink-0">
                        <div className={cn("relative w-32 h-10 transition-all duration-300", logoFilterClass)}>
                            <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" priority />
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center h-full gap-4 xl:gap-6 flex-1 justify-start" role="navigation" aria-label="Ana navigasyon">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.name}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => setHoveredNav(item.id || item.name)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-1.5 text-[15px] font-bold tracking-wide transition-colors py-8 border-b-2 border-transparent uppercase whitespace-nowrap", // Increased font size slightly to 15px per design
                                        textColorClass,
                                        hoveredNav === (item.id || item.name) ? (isTransparent ? "text-corporate-accent border-corporate-accent opacity-100" : "text-corporate-secondary border-corporate-secondary") : ""
                                    )}
                                    aria-haspopup={["services", "industries", "products", "talent", "resources", "careers"].includes(item.id || "") ? "true" : undefined}
                                    aria-expanded={hoveredNav === (item.id || item.name)}
                                >
                                    {item.name}
                                    {(["services", "industries", "products", "talent", "resources", "careers"].includes(item.id || "")) && (
                                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", hoveredNav === (item.id || item.name) ? "rotate-180" : "")} aria-hidden="true" />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4 ml-auto">
                        <button
                            className={cn("w-10 h-10 flex items-center justify-center rounded-full transition-all", isTransparent ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" : "bg-corporate-surface text-corporate-primary hover:bg-corporate-accent/20")}
                            aria-label="Ara"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <button
                            className={cn("w-10 h-10 flex items-center justify-center rounded-full transition-all", isTransparent ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" : "bg-corporate-surface text-corporate-primary hover:bg-corporate-accent/20")}
                            aria-label="Dil seç"
                        >
                            <Globe className="w-4 h-4" aria-hidden="true" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-border/50" role="group" aria-label="Sosyal medya">
                            <Link
                                href="#"
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="#"
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="#"
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/contact"
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="İletişim"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    <button
                        className={cn("lg:hidden p-2 ml-auto rounded-md", isTransparent ? "text-white" : "text-corporate-primary")}
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Menüyü aç"
                        aria-expanded={mobileMenuOpen}
                    >
                        <Menu className="w-6 h-6" aria-hidden="true" />
                    </button>

                    {/* --- CENTRALIZED MEGA MENU CONTAINER --- */}
                    <AnimatePresence>
                        {hoveredNav && (
                            <div
                                onMouseEnter={() => { }}
                                onMouseLeave={() => setHoveredNav(null)}
                                className="absolute left-0 top-full w-full"
                            >
                                {hoveredNav === "services" && <ServicesMenu closeMenu={() => setHoveredNav(null)} />}
                                {hoveredNav === "industries" && <IndustriesMenu closeMenu={() => setHoveredNav(null)} />}
                                {hoveredNav === "products" && <ProductsMenu closeMenu={() => setHoveredNav(null)} />}
                                {hoveredNav === "talent" && <TalentMenu closeMenu={() => setHoveredNav(null)} />}
                                {hoveredNav === "resources" && <ResourcesMenu closeMenu={() => setHoveredNav(null)} />}
                                {hoveredNav === "careers" && <CareersMenu closeMenu={() => setHoveredNav(null)} />}
                            </div>
                        )}
                    </AnimatePresence>

                </Container>
            </header>
            {!isHome && <div className="h-[80px]" />}
            <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={NAV_ITEMS} />

            {/* SEARCH OVERLAY */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    )
}
