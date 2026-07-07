"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/Inviews";
import { timeline } from "@/data/timeline";
import { accentMap } from "@/data/timelineTheme";

export default function Journey() {
  const { ref, inView } = useInView();

  const fadeLeft = {
    hidden: {
      opacity: 0,

      x: -20,
    },

    visible: {
      opacity: 1,

      x: 0,
    },
  };

  const bulletColor = {
    blue: "text-blue-400",

    cyan: "text-cyan-400",

    indigo: "text-indigo-400",

    purple: "text-purple-400",
  };

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
                  key={item.title}
                  initial={fadeLeft.hidden}
                  animate={inView ? fadeLeft.visible : {}}
                  transition={{ duration: 0.55, delay: index * 0.15 }}
                  className="relative flex gap-8"
                >
                  {/* Left: dot + icon */}
                  <div className="flex flex-col items-center shrink-0 w-12">
                    {/* Icon circle */}
                    <div
                      className={`relative z-10 p-2.5 rounded-xl bg-linear-to-r ${accent.icon} shadow-lg`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Right: card */}
                  <div className="flex-1 pb-2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-linear-to-r from-blue-600/8 to-cyan-500/8 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
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
                              <span
                                className={`${bulletColor[item.accent]} mt-0.5 shrink-0`}
                              >
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
