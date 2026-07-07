import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface ContactMethod {
  label: string;
  value: string;
  href?: string | null;
  description: string;
  gradient: string;
  glow: string;
  icon: LucideIcon | IconType;
}