"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb"
import { dictionaryKey, i18n, type Locale } from "@/i18n-config"
import { stripBasePath, stripLocalePrefix } from "@/lib/base-path"
import { localizedHref } from "@/lib/routes"
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

const LOCALES: readonly string[] = i18n.locales;

type BreadcrumbDict = Record<string, string>;

const dictionaryCache: Record<string, BreadcrumbDict> = {};

async function loadBreadcrumbDict(lang: string): Promise<BreadcrumbDict> {
    if (dictionaryCache[lang]) return dictionaryCache[lang];
    const file = dictionaryKey(lang as Locale);
    const mod = await import(`@/dictionaries/${file}.json`);
    const dict = mod.default?.breadcrumb ?? {};
    dictionaryCache[lang] = dict;
    return dict;
}

export default function GlobalBreadcrumb() {
    const pathname = usePathname()
    const pathWithoutBase = stripBasePath(pathname);
    const { locale: currentLang, urlPath } = stripLocalePrefix(pathWithoutBase);
    const isHome = urlPath === "/";

    const [labels, setLabels] = useState<BreadcrumbDict>({});

    useEffect(() => {
        loadBreadcrumbDict(LOCALES.includes(currentLang) ? currentLang : 'tr').then(setLabels);
    }, [currentLang]);

    if (isHome) return null

    const pathSegments = urlPath.split("/").filter((segment) => segment !== "")

    const items: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        const href = localizedHref(currentLang, `/${pathSegments.slice(0, index + 1).join("/")}`)

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
