import ReportLayout from "@/components/report-layout"
import { ReportFigure } from "@/components/report-figure"
import { KubernetesObservabilityIllustration } from "@/components/report-illustrations"
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

export default function KubernetesObservabilityReportPage() {
  return (
    <ReportLayout
      title="Kubernetes Observability"
      subtitle="Production-grade monitoring, alerting, dashboards, and runbooks with high-signal telemetry and disciplined alert hygiene."
    >
      <Section title="Executive Summary">
        <p>
          This project establishes a production-grade observability baseline for Kubernetes clusters with actionable
          monitoring, alerting, dashboards, and operational runbooks. The focus is on high-signal telemetry (golden
          signals), consistent alert hygiene, and clear ownership during incidents.
        </p>
      </Section>

      <Section title="Scope">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Included</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Cluster and workload health metrics</li>
              <li>Alert rules with routing and deduplication</li>
              <li>Dashboards for operators and service owners</li>
              <li>Log ingestion guidance and retention controls</li>
              <li>SLO templates and incident-ready runbooks</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">Excluded</div>
            <ul className="mt-3 space-y-2 list-none">
              <li>Vendor-specific implementation details (kept portable)</li>
              <li>Full distributed tracing rollout (optional extension)</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Goals">
        <ul className="space-y-2 list-none">
          <li>Provide immediate visibility into cluster health and workload performance</li>
          <li>Reduce mean time to detect (MTTD) and mean time to restore (MTTR)</li>
          <li>Minimize alert noise and ensure every alert has an owner and a runbook</li>
        </ul>
      </Section>

      <Section title="High-Level Architecture">
        <CodeBlock label="Mermaid (telemetry flow)">{`flowchart LR
  K8s[(Kubernetes Cluster)] -->|metrics| Metrics[Metrics Collector]
  K8s -->|logs| Logs[Log Agent]
  Metrics --> TSDB[(Time Series Store)]
  TSDB --> Dash[Dashboards]
  TSDB --> Rules[Alert Rules]
  Rules --> Router[Alert Router]
  Router --> OnCall[On-Call / Escalation]
  Logs --> LogStore[(Log Store)]
  LogStore --> Search[Search / Query]
  OnCall --> Runbook[Runbooks]`}</CodeBlock>
      </Section>

      <Section title="Generated Signal-Flow Illustration">
        <p>
          This illustration maps the three telemetry streams (metrics, logs, traces) to their collection points and
          downstream consumers. It’s useful during incidents: you can quickly spot whether the problem is collection,
          storage/query, or alerting.
        </p>
        <ReportFigure
          label="Signal Flow (generated illustration)"
          caption="Keep the data path simple: collect → enrich → store → query → alert. Complexity belongs in runbooks, not pipelines."
        >
          <div className="h-full w-full bg-background text-foreground">
            <KubernetesObservabilityIllustration className="h-full w-full" />
          </div>
        </ReportFigure>
      </Section>

      <Section title="Example: Alert Rule (High-Signal, Runbook-Ready)">
        <p>
          A good alert is actionable: it describes impact, includes labels for routing/ownership, and points to a
          runbook. Symptoms-first is usually safer than alerting on a single cause metric.
        </p>
        <CodeBlock label="PrometheusRule (example)">{`apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: api-latency
  labels:
    team: platform
spec:
  groups:
    - name: api.slo
      rules:
        - alert: ApiHighLatency
          expr: |
            histogram_quantile(0.95,
              sum(rate(http_request_duration_seconds_bucket{service="api"}[5m])) by (le)
            ) > 0.8
          for: 10m
          labels:
            severity: warning
            service: api
          annotations:
            summary: "API latency above SLO"
            runbook_url: "https://runbooks.example.com/api/latency"`}</CodeBlock>
        <p>
          The schema published in this report helps reviewers enforce consistent fields (owner, severity, runbook URL)
          during PR review.
        </p>
      </Section>

      <Section title="Example: Alert Routing (Dedup + Ownership)">
        <p>
          Routing is where alert noise is either controlled or amplified. Keep grouping keys stable so the same issue
          becomes a single incident, not a flood.
        </p>
        <CodeBlock label="Alertmanager route (example)">{`route:
  group_by: ["alertname", "service", "cluster", "environment"]
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 2h
  receiver: oncall
  routes:
    - matchers:
        - severity = critical
      receiver: oncall-critical
    - matchers:
        - namespace = kube-system
      receiver: platform-triage`}</CodeBlock>
      </Section>

      <Section title="Design Principles">
        <ul className="space-y-2 list-none">
          <li>Prefer SLO-driven alerting over static thresholds for service-level alerts</li>
          <li>Use symptom-based alerts first; cause-based alerts as secondary context</li>
          <li>Every alert includes severity, owner, and a runbook link</li>
          <li>Dashboards answer: “Is it broken?”, “What changed?”, “Where is it failing?”</li>
        </ul>
      </Section>

      <Section title="Generated Schemas">
        <p>This section defines schemas that standardize how alerts and SLOs are authored and reviewed.</p>
        <ul className="space-y-2 list-none">
          <li>
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="/schemas/kubernetes-observability/alert-rule.schema.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              /schemas/kubernetes-observability/alert-rule.schema.json
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="/schemas/kubernetes-observability/slo.schema.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              /schemas/kubernetes-observability/slo.schema.json
            </a>
          </li>
        </ul>
      </Section>

      <Section title="Dashboard Coverage">
        <ul className="space-y-2 list-none">
          <li>Cluster overview (nodes, API, etcd, scheduling)</li>
          <li>Workload performance (requests, error rate, latency)</li>
          <li>Resource saturation (CPU, memory, filesystem)</li>
          <li>Deployments & changes (rollouts, restarts)</li>
        </ul>
      </Section>

      <Section title="Alert Hygiene">
        <ul className="space-y-2 list-none">
          <li>Grouping keys: service + environment + cluster</li>
          <li>Deduplication: stable id per alert</li>
          <li>Severity: warning for degradation; critical for user-impacting/outage</li>
        </ul>
      </Section>

      <Section title="Security & Data Governance">
        <ul className="space-y-2 list-none">
          <li>Avoid logging secrets; redact at source</li>
          <li>Apply retention based on data classification</li>
          <li>Restrict access to logs for sensitive namespaces</li>
        </ul>
      </Section>

      <Section title="Results">
        <ul className="space-y-2 list-none">
          <li>Faster detection and diagnosis</li>
          <li>Reduced false positives via tuned alerts and SLO-led thresholds</li>
          <li>Clear operational posture for cluster health</li>
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
