"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"
import {
    ChevronDown, Menu, Search,
    Linkedin, Mail
} from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { NAV_ITEMS } from "./header/data"
import { Container } from "@/components/ui/Container"

const MegaMenus = dynamic(() => import('./header/MegaMenus').then(mod => ({
    default: ({ type, closeMenu }: { type: string; closeMenu: () => void }) => {
        const menus: Record<string, React.ComponentType<{ closeMenu: () => void }>> = {
            services: mod.ServicesMenu,
            industries: mod.IndustriesMenu,
            products: mod.ProductsMenu,
            // talent: mod.TalentMenu,
            resources: mod.ResourcesMenu,
            careers: mod.CareersMenu,
        }
        const MenuComponent = menus[type]
        return MenuComponent ? <MenuComponent closeMenu={closeMenu} /> : null
    }
})), { ssr: false })

const SearchOverlay = dynamic(
    () => import('./search/SearchOverlay').then(mod => ({ default: mod.SearchOverlay })),
    { ssr: false }
)

// Lazy load mobile nav for better performance
const MobileNav = dynamic(() => import('./MobileNav'), {
    loading: () => null, // You might want a spinner here
    ssr: false,
})

type MobileNavDict = {
    services: Record<string, string>
    industries: Record<string, string>
    products: Record<string, string>
    talent: Record<string, string>
    talentModel: Record<string, string>
    resources: Record<string, string>
    careers: Record<string, string>
    quickLinks: Record<string, string>
}

export default function Header({ dict, mobileNavDict }: { dict?: { nav: Record<string, string> }; mobileNavDict?: MobileNavDict }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [hoveredNav, setHoveredNav] = React.useState<string | null>(null)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isSearchOpen, setIsSearchOpen] = React.useState(false) // Added State
    const pathname = usePathname()

    // Determine current language by splitting pathname, fallback to tr
    const currentLang = pathname.split('/')[1] || 'tr';
    const isHome = pathname === `/${currentLang}` || pathname === '/';
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
        : "text-corporate-dark hover:text-corporate-secondary";

    const logoSrc = isTransparent ? "/BGTS_logo_white.png" : "/BGTS_logo.png";
    const headerBgClass = isTransparent ? "bg-transparent border-transparent" : "bg-white/95 border-border shadow-sm backdrop-blur-md";

    // Translate NAV_ITEMS overriding its name with dictionary entries
    const translatedNavItems = NAV_ITEMS.map((item) => ({
      ...item,
      name: dict?.nav?.[item.id || ""] || item.name,
      // Also adjust href to include language segment if the route is mostly root-based 
      // or if it already starts with /, we might want to make it relative to lang, 
      // but let's stick to the translation part exactly as requested first.
    }));

    return (
        <>
            <header className={cn("fixed top-0 w-full z-50 transition-all duration-300 border-b", headerBgClass)}>
                <Container
                    className="h-[80px] flex items-center justify-between relative"
                    onMouseLeave={() => setHoveredNav(null)}
                >
                    <Link href={`/${currentLang}`} className="flex items-center mr-10 shrink-0">
                        <Image src={logoSrc} alt="BGTS Logo" width={150} height={66} className="object-contain" priority />
                    </Link>

                    <nav className="hidden lg:flex items-center h-full gap-4 xl:gap-6 flex-1 justify-start" role="navigation" aria-label="Ana navigasyon">
                        {translatedNavItems.map((item) => {
                            const hasMegaMenu = ["services", "industries", "products", /* "talent", */ "resources", "careers"].includes(item.id || "");
                            return (
                            <div
                                key={item.name}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => hasMegaMenu && setHoveredNav(item.id || item.name)}
                            >
                                <Link
                                    // Make links language-aware
                                    href={item.href === "#" ? "#" : `/${currentLang}${item.href}`}
                                    onClick={(e) => {
                                        if (item.href === "#" || item.href === "") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className={cn(
                                        "flex items-center gap-1.5 text-[14px] font-bold tracking-wide transition-colors py-8 border-b-2 border-transparent uppercase whitespace-nowrap",
                                        textColorClass,
                                        hoveredNav === (item.id || item.name) ? (isTransparent ? "text-corporate-accent border-corporate-accent opacity-100" : "text-corporate-secondary border-corporate-secondary") : ""
                                    )}
                                    aria-haspopup={hasMegaMenu ? "true" : undefined}
                                    aria-expanded={hoveredNav === (item.id || item.name)}
                                >
                                    {item.name}
                                    {hasMegaMenu && (
                                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", hoveredNav === (item.id || item.name) ? "rotate-180" : "")} aria-hidden="true" />
                                    )}
                                </Link>
                            </div>
                        )})}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4 ml-auto">
                        <button
                            className={cn("w-10 h-10 flex items-center justify-center rounded-full transition-all", isTransparent ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" : "bg-corporate-surface text-corporate-dark hover:bg-corporate-accent/20")}
                            aria-label="Ara"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="w-4 h-4" aria-hidden="true" />
                        </button>

                        {/* Language Switcher */}
                        <Link
                            href={currentLang === 'tr'
                                ? pathname.replace(/^\/tr/, '/en') || '/en'
                                : pathname.replace(/^\/en/, '/tr') || '/tr'
                            }
                            className={cn(
                                "flex items-center justify-center w-10 h-10 rounded-full text-[13px] font-extrabold tracking-widest transition-all border",
                                isTransparent
                                    ? "bg-white/10 text-white border-white/30 hover:bg-white/25"
                                    : "bg-corporate-surface text-corporate-dark border-border hover:bg-corporate-accent/20 hover:text-corporate-secondary"
                            )}
                            aria-label={currentLang === 'tr' ? 'Switch to English' : 'Türkçeye Geç'}
                        >
                            {currentLang === 'tr' ? 'EN' : 'TR'}
                        </Link>

                        <div className="flex items-center gap-3 pl-4 border-l border-border/50" role="group" aria-label="Sosyal medya">
                            <Link
                                href="https://www.linkedin.com/company/bilgeadam/"
                                target="_blank"
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href={`/${currentLang}/contact`}
                                className={cn("transition-colors hover:scale-110", isTransparent ? "text-white/80 hover:text-white" : "text-corporate-dark hover:text-corporate-secondary")}
                                aria-label="İletişim"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>

                    <button
                        className={cn("lg:hidden p-2 ml-auto rounded-md", isTransparent ? "text-white" : "text-corporate-dark")}
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
                                <MegaMenus type={hoveredNav} closeMenu={() => setHoveredNav(null)} />
                            </div>
                        )}
                    </AnimatePresence>

                </Container>
            </header>
            {!isHome && <div className="h-[80px]" />}
            <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={translatedNavItems} mobileNavDict={mobileNavDict} />

            {/* SEARCH OVERLAY */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    )
}

