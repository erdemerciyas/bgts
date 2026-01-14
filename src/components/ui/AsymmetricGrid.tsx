"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AsymmetricGridProps {
  children: React.ReactNode
  className?: string
  layout?: "standard" | "asymmetric" | "offset" | "breakout"
}

export function AsymmetricGrid({
  children,
  className,
  layout = "standard"
}: AsymmetricGridProps) {
  const layouts: Record<string, string> = {
    standard: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    asymmetric: "grid grid-cols-1 md:grid-cols-12 gap-8",
    offset: "grid grid-cols-1 md:grid-cols-2 gap-8 ml-8",
    breakout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
  }

  return (
    <div className={cn(layouts[layout], className)}>
      {children}
    </div>
  )
}
