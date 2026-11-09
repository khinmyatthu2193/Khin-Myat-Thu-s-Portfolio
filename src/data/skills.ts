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

export type ProficiencyLevel = "Advanced" | "Intermediate" | "Basic";

// Illustrative self-assessment values, not measured proficiency scores.
export const proficiencyLevels: Record<ProficiencyLevel, { value: number; description: string }> = {
  Advanced: { value: 85, description: "Can independently implement, explain, and debug substantial features using the technology." },
  Intermediate: { value: 60, description: "Can use the technology to build practical application features and understand its main concepts." },
  Basic: { value: 35, description: "Understands fundamental concepts and can implement simpler functionality with guidance when needed." },
};

export type TechnologyIdentity = { name: string } & (
  | { icon: IconType; logo?: never }
  | { icon?: never; logo: string }
);
export type Technology = TechnologyIdentity & { level?: ProficiencyLevel };
export type AssessedTechnology = Technology & { level: ProficiencyLevel };
export const technologyFilters = ["All", "Frontend", "Backend", "Mobile", "Database & Tools"] as const;
export type TechnologyFilter = (typeof technologyFilters)[number];
export type CoreTechnology = TechnologyIdentity & {
  category: Exclude<TechnologyFilter, "All">;
} & (
  | { level: ProficiencyLevel; value: number }
  | { level: null; value: null }
);
export type TechnologyGroup = { category: string; technologies: AssessedTechnology[] };

// User-supplied provisional labels and values are deliberately independent.
// Edit each entry as practical experience changes; never infer its label from its value.
export const coreTechnologies: CoreTechnology[] = [
  { name: "JavaScript", icon: SiJavascript, level: "Intermediate", value: 60, category: "Frontend" },
  { name: "React.js", icon: SiReact, level: "Intermediate", value: 60, category: "Frontend" },
  { name: "Python", icon: SiPython, level: "Intermediate", value: 60, category: "Backend" },
  { name: "Django", icon: SiDjango, level: "Intermediate", value: 60, category: "Backend" },
  { name: "React Native", icon: SiReact, level: "Intermediate", value: 60, category: "Mobile" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate", value: 60, category: "Frontend" },
  { name: "Firebase", icon: SiFirebase, level: null, value: null, category: "Database & Tools" },
  { name: "Supabase", icon: SiSupabase, level: null, value: null, category: "Database & Tools" },
  { name: "HTML5", icon: SiHtml5, level: "Intermediate", value: 60, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: "Intermediate", value: 60, category: "Frontend" },
  { name: "Git", icon: SiGit, level: "Intermediate", value: 60, category: "Database & Tools" },
  { name: "GitHub", icon: SiGithub, level: "Intermediate", value: 60, category: "Database & Tools" },
];

export const additionalTechnologyGroups: TechnologyGroup[] = [
  { category: "Frontend", technologies: [
    { name: "TypeScript", icon: SiTypescript, level: "Basic" },
    { name: "Next.js", icon: SiNextdotjs, level: "Basic" },
    { name: "Bootstrap", icon: SiBootstrap, level: "Basic" },
  ] },
  { category: "Mobile", technologies: [
    { name: "Expo", icon: SiExpo, level: "Intermediate" },
  ] },
  { category: "Database & ORM", technologies: [
    { name: "PostgreSQL", icon: SiPostgresql, level: "Basic" },
    { name: "MySQL", icon: SiMysql, level: "Basic" },
    { name: "Prisma", icon: SiPrisma, level: "Basic" },
  ] },
  { category: "Programming", technologies: [
    { name: "Kotlin", icon: SiKotlin, level: "Basic" },
    { name: "Java", icon: FaJava, level: "Basic" },
  ] },
  { category: "Deployment", technologies: [
    { name: "Vercel", icon: SiVercel, level: "Intermediate" },
  ] },
];

export const currentlyExploring: Technology[] = [
  { name: "C#", icon: TbBrandCSharp },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
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
