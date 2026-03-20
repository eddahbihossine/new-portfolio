import React from "react"
import { NextResponse } from "next/server"
import { pdf } from "@react-pdf/renderer"
import { ResumeDocument } from "@/lib/resume-document"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const lang = (url.searchParams.get("lang") === "en" ? "en" : "fr") as "en" | "fr"

  const element = React.createElement(ResumeDocument, { lang })
  const buffer = await pdf(element).toBuffer()

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Houssaine_Eddahbi_CV_${lang.toUpperCase()}.pdf"`,
      "Cache-Control": "no-store",
    },
  })
}
