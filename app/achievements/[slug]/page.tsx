import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AchievementDetailPage } from "@/features/achievements/achievement-detail-page";
import { createPageMetadata } from "@/lib/seo";
import { achievements } from "@/src/data/achievements";

export function generateStaticParams() { return achievements.map((achievement) => ({ slug: achievement.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const achievement = achievements.find((item) => item.slug === slug);
  if (!achievement) return { title: "Achievement Not Found", robots: { index: false, follow: false } };
  return createPageMetadata({
    title: achievement.title,
    description: achievement.description,
    path: `/achievements/${achievement.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const achievement = achievements.find((item) => item.slug === slug);
  if (!achievement) notFound();
  return <AchievementDetailPage achievement={achievement} />;
}
