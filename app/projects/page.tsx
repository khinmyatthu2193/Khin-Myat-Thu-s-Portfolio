import { ProjectsPage } from "@/features/projects/projects-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "View Khin Myat Thu's web, mobile, and AI-powered projects, including full-stack applications and product experiments.",
  path: "/projects",
});

export default function Page(){return <ProjectsPage/>}
