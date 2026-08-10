import type { Metadata } from "next"
import { ARTIST_INFO } from "@/lib/data/artist-data"

const DEFAULT_OG_IMAGE = "/industrial-metal-sculpture-welded-steel.jpg"
const SUFFIX = "Bogdan Severin Hojbotă"

interface PageSeo {
  title: string
  description: string
  /** Root-relative, e.g. "/galerie". */
  path: string
  image?: string
  imageAlt?: string
}

/**
 * Next does not deep-merge `openGraph` from a parent layout: a page that declares
 * it replaces the parent's block wholesale. So every page builds its full set here
 * rather than half-inheriting and silently shipping the homepage's share card.
 */
export function pageMetadata({ title, description, path, image, imageAlt }: PageSeo): Metadata {
  const ogImage = image ?? DEFAULT_OG_IMAGE
  // Spelled out rather than left to a root `title.template`: an intermediate
  // layout that sets a plain string title swallows the template, and /galerie
  // does exactly that, which stripped the suffix off every artwork page.
  const fullTitle = `${title} | ${SUFFIX}`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      siteName: ARTIST_INFO.name,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: ogImage, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
