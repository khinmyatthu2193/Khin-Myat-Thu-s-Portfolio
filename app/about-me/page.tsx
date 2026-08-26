import { AboutPage } from "@/features/about-me/about-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description: "Learn about Khin Myat Thu, a final-year Computer Science student in Mandalay pursuing full-stack development opportunities.",
  path: "/about-me",
});

export default function Page(){return <AboutPage/>}
