"use client";
import ProjectDetails from "@/src/components/ProjectDetails";
import type { Project } from "@/src/data/projects";
export function ProjectDetailPage({project}:{project:Project}){return <ProjectDetails project={project}/>}
