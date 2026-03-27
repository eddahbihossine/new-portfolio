import ReportLayout from "@/components/report-layout"

const reports = [
  {
    title: "Cloud Automation Toolkit",
    href: "/reports/cloud-automation-toolkit",
    description: "Reusable IaC modules and a gated plan/apply workflow for consistent, auditable environments.",
  },
  {
    title: "Kubernetes Observability",
    href: "/reports/kubernetes-observability",
    description: "Monitoring, alerting, dashboards, and runbooks with disciplined alert hygiene.",
  },
  {
    title: "Delivery Pipelines",
    href: "/reports/delivery-pipelines",
    description: "CI/CD system optimized for speed and safety with quality gates and staged promotion.",
  },
] as const

export default function ReportsIndexPage() {
  return (
    <ReportLayout title="Reports" subtitle="Project reports rendered in the same monochrome editorial style.">
      <section>
        <div className="grid grid-cols-1 gap-4">
          {reports.map((report) => (
            <a
              key={report.href}
              href={report.href}
              className="group rounded-none border border-border/70 bg-background/20 px-5 py-4 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold tracking-tight text-foreground">{report.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{report.description}</div>
                </div>
                <div className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.34em] text-muted-foreground group-hover:text-foreground transition-colors">
                  Open
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="/#projects">
            Back to Projects
          </a>
        </div>
      </section>
    </ReportLayout>
  )
}
