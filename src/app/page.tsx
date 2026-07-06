import dynamic from "next/dynamic";

import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Journey = dynamic(() => import("@/components/Journey"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0f1e] text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}
