"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Heading } from "@/components/ui/Typography"

export interface TechStackItem {
  name: string
  icon?: LucideIcon
  category: string
  description?: string
}

interface TechStackGridProps {
  items: TechStackItem[]
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    border: "border-blue-200",
    hover: "hover:border-blue-400",
    category: "text-blue-700"
  },
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-600",
    iconColor: "text-white",
    border: "border-green-200",
    hover: "hover:border-green-400",
    category: "text-green-700"
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
    border: "border-purple-200",
    hover: "hover:border-purple-400",
    category: "text-purple-700"
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-600",
    iconColor: "text-white",
    border: "border-orange-200",
    hover: "hover:border-orange-400",
    category: "text-orange-700"
  },
  cyan: {
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-600",
    iconColor: "text-white",
    border: "border-cyan-200",
    hover: "hover:border-cyan-400",
    category: "text-cyan-700"
  },
  indigo: {
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    border: "border-indigo-200",
    hover: "hover:border-indigo-400",
    category: "text-indigo-700"
  },
  slate: {
    bg: "bg-slate-50",
    iconBg: "bg-slate-700",
    iconColor: "text-white",
    border: "border-slate-200",
    hover: "hover:border-slate-400",
    category: "text-slate-800"
  }
}

export default function TechStackGrid({
  items,
  color = "blue",
  delay = 0,
  className
}: TechStackGridProps) {
  const colors = colorVariants[color]

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, TechStackItem[]>)

  return (
    <div className={cn("space-y-8", className)}>
      {Object.entries(groupedItems).map(([category, categoryItems], groupIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + groupIndex * 0.1 }}
        >
          {/* Category Header */}
          <Heading variant="h3" className={cn("mb-6", colors.category)}>
            {category}
          </Heading>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoryItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + groupIndex * 0.1 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={cn(
                  "relative p-5 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all duration-300",
                  colors.bg,
                  colors.border,
                  colors.hover
                )}
              >
                {item.icon ? (
                  <item.icon className={cn("w-8 h-8 mb-3", colors.iconBg, colors.iconColor, "rounded-lg p-1.5")} />
                ) : (
                  <div className={cn("w-8 h-8 mb-3 rounded-lg flex items-center justify-center text-lg font-bold", colors.iconBg, colors.iconColor)}>
                    {item.name.charAt(0)}
                  </div>
                )}

                <h4 className="font-bold text-slate-900 mb-1">{item.name}</h4>
                {item.description && (
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Decorative dot */}
                <div className={cn("absolute top-3 right-3 w-2 h-2 rounded-full", colors.iconBg)} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
