import type { StaticImageData } from "next/image";
export type AssetSource = string | StaticImageData;
export function assetUrl(source: AssetSource) { return typeof source === "string" ? source : source.src; }
