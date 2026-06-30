"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, FolderGit2 } from "lucide-react";

const codeLines = [
  { text: "const developer = {", indent: 0 },
  { text: '  name: "Sarvam Patel",', indent: 1 },
  { text: '  role: "Full Stack Developer",', indent: 1 },
  { text: "  stack: [Next.js, React, Node.js],", indent: 1 },
  { text: "  open: true,", indent: 1 },
  { text: "};", indent: 0 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 -left-60 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-60 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-sm text-blue-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to new opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Sarvam
              </span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Patel
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-6"
            >
              <span className="text-xl md:text-2xl text-blue-400">
                Full Stack Web Developer
              </span>
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
            >
Full Stack Developer focused on building modern web applications with React, Next.js and Node.js. Passionate about Linux, system architecture, networking and creating reliable software solutions.            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5" />
                  View My Work
                </span>
              </button>

              <a
                href="#contact"
                className="group px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/40 transition-all text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </span>
              </a>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Code card visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl blur-2xl" />

              {/* Code window card */}
              <div className="relative bg-[#0d1424] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-gray-500 font-mono">portfolio.ts</span>
                </div>

                {/* Code content */}
                <div className="p-6 font-mono text-sm">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                      className="flex items-center gap-3 mb-1"
                    >
                      <span className="text-gray-600 select-none w-4 text-right shrink-0">{i + 1}</span>
                      <span
                        className="text-gray-300"
                        style={{ paddingLeft: line.indent * 16 }}
                        dangerouslySetInnerHTML={{
                          __html: line.text
                            .replace(/"([^"]+)"/g, '<span class="text-cyan-300">"$1"</span>')
                            .replace(/\[([^\]]+)\]/g, '<span class="text-blue-300">[$1]</span>')
                            .replace(/\b(const|true)\b/g, '<span class="text-purple-400">$1</span>')
                        }}
                      />
                    </motion.div>
                  ))}

                  {/* Blinking cursor */}
                  <motion.div
                    className="flex items-center gap-3 mt-2"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <span className="text-gray-600 w-4 text-right text-sm shrink-0">7</span>
                    <span className="w-2 h-4 bg-blue-400 rounded-sm" />
                  </motion.div>
                </div>

                {/* Stats bar at bottom */}
                <div className="flex items-center justify-between px-6 py-3 bg-white/3 border-t border-white/10">
                  <div className="flex gap-4">
                    <span className="text-xs text-gray-500">TypeScript</span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-green-400">● ready</span>
                  </div>
                  <span className="text-xs text-gray-500">Ln 7, Col 1</span>
                </div>
              </div>

              {/* Floating badge: years exp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -left-6 bg-[#0d1424] border border-blue-400/30 rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-2xl text-blue-400 mb-0.5">8+</div>
                <div className="text-xs text-gray-400">Real Projects</div>
              </motion.div>

              {/* Floating badge: stack */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute -top-4 -right-6 bg-[#0d1424] border border-cyan-400/30 rounded-xl px-4 py-3 shadow-lg"
              >
                <div className="text-2xl text-cyan-400 mb-0.5">CSE</div>
                <div className="text-xs text-gray-400">Graduate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 lg:mt-24 mb-4 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
