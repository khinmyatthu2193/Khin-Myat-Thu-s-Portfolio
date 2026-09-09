import climbioMobileShowcase from "../assets/climbio_mobile.png";
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
    slug: "climbio-mobile", sortDate: "2025-06", date: "Jun 2025 – Oct 2025", title: "Climbio v1: MSME Business Toolkit App", category: "Mobile", status: "Completed", featured: false,
    description: "A mobile business toolkit for MSMEs to manage product catalogs, customer records, orders, and follow-up reminders.",
    overview: "Climbio v1 was completed as a MIIT special team project from June to October 2025, with a focus on improving digital adoption for MSMEs. Climbio v2 followed in August 2026 as a newer version and rebuild of the original mobile application, around ten months after v1.",
    challenge: "Small businesses need accessible digital tools to organize their products, communicate with customers, and maintain customer relationships.",
    solution: "MiniCatalog stores product records in Firebase and uploads product images to Appwrite Storage. Smart Inbox displays customer orders, while customer records and follow-up reminders are stored in Firestore.",
    projectType: "Full-stack mobile application",
    role: "Team member — MIIT special project",
    github: "https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit", technologies: ["React Native", "Firebase", "Expo", "TypeScript", "Appwrite Storage"],
    highlights: ["Product catalog creation and image uploads", "Customer record management", "Smart Inbox with live Firestore order updates", "Customer follow-up reminders", "Text-to-speech accessibility support"],
    media: { type: "image", src: climbioMobileShowcase, alt: "Climbio Mobile business toolkit showing a sales dashboard, recent orders, and product inventory" },
  },
  {
    slug: "latern", sortDate: "2026-03", date: "Mar 2026", title: "Latern: Career Mapping App", category: "Mobile", status: "Completed", featured: false,
    description: "An Android career-mapping app designed to help people explore paths that match their interests and strengths through guided questions and saved career matches.",
    overview: "Latern brings career discovery, exploration, and planning into a mobile experience under the idea of lighting your future path.",
    challenge: "Choosing a career direction involves connecting personal interests and strengths with possible paths.",
    solution: "The app design uses guided questions, career match results, and a saved-results view to help users explore and revisit possible career paths.",
    projectType: "Android application",
    github: "", technologies: ["Kotlin", "Android", "MVVM"],
    media: { type: "image", src: laternShowcase, alt: "Latern career mapping app with guided career discovery and saved career matches" },
  },
  {
    slug: "foundora", sortDate: "2026-08", date: "Aug 2026", title: "Foundora: Co-Founder Matching Platform", category: "AI", featured: false,
    projectType: "Hackathon project", role: "Team member",
    description: "A privacy-first co-founder platform with anonymous discovery, mutual matching, identity reveal, and AI-assisted compatibility and startup proposals.",
    overview: "Foundora helps entrepreneurs explore potential partnerships before revealing their identities and organize shared startup plans.",
    challenge: "Finding a compatible co-founder requires trust, but sharing personal details and early startup ideas too soon can feel risky.",
    solution: "The current code uses Supabase for authentication, matching, messages, and workspaces. Server functions call OpenRouter for compatibility explanations and startup proposals when configured; compatibility scores are calculated deterministically.",
    github: "https://github.com/khinmyatthu2193/foundora-found-co", technologies: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase", "OpenRouter"],
    media: { type: "image", src: foundoraShowcase, alt: "Foundora co-founder platform showcase" },
    highlights: ["Anonymous founder discovery and mutual matching", "Chat and mutual-consent identity reveal", "Deterministic compatibility scores with AI-generated explanations", "AI-assisted startup proposals", "Shared startup workspaces"],
  },
  {
    slug: "joyhub", sortDate: "2026-07-17", date: "Jul 17, 2026", title: "JoyHub: Classroom Engagement Platform", category: "Web", status: "In Development", featured: false,
    projectType: "Personal project",
    description: "An offline-friendly classroom engagement platform where teachers can create quizzes, configure students, randomly select participants, reveal question cards, provide animated feedback, and restore saved classroom progress.",
    overview: "JoyHub gives teachers a playful way to create and run multiple-choice classroom activities without requiring authentication.",
    challenge: "Classroom quizzes can feel repetitive and may not encourage every student to participate.",
    solution: "Question cards, student selection, a spin wheel, answer checking, celebration moments, explanations, and motivational messages make the activity more interactive.",
    github: "https://github.com/khinmyatthu2193/JoyHub", liveUrl: "https://joy-hub-xi.vercel.app/", technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Web Audio API"],
    highlights: ["Teacher-created MCQ questions", "Question cards and spin wheel", "Interactive answer checking", "Celebration animation for correct answers", "Explanations and motivational quotes for wrong answers", "Local storage with no authentication required"],
    media: { type: "image", src: joyhubShowcase, alt: "JoyHub interactive learning platform showcase" },
  },
  {
    slug: "climbio", sortDate: "2026-08", date: "Aug 2026", title: "Climbio 2.0: SME Business Management Platform", category: "Web", status: "In Development", featured: true,
    description: "A smart business management platform for Myanmar SMEs, featuring inventory and product management, invoice workflows, sales dashboards, public storefronts, shop approval controls, and an AI advisor that analyses real business data.",
    overview: "Climbio 2.0 continues the original Climbio project. Version 1 was a completed MIIT special team project built with React Native and Firebase from June to October 2025 to improve digital adoption for MSMEs. Version 2 followed in August 2026 as a rebuild of the original mobile application, around ten months after v1, and was showcased at the MIIT 2026 Project Show. I led the team and implemented most of Version 2.",
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
    slug: "brancy", sortDate: "2024-06", title: "Brancy: Branded Cosmetics Online Shopping System", category: "Web", date: "Jun 2024 – Oct 2024", status: "Completed", featured: false,
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
    customerFeatures: ["Account registration and login", "Product categories and detailed product information", "Cart, wishlist, and checkout", "Order status and history", "Skin-type product recommendations"],
    adminFeatures: ["Product listings and inventory management", "Customer data and order management"],
    responsibilities: ["Developed frontend pages with HTML, CSS, and JavaScript", "Implemented Django backend functionality", "Designed the database structure", "Built authentication and shopping features"],
    challenges: ["Learning Django and connecting frontend pages to the backend", "Managing database and product data"],
  },
  {
    slug: "recyclelink", sortDate: "2024-12", date: "Dec 2024 – Mar 2025", title: "RecycleLink: Recycling Marketplace", category: "Web", status: "Completed", featured: false,
    projectType: "MIIT special project", role: "Team member",
    description: "A bilingual marketplace for buying reusable products and selling recyclable materials, with supplier discovery, shopping tools, and recycling resources.",
    overview: "RecycleLink connects buyers, sellers, and recycling suppliers through an English and Burmese Django application developed as a MIIT special project.",
    challenge: "People and businesses need a way to find recycling suppliers, sell reusable materials, and discover recycled products.",
    solution: "The platform combines searchable product listings, checkout, supplier lookup, and community resources. Django Channels and WebSockets support supplier notifications.",
    github: "https://github.com/khinmyatthu2193/RecycleLink-EcoCommerce-Platform", technologies: ["Django", "Python", "SQLite", "Django Channels", "WebSockets", "JavaScript", "HTML & CSS", "NLTK"], media: { type: "image", src: recyclelinkShowcase, alt: "RecycleLink project showcase" },
    highlights: ["English and Burmese interfaces", "Product categories, search, and filtering", "Cart, wishlist, checkout, and order history", "Supplier directory and nearest-supplier lookup", "Community posts, recycling videos, and chatbot", "WebSocket supplier notifications"],
  },
  {
    slug: "maymays-lett-swal", sortDate: "2026-07-03", date: "Jul 3, 2026", title: "May May’s Latt Swal: Cooking Assistant Web App", category: "Web", status: "Needs Update", featured: false,
    projectType: "Personal project",
    description: "A Myanmar-language cooking assistant that suggests dishes and finds recipes by available ingredients and cooking time.",
    overview: "May May?s Latt Swal helps users decide what to cook and browse Myanmar recipes with step-by-step instructions.",
    challenge: "Choosing a meal requires finding recipes that fit the ingredients and cooking time available.",
    solution: "A local JavaScript agent detects suggestion or ingredient-search intent, ranks recipes by ingredient overlap and cooking time, and formats results through a recipe skill. The current app uses local JSON data without an external AI API.",
    github: "https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App", technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Lucide React", "JSON"], media: { type: "image", src: maymayShowcase, alt: "MayMay's Lett Swal cooking application showcase" },
    liveUrl: "https://may-mays-latt-swal-cooking-assistan-two.vercel.app/",
    highlights: ["Random meal suggestions", "Ingredient-based recipe search", "Cooking-time filters", "Step-by-step cooking instructions", "Searchable recipe library with category filters", "YouTube and TikTok recipe search links"],
  },
  {
    slug: "university-laptop-rental", sortDate: "2025-12", date: "Dec 2025 – Apr 2026", title: "UniKit: University Laptop Rental Management System", category: "Web", status: "Completed", featured: false,
    projectType: "MIIT special project", role: "Team member",
    description: "A Django application for managing university laptops, student and staff records, assignments, returns, and repairs.",
    overview: "UniKit centralizes university laptop rental records at MIIT, covering inventory availability, assignments, return dates, and laptop condition.",
    challenge: "Paper files and spreadsheets make laptop availability, rental approvals, expected returns, and maintenance difficult to track.",
    solution: "Management accounts can register or import records, assign available laptops, prevent duplicate active assignments, process returns, and track overdue assignments and repairs.",
    github: "https://github.com/khinmyatthu2193/university-laptop-rental-management-system", technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML & CSS", "pandas", "openpyxl"], media: { type: "image", src: laptopRentalShowcase, alt: "University Laptop Rental Management System showcase" },
    highlights: ["Management staff authentication", "Student, staff, and laptop inventory records", "Laptop assignments and duplicate-assignment prevention", "Returns, overdue tracking, and repair records", "Excel imports for students, staff, and laptops", "Dashboard summaries and audit log page"],
  },
  {
    slug: "the-chosen-one", sortDate: "2026-07", date: "Jul 2026", title: "The Chosen One: Truth or Dare Party Game", category: "Web", featured: false,
    projectType: "Vibe Code Tour team project", role: "Team 08 member",
    description: "A mobile-first Truth or Dare party game that uses multi-touch roulette to select a player, reveal challenge cards, and collect group votes.",
    overview: "The Chosen One is a client-side, share-the-phone party game built by Team 08 during the Vibe Code Tour. It runs without accounts or a backend.",
    challenge: "Groups need a shared way to select players and move through Truth or Dare rounds on one device.",
    solution: "Players place their fingers on the screen for random selection, choose Truth or Dare, reveal a challenge, and vote on the result. The game supports offline installation as a PWA and click-to-add players on desktop.",
    github: "https://github.com/vibe-code-tours/team-08-app", liveUrl: "https://vibecode.tours/team-08-app/",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Web Audio API", "vite-plugin-pwa"],
    highlights: ["Multi-touch player selection with no consecutive repeat winner", "Truth, Dare, or Random choice", "Challenge packs and difficulty settings", "Group voting and celebration effects", "Burmese interface", "Installable, offline-capable PWA"],
    media: { type: "image", src: chosenOneShowcase, alt: "The Chosen One application showcase" },
  },
];

// Preserve the supplied milestone order: month/year-only dates are not exact days.
const timelineEntries: { slug: string; title?: string; date?: string }[] = [
  { slug: "brancy" },
  { slug: "recyclelink" },
  { slug: "climbio", title: "Climbio v1: MSME Business Toolkit (Mobile App)", date: "Jun 2025 – Oct 2025" },
  { slug: "university-laptop-rental" },
  { slug: "maymays-lett-swal", title: "May May’s Latt Swal: Cooking Assistant Web App" },
  { slug: "the-chosen-one", title: "The Chosen One: Truth or Dare Party Game" },
  { slug: "joyhub" },
  { slug: "climbio", title: "Climbio 2.0: SME Business Management Platform" },
  { slug: "foundora" },
];

export const projectTimeline = timelineEntries.map((entry) => {
  const project = projects.find((project) => project.slug === entry.slug);
  if (!project) throw new Error(`Unknown timeline project: ${entry.slug}`);
  return { project, title: entry.title ?? project.title, date: entry.date ?? project.date };
});
