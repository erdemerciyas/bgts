"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/Breadcrumb"
import { Home, LayoutGrid, Briefcase, Box, Users, Info, Phone } from "lucide-react"

// Segment translations map
const SEGMENT_LABELS: Record<string, string> = {
    "services": "Hizmetler",
    "industries": "Sektörler",
    "products": "Ürünler",
    "contact": "İletişim",
    "about": "Hakkımızda",
    "hr": "Genç Mühendisler",
    "software-development": "Yazılım Geliştirme",
    "managed-services": "Yönetilen Hizmetler",
    "devops": "DevOps",
    "banking": "Bankacılık & Finans",
    "defense": "Savunma Sanayi",
    "retail-telecom": "Perakende & Telekom",
    "ai-hiring-assistant": "AI Hiring Assistant",
    "cv-converter": "CV Converter",
    "doc2bot": "Doc2Bot",
    "docmind": "DocMind",
    "consultancy": "Danışmanlık",
    "talent": "Yetenek Yönetimi"
}

// Optional: Specific icons for top-level segments
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SEGMENT_ICONS: Record<string, any> = {
    "services": LayoutGrid,
    "industries": Briefcase,
    "products": Box,
    "hr": Users,
    "about": Info,
    "contact": Phone
}

export default function GlobalBreadcrumb() {
    const pathname = usePathname()

    // Don't show on homepage
    if (pathname === "/") return null

    // Remove query params and split path
    const pathWithoutQuery = pathname.split("?")[0]
    const pathSegments = pathWithoutQuery.split("/").filter((segment) => segment !== "")

    // Build breadcrumb items
    const items: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        // Construct URL for this segment
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`

        // Get label from map or beautify the segment
        const label = SEGMENT_LABELS[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

        // Get icon if available (only for specific levels if needed, or all)
        const icon = SEGMENT_ICONS[segment]

        return {
            label,
            href,
            icon
        }
    })

    // Ensure "Ana Sayfa" is always prepended by the Breadcrumb component itself (showHome=true),
    // but if we want to customize the root labeled in Breadcrumb.tsx, it's already "Ana Sayfa".

    return (
        <Breadcrumb
            items={items}
            showHome={true}
            className="bg-slate-50 border-b border-slate-200"
        />
    )
}
