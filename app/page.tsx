import { HomePage } from "@/features/home/home-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Khin Myat Thu — Aspiring Full-Stack Developer",
  description: "Portfolio of Khin Myat Thu, a final-year Computer Science student building web, mobile, and AI-powered products.",
  path: "/", absoluteTitle: true,
});

export default function Page(){return <HomePage/>}
