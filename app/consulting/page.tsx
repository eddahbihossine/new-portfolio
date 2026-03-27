import Navbar from "@/components/navbar"
import { AnimatedCloudBackground } from "@/components/animated-cloud-background"
import { AnimatedSection } from "@/components/animated-section"
import Footer from "@/components/footer"
import { ConsultingHeader } from "@/components/ConsultingHeader"
import { ConsultingForm } from "@/components/consulting-form"
import { Button } from "@/components/ui/button"

export default function ConsultingPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <AnimatedCloudBackground />
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/30 via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 pt-20 sm:pt-24">
        <AnimatedSection className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <ConsultingHeader />

            <div className="mt-8 h-px w-full bg-border/70" />

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
              <div id="contact" className="md:col-span-7 lg:col-span-8">
                <ConsultingForm />
              </div>

              <aside className="md:col-span-5 lg:col-span-4 md:border-l border-border/60 md:pl-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Contact
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
                  Prefer a quick chat? Reach out via email or LinkedIn.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outline" asChild className="rounded-none h-9 px-3 py-0">
                    <a href="mailto:eh.eddahbi@outlook.com">Email</a>
                  </Button>
                  <Button variant="outline" asChild className="rounded-none h-9 px-3 py-0">
                    <a href="https://linkedin.com/in/heddahbi" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </main>
  )
}
