"use client"

import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()
  
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-block px-4 py-2 rounded-none bg-background/30 text-foreground text-sm font-medium border border-border/60">
            {t("hero.location")}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
          <span className="text-foreground">El Houssaine</span>{" "}
          <span className="text-foreground">Eddahbi</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
          {t("hero.title")} <span className="text-foreground">{t("hero.devops")}</span> & <span className="text-foreground">{t("hero.cloud")}</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          {t("hero.description")}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="gap-2">
            <a href={`/api/resume?lang=${language}`} download>
              <Download className="w-4 h-4" />
              {t("hero.download_cv")}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">{t("hero.contact_me")}</a>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:eh.eddahbi@outlook.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
