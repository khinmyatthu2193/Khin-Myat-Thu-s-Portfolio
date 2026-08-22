"use client";
import AchievementDetails from "@/src/components/AchievementDetails";
import type { Achievement } from "@/src/data/achievements";
export function AchievementDetailPage({achievement}:{achievement:Achievement}){return <AchievementDetails achievement={achievement}/>}
