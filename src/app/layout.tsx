import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarvam-portfolio.vercel.app"),

  title: {
    default: "Sarvam Patel | Full Stack Developer",
    template: "%s | Sarvam Patel",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and scalable web applications. Portfolio showcasing projects, internships and technical skills.",

  keywords: [
    "Sarvam Patel",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MERN Stack",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],

  authors: [{ name: "Sarvam Patel" }],
  creator: "Sarvam Patel",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sarvam Patel | Full Stack Developer",

    description:
      "Portfolio showcasing projects, internships and full-stack development experience.",

    url: "/",

    siteName: "Sarvam Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarvam Patel Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sarvam Patel | Full Stack Developer",

    description:
      "Portfolio showcasing projects, internships and technical skills.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030712] text-white overflow-x-hidden flex flex-col">{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
