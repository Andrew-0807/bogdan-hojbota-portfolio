import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ARTWORKS, ARTIST_INFO } from "@/lib/data/artist-data"
import { ArrowLeft, ArrowRight, Phone, ArrowUpRight } from "lucide-react"

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
  if (!artwork) return { title: "Lucrare inexistentă" }

  return {
    title: `${artwork.title} (${artwork.year}) | ${ARTIST_INFO.name}`,
    description: `${artwork.materials}. ${artwork.dimensions}. ${artwork.location}.`,
  }
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { id } = await params
  const artwork = ARTWORKS.find((item) => item.id === id)

  if (!artwork) {
    notFound()
  }

  const relatedArtworks = ARTWORKS.filter(
    (item) => item.id !== artwork.id && item.category === artwork.category,
  ).slice(0, 3)

  const specs = [
    { label: "Material și tehnică", value: artwork.materials },
    { label: "Dimensiuni", value: artwork.dimensions },
    { label: "Tipologie", value: artwork.category },
    { label: "Datare", value: String(artwork.year) },
    { label: "Amplasament", value: artwork.location },
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
            <span>Portofoliu</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 items-start mt-8">
            {/* The work */}
            <figure className="lg:col-span-7 group">
              <div className="specular relative aspect-[4/3] bg-slate-100 border border-slate-200">
                <Image
                  src={artwork.image_url}
                  alt={`${artwork.title}, ${artwork.materials}, ${artwork.location}`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="pt-3 font-mono text-[11px] text-slate-500">
                Fotografie de catalog
              </figcaption>
            </figure>

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
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-slate-500 sm:pt-0.5">
                      {spec.label}
                    </dt>
                    <dd className="sm:col-span-2 text-slate-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <h2 className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Concept
                </h2>
                <p className="mt-4 font-serif text-xl sm:text-2xl font-light leading-[1.45] text-slate-800">
                  {artwork.narrative}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-900">
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  O comisie în același registru?
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Puteți comanda o lucrare unicat realizată în aceeași tehnică, sau o piesă
                  comemorativă pentru spațiul dumneavoastră.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={`tel:${ARTIST_INFO.phone}`}
                    className="h-12 px-5 border border-slate-300 hover:border-slate-900 text-slate-900 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-amber-700" />
                    <span>{ARTIST_INFO.phone}</span>
                  </a>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(artwork.title)}`}
                    className="group h-12 pl-5 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-between gap-4 flex-1 transition-colors"
                  >
                    <span>Trimite solicitare</span>
                    <span className="w-10 h-10 bg-amber-700 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {relatedArtworks.length > 0 && (
            <section className="mt-24 pt-10 border-t border-slate-900">
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Alte lucrări din aceeași tipologie
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 mt-10">
                {relatedArtworks.map((rel) => (
                  <Link key={rel.id} href={`/galerie/${rel.id}`} className="group">
                    <div className="specular relative aspect-[4/3] bg-slate-100 border border-slate-200 group-hover:border-slate-400 transition-colors">
                      <Image
                        src={rel.image_url}
                        alt={rel.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
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
