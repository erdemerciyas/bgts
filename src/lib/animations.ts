import { Variants, Transition } from "framer-motion"

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } }
}

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } }
}

export const iconReveal = {
  initial: { scale: 0, rotate: -180 },
  whileInView: { scale: 1, rotate: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, type: "spring", stiffness: 200 }
}

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
  transition: {
    staggerChildren: 0.1
  }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const slideUp = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const bounceIn = {
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 20 }
}

export const pulseGlow = {
  initial: { boxShadow: "0 0 0 0 rgba(24, 99, 220, 0.4)" },
  whileHover: {
    boxShadow: "0 0 20px 10px rgba(24, 99, 220, 0.2)"
  },
  transition: { duration: 0.3 }
}

export const rotateIn = {
  initial: { rotate: -180, opacity: 0, scale: 0.5 },
  whileInView: { rotate: 0, opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
}
