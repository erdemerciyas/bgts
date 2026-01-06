"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Heading, Text as UIText } from "@/components/ui/Typography"

interface ContactCardProps {
  title: string
  description?: string
  icon: LucideIcon
  contactInfo?: string | React.ReactNode
  link?: string
  linkText?: string
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
    hover: "hover:border-blue-400"
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-600",
    iconColor: "text-white",
    title: "text-green-900",
    border: "border-green-200",
    hover: "hover:border-green-400"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-600",
    iconColor: "text-white",
    title: "text-purple-900",
    border: "border-purple-200",
    hover: "hover:border-purple-400"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-orange-600",
    iconColor: "text-white",
    title: "text-orange-900",
    border: "border-orange-200",
    hover: "hover:border-orange-400"
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconBg: "bg-cyan-600",
    iconColor: "text-white",
    title: "text-cyan-900",
    border: "border-cyan-200",
    hover: "hover:border-cyan-400"
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-600",
    iconColor: "text-white",
    title: "text-indigo-900",
    border: "border-indigo-200",
    hover: "hover:border-indigo-400"
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-50 to-slate-100",
    iconBg: "bg-slate-600",
    iconColor: "text-white",
    title: "text-slate-900",
    border: "border-slate-200",
    hover: "hover:border-slate-400"
  }
}

export default function ContactCard({
  title,
  description,
  icon: Icon,
  contactInfo,
  link,
  linkText = "İletişime Geç",
  color = "blue",
  delay = 0,
  className
}: ContactCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "relative p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300",
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
          "w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg",
          colors.iconBg
        )}
      >
        <Icon className={cn("w-7 h-7", colors.iconColor)} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <Heading variant="h4" className={cn("mb-2", colors.title)}>
          {title}
        </Heading>
        {description && (
          <UIText variant="small" className="text-slate-600 mb-4 leading-relaxed">
            {description}
          </UIText>
        )}
        {contactInfo && (
          <div className="text-slate-800 font-semibold mb-4">
            {typeof contactInfo === 'string' ? (
              <UIText className="text-slate-800">{contactInfo}</UIText>
            ) : (
              contactInfo
            )}
          </div>
        )}
        {link && (
          <a
            href={link}
            className={cn(
              "inline-flex items-center font-bold text-sm hover:underline decoration-2 underline-offset-2",
              colors.title
            )}
          >
            {linkText}
          </a>
        )}
      </motion.div>

      {/* Decorative Gradient */}
      <div
        className={cn(
          "absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-10 blur-2xl",
          colors.iconBg
        )}
      />
    </motion.div>
  )
}
