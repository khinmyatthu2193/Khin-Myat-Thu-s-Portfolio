import type { Metadata, Viewport } from "next";
import { PortfolioShell } from "@/features/site/portfolio-shell";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "@/src/index.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: { default: "Khin Myat Thu | Developer Portfolio", template: "%s | Khin Myat Thu" },
  description: "Portfolio of Khin Myat Thu, a final-year Computer Science student building web, mobile, and AI-powered products.",
  applicationName: SITE_NAME,
  authors: [{ name: "Khin Myat Thu", url: SITE_URL }],
  creator: "Khin Myat Thu",
  publisher: "Khin Myat Thu",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fced" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f0e" },
  ],
};

const personId = new URL("/#person", SITE_URL).toString();
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": personId, name: "Khin Myat Thu", url: SITE_URL.toString(),
      jobTitle: "Final-year Computer Science student and aspiring full-stack developer",
      address: { "@type": "PostalAddress", addressLocality: "Mandalay", addressCountry: "MM" },
      knowsAbout: ["Web development", "Mobile development", "AI-powered products", "React", "React Native", "Django", "Firebase"],
      sameAs: ["https://github.com/khinmyatthu2193", "https://www.linkedin.com/in/khin-myat-thu-837892352"],
    },
    {
      "@type": "WebSite", "@id": new URL("/#website", SITE_URL).toString(), url: SITE_URL.toString(),
      name: SITE_NAME,
      description: "The portfolio of Khin Myat Thu, featuring web, mobile, and AI-powered product work.",
      inLanguage: "en", author: { "@id": personId },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
