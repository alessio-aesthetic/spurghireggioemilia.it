import type { MetadataRoute } from "next";

import { cities, services, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-04");
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${site.url}/contatti`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...services.map((service) => ({
      url: `${site.url}/servizi/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85
    })),
    ...cities.map((city) => ({
      url: `${site.url}/citta/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75
    }))
  ];
}
