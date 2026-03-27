"use client"

import { useLanguage } from "@/lib/language-context"

export function ConsultingHeader() {
  const { t } = useLanguage()

  return (
    <>
      <div className="mb-10 flex items-center justify-start gap-4">
        <h1 className="font-mono text-xs uppercase tracking-[0.34em] text-muted-foreground">{t("consulting.section")}</h1>
        <div className="h-px flex-1 bg-border" />
      </div>

      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance">{t("consulting.title")}</h2>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">{t("consulting.description")}</p>
    </>
  )
}
