import {
    Database, Code, Activity, Cpu, Globe, Shield, Server, ShoppingBag,
    CheckCircle2, FileText, PlayCircle, Linkedin, Briefcase
} from "lucide-react"

export const STYLES = {
    // Container
    megaMenuWrapper: "absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] bg-white shadow-2xl rounded-b-xl border-t border-gray-100 ring-1 ring-black/5 overflow-hidden z-50",

    // Headers (Column Headers) - TRACKING + UPPERCASE
    columnHeader: "font-extrabold text-slate-900 text-[12px] tracking-[0.2em] uppercase mb-6",

    // Item Titles (Link Headers) - BOLD
    itemTitle: "font-bold text-slate-900 text-[15px] mb-1 group-hover:text-blue-600 transition-colors uppercase leading-tight",

    // Item Descriptions (Subtext) - MEDIUM + COLOR
    itemDesc: "text-slate-500 text-[13px] leading-relaxed font-medium",

    // Italic Descriptions (Quotes/Products)
    itemDescItalic: "text-slate-500 text-[13px] leading-relaxed font-medium italic",

    // Link / Interaction Styles
    linkGroup: "group block relative pl-8",
    highlightLink: "flex items-center gap-2 text-cyan-700 font-bold text-sm group cursor-pointer hover:underline uppercase tracking-tight",
    standardLink: "inline-flex items-center text-slate-900 font-extrabold uppercase tracking-wide hover:text-blue-600 transition-colors text-[12px]",

    // Icon Styles
    iconContainer: "absolute left-0 top-1 text-slate-400 group-hover:text-blue-600 transition-colors w-5 h-5",
    iconLarge: "w-6 h-6", // For featured sections

    // Image Styles
    imageThumbnail: "w-24 h-16 rounded-2xl object-contain bg-transparent transition-all group-hover:scale-110",
    imageCard: "relative w-full h-32 rounded-xl overflow-hidden mb-6 shadow-sm border border-slate-100",
}

export const NAV_ITEMS = [
    { name: "HİZMETLER", href: "/services", id: "services" },
    { name: "SEKTÖRLER", href: "/industries", id: "industries" },
    { name: "ÜRÜNLER", href: "/products", id: "products" },
    { name: "GENÇ MÜHENDİSLER", href: "/hr#talent", id: "talent" },
    { name: "BİLGİ MERKEZİ", href: "/resources", id: "resources" },
    { name: "YERİNİ AL", href: "/careers", id: "careers" },
]
