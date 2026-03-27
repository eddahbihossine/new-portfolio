import { redirect } from "next/navigation"

const KNOWN_SLUGS = new Set([
  "cloud-automation-toolkit",
  "kubernetes-observability",
  "delivery-pipelines",
])

export default function LegacyReportsRedirect({
  params,
}: {
  params: { path: string[] }
}) {
  const path = params.path ?? []
  const last = path[path.length - 1] ?? ""

  if (last.endsWith(".md")) {
    const base = last.replace(/\.md$/i, "")
    if (KNOWN_SLUGS.has(base)) redirect(`/reports/${base}`)
    redirect("/reports")
  }

  // Any unknown deep path routes back to the index.
  if (KNOWN_SLUGS.has(last) && path.length === 1) redirect(`/reports/${last}`)

  redirect("/reports")
}
