import { projects } from "./data";
import { ProjectCard } from "./project-card";
export function ProjectList({ featured=false }: { featured?:boolean }) { const list = featured ? projects.filter(p=>p.featured) : projects; return <div>{list.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div>; }
