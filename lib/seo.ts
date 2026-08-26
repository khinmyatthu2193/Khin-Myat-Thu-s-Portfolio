import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

// Set SITE_URL (preferred) or NEXT_PUBLIC_SITE_URL when deploying outside Vercel.
export const SITE_URL = new URL(configuredSiteUrl ?? "http://localhost:3000");
export const SITE_NAME = "Khin Myat Thu | Developer Portfolio";
export const SOCIAL_IMAGE_PATH = "/opengraph-image";
export const SOCIAL_IMAGE_ALT = "Khin Myat Thu — aspiring full-stack developer portfolio";

type PageSeo = { title: string; description: string; path: `/${string}` | "/"; absoluteTitle?: boolean };

export function createPageMetadata({ title, description, path, absoluteTitle = false }: PageSeo): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | Khin Myat Thu`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle, description, type: "website", url: path, siteName: SITE_NAME, locale: "en_US",
      images: [{ url: SOCIAL_IMAGE_PATH, width: 1200, height: 630, alt: SOCIAL_IMAGE_ALT, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image", title: socialTitle, description,
      images: [{ url: SOCIAL_IMAGE_PATH, alt: SOCIAL_IMAGE_ALT }],
    },
  };
}
