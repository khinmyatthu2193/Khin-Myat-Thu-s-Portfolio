import type { IconType } from "react-icons";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiBootstrap, SiClaude, SiDjango, SiExpo, SiFirebase, SiGit, SiGithub,
  SiHtml5, SiJavascript, SiKotlin, SiMysql, SiNextdotjs, SiOpenai,
  SiPostgresql, SiPrisma, SiPython, SiReact, SiSupabase, SiTailwindcss,
  SiTypescript, SiVercel, SiPhp, SiLaravel,
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

// Reference values for each band, not measured proficiency scores.
// Core technologies retain their individually supplied values within a band.
export const proficiencyLevels: Record<ProficiencyLevel, number> = {
  Learning: 25,
  Familiar: 40,
  Working: 65,
  Strong: 85,
};

export type Technology = { name: string; level?: ProficiencyLevel } & (
  | { icon: IconType; logo?: never }
  | { icon?: never; logo: string }
);
export type AssessedTechnology = Technology & { level: ProficiencyLevel };
export type CoreTechnology = AssessedTechnology & { value: number };
export type TechnologyGroup = { category: string; technologies: AssessedTechnology[] };

// User-supplied provisional labels and values are deliberately independent.
// Edit each entry as practical experience changes; never infer its label from its value.
export const coreTechnologies: CoreTechnology[] = [
  { name: "JavaScript", icon: SiJavascript, level: "Working", value: 70 },
  { name: "Python", icon: SiPython, level: "Working", value: 65 },
  { name: "React.js", icon: SiReact, level: "Working", value: 70 },
  { name: "Django", icon: SiDjango, level: "Working", value: 60 },
  { name: "React Native", icon: SiReact, level: "Working", value: 65 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Working", value: 60 },
  { name: "Firebase", icon: SiFirebase, level: "Working", value: 60 },
  { name: "Supabase", icon: SiSupabase, level: "Working", value: 55 },
  { name: "HTML5", icon: SiHtml5, level: "Working", value: 70 },
  { name: "CSS3", icon: FaCss3Alt, level: "Working", value: 70 },
  { name: "Git", icon: SiGit, level: "Working", value: 65 },
  { name: "GitHub", icon: SiGithub, level: "Working", value: 70 },
];

export const additionalTechnologyGroups: TechnologyGroup[] = [
  { category: "Frontend", technologies: [
    { name: "TypeScript", icon: SiTypescript, level: "Familiar" },
    { name: "Next.js", icon: SiNextdotjs, level: "Familiar" },
    { name: "Bootstrap", icon: SiBootstrap, level: "Familiar" },
  ] },
  { category: "Mobile", technologies: [
    { name: "Expo", icon: SiExpo, level: "Working" },
  ] },
  { category: "Database & ORM", technologies: [
    { name: "PostgreSQL", icon: SiPostgresql, level: "Familiar" },
    { name: "MySQL", icon: SiMysql, level: "Familiar" },
    { name: "Prisma", icon: SiPrisma, level: "Familiar" },
  ] },
  { category: "Programming", technologies: [
    { name: "Kotlin", icon: SiKotlin, level: "Familiar" },
    { name: "Java", icon: FaJava, level: "Familiar" },
  ] },
  { category: "Deployment", technologies: [
    { name: "Vercel", icon: SiVercel, level: "Working" },
  ] },
];

export const currentlyLearning: AssessedTechnology[] = [
  { name: "C#", icon: TbBrandCSharp, level: "Learning" },
  { name: "PHP", icon: SiPhp, level: "Learning" },
  { name: "Laravel", icon: SiLaravel, level: "Learning" },
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
