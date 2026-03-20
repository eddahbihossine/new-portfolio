"use client"

import { useLanguage } from "@/lib/language-context"

export function ConsultingHeader() {
  const { t } = useLanguage()

  return (
    <>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-[2px] bg-primary" />
        <h1 className="text-sm font-medium text-primary uppercase tracking-wider">{t("consulting.section")}</h1>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t("consulting.title")}</h2>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">{t("consulting.description")}</p>
    </>
  )
}
