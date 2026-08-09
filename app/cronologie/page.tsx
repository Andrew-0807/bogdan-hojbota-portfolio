"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ScrollReveal from "@/components/scroll-reveal"
import { EVENTS } from "@/lib/data/artist-data"
import { LayoutList, Rows3, MapPin } from "lucide-react"

const TYPE_LABEL: Record<string, string> = {
  solo_exhibition: "Expoziție personală",
  group_show: "Expoziție de grup",
  public_commission: "Comisie publică",
  symposium: "Simpozion monumental",
}

const FILTERS = [
  { id: "all", label: "Toate" },
  { id: "solo_exhibition", label: "Personale" },
  { id: "group_show", label: "De grup" },
  { id: "symposium", label: "Simpozioane" },
]

export default function TimelinePage() {
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline")

  const filteredEvents = useMemo(() => {
    if (typeFilter === "all") return EVENTS
    return EVENTS.filter((ev) => ev.type === typeFilter)
  }, [typeFilter])

  const typeLabel = (type: string) => TYPE_LABEL[type] ?? type

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HEADER */}
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">
                Cronologie
              </h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                O cronică a participărilor la saloane internaționale, a expozițiilor personale din
                Germania, Franța, Canada și India, precum și a simpozioanelor monumentale de for
                public, 1981–2025.
              </p>
            </div>
          </div>
        </section>

        {/* CONTROLS */}
        <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200 py-3">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setTypeFilter(f.id)}
                    aria-pressed={typeFilter === f.id}
                    className={`py-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors border-b ${
                      typeFilter === f.id
                        ? "text-slate-900 border-amber-700"
                        : "text-slate-500 border-transparent hover:text-slate-900"
                    }`}
                  >
                    {f.label}
                    {f.id === "all" && ` (${EVENTS.length})`}
                  </button>
                ))}
              </div>

              <div className="flex border border-slate-200 shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setViewMode("timeline")}
                  aria-pressed={viewMode === "timeline"}
                  className={`h-8 px-3 text-[11px] uppercase tracking-[0.1em] font-semibold flex items-center gap-1.5 transition-colors ${
                    viewMode === "timeline"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Rows3 className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Cronologic</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                  className={`h-8 px-3 text-[11px] uppercase tracking-[0.1em] font-semibold flex items-center gap-1.5 transition-colors ${
                    viewMode === "list"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LayoutList className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Compact</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LEDGER */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            {filteredEvents.length === 0 ? (
              <p className="text-sm text-slate-600 border-t border-slate-900 pt-8">
                Nu există evenimente înregistrate pentru acest criteriu.
              </p>
            ) : viewMode === "timeline" ? (
              <div className="border-t border-slate-900">
                {filteredEvents.map((ev, idx) => (
                  <ScrollReveal key={ev.id} delay={Math.min(idx, 8) * 0.04}>
                    <article className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-3 py-8 border-b border-slate-200 group">
                      <div className="sm:col-span-2">
                        <span className="font-serif text-4xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                          {ev.year}
                        </span>
                      </div>

                      <div className="sm:col-span-7">
                        <h2 className="font-serif text-2xl font-bold text-slate-900">{ev.title}</h2>
                        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>

                      <div className="sm:col-span-3 flex flex-col gap-2 text-[11px]">
                        <span className="uppercase tracking-[0.14em] font-semibold text-amber-800">
                          {typeLabel(ev.type)}
                        </span>
                        <span className="flex items-start gap-1.5 font-mono text-slate-500">
                          <MapPin className="h-3.5 w-3.5 shrink-0 mt-px text-amber-700" />
                          <span>{ev.location}</span>
                        </span>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="border-t border-slate-900">
                {filteredEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1 py-4 border-b border-slate-200 items-baseline"
                  >
                    <span className="sm:col-span-1 font-mono text-sm text-amber-800">{ev.year}</span>
                    <h2 className="sm:col-span-6 font-serif text-lg font-bold text-slate-900">
                      {ev.title}
                    </h2>
                    <span className="sm:col-span-3 font-mono text-[11px] text-slate-500">
                      {ev.location}
                    </span>
                    <span className="sm:col-span-2 text-[11px] uppercase tracking-[0.12em] text-slate-500">
                      {typeLabel(ev.type)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
