import { AnimatePresence, motion } from "framer-motion";
import { Award, BriefcaseBusiness, Code2, Mail, Menu, Moon, NotebookPen, Sun, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/my_logo.png";

const links = [
  { name: "About", href: "#about", icon: UserRound },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: BriefcaseBusiness },
  { name: "Achievements", href: "#achievements", icon: Award },
  { name: "Learning Notes", href: "#blog", icon: NotebookPen },
];

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-borderMedium text-textDim transition-colors hover:border-primary hover:text-primary"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar({ isHome = true }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark",
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", next === "light");
    setTheme(next);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] ${
      scrolled && !open ? "border-b border-borderSoft bg-bg/80 backdrop-blur-xl" : ""
    }`}>
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#home" className="group relative h-14 w-16 shrink-0 overflow-hidden" aria-label="Khin Myat Thu, home">
          <img
            src={logo}
            alt=""
            className="nav-logo pointer-events-none absolute -left-[46px] -top-[21px] w-[150px] max-w-none transition-transform group-hover:scale-[1.03]"
          />
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} aria-current={activeSection === href ? "location" : undefined} className={`relative inline-flex items-center gap-1.5 text-sm transition-colors hover:text-textMain ${activeSection === href ? "text-primary" : "text-textDim"}`}>
              <Icon size={15} aria-hidden="true" /> {name}
              {activeSection === href && <span className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-primaryGlow focus-visible:outline-offset-2">
            <Mail size={16} aria-hidden="true" /> Contact
          </a>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
        <div className="relative z-50 flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button ref={menuButtonRef} type="button" onClick={() => setOpen((current) => !current)} className="flex h-10 w-10 items-center justify-center rounded-full border border-borderMedium" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-bg px-6 pb-10 pt-28 sm:px-8 lg:hidden"
          >
            <p className="eyebrow mb-7 shrink-0">Navigation</p>
            {links.map(({ name, href, icon: Icon }, index) => (
              <a key={name} href={href} onClick={() => setOpen(false)} className="flex shrink-0 items-center border-t border-borderMedium py-4 font-display text-3xl sm:py-5 sm:text-4xl">
                <span className="w-12 shrink-0">0{index + 1}</span>
                <span className="ml-3 inline-flex items-center gap-3 text-textDim"><Icon className="shrink-0" size={26} aria-hidden="true" /> {name}</span>
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-primary">
              <Mail size={18} aria-hidden="true" /> Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
