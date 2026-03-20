"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { Cloud, GitBranch, Terminal, Layers, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/MagneticButton"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { t, language } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  const containerRef = useRef<HTMLDivElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth pseudo-3D motion.
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    if (shouldReduceMotion) return

    const el = containerRef.current
    if (!el) return

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    el.addEventListener("pointermove", onMove, { passive: true })
    return () => el.removeEventListener("pointermove", onMove)
  }, [mouseX, mouseY, shouldReduceMotion])

  return (
    <section id="home" className="relative z-10 min-h-[92vh] flex items-center justify-center px-4 pt-24">
      {/* Glow / highlights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-[999px] bg-primary/20 blur-3xl" />
        <div className="absolute top-40 -left-40 h-72 w-[44rem] rounded-[999px] bg-secondary/35 blur-3xl" />
        <div className="absolute top-64 -right-48 h-72 w-[46rem] rounded-[999px] bg-muted/30 blur-3xl" />
      </div>

      <motion.div
        ref={containerRef}
        className="relative w-full max-w-5xl"
        style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Floating particles & icons */}
        <div className="pointer-events-none absolute inset-0">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/30"
              style={{
                left: `${10 + i * 14}%`,
                top: `${18 + (i % 3) * 18}%`,
              }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }
              }
              transition={{ duration: 4.5 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          <motion.div
            className="absolute right-8 top-10 hidden sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-3 text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                <Cloud className="h-4 w-4 text-primary" />
                <span>Cloud</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-6 bottom-12 hidden sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-3 text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                <GitBranch className="h-4 w-4 text-primary" />
                <span>DevOps</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main hero */}
        <div className="relative mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center justify-center gap-3 flex-wrap"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/40 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              {t("hero.location")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-4 py-2 text-sm text-muted-foreground">
              <Cloud className="h-4 w-4 text-primary" />
              {t("hero.available_consulting")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-4 py-2 text-sm text-muted-foreground">
              <Terminal className="h-4 w-4 text-primary" />
              {t("hero.title")} {t("hero.devops")} • {t("hero.cloud")}
            </span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold mb-5 text-balance"
          >
            <span className="text-foreground">El Houssaine</span>{" "}
            <span className="text-primary">Eddahbi</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
          >
            {t("hero.description")}
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button asChild size="lg" className="gap-2">
                <a href={`/api/resume?lang=${language}`} download>
                  <Download className="h-4 w-4" />
                  {t("hero.download_cv")}
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton strength={8}>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">{t("hero.contact_me")}</a>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
