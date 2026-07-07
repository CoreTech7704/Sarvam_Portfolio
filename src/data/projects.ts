import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "VOIDWORK",
    description:
      "A modern full-stack blogging platform developed during my internship. Features authentication, markdown blogging, Redis caching, media uploads, role-based access control and a scalable backend architecture.",

    tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "Cloudinary"],

    liveUrl: "https://blog-frontend-steel-three.vercel.app/",
    githubUrl: "https://github.com/yourusername/voidwork",

    featured: true,
  },

  {
    title: "Swift News",

    description:
      "A responsive news application built with React and Tailwind CSS. Fetches real-time headlines using the GNews API with category filtering, infinite scrolling and dark mode support.",

    tags: ["React", "Tailwind", "JavaScript", "GNews API"],

    githubUrl: "https://github.com/CoreTech7704/swiftnews",

    featured: true,
  },

  {
    title: "URL Shortener",

    description:
      "A URL shortening platform built with Node.js and MongoDB featuring unique ID generation, redirection handling and click analytics.",

    tags: ["Node.js", "Express", "MongoDB", "EJS", "Tailwind"],

    githubUrl: "https://github.com/CoreTech7704/URL-Shortener",
  },

  {
    title: "Snap News",

    description:
      "A Bootstrap-powered news website that integrates the GNews API to deliver real-time headlines with category-based filtering and responsive layouts.",

    tags: ["React", "Bootstrap", "JavaScript", "GNews API"],

    githubUrl: "https://github.com/CoreTech7704/newsapp",
  },

  {
    title: "DES Visualizer",

    description:
      "A C language implementation and visualization of the DES encryption algorithm demonstrating key scheduling, permutations and low-level cryptographic concepts.",

    tags: ["C", "Cryptography", "Algorithms"],

    githubUrl: "https://github.com/CoreTech7704/DES_Algorithem",
  },

  {
    title: "Pari Travel Agency",

    description:
      "A responsive website developed for a real travel agency client featuring custom UI design, service sections and contact functionality.",

    tags: ["HTML", "CSS", "JavaScript"],

    githubUrl: "https://github.com/CoreTech7704/Pari-Agency",
  },
];

export const projectsContent = {
  title: "Featured Projects",

  subtitle:
    "A showcase of my recent work and technical expertise",

  github:
    "https://github.com/CoreTech7704"
}