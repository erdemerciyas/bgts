"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, ChevronRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href: string
  icon?: LucideIcon
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export default function Breadcrumb({ items, className, showHome = true }: BreadcrumbProps) {
  const pathname = usePathname()

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bgts.com.tr'}${item.href}`
    }))
  }

  const allItems = showHome
    ? [{ label: "Ana Sayfa", href: "/", icon: Home }, ...items]
    : items

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={cn(
          "w-full bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 py-4",
          className
        )}
      >
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1
              const isActive = pathname === item.href

              return (
                <React.Fragment key={item.href}>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center"
                  >
                    {isLast ? (
                      <span
                        className={cn(
                          "font-semibold px-3 py-1.5 rounded-lg",
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                            : "text-slate-600"
                        )}
                        aria-current="page"
                      >
                        {item.icon && <item.icon className="w-4 h-4 inline mr-1.5" />}
                        {item.label}
                      </span>
                    ) : item.href === "/" ? (
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center px-3 py-1.5 rounded-lg transition-all duration-200",
                          "hover:bg-slate-100 hover:text-blue-600",
                          "text-slate-600"
                        )}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                        )}
                        <span className="group-hover:underline decoration-2 underline-offset-2">
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <span
                        className={cn(
                          "flex items-center px-3 py-1.5 rounded-lg text-slate-600"
                        )}
                      >
                        {item.icon && (
                          <item.icon className="w-4 h-4 mr-1.5" />
                        )}
                        <span>
                          {item.label}
                        </span>
                      </span>
                    )}
                  </motion.li>

                  {!isLast && (
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                      className="flex items-center text-slate-400"
                      aria-hidden="true"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.li>
                  )}
                </React.Fragment>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
