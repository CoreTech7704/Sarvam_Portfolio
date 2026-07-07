import { Briefcase, Code2, GraduationCap, Target } from "lucide-react";
import { Timeline } from "@/types/timeline";

export const timeline: Timeline[] = [
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
