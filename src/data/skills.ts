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

export type SkillEvidence = { project: string; href: string };

// Public implementation examples reviewed on 2026-11-09. See docs/SKILLS_EVIDENCE.md.
const repositoryEvidence = {
  "snaporaUI": {
    "project": "Snapora",
    "href": "https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/src/app/(public)/page.tsx"
  },
  "bookingAPI": {
    "project": "Snapora",
    "href": "https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/src/app/api/booking/submit/route.ts"
  },
  "supabase": {
    "project": "Snapora",
    "href": "https://github.com/khinmyatthu2193/photo-studio-booking-system/blob/fc0810596efd1c1b3503cdd293313e890a60966a/supabase/migrations/20260927050000_initial_snapora_schema.sql"
  },
  "rental": {
    "project": "University Laptop Rental",
    "href": "https://github.com/khinmyatthu2193/university-laptop-rental-management-system/blob/900acb57f4aaabe413ae51ed9ca1bb2cd73b7c05/rental_system/services/inventory.py"
  },
  "recycle": {
    "project": "RecycleLink",
    "href": "https://github.com/khinmyatthu2193/RecycleLink-EcoCommerce-Platform/blob/1da1cc5bc0ade1744ca9198b48834b82ddbc1c31/link/consumers.py"
  },
  "mobile": {
    "project": "Climbio Mobile",
    "href": "https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit/blob/bf781c146c0a7ff7090b8575051e05399769ccb6/app/(tabs)/minicatalog/add-product.tsx"
  },
  "firebase": {
    "project": "Climbio Mobile",
    "href": "https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit/blob/bf781c146c0a7ff7090b8575051e05399769ccb6/firebase/orders.ts"
  },
  "prisma": {
    "project": "Climbio 2.0",
    "href": "https://github.com/khinmyatthu2193/Climbio-2.0/blob/0896e8cb22f787ef66314cdfafb8bfbee58f10e2/backend/prisma/schema.prisma"
  },
  "recipeUI": {
    "project": "MayMay’s Latt Swal",
    "href": "https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App/blob/299360e71cc3c2a8d65a4b1a4b9a5f2a7a19a226/src/App.jsx"
  },
  "aiWorkflow": {
    "project": "MayMay’s Latt Swal",
    "href": "https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App/blob/299360e71cc3c2a8d65a4b1a4b9a5f2a7a19a226/.claude/agents/meal-planner.md"
  },
  "php": {
    "project": "PHP Learning Journey",
    "href": "https://github.com/khinmyatthu2193/php-learning-journey/blob/b3334cbee45f084b9f6d1278dd688146cd0428f0/README.md"
  }
} satisfies Record<string, SkillEvidence>;

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  evidence: SkillEvidence[];
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Development",
    description: "Building responsive React and Next.js interfaces for booking, business tools, and public-facing pages.",
    icon: Code2,
    evidence: [repositoryEvidence.snaporaUI, repositoryEvidence.recipeUI],
  },
  {
    title: "Backend Development",
    description: "Developing Django inventory and rental workflows, with real-time supplier notifications through Django Channels.",
    icon: Server,
    evidence: [repositoryEvidence.rental, repositoryEvidence.recycle],
  },
  {
    title: "Mobile Application Development",
    description: "Creating React Native and Expo screens for product catalogs, customer management, and reminders in Climbio.",
    icon: Smartphone,
    evidence: [repositoryEvidence.mobile],
  },
  {
    title: "Database Integration",
    description: "Working with Firestore documents, Supabase-backed application data, and relational models with Prisma.",
    icon: Database,
    evidence: [repositoryEvidence.firebase, repositoryEvidence.prisma],
  },
  {
    title: "API Development & Integration",
    description: "Validating booking requests and connecting application interfaces to server-side APIs and database procedures.",
    icon: Plug,
    evidence: [repositoryEvidence.bookingAPI],
  },
  {
    title: "AI-Assisted Development",
    description: "Using AI coding assistants and structured project instructions to support implementation and iteration.",
    icon: Sparkles,
    evidence: [repositoryEvidence.aiWorkflow],
  },
];

export type ProficiencyLevel = "Advanced" | "Intermediate" | "Basic";

// Illustrative self-assessment values, not measured proficiency scores.
export const proficiencyLevels: Record<ProficiencyLevel, { value: number; description: string }> = {
  Advanced: { value: 85, description: "Can independently implement, explain, and debug substantial features using the technology." },
  Intermediate: { value: 60, description: "Can use the technology to build practical application features and understand its main concepts." },
  Basic: { value: 35, description: "Understands fundamental concepts and can implement simpler functionality with guidance when needed." },
};

export type TechnologyIdentity = { name: string; evidence?: SkillEvidence } & (
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
  { name: "JavaScript", icon: SiJavascript, level: "Intermediate", value: 60, category: "Frontend", evidence: repositoryEvidence.recipeUI },
  { name: "TypeScript", icon: SiTypescript, level: "Basic", value: 35, category: "Frontend", evidence: repositoryEvidence.snaporaUI },
  { name: "React.js", icon: SiReact, level: "Intermediate", value: 60, category: "Frontend", evidence: repositoryEvidence.recipeUI },
  { name: "Next.js", icon: SiNextdotjs, level: "Basic", value: 35, category: "Frontend", evidence: repositoryEvidence.snaporaUI },
  { name: "Python", icon: SiPython, level: "Intermediate", value: 60, category: "Backend", evidence: repositoryEvidence.rental },
  { name: "Django", icon: SiDjango, level: "Intermediate", value: 60, category: "Backend", evidence: repositoryEvidence.rental },
  { name: "React Native", icon: SiReact, level: "Intermediate", value: 60, category: "Mobile", evidence: repositoryEvidence.mobile },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate", value: 60, category: "Frontend", evidence: repositoryEvidence.snaporaUI },
  { name: "Firebase", icon: SiFirebase, level: null, value: null, category: "Database & Tools", evidence: repositoryEvidence.firebase },
  { name: "Supabase", icon: SiSupabase, level: null, value: null, category: "Database & Tools", evidence: repositoryEvidence.bookingAPI },
  { name: "HTML5", icon: SiHtml5, level: "Intermediate", value: 60, category: "Frontend", evidence: repositoryEvidence.snaporaUI },
  { name: "CSS3", icon: FaCss3Alt, level: "Intermediate", value: 60, category: "Frontend", evidence: repositoryEvidence.snaporaUI },
  { name: "Git", icon: SiGit, level: "Intermediate", value: 60, category: "Database & Tools" },
  { name: "GitHub", icon: SiGithub, level: "Intermediate", value: 60, category: "Database & Tools" },
];

export const additionalTechnologyGroups: TechnologyGroup[] = [
  { category: "Frontend", technologies: [
    { name: "Bootstrap", icon: SiBootstrap, level: "Basic" },
  ] },
  { category: "Mobile", technologies: [
    { name: "Expo", icon: SiExpo, level: "Intermediate", evidence: repositoryEvidence.mobile },
  ] },
  { category: "Database & ORM", technologies: [
    { name: "PostgreSQL", icon: SiPostgresql, level: "Basic", evidence: repositoryEvidence.prisma },
    { name: "MySQL", icon: SiMysql, level: "Basic" },
    { name: "Prisma", icon: SiPrisma, level: "Basic", evidence: repositoryEvidence.prisma },
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
  { name: "PHP", icon: SiPhp, evidence: repositoryEvidence.php },
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
