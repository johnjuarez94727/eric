import { client } from "@/sanity/lib/client";

const SITE_URL = "https://www.ketanrajpal.dev";

type LlmPost = {
  _createdAt: string;
  category: null | string;
  slug: string;
  summary: null | string;
  title: null | string;
};

const LLM_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
  | order(_createdAt desc)[0...50] {
    title,
    "slug": slug.current,
    _createdAt,
    "category": categories[0]->title,
    "summary": coalesce(metaDescription, subtitle)
  }
`;

export async function GET() {
  const posts = await client.fetch<LlmPost[]>(LLM_POSTS_QUERY);

  const postLines = posts
    .map((post) => {
      const title = post.title ?? "Untitled";
      const url = `${SITE_URL}/blog/${post.slug}`;
      const meta = [
        post.category ? `Category: ${post.category}` : null,
        post._createdAt
          ? `Published: ${new Date(post._createdAt).toISOString().slice(0, 10)}`
          : null,
      ]
        .filter(Boolean)
        .join(" · ");
      const summary = post.summary ? `\n  ${post.summary}` : "";
      const metaLine = meta ? `\n  ${meta}` : "";
      return `- [${title}](${url})${metaLine}${summary}`;
    })
    .join("\n");

  const content = [
    "# Eric Nguyen",
    "",
    "> Senior Full-Stack Software Engineer at MagicSchool AI (Denver, Colorado) writing about AI systems, edtech platforms, game engineering, and the craft behind resilient product systems.",
    "",
    "## About",
    "- Author: Eric Nguyen — Senior Full-Stack Software Engineer at MagicSchool AI, based in Denver, Colorado.",
    "- Focus areas: generative AI, multi-LLM integration, edtech platforms, Unreal Engine gameplay systems, full-stack engineering.",
    "",
    "## Key Pages",
    `- [Home](${SITE_URL}/): portfolio, experience, and featured work.`,
    `- [Blog](${SITE_URL}/blog): articles on technology and engineering.`,
    "",
    "## Machine-Readable Resources",
    `- Full content export (Markdown): ${SITE_URL}/llms-full.txt`,
    `- RSS feed: ${SITE_URL}/rss.xml`,
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Per-post JSON: ${SITE_URL}/blog/{slug}/download`,
    "",
    "## Blog Posts",
    postLines || "- No posts yet",
    "",
    "## Usage Policy",
    "- Content may be used for indexing, retrieval, and citation.",
    "- Always prefer the canonical URLs on this domain.",
    "- Attribute content to Eric Nguyen and link the source page when referencing.",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
