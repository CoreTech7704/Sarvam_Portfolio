import { Code2, Database, Server, Wrench } from "lucide-react";
import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-blue-600 to-blue-400",
    glow: "from-blue-600/15 to-blue-400/5",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    gradient: "from-cyan-600 to-cyan-400",
    glow: "from-cyan-600/15 to-cyan-400/5",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "JWT Authentication",
      "Redis Caching",
    ],
  },
  {
    title: "Database",
    icon: Database,
    gradient: "from-indigo-600 to-blue-500",
    glow: "from-indigo-600/15 to-blue-500/5",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Prisma"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    gradient: "from-blue-500 to-cyan-500",
    glow: "from-blue-500/15 to-cyan-500/5",
    skills: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Postman", "Figma"],
  },
];
