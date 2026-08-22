import oneProjectWinner from "../assets/achievement_ss/OneProjectOneWeek1.jpg";
import oneProjectPresentation from "../assets/achievement_ss/OneProjectOneWeek2.jpg";
import oneProjectTeamPhoto from "../assets/achievement_ss/OneProjectOneWeek4.jpg";
import oneProjectAwardPhoto from "../assets/achievement_ss/OneProjectOneWeek5.jpg";
import oneProjectCertificate from "../assets/achievement_ss/Khin myat thu_OPOW_Hackathon_ Certificate.png";
import type { AssetSource } from "@/lib/asset-url";

export type AchievementImage = { src: AssetSource; alt: string };
export type Achievement = { slug: string; title: string; issuer: string; date: string; type: "Hackathon" | "Certificate" | "Others"; description: string; image?: AssetSource; imageAlt?: string; gallery?: AchievementImage[]; credentialUrl?: string; featured: boolean };

export const achievements: Achievement[] = [
  {
    slug: "ai-climate-resilient-agriculture-2026",
    title: "Winner — AI for Climate-Resilient Agriculture Hackathon 2026",
    issuer: "UNDP Myanmar · Team ICONIC",
    date: "March 2026", type: "Hackathon", featured: true,
    description: "A team achievement with ICONIC at the UNDP Myanmar AI for Climate-Resilient Agriculture Hackathon. My specific contribution will be added once confirmed.",
    imageAlt: "Team ICONIC winner at the AI for Climate-Resilient Agriculture Hackathon 2026",
  },
  {
    slug: "technortal-one-project-one-week-2026",
    title: "Winner — One Project One Week Hackathon 2026 with Team Strivo",
    issuer: "Technortal", date: "May 25–31, 2026", type: "Hackathon", featured: true,
    description: "A team achievement at Technortal's One Project One Week Hackathon with Team Strivo. My specific contribution is intentionally left neutral until confirmed.",
    image: oneProjectWinner,
    imageAlt: "Winning team at the Technortal One Project One Week Hackathon 2026",
    gallery: [
      { src: oneProjectTeamPhoto, alt: "The team celebrating at One Project One Week Hackathon 2026" },
      { src: oneProjectAwardPhoto, alt: "The team receiving the hackathon award" },
      { src: oneProjectPresentation, alt: "The team during the hackathon presentation" },
      { src: oneProjectCertificate, alt: "Khin Myat Thu's One Project One Week Hackathon certificate" },
    ],
  },
  {
    slug: "cursor-myanmar-ai-hackathon-2026",
    title: "Selected Participant — Cursor Myanmar AI Hackathon 2026",
    issuer: "Cursor Myanmar · Team Victorya", date: "August 29, 2026", type: "Others", featured: true,
    description: "Selected as one of 200 participants from 1,331 applications for the Cursor Myanmar AI Hackathon 2026.",
    imageAlt: "Selected participant for Cursor Myanmar AI Hackathon 2026",
  },
];
