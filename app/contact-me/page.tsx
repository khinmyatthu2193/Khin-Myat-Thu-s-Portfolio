import { ContactPage } from "@/features/contact-me/contact-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Connect with Khin Myat Thu about remote, Yangon, or Mandalay opportunities in web, mobile, and full-stack development.",
  path: "/contact-me",
});

export default function Page(){return <ContactPage/>}
