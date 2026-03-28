import Navbar from "@/components/navbar"
import { AnimatedCloudBackground } from "@/components/animated-cloud-background"
import Footer from "@/components/footer"
import type { ReactNode } from "react"

type ReportLayoutProps = {
  kicker?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export default function ReportLayout({ kicker = "Report", title, subtitle, children }: ReportLayoutProps) {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <AnimatedCloudBackground />
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/30 via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 pt-20 sm:pt-24">
        <section className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <header>
              <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                {kicker}
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  {subtitle}
                </p>
              ) : null}
              <div className="mt-10 h-px w-full bg-border/70" />
            </header>

            <article className="mt-10 space-y-12">
              {children}
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
