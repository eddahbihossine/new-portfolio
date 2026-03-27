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
    <div className="group flex items-center gap-3 rounded-none border border-border/70 bg-background/30 px-3 py-2 transition-colors hover:bg-foreground hover:text-background">
      {tech.kind === "simple" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-background"
          fill="currentColor"
        >
          <path d={tech.icon.path} />
        </svg>
      ) : (
        <tech.icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-background" />
      )}
      <span className="text-sm text-foreground transition-colors group-hover:text-background">
        {tech.label}
      </span>
    </div>
  )
}

export default function TechnologiesSection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="technologies" className="relative z-10 border-t border-border/60 py-16 sm:py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 flex items-center justify-start gap-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">
            {t("technologies.section")}
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-12 text-balance">
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
