"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
  rating?: number
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
  delay?: number
  className?: string
}

const colorVariants = {
  blue: {
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    quote: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:border-blue-400"
  },
  green: {
    bg: "bg-gradient-to-br from-green-50 to-green-100",
    quote: "text-green-600",
    border: "border-green-200",
    hover: "hover:border-green-400"
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    quote: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:border-purple-400"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    quote: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:border-orange-400"
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    quote: "text-cyan-600",
    border: "border-cyan-200",
    hover: "hover:border-cyan-400"
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    quote: "text-indigo-600",
    border: "border-indigo-200",
    hover: "hover:border-indigo-400"
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-50 to-slate-100",
    quote: "text-slate-600",
    border: "border-slate-200",
    hover: "hover:border-slate-400"
  }
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
  color = "blue",
  delay = 0,
  className
}: TestimonialCardProps) {
  const colors = colorVariants[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative p-8 rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300",
        colors.bg,
        colors.border,
        colors.hover,
        className
      )}
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6", colors.quote)}
      >
        <Quote className="w-6 h-6 text-white fill-current" />
      </motion.div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-slate-700 text-lg leading-relaxed mb-6 italic"
      >
        "{quote}"
      </motion.p>

      {/* Rating */}
      {rating && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className="flex gap-1 mb-6"
        >
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </motion.div>
      )}

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="flex items-center gap-4"
      >
        {avatar ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg",
            colors.quote
          )}>
            {author.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-slate-900">{author}</h4>
          <p className="text-sm text-slate-600">{role}</p>
        </div>
      </motion.div>

      {/* Decorative Gradient */}
      <div
        className={cn(
          "absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 blur-2xl",
          colors.quote
        )}
      />
    </motion.div>
  )
}
