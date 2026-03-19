"use client"

import { Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
    <section id="languages" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("languages.section")}</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("languages.title")}
        </h3>
        
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl text-foreground">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="w-5 h-5 text-primary" />
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
                <Progress value={lang.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
