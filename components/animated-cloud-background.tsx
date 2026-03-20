"use client"

import { motion, useReducedMotion } from "framer-motion"

type Cloud = {
  className: string
  animateX: number[]
  animateY: number[]
  duration: number
  delay: number
}

const clouds: Cloud[] = [
  {
    className:
      "absolute -top-28 left-1/2 h-56 w-[40rem] -translate-x-1/2 blur-3xl opacity-90 bg-[radial-gradient(closest-side_at_18%_62%,hsl(var(--muted)/0.70)_0%,transparent_72%),radial-gradient(closest-side_at_42%_45%,hsl(var(--muted)/0.85)_0%,transparent_74%),radial-gradient(closest-side_at_68%_42%,hsl(var(--muted)/0.80)_0%,transparent_74%),radial-gradient(closest-side_at_86%_62%,hsl(var(--muted)/0.68)_0%,transparent_72%)] dark:bg-[radial-gradient(closest-side_at_18%_62%,hsl(var(--foreground)/0.10)_0%,transparent_72%),radial-gradient(closest-side_at_42%_45%,hsl(var(--foreground)/0.14)_0%,transparent_74%),radial-gradient(closest-side_at_68%_42%,hsl(var(--foreground)/0.12)_0%,transparent_74%),radial-gradient(closest-side_at_86%_62%,hsl(var(--foreground)/0.10)_0%,transparent_72%)]",
    animateX: [-40, 40, -40],
    animateY: [0, -6, 0],
    duration: 22,
    delay: 0,
  },
  {
    className:
      "absolute top-24 -left-40 h-72 w-[44rem] blur-3xl opacity-85 bg-[radial-gradient(closest-side_at_16%_60%,hsl(var(--secondary)/0.55)_0%,transparent_72%),radial-gradient(closest-side_at_38%_42%,hsl(var(--muted)/0.78)_0%,transparent_74%),radial-gradient(closest-side_at_62%_40%,hsl(var(--muted)/0.72)_0%,transparent_74%),radial-gradient(closest-side_at_86%_62%,hsl(var(--secondary)/0.50)_0%,transparent_72%)] dark:bg-[radial-gradient(closest-side_at_16%_60%,hsl(var(--foreground)/0.09)_0%,transparent_72%),radial-gradient(closest-side_at_38%_42%,hsl(var(--foreground)/0.13)_0%,transparent_74%),radial-gradient(closest-side_at_62%_40%,hsl(var(--foreground)/0.11)_0%,transparent_74%),radial-gradient(closest-side_at_86%_62%,hsl(var(--foreground)/0.09)_0%,transparent_72%)]",
    animateX: [0, 70, 0],
    animateY: [0, 8, 0],
    duration: 28,
    delay: 0.6,
  },
  {
    className:
      "absolute top-72 -right-48 h-72 w-[46rem] blur-3xl opacity-80 bg-[radial-gradient(closest-side_at_20%_62%,hsl(var(--muted)/0.62)_0%,transparent_72%),radial-gradient(closest-side_at_46%_42%,hsl(var(--muted)/0.84)_0%,transparent_74%),radial-gradient(closest-side_at_70%_44%,hsl(var(--muted)/0.76)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--muted)/0.60)_0%,transparent_72%)] dark:bg-[radial-gradient(closest-side_at_20%_62%,hsl(var(--foreground)/0.09)_0%,transparent_72%),radial-gradient(closest-side_at_46%_42%,hsl(var(--foreground)/0.14)_0%,transparent_74%),radial-gradient(closest-side_at_70%_44%,hsl(var(--foreground)/0.12)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--foreground)/0.09)_0%,transparent_72%)]",
    animateX: [0, -80, 0],
    animateY: [0, -10, 0],
    duration: 30,
    delay: 1.1,
  },
  {
    className:
      "absolute bottom-48 left-1/4 h-64 w-[42rem] -translate-x-1/2 blur-3xl opacity-80 bg-[radial-gradient(closest-side_at_18%_62%,hsl(var(--secondary)/0.50)_0%,transparent_72%),radial-gradient(closest-side_at_44%_44%,hsl(var(--muted)/0.80)_0%,transparent_74%),radial-gradient(closest-side_at_68%_40%,hsl(var(--muted)/0.72)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--secondary)/0.46)_0%,transparent_72%)] dark:bg-[radial-gradient(closest-side_at_18%_62%,hsl(var(--foreground)/0.09)_0%,transparent_72%),radial-gradient(closest-side_at_44%_44%,hsl(var(--foreground)/0.13)_0%,transparent_74%),radial-gradient(closest-side_at_68%_40%,hsl(var(--foreground)/0.11)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--foreground)/0.09)_0%,transparent_72%)]",
    animateX: [-30, 55, -30],
    animateY: [0, 6, 0],
    duration: 26,
    delay: 0.2,
  },
  {
    className:
      "absolute -bottom-28 left-1/2 h-56 w-[40rem] -translate-x-1/2 blur-3xl opacity-85 bg-[radial-gradient(closest-side_at_16%_62%,hsl(var(--muted)/0.66)_0%,transparent_72%),radial-gradient(closest-side_at_42%_44%,hsl(var(--muted)/0.84)_0%,transparent_74%),radial-gradient(closest-side_at_68%_42%,hsl(var(--muted)/0.78)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--muted)/0.64)_0%,transparent_72%)] dark:bg-[radial-gradient(closest-side_at_16%_62%,hsl(var(--foreground)/0.10)_0%,transparent_72%),radial-gradient(closest-side_at_42%_44%,hsl(var(--foreground)/0.14)_0%,transparent_74%),radial-gradient(closest-side_at_68%_42%,hsl(var(--foreground)/0.12)_0%,transparent_74%),radial-gradient(closest-side_at_88%_62%,hsl(var(--foreground)/0.10)_0%,transparent_72%)]",
    animateX: [30, -30, 30],
    animateY: [0, 8, 0],
    duration: 24,
    delay: 0.9,
  },
]

export function AnimatedCloudBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-background" />

      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className={cloud.className}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: cloud.animateX,
                  y: cloud.animateY,
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: cloud.duration,
                  delay: cloud.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  )
}
