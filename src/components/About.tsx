"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { interests } from "@/data/interests";
import { useInView } from "@/hooks/Inviews";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-15"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learning through experimentation, projects and real-world
            development.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
              <p>
                Computer Science graduate and Full Stack Developer passionate
                about building modern web applications using React, Next.js and
                Node.js. I enjoy turning ideas into reliable software while
                continuously learning through experimentation and hands-on
                projects.
              </p>
              <p>
                Beyond web development, I have a strong interest in
                <span className="text-blue-400"> Linux systems</span>,
                <span className="text-blue-400"> networking</span>,
                <span className="text-blue-400"> computer hardware</span>
                and
                <span className="text-blue-400"> PC building</span>. Exploring
                technology beyond code helps me understand how software,
                infrastructure and hardware work together.
              </p>
              <p>
                I enjoy learning by building, testing and optimizing real-world
                projects. Whether it&apos;s developing scalable APIs, deploying
                applications or experimenting with Linux environments, I believe
                every project is an opportunity to improve as an engineer.
              </p>
            </div>

            {/* Interests */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">
                Also interested in
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${stat.glow} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}
                  />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-blue-400/25 transition-all h-full flex flex-col items-center text-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-linear-to-br ${stat.gradient}`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
