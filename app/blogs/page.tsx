import { BlogsPage } from "@/features/blogs/blogs-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Learning Notes",
  description: "Read Khin Myat Thu's notes on learning, building software, and exploring web, mobile, and AI development.",
  path: "/blogs",
});

export default function Page(){return <BlogsPage/>}
