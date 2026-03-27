import type { ReactNode } from "react"

type IllustrationProps = {
  className?: string
}

function BaseSvg({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L9,3 L0,6" fill="currentColor" />
        </marker>
      </defs>
      {children}
    </svg>
  )
}

export function CloudAutomationToolkitIllustration({ className }: IllustrationProps) {
  return (
    <BaseSvg title="Cloud Automation Toolkit architecture" className={className}>
      {/* grid */}
      <g opacity="0.12" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M0 150 H1600" />
        <path d="M0 300 H1600" />
        <path d="M0 450 H1600" />
        <path d="M0 600 H1600" />
        <path d="M0 750 H1600" />
        <path d="M200 0 V900" />
        <path d="M400 0 V900" />
        <path d="M600 0 V900" />
        <path d="M800 0 V900" />
        <path d="M1000 0 V900" />
        <path d="M1200 0 V900" />
        <path d="M1400 0 V900" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="90" y="210" width="330" height="110" />
        <rect x="510" y="210" width="360" height="110" />
        <rect x="960" y="190" width="520" height="150" />
        <rect x="990" y="290" width="210" height="32" />
        <rect x="1230" y="290" width="220" height="32" />
        <rect x="510" y="420" width="420" height="130" />
        <rect x="990" y="420" width="490" height="130" />
        <rect x="270" y="610" width="420" height="150" />
        <rect x="760" y="610" width="360" height="150" />
        <rect x="1170" y="610" width="330" height="150" />

        <path d="M420 265 H510" markerEnd="url(#arrow)" />
        <path d="M870 265 H960" markerEnd="url(#arrow)" />
        <path d="M1220 345 V420" markerEnd="url(#arrow)" />
        <path d="M930 485 H990" markerEnd="url(#arrow)" />

        <path d="M1130 550 V610" markerEnd="url(#arrow)" />
        <path d="M1280 550 V610" markerEnd="url(#arrow)" />
        <path d="M1075 550 V610" markerEnd="url(#arrow)" />

        <path d="M990 485 C820 485, 820 485, 720 485" markerEnd="url(#arrow)" />
      </g>

      <g fill="currentColor">
        <text x="80" y="92" fontSize="26" fontWeight="700" letterSpacing="0.22em">
          CLOUD AUTOMATION TOOLKIT
        </text>
        <text x="80" y="126" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          PLAN / APPROVE / APPLY • AUDITABLE IaC
        </text>

        <text x="120" y="255" fontSize="18" fontWeight="600" letterSpacing="0.08em">Developer</text>
        <text x="120" y="285" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          PR-driven changes
        </text>

        <text x="540" y="255" fontSize="18" fontWeight="600" letterSpacing="0.08em">Git Repository</text>
        <text x="540" y="285" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          source of truth
        </text>

        <text x="990" y="240" fontSize="18" fontWeight="600" letterSpacing="0.08em">CI Pipeline</text>
        <text x="990" y="270" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          fmt • lint • validate • plan
        </text>
        <text x="1005" y="312" fontSize="12" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          Plan Artifact
        </text>
        <text x="1245" y="312" fontSize="12" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          Policy Gates
        </text>

        <text x="540" y="465" fontSize="18" fontWeight="600" letterSpacing="0.08em">Approval</text>
        <text x="540" y="495" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          human or policy engine
        </text>

        <text x="1020" y="465" fontSize="18" fontWeight="600" letterSpacing="0.08em">Apply Job</text>
        <text x="1020" y="495" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          terraform apply (audited)
        </text>

        <text x="300" y="660" fontSize="18" fontWeight="600" letterSpacing="0.08em">Remote State + Lock</text>
        <text x="300" y="690" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          drift-resistant workflow
        </text>

        <text x="790" y="660" fontSize="18" fontWeight="600" letterSpacing="0.08em">Cloud Provider</text>
        <text x="790" y="690" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          resources created
        </text>

        <text x="1200" y="660" fontSize="18" fontWeight="600" letterSpacing="0.08em">Audit Trail</text>
        <text x="1200" y="690" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          logs • diffs • approvals
        </text>
      </g>
    </BaseSvg>
  )
}

