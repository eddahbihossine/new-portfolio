import "server-only"

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
}

const BLOG_DIR = path.join(process.cwd(), "public", "blog")

function listMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
}

export function getAllPostSlugs(): string[] {
  return listMarkdownFiles().map((file) => file.replace(/\.(md|mdx)$/i, ""))
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs()

  const posts = slugs
    .map((slug) => {
      const fullPathMd = path.join(BLOG_DIR, `${slug}.md`)
      const fullPathMdx = path.join(BLOG_DIR, `${slug}.mdx`)
      const fullPath = fs.existsSync(fullPathMd) ? fullPathMd : fullPathMdx

      const raw = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(raw)

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        excerpt: data.excerpt ? String(data.excerpt) : undefined,
      } satisfies BlogPostMeta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export async function getPostBySlug(slug: string): Promise<{ meta: BlogPostMeta; html: string } | null> {
  const fullPathMd = path.join(BLOG_DIR, `${slug}.md`)
  const fullPathMdx = path.join(BLOG_DIR, `${slug}.mdx`)
  const fullPath = fs.existsSync(fullPathMd) ? fullPathMd : fs.existsSync(fullPathMdx) ? fullPathMdx : null

  if (!fullPath) return null

  const raw = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(raw)

  const file = await remark().use(remarkGfm).use(remarkRehype).use(rehypeStringify).process(content)

  const meta: BlogPostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
  }

  return { meta, html: String(file) }
}
