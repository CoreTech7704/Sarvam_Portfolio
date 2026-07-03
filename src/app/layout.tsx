import type { Metadata } from "next";
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
  title: "Sarvam Patel | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js and scalable web applications. Portfolio showcasing projects, experience and technical skills.",

  keywords: [
    "Sarvam Patel",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],

  authors: [{ name: "Sarvam Patel" }],

  creator: "Sarvam Patel",

  metadataBase: new URL("https://sarvam-portfolio.vercel.app"),

  openGraph: {
    title: "Sarvam Patel | Full Stack Developer",

    description:
      "Portfolio showcasing projects, internships and full-stack development experience.",

    url: "https://sarvam-portfolio.vercel.app",

    siteName: "Sarvam Portfolio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sarvam Patel",

    description:
      "Full Stack Developer specializing in React, Next.js and Node.js.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
