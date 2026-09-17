const SITE_URL = "https://www.ketanrajpal.dev";

export async function GET() {
  const content = [
    "# Eric Nguyen",
    "",
    "> Senior Full-Stack Software Engineer at MagicSchool AI (Coral Springs, FL) focused on education technology, classroom AI, school data platforms, and resilient learning systems.",
    "",
    "## About",
    "- Author: Eric Nguyen — Senior Full-Stack Software Engineer at MagicSchool AI, based in Coral Springs, FL.",
    "- Focus areas: education technology, generative AI for teachers, FERPA-safe architectures, K-12 platforms, full-stack engineering.",
    "",
    "## Key Pages",
    `- [Home](${SITE_URL}/): portfolio, experience, and featured work.`,
    "",
    "## Machine-Readable Resources",
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
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
