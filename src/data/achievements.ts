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
    slug: "hackathon-2026-first-place",
    title: "1st Place — Hackathon 2026",
    issuer: "Hackathon 2026",
    date: "2026",
    type: "Hackathon",
    description: "Recognized with first place for turning an ambitious idea into a thoughtful, practical product.",
    imageAlt: "Khin Myat Thu celebrating a first-place hackathon win",
    featured: true,
  },
];
