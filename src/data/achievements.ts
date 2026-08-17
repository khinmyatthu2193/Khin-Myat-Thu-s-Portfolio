export type Achievement = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  type: "Hackathon" | "Certificate" | "Others";
  description: string;
  image?: string;
  imageAlt?: string;
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
    imageAlt: "First-place award for the Technortal One Project One Week Hackathon",
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
