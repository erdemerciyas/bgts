"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  features?: string[]
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    title: "text-blue-900",
    border: "border-blue-200",
    hover: "hover:border-blue-400",
    arrow: "text-blue-600"
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-600",
    iconColor: "text-white",
    title: "text-green-900",
    border: "border-green-200",
    hover: "hover:border-green-400",
    arrow: "text-green-600"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
    title: "text-purple-900",
    border: "border-purple-200",
    hover: "hover:border-purple-400",
    arrow: "text-purple-600"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-orange-600",
    iconColor: "text-white",
    title: "text-orange-900",
    border: "border-orange-200",
    hover: "hover:border-orange-400",
    arrow: "text-orange-600"
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconBg: "bg-cyan-600",
    iconColor: "text-white",
    title: "text-cyan-900",
    border: "border-cyan-200",
    hover: "hover:border-cyan-400",
    arrow: "text-cyan-600"
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    title: "text-indigo-900",
    border: "border-indigo-200",
    hover: "hover:border-indigo-400",
    arrow: "text-indigo-600"
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-50 to-slate-100",
    iconBg: "bg-slate-600",
    iconColor: "text-white",
    title: "text-slate-900",
    border: "border-slate-200",
    hover: "hover:border-slate-400",
    arrow: "text-slate-600"
  }
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  features,
  color = "blue",
  delay = 0,
  className
}: ServiceCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative p-8 rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300",
        colors.bg,
        colors.border,
        colors.hover,
        className
      )}
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform",
          colors.iconBg
        )}
      >
        <Icon className={cn("w-8 h-8", colors.iconColor)} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <h3 className={cn("text-2xl font-bold mb-4", colors.title)}>
          {title}
        </h3>
        <p className="text-slate-700 leading-relaxed mb-6">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <div className={cn("w-1.5 h-1.5 rounded-full", colors.iconBg)} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className={cn(
            "inline-flex items-center font-bold group-hover:underline decoration-2 underline-offset-2",
            colors.arrow
          )}
        >
          Detayları İncele
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <div
        className={cn(
          "absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 blur-2xl",
          colors.iconBg
        )}
      />
    </motion.div>
  )
}
