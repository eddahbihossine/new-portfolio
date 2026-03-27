"use client"

import { Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

export default function LanguagesSection() {
  const { t } = useLanguage()
  
  const languages = [
    {
      name: t("languages.french"),
      level: t("languages.fluent"),
      percentage: 95,
    },
    {
      name: t("languages.english"),
      level: "B1 (EF SET 57/100)",
      percentage: 57,
    },
  ]

  return (
    <AnimatedSection id="languages" className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 flex items-center gap-4">
          <div className="h-px w-14 bg-border" />
          <h2 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
            {t("languages.section")}
          </h2>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-12 text-balance">
          {t("languages.title")}
        </h3>
        
        <Card className="rounded-none bg-card/35 backdrop-blur-sm border-border/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-foreground">
              <div className="p-2 rounded-none border border-border/60 bg-background/30">
                <Globe className="w-5 h-5 text-foreground" />
              </div>
              {t("languages.spoken")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
                <Progress value={lang.percentage} className="h-1" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  )
}
