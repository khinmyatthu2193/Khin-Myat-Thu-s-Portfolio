import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
export function SiteLayout({ children }: { children: React.ReactNode }) { return <><SiteNav/><main>{children}</main><SiteFooter/></>; }
