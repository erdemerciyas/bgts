"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href?: string; id?: string }>
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
        >
          <div className="h-[80px] flex items-center justify-between px-6 border-b border-gray-100">
            <div className="relative w-32 h-10">
              <Image src="/BGTS_logo.png" alt="BGTS Logo" fill className="object-contain" />
            </div>
            <button onClick={onClose} className="p-2 bg-slate-100 rounded-full" aria-label="Menüyü kapat">
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-4">
                <Link
                  href={item.href || "#"}
                  className="text-2xl font-bold text-slate-900 block"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
