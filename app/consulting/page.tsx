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

      <div className="relative z-10 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="py-16">
            <ConsultingHeader />

            <div className="mt-10 grid grid-cols-1 gap-8">
              <div id="contact">
                <ConsultingForm />
              </div>

              <div className="text-sm text-muted-foreground">
                <p className="mb-4">
                  Prefer a quick chat? Reach out via email or LinkedIn.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <a href="mailto:eh.eddahbi@outlook.com">Email</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com/in/heddahbi" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <Footer />
      </div>
    </main>
  )
}
