import brancyHome from "../assets/brancy_ss/home_page.png";
import brancyCategories from "../assets/brancy_ss/product_categories_page.png";
import brancyProduct from "../assets/brancy_ss/product.png";
import brancyCart from "../assets/brancy_ss/cart.png";
import brancyCheckout from "../assets/brancy_ss/checkout_page.png";
import brancyAdmin from "../assets/brancy_ss/django_administration.png";
import climbioLanding from "../assets/climbio_ss/landing_page.png";
import climbioDashboard from "../assets/climbio_ss/dashboard.png";
import climbioProducts from "../assets/climbio_ss/Product_list.png";
import climbioInvoices from "../assets/climbio_ss/invoice1.png";
import climbioPublicStore from "../assets/climbio_ss/Public_Store.png";
import climbioChat from "../assets/climbio_ss/AI_chatbot.png";
import type { AssetSource } from "@/lib/asset-url";

export type ProjectMedia = { type: "image" | "video"; src?: AssetSource; poster?: AssetSource; alt: string; fit?: "cover" | "contain" };
export type Project = {
  slug: string; title: string; category: "Web" | "Mobile" | "AI" | "Innovation"; date?: string;
  status: "Completed" | "In Development" | "Academic Project" | "Prototype" | "Ongoing";
  description: string; overview: string; challenge: string; solution: string; github: string;
  liveUrl?: string; technologies: string[]; featured: boolean; media: ProjectMedia; subtitle?: string;
  projectType?: string; role?: string; responsibilities?: string[]; customerFeatures?: string[];
  adminFeatures?: string[]; stack?: { label: string; items: string[] }[]; highlights?: string[];
  challenges?: string[]; gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "foundora", title: "Foundora", category: "Innovation", status: "In Development", featured: false,
    description: "A privacy-first product idea that helps aspiring founders discover potential co-founders without immediately exposing their identity or sensitive startup ideas.",
    overview: "Foundora explores founder discovery, compatibility, privacy, chat, gradual information reveal, and startup collaboration.",
    challenge: "Finding a compatible co-founder requires trust, but sharing personal details and early startup ideas too soon can feel risky.",
    solution: "The current product direction focuses on privacy-first discovery and gradual information sharing. AI co-founder agents remain a future idea, not a completed feature.",
    github: "", technologies: ["Product thinking", "Privacy", "Founder discovery"],
    media: { type: "image", alt: "Foundora privacy-first co-founder discovery concept" },
  },
  {
    slug: "joyhub", title: "JoyHub", category: "Web", status: "Completed", featured: false,
    subtitle: "Teach with Joy. Learn with Confidence. 🌱",
    description: "An offline-friendly classroom engagement platform where teachers can create quizzes, configure students, randomly select participants, reveal question cards, provide animated feedback, and restore saved classroom progress.",
    overview: "JoyHub gives teachers a playful way to create and run multiple-choice classroom activities without requiring authentication.",
    challenge: "Classroom quizzes can feel repetitive and may not encourage every student to participate.",
    solution: "Question cards, student selection, a spin wheel, answer checking, celebration moments, explanations, and motivational messages make the activity more interactive.",
    github: "https://github.com/khinmyatthu2193/JoyHub", liveUrl: "https://joy-hub-xi.vercel.app", technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Web Audio API"],
    highlights: ["Teacher-created MCQ questions", "Question cards and spin wheel", "Interactive answer checking", "Celebration animation for correct answers", "Explanations and motivational quotes for wrong answers", "Local storage with no authentication required"],
    media: { type: "image", alt: "JoyHub interactive classroom quiz platform" },
  },
  {
    slug: "climbio", title: "Climbio 2.0", category: "Web", status: "In Development", featured: true,
    description: "A smart business management platform for Myanmar SMEs, featuring inventory and product management, invoice workflows, sales dashboards, public storefronts, shop approval controls, and an AI advisor that analyses real business data.",
    overview: "Climbio was developed in multiple versions, and I developed Version 2 while learning through iteration.",
    challenge: "Returning to an existing product meant understanding earlier decisions before deciding what to revisit.",
    solution: "Version 2 brings the core business workflows into a full-stack web application with a secure API, public storefronts, reporting, and data-informed AI guidance.",
    projectType: "Full-stack web application",
    role: "Full-stack developer for Version 2",
    github: "https://github.com/khinmyatthu2193/Climbio-2.0", liveUrl: "https://climbio-2-0.vercel.app",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "Recharts", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase Storage"],
    media: { type: "image", src: climbioLanding, alt: "Climbio 2.0 business management platform landing page", fit: "contain" },
    gallery: [
      { type: "image", src: climbioDashboard, alt: "Climbio 2.0 business overview dashboard", fit: "contain" },
      { type: "image", src: climbioProducts, alt: "Climbio 2.0 product and inventory management", fit: "contain" },
      { type: "image", src: climbioInvoices, alt: "Climbio 2.0 invoice management workspace", fit: "contain" },
      { type: "image", src: climbioPublicStore, alt: "Climbio 2.0 public store management and sharing", fit: "contain" },
      { type: "image", src: climbioChat, alt: "Climbio 2.0 AI chat providing business guidance in Myanmar language", fit: "contain" },
    ],
  },
  {
    slug: "brancy", title: "Brancy — Branded Cosmetics Online Shopping System", category: "Web", date: "Jun 2024 – Oct 2024", status: "Completed", featured: false,
    description: "A full-stack cosmetics e-commerce platform featuring user authentication, product and category browsing, cart and wishlist management, checkout, order tracking, skin-type product recommendations, and inventory administration.",
    overview: "Brancy explores a complete cosmetics shopping experience through a Django-based web application.",
    challenge: "The project explored how product information and shopping interactions can be organized clearly in one digital experience.",
    solution: "The existing application includes verified catalog, account, cart, checkout, invoice, and administration screens.",
    github: "https://github.com/khinmyatthu2193/brancy-branded-cosmetics-onlineshopping-system", liveUrl: "https://brancy-branded-cosmetics-onlineshop.vercel.app",
    technologies: ["Python", "Django", "JavaScript", "HTML & CSS", "SQLite"],
    media: { type: "image", src: brancyHome, alt: "Brancy cosmetics storefront homepage" },
    gallery: [
      { type: "image", src: brancyHome, alt: "Brancy homepage" },
      { type: "image", src: brancyCategories, alt: "Brancy product categories" },
      { type: "image", src: brancyProduct, alt: "Brancy product details" },
      { type: "image", src: brancyCart, alt: "Brancy shopping cart" },
      { type: "image", src: brancyCheckout, alt: "Brancy checkout" },
      { type: "image", src: brancyAdmin, alt: "Brancy Django administration" },
    ],
  },
  {
    slug: "recyclelink", title: "RecycleLink", category: "Web", status: "Prototype", featured: false,
    description: "A recycling-focused application where I explored web development with Django and real-time functionality using WebSockets.",
    overview: "RecycleLink was a learning opportunity focused on Django and real-time web communication.",
    challenge: "The project explored how a recycling-focused application could benefit from timely updates.",
    solution: "I explored WebSocket-based real-time functionality within a Django application. Additional product details are still to be confirmed.",
    github: "", technologies: ["Django", "WebSockets"], media: { type: "image", alt: "RecycleLink recycling-focused application" },
  },
  {
    slug: "maymays-lett-swal", title: "MayMay's Lett Swal", category: "Web", status: "Prototype", featured: false,
    description: "A recipe project inspired by home cooking and the idea of keeping meaningful recipes simple, accessible, and easy to revisit.",
    overview: "A personal project shaped by food, memory, and the comfort of recipes worth keeping close.",
    challenge: "Meaningful home recipes can be easy to lose or difficult to revisit in a simple way.",
    solution: "The project keeps the idea of returning to familiar recipes warm and approachable. Technical details will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", alt: "MayMay's Lett Swal recipe project" },
  },
  {
    slug: "university-laptop-rental", title: "University Laptop Rental Management System", category: "Web", status: "Academic Project", featured: false,
    description: "A management system designed around the process of renting and managing university laptops.",
    overview: "A university-focused management system created around a practical campus process.",
    challenge: "The project considers how a laptop rental process can be represented in a management system.",
    solution: "Implementation details and verified features will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", alt: "University Laptop Rental Management System" },
  },
  {
    slug: "the-chosen-one", title: "The Chosen One", category: "Innovation", status: "Prototype", featured: false,
    description: "A project created during the VibeCode Tour while exploring how quickly an idea can move toward a working experience.",
    overview: "The Chosen One is part of my learning-by-building journey through the VibeCode Tour.",
    challenge: "The project context, audience, and problem statement still need confirmation.",
    solution: "Verified implementation details and technologies will be added after reviewing the project repository.",
    github: "", technologies: [], media: { type: "image", alt: "The Chosen One VibeCode Tour project" },
  },
];
