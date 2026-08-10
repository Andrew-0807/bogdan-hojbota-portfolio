import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/data/artist-data"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Legacy English mirrors of /galerie and /cronologie, plus the prefilled
      // contact links, which are the same page under a query string.
      disallow: ["/gallery", "/timeline", "/contact?"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
