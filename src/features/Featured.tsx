"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import { CardHeading, CardParagraph, CardTag } from "@/components/Card";
import { CardLink } from "@/components/CardLink";
import { Heading } from "@/components/Heading";

import EdiaAttendance from "../images/projects/edia-attendance.png";
import EdiaDistrictIntelligence from "../images/projects/edia-district-intelligence.png";
import MagicQuizzes from "../images/projects/magic-quizzes.png";
import MagicSchoolStudioTools from "../images/projects/magicschool-studio-tools.png";
import RokuPlatform from "../images/projects/roku-platform.png";
import TinyTinasWonderlands from "../images/projects/tiny-tinas-wonderlands.png";

const projects: {
  category: string;
  description: string;
  image: StaticImageData;
  link: string;
  slug: string;
  title: string;
}[] = [
  {
    category: "Education Technology",
    description:
      "Led full-stack engineering for Magic Quizzes — an AI assessment platform that turns topics into structured multiple-choice quizzes teachers can tailor to grade and standards.",
    image: MagicQuizzes,
    link: "https://www.magicschool.ai/tools/multiple-choice-quiz-assessment",
    slug: "magic-quizzes",
    title: "Magic Quizzes — AI Assessment Platform",
  },
  {
    category: "Education Technology",
    description:
      "Built Studio Mode and custom AI tool workflows so teachers can edit AI-generated documents and launch classroom chatbots across OpenAI, Gemini, and Claude.",
    image: MagicSchoolStudioTools,
    link: "https://www.magicschool.ai/blog-posts/whats-new-april-2026",
    slug: "magicschool-studio-tools",
    title: "Studio Mode & Custom AI Tools",
  },
  {
    category: "Education Technology",
    description:
      "Led end-to-end engineering of Edia's AI attendance platform — real-time absence processing, multilingual family outreach, intent classification, and admin dashboards.",
    image: EdiaAttendance,
    link: "https://www.edia.app/attendance",
    slug: "edia-attendance",
    title: "AI Attendance & Family Communication",
  },
  {
    category: "Education Technology",
    description:
      "Designed and scaled Edia's MTSS data platform — unifying SIS and LMS signals into cohesive student timelines with React, D3.js, Python, and PostgreSQL.",
    image: EdiaDistrictIntelligence,
    link: "https://www.edia.app/district-intelligence",
    slug: "edia-district-intelligence",
    title: "District Intelligence / MTSS Platform",
  },
  {
    category: "Gameplay Engineering",
    description:
      "Gameplay engineer on Tiny Tina's Wonderlands focused on first-person combat, spellcasting, network replication, procedural loot, and performance across platforms.",
    image: TinyTinasWonderlands,
    link: "https://playwonderlands.2k.com/game-guide/about/",
    slug: "tiny-tinas-wonderlands",
    title: "Tiny Tina's Wonderlands — Gameplay",
  },
  {
    category: "Streaming Platforms",
    description:
      "Built and optimized Roku streaming applications with BrightScript and SceneGraph, including RAF advertising support and faster HLS/DASH playback starts.",
    image: RokuPlatform,
    link: "https://developer.roku.com/develop",
    slug: "roku-streaming-platform",
    title: "Roku Streaming Applications",
  },
];

const CARD_WIDTH = 1100;
const GAP = 200;

export const Featured = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  });

  const totalDistance = (projects.length - 1) * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, (v) => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1280;
    const space = (viewportWidth - CARD_WIDTH) / 2;
    return -v * totalDistance + space;
  });

  return (
    <section className="scroll-mt-28 bg-gray-100" id="projects">
      <div className="flex flex-col gap-6 px-0 pb-10 mx-5 md:hidden">
        <FeaturedHeading />
        {projects.map((project) => (
          <article className="w-full" key={project.title}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
                <Image
                  alt={project.title}
                  className="h-full w-full object-contain"
                  src={project.image}
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <CardTag tag={project.category} />
                <CardHeading title={project.title} />
                <CardParagraph description={project.description} />
                <CardLink
                  ariaLabel={project.title}
                  label="Visit Project"
                  link={project.link}
                  type="external"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        className="hidden md:block"
        ref={containerRef}
        style={{ height: `${projects.length * 100}vh` }}
      >
        <div className="sticky top-0 flex flex-col justify-center gap-16 overflow-visible md:h-screen">
          <FeaturedHeading />
          <motion.div className="mt-10 flex" style={{ gap: GAP, x }}>
            {projects.map((project) => (
              <article
                className="relative flex shrink-0 flex-row items-center"
                key={project.title}
                style={{ width: CARD_WIDTH }}
              >
                <div className="h-125 w-125 shrink-0 overflow-hidden rounded-3xl bg-zinc-100">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-contain"
                    src={project.image}
                  />
                </div>

                <div className="-ml-10 flex flex-col justify-between rounded-3xl bg-white p-12 shadow-xl">
                  <div className="flex flex-col gap-4">
                    <CardTag tag={project.category} />
                    <CardHeading title={project.title} />
                    <CardParagraph description={project.description} />
                    <CardLink
                      ariaLabel={project.title}
                      label="Visit Project"
                      link={project.link}
                      type="external"
                    />
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturedHeading = () => (
  <Heading
    description="Six products that show the work — classroom AI, district platforms, gameplay systems, and streaming apps. Each one still shaping how people learn, play, and watch."
    title="Featured Projects"
  />
);
