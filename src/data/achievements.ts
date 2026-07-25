export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  type: "Award" | "Certificate";
  description: string;
  image?: string;
  imageAlt?: string;
  credentialUrl?: string;
};

export const achievements: Achievement[] = [
  {
    title: "1st Place — Hackathon 2026",
    issuer: "Hackathon 2026",
    date: "2026",
    type: "Award",
    description: "Recognized with first place for turning an ambitious idea into a thoughtful, practical product.",
    imageAlt: "Khin Myat Thu celebrating a first-place hackathon win",
  },
];
