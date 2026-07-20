import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Mail, MapPin } from "lucide-react";
import { ContactMethod } from "@/types/contact";

export const contactMethods: ContactMethod[] = [
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/sarvampatel",
    href: "https://github.com/CoreTech7704",
    gradient: "from-gray-600 to-gray-500",
    glow: "from-gray-600/15 to-gray-500/5",
    description: "Browse my projects and contributions",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sarvampatel",
    href: "https://www.linkedin.com/in/sarvam-patel/",
    gradient: "from-blue-600 to-blue-500",
    glow: "from-blue-600/15 to-blue-500/5",
    description: "Connect with me professionally",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sarvampatel953@gmail.com",
    href: "mailto:sarvampatel953@gmail.com",
    gradient: "from-cyan-600 to-cyan-400",
    glow: "from-cyan-600/15 to-cyan-400/5",
    description: "Send me a direct message",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote • Hybrid • On-site",
    href: null,
    gradient: "from-indigo-600 to-blue-500",
    glow: "from-indigo-600/15 to-blue-500/5",
    description: "Open to global opportunities",
  },
];