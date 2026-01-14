"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientMeshProps {
  opacity?: number
  className?: string
}

export function GradientMesh({ opacity = 0.6, className }: GradientMeshProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity
        }}
      />

      {/* Gradient Mesh Circles */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background: "var(--gradient-mesh-1)",
          transform: "translate(-50%, -50%)"
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: "var(--gradient-mesh-2)",
          transform: "translate(50%, 50%)"
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: "var(--gradient-mesh-3)",
        }}
      />
    </div>
  )
}
