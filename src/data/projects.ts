import brancyHome from "../assets/brancy_ss/home_page.png";
import brancyCategories from "../assets/brancy_ss/product_categories_page.png";
import brancyProduct from "../assets/brancy_ss/product.png";
import brancyBrand from "../assets/brancy_ss/brand_page.png";
import brancyAccount from "../assets/brancy_ss/account_details.png";
import brancyRegister from "../assets/brancy_ss/customer_create_account_page.png";
import brancyLogin from "../assets/brancy_ss/customer_login_page.png";
import brancyCart from "../assets/brancy_ss/cart.png";
import brancyCheckout from "../assets/brancy_ss/checkout_page.png";
import brancyInvoice from "../assets/brancy_ss/invoice.png";
import brancyAdmin from "../assets/brancy_ss/django_administration.png";

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
  subtitle?: string;
  projectType?: string;
  role?: string;
  responsibilities?: string[];
  customerFeatures?: string[];
  adminFeatures?: string[];
  stack?: { label: string; items: string[] }[];
  highlights?: string[];
  challenges?: string[];
  gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "branded-cosmetics",
    title: "Branded Cosmetics Online Shopping System",
    category: "Web",
    date: "Jun 2024 – Oct 2024",
    subtitle: "Full-Stack E-Commerce Web Application",
    projectType: "Web Application / E-Commerce Platform",
    role: "Full-Stack Developer",
    description: "A full-stack e-commerce platform built with Django for BRANCY, enabling customers to discover cosmetics, manage their cart, complete purchases, and track orders.",
    overview: "A complete online shopping experience developed for BRANCY, a branded cosmetics business. The platform makes cosmetic products easier to discover through organized categories, detailed product information, customer accounts, and a clear purchase journey.",
    challenge: "Customers often struggle to find reliable cosmetic products when information is limited, comparisons are difficult, and shopping is fragmented across different channels.",
    solution: "I created one convenient platform where customers can explore products, understand product details, complete purchases, and review their orders, supported by an administration area for catalog, inventory, customer, and order management.",
    github: "https://github.com/khinmyatthu2193/brancy-branded-cosmetics-onlineshopping-system",
    technologies: ["Django", "Python", "JavaScript", "HTML", "CSS"],
    featured: true,
    media: { type: "image", src: brancyHome, alt: "BRANCY cosmetics storefront homepage" },
    responsibilities: [
      "Designed and implemented the web application structure",
      "Developed responsive customer-facing interfaces",
      "Built backend functionality with Django",
      "Integrated the database and managed product data",
      "Implemented authentication and the complete shopping workflow",
    ],
    customerFeatures: ["User registration and login", "Browse products by category", "View detailed product information", "Add and manage products in the cart", "Checkout and order management", "Order history and invoice access", "Brand information pages"],
    adminFeatures: ["Manage products and categories", "Maintain inventory information", "View customer information", "Manage customer orders", "Update product listings", "Manage system data through Django Admin"],
    stack: [
      { label: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
      { label: "Backend", items: ["Python", "Django"] },
      { label: "Database", items: ["Django ORM", "Relational database"] },
      { label: "Tools", items: ["Visual Studio Code", "Google Chrome"] },
    ],
    highlights: ["Built the application end to end, from interface design to backend logic", "Implemented a Django-based application architecture", "Created responsive shopping and account pages", "Developed the customer authentication workflow", "Integrated product, inventory, and order management"],
    challenges: ["Learning Django and relational database integration", "Connecting the frontend experience with backend workflows", "Managing catalog and inventory data consistently", "Designing a complete e-commerce journey from discovery to order history"],
    gallery: [
      { type: "image", src: brancyHome, alt: "BRANCY homepage" },
      { type: "image", src: brancyCategories, alt: "Cosmetics product categories" },
      { type: "image", src: brancyProduct, alt: "Cosmetic product details" },
      { type: "image", src: brancyBrand, alt: "Brand information page" },
      { type: "image", src: brancyRegister, alt: "Customer registration page" },
      { type: "image", src: brancyLogin, alt: "Customer login page" },
      { type: "image", src: brancyAccount, alt: "Customer account details" },
      { type: "image", src: brancyCart, alt: "Shopping cart" },
      { type: "image", src: brancyCheckout, alt: "Order checkout page" },
      { type: "image", src: brancyInvoice, alt: "Customer order invoice" },
      { type: "image", src: brancyAdmin, alt: "Django administration dashboard" },
    ],
  },
  {
    slug: "recyclelink",
    title: "RecycleLink – EcoCommerce Platform",
    category: "Web",
    date: "Dec 2024 – Mar 2025",
    description: "Developed a real-time recycling platform with location-based supplier notifications using Django Channels and WebSockets.",
    overview: "A coordination platform that connects recycling activity with suppliers through timely notifications and live status updates.",
    challenge: "Waste collection updates can quickly become outdated when communication is fragmented across different people and channels.",
    solution: "I used proximity matching, WebSockets, and Django Channels to notify nearby suppliers and keep collection updates synchronized in real time.",
    github: "",
    technologies: ["Django Channels", "WebSockets", "PostgreSQL"],
    featured: true,
    media: { type: "video", alt: "RecycleLink product walkthrough" },
  },
  {
    slug: "climbio",
    title: "Climbio – MSME Smart Business Toolkit",
    category: "Mobile",
    date: "Jun 2025 – Oct 2025",
    subtitle: "Mobile-First Business Management Application",
    projectType: "Mobile Application / MSME Business Toolkit",
    role: "Full-Stack Developer",
    description: "A mobile-first business toolkit for MSMEs with MiniCatalog, Smart Inbox, and referral-tracking modules.",
    overview: "Climbio helps small and medium businesses digitize everyday customer and product workflows through an approachable mobile experience.",
    challenge: "Many MSMEs manage products, customer messages, and referrals across disconnected manual tools.",
    solution: "I designed a scalable React Native and Firebase application that brings catalogs, customer conversations, and referral tracking into one mobile toolkit.",
    github: "",
    technologies: ["React Native", "Firebase", "JavaScript"],
    featured: true,
    media: { type: "image", alt: "Climbio MSME mobile toolkit preview" },
    responsibilities: [
      "Built a mobile-first business management experience for MSMEs",
      "Designed the MiniCatalog, Smart Inbox, and referral-tracking modules",
      "Connected application workflows to Firebase services",
      "Focused on scalable architecture and an approachable mobile user experience",
    ],
    customerFeatures: [
      "MiniCatalog for presenting products and services",
      "Smart Inbox for managing customer conversations",
      "Referral tracking for business growth",
      "Mobile-first workflows designed for small-business owners",
    ],
    stack: [
      { label: "Mobile", items: ["React Native", "JavaScript"] },
      { label: "Backend services", items: ["Firebase"] },
    ],
    highlights: [
      "Combined several everyday MSME workflows in one focused toolkit",
      "Designed the product around practical mobile use",
      "Created modular features that can grow with a business",
    ],
    challenges: [
      "Keeping a multi-feature business toolkit simple on small screens",
      "Designing modules that support different MSME workflows",
    ],
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
    github: "",
    technologies: ["AI", "Recommendation System", "Web"],
    featured: true,
    media: { type: "video", alt: "Career Ladder recommendation demo" },
  },
  {
    slug: "future-harvest",
    title: "Future Harvest – Smart Agriculture System",
    category: "Innovation",
    date: "Nov 2025",
    description: "Proposed a sustainable agriculture solution using SMNR technology, focused on food security and climate resilience.",
    overview: "A smart-agriculture concept exploring how accessible technology can support resilient food production.",
    challenge: "Farmers and food systems need practical ways to respond to climate pressure while protecting long-term productivity.",
    solution: "I shaped a sustainable production concept around SMNR technology, better information, and climate-resilient farming decisions.",
    github: "",
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
    github: "",
    technologies: ["React Native", "Gemini AI", "TypeScript"],
    featured: false,
    media: { type: "video", alt: "Strivo AI planning walkthrough" },
  },
];
