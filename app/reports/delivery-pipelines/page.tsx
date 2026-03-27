import ReportLayout from "@/components/report-layout"
import { ReportFigure } from "@/components/report-figure"
import { DeliveryPipelinesIllustration } from "@/components/report-illustrations"
import type { ReactNode } from "react"

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function CodeBlock({ label, children }: { label?: string; children: string }) {
  return (
    <div className="rounded-none border border-border/70 bg-background/20">
      {label ? (
        <div className="border-b border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
          {label}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed text-foreground/90">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function DeliveryPipelinesReportPage() {
  return (
    <ReportLayout
      title="Delivery Pipelines"
      subtitle="A CI/CD delivery system optimized for speed and safety with reusable templates, quality gates, and staged promotion."
    >
      <Section title="Executive Summary">
        <p>
          This project defines a CI/CD delivery system that optimizes for speed and safety. It standardizes
          build/test/release/deploy steps using templates, enforces quality gates, and supports staged promotion
          (dev → stage → prod) with rollback-friendly releases.
        </p>
      </Section>

      <Section title="Scope">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Included</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>A pipeline template pattern reusable across services</li>
              <li>Quality gates (tests, lint/format, security scans)</li>
              <li>Artifact packaging and metadata</li>
              <li>Environment promotion with approvals</li>
              <li>Release tracking hooks</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Excluded</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Application-level test implementations</li>
              <li>Vendor-specific CI provider details (kept generic)</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Goals">
        <ul className="space-y-2 list-none">
          <li>Reduce lead time for changes</li>
          <li>Increase deployment confidence through automation</li>
          <li>Standardize delivery practices across repositories</li>
        </ul>
      </Section>

      <Section title="High-Level Architecture">
        <CodeBlock label="Mermaid (delivery flow)">{`flowchart LR
  Dev[Developer] -->|PR| Git[(Git Repo)]
  Git --> CI[CI Pipeline]
  CI --> Build[Build + Cache]
  Build --> Tests[Unit/Integration Tests]
  Tests --> Sec[Security/Quality Scans]
  Sec --> Artifact[(Artifact Registry)]
  Artifact --> Promote[Promotion Workflow]
  Promote --> DeployStage[Deploy: Stage]
  DeployStage --> Approve[Approval]
  Approve --> DeployProd[Deploy: Prod]
  DeployProd --> Obs[Release Tracking / Observability]
  Obs --> Rollback[Rollback Path]`}</CodeBlock>
      </Section>

      <Section title="Generated Release-Train Illustration">
        <p>
          A delivery pipeline works best when it’s boring: the same train stops at the same stations for every repo.
          Reuse templates, keep gates explicit, and promote the same artifact through environments.
        </p>
        <ReportFigure
          label="Release Train (generated illustration)"
          caption="The major wins come from consistency: identical stages, identical signals, and predictable promotion rules."
        >
          <div className="h-full w-full bg-background text-foreground">
            <DeliveryPipelinesIllustration className="h-full w-full" />
          </div>
        </ReportFigure>
      </Section>

      <Section title="Example: Pipeline Template (Reusable Stages)">
        <p>
          The pipeline template enforces a shared baseline: build deterministically, run tests, scan artifacts, then
          publish once and promote the exact same artifact.
        </p>
        <CodeBlock label="workflow.yml (example)">{`jobs:
  build:
    steps:
      - checkout
      - setup-node
      - pnpm install --frozen-lockfile
      - pnpm lint
      - pnpm test
      - pnpm build
      - build-container-image
      - generate-sbom
      - push-artifact

  deploy_stage:
    needs: [build]
    steps:
      - deploy: stage
      - smoke-tests

  deploy_prod:
    needs: [deploy_stage]
    requires_approval: true
    steps:
      - deploy: prod
      - verify-release`}</CodeBlock>
        <p>
          “Requires approval” is deliberately limited to production. Everything before that is automated and fast.
        </p>
      </Section>

      <Section title="Example: Release Metadata (Traceability)">
        <p>
          Release metadata ties a deployment back to source, dependencies, and build inputs. This is invaluable during
          incident response and for compliance audits.
        </p>
        <CodeBlock label="release-metadata.json (example)">{`{
  "service": "web",
  "version": "1.14.3",
  "git": {
    "sha": "b6f2c6f",
    "repository": "github.com/org/web"
  },
  "build": {
    "timestamp": "2026-03-27T12:00:00Z",
    "runner": "ci",
    "sbom": "artifact://sbom/web-1.14.3.spdx.json"
  },
  "deploy": {
    "environments": ["stage", "prod"],
    "strategy": "rolling"
  }
}`}</CodeBlock>
      </Section>

      <Section title="Delivery Standard">
        <ol className="space-y-2 list-decimal pl-5">
          <li>Build (deterministic, cached)</li>
          <li>Test (fast unit + targeted integration)</li>
          <li>Scan (dependencies, container, IaC as applicable)</li>
          <li>Release (versioning + artifact publishing)</li>
          <li>Deploy (staged promotion + rollback)</li>
        </ol>
      </Section>

      <Section title="Generated Schemas">
        <p>
          A “pipeline manifest” is used as a declarative source of truth.
        </p>
        <ul className="space-y-2 list-none">
          <li>
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="/schemas/delivery-pipelines/pipeline-manifest.schema.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              /schemas/delivery-pipelines/pipeline-manifest.schema.json
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="/schemas/delivery-pipelines/release-metadata.schema.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              /schemas/delivery-pipelines/release-metadata.schema.json
            </a>
          </li>
        </ul>
      </Section>

      <Section title="Quality Gates">
        <ul className="space-y-2 list-none">
          <li>Formatting + linting</li>
          <li>Unit tests</li>
          <li>Dependency + container scanning (if applicable)</li>
          <li>Policy checks for IaC changes (if applicable)</li>
        </ul>
      </Section>

      <Section title="Rollback Strategy">
        <ul className="space-y-2 list-none">
          <li>Prefer immutable artifacts and re-deploy a previous version</li>
          <li>Keep deployment history and known-good versions per environment</li>
          <li>Ensure migrations are forward-compatible or have rollback plans</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="space-y-2 list-none">
          <li>Faster iterations via cached builds and standardized templates</li>
          <li>More predictable releases through consistent gates</li>
          <li>Reduced manual effort and fewer “snowflake” pipelines</li>
        </ul>
      </Section>

      <div className="pt-2">
        <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="/#projects">
          Back to Projects
        </a>
      </div>
    </ReportLayout>
  )
}
