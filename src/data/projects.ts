export type ProjectMedia = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  alt: string;
};

export type Project = {
  title: string;
  date: string;
  description: string;
  github: string;
  technologies: string[];
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    title: "Branded Cosmetics Online Shopping System",
    date: "Jun 2024 – Oct 2024",
    description: "Built a full-stack e-commerce platform with authentication, product management, and order flow for a branded cosmetics business.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Django", "MySQL", "JavaScript"],
    media: { type: "image", alt: "Storefront and product catalog preview" },
  },
  {
    title: "RecycleLink – EcoCommerce Platform",
    date: "Dec 2024 – Mar 2025",
    description: "Developed a real-time recycling and supplier notification system using Django Channels and WebSockets to improve waste collection coordination.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Django Channels", "WebSockets", "PostgreSQL"],
    media: { type: "video", alt: "RecycleLink product walkthrough" },
  },
  {
    title: "Climbio – MSME Smart Business Toolkit",
    date: "Jun 2025 – Oct 2025",
    description: "Created a mobile-first business management app for MSMEs with MiniCatalog, Smart Inbox, and referral tracking modules.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["React Native", "Firebase", "TypeScript"],
    media: { type: "image", alt: "Climbio mobile app screens" },
  },
  {
    title: "Career Ladder – AI Career Mapping System",
    date: "Oct 2025",
    description: "Designed an AI-based career recommendation platform that generates personalized learning paths and job insights for users.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["AI", "Recommendation System", "Web"],
    media: { type: "video", alt: "Career Ladder recommendation demo" },
  },
  {
    title: "Future Harvest – Smart Agriculture System",
    date: "Nov 2025",
    description: "Proposed a climate-resilient agriculture solution focused on food security and sustainable production using smart technology concepts.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Innovation", "Sustainability", "AgriTech"],
    media: { type: "image", alt: "Future Harvest dashboard preview" },
  },
  {
    title: "Strivo – AI Strategic Planning for MSMEs",
    date: "May 2026",
    description: "Built an AI-powered mobile application that helps small businesses generate structured strategies and recommendations using Gemini AI.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["React Native", "Gemini AI", "TypeScript"],
    media: { type: "video", alt: "Strivo AI planning walkthrough" },
  },
];
