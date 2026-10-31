import oneProjectWinner from "../assets/achievement_ss/OneProjectOneWeek1.jpg";
import oneProjectPresentation from "../assets/achievement_ss/OneProjectOneWeek2.jpg";
import oneProjectTeamPhoto from "../assets/achievement_ss/OneProjectOneWeek4.jpg";
import oneProjectAwardPhoto from "../assets/achievement_ss/OneProjectOneWeek5.jpg";
import oneProjectCertificate from "../assets/achievement_ss/Khin myat thu_OPOW_Hackathon_ Certificate.png";
import undpAwardMoment from "../assets/achievement_ss/UNDP1.jpg";
import undpCertificates from "../assets/achievement_ss/UNDP2.jpg";
import undpTeamSelfie from "../assets/achievement_ss/UNDP3.jpg";
import undpTeamPhoto from "../assets/achievement_ss/UNDP4.jpg";
import undpWinnerCertificate from "../assets/achievement_ss/UNDP5.jpg";
import type { AssetSource } from "@/lib/asset-url";

export type AchievementImage = { src: AssetSource; alt: string };
export type Achievement = { slug: string; title: string; issuer: string; date: string; type: "Hackathon" | "Certificate" | "Others"; description: string; image?: AssetSource; imageAlt?: string; gallery?: AchievementImage[]; credentialUrl?: string; featured: boolean; award?: string; team?: string; project?: string; programme?: string; context?: string; ongoingDevelopment?: string; tags?: string[] };

export const achievements: Achievement[] = [
  {
    slug: "ai-climate-resilient-agriculture-2026",
    title: "Winner — AI for Climate-Resilient Agriculture Hackathon 2026",
    issuer: "UNDP Myanmar · Team ICONIC",
    date: "March 2026", type: "Hackathon", featured: true,
    award: "1st Place", team: "Team ICONIC", project: "AgriSmart", programme: "Frontier Tech Leaders Programme",
    description: "Secured 1st Place at the UNDP Myanmar AI for Climate-Resilient Agriculture Hackathon 2026 as a member of Team ICONIC, with our project AgriSmart.",
    context: "The hackathon challenged young innovators to explore AI-powered solutions for climate-resilient agriculture and real-world agricultural challenges in Myanmar.",
    ongoingDevelopment: "Following our first-place achievement, Team ICONIC continues to develop AgriSmart in collaboration with UNDP, taking our winning idea beyond the competition and working toward further development of the solution.",
    tags: ["AI for Social Impact", "Climate-Resilient Agriculture", "Hackathon", "Team Collaboration", "UNDP Collaboration"],
    image: undpAwardMoment,
    imageAlt: "Team ICONIC receiving the winner award at the AI for Climate-Resilient Agriculture Hackathon 2026",
    gallery: [
      { src: undpTeamSelfie, alt: "Team ICONIC celebrating with the winner certificate" },
      { src: undpTeamPhoto, alt: "Team ICONIC members holding their certificates" },
      { src: undpWinnerCertificate, alt: "Team ICONIC's certificate of excellence for winning the hackathon" },
      { src: undpCertificates, alt: "Team ICONIC participation certificates from the hackathon" },
    ],
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
