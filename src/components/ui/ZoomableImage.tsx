"use client"

import { useState, useEffect } from "react"
import Image, { ImageProps } from "next/image"
import { createPortal } from "react-dom"
import { X, ZoomIn } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ZoomableImageProps extends Omit<ImageProps, "onClick"> {
    containerClassName?: string
}

export function ZoomableImage({ containerClassName, alt, ...props }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false)
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEsc)
            document.body.style.overflow = "hidden" // Prevent scrolling
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.removeEventListener("keydown", handleEsc)
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <>
            <div
                className={`relative cursor-zoom-in group ${containerClassName || ""}`}
                onClick={() => setIsOpen(true)}
            >
                <Image alt={alt} {...props} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
                </div>
            </div>

            {isOpen && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-2"
                            onClick={(e) => {
                                e.stopPropagation()
                                setIsOpen(false)
                            }}
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Use a regular img tag for the full version to avoid Next.js Image sizing constraints in generic modal usage, or use Next.js Image with object-contain */}
                            <div className="relative w-full h-full">
                                <Image
                                    alt={alt}
                                    {...props}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}
