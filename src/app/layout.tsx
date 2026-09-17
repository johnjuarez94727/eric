import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  authors: [{ name: "Eric Nguyen", url: "https://www.ketanrajpal.dev" }],
  category: "Technology",
  creator: "Eric Nguyen",
  description:
    "Portfolio of Eric Nguyen — Senior Full-Stack Software Engineer at MagicSchool AI based in Denver, Colorado, specialising in education technology, classroom AI, and FERPA-safe school platforms. Eleven-plus years shipping resilient learning products that keep working when stakes are high.",
  icons: {
    apple: [{ sizes: "180x180", type: "image/png", url: "/apple-icon.png" }],
    icon: [
      { sizes: "32x32", type: "image/x-icon", url: "/favicon.ico" },
      { type: "image/svg+xml", url: "/favicon.svg" },
      { sizes: "192x192", type: "image/png", url: "/icon-192.png" },
      { sizes: "512x512", type: "image/png", url: "/icon-512.png" },
    ],
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Eric Nguyen",
    "Senior Full-Stack Software Engineer",
    "MagicSchool AI",
    "Education Technology",
    "Edtech Engineer",
    "Classroom AI",
    "FERPA Compliant Architecture",
    "K-12 Software Engineer",
    "Learning Platforms",
    "Denver Developer",
    "Multi-LLM Integration",
    "React and TypeScript developer",
    "AI tools for teachers",
    "Student data privacy",
    "Generative AI in education",
  ],
  metadataBase: new URL("https://www.ketanrajpal.dev"),
  openGraph: {
    description:
      "Senior Full-Stack Software Engineer at MagicSchool AI, based in Denver, Colorado. Eleven-plus years building AI learning tools, school platforms, and scalable education technology.",
    images: [
      {
        alt: "Eric Nguyen — Education Technology Engineer",
        height: 941,
        url: "/og-image.png",
        width: 1672,
      },
    ],
    locale: "en_US",
    siteName: "Eric Nguyen",
    title: "Eric Nguyen | Education Technology Engineer",
    type: "website",
    url: "https://www.ketanrajpal.dev",
  },
  publisher: "Eric Nguyen",
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  ...(googleSiteVerification || bingSiteVerification
    ? {
        verification: {
          ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
          ...(bingSiteVerification
            ? { other: { "msvalidate.01": bingSiteVerification } }
            : {}),
        },
      }
    : {}),
  title: {
    default: "Eric Nguyen | Education Technology Engineer",
    template: "%s | Eric Nguyen",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ketanrajpal",
    description:
      "Senior Full-Stack Software Engineer at MagicSchool AI, based in Denver, Colorado. Eleven-plus years building AI learning tools, school platforms, and scalable education technology.",
    images: ["/og-image.png"],
    title: "Eric Nguyen | Education Technology Engineer",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
      lang="en"
    >
      <head>
        <link href="https://cdn.sanity.io" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://cdn.sanity.io"
          rel="dns-prefetch"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Eric Nguyen",
              url: "https://www.ketanrajpal.dev",
            }),
          }}
          type="application/ld+json"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9X7WRP');`,
          }}
          id="gtm-script"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full">
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9X7WRP"
            style={{ display: "none", visibility: "hidden" }}
            width="0"
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
