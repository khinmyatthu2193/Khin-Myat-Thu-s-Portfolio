import { SkillsPage } from "@/features/skills/skills-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skills",
  description: "Explore Khin Myat Thu's skills in React, React Native, Django, Firebase, and related web, mobile, and AI technologies.",
  path: "/skills",
});

export default function Page(){return <SkillsPage/>}