export function KubernetesObservabilityIllustration({ className }: IllustrationProps) {
  return (
    <BaseSvg title="Kubernetes Observability signal flow" className={className}>
      <g opacity="0.12" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M0 150 H1600" />
        <path d="M0 300 H1600" />
        <path d="M0 450 H1600" />
        <path d="M0 600 H1600" />
        <path d="M0 750 H1600" />
        <path d="M200 0 V900" />
        <path d="M400 0 V900" />
        <path d="M600 0 V900" />
        <path d="M800 0 V900" />
        <path d="M1000 0 V900" />
        <path d="M1200 0 V900" />
        <path d="M1400 0 V900" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="3">
        <rect x="90" y="190" width="550" height="520" />
        <rect x="140" y="310" width="220" height="90" />
        <rect x="390" y="310" width="210" height="90" />
        <rect x="140" y="430" width="220" height="90" />
        <rect x="390" y="430" width="210" height="90" />
        <rect x="140" y="550" width="460" height="110" />

        <rect x="710" y="250" width="360" height="150" />
        <rect x="710" y="460" width="360" height="150" />

        <rect x="1140" y="190" width="420" height="520" />
        <rect x="1185" y="310" width="330" height="90" />
        <rect x="1185" y="430" width="330" height="90" />
        <rect x="1185" y="550" width="330" height="90" />

        <rect x="780" y="700" width="780" height="130" />

        <path d="M360 355 H710" markerEnd="url(#arrow)" />
        <path d="M600 475 H710" markerEnd="url(#arrow)" />
        <path d="M600 605 H710" markerEnd="url(#arrow)" />
        <path d="M890 400 V460" markerEnd="url(#arrow)" />
        <path d="M1070 535 H1140" markerEnd="url(#arrow)" />
        <path d="M1070 505 H1140" markerEnd="url(#arrow)" />
        <path d="M1350 710 V700" markerEnd="url(#arrow)" />
        <path d="M1250 710 V700" markerEnd="url(#arrow)" />
        <path d="M1450 710 V700" markerEnd="url(#arrow)" />
      </g>

      <g fill="currentColor">
        <text x="80" y="92" fontSize="26" fontWeight="700" letterSpacing="0.22em">
          KUBERNETES OBSERVABILITY
        </text>
        <text x="80" y="126" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          METRICS • LOGS • TRACES → ALERTS &amp; DASHBOARDS
        </text>

        <text x="120" y="235" fontSize="18" fontWeight="600" letterSpacing="0.08em">Kubernetes Cluster</text>
        <text x="120" y="265" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          apps • nodes • control plane
        </text>

        <text x="160" y="350" fontSize="16" fontWeight="600" letterSpacing="0.08em">Workloads</text>
        <text x="410" y="350" fontSize="16" fontWeight="600" letterSpacing="0.08em">Node</text>
        <text x="160" y="470" fontSize="16" fontWeight="600" letterSpacing="0.08em">Logs</text>
        <text x="410" y="470" fontSize="16" fontWeight="600" letterSpacing="0.08em">Metrics</text>
        <text x="160" y="595" fontSize="16" fontWeight="600" letterSpacing="0.08em">Tracing</text>

        <text x="740" y="300" fontSize="18" fontWeight="600" letterSpacing="0.08em">Collectors</text>
        <text x="740" y="330" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          OpenTelemetry / agents
        </text>

        <text x="740" y="510" fontSize="18" fontWeight="600" letterSpacing="0.08em">Pipelines</text>
        <text x="740" y="540" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          enrich • batch • route
        </text>

        <text x="1170" y="235" fontSize="18" fontWeight="600" letterSpacing="0.08em">Backends</text>
        <text x="1170" y="265" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          durable storage + query
        </text>
        <text x="1205" y="350" fontSize="16" fontWeight="600" letterSpacing="0.08em">Metrics DB</text>
        <text x="1205" y="470" fontSize="16" fontWeight="600" letterSpacing="0.08em">Logs DB</text>
        <text x="1205" y="590" fontSize="16" fontWeight="600" letterSpacing="0.08em">Traces DB</text>

        <text x="810" y="750" fontSize="18" fontWeight="600" letterSpacing="0.08em">Dashboards &amp; Alerts</text>
        <text x="810" y="780" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          SLOs • alert rules • incident context
        </text>
      </g>
    </BaseSvg>
  )
}

