import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ReportLayout from "@/components/report-layout"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <ReportLayout kicker="Blog" title={post.meta.title} subtitle={post.meta.date || undefined}>
      <section>
        <div
          className="blog-content text-[15px] sm:text-base leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-10">
          <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="/blog">
            Back to Blog
          </a>
        </div>
      </section>
    </ReportLayout>
  )
}
