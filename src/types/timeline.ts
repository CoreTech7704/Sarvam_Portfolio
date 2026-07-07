import { LucideIcon } from "lucide-react";

export interface Timeline {
  type: string;
  icon: LucideIcon;
  title: string;
  organization?: string;
  period: string;
  description: string;
  highlights: string[];
  accent: "blue" | "cyan" | "indigo" | "purple";
}