export function DeliveryPipelinesIllustration({ className }: IllustrationProps) {
  return (
    <BaseSvg title="Delivery Pipelines release train" className={className}>
      <g opacity="0.12" stroke="currentColor" strokeWidth="2" fill="none">
        <path d="M0 150 H1600" />
        <path d="M0 300 H1600" />
        <path d="M0 450 H1600" />
        <path d="M0 600 H1600" />
        <path d="M0 750 H1600" />
        <path d="M200 0 V900" />
        <path d="M400 0 V900" />
        <path d="M600 0 V900" />
        <path d="M800 0 V900" />
        <path d="M1000 0 V900" />
        <path d="M1200 0 V900" />
        <path d="M1400 0 V900" />
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M120 740 H1480" />
        <path d="M120 770 H1480" />
        <path d="M160 770 V740" opacity="0.35" />
        <path d="M260 770 V740" opacity="0.35" />
        <path d="M360 770 V740" opacity="0.35" />
        <path d="M460 770 V740" opacity="0.35" />
        <path d="M560 770 V740" opacity="0.35" />
        <path d="M660 770 V740" opacity="0.35" />
        <path d="M760 770 V740" opacity="0.35" />
        <path d="M860 770 V740" opacity="0.35" />
        <path d="M960 770 V740" opacity="0.35" />
        <path d="M1060 770 V740" opacity="0.35" />
        <path d="M1160 770 V740" opacity="0.35" />
        <path d="M1260 770 V740" opacity="0.35" />
        <path d="M1360 770 V740" opacity="0.35" />
        <path d="M1460 770 V740" opacity="0.35" />

        <rect x="120" y="190" width="300" height="150" />
        <rect x="470" y="190" width="320" height="150" />
        <rect x="840" y="190" width="320" height="150" />
        <rect x="1210" y="190" width="320" height="150" />

        <rect x="120" y="390" width="1440" height="230" />
        <rect x="150" y="505" width="310" height="70" />
        <rect x="490" y="505" width="340" height="70" />
        <rect x="860" y="505" width="330" height="70" />
        <rect x="1220" y="505" width="300" height="70" />

        <path d="M420 265 H470" markerEnd="url(#arrow)" />
        <path d="M790 265 H840" markerEnd="url(#arrow)" />
        <path d="M1160 265 H1210" markerEnd="url(#arrow)" />

        <path d="M270 340 V390" markerEnd="url(#arrow)" />
        <path d="M630 340 V390" markerEnd="url(#arrow)" />
        <path d="M1000 340 V390" markerEnd="url(#arrow)" />
        <path d="M1370 340 V390" markerEnd="url(#arrow)" />
      </g>

      <g fill="currentColor">
        <text x="80" y="92" fontSize="26" fontWeight="700" letterSpacing="0.22em">
          DELIVERY PIPELINES
        </text>
        <text x="80" y="126" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          A RELEASE TRAIN WITH GATES &amp; ENV PROMOTION
        </text>

        <text x="150" y="240" fontSize="18" fontWeight="600" letterSpacing="0.08em">Commit</text>
        <text x="150" y="270" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          branch / PR
        </text>

        <text x="500" y="240" fontSize="18" fontWeight="600" letterSpacing="0.08em">Build</text>
        <text x="500" y="270" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          artifact + SBOM
        </text>

        <text x="870" y="240" fontSize="18" fontWeight="600" letterSpacing="0.08em">Test</text>
        <text x="870" y="270" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          unit • integration
        </text>

        <text x="1240" y="240" fontSize="18" fontWeight="600" letterSpacing="0.08em">Deploy</text>
        <text x="1240" y="270" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          promote envs
        </text>

        <text x="150" y="440" fontSize="18" fontWeight="600" letterSpacing="0.08em">Gates (non-negotiable)</text>
        <text x="150" y="470" fontSize="14" fontWeight="500" letterSpacing="0.12em" opacity="0.8">
          lint • SAST • secret scan • policy • approvals
        </text>

        <text x="170" y="548" fontSize="14" fontWeight="600" letterSpacing="0.12em" opacity="0.85">
          Quality
        </text>
        <text x="510" y="548" fontSize="14" fontWeight="600" letterSpacing="0.12em" opacity="0.85">
          Security
        </text>
        <text x="880" y="548" fontSize="14" fontWeight="600" letterSpacing="0.12em" opacity="0.85">
          Compliance
        </text>
        <text x="1240" y="548" fontSize="14" fontWeight="600" letterSpacing="0.12em" opacity="0.85">
          Approvals
        </text>
      </g>
    </BaseSvg>
  )
}
