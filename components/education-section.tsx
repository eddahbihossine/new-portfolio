"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

export default function EducationSection() {
  const { t, language } = useLanguage()
  
  const education = [
    {
      institution: "École 42 — Lyon Auvergne-Rhône-Alpes",
      degree: language === "fr" 
        ? "Architecte en Technologies du Numérique — RNCP Niveau 7" 
        : "Digital Technology Architect — RNCP Level 7",
      location: "Lyon",
      period: `2026 – ${t("education.present")}`,
      highlight: true,
    },
    {
      institution: "Université Mohammed VI Polytechnique — École 1337",
      degree: language === "fr"
        ? "Programme 42 Network — Niveau 11.34"
        : "42 Network Program — Level 11.34",
      location: "Rabat, Morocco",
      period: "01/2022 – 01/2028",
      highlight: true,
    },
    {
      institution: "SoliCode by Simplon.co",
      degree: language === "fr"
        ? "Certification Développeur Web Full Stack"
        : "Full Stack Web Developer Certification",
      location: "Tanger",
      period: "2021 – 2022",
      highlight: false,
    },
    {
      institution: "Ibn El Khattib",
      degree: language === "fr"
        ? "Baccalauréat Scientifique International, Physique-Chimie"
        : "International Scientific Baccalaureate, Physics-Chemistry",
      location: "Morocco",
      period: "01/2020 – 09/2020",
      highlight: false,
    },
  ]

  return (
    <AnimatedSection id="education" className="relative z-10 py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("education.section")}</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("education.title")}
        </h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-border" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 md:left-6.5 w-4 h-4 rounded-full border-2 ${
                    edu.highlight
                      ? "bg-primary border-primary"
                      : "bg-card border-border"
                  }`}
                />
                
                <Card
                  className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors ${
                    edu.highlight ? "border-l-2 border-l-primary" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg text-foreground flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-primary mt-1 font-medium">
                          {edu.degree}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
