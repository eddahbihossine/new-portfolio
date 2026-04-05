"use client"

import { useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

type ParallaxBetweenSectionsProps = {
  children: ReactNode
}

export function ParallaxBetweenSections({ children }: ParallaxBetweenSectionsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"])
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0])

  // Background flip-word: appears mid-way, travels top -> bottom, flips mid-way.
  const travelY = useTransform(scrollYProgress, [0.28, 0.78], ["-6vh", "56vh"], { clamp: true })
  const wordLayerOpacity = useTransform(scrollYProgress, [0, 0.28, 0.38, 0.68, 0.78, 1], [0, 0, 0.35, 0.35, 0, 0])
  const frontRotateX = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [0, 0, 180, 180])
  const backRotateX = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [-180, -180, 0, 0])
  const frontOpacity = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [1, 1, 0, 0])
  const backOpacity = useTransform(scrollYProgress, [0, 0.48, 0.52, 1], [0, 0, 1, 1])

  return (
    <div ref={containerRef} className="relative">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 will-change-transform"
          style={shouldReduceMotion ? { opacity: 0 } : { y, opacity }}
        >
          {/* Fallback tint (always valid) */}
          <div className="absolute inset-0 bg-foreground/5" />

          {/* OKLCH-aware overlays (visible in light + dark) */}
          <div className="absolute -inset-[20%] bg-[radial-gradient(closest-side_at_22%_25%,oklch(from_var(--foreground)_l_c_h_/_0.18)_0%,transparent_60%),radial-gradient(closest-side_at_78%_55%,oklch(from_var(--foreground)_l_c_h_/_0.14)_0%,transparent_62%)]" />
          <div className="absolute -inset-[20%] opacity-70 bg-[linear-gradient(to_right,oklch(from_var(--foreground)_l_c_h_/_0.14)_1px,transparent_1px),linear-gradient(to_bottom,oklch(from_var(--foreground)_l_c_h_/_0.14)_1px,transparent_1px)] bg-[size:92px_92px]" />
          <div className="absolute inset-0 opacity-[0.30] mix-blend-overlay bg-[radial-gradient(oklch(from_var(--foreground)_l_c_h_/_0.50)_1px,transparent_1px)] bg-[size:3px_3px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/35 to-background/0" />
        </motion.div>
      </div>

      <div className="pointer-events-none sticky top-24 z-[1] h-0">
        <motion.div
          aria-hidden="true"
          className="ml-4 sm:ml-6 inline-block select-none"
          style={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  y: travelY,
                  opacity: wordLayerOpacity,
                }
          }
        >
          <div className="relative [perspective:1100px]">
            <motion.span
              className="block whitespace-nowrap font-semibold tracking-tight text-foreground/80 text-[clamp(2.25rem,6.5vw,5.25rem)] leading-none"
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotateX: frontRotateX,
                      opacity: frontOpacity,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }
              }
            >
              EXPERIENCE
            </motion.span>

            <motion.span
              className="absolute inset-0 block whitespace-nowrap font-semibold tracking-tight text-foreground/80 text-[clamp(2.25rem,6.5vw,5.25rem)] leading-none"
              style={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      rotateX: backRotateX,
                      opacity: backOpacity,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }
              }
            >
              TECHNOLOGIES
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
