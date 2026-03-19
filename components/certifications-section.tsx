"use client"

import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const certifications = [
  {
    title: "AWS Solution Architect",
    issuer: "AWS",
    year: "2024",
    color: "bg-[#FF9900]/10 text-[#FF9900]",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    color: "bg-[#FF9900]/10 text-[#FF9900]",
  },
  {
    title: "Oracle Certified Cloud Architect Professional",
    issuer: "Oracle",
    year: "2025",
    color: "bg-[#F80000]/10 text-[#F80000]",
  },
  {
    title: "Oracle Certified Professional Java SE 21",
    issuer: "Oracle",
    year: "2025",
    color: "bg-[#F80000]/10 text-[#F80000]",
  },
  {
    title: "Green Digital Skills",
    issuer: "INCO",
    year: "2022",
    color: "bg-[#22C55E]/10 text-[#22C55E]",
  },
  {
    title: "Full Stack Web Developer Certification",
    issuer: "Simplon.co",
    year: "2024",
    color: "bg-primary/10 text-primary",
  },
]

export default function CertificationsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="certifications" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("certifications.section")}</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("certifications.title")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02] group cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg ${cert.color}`}>
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
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${cert.color}`}>
                  {t("certifications.certified")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
