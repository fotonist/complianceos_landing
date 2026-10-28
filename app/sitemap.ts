import type { MetadataRoute } from "next";

const base = "https://www.complianceos.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { en: `${base}/`, tr: `${base}/tr` } },
    },
    {
      url: `${base}/tr`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { en: `${base}/`, tr: `${base}/tr` } },
    },
  ];
}
