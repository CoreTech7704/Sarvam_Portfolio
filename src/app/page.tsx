import dynamic from "next/dynamic";

import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Journey = dynamic(() => import("@/components/Journey"));
const Contact = dynamic(() => import("@/components/Contact"));

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sarvam Patel",
    url: "https://sarvam-patel.vercel.app",
    image: "https://sarvam-patel.vercel.app/og-image.png",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js and scalable web applications.",
    email: "mailto:sarvampatel953@gmail.com",
    sameAs: [
      "https://github.com/CoreTech7704",
      "https://www.linkedin.com/in/sarvam-patel/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Linux",
      "Networking",
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sarvam Portfolio",
    url: "https://sarvam-patel.vercel.app",
    author: {
      "@type": "Person",
      name: "Sarvam Patel",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main>
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
