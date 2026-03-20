"use client"

import { useLanguage } from "@/lib/language-context"
import { Cloud, CloudCog } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

import {
  siTerraform,
  siKubernetes,
  siJenkins,
  siDocker,
  siJavascript,
  siPython,
  siC,
  siCplusplus,
} from "simple-icons/icons"

type SimpleIcon = {
  title: string
  path: string
}

type Technology =
  | { kind: "simple"; label: string; icon: SimpleIcon }
  | { kind: "lucide"; label: string; icon: React.ComponentType<{ className?: string }> }

const technologies: Technology[] = [
  { kind: "lucide", label: "AWS", icon: Cloud },
  { kind: "simple", label: "Terraform", icon: siTerraform },
  { kind: "simple", label: "Kubernetes (K8s)", icon: siKubernetes },
  { kind: "lucide", label: "OCI (Oracle Cloud Infrastructure)", icon: CloudCog },
  { kind: "simple", label: "Jenkins", icon: siJenkins },
  { kind: "simple", label: "Docker", icon: siDocker },
  { kind: "simple", label: "JavaScript", icon: siJavascript },
  { kind: "simple", label: "Python", icon: siPython },
  { kind: "simple", label: "C", icon: siC },
  { kind: "simple", label: "C++", icon: siCplusplus },
]

function TechnologyChip({ tech }: { tech: Technology }) {
  return (
    <div className="group flex items-center gap-3 rounded-md border border-border bg-background/40 px-3 py-2 transition-colors hover:border-primary/40 hover:bg-accent/20">
      {tech.kind === "simple" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
          fill="currentColor"
        >
          <path d={tech.icon.path} />
        </svg>
      ) : (
        <tech.icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      )}
      <span className="text-sm text-foreground transition-colors group-hover:text-foreground">
        {tech.label}
      </span>
    </div>
  )
}

export default function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="technologies" className="relative z-10 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          {t("technologies.section")}
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
          {t("technologies.title")}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {technologies.map((tech) => (
            <TechnologyChip key={tech.label} tech={tech} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
