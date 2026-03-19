"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export default function ExperienceSection() {
  const { t } = useLanguage()
  
  const experiences = [
    {
      title: t("experience.job_title"),
      company: t("experience.company"),
      location: t("experience.location"),
      period: t("experience.period"),
      tasks: [
        t("experience.task1"),
        t("experience.task2"),
        t("experience.task3"),
        t("experience.task4"),
        t("experience.task5"),
      ],
    },
  ]

  return (
    <section id="experience" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t("experience.section")}</h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("experience.title")}
        </h3>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-primary mt-1 font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
