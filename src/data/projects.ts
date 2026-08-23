import brancyHome from "../assets/brancy_ss/home_page.png";
import brancyCategories from "../assets/brancy_ss/product_categories_page.png";
import brancyProduct from "../assets/brancy_ss/product.png";
import brancyCart from "../assets/brancy_ss/cart.png";
import brancyCheckout from "../assets/brancy_ss/checkout_page.png";
import brancyAdmin from "../assets/brancy_ss/django_administration.png";
import climbioHome from "../assets/climbio_ss/home.png";
import type { AssetSource } from "@/lib/asset-url";

export type ProjectMedia = { type: "image" | "video"; src?: AssetSource; poster?: AssetSource; alt: string };
export type Project = {
  slug: string; title: string; category: "Web" | "Mobile" | "AI" | "Innovation"; date: string;
  description: string; overview: string; challenge: string; solution: string; github: string;
  liveUrl?: string; technologies: string[]; featured: boolean; media: ProjectMedia; subtitle?: string;
  projectType?: string; role?: string; responsibilities?: string[]; customerFeatures?: string[];
  adminFeatures?: string[]; stack?: { label: string; items: string[] }[]; highlights?: string[];
  challenges?: string[]; gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "foundora", title: "Foundora", category: "Innovation", date: "In development", featured: true,
    description: "A privacy-first product idea that helps aspiring founders discover potential co-founders without immediately exposing their identity or sensitive startup ideas.",
    overview: "Foundora explores founder discovery, compatibility, privacy, chat, gradual information reveal, and startup collaboration.",
    challenge: "Finding a compatible co-founder requires trust, but sharing personal details and early startup ideas too soon can feel risky.",
    solution: "The current product direction focuses on privacy-first discovery and gradual information sharing. AI co-founder agents remain a future idea, not a completed feature.",
    github: "", technologies: ["Product thinking", "Privacy", "Founder discovery"],
    media: { type: "image", alt: "Foundora privacy-first co-founder discovery concept" },
  },
  {
    slug: "joyhub", title: "JoyHub", category: "Web", date: "Date to be confirmed", featured: true,
    subtitle: "Teach with Joy. Learn with Confidence. 🌱",
    description: "An interactive learning platform designed to make classroom quizzes more engaging through question cards, a spin wheel, instant feedback, and playful interactions.",
    overview: "JoyHub gives teachers a playful way to create and run multiple-choice classroom activities without requiring authentication.",
    challenge: "Classroom quizzes can feel repetitive and may not encourage every student to participate.",
    solution: "Question cards, student selection, a spin wheel, answer checking, celebration moments, explanations, and motivational messages make the activity more interactive.",
    github: "", technologies: ["JavaScript", "Local storage", "Interactive UI"],
    highlights: ["Teacher-created MCQ questions", "Question cards and spin wheel", "Interactive answer checking", "Celebration animation for correct answers", "Explanations and motivational quotes for wrong answers", "Local storage with no authentication required"],
    media: { type: "image", alt: "JoyHub interactive classroom quiz platform" },
  },
  {
    slug: "climbio", title: "Climbio", category: "Mobile", date: "Date to be confirmed", featured: true,
    description: "A mobile application built with React Native and Firebase. Version 2 gave me the opportunity to revisit the project and deepen my understanding of mobile development.",
    overview: "Climbio was developed in multiple versions, and I developed Version 2 while learning through iteration.",
    challenge: "Returning to an existing product meant understanding earlier decisions before deciding what to revisit.",
    solution: "Through Version 2, I rebuilt parts of the application and learned more about React Native and Firebase. Exact Version 2 changes will be added once confirmed.",
    github: "", technologies: ["React Native", "Firebase"],
    media: { type: "image", src: climbioHome, alt: "Climbio mobile application home screen" },
  },
  {
    slug: "brancy", title: "Brancy — Branded Cosmetics Online Shopping System", category: "Web", date: "Jun 2024 – Oct 2024", featured: true,
    description: "An online shopping system for branded cosmetics, created to provide a convenient digital experience for browsing and interacting with cosmetic products.",
    overview: "Brancy explores a complete cosmetics shopping experience through a Django-based web application.",
    challenge: "The project explored how product information and shopping interactions can be organized clearly in one digital experience.",
    solution: "The existing application includes verified catalog, account, cart, checkout, invoice, and administration screens.",
    github: "https://github.com/khinmyatthu2193/brancy-branded-cosmetics-onlineshopping-system",
    technologies: ["Django", "Python", "JavaScript", "HTML", "CSS"],
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
    slug: "recyclelink", title: "RecycleLink", category: "Web", date: "Date to be confirmed", featured: false,
    description: "A recycling-focused application where I explored web development with Django and real-time functionality using WebSockets.",
    overview: "RecycleLink was a learning opportunity focused on Django and real-time web communication.",
    challenge: "The project explored how a recycling-focused application could benefit from timely updates.",
    solution: "I explored WebSocket-based real-time functionality within a Django application. Additional product details are still to be confirmed.",
    github: "", technologies: ["Django", "WebSockets"], media: { type: "image", alt: "RecycleLink recycling-focused application" },
  },
  {
    slug: "maymays-lett-swal", title: "MayMay's Lett Swal", category: "Web", date: "Date to be confirmed", featured: false,
    description: "A recipe project inspired by home cooking and the idea of keeping meaningful recipes simple, accessible, and easy to revisit.",
    overview: "A personal project shaped by food, memory, and the comfort of recipes worth keeping close.",
    challenge: "Meaningful home recipes can be easy to lose or difficult to revisit in a simple way.",
    solution: "The project keeps the idea of returning to familiar recipes warm and approachable. Technical details will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", alt: "MayMay's Lett Swal recipe project" },
  },
  {
    slug: "university-laptop-rental", title: "University Laptop Rental Management System", category: "Web", date: "Date to be confirmed", featured: false,
    description: "A management system designed around the process of renting and managing university laptops.",
    overview: "A university-focused management system created around a practical campus process.",
    challenge: "The project considers how a laptop rental process can be represented in a management system.",
    solution: "Implementation details and verified features will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", alt: "University Laptop Rental Management System" },
  },
  {
    slug: "the-chosen-one", title: "The Chosen One", category: "Innovation", date: "VibeCode Tour", featured: false,
    description: "A project created during the VibeCode Tour while exploring how quickly an idea can move toward a working experience.",
    overview: "The Chosen One is part of my learning-by-building journey through the VibeCode Tour.",
    challenge: "The project context, audience, and problem statement still need confirmation.",
    solution: "Verified implementation details and technologies will be added after reviewing the project repository.",
    github: "", technologies: [], media: { type: "image", alt: "The Chosen One VibeCode Tour project" },
  },
];
