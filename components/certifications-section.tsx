"use client"

import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

const certifications = [
  {
    title: "AWS Solution Architect",
    issuer: "AWS",
    year: "2024",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Oracle Certified Cloud Architect Professional",
    issuer: "Oracle",
    year: "2025",
    url: "https://education.oracle.com/oracle-cloud-infrastructure/",
  },
  {
    title: "Oracle Certified Professional Java SE 21",
    issuer: "Oracle",
    year: "2025",
    url: "https://education.oracle.com/java/",
  },
  {
    title: "Green Digital Skills",
    issuer: "INCO",
    year: "2022",
    url: "https://inco-group.co/",
  },
  {
    title: "Full Stack Web Developer Certification",
    issuer: "Simplon.co",
    year: "2024",
    url: "https://simplon.co/",
  },
]

export default function CertificationsSection() {
  const { t } = useLanguage()
  
  return (
    <AnimatedSection id="certifications" className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-start gap-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
            {t("certifications.section")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-12 text-balance">
          {t("certifications.title")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`${cert.title} — ${cert.issuer}`}
            >
              <Card className="rounded-none bg-card/40 backdrop-blur-sm border-border/60 hover:border-foreground/40 transition-all group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-none border border-border/60 bg-background/40 text-foreground">
                      <Award className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-lg text-foreground mt-4">{cert.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-flex items-center gap-2 border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-foreground">
                    {t("certifications.certified")}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
