"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useInView } from "@/hooks/Inviews";

export default function Skills() {
  const { ref, inView } = useInView();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={fadeUp.hidden}
          animate={inView ? fadeUp.visible : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={fadeUp.hidden}
                animate={inView ? fadeUp.visible : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.12 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.glow} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}
                />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/15 transition-all">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                    <div
                      className={`p-2.5 rounded-xl bg-linear-to-br ${category.gradient}`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg text-white">{category.title}</h3>
                    <span className="ml-auto text-xs text-gray-500 tabular-nums">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills — pill grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.25,
                          delay: categoryIndex * 0.12 + skillIndex * 0.04,
                        }}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-blue-400/40 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Continuously learning and adapting to new technologies and frameworks
        </motion.p>
      </div>
    </section>
  );
}
