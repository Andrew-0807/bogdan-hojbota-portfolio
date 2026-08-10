"use client"

import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ScrollReveal from "@/components/scroll-reveal"
import { getEvents } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { LayoutList, Rows3, MapPin } from "lucide-react"

export default function TimelinePage() {
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline")
  const { language, t } = useLanguage()

  const events = useMemo(() => getEvents(language), [language])

  const typeLabelMap: Record<string, string> = {
    solo_exhibition: t("timeline_type_solo"),
    group_show: t("timeline_type_group"),
    public_commission: t("timeline_type_commission"),
    symposium: t("timeline_type_symposium"),
  }

  const filters = [
    { id: "all", label: t("timeline_filter_all") },
    { id: "solo_exhibition", label: t("timeline_filter_solo") },
    { id: "group_show", label: t("timeline_filter_group") },
    { id: "symposium", label: t("timeline_filter_symposium") },
  ]

  const filteredEvents = useMemo(() => {
    if (typeFilter === "all") return events
    return events.filter((ev) => ev.type === typeFilter)
  }, [typeFilter, events])

  const typeLabel = (type: string) => typeLabelMap[type] ?? type

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HEADER */}
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">
                {t("timeline_heading")}
              </h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                {t("timeline_sub")}
              </p>
            </div>
          </div>
        </section>

        {/* CONTROLS */}
        <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200 py-3">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
              {/* Type Filters */}
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                {filters.map((f) => (
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
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 border border-slate-200 bg-slate-100 p-0.5 self-start sm:self-auto">
                <button
                  onClick={() => setViewMode("timeline")}
                  aria-pressed={viewMode === "timeline"}
                  className={`h-7 px-3 text-[11px] font-mono uppercase inline-flex items-center gap-1.5 transition-colors ${
                    viewMode === "timeline"
                      ? "bg-slate-900 text-white font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Rows3 className="h-3.5 w-3.5" />
                  <span>{t("timeline_view_timeline")}</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-pressed={viewMode === "list"}
                  className={`h-7 px-3 text-[11px] font-mono uppercase inline-flex items-center gap-1.5 transition-colors ${
                    viewMode === "list"
                      ? "bg-slate-900 text-white font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <LayoutList className="h-3.5 w-3.5" />
                  <span>{t("timeline_view_list")}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-mono text-[11px] text-slate-500 mb-10" aria-live="polite">
              {filteredEvents.length} {t("timeline_filter_all").toLowerCase()}
            </p>

            {viewMode === "timeline" ? (
              /* TIMELINE VIEW */
              <div className="relative border-l border-slate-300 ml-4 sm:ml-32 space-y-12 sm:space-y-16">
                {filteredEvents.map((ev, idx) => (
                  <ScrollReveal key={ev.id} delay={idx * 0.03}>
                    <div className="relative pl-6 sm:pl-10 group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-slate-900 ring-4 ring-slate-50 group-hover:bg-amber-700 transition-colors" />

                      {/* Year anchor floating left on wide viewports */}
                      <div className="sm:absolute sm:-left-32 sm:top-0 sm:w-24 sm:text-right font-mono text-sm font-bold text-amber-800">
                        {ev.year}
                      </div>

                      <div className="bg-white border border-slate-200/90 p-6 sm:p-8 hover:border-slate-400 transition-colors">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-medium">
                            {typeLabel(ev.type)}
                          </span>
                          <span className="flex items-center gap-1 font-mono text-xs text-slate-500">
                            <MapPin className="h-3 w-3 text-amber-700 shrink-0" />
                            <span>{ev.location}</span>
                          </span>
                        </div>

                        <h2 className="mt-3 font-serif text-2xl font-bold text-slate-900">
                          {ev.title}
                        </h2>

                        <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
                          {ev.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* LIST VIEW */
              <div className="border-t border-slate-900 divide-y divide-slate-200">
                {filteredEvents.map((ev, idx) => (
                  <ScrollReveal key={ev.id} delay={idx * 0.02}>
                    <article className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-2 items-start">
                      <div className="sm:col-span-2 font-mono text-sm font-bold text-amber-800 sm:pt-0.5">
                        {ev.year}
                      </div>
                      <div className="sm:col-span-6">
                        <h2 className="font-serif text-xl font-bold text-slate-900">{ev.title}</h2>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>
                      <div className="sm:col-span-4 font-mono text-xs text-slate-500 sm:text-right space-y-1">
                        <div>{typeLabel(ev.type)}</div>
                        <div className="text-slate-600 truncate">{ev.location}</div>
                      </div>
                    </article>
                  </ScrollReveal>
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
