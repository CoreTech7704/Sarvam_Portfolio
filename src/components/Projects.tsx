"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { ExternalLink, Code2 } from "lucide-react";
import { useInView } from "@/hooks/Inviews";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
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

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-blue-400/25 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <FiGithub className="w-4 h-4 text-blue-400" />
                    </div>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 bg-blue-500/15 border border-blue-400/25 rounded-full text-xs text-blue-300">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      title="Source Code"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg mb-3 text-white group-hover:text-blue-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-xl transition-all text-sm text-gray-300 hover:text-white"
                  >
                    <Code2 className="w-4 h-4" />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600/80 hover:bg-blue-500 rounded-xl transition-all text-sm text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-xl transition-all text-gray-300 hover:text-white"
          >
            <FiGithub className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
