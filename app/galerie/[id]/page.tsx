import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ARTWORKS } from "@/lib/data/artist-data"
import { pageMetadata } from "@/lib/seo"
import { ArtworkDetailContent } from "@/components/artwork-detail-content"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return ARTWORKS.map((artwork) => ({
    id: artwork.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const artwork = ARTWORKS.find((item) => item.id === id)
  if (!artwork) return { title: "Lucrare inexistentă", robots: { index: false } }

  const facts = `${artwork.materials}. ${artwork.dimensions}. ${artwork.location}.`
  const description = `${facts} ${artwork.narrative}`.slice(0, 155).trimEnd() + "…"

  return pageMetadata({
    title: `${artwork.title} (${artwork.year})`,
    description,
    path: `/galerie/${artwork.id}`,
    image: artwork.image_url,
    imageAlt: `${artwork.title}, ${artwork.materials}, ${artwork.location}`,
  })
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { id } = await params
  const artwork = ARTWORKS.find((item) => item.id === id)

  if (!artwork) {
    notFound()
  }

  return <ArtworkDetailContent id={id} />
}
