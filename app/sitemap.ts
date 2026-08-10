import type { MetadataRoute } from "next"
import { ARTWORKS, SITE_URL } from "@/lib/data/artist-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = (
    [
      { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
      { url: `${SITE_URL}/galerie`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${SITE_URL}/profil`, changeFrequency: "yearly", priority: 0.8 },
      { url: `${SITE_URL}/cronologie`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
      { url: `${SITE_URL}/confidentialitate`, changeFrequency: "yearly", priority: 0.2 },
    ] satisfies MetadataRoute.Sitemap
  ).map((page) => ({ ...page, lastModified }))

  const artworks: MetadataRoute.Sitemap = ARTWORKS.map((artwork) => ({
    url: `${SITE_URL}/galerie/${artwork.id}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [...pages, ...artworks]
}
