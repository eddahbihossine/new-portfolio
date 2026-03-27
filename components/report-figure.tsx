import type { ReactNode } from "react"

type ReportFigureProps = {
  label?: string
  caption?: string
  children: ReactNode
}

export function ReportFigure({ label, caption, children }: ReportFigureProps) {
  return (
    <figure className="rounded-none border border-border/70 bg-background/20">
      {label ? (
        <div className="border-b border-border/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
          {label}
        </div>
      ) : null}
      <div className="p-3 sm:p-4">
        <div className="aspect-[16/9] w-full overflow-hidden border border-border/60">
          {children}
        </div>
        {caption ? (
          <figcaption className="mt-3 text-xs text-muted-foreground leading-relaxed">{caption}</figcaption>
        ) : null}
      </div>
    </figure>
  )
}
