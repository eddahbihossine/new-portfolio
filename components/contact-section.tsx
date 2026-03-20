"use client"

import { Mail, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

export default function ContactSection() {
  const { t, language } = useLanguage()
  
  return (
    <AnimatedSection id="contact" className="relative z-10 py-24 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("contact.section")}</h2>
          <div className="w-12 h-[2px] bg-primary" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          {t("contact.title")}
        </h3>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          {t("contact.description")}
        </p>

        <div className="max-w-lg mx-auto mb-10">
          <Button variant="outline" asChild className="w-full">
            <a href="/consulting">{t("contact.consulting_cta")}</a>
          </Button>
        </div>
        
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-lg mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">{t("contact.download_cv")}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("contact.download_cv_desc")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full gap-2">
              <a href={`/api/resume?lang=${language}`} download>
                <Download className="w-5 h-5" />
                {t("contact.download_cv_btn")}
              </a>
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:eh.eddahbi@outlook.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/eddahbihossine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/heddahbi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
