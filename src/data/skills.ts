import type { IconType } from "react-icons";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript, SiPython, SiHtml5, SiReact, SiTailwindcss, SiFlutter,
  SiDjango, SiFirebase, SiSupabase, SiPostgresql, SiPrisma,
  SiGooglegemini, SiClaude, SiGit, SiGithub, SiFigma, SiVercel,
  SiTypescript, SiKotlin, SiBootstrap, SiExpo, SiMysql, SiNodedotjs,
  SiExpress, SiSqlite, SiVite, SiJson, SiOpenai,
} from "react-icons/si";
import {
  Braces, Smartphone, Database, Sparkles, Wrench, Network,
  Route, Code2, MessageSquareText, ShieldCheck, ListChecks,
  Radio, PanelsTopLeft, Plug, type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  icon: IconType | LucideIcon;
  currentlyLearning?: boolean;
};

type SkillGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  project?: { name: string; href: string; detail: string };
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    icon: Braces,
    description: "Languages for web, mobile, and academic project work.",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    id: "frontend-mobile",
    title: "Frontend & Mobile",
    icon: Smartphone,
    description: "Interfaces across browsers and mobile devices.",
    project: { name: "Climbio", href: "/projects/climbio", detail: "From a React Native app to a React web platform." },
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Expo", icon: SiExpo },
      { name: "Flutter", icon: SiFlutter, currentlyLearning: true },
    ],
  },
  {
    id: "backend-database",
    title: "Backend & Database",
    icon: Database,
    description: "Application logic, data storage, and connected services.",
    project: { name: "BRANCY", href: "/projects/brancy", detail: "A collaborative Django and SQLite e-commerce project." },
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    id: "ai-development",
    title: "AI & AI-Assisted Development",
    icon: Sparkles,
    description: "AI integrations and tools that support my development process.",
    project: { name: "MayMay’s Latt Swal", href: "/projects/maymays-lett-swal", detail: "A Myanmar-first cooking assistant using MCP and an AI agent workflow." },
    skills: [
      { name: "Gemini AI", icon: SiGooglegemini },
      { name: "OpenRouter API", icon: Route },
      { name: "Claude Code", icon: SiClaude },
      { name: "AI-assisted development", icon: Code2 },
      { name: "Prompt Engineering", icon: MessageSquareText },
      { name: "MCP", icon: Plug },
      { name: "AI Agent Architecture", icon: Network },
    ],
  },
  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Tools for building, collaborating, designing, and deploying.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Cursor", icon: Code2 },
      { name: "Codex", icon: SiOpenai },
      { name: "Vite", icon: SiVite },
      { name: "JSON", icon: SiJson },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    icon: Network,
    description: "Foundations I continue to develop through practical work.",
    skills: [
      { name: "REST API", icon: Route },
      { name: "Authentication", icon: ShieldCheck },
      { name: "CRUD", icon: ListChecks },
      { name: "Real-time Communication", icon: Radio },
      { name: "Responsive UI", icon: PanelsTopLeft },
      { name: "Database Design", icon: Database },
      { name: "API Integration", icon: Plug },
    ],
  },
];

// CV-backed personal context; technology entries also retain the user's supplied list.
export const skillsProfile = {
  role: "Final-year Computer Science & Engineering student",
  direction: "Full-stack developer & product builder",
  institution: "Myanmar Institute of Information Technology (MIIT)",
  collaboration: ["Teamwork & Collaboration", "Problem Solving", "Adaptability", "Time Management", "Presentation & Public Speaking", "Continuous Learning"],
  languages: [{ name: "Burmese", level: "Native" }, { name: "English", level: "Upper Intermediate" }],
};
