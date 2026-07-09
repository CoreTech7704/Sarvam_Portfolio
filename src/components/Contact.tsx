"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, FileDown, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/Inviews";
import { contactMethods } from "@/data/contact";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or interested in working together? I&apos;m
            always open to discussing opportunities, collaborations, and new
            ideas.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const inner = (
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-linear-to-br ${method.gradient} shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-500 mb-0.5">
                    {method.label}
                  </div>
                  <div className="text-white text-sm group-hover:text-blue-200 transition-colors truncate">
                    {method.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {method.description}
                  </div>
                </div>
                {method.href && (
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 ml-auto shrink-0 transition-colors" />
                )}
              </div>
            );

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${method.glow} rounded-xl blur-xl group-hover:blur-2xl transition-all`}
                />
                {method.href ? (
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    aria-label={`Visit ${method.label}`}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="relative block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-blue-400/25 transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Resume download — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative group mb-20"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl text-white mb-1.5">
                  Interested in Working Together?
                </h3>
                <p className="text-gray-400 text-sm">
                  A comprehensive overview of my experience, skills, and
                  projects.
                </p>
              </div>
              <a
                href="/resume.pdf"
                download
                aria-label="Download Resume PDF"
                className="group/btn relative px-8 py-3.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <FileDown className="w-5 h-5" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-10 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm mb-5">
            © {new Date().getFullYear()} Sarvam Patel · Built with Next.js,
            Tailwind CSS & Framer Motion
          </p>
          <div className="flex justify-center gap-5">
            {[
              { href: "https://github.com/CoreTech7704", Icon: FiGithub },
              {
                href: "https://www.linkedin.com/in/sarvam-patel/",
                Icon: FiLinkedin,
              },
              { href: "mailto:sarvampatel953@gmail.com", Icon: Mail },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                arial-label={`Visit ${Icon.name} profile`}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="p-2 text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 hover:scale-110 rounded-lg transition-all duration-300"
              >
                <Icon aria-label={`Visit ${Icon.name} profile`} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
