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
  description: string; overview?: string; challenge: string; solution: string; github: string;
  liveUrl?: string; technologies: string[]; featured: boolean; media: ProjectMedia; subtitle?: string;
  projectType?: string; event?: string; context?: string; course?: string; teamType?: string; role?: string; responsibilities?: string[]; customerFeatures?: string[];
  adminFeatures?: string[]; stack?: { label: string; items: string[] }[]; highlights?: string[];
  challenges?: string[]; gallery?: ProjectMedia[];
  overviewTitle?: string; outcome?: string;
  features?: { title: string; description: string }[];
  featuredWorkflows?: { title: string; description: string; media: ProjectMedia }[];
  technicalHighlights?: { title: string; description: string }[];
  learnings?: string[];
};

export const projects: Project[] = [
  {
    slug: "climbio-mobile", sortDate: "2025-06", date: "Jun 2025 – Oct 2025", title: "Climbio v1: MSME Business Toolkit App", category: "Mobile", status: "Completed", featured: false,
    description: "A mobile business toolkit for MSMEs to manage product catalogs, customer records, orders, and follow-up reminders.",
    overview: "Climbio began with a focus on improving digital adoption for MSMEs. A web rebuild followed around ten months later as Climbio 2.0.",
    challenge: "Small businesses need accessible digital tools to organize their products, communicate with customers, and maintain customer relationships.",
    solution: "MiniCatalog stores product records in Firebase and uploads product images to Appwrite Storage. Smart Inbox displays customer orders, while customer records and follow-up reminders are stored in Firestore.",
    projectType: "Full-stack mobile application", context: "MIIT special project", teamType: "Team project",
    role: "Team member",
    github: "https://github.com/khinmyatthu2193/Climbio-MSME-Smart-Business-Toolkit", technologies: ["React Native", "Firebase", "Expo", "TypeScript", "Appwrite Storage"],
    features: [
      { title: "Product catalog", description: "Product catalog creation and image uploads" },
      { title: "Customer records", description: "Customer record management" },
      { title: "Smart Inbox", description: "Smart Inbox with live Firestore order updates" },
      { title: "Follow-up reminders", description: "Customer follow-up reminders" },
      { title: "Accessible audio", description: "Text-to-speech accessibility support" },
    ],
    media: { type: "image", src: climbioMobileShowcase, alt: "Climbio Mobile business toolkit showing a sales dashboard, recent orders, and product inventory" },
  },
  {
    slug: "latern", sortDate: "2026-03", date: "Mar 2026", title: "Latern: Career Mapping App", category: "Mobile", status: "Completed", featured: false,
    description: "An Android career-mapping app designed to help people explore paths that match their interests and strengths through guided questions and saved career matches.",
    overview: "Latern brings career discovery, exploration, and planning into a mobile experience under the idea of lighting your future path.",
    challenge: "Choosing a career direction involves connecting personal interests and strengths with possible paths.",
    solution: "The app design uses guided questions, career match results, and a saved-results view to help users explore and revisit possible career paths.",
    projectType: "Android application",
    features: [
      { title: "Guided discovery", description: "Explore career paths through questions about interests and strengths." },
      { title: "Career matches", description: "Review career match results to explore possible directions." },
      { title: "Saved results", description: "Revisit saved career matches when planning next steps." },
    ],
    github: "", technologies: ["Kotlin", "Android", "MVVM"],
    media: { type: "image", src: laternShowcase, alt: "Latern career mapping app with guided career discovery and saved career matches" },
  },
  {
    slug: "foundora", sortDate: "2026-08", date: "Aug 2026", title: "Foundora: Co-Founder Matching Platform", category: "AI", featured: false,
    projectType: "Web application", context: "Hackathon project", teamType: "Team project", role: "Team member",
    description: "A privacy-first co-founder platform with anonymous discovery, mutual matching, identity reveal, and AI-assisted compatibility and startup proposals.",
    challenge: "Finding a compatible co-founder requires trust, but sharing personal details and early startup ideas too soon can feel risky.",
    solution: "Anonymous discovery, mutual matching, and consent-based identity reveal let founders explore partnerships before sharing personal details.",
    technicalHighlights: [
      { title: "Shared platform services", description: "Supabase supports authentication, matching, messages, and workspaces." },
      { title: "Scores and AI explanations", description: "Compatibility scores are deterministic. Server functions call OpenRouter for explanations and startup proposals when configured." },
    ],
    github: "https://github.com/khinmyatthu2193/foundora-found-co", technologies: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase", "OpenRouter"],
    media: { type: "image", src: foundoraShowcase, alt: "Foundora co-founder platform showcase" },
    features: [
      { title: "Anonymous discovery", description: "Anonymous founder discovery and mutual matching" },
      { title: "Private conversations", description: "Chat and mutual-consent identity reveal" },
      { title: "Compatibility", description: "Deterministic compatibility scores with AI-generated explanations" },
      { title: "Startup proposals", description: "AI-assisted startup proposals" },
      { title: "Shared workspaces", description: "Shared startup workspaces" },
    ],
  },
  {
    slug: "joyhub", sortDate: "2026-07-17", date: "Jul 17, 2026", title: "JoyHub: Classroom Engagement Platform", category: "Web", status: "In Development", featured: false,
    projectType: "Web application", context: "Personal project",
    description: "An offline-friendly classroom engagement platform that helps teachers run interactive quizzes and keep students involved.",
    challenge: "Classroom quizzes can feel repetitive and may not encourage every student to participate.",
    solution: "Question cards, student selection, a spin wheel, answer checking, celebration moments, explanations, and motivational messages make the activity more interactive.",
    github: "https://github.com/khinmyatthu2193/JoyHub", liveUrl: "https://joy-hub-xi.vercel.app/", technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Local Storage", "Web Audio API"],
    features: [
      { title: "Quiz creation", description: "Teacher-created MCQ questions" },
      { title: "Classroom participation", description: "Question cards and spin wheel" },
      { title: "Answer checking", description: "Interactive answer checking" },
      { title: "Celebrations", description: "Celebration animation for correct answers" },
      { title: "Learning feedback", description: "Explanations and motivational quotes for wrong answers" },
      { title: "Saved progress", description: "Local storage with no authentication required" },
    ],
    media: { type: "image", src: joyhubShowcase, alt: "JoyHub interactive learning platform showcase" },
  },
  {
    slug: "climbio", sortDate: "2026-08", date: "Aug 2026", title: "Climbio 2.0: SME Business Management Platform", category: "Web", status: "In Development", featured: true,
    description: "A business management platform for Myanmar SMEs that brings day-to-day operations and data-informed guidance into one workspace.",
    overview: "Climbio began as a mobile toolkit to improve digital adoption for MSMEs. Version 1 was built with React Native and Firebase from June to October 2025. This version rebuilds that foundation for the web, around ten months later.",
    challenge: "Returning to an existing product meant understanding earlier decisions before deciding what to revisit.",
    solution: "Version 2 brings the core business workflows into a full-stack web application with a secure API, public storefronts, reporting, and data-informed AI guidance.",
    projectType: "Full-stack web application", teamType: "Team project", event: "MIIT 2026 Project Show",
    role: "Team leader",
    github: "https://github.com/khinmyatthu2193/Climbio-2.0", liveUrl: "https://climbio-2-0.vercel.app",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "Recharts", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase Storage"],
    media: { type: "image", src: climbioShowcase, alt: "Climbio web application showcase" },
    responsibilities: ["Implemented most of the Version 2 full-stack rebuild"],
    features: [
      { title: "Inventory & products", description: "Manage product records and stock in a shared business workspace." },
      { title: "Invoices", description: "Handle invoice workflows alongside business records." },
      { title: "Sales reporting", description: "Review business activity through dashboards and analytics." },
      { title: "Public storefronts", description: "Share a customer-facing store for the business." },
      { title: "Shop approval", description: "Control shop approvals through administration tools." },
      { title: "AI advisor", description: "Get business guidance informed by real business data." },
    ],
    featuredWorkflows: [
      { title: "Understand business activity", description: "The overview dashboard brings sales reporting into the business workspace.", media: { type: "image", src: climbioDashboard, alt: "Climbio 2.0 business overview dashboard" } },
      { title: "Keep products organized", description: "Product and inventory management support the shop's day-to-day business workflows.", media: { type: "image", src: climbioProducts, alt: "Climbio 2.0 product and inventory management" } },
      { title: "Bring the shop online", description: "Customers can browse the business through its public storefront.", media: { type: "image", src: climbioCustomerStore, alt: "Climbio 2.0 customer storefront" } },
      { title: "Ask for business guidance", description: "The AI advisor analyses real business data to provide guidance in Myanmar language.", media: { type: "image", src: climbioChat, alt: "Climbio 2.0 AI chat providing business guidance in Myanmar language" } },
    ],
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
    projectType: "Full-stack web application", context: "MIIT special project", teamType: "Team project", role: "Team member",
    description: "A cosmetics shopping platform for browsing products and managing online orders.",
    challenge: "The project explored how product information and shopping interactions can be organized clearly in one digital experience.",
    solution: "The existing application includes verified catalog, account, cart, checkout, invoice, and administration screens.",
    github: "https://github.com/khinmyatthu2193/brancy-branded-cosmetics-onlineshopping-system", liveUrl: "https://brancy-branded-cosmetics-onlineshop.vercel.app",
    technologies: ["Python", "Django", "JavaScript", "HTML & CSS", "SQLite"],
    media: { type: "image", src: brancyShowcase, alt: "Brancy branded cosmetics online shopping showcase" },
    featuredWorkflows: [
      { title: "Discover cosmetics", description: "Category browsing helps customers explore the product catalog.", media: { type: "image", src: brancyCategories, alt: "Brancy product categories" } },
      { title: "Review a shopping cart", description: "Customers can review their selected products before checkout.", media: { type: "image", src: brancyCart, alt: "Brancy shopping cart" } },
      { title: "Complete checkout", description: "The checkout screen connects product selection with the ordering workflow.", media: { type: "image", src: brancyCheckout, alt: "Brancy checkout" } },
      { title: "Administer the catalog", description: "Django administration supports product, inventory, customer, and order management.", media: { type: "image", src: brancyAdmin, alt: "Brancy Django administration" } },
    ],
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
    features: [
      { title: "Customer accounts", description: "Register and sign in to a customer account." },
      { title: "Product discovery", description: "Browse categories and detailed product information." },
      { title: "Shopping & checkout", description: "Manage a cart and wishlist, then proceed to checkout." },
      { title: "Order tracking", description: "Review order status and history." },
      { title: "Recommendations", description: "Find product recommendations based on skin type." },
      { title: "Administration", description: "Manage product listings, inventory, customer data, and orders." },
    ],
    customerFeatures: ["Account registration and login", "Product categories and detailed product information", "Cart, wishlist, and checkout", "Order status and history", "Skin-type product recommendations"],
    adminFeatures: ["Product listings and inventory management", "Customer data and order management"],
    responsibilities: ["Developed frontend pages with HTML, CSS, and JavaScript", "Implemented Django backend functionality", "Designed the database structure", "Built authentication and shopping features"],
    challenges: ["Learning Django and connecting frontend pages to the backend", "Managing database and product data"],
  },
  {
    slug: "recyclelink", sortDate: "2024-12", date: "Dec 2024 – Mar 2025", title: "RecycleLink: Recycling Marketplace", category: "Web", status: "Completed", featured: false,
    projectType: "Web application", context: "MIIT special project", teamType: "Team project", role: "Team member",
    description: "A bilingual marketplace for buying reusable products and selling recyclable materials, with supplier discovery, shopping tools, and recycling resources.",
    challenge: "People and businesses need a way to find recycling suppliers, sell reusable materials, and discover recycled products.",
    solution: "The platform combines searchable product listings, checkout, supplier lookup, and community resources. Django Channels and WebSockets support supplier notifications.",
    github: "https://github.com/khinmyatthu2193/RecycleLink-EcoCommerce-Platform", technologies: ["Django", "Python", "SQLite", "Django Channels", "WebSockets", "JavaScript", "HTML & CSS", "NLTK"], media: { type: "image", src: recyclelinkShowcase, alt: "RecycleLink project showcase" },
    features: [
      { title: "Bilingual access", description: "English and Burmese interfaces" },
      { title: "Product discovery", description: "Product categories, search, and filtering" },
      { title: "Shopping workflows", description: "Cart, wishlist, checkout, and order history" },
      { title: "Supplier discovery", description: "Supplier directory and nearest-supplier lookup" },
      { title: "Community resources", description: "Community posts, recycling videos, and chatbot" },
      { title: "Live notifications", description: "WebSocket supplier notifications" },
    ],
  },
  {
    slug: "maymays-lett-swal", sortDate: "2026-07-03", date: "Jul 3, 2026", title: "May May’s Latt Swal: Cooking Assistant Web App", category: "Web", status: "Needs Update", featured: false,
    projectType: "Web application", context: "Personal project",
    description: "A Myanmar-language cooking assistant that suggests dishes and finds recipes by available ingredients and cooking time.",
    challenge: "Choosing a meal requires finding recipes that fit the ingredients and cooking time available.",
    solution: "Recipe suggestions and ingredient search help users find meals that fit their available ingredients and cooking time.",
    technicalHighlights: [
      { title: "Local recipe matching", description: "A JavaScript agent detects suggestion or ingredient-search intent and ranks recipes by ingredient overlap and cooking time." },
      { title: "Local data, no external AI API", description: "A recipe skill formats the results using local JSON recipe data." },
    ],
    github: "https://github.com/khinmyatthu2193/May_Mays_Latt_Swal-Cooking-Assistant-Web-App", technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Lucide React", "JSON"], media: { type: "image", src: maymayShowcase, alt: "MayMay's Lett Swal cooking application showcase" },
    liveUrl: "https://may-mays-latt-swal-cooking-assistan-two.vercel.app/",
    features: [
      { title: "Meal inspiration", description: "Random meal suggestions" },
      { title: "Ingredient search", description: "Ingredient-based recipe search" },
      { title: "Time filters", description: "Cooking-time filters" },
      { title: "Cooking instructions", description: "Step-by-step cooking instructions" },
      { title: "Recipe library", description: "Searchable recipe library with category filters" },
      { title: "Video recipes", description: "YouTube and TikTok recipe search links" },
    ],
  },
  {
    slug: "university-laptop-rental", sortDate: "2025-12", date: "Dec 2025 – Apr 2026", title: "UniKit: University Laptop Rental Management System", category: "Web", status: "Completed", featured: false,
    projectType: "Web application", context: "MIIT special project", teamType: "Team project", role: "Team member",
    description: "A Django application for managing university laptops, student and staff records, assignments, returns, and repairs.",
    challenge: "Paper files and spreadsheets make laptop availability, rental approvals, expected returns, and maintenance difficult to track.",
    solution: "Management accounts can register or import records, assign available laptops, prevent duplicate active assignments, process returns, and track overdue assignments and repairs.",
    github: "https://github.com/khinmyatthu2193/university-laptop-rental-management-system", technologies: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "HTML & CSS", "pandas", "openpyxl"], media: { type: "image", src: laptopRentalShowcase, alt: "University Laptop Rental Management System showcase" },
    features: [
      { title: "Staff access", description: "Management staff authentication" },
      { title: "Inventory & records", description: "Student, staff, and laptop inventory records" },
      { title: "Laptop assignments", description: "Laptop assignments and duplicate-assignment prevention" },
      { title: "Returns & repairs", description: "Returns, overdue tracking, and repair records" },
      { title: "Excel imports", description: "Excel imports for students, staff, and laptops" },
      { title: "Management overview", description: "Dashboard summaries and audit log page" },
    ],
  },
  {
    slug: "the-chosen-one", sortDate: "2026-07", date: "Jul 2026", title: "The Chosen One: Truth or Dare Party Game", category: "Web", featured: false,
    projectType: "Web application", teamType: "Team 08", event: "Vibe Code Tour", role: "Team member",
    description: "A mobile-first Truth or Dare party game that uses multi-touch roulette to select a player, reveal challenge cards, and collect group votes.",
    overview: "The game runs entirely on the client, without accounts or a backend, so a group can play on one shared device.",
    challenge: "Groups need a shared way to select players and move through Truth or Dare rounds on one device.",
    solution: "Players place their fingers on the screen for random selection, choose Truth or Dare, reveal a challenge, and vote on the result. The game supports offline installation as a PWA and click-to-add players on desktop.",
    github: "https://github.com/vibe-code-tours/team-08-app", liveUrl: "https://vibecode.tours/team-08-app/",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Web Audio API", "vite-plugin-pwa"],
    features: [
      { title: "Player selection", description: "Multi-touch player selection with no consecutive repeat winner" },
      { title: "Challenge choice", description: "Truth, Dare, or Random choice" },
      { title: "Game settings", description: "Challenge packs and difficulty settings" },
      { title: "Group voting", description: "Group voting and celebration effects" },
      { title: "Burmese interface", description: "Burmese interface" },
      { title: "Offline play", description: "Installable, offline-capable PWA" },
    ],
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
