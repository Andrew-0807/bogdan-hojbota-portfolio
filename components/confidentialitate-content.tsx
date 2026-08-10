"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { useLanguage } from "@/lib/context/language-context"

export function ConfidentialitateContent() {
  const { t } = useLanguage()

  const sections = [
    {
      heading: t("privacy_sec1_title"),
      body: t("privacy_sec1_body"),
    },
    {
      heading: t("privacy_sec2_title"),
      body: t("privacy_sec2_body"),
    },
    {
      heading: t("privacy_sec3_title"),
      body: t("privacy_sec3_body"),
    },
    {
      heading: t("privacy_sec4_title"),
      body: t("privacy_sec4_body"),
    },
    {
      heading: t("privacy_sec5_title"),
      body: t("privacy_sec5_body"),
    },
    {
      heading: t("privacy_sec6_title"),
      body: t("privacy_sec6_body"),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">
                {t("privacy_heading")}
              </h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                {t("privacy_sub")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              {sections.map((section) => (
                <article key={section.heading} className="py-8 border-b border-slate-200">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {section.body}
                  </p>
                </article>
              ))}

              <p className="mt-10 font-mono text-[11px] text-slate-500">
                {t("privacy_updated")} ·{" "}
                <Link href="/contact" className="underline underline-offset-4 hover:text-slate-900">
                  {t("nav_contact")}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
