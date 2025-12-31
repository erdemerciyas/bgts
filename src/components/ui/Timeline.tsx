"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  year: string
  title: string
  description?: string
  icon?: LucideIcon
  color?: "blue" | "green" | "purple" | "orange" | "cyan" | "indigo" | "slate"
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
  layout?: "vertical" | "horizontal"
}

const colorVariants = {
  blue: "bg-blue-600 border-blue-200",
  green: "bg-green-600 border-green-200",
  purple: "bg-purple-600 border-purple-200",
  orange: "bg-orange-600 border-orange-200",
  cyan: "bg-cyan-600 border-cyan-200",
  indigo: "bg-indigo-600 border-indigo-200",
  slate: "bg-slate-600 border-slate-200"
}

export default function Timeline({ items, className, layout = "vertical" }: TimelineProps) {
  if (layout === "horizontal") {
    return (
      <div className={cn("relative overflow-x-auto", className)}>
        <div className="min-w-max px-8 py-12">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full" />

          <div className="relative flex items-center justify-between gap-8">
            {items.map((item, index) => {
              const isEven = index % 2 === 0
              const colors = colorVariants[item.color || "blue"]

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col items-center text-center w-48",
                    isEven ? "mt-16" : "mb-16"
                  )}
                >
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4",
                      colors
                    )}
                  >
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className={cn(
                      "mt-6 p-6 rounded-xl bg-white border shadow-lg hover:shadow-xl transition-shadow max-w-full",
                      isEven ? "order-last" : "order-first"
                    )}
                  >
                    {item.icon && (
                      <item.icon className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                    )}
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // Vertical Timeline (default)
  return (
    <div className={cn("relative", className)}>
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full" />

      <div className="space-y-12 pl-20">
        {items.map((item, index) => {
          const colors = colorVariants[item.color || "blue"]

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Year Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className={cn(
                  "absolute -left-16 top-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4",
                  colors
                )}
              >
                <span className="text-white font-bold text-sm">{item.year}</span>
              </motion.div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-xl border shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  {item.icon && (
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
