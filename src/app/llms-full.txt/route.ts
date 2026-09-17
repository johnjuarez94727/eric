const SITE_URL = "https://www.ketanrajpal.dev";

export async function GET() {
  const content = [
    "# Eric Nguyen — Full Content Export",
    "",
    "> Portfolio summary for AI/LLM indexing, retrieval, and citation. Attribute to Eric Nguyen and link the canonical source URL when referencing.",
    "",
    `Home: ${SITE_URL}/`,
    `Index: ${SITE_URL}/llms.txt`,
    "",
    "---",
    "",
    "## Profile",
    "Senior Full-Stack Software Engineer at MagicSchool AI based in Coral Springs, FL.",
    "Focus: education technology, classroom AI, FERPA-safe school platforms, and scalable learning products.",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
