"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import { Cloud, GitBranch, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MagneticButton } from "@/components/MagneticButton"
import { useLanguage } from "@/lib/language-context"

const PROFILE_PHOTO_SRC = "/profile.jpg"
const PROFILE_PHOTO_ALT = "El Houssaine Eddahbi"
const DATA_QUOTE = "In God we trust, all others must bring data."

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
    <section id="home" className="relative z-10 min-h-screen overflow-hidden flex items-center justify-center px-4 pt-24 sm:pt-28 pb-14 sm:pb-20">
      {/* Editorial texture + thin grid lines (B/W only) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_30%_35%,hsl(var(--foreground)/0.08)_0%,transparent_55%),radial-gradient(closest-side_at_70%_60%,hsl(var(--foreground)/0.06)_0%,transparent_58%)]" />
        <div className="absolute inset-0 opacity-60 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay bg-[radial-gradient(hsl(var(--foreground)/0.35)_1px,transparent_1px)] bg-[size:3px_3px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <motion.div
        ref={containerRef}
        className="relative w-full max-w-7xl"
        style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Floating particles & icons */}
        <div className="pointer-events-none absolute inset-0">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-foreground/25"
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

          {/* <motion.div
            className="absolute right-8 top-10 hidden sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-none border border-border/60 bg-card/30 backdrop-blur-sm p-3 text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                <Cloud className="h-4 w-4 text-foreground" />
                <span>Cloud</span>
              </div>
            </div>
          </motion.div> */}

          {/* <motion.div
            className="absolute left-6 bottom-12 hidden sm:block"
            animate={shouldReduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-none border border-border/60 bg-card/30 backdrop-blur-sm p-3 text-muted-foreground">
              <div className="flex items-center gap-2 text-sm">
                <GitBranch className="h-4 w-4 text-foreground" />
                <span>DevOps</span>
              </div>
            </div>
          </motion.div> */}
        </div>

        {/* Main hero */}
        <div className="relative mx-auto w-full max-w-6xl flex items-start gap-5 sm:gap-14">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <motion.div
                className="group relative border border-border/70 bg-card/30 p-1.5 sm:p-2 backdrop-blur-sm shadow-md"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                <span className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 sm:h-6 sm:w-6 border-l border-t border-border/70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="pointer-events-none absolute -right-2 -bottom-2 h-5 w-5 sm:h-6 sm:w-6 border-r border-b border-border/70 transition-opacity duration-300 group-hover:opacity-90" />

                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/45 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-70 mix-blend-soft-light bg-[radial-gradient(closest-side_at_35%_25%,hsl(var(--foreground)/0.18)_0%,transparent_62%)] transition-opacity duration-500 group-hover:opacity-95" />

                  <Avatar className="h-[clamp(14rem,46vw,34rem)] w-[clamp(9.5rem,28vw,26rem)] rounded-none">
                    <AvatarImage
                      src={PROFILE_PHOTO_SRC}
                      alt={PROFILE_PHOTO_ALT}
                      className="grayscale contrast-110 brightness-105 transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:saturate-110 group-hover:contrast-105 group-hover:brightness-110"
                    />
                    <AvatarFallback className="rounded-none text-3xl font-semibold text-foreground">EE</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex-1 min-w-0 text-left border-l border-border/60 pl-4 sm:pl-10 pt-1 sm:pt-10">
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 flex items-center justify-start gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 rounded-none border border-border/60 bg-background/40 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.22em] text-foreground">
                  <GitBranch className="h-4 w-4" />
                  {t("hero.devops")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-none border border-border/60 bg-background/30 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-muted-foreground">
                  <Cloud className="h-4 w-4 text-foreground" />
                  {t("hero.cloud")}
                </span>
              </motion.div>

              <div className="mb-6 h-px w-full bg-border/70" />

              <motion.h1
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.35rem,7.6vw,7rem)] leading-[0.92] font-semibold tracking-tight mb-6 text-balance"
              >
                <span className="block text-foreground">El Houssaine</span>
                <span className="block text-foreground">Eddahbi</span>
              </motion.h1>

              <div className="mb-5 font-mono text-xs uppercase tracking-[0.42em] text-muted-foreground">
                {t("hero.title")}
              </div>

              <motion.p
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mx-0 mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
              >
                {t("hero.description")}
              </motion.p>

              <div className="mb-8 sm:mb-10">
                <div className="border-y border-border/60 bg-background/20 backdrop-blur-sm">
                  <div className="px-3 py-2.5 sm:px-4">
                    <motion.div
                      className="whitespace-nowrap text-center font-semibold font-[family:var(--font-epic),ui-serif,Georgia,serif] uppercase tracking-[0.22em] sm:tracking-[0.26em] leading-none text-[10px] sm:text-[11px] md:text-xs text-foreground/90"
                      initial={{ opacity: 0.95 }}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: [0.95, 0.95, 0.0, 0.95],
                            }
                      }
                      transition={
                        shouldReduceMotion
                          ? undefined
                          : {
                              duration: 7.5,
                              repeat: Infinity,
                              ease: [0.42, 0, 0.58, 1],
                              times: [0, 0.55, 0.82, 1],
                            }
                      }
                    >
                      “{DATA_QUOTE}”
                    </motion.div>

                    <div className="sr-only">“{DATA_QUOTE}”</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-start gap-4">
                <MagneticButton>
                  <Button asChild size="lg" className="gap-2 rounded-none">
                    <a href={`/api/resume?lang=${language}`} download>
                      <Download className="h-4 w-4" />
                      {t("hero.download_cv")}
                    </a>
                  </Button>
                </MagneticButton>

                <MagneticButton strength={8}>
                  <Button variant="outline" size="lg" asChild className="rounded-none">
                    <a href="#contact">{t("hero.contact_me")}</a>
                  </Button>
                </MagneticButton>
              </div>
            </div>
        </div>
      </motion.div>
    </section>
  )
}
