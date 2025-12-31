"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon, ArrowRight, TrendingUp, Award, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  title: string
  description: string
  client: string
  image: string
  href: string
  metrics?: {
    label: string
    value: string
    icon?: LucideIcon
  }[]
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    badge: "bg-blue-600",
    overlay: "from-blue-900/80",
    text: "text-blue-600",
    border: "border-blue-200"
  },
  green: {
    badge: "bg-green-600",
    overlay: "from-green-900/80",
    text: "text-green-600",
    border: "border-green-200"
  },
  purple: {
    badge: "bg-purple-600",
    overlay: "from-purple-900/80",
    text: "text-purple-600",
    border: "border-purple-200"
  },
  orange: {
    badge: "bg-orange-600",
    overlay: "from-orange-900/80",
    text: "text-orange-600",
    border: "border-orange-200"
  },
  cyan: {
    badge: "bg-cyan-600",
    overlay: "from-cyan-900/80",
    text: "text-cyan-600",
    border: "border-cyan-200"
  },
  indigo: {
    badge: "bg-indigo-600",
    overlay: "from-indigo-900/80",
    text: "text-indigo-600",
    border: "border-indigo-200"
  },
  slate: {
    badge: "bg-slate-600",
    overlay: "from-slate-900/80",
    text: "text-slate-900",
    border: "border-slate-300"
  }
}

export default function CaseStudyCard({
  title,
  description,
  client,
  image,
  href,
  metrics,
  color = "blue",
  delay = 0,
  className
}: CaseStudyCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative bg-white rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden",
        colors.border,
        className
      )}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t", colors.overlay)} />

        {/* Client Badge */}
        <div className="absolute top-4 left-4">
          <span className={cn("px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg", colors.badge)}>
            {client}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-slate-600 leading-relaxed mb-6 line-clamp-3"
        >
          {description}
        </motion.p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-3 bg-slate-50 rounded-lg">
                {metric.icon && (
                  <metric.icon className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                )}
                <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                <div className="text-xs text-slate-600">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Link */}
        <Link
          href={href}
          className={cn(
            "inline-flex items-center font-bold group-hover:underline decoration-2 underline-offset-2",
            colors.text
          )}
        >
          Hikayeyi Oku
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Decorative Gradient */}
      <div
        className={cn(
          "absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl",
          colors.badge
        )}
      />
    </motion.div>
  )
}
