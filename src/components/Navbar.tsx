"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Determine active section
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);

    setMobileOpen(false);

    if (!el) return;

    setTimeout(() => {
      window.scrollTo({
        top: el.offsetTop - 90,
        behavior: "smooth",
      });
    }, 180);
  };

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Glassmorphism backdrop — fades in on scroll */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled
              ? "bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/6 shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }`}
        />

        <nav className="relative max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Logo / Initials */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="Scroll to top"
          >
            <div className="relative w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/50 group-hover:scale-105 transition-all duration-300">
              <span className="text-white text-md select-none">SP</span>
            </div>
            <span
              className={`hidden sm:block text-sm text-white/70 group-hover:text-white transition-colors duration-200 ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              } transition-opacity duration-300`}
            >
              Sarvam Patel
            </span>
          </button>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-label={link.label}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-300"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* Active indicator pill */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-blue-500/10 border border-blue-400/20 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Resume CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4 text-gray-300" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4 text-gray-300" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="mx-4 mt-2 mb-3 bg-[#081120]/80
                backdrop-blur-2xl
                border border-white/8
                shadow-[0_8px_40px_rgba(0,0,0,0.45)] rounded-2xl overflow-hidden shadow-black/40"
              >
                <div className="p-3 space-y-1">
                  {navLinks.map((link) => {
                    const sectionId = link.href.slice(1);
                    const isActive = activeSection === sectionId;

                    return (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        aria-label={link.label}
                        className={`relative overflow-hidden w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                          isActive
                            ? "bg-blue-500/10 border border-blue-400/20 text-blue-300"
                            : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="px-3 pb-3">
                  <div className="h-px bg-white/8 mb-3" />
                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => setMobileOpen(false)}
                    aria-label="Download resume"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    <FileDown className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer so hero content isn't hidden behind the nav */}
      <div className="h-0" />
    </>
  );
}
