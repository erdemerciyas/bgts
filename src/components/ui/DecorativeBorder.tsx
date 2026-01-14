"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DecorativeBorderProps {
  variant?: "corner" | "bottom-right" | "full" | "left-strip" | "right-strip"
  className?: string
}

export function DecorativeBorder({
  variant = "corner",
  className
}: DecorativeBorderProps) {
  const variants: Record<string, string> = {
    corner: "absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[var(--color-primary)]",
    "bottom-right": "absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[var(--color-primary)]",
    full: "absolute inset-0 border-4 border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
    "left-strip": "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent",
    "right-strip": "absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent"
  }

  return <div className={cn(variants[variant], className)} />
}
