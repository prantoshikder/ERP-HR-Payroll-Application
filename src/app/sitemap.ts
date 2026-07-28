import type { MetadataRoute } from "next";

import { siteConfig, sitePaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
