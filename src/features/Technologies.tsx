"use client";

import { motion } from "motion/react";

const duration = 200;

const technologies = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "C++" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind CSS" },
  { name: "D3.js" },
  { name: "REST APIs" },
  { name: "PostgreSQL" },
  { name: "OpenAI" },
  { name: "Google Gemini" },
  { name: "Anthropic Claude" },
  { name: "GPT-4" },
  { name: "Multi-LLM Integration" },
  { name: "AI Tool Builders" },
  { name: "No-code Platforms" },
  { name: "Structured JSON Pathways" },
  { name: "Intent Classification" },
  { name: "Unreal Engine 4" },
  { name: "Network Replication" },
  { name: "Lag Compensation" },
  { name: "Procedural Loot Systems" },
  { name: "Custom Shaders" },
  { name: "Particle Effects" },
  { name: "BrightScript" },
  { name: "Roku SceneGraph" },
  { name: "RAF Advertising" },
  { name: "VAST/VMAP" },
  { name: "HLS Streaming" },
  { name: "DASH Streaming" },
  { name: "XML" },
  { name: "FERPA Compliance" },
  { name: "COPPA Compliance" },
  { name: "SOC 2 Type II" },
  { name: "Row-level Security" },
  { name: "Student Information Systems" },
  { name: "Learning Management Systems" },
  { name: "MTSS Data Platforms" },
  { name: "Edtech Platforms" },
  { name: "AI Attendance Systems" },
  { name: "Generative AI Tools" },
  { name: "Classroom Chatbots" },
  { name: "Real-time Event Tracking" },
  { name: "Administrative Dashboards" },
  { name: "Geographic Analytics" },
  { name: "Cloud Databases" },
  { name: "Responsive Web Apps" },
  { name: "Cross-platform Co-op" },
  { name: "Console Performance" },
  { name: "Memory Optimization" },
  { name: "Frame Rate Tuning" },
  { name: "UI Architecture" },
  { name: "Video Playback Nodes" },
  { name: "Streaming Devices" },
  { name: "Technical Mentorship" },
  { name: "Design Reviews" },
  { name: "Full-stack Engineering" },
  { name: "Backend Services" },
  { name: "Frontend Interfaces" },
  { name: "System Architecture" },
  { name: "Data Pipelines" },
  { name: "Automated Grading" },
  { name: "Multilingual Messaging" },
  { name: "Parent Communication" },
  { name: "School Security" },
  { name: "Privacy Protection" },
  { name: "Game Mechanics" },
  { name: "Spellcasting Systems" },
  { name: "Combat Systems" },
  { name: "Cel-shaded Rendering" },
  { name: "Test Prep Platforms" },
  { name: "Practice Question Banks" },
  { name: "Peak Traffic Hardening" },
  { name: "Git-based Workflows" },
  { name: "Code Review Practices" },
];

export function Technologies() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="relative flex flex-col overflow-hidden gap-6 bg-slate-950 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-50 bg-linear-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-50 bg-linear-to-l from-slate-950 to-transparent" />
      <motion.div
        animate={{ x: "-50%" }}
        className="flex min-w-max gap-6 items-center whitespace-nowrap"
        initial={{ x: "0%" }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {marqueeItems.map((tech, index) => (
          <span
            aria-hidden={index >= technologies.length}
            className="text-sm md:text-base uppercase font-bold tracking-wide text-slate-500 leading-loose"
            key={`${tech.name}-${index}`}
          >
            {tech.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
