import type { Metadata } from "next";

import { Experience } from "@/features/Experience";
import { Featured } from "@/features/Featured";
import { Home } from "@/features/Home";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.ketanrajpal.dev",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "Denver",
    addressRegion: "CO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Florida",
  },
  description:
    "Senior Full-Stack Software Engineer at MagicSchool AI based in Denver, Colorado. Eleven-plus years building AI learning tools, FERPA-safe school platforms, and scalable education technology.",
  image: "https://www.ketanrajpal.dev/og-image.png",
  jobTitle: "Senior Full-Stack Software Engineer",
  name: "Eric Nguyen",
  sameAs: [
    "https://www.linkedin.com/in/ketanrajpal",
    "https://github.com/ketanrajpal",
    "https://twitter.com/ketanrajpal",
  ],
  url: "https://www.ketanrajpal.dev",
  worksFor: {
    "@type": "Organization",
    name: "MagicSchool AI",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <div className="overflow-x-clip">
        <Home />
        <Experience />
        <Featured />
      </div>
    </>
  );
}
