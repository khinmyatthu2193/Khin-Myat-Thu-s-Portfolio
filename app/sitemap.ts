import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { achievements } from "@/src/data/achievements";
import { projects } from "@/src/data/projects";

const staticRoutes = ["", "/about-me", "/skills", "/projects", "/achievements", "/blogs", "/contact-me"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path, index) => ({
      url: new URL(path || "/", SITE_URL).toString(),
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, SITE_URL).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...achievements.map((achievement) => ({
      url: new URL(`/achievements/${achievement.slug}`, SITE_URL).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
