"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [["About", "/about-me"], ["Projects", "/projects"], ["Achievements", "/achievements"], ["Contact", "/contact-me"]];
export function SiteNav() { const [open, setOpen] = useState(false); return <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-xl"><nav className="shell flex h-20 items-center justify-between" aria-label="Main navigation"><Link href="/" className="font-display text-2xl font-bold">Khin<span className="text-lime">.</span></Link><div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <Link className="nav-link" href={href} key={href}>{label}</Link>)}<Link className="button py-2.5" href="/contact-me">Let&apos;s talk</Link></div><button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></nav>{open && <div className="shell grid gap-1 border-t border-line py-4 md:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} className="py-3 text-lg" href={href} key={href}>{label}</Link>)}</div>}</header>; }
