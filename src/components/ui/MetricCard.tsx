"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  description?: string
  icon?: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    value: "text-blue-700",
    border: "border-blue-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-600",
    iconColor: "text-white",
    value: "text-green-700",
    border: "border-green-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
    value: "text-purple-700",
    border: "border-purple-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-orange-600",
    iconColor: "text-white",
    value: "text-orange-700",
    border: "border-orange-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconBg: "bg-cyan-600",
    iconColor: "text-white",
    value: "text-cyan-700",
    border: "border-cyan-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    value: "text-indigo-700",
    border: "border-indigo-200",
    trendUp: "text-green-600",
    trendDown: "text-red-600"
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-50 to-slate-100",
    iconBg: "bg-slate-700",
    iconColor: "text-white",
    value: "text-slate-800",
    border: "border-slate-300",
    trendUp: "text-emerald-700",
    trendDown: "text-red-700"
  }
}

export default function MetricCard({
  title,
  value,
  unit,
  description,
  icon: Icon,
  trend,
  trendValue,
  color = "blue",
  delay = 0,
  className
}: MetricCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300",
        colors.bg,
        colors.border,
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        {Icon && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg",
              colors.iconBg
            )}
          >
            <Icon className={cn("w-6 h-6", colors.iconColor)} />
          </motion.div>
        )}

        {trend && trendValue && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
            className={cn(
              "flex items-center gap-1 text-sm font-semibold",
              trend === "up" ? colors.trendUp : trend === "down" ? colors.trendDown : "text-slate-600"
            )}
          >
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4" />
            ) : trend === "down" ? (
              <TrendingDown className="w-4 h-4" />
            ) : null}
            {trendValue}
          </motion.div>
        )}
      </div>

      {/* Value */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <h3 className="text-sm text-slate-600 font-medium mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className={cn("text-4xl font-bold", colors.value)}>
            {value}
          </span>
          {unit && (
            <span className="text-lg text-slate-600 font-semibold">{unit}</span>
          )}
        </div>
        {description && (
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>

      {/* Decorative Gradient */}
      <div
        className={cn(
          "absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 blur-2xl",
          colors.iconBg
        )}
      />
    </motion.div>
  )
}
