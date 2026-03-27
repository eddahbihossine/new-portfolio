"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, FileText, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

type Project = {
  title: string
  description: string
  tags: string[]
  reportHref: string
  href?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Cloud Automation Toolkit",
    description: "Reusable automation scripts and IaC patterns for repeatable cloud deployments.",
    tags: ["Terraform", "CI/CD", "AWS"],
    reportHref: "/reports/cloud-automation-toolkit",
  },
  {
    title: "Kubernetes Observability",
    description: "Monitoring + alerting foundations for reliable, production-grade clusters.",
    tags: ["Kubernetes", "Monitoring", "DevOps"],
    reportHref: "/reports/kubernetes-observability",
  },
  {
    title: "Delivery Pipelines",
    description: "Fast, safe deployments with quality gates, caching, and environment promotion.",
    tags: ["Jenkins", "Docker", "Git"],
    reportHref: "/reports/delivery-pipelines",
  },
]

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatedSection id="projects" className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-14 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-14 bg-border" />
              <h2 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">Projects</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance">
              Selected Work
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="hidden lg:block h-px w-full bg-border/70" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className={
                index === 0
                  ? "col-span-12 lg:col-span-7"
                  : index === 1
                    ? "col-span-12 lg:col-span-5"
                    : "col-span-12"
              }
            >
              <Card className="h-full rounded-none bg-card/35 backdrop-blur-sm border-border/70 hover:border-foreground/30 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <CardTitle className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="inline-flex items-center gap-2 border border-border/60 bg-background/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        Case Study
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-6">
                  <div className="h-px w-full bg-border/70" />

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[64ch]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-none border border-border/60 bg-background/30 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild className="rounded-none">
                      <a href={project.reportHref} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Report
                      </a>
                    </Button>
                    {project.repo ? (
                      <Button variant="outline" size="sm" asChild className="rounded-none">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    ) : null}
                    {project.href ? (
                      <Button size="sm" asChild className="rounded-none">
                        <a href={project.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
