"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Target } from "lucide-react";
import { useInView } from "@/hooks/Inviews";

const timeline = [
  {
    type: "education",

    icon: GraduationCap,

    title: "B.E. Computer Science & Engineering",

    organization: "University",

    period: "2022 – 2026",

    description:
      "Completed Bachelor of Engineering in Computer Science with practical exposure to full-stack development, databases, networking, Linux systems and software engineering concepts.",

    highlights: [
      "CGPA: 8.16",
      "Built multiple academic and personal projects",
      "Focused on practical learning and experimentation",
      "Studied networking, operating systems and databases",
    ],

    accent: "blue",
  },

  {
    type: "experience",

    icon: Briefcase,

    title: "React Developer Intern",

    organization: "Krtya Technologies",

    period: "2025",

    description:
      "Worked as a React Developer Intern, contributing to frontend interfaces, reusable components and modern web application development workflows.",

    highlights: [
      "Developed responsive React interfaces",

      "Worked with component-based architecture",

      "Collaborated using Git and GitHub",

      "Applied modern frontend development practices",
    ],

    accent: "cyan",
  },

  {
    type: "project",

    icon: Code2,

    title: "Independent Projects",

    organization: "Personal Development",

    period: "2023 – Present",

    description:
      "Built personal projects to strengthen skills in frontend development, backend systems, authentication, APIs, databases and software architecture.",

    highlights: [
      "VOIDWORK",

      "Swift News",

      "URL Shortener",

      "DES Visualizer",

      "Pari Travel Agency",
    ],

    accent: "indigo",
  },

  {
    type: "experience",

    icon: Briefcase,

    title: "Full Stack Developer Intern",

    organization: "Krtya Technologies",

    period: "2026",

    description:
      "Worked on a full-stack blogging platform during internship, contributing across frontend, backend APIs, authentication, caching and deployment-oriented architecture.",

    highlights: [
      "Developed VOIDWORK platform",

      "Implemented JWT authentication",

      "Integrated Redis caching",

      "Cloudinary media management",

      "Role-based access control",
    ],

    accent: "blue",
  },

  {
    type: "goal",

    icon: Target,

    title: "Career Goals",

    organization: "Looking Ahead",

    period: "2026-Present",

    description:
      "Seeking opportunities to contribute to impactful products while expanding expertise in backend engineering, cloud technologies, Linux infrastructure and scalable systems.",

    highlights: [
      "Backend Engineering",

      "Cloud Computing",

      "DevOps",

      "Distributed Systems",

      "Open Source",
    ],

    accent: "purple",
  },
];

const accentMap: Record<
  string,
  { dot: string; line: string; badge: string; icon: string }
> = {
  blue: {
    dot: "bg-blue-500 shadow-blue-500/50",
    line: "border-blue-500/30",
    badge: "bg-blue-500/10 border-blue-400/20 text-blue-300",
    icon: "from-blue-600 to-blue-400",
  },
  cyan: {
    dot: "bg-cyan-500 shadow-cyan-500/50",
    line: "border-cyan-500/30",
    badge: "bg-cyan-500/10 border-cyan-400/20 text-cyan-300",
    icon: "from-cyan-600 to-cyan-400",
  },
  indigo: {
    dot: "bg-indigo-500 shadow-indigo-500/50",
    line: "border-indigo-500/30",
    badge: "bg-indigo-500/10 border-indigo-400/20 text-indigo-300",
    icon: "from-indigo-600 to-blue-500",
  },
  purple: {
    dot: "bg-purple-500 shadow-purple-500/50",
    line: "border-purple-500/30",
    badge: "bg-purple-500/10 border-purple-400/20 text-purple-300",
    icon: "from-purple-600 to-indigo-500",
  },
};

export default function Journey() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Experience & Journey
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My path in technology and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-blue-600 via-indigo-500 to-purple-600" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const accent = accentMap[item.accent];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.15 }}
                  className="relative flex gap-8"
                >
                  {/* Left: dot + icon */}
                  <div className="flex flex-col items-center shrink-0 w-12">
                    {/* Icon circle */}
                    <div
                      className={`relative z-10 p-2.5 rounded-xl bg-linear-to-br ${accent.icon} shadow-lg`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Right: card */}
                  <div className="flex-1 pb-2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-600/8 to-cyan-500/8 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/15 transition-all">
                        {/* Period badge */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h3 className="text-base md:text-lg text-white leading-snug">
                            {item.title}
                          </h3>
                          <span
                            className={`shrink-0 px-2.5 py-1 rounded-full text-xs border ${accent.badge}`}
                          >
                            {item.period}
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 mb-3">
                          {item.organization}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1.5">
                          {item.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <span className="text-blue-400 mt-0.5 shrink-0">
                                ▸
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
