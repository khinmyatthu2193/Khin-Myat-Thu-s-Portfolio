import oneProjectWinner from "../assets/achievement_ss/OneProjectOneWeek1.jpg";
import oneProjectPresentation from "../assets/achievement_ss/OneProjectOneWeek2.jpg";
import oneProjectWinnersBoard from "../assets/achievement_ss/OneProjectOneWeek3.jpg";
import oneProjectTeamPhoto from "../assets/achievement_ss/OneProjectOneWeek4.jpg";
import oneProjectAwardPhoto from "../assets/achievement_ss/OneProjectOneWeek5.jpg";
import oneProjectGroupPhoto from "../assets/achievement_ss/OneProjectOneWeek6_gp_photo.jpg";
import oneProjectWinnerCertificate from "../assets/achievement_ss/Winner.jpg";
import oneProjectCertificate from "../assets/achievement_ss/Khin myat thu_OPOW_Hackathon_ Certificate.png";

export type AchievementImage = {
  src: string;
  alt: string;
};

export type Achievement = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  type: "Hackathon" | "Certificate" | "Others";
  description: string;
  image?: string;
  imageAlt?: string;
  gallery?: AchievementImage[];
  credentialUrl?: string;
  featured: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "technortal-one-project-one-week-2026",
    title: "1st Place — One Project One Week Hackathon",
    issuer: "Technortal",
    date: "May 23–31, 2026",
    type: "Hackathon",
    description: "Won first place with Strivo, an AI-powered strategic planning system that helps MSMEs generate structured strategies and improve business decision-making.",
    image: oneProjectWinner,
    imageAlt: "Team FortuneTellers, winners of the Technortal One Project One Week Hackathon 2026",
    gallery: [
      { src: oneProjectGroupPhoto, alt: "Participants, organizers, and guests at the One Project One Week Hackathon 2026" },
      { src: oneProjectTeamPhoto, alt: "Team FortuneTellers celebrating with the winners award board" },
      { src: oneProjectAwardPhoto, alt: "Team FortuneTellers receiving the winners award at the event" },
      { src: oneProjectPresentation, alt: "Team FortuneTellers introduced during the hackathon presentation" },
      { src: oneProjectWinnersBoard, alt: "One Project One Week Hackathon 2026 winners award board" },
      { src: oneProjectWinnerCertificate, alt: "Certificate of achievement awarded to Team FortuneTellers as hackathon winners" },
      { src: oneProjectCertificate, alt: "Technortal certificate presented to Khin Myat Thu for the One Project One Week Hackathon 2026" },
    ],
    featured: true,
  },
  {
    slug: "ai-climate-resilient-agriculture-2026",
    title: "1st Place — AI for Climate-Resilient Agriculture Hackathon",
    issuer: "UNDP Myanmar, UN Technology Bank & SDGAIO LAB",
    date: "March 2026",
    type: "Hackathon",
    description: "Won first place in a hackathon focused on applying AI and innovation to climate-resilient agriculture.",
    imageAlt: "First-place award for the AI for Climate-Resilient Agriculture Hackathon",
    featured: true,
  },
  {
    slug: "hackatom-science-festival-myanmar-2025",
    title: "2nd Place — HackAtom Science Festival Myanmar",
    issuer: "HackAtom Science Festival Myanmar",
    date: "November 2025",
    type: "Hackathon",
    description: "Earned second place at HackAtom Science Festival Myanmar for Future Harvest, a smart-agriculture concept centered on food security and climate resilience.",
    imageAlt: "Second-place award at HackAtom Science Festival Myanmar",
    featured: true,
  },
];
