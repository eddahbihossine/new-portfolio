import ReportLayout from "@/components/report-layout"
import { getAllPostsMeta } from "@/lib/blog"

export default function BlogIndexPage() {
  const posts = getAllPostsMeta()

  return (
    <ReportLayout
      kicker="Blog"
      title="Blog"
      subtitle="Welcome — here are my latest notes on DevOps, cloud, and automation."
    >
      <section>
        {posts.length === 0 ? (
          <div className="rounded-none border border-border/70 bg-background/20 px-5 py-4">
            <div className="text-sm text-muted-foreground leading-relaxed">
              No posts yet. Create your first one in <span className="font-mono text-foreground/90">public/blog</span>.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-none border border-border/70 bg-background/20 px-5 py-4 transition-colors hover:border-foreground/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-foreground">{post.title}</div>
                    {post.excerpt ? (
                      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</div>
                    ) : null}
                    {post.date ? (
                      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                        {post.date}
                      </div>
                    ) : null}
                  </div>

                  <div className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.34em] text-muted-foreground group-hover:text-foreground transition-colors">
                    Read
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-10">
          <a className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground" href="/">
            Back to Home
          </a>
        </div>
      </section>
    </ReportLayout>
  )
}
