"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function FloatingThemeToggle() { const { setTheme } = useTheme(); return <button className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-line bg-paper/80 shadow-xl backdrop-blur" onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")} aria-label="Toggle color theme"><Sun className="hidden dark:block" size={18}/><Moon className="dark:hidden" size={18}/></button>; }
