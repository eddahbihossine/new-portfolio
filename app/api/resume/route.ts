import fs from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const lang = url.searchParams.get("lang") === "en" ? "en" : "fr"

  const publicDir = path.join(process.cwd(), "public")
  const candidates =
    lang === "en"
      ? ["resume-en.pdf", "resume_en.pdf", "resume.pdf"]
      : ["resume-fr.pdf", "resume_fr.pdf", "resume.pdf"]

  let filePath: string | null = null
  for (const candidate of candidates) {
    const candidatePath = path.join(publicDir, candidate)
    try {
      await fs.access(candidatePath)
      filePath = candidatePath
      break
    } catch {
      // keep looking
    }
  }

  if (!filePath) {
    return NextResponse.json(
      {
        error: "resume_not_found",
        message: "No resume PDF found in /public (expected resume.pdf or resume-en.pdf/resume-fr.pdf).",
      },
      { status: 404 }
    )
  }

  const buffer = await fs.readFile(filePath)

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="El_Houssaine_Eddahbi_CV_${lang.toUpperCase()}.pdf"`,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}
