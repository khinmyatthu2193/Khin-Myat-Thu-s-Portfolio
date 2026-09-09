import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/my_logo.png";
import { assetUrl } from "@/lib/asset-url";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-me" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Skills", href: "/skills" },
  { name: "Blog", href: "/blogs" },
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderMedium text-textDim transition-colors duration-200 hover:border-primary hover:text-primary"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar({ isHome = true }: { isHome?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = links.find(({ href }) => href.split("#")[0] === pathname)?.href ?? "";
  const contactHref = pathname === "/" ? "#contact" : "/contact-me";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

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
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
      open
        ? "border-transparent bg-transparent"
        : scrolled
          ? "border-borderSoft bg-bg/95 backdrop-blur-[14px]"
          : "border-borderSoft bg-bg"
    }`}>
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <Link href="/" className="relative h-11 w-[50px] shrink-0 overflow-hidden lg:h-12 lg:w-[55px]" aria-label="Khin Myat Thu, home">
          <img
            src={assetUrl(logo)}
            alt=""
            className="nav-logo pointer-events-none absolute -left-[36px] -top-[16.5px] w-[118px] max-w-none lg:-left-[39.5px] lg:-top-[18px] lg:w-[129px]"
          />
        </Link>
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map(({ name, href }) => (
            <Link key={name} href={href} aria-current={activeSection === href ? "page" : undefined} className={`relative inline-flex min-h-11 items-center font-sans text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-primary ${activeSection === href ? "text-primary" : "text-textDim"}`}>
              {name}
              {activeSection === href && <motion.span layoutId="active-navigation-underline" transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-x-0 bottom-1 h-0.5 rounded-full bg-primary" />}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Link href={contactHref} className="inline-flex h-11 items-center gap-2 rounded-full border border-primary/35 px-5 py-2.5 text-sm font-medium text-primary transition-colors duration-200 hover:border-primary hover:bg-primary/5 focus-visible:outline-offset-2">
              Contact <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </div>
        <div className="relative z-50 flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button ref={menuButtonRef} type="button" onClick={() => setOpen((current) => !current)} className="flex h-11 w-11 items-center justify-center rounded-full border border-borderMedium" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
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
            {links.map(({ name, href }, index) => (
              <Link key={name} href={href} onClick={() => setOpen(false)} aria-current={activeSection === href ? "page" : undefined} className="flex shrink-0 items-center border-t border-borderMedium py-4 font-display text-3xl sm:py-5 sm:text-4xl">
                <span className="w-12 shrink-0">0{index + 1}</span>
                <span className={`ml-3 transition-colors duration-200 hover:text-primary ${activeSection === href ? "text-primary" : "text-textDim"}`}>{name}</span>
              </Link>
            ))}
            <Link href={contactHref} onClick={() => setOpen(false)} className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-primary">
              Contact <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
