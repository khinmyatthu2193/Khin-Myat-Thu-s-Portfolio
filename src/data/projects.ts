import laternShowcase from "../assets/Latern.png";
import climbioShowcase from "../assets/Climbio.png";
import foundoraShowcase from "../assets/Foundora.png";
import joyhubShowcase from "../assets/JoyHub.png";
import recyclelinkShowcase from "../assets/RecycleLink.png";
import maymayShowcase from "../assets/MayMay's Latt Swel.png";
import laptopRentalShowcase from "../assets/UniversityLaptopRentalManagementSystem.png";
import chosenOneShowcase from "../assets/TheChosenOne.png";
import brancyShowcase from "../assets/Brancy.png";
import brancyHome from "../assets/brancy_ss/home_page.png";
import brancyCategories from "../assets/brancy_ss/product_categories_page.png";
import brancyProduct from "../assets/brancy_ss/product.png";
import brancyCart from "../assets/brancy_ss/cart.png";
import brancyCheckout from "../assets/brancy_ss/checkout_page.png";
import brancyAdmin from "../assets/brancy_ss/django_administration.png";
import brancyAccount from "../assets/brancy_ss/account_details.png";
import brancyBrands from "../assets/brancy_ss/brand_page.png";
import brancyCreateAccount from "../assets/brancy_ss/customer_create_account_page.png";
import brancyLogin from "../assets/brancy_ss/customer_login_page.png";
import brancyLogout from "../assets/brancy_ss/customer_logout_page.png";
import brancyInvoice from "../assets/brancy_ss/invoice.png";
import climbioDashboard from "../assets/climbio_ss/dashboard.png";
import climbioOverview from "../assets/climbio_ss/overview.png";
import climbioProducts from "../assets/climbio_ss/Product_list.png";
import climbioInventory from "../assets/climbio_ss/Inventory.png";
import climbioInvoices from "../assets/climbio_ss/invoice1.png";
import climbioPublicStore from "../assets/climbio_ss/Public_Store.png";
import climbioCustomerStore from "../assets/climbio_ss/storeview_fromcustomer.png";
import climbioChat from "../assets/climbio_ss/AI_chatbot.png";
import climbioAdvisor from "../assets/climbio_ss/AI_advisor1.png";
import climbioPromptGallery from "../assets/climbio_ss/prompt_gallary.png";
import climbioSettings from "../assets/climbio_ss/Setting.png";
import climbioAdminDashboard from "../assets/climbio_ss/admin_dashboard.png";
import type { AssetSource } from "@/lib/asset-url";

export type ProjectMedia = { type: "image" | "video"; src?: AssetSource; poster?: AssetSource; alt: string; fit?: "cover" | "contain" };
export type Project = {
  slug: string; title: string; category: "Web" | "Mobile" | "AI" | "Innovation"; date?: string; sortDate?: string;
  status?: "Completed" | "In Development" | "Academic Project" | "Prototype" | "Ongoing" | "Needs Update";
  description: string; overview: string; challenge: string; solution: string; github: string;
  liveUrl?: string; technologies: string[]; featured: boolean; media: ProjectMedia; subtitle?: string;
  projectType?: string; role?: string; responsibilities?: string[]; customerFeatures?: string[];
  adminFeatures?: string[]; stack?: { label: string; items: string[] }[]; highlights?: string[];
  challenges?: string[]; gallery?: ProjectMedia[];
};

