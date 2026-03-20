"use client"

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  strength?: number
}

/**
 * Wraps any element (button/link) and gives it a subtle magnetic pull.
 * Uses transform translate on hover based on pointer position within the bounds.
 */
export function MagneticButton({ children, className, strength = 10 }: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.6 })

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
        const relX = event.clientX - rect.left - rect.width / 2
        const relY = event.clientY - rect.top - rect.height / 2
        x.set((relX / rect.width) * strength)
        y.set((relY / rect.height) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
