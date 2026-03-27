"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type KineticMarqueeProps = {
  children: ReactNode
  className?: string
  durationSeconds?: number
  density?: number
}

export default function KineticMarquee({
  children,
  className,
  durationSeconds = 22,
  density = 5,
}: KineticMarqueeProps) {
  const shouldReduceMotion = useReducedMotion()

  const Segment = () => (
    <div className="flex min-w-max flex-nowrap items-center gap-10 pr-10">
      {Array.from({ length: density }).map((_, idx) => (
        <div key={idx} className="flex min-w-max flex-nowrap items-center gap-10">
          <span className="min-w-max shrink-0 whitespace-nowrap leading-none">{children}</span>
          <span className="text-foreground/50">•</span>
        </div>
      ))}
    </div>
  )

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            "flex w-[200%] will-change-transform",
            shouldReduceMotion ? undefined : "kinetic-marquee-track"
          )}
          style={shouldReduceMotion ? undefined : { animationDuration: `${durationSeconds}s` }}
        >
          <div className="flex w-1/2">
            <Segment />
          </div>
          <div className="flex w-1/2">
            <Segment />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
