import type { MetadataRoute } from "next";

import { siteConfig, sitePaths } from "@/lib/site";

const legalPaths = new Set<string>(["/privacy", "/terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: legalPaths.has(path) ? "yearly" : "weekly",
    priority: path === "/" ? 1 : legalPaths.has(path) ? 0.3 : 0.7,
  }));
}
