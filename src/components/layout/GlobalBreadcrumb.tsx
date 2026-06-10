"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb"
import { LayoutGrid, Briefcase, Box, Users, Info, Phone } from "lucide-react"

// Optional: Specific icons for top-level segments
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEGMENT_ICONS: Record<string, any> = {
    "services": LayoutGrid,
    "hizmetler": LayoutGrid,
    "industries": Briefcase,
    "sektorler": Briefcase,
    "products": Box,
    "urunler": Box,
    "hr": Users,
    "about": Info,
    "hakkimizda": Info,
    "contact": Phone,
    "iletisim": Phone,
}

const LOCALES = ["tr", "en"];

type BreadcrumbDict = Record<string, string>;

const dictionaryCache: Record<string, BreadcrumbDict> = {};

async function loadBreadcrumbDict(lang: string): Promise<BreadcrumbDict> {
    if (dictionaryCache[lang]) return dictionaryCache[lang];
    const mod = await import(`@/dictionaries/${lang}.json`);
    const dict = mod.default?.breadcrumb ?? {};
    dictionaryCache[lang] = dict;
    return dict;
}

export default function GlobalBreadcrumb() {
    const pathname = usePathname()
    const currentLang = pathname.split('/')[1] || 'tr';
    const isHome = pathname === `/${currentLang}` || pathname === "/";

    const [labels, setLabels] = useState<BreadcrumbDict>({});

    useEffect(() => {
        loadBreadcrumbDict(LOCALES.includes(currentLang) ? currentLang : 'tr').then(setLabels);
    }, [currentLang]);

    // Don't show on homepage
    if (isHome) return null

    // Remove query params and split path
    const pathWithoutQuery = pathname.split("?")[0]

    // Filter out empty segments and locale segments
    const pathSegments = pathWithoutQuery.split("/").filter((segment) => segment !== "" && !LOCALES.includes(segment))

    // Build breadcrumb items
    const items: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        // Construct URL for this segment by including the language prefix
        const href = `/${currentLang}/${pathSegments.slice(0, index + 1).join("/")}`

        // Get label from dictionary or beautify the segment
        const label = labels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

        // Get icon if available
        const icon = SEGMENT_ICONS[segment]

        return {
            label,
            href,
            icon
        }
    })

    return (
        <Breadcrumb
            items={items}
            showHome={true}
            homeLabel={labels["home"]}
            className="bg-slate-50 border-b border-slate-200"
        />
    )
}
