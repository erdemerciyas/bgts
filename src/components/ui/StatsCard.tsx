"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  value: string | number
  label: string
  icon?: LucideIcon
  description?: string
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    value: "text-blue-700",
    border: "border-blue-100"
  },
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-600",
    iconColor: "text-white",
    value: "text-green-700",
    border: "border-green-100"
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
    value: "text-purple-700",
    border: "border-purple-100"
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-600",
    iconColor: "text-white",
    value: "text-orange-700",
    border: "border-orange-100"
  },
  cyan: {
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-600",
    iconColor: "text-white",
    value: "text-cyan-700",
    border: "border-cyan-100"
  },
  indigo: {
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    value: "text-indigo-700",
    border: "border-indigo-100"
  },
  slate: {
    bg: "bg-slate-50",
    iconBg: "bg-slate-600",
    iconColor: "text-white",
    value: "text-slate-700",
    border: "border-slate-100"
  }
}

export default function StatsCard({
  value,
  label,
  icon: Icon,
  description,
  color = "blue",
  delay = 0,
  className
}: StatsCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "relative p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300",
        colors.bg,
        colors.border,
        className
      )}
    >
      {Icon && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg",
            colors.iconBg
          )}
        >
          <Icon className={cn("w-7 h-7", colors.iconColor)} />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <h3 className={cn("text-4xl font-bold mb-2", colors.value)}>
          {value}
        </h3>
        <p className="text-slate-700 font-semibold mb-1">{label}</p>
        {description && (
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        )}
      </motion.div>

      {/* Decorative gradient blob */}
      <div
        className={cn(
          "absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl",
          colors.iconBg
        )}
      />
    </motion.div>
  )
}
