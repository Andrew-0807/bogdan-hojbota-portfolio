"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"
import Image from "next/image"
import { getArtworks } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { Search, ArrowRight, MapPin, Images } from "lucide-react"

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { language, t } = useLanguage()

  const artworks = useMemo(() => getArtworks(language), [language])

  const categories = [
    { id: "all", label: t("cat_all") },
    { id: "Sculptură Monumentală", label: t("cat_monumental") },
    { id: "Sculptură de Atelier", label: t("cat_atelier") },
    { id: "Busturi & Portrete Comemorative", label: t("cat_busturi") },
    { id: "Trofee & Design Metalic", label: t("cat_trofee") },
    { id: "Cicluri Conceptual", label: t("cat_conceptual") },
  ]

  const filteredArtworks = useMemo(() => {
    return artworks.filter((art) => {
      const matchesCategory = selectedCategory === "all" || art.category === selectedCategory

      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        art.title.toLowerCase().includes(query) ||
        art.materials.toLowerCase().includes(query) ||
        art.narrative.toLowerCase().includes(query) ||
        art.location.toLowerCase().includes(query) ||
        art.year.toString().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory, artworks])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-600 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HEADER HERO */}
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">
                {t("gallery_heading")}
              </h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                {t("gallery_sub")}
              </p>
            </div>
          </div>
        </section>

        {/* CONTROLS BAR */}
        <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200 py-3">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
              {/* Category Filters */}
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={selectedCategory === cat.id}
                    className={`py-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors border-b ${
                      selectedCategory === cat.id
                        ? "text-slate-900 border-amber-700"
                        : "text-slate-500 border-transparent hover:text-slate-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64 shrink-0">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
                <Input
                  aria-label={t("gallery_search_aria")}
                  placeholder={t("gallery_search_placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 pl-6 bg-transparent border-0 border-b border-slate-200 text-slate-900 text-xs placeholder:text-slate-500 focus-visible:ring-0 focus-visible:border-slate-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ARTWORKS GRID */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-mono text-[11px] text-slate-500 mb-10" aria-live="polite">
              {t("gallery_count", { filtered: filteredArtworks.length, total: artworks.length })}
            </p>

            {filteredArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
                {filteredArtworks.map((art, idx) => (
                  <ScrollReveal key={art.id} delay={idx * 0.05}>
                    <Link href={`/galerie/${art.id}`} className="group flex flex-col h-full">
                      {/* Square mount, contained — see app/page.tsx. The catalogue
                          holds both 2:3 monuments and 3:2 studio shots. */}
                      <div className="specular relative aspect-square bg-slate-100 border border-slate-200 group-hover:border-slate-400 transition-colors">
                        <Image
                          src={art.image_url}
                          alt={`${art.title}, ${art.materials}, ${art.year}`}
                          priority={idx < 3}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-contain"
                        />
                        {art.images && art.images.length > 1 && (
                          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 shadow-sm" suppressHydrationWarning>
                            <Images className="w-3 h-3 text-amber-400" />
                            <span suppressHydrationWarning>{art.images.length}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-5 flex flex-col flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                            {art.title}
                          </h2>
                          <span className="font-mono text-[11px] text-slate-500 shrink-0">
                            {art.year}
                          </span>
                        </div>
                        <p className="mt-1.5 font-mono text-[11px] text-slate-500">
                          {art.materials}
                        </p>
                        <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                          {art.narrative}
                        </p>

                        <div className="mt-auto pt-5 flex items-center justify-between gap-3 text-[11px]">
                          <span className="flex items-center gap-1.5 text-slate-500 min-w-0">
                            <MapPin className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                            <span className="truncate">{art.location}</span>
                          </span>
                          <span className="uppercase tracking-[0.14em] font-semibold text-amber-800 flex items-center gap-1.5 shrink-0">
                            <span>{t("details")}</span>
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="max-w-xl border-t border-slate-900 pt-8">
                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  {t("gallery_no_results_title")}
                </h2>
                <p className="mt-3 text-sm text-slate-600">
                  {t("gallery_no_results_sub", { query: searchQuery })}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="mt-6 h-11 px-6 bg-slate-900 hover:bg-slate-800 text-white text-[11px] uppercase tracking-[0.14em] font-semibold transition-colors"
                >
                  {t("gallery_show_all")}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
