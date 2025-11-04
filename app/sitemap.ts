import { MetadataRoute } from "next";
import { getAllEtkinlikler } from "./data/etkinlikler";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karacalilikcerkesdernegi.com";
  
  const etkinlikler = getAllEtkinlikler().map((etkinlik) => ({
    url: `${baseUrl}/etkinlikler/${etkinlik.slug}`,
    lastModified: new Date(etkinlik.date.split(".").reverse().join("-")),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sulaleler`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/etkinlikler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...etkinlikler,
  ];
}

