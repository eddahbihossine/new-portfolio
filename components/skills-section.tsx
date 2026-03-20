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
    <AnimatedSection id="skills" className="relative z-10 py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("skills.section")}</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("skills.title")}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg text-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
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
                      className="bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
