"use client"

import { useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArtwork, getArtworks } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { ArtworkGallery } from "@/components/artwork-gallery"

interface ArtworkDetailContentProps {
  id: string
}

export function ArtworkDetailContent({ id }: ArtworkDetailContentProps) {
  const { language, t } = useLanguage()
  const artwork = useMemo(() => getArtwork(id, language), [id, language])
  const artworks = useMemo(() => getArtworks(language), [language])

  if (!artwork) {
    notFound()
  }

  const galleryImages = useMemo(() => {
    if (artwork.images && artwork.images.length > 0) {
      return artwork.images
    }
    return [artwork.image_url]
  }, [artwork])

  const index = artworks.findIndex((item) => item.id === artwork.id)
  const others = [...artworks.slice(index + 1), ...artworks.slice(0, index)]
  const relatedArtworks = [
    ...others.filter((item) => item.category === artwork.category),
    ...others.filter((item) => item.category !== artwork.category),
  ].slice(0, 3)

  const specs = [
    { label: t("detail_spec_materials"), value: artwork.materials },
    { label: t("detail_spec_dimensions"), value: artwork.dimensions },
    { label: t("detail_spec_category"), value: artwork.category },
    { label: t("detail_spec_year"), value: String(artwork.year) },
    { label: t("detail_spec_location"), value: artwork.location },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-500 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t("detail_back")}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 items-start mt-8">
            {/* The work gallery */}
            <div className="lg:col-span-7">
              <ArtworkGallery
                images={galleryImages}
                title={artwork.title}
                materials={artwork.materials}
                year={artwork.year}
                location={artwork.location}
              />
            </div>

            {/* Catalogue entry */}
            <div className="lg:col-span-5">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
                {artwork.title}
              </h1>
              <p className="mt-3 font-mono text-sm text-amber-800">{artwork.year}</p>

              <dl className="mt-8 border-t border-slate-900 text-sm">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-3.5 border-b border-slate-200"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:pt-0.5 font-semibold">
                      {spec.label}
                    </dt>
                    <dd className="sm:col-span-2 text-slate-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <h2 className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                  {t("detail_concept_heading")}
                </h2>
                <p className="mt-4 font-serif text-xl sm:text-2xl font-light leading-[1.45] text-slate-800">
                  {artwork.narrative}
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {relatedArtworks.length > 0 && (
            <section className="mt-24 pt-10 border-t border-slate-900">
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                {t("detail_related_heading")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 mt-10">
                {relatedArtworks.map((rel) => (
                  <Link key={rel.id} href={`/galerie/${rel.id}`} className="group">
                    <div className="specular relative aspect-square bg-slate-100 border border-slate-200 group-hover:border-slate-400 transition-colors">
                      <Image
                        src={rel.image_url}
                        alt={`${rel.title}, ${rel.materials}, ${rel.year}`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors flex items-center gap-2">
                      <span>{rel.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-amber-800 transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-slate-500">
                      {rel.year} · {rel.materials}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
