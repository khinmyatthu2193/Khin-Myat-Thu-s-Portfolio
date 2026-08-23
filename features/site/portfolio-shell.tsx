"use client";
import { MotionConfig } from "framer-motion";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
export function PortfolioShell({children}:{children:React.ReactNode}){return <MotionConfig reducedMotion="user"><div className="flex min-h-screen flex-col overflow-x-hidden bg-bg text-textMain selection:bg-primary selection:text-bg"><a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-bg transition-transform focus:translate-y-0">Skip to content</a><div className="noise pointer-events-none fixed inset-0 z-50"/><div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="grid-lines absolute inset-0"/></div><Navbar isHome={false}/><div className="flex-1">{children}</div><Footer/></div></MotionConfig>}
