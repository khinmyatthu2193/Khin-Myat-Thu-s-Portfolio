export type ProjectMedia = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "Innovation";
  date: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  github: string;
  liveUrl?: string;
  technologies: string[];
  featured: boolean;
  media: ProjectMedia;
};

export const projects: Project[] = [
  {
    slug: "branded-cosmetics",
    title: "Branded Cosmetics Online Shopping System",
    category: "Web",
    date: "Jun 2024 – Oct 2024",
    description: "Built a full-stack e-commerce platform with authentication, product management, and order flow for a branded cosmetics business.",
    overview: "An online storefront designed to make browsing, ordering, and managing branded cosmetics straightforward for customers and store administrators.",
    challenge: "The product needed to bring customer accounts, an evolving product catalog, and order management into one dependable workflow.",
    solution: "I designed and built a full-stack commerce experience with authenticated user journeys and practical product and order-management tools.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Django", "MySQL", "JavaScript"],
    featured: true,
    media: { type: "image", alt: "Storefront and product catalog preview" },
  },
  {
    slug: "recyclelink",
    title: "RecycleLink – EcoCommerce Platform",
    category: "Web",
    date: "Dec 2024 – Mar 2025",
    description: "Developed a real-time recycling and supplier notification system using Django Channels and WebSockets to improve waste collection coordination.",
    overview: "A coordination platform that connects recycling activity with suppliers through timely notifications and live status updates.",
    challenge: "Waste collection updates can quickly become outdated when communication is fragmented across different people and channels.",
    solution: "I used WebSockets and Django Channels to keep important supplier and collection updates synchronized in real time.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Django Channels", "WebSockets", "PostgreSQL"],
    featured: true,
    media: { type: "video", alt: "RecycleLink product walkthrough" },
  },
  {
    slug: "climbio",
    title: "Climbio – MSME Smart Business Toolkit",
    category: "Mobile",
    date: "Jun 2025 – Oct 2025",
    description: "Created a mobile-first business management app for MSMEs with MiniCatalog, Smart Inbox, and referral tracking modules.",
    overview: "A mobile-first toolkit that puts common small-business tasks into a single, approachable application.",
    challenge: "Small businesses often manage product information, customer messages, and referrals across disconnected tools.",
    solution: "I brought these workflows together through focused MiniCatalog, Smart Inbox, and referral-tracking modules.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["React Native", "Firebase", "TypeScript"],
    featured: true,
    media: { type: "image", alt: "Climbio mobile app screens" },
  },
  {
    slug: "career-ladder",
    title: "Career Ladder – AI Career Mapping System",
    category: "AI",
    date: "Oct 2025",
    description: "Designed an AI-based career recommendation platform that generates personalized learning paths and job insights for users.",
    overview: "A career exploration product that turns a user's goals and context into a clearer learning and career direction.",
    challenge: "Generic career advice rarely gives learners a practical sequence of skills and next steps tailored to their situation.",
    solution: "I designed a recommendation flow that organizes personalized learning paths and relevant job insights into an understandable roadmap.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["AI", "Recommendation System", "Web"],
    featured: true,
    media: { type: "video", alt: "Career Ladder recommendation demo" },
  },
  {
    slug: "future-harvest",
    title: "Future Harvest – Smart Agriculture System",
    category: "Innovation",
    date: "Nov 2025",
    description: "Proposed a climate-resilient agriculture solution focused on food security and sustainable production using smart technology concepts.",
    overview: "A smart-agriculture concept exploring how accessible technology can support resilient food production.",
    challenge: "Farmers and food systems need practical ways to respond to climate pressure while protecting long-term productivity.",
    solution: "I shaped a connected product concept around better information, sustainable decisions, and climate-resilient production.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["Innovation", "Sustainability", "AgriTech"],
    featured: false,
    media: { type: "image", alt: "Future Harvest dashboard preview" },
  },
  {
    slug: "strivo",
    title: "Strivo – AI Strategic Planning for MSMEs",
    category: "AI",
    date: "May 2026",
    description: "Built an AI-powered mobile application that helps small businesses generate structured strategies and recommendations using Gemini AI.",
    overview: "An AI-assisted planning application that helps small-business owners turn ideas and business context into structured strategies.",
    challenge: "Strategic planning is valuable for small businesses, but formal frameworks can feel complex and time-consuming.",
    solution: "I built a guided mobile experience that uses Gemini AI to generate organized, actionable recommendations from approachable inputs.",
    github: "https://github.com/khinmyatthu2193",
    technologies: ["React Native", "Gemini AI", "TypeScript"],
    featured: false,
    media: { type: "video", alt: "Strivo AI planning walkthrough" },
  },
];
