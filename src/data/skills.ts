import type { IconType } from "react-icons";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiBootstrap, SiClaude, SiDjango, SiExpo, SiFirebase, SiGit, SiGithub,
  SiHtml5, SiJavascript, SiKotlin, SiMysql, SiNextdotjs, SiOpenai,
  SiPostgresql, SiPrisma, SiPython, SiReact, SiSupabase, SiTailwindcss,
  SiTypescript, SiVercel,
} from "react-icons/si";
import { Code2, Database, Plug, Server, Smartphone, Sparkles, type LucideIcon } from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive web interfaces with modern JavaScript frameworks and styling technologies.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "Developing server-side functionality and connecting application interfaces with backend services using Python and Django.",
    icon: Server,
  },
  {
    title: "Mobile Application Development",
    description: "Creating cross-platform mobile applications with React Native and Expo.",
    icon: Smartphone,
  },
  {
    title: "Database Integration",
    description: "Connecting applications with cloud and relational databases to support application data and functionality.",
    icon: Database,
  },
  {
    title: "API Development & Integration",
    description: "Working with REST-based communication and integrating backend and external services.",
    icon: Plug,
  },
  {
    title: "AI-Assisted Development",
    description: "Using AI coding tools to support implementation, problem-solving, and development workflows.",
    icon: Sparkles,
  },
];

export type ProficiencyLevel = "Learning" | "Familiar" | "Working" | "Strong";

// Illustrative bar lengths only; these are not measured proficiency scores.
export const proficiencyLevels: Record<ProficiencyLevel, number> = {
  Learning: 25,
  Familiar: 40,
  Working: 65,
  Strong: 85,
};

export type Technology = { name: string } & (
  | { icon: IconType; logo?: never }
  | { icon?: never; logo: string }
);
export type CoreTechnology = Technology & { level: ProficiencyLevel };

// User-supplied provisional levels. Edit each entry as practical experience changes.
export const coreTechnologies: CoreTechnology[] = [
  { name: "JavaScript", icon: SiJavascript, level: "Working" },
  { name: "Python", icon: SiPython, level: "Working" },
  { name: "React.js", icon: SiReact, level: "Working" },
  { name: "Django", icon: SiDjango, level: "Working" },
  { name: "React Native", icon: SiReact, level: "Working" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Working" },
  { name: "Firebase", icon: SiFirebase, level: "Working" },
  { name: "Supabase", icon: SiSupabase, level: "Working" },
  { name: "HTML5", icon: SiHtml5, level: "Working" },
  { name: "CSS3", icon: FaCss3Alt, level: "Working" },
  { name: "Git", icon: SiGit, level: "Working" },
  { name: "GitHub", icon: SiGithub, level: "Working" },
];

export const additionalTechnologies: Technology[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Expo", icon: SiExpo },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Java", icon: FaJava },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Vercel", icon: SiVercel },
];

export const aiDevelopmentTools: Technology[] = [
  // Official Cursor app icon: https://cursor.com/brand
  { name: "Cursor", logo: "/icons/skills/cursor.svg" },
  { name: "OpenAI Codex", icon: SiOpenai },
  { name: "Claude Code", icon: SiClaude },
];

export const softSkills: string[] = [
  "Problem-Solving",
  "Team Collaboration",
  "Adaptability",
  "Communication",
  "Leadership & Coordination",
  "Continuous Learning",
];
