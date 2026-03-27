import ReportLayout from "@/components/report-layout"
import { ReportFigure } from "@/components/report-figure"
import { CloudAutomationToolkitIllustration } from "@/components/report-illustrations"
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

export default function CloudAutomationToolkitReportPage() {
  return (
    <ReportLayout
      title="Cloud Automation Toolkit"
      subtitle="Reusable IaC modules and a gated plan/apply workflow for consistent, auditable environments."
    >
      <Section title="Executive Summary">
        <p>
          The Cloud Automation Toolkit standardizes cloud provisioning through reusable Infrastructure-as-Code (IaC)
          modules, a repeatable deployment workflow, and guardrails that reduce drift and operational risk. The
          deliverable is a consistent path to create and evolve environments (dev/stage/prod) with predictable outputs
          and auditable change control.
        </p>
      </Section>

      <Section title="Scope">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Included</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Reusable module patterns (network, IAM, compute, storage)</li>
              <li>Environment orchestration (plan/apply, promotion, approvals)</li>
              <li>Policy and validation gates (formatting, static checks)</li>
              <li>Documentation and runbooks</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Excluded</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Application-level feature code</li>
              <li>Organization-specific secrets management implementation details</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Assumptions">
        <ul className="space-y-2 list-none">
          <li>Infrastructure is managed via code (Git as source of truth)</li>
          <li>Environments are separated (state, accounts/projects, or subscriptions)</li>
          <li>Changes are made via PRs and reviewed before apply</li>
        </ul>
      </Section>

      <Section title="Goals & Non-Goals">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Goals</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Reproducible environments with minimal manual steps</li>
              <li>Safe deployments via reviewable plans and gated applies</li>
              <li>Clear module interfaces to enable composition and reuse</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Non-goals</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>One-off click-ops provisioning</li>
              <li>“Magic” automation without auditability</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="High-Level Architecture">
        <CodeBlock label="Mermaid (workflow)">{`flowchart LR
  Dev[Developer] -->|PR| Git[(Git Repo)]
  Git --> CI[CI Pipeline]
  CI -->|fmt/lint/tests| Checks[Validation Gates]
  Checks -->|terraform plan| Plan[Plan Artifact]
  Plan -->|approval| Approve[Manual/Policy Approval]
  Approve -->|terraform apply| Apply[Apply Job]
  Apply --> Cloud[(Cloud Provider)]
  Apply --> State[(Remote State + Locking)]
  Apply --> Audit[(Change Log / Audit Trail)]`}</CodeBlock>
      </Section>

      <Section title="Generated Architecture Illustration">
        <p>
          A black-and-white, editorial diagram of the full plan/approve/apply workflow. The diagram is intentionally
          vendor-neutral: it describes responsibilities and control points, not a specific cloud.
        </p>
        <ReportFigure
          label="Architecture (generated illustration)"
          caption="The key safety property is separation between plan creation and apply execution, with an approval step in between."
        >
          <div className="h-full w-full bg-background text-foreground">
            <CloudAutomationToolkitIllustration className="h-full w-full" />
          </div>
        </ReportFigure>
      </Section>

      <Section title="Example: Deployment Spec (Single Source of Truth)">
        <p>
          The deployment spec is the only place where environment-specific values live. Everything else (modules,
          policies, pipelines) is reusable and versioned.
        </p>
        <CodeBlock label="deployment-spec.json (example)">{`{
  "environment": "stage",
  "region": "eu-west-1",
  "tags": {
    "owner": "platform",
    "cost_center": "shared"
  },
  "network": {
    "cidr": "10.20.0.0/16",
    "subnets": ["10.20.1.0/24", "10.20.2.0/24"]
  },
  "workloads": {
    "app": {
      "replicas": 2,
      "instance_type": "m7g.large"
    }
  }
}`}</CodeBlock>
        <p>
          Reviewers can focus on a small diff: “What changed in stage?” rather than reading implementation details.
          The same spec can be validated with the JSON Schema published in this report.
        </p>
      </Section>

      <Section title="Example: Terraform Module Interface (Stable Inputs)">
        <p>
          Modules should expose a minimal, stable interface. Internals can evolve, but inputs/outputs stay consistent
          to avoid breaking downstream stacks.
        </p>
        <CodeBlock label="modules/network/variables.tf (example)">{`variable "name" {
  type        = string
  description = "Environment/name prefix for resources"
}

variable "cidr" {
  type        = string
  description = "VPC CIDR block"
}

variable "subnet_cidrs" {
  type        = list(string)
  description = "List of subnet CIDR blocks"
}

variable "tags" {
  type        = map(string)
  default     = {}
}`}</CodeBlock>
        <p>
          This keeps module composition predictable. It also makes policy checks easier (e.g., ensuring tags are
          present or CIDRs fall within an approved range).
        </p>
      </Section>

      <Section title="Example: CI Plan/Apply Split (Audit-Friendly)">
        <p>
          A best-practice pipeline creates a signed/immutable plan artifact in CI, then applies that exact plan only
          after an explicit approval step. This prevents “plan drift” between review and execution.
        </p>
        <CodeBlock label="ci.yml (pseudo workflow)">{`jobs:
  plan:
    steps:
      - checkout
      - terraform fmt -check
      - terraform validate
      - terraform plan -out=tfplan
      - upload-artifact: tfplan

  apply:
    needs: [plan]
    requires_approval: true
    steps:
      - download-artifact: tfplan
      - terraform apply tfplan`}</CodeBlock>
      </Section>

      <Section title="Deliverables">
        <ul className="space-y-2 list-none">
          <li>Module library (versioned)</li>
          <li>Environment definitions (dev/stage/prod)</li>
          <li>Pipeline templates (plan/apply, promotion)</li>
          <li>Guardrails (policy checks, validation, naming/tagging conventions)</li>
          <li>Runbooks and onboarding guide</li>
        </ul>
      </Section>

      <Section title="Generated Schemas">
        <p>
          The toolkit uses a “deployment spec” as a single source of configuration for an environment.
        </p>
        <p>
          Download: {" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="/schemas/cloud-automation-toolkit/deployment-spec.schema.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            /schemas/cloud-automation-toolkit/deployment-spec.schema.json
          </a>
        </p>
      </Section>

      <Section title="Workflow & Quality Gates">
        <ol className="space-y-2 list-decimal pl-5">
          <li>Format & lint (consistent style)</li>
          <li>Static validation (schema validation + policy checks)</li>
          <li>Plan generation (stored as artifact)</li>
          <li>Approval gate (human or policy engine)</li>
          <li>Apply (audited)</li>
        </ol>
      </Section>

      <Section title="Security & Compliance Considerations">
        <ul className="space-y-2 list-none">
          <li>Least privilege: roles/principals are scoped to required actions</li>
          <li>Secrets: do not store secrets in state or repo; rely on dedicated secrets stores</li>
          <li>Auditability: PR + plan artifact + apply logs</li>
          <li>Change windows: optional approvals for prod</li>
        </ul>
      </Section>

      <Section title="Testing Strategy">
        <ul className="space-y-2 list-none">
          <li>Unit-style checks: module validation, schema validation, policy checks</li>
          <li>Integration checks (optional): ephemeral environment apply + smoke validation</li>
        </ul>
      </Section>

      <Section title="Operational Runbook (Summary)">
        <ul className="space-y-2 list-none">
          <li>Add new environment: create spec → validate → plan → approve → apply</li>
          <li>Update modules: bump module versions → re-plan → apply</li>
          <li>Incident rollback: revert PR → re-plan → apply</li>
        </ul>
      </Section>

      <Section title="Risks & Mitigations">
        <ul className="space-y-2 list-none">
          <li>Drift from manual changes → periodic drift detection and strict apply-only policy</li>
          <li>Breaking module changes → semantic versioning and migration notes</li>
          <li>State corruption → remote state locking, backups, limited access</li>
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
