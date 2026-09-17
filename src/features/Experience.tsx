"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { CardHeading, CardParagraph, CardTag } from "@/components/Card";
import { Heading } from "@/components/Heading";

import EdiaLogo from "../images/logos/edia.png";
import GearboxLogo from "../images/logos/gearbox.png";
import KaplanLogo from "../images/logos/kaplan.png";
import MagicSchoolLogo from "../images/logos/magicschool.png";
import RokuLogo from "../images/logos/roku.png";
import UniversityOfFloridaLogo from "../images/logos/university-of-florida.png";

const experiences = [
  {
    color: "transparent",
    company: "MagicSchool AI",
    description:
      "Led full-stack development of Magic Quizzes and Studio Mode in React and TypeScript, plus a no-code AI Tool Builder with multi-LLM backends and FERPA-aligned school security.",
    logo: MagicSchoolLogo,
    logoPadded: false,
    role: "Senior Full-Stack Software Engineer",
    year: "2024 - Present",
  },
  {
    color: "transparent",
    company: "Edia",
    description:
      "Built Edia's AI attendance platform end to end — Node.js and React services for real-time absence tracking, multilingual parent outreach, and MTSS analytics on Python and PostgreSQL.",
    logo: EdiaLogo,
    logoPadded: false,
    role: "Senior Software Engineer",
    year: "2022 - 2024",
  },
  {
    color: "transparent",
    company: "Gearbox Entertainment",
    description:
      "Owned core combat and spellcasting systems in Unreal Engine 4 for Tiny Tina's Wonderlands, including C++ networking, procedural loot balance, and cross-platform performance work.",
    logo: GearboxLogo,
    logoPadded: false,
    role: "Senior Software Engineer",
    year: "2019 - 2022",
  },
  {
    color: "transparent",
    company: "Roku, Inc.",
    description:
      "Shipped Roku channels in BrightScript and SceneGraph, cut UI lag on low-spec devices, integrated RAF advertising, and optimized HLS/DASH playback to improve start times and retention.",
    logo: RokuLogo,
    logoPadded: false,
    role: "Software Engineer II",
    year: "2015 - 2019",
  },
  {
    color: "transparent",
    company: "Kaplan",
    description:
      "Built responsive test-prep web apps and REST APIs for practice platforms, migrated offline question banks to cloud databases, and kept systems stable through peak exam traffic.",
    logo: KaplanLogo,
    logoPadded: false,
    role: "Junior Software Developer",
    year: "2013 - 2015",
  },
  {
    color: "transparent",
    company: "University of Florida",
    description:
      "Completed a Bachelor of Science in Computer Science, building foundations in software engineering, systems, and algorithms that shaped eleven-plus years of shipping high-impact products.",
    logo: UniversityOfFloridaLogo,
    logoPadded: false,
    role: "B.S. Computer Science",
    year: "2009 - 2013",
  },
];

const CARD_WIDTH = 768;
const GAP = 200;

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: containerRef,
  });

  const totalDistance = (experiences.length - 1) * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, (v) => {
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1280;
    const space = (viewportWidth - CARD_WIDTH) / 2;
    return -v * totalDistance + space;
  });

  return (
    <section className="bg-amber-100 scroll-mt-28" id="experience">
      <div className="flex flex-col gap-8 px-0 pb-10 mx-5 md:hidden">
        <ExperienceHeading />
        {experiences.map((experience) => (
          <article
            className="w-full"
            key={`${experience.company}-${experience.year}`}
          >
            <div className="relative flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl">
              <div
                className={`absolute right-4 top-4 inline-block rounded-2xl ${
                  experience.logoPadded === false ? "p-0" : "p-3"
                }`}
                style={{ backgroundColor: experience.color }}
              >
                <Image
                  alt={`${experience.company} logo`}
                  className="h-12 w-12 rounded-2xl object-cover"
                  src={experience.logo}
                />
              </div>
              <CardTag tag={experience.year} />
              <CardHeading title={experience.company} />
              <h4 className="text-base font-semibold uppercase tracking-wide">
                {experience.role}
              </h4>
              <CardParagraph description={experience.description} />
            </div>
          </article>
        ))}
      </div>

      <div
        className="hidden md:block"
        ref={containerRef}
        style={{ height: `${experiences.length * 100}vh` }}
      >
        <div className="sticky top-0 flex flex-col justify-center gap-16 overflow-visible md:h-screen">
          <ExperienceHeading />
          <motion.div className="flex md:mt-20" style={{ gap: GAP, x }}>
            {experiences.map((experience) => (
              <article
                className="shrink-0"
                key={`${experience.company}-${experience.year}`}
                style={{ width: CARD_WIDTH }}
              >
                <div className="relative flex flex-col gap-4 rounded-3xl bg-white p-12 shadow-xl">
                  <div
                    className={`absolute -right-12.5 -top-12.5 inline-block rounded-2xl ${
                      experience.logoPadded === false ? "p-0" : "p-5"
                    }`}
                    style={{ backgroundColor: experience.color }}
                  >
                    <Image
                      alt={`${experience.company} logo`}
                      className="h-20 w-20 rounded-2xl object-cover"
                      src={experience.logo}
                    />
                  </div>
                  <CardTag tag={experience.year} />
                  <CardHeading title={experience.company} />
                  <h4 className="text-xl font-semibold uppercase tracking-wide">
                    {experience.role}
                  </h4>
                  <CardParagraph description={experience.description} />
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceHeading = () => (
  <Heading
    description="From AAA multiplayer combat to generative AI for teachers, I have spent over a decade building systems people depend on — the quiet infrastructure that keeps classrooms, games, and products working when it matters."
    title="Experience"
  />
);
