"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { getArtistInfo, getAwards } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { Mail, ArrowUpRight } from "lucide-react"

export function ProfilContent() {
  const { language, t } = useLanguage()
  const artistInfo = getArtistInfo(language)
  const awards = getAwards(language)

  const principles = [
    {
      title: t("profile_p1_title"),
      body: t("profile_p1_body"),
    },
    {
      title: t("profile_p2_title"),
      body: t("profile_p2_body"),
    },
    {
      title: t("profile_p3_title"),
      body: t("profile_p3_body"),
    },
  ]

  const recognition = [
    { value: "100+", label: t("profile_r1_label") },
    { value: "40+", label: t("profile_r2_label") },
    { value: "20+", label: t("profile_r3_label") },
    { value: "UAPR", label: t("profile_r4_label") },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-600 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO PROFILE SECTION */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12 items-start">
              <ScrollReveal className="lg:col-span-5">
                <figure>
                  <div className="relative aspect-[3/4] bg-slate-100 border border-slate-200">
                    <Image
                      src="/images/bogdan-hojbota-profile.png"
                      alt={`Portret de atelier: ${artistInfo.name}`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="pt-3 font-mono text-[11px] text-slate-500">
                    {t("profile_caption")}
                  </figcaption>
                </figure>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-7">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
                  {artistInfo.name}
                </h1>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-amber-800 font-semibold">
                  {t("profile_sub")}
                </p>

                <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {artistInfo.summaryBio}
                </p>

                <dl className="mt-10 border-t border-slate-900 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5 font-semibold">
                      {t("profile_studies_label")}
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">
                      {t("profile_studies_val")}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5 font-semibold">
                      {t("profile_phd_label")}
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">
                      {t("profile_phd_val")}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5 font-semibold">
                      {t("profile_pedagogy_label")}
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">
                      {t("profile_pedagogy_val")}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  {/* Email until a real telephone number exists: artistInfo.phone
                      is still a placeholder and a dead tel: costs a commission. */}
                  <a
                    href={`mailto:${artistInfo.email}`}
                    className="h-12 px-6 border border-slate-300 hover:border-slate-900 text-slate-900 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-amber-700" />
                    <span>{artistInfo.email}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="group h-12 pl-6 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{t("commissions_send_msg")}</span>
                    <span className="w-10 h-10 bg-amber-700 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="max-w-4xl">
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
                  {t("profile_philosophy_heading")}
                </h2>
                <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {artistInfo.fullPhilosophy}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mt-16">
                {principles.map((pr) => (
                  <div key={pr.title} className="border-t border-slate-900 pt-5">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">{pr.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{pr.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 pb-8 border-b border-slate-900">
              {t("profile_recognition_heading")}
            </h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {recognition.map((item) => (
                <div
                  key={item.label}
                  className="py-8 pr-6 border-b border-slate-200 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-8 lg:first:pl-0"
                >
                  <dt className="font-serif text-5xl font-bold text-slate-900">{item.value}</dt>
                  <dd className="mt-2 text-xs text-slate-600 leading-relaxed max-w-[24ch]">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* AWARDS LEDGER */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 pb-8 border-b border-slate-900">
              {t("profile_awards_heading")}
            </h2>

            <dl className="divide-y divide-slate-200">
              {awards.map((award, idx) => (
                <ScrollReveal
                  key={award.id}
                  delay={Math.min(idx, 6) * 0.04}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1.5 py-6"
                >
                  <dt className="sm:col-span-2 font-mono text-sm text-amber-800 sm:pt-1.5 font-medium">
                    {award.year}
                  </dt>
                  <dd className="sm:col-span-10">
                    <h3 className="font-serif text-xl font-bold text-slate-900">{award.title}</h3>
                    <p className="mt-1 font-mono text-xs text-slate-500">{award.institution}</p>
                    {award.description && (
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed max-w-2xl">
                        {award.description}
                      </p>
                    )}
                  </dd>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
