import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
const links = [{ name: "About", href: "#about" }, { name: "Work", href: "#projects" }, { name: "Contact", href: "#contact" }];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark"
  );
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
    setTheme(next);
  };
  const ThemeToggle = ({ mobile = false }: { mobile?: boolean }) => <button onClick={toggleTheme} className={`inline-flex items-center justify-center rounded-full border border-borderMedium text-textDim transition-colors hover:border-primary hover:text-primary ${mobile ? "h-12 w-12" : "h-10 w-10"}`} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>;
  return <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "border-b border-borderSoft bg-bg/80 backdrop-blur-xl" : ""}`}>
    <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
      <a href="#home" className="font-display text-2xl font-semibold">KMT<span className="text-primary">.</span></a>
      <div className="hidden items-center gap-8 md:flex">{links.map(l => <a key={l.name} href={l.href} className="text-sm text-textDim transition-colors hover:text-textMain">{l.name}</a>)}<a href="#contact" className="rounded-full border border-primary/40 px-5 py-2.5 text-sm text-primary transition-colors hover:bg-primary hover:text-bg">My contacts</a><ThemeToggle /></div>
      <div className="relative z-50 flex items-center gap-2 md:hidden"><ThemeToggle /><button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-borderMedium" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button></div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8 md:hidden"><p className="eyebrow mb-8">Navigation</p>{links.map((l,i) => <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="border-t border-borderMedium py-5 font-display text-4xl">0{i+1} <span className="ml-4 text-textDim">{l.name}</span></a>)}</motion.div>}</AnimatePresence>
  </header>;
}
