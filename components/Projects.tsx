"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Cloud Automation Toolkit",
    description: "Reusable automation scripts and IaC patterns for repeatable cloud deployments.",
    tags: ["Terraform", "CI/CD", "AWS"],
  },
  {
    title: "Kubernetes Observability",
    description: "Monitoring + alerting foundations for reliable, production-grade clusters.",
    tags: ["Kubernetes", "Monitoring", "DevOps"],
  },
  {
    title: "Delivery Pipelines",
    description: "Fast, safe deployments with quality gates, caching, and environment promotion.",
    tags: ["Jenkins", "Docker", "Git"],
  },
]

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatedSection id="projects" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-[2px] bg-primary" />
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Projects</h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Selected Work</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border/60 bg-secondary/30 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2 pt-2">
                    {project.repo ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    ) : null}
                    {project.href ? (
                      <Button size="sm" asChild>
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
