"use client"

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { useEffect } from "react"

/**
 * A lightweight magnetic cursor.
 * - Uses pointer events + spring smoothing.
 * - Disabled automatically on touch devices and when prefers-reduced-motion is enabled.
 */
export function MagneticCursor() {
  const shouldReduceMotion = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })

  useEffect(() => {
    if (shouldReduceMotion) return
    if (typeof window === "undefined") return

    const isTouch = window.matchMedia?.("(pointer: coarse)")?.matches
    if (isTouch) return

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [shouldReduceMotion, x, y])

  if (shouldReduceMotion) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="h-3 w-3 rounded-full bg-primary/60" />
      <div className="absolute inset-0 -m-2 rounded-full border border-primary/25" />
    </motion.div>
  )
}
