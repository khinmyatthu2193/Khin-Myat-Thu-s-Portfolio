"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/src/components/Hero";
import ProjectCard from "@/src/components/ProjectCard";
import Achievements from "@/src/components/Achievements";
import { projects } from "@/src/data/projects";
export function HomePage(){return <main id="main-content"><Hero/><section className="section-shell"><motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="eyebrow">01 / About</p><h2 className="section-title mt-5">I build useful ideas into products people can trust.</h2></div><div className="lg:pt-7"><p className="max-w-3xl text-xl leading-[1.65] text-textBody md:text-2xl">I&apos;m a final-year Computer Science student at MIIT, focused on turning practical problems into thoughtful digital products.</p><a href="/about-me" className="text-link group mt-7">More about me <ArrowUpRight size={17}/></a></div></motion.div></section><section className="section-shell"><div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">02 / Selected work</p><h2 className="section-title mt-5">Projects with purpose.</h2></div><a href="/projects" className="text-link hidden sm:inline-flex">View all projects <ArrowUpRight size={17}/></a></div>{projects.filter(p=>p.featured).slice(0,3).map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</section><Achievements/></main>}
