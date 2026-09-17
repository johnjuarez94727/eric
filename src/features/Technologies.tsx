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
  { name: "Classroom AI Tools" },
  { name: "No-code AI Builders" },
  { name: "Automated Grading" },
  { name: "Lesson Generation" },
  { name: "Intent Classification" },
  { name: "FERPA Compliance" },
  { name: "COPPA Compliance" },
  { name: "SOC 2 Type II" },
  { name: "Row-level Security" },
  { name: "Student Information Systems" },
  { name: "Learning Management Systems" },
  { name: "MTSS Data Platforms" },
  { name: "Edtech Platforms" },
  { name: "K-12 District Tools" },
  { name: "AI Attendance Systems" },
  { name: "Generative AI for Teachers" },
  { name: "Classroom Chatbots" },
  { name: "Parent Communication" },
  { name: "Multilingual Messaging" },
  { name: "School Security" },
  { name: "Student Privacy" },
  { name: "Administrative Dashboards" },
  { name: "Education Analytics" },
  { name: "Test Prep Platforms" },
  { name: "Practice Question Banks" },
  { name: "Assessment Systems" },
  { name: "Admissions Systems" },
  { name: "Instructional Design Tools" },
  { name: "Teacher Workflows" },
  { name: "Student Outcomes" },
  { name: "Real-time Event Tracking" },
  { name: "Cloud Databases" },
  { name: "Responsive Web Apps" },
  { name: "Full-stack Engineering" },
  { name: "Backend Services" },
  { name: "Frontend Interfaces" },
  { name: "System Architecture" },
  { name: "Data Pipelines" },
  { name: "UI Architecture" },
  { name: "Peak Traffic Hardening" },
  { name: "Technical Mentorship" },
  { name: "Design Reviews" },
  { name: "Git-based Workflows" },
  { name: "Code Review Practices" },
  { name: "Accessibility in Learning" },
  { name: "District Rollouts" },
  { name: "Professional Development" },
  { name: "Curriculum Support Tools" },
  { name: "Adaptive Learning" },
  { name: "Personalized Tutoring" },
  { name: "SIS Integrations" },
  { name: "LMS Integrations" },
  { name: "Google Classroom" },
  { name: "Canvas Integrations" },
  { name: "School Data Unification" },
  { name: "Chronic Absenteeism Tools" },
  { name: "Family Outreach" },
  { name: "Structured JSON Pathways" },
  { name: "Safe AI Guardrails" },
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
