import type { Metadata } from "next";
import { PortfolioShell } from "@/features/site/portfolio-shell";
import "@/src/index.css";
export const metadata:Metadata={title:{default:"Khin Myat Thu — Developer",template:"%s — Khin Myat Thu"},description:"Portfolio of Khin Myat Thu, building practical web, mobile, and AI-powered products."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="light"><body><PortfolioShell>{children}</PortfolioShell></body></html>}
