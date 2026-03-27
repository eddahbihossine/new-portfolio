"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Cloud, Database, Server, Terminal, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/lib/language-context"

export default function SkillsSection() {
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      title: t("skills.languages"),
      icon: Code,
      skills: ["Python (automatisation)", "Bash", "C/C++"],
    },
    {
      title: t("skills.devops"),
      icon: Terminal,
      skills: ["Pipelines CI/CD", "Git", "Docker", "Ansible", "Terraform"],
    },
    {
      title: t("skills.cloud"),
      icon: Cloud,
      skills: ["Infrastructure Cloud", "VMware 8", "Nginx"],
    },
    {
      title: t("skills.systems"),
      icon: Server,
      skills: ["Linux RedHat", "Windows Server"],
    },
    {
      title: t("skills.databases"),
      icon: Database,
      skills: ["PostgreSQL", "Oracle", "MSSQL"],
    },
    {
      title: t("skills.security"),
      icon: Shield,
      skills: ["Monitoring / Alerting", "Sécurité Réseau"],
    },
  ]

  return (
    <AnimatedSection id="skills" className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 flex items-center gap-4">
          <div className="h-px w-14 bg-border" />
          <h2 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
            {t("skills.section")}
          </h2>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-12 text-balance">
          {t("skills.title")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="rounded-none bg-card/35 backdrop-blur-sm border-border/70 hover:border-foreground/30 transition-all"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                  <div className="p-2 rounded-none border border-border/60 bg-background/30">
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="rounded-none border border-border/60 bg-background/30 text-muted-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
