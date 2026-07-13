import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sarvam Patel Portfolio",
    short_name: "Sarvam",
    description:
      "Full Stack Developer Portfolio showcasing projects, internships and technical skills.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#0a0f1e",
    orientation: "portrait",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon0.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  };
}