export const projects: Project[] = [
  {
    slug: "latern", sortDate: "2026-03", date: "Mar 2026", title: "Latern", category: "Mobile", status: "Completed", featured: false,
    subtitle: "Career Mapping App",
    description: "An Android career-mapping app designed to help people explore paths that match their interests and strengths through guided questions and saved career matches.",
    overview: "Latern brings career discovery, exploration, and planning into a mobile experience under the idea of lighting your future path.",
    challenge: "Choosing a career direction involves connecting personal interests and strengths with possible paths.",
    solution: "The app design uses guided questions, career match results, and a saved-results view to help users explore and revisit possible career paths.",
    projectType: "Android application",
    github: "", technologies: ["Kotlin", "Android", "MVVM"],
    media: { type: "image", src: laternShowcase, alt: "Latern career mapping app with guided career discovery and saved career matches" },
  },
  {
    slug: "foundora", sortDate: "2026-08", date: "Aug 2026", title: "Foundora", category: "Innovation", status: "In Development", featured: false,
    projectType: "Hackathon project", role: "Team member",
    description: "A privacy-first product idea that helps aspiring founders discover potential co-founders without immediately exposing their identity or sensitive startup ideas.",
    overview: "Foundora is a team hackathon project exploring founder discovery, compatibility, privacy, chat, gradual information reveal, and startup collaboration.",
    challenge: "Finding a compatible co-founder requires trust, but sharing personal details and early startup ideas too soon can feel risky.",
    solution: "The current product direction focuses on privacy-first discovery and gradual information sharing. AI co-founder agents remain a future idea, not a completed feature.",
    github: "", technologies: ["Product thinking", "Privacy", "Founder discovery"],
    media: { type: "image", src: foundoraShowcase, alt: "Foundora co-founder platform showcase" },
  },
  {
    slug: "joyhub", sortDate: "2026-07-17", date: "Jul 17, 2026", title: "JoyHub", category: "Web", status: "Completed", featured: false,
    subtitle: "Teach with Joy. Learn with Confidence. 🌱",
    projectType: "Personal project",
    description: "An offline-friendly classroom engagement platform where teachers can create quizzes, configure students, randomly select participants, reveal question cards, provide animated feedback, and restore saved classroom progress.",
    overview: "JoyHub gives teachers a playful way to create and run multiple-choice classroom activities without requiring authentication.",
    challenge: "Classroom quizzes can feel repetitive and may not encourage every student to participate.",
    solution: "Question cards, student selection, a spin wheel, answer checking, celebration moments, explanations, and motivational messages make the activity more interactive.",
    github: "https://github.com/khinmyatthu2193/JoyHub", liveUrl: "https://joy-hub-xi.vercel.app", technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Web Audio API"],
    highlights: ["Teacher-created MCQ questions", "Question cards and spin wheel", "Interactive answer checking", "Celebration animation for correct answers", "Explanations and motivational quotes for wrong answers", "Local storage with no authentication required"],
    media: { type: "image", src: joyhubShowcase, alt: "JoyHub interactive learning platform showcase" },
  },
  {
    slug: "climbio", sortDate: "2026-08", date: "Aug 2026", title: "Climbio 2.0", category: "Web", status: "In Development", featured: true,
    description: "A smart business management platform for Myanmar SMEs, featuring inventory and product management, invoice workflows, sales dashboards, public storefronts, shop approval controls, and an AI advisor that analyses real business data.",
    overview: "The original Climbio – Smart Business Toolkits for MSMEs was completed as a MIIT special team project from Jun 2025 to Oct 2025. Climbio v2 was showcased at the MIIT 2026 Project Show in Aug 2026. For v2, I led the team and implemented most of the application.",
    challenge: "Returning to an existing product meant understanding earlier decisions before deciding what to revisit.",
    solution: "Version 2 brings the core business workflows into a full-stack web application with a secure API, public storefronts, reporting, and data-informed AI guidance.",
    projectType: "MIIT 2026 Project Show team project",
    role: "Team leader and primary implementer of Version 2",
    github: "https://github.com/khinmyatthu2193/Climbio-2.0", liveUrl: "https://climbio-2-0.vercel.app",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "Recharts", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase Storage"],
    media: { type: "image", src: climbioShowcase, alt: "Climbio web application showcase" },
    gallery: [
      { type: "image", src: climbioDashboard, alt: "Climbio 2.0 business overview dashboard", fit: "contain" },
      { type: "image", src: climbioOverview, alt: "Climbio 2.0 analytics overview", fit: "contain" },
      { type: "image", src: climbioProducts, alt: "Climbio 2.0 product and inventory management", fit: "contain" },
      { type: "image", src: climbioInventory, alt: "Climbio 2.0 inventory workspace", fit: "contain" },
      { type: "image", src: climbioInvoices, alt: "Climbio 2.0 invoice management workspace", fit: "contain" },
      { type: "image", src: climbioPublicStore, alt: "Climbio 2.0 public store management and sharing", fit: "contain" },
      { type: "image", src: climbioCustomerStore, alt: "Climbio 2.0 customer storefront", fit: "contain" },
      { type: "image", src: climbioChat, alt: "Climbio 2.0 AI chat providing business guidance in Myanmar language", fit: "contain" },
      { type: "image", src: climbioAdvisor, alt: "Climbio 2.0 AI business advisor", fit: "contain" },
      { type: "image", src: climbioPromptGallery, alt: "Climbio 2.0 AI prompt gallery", fit: "contain" },
      { type: "image", src: climbioSettings, alt: "Climbio 2.0 business settings", fit: "contain" },
      { type: "image", src: climbioAdminDashboard, alt: "Climbio 2.0 administration dashboard", fit: "contain" },
    ],
  },
  {
    slug: "brancy", sortDate: "2024-06", title: "Brancy — Branded Cosmetics Online Shopping System", category: "Web", date: "Jun 2024 – Oct 2024", status: "Completed", featured: false,
    projectType: "MIIT special project", role: "Team member",
    description: "A full-stack cosmetics e-commerce platform featuring user authentication, product and category browsing, cart and wishlist management, checkout, order tracking, skin-type product recommendations, and inventory administration.",
    overview: "Brancy explores a complete cosmetics shopping experience through a Django-based web application.",
    challenge: "The project explored how product information and shopping interactions can be organized clearly in one digital experience.",
    solution: "The existing application includes verified catalog, account, cart, checkout, invoice, and administration screens.",
    github: "https://github.com/khinmyatthu2193/brancy-branded-cosmetics-onlineshopping-system", liveUrl: "https://brancy-branded-cosmetics-onlineshop.vercel.app",
    technologies: ["Python", "Django", "JavaScript", "HTML & CSS", "SQLite"],
    media: { type: "image", src: brancyShowcase, alt: "Brancy branded cosmetics online shopping showcase" },
    gallery: [
      { type: "image", src: brancyHome, alt: "Brancy homepage" },
      { type: "image", src: brancyCategories, alt: "Brancy product categories" },
      { type: "image", src: brancyProduct, alt: "Brancy product details" },
      { type: "image", src: brancyCart, alt: "Brancy shopping cart" },
      { type: "image", src: brancyCheckout, alt: "Brancy checkout" },
      { type: "image", src: brancyAdmin, alt: "Brancy Django administration" },
      { type: "image", src: brancyAccount, alt: "Brancy customer account details" },
      { type: "image", src: brancyBrands, alt: "Brancy cosmetics brands" },
      { type: "image", src: brancyCreateAccount, alt: "Brancy customer registration" },
      { type: "image", src: brancyLogin, alt: "Brancy customer login" },
      { type: "image", src: brancyLogout, alt: "Brancy customer logout" },
      { type: "image", src: brancyInvoice, alt: "Brancy order invoice" },
    ],
  },
  {
    slug: "recyclelink", sortDate: "2024-12", date: "Dec 2024 – Mar 2025", title: "RecycleLink", category: "Web", status: "Completed", featured: false,
    projectType: "MIIT special project", role: "Team member",
    description: "A recycling-focused application where I explored web development with Django and real-time functionality using WebSockets.",
    overview: "RecycleLink was a learning opportunity focused on Django and real-time web communication.",
    challenge: "The project explored how a recycling-focused application could benefit from timely updates.",
    solution: "I explored WebSocket-based real-time functionality within a Django application. Additional product details are still to be confirmed.",
    github: "", technologies: ["Django", "WebSockets"], media: { type: "image", src: recyclelinkShowcase, alt: "RecycleLink project showcase" },
  },
  {
    slug: "maymays-lett-swal", sortDate: "2026-07-03", date: "Jul 3, 2026", title: "May May’s Latt Swal", category: "Web", status: "Needs Update", featured: false,
    projectType: "Personal project",
    description: "A recipe project inspired by home cooking and the idea of keeping meaningful recipes simple, accessible, and easy to revisit.",
    overview: "A personal project shaped by food, memory, and the comfort of recipes worth keeping close.",
    challenge: "Meaningful home recipes can be easy to lose or difficult to revisit in a simple way.",
    solution: "The project keeps the idea of returning to familiar recipes warm and approachable. Technical details will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", src: maymayShowcase, alt: "MayMay's Lett Swal cooking application showcase" },
  },
  {
    slug: "university-laptop-rental", sortDate: "2025-12", date: "Dec 2025 – Apr 2026", title: "University Laptop Rental Management System", category: "Web", status: "Completed", featured: false,
    projectType: "MIIT special project", role: "Team member",
    description: "A management system designed around the process of renting and managing university laptops.",
    overview: "A university-focused management system created around a practical campus process.",
    challenge: "The project considers how a laptop rental process can be represented in a management system.",
    solution: "Implementation details and verified features will be added once confirmed.",
    github: "", technologies: [], media: { type: "image", src: laptopRentalShowcase, alt: "University Laptop Rental Management System showcase" },
  },
  {
    slug: "the-chosen-one", sortDate: "2026-07", date: "Jul 2026", title: "The Chosen One", category: "Innovation", status: "Prototype", featured: false,
    projectType: "Vibe Code Tour team project", role: "Team 08 member",
    description: "A project created during the VibeCode Tour while exploring how quickly an idea can move toward a working experience.",
    overview: "The Chosen One was created by Team 08 during the Vibe Code Tour as a collaborative project exploring how quickly an idea can move toward a working experience.",
    challenge: "The audience and detailed problem statement still need confirmation.",
    solution: "Verified implementation details and technologies will be added after reviewing the project repository.",
    github: "", technologies: [], media: { type: "image", src: chosenOneShowcase, alt: "The Chosen One application showcase" },
  },
];

// Preserve the supplied milestone order: month/year-only dates are not exact days.
const timelineEntries: { slug: string; title?: string; date?: string }[] = [
  { slug: "brancy" },
  { slug: "recyclelink" },
  { slug: "climbio", title: "Climbio – Smart Business Toolkits for MSMEs", date: "Jun 2025 – Oct 2025" },
  { slug: "university-laptop-rental" },
  { slug: "maymays-lett-swal", title: "May May’s Latt Swal – Cooking Assistant Web App" },
  { slug: "the-chosen-one", title: "The Chosen One — Vibe Code Tour Group Project" },
  { slug: "joyhub" },
  { slug: "climbio", title: "Climbio v2" },
  { slug: "foundora" },
];

export const projectTimeline = timelineEntries.map((entry) => {
  const project = projects.find((project) => project.slug === entry.slug);
  if (!project) throw new Error(`Unknown timeline project: ${entry.slug}`);
  return { project, title: entry.title ?? project.title, date: entry.date ?? project.date };
});
