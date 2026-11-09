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

export type ProficiencyLevel = "Exploring" | "Practiced" | "Hands-on" | "Confident";

// Reference values for each band, not measured proficiency scores.
// Core technologies retain their individually supplied values within a band.
export const proficiencyLevels: Record<ProficiencyLevel, number> = {
  "Exploring": 25,
  "Practiced": 40,
  "Hands-on": 65,
  "Confident": 85,
};

export type Technology = { name: string; level?: ProficiencyLevel } & (
  | { icon: IconType; logo?: never }
  | { icon?: never; logo: string }
);
export type AssessedTechnology = Technology & { level: ProficiencyLevel };
export const technologyFilters = ["All", "Frontend", "Backend", "Mobile", "Database & Tools"] as const;
export type TechnologyFilter = (typeof technologyFilters)[number];
export type CoreTechnology = AssessedTechnology & {
  value: number;
  category: Exclude<TechnologyFilter, "All">;
};
export type TechnologyGroup = { category: string; technologies: AssessedTechnology[] };

// User-supplied provisional labels and values are deliberately independent.
// Edit each entry as practical experience changes; never infer its label from its value.
export const coreTechnologies: CoreTechnology[] = [
  { name: "JavaScript", icon: SiJavascript, level: "Hands-on", value: 70, category: "Frontend" },
  { name: "Python", icon: SiPython, level: "Hands-on", value: 65, category: "Backend" },
  { name: "React.js", icon: SiReact, level: "Hands-on", value: 70, category: "Frontend" },
  { name: "Django", icon: SiDjango, level: "Hands-on", value: 60, category: "Backend" },
  { name: "React Native", icon: SiReact, level: "Hands-on", value: 65, category: "Mobile" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Hands-on", value: 60, category: "Frontend" },
  { name: "Firebase", icon: SiFirebase, level: "Hands-on", value: 60, category: "Database & Tools" },
  { name: "Supabase", icon: SiSupabase, level: "Hands-on", value: 55, category: "Database & Tools" },
  { name: "HTML5", icon: SiHtml5, level: "Hands-on", value: 70, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: "Hands-on", value: 70, category: "Frontend" },
  { name: "Git", icon: SiGit, level: "Hands-on", value: 65, category: "Database & Tools" },
  { name: "GitHub", icon: SiGithub, level: "Hands-on", value: 70, category: "Database & Tools" },
];

export const additionalTechnologyGroups: TechnologyGroup[] = [
  { category: "Frontend", technologies: [
    { name: "TypeScript", icon: SiTypescript, level: "Practiced" },
    { name: "Next.js", icon: SiNextdotjs, level: "Practiced" },
    { name: "Bootstrap", icon: SiBootstrap, level: "Practiced" },
  ] },
  { category: "Mobile", technologies: [
    { name: "Expo", icon: SiExpo, level: "Hands-on" },
  ] },
  { category: "Database & ORM", technologies: [
    { name: "PostgreSQL", icon: SiPostgresql, level: "Practiced" },
    { name: "MySQL", icon: SiMysql, level: "Practiced" },
    { name: "Prisma", icon: SiPrisma, level: "Practiced" },
  ] },
  { category: "Programming", technologies: [
    { name: "Kotlin", icon: SiKotlin, level: "Practiced" },
    { name: "Java", icon: FaJava, level: "Practiced" },
  ] },
  { category: "Deployment", technologies: [
    { name: "Vercel", icon: SiVercel, level: "Hands-on" },
  ] },
];

export const currentlyExploring: AssessedTechnology[] = [
  { name: "C#", icon: TbBrandCSharp, level: "Exploring" },
  { name: "PHP", icon: SiPhp, level: "Exploring" },
  { name: "Laravel", icon: SiLaravel, level: "Exploring" },
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
