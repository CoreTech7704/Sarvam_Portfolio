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

    sameAs: [
      "https://github.com/CoreTech7704",
      "https://www.linkedin.com/in/sarvam-patel/",
    ],

    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
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
