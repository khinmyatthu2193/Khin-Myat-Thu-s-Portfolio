import { AchievementsPage } from "@/features/achievements/achievements-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Achievements",
  description: "Explore Khin Myat Thu's hackathon achievements, certificates, and selected technology community milestones.",
  path: "/achievements",
});

export default function Page(){return <AchievementsPage/>}
