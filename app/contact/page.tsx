"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ScrollReveal from "@/components/scroll-reveal"
import { getArtistInfo } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { Mail, ArrowUpRight } from "lucide-react"

const fieldClass =
  "h-11 bg-white border-slate-300 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:ring-0"

export default function ContactPage() {
  const { language, t } = useLanguage()
  const artistInfo = getArtistInfo(language)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [inquiryType, setInquiryType] = useState<string>("commission_monumental")
  const [message, setMessage] = useState("")
  const [opened, setOpened] = useState(false)

  const inquiryTypes = [
    { value: "commission_monumental", label: t("contact_type_monumental") },
    { value: "commission_bust", label: t("contact_type_bust") },
    { value: "commission_atelier", label: t("contact_type_atelier") },
    { value: "commission_trophy", label: t("contact_type_trophy") },
    { value: "general", label: t("contact_type_general") },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const label = inquiryTypes.find((t) => t.value === inquiryType)?.label ?? inquiryType
    const subject = encodeURIComponent(`Solicitare website: ${label} — ${name}`)
    const body = encodeURIComponent(
      `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone || "nespecificat"}\nTip solicitare: ${label}\n\nMesaj:\n${message}`,
    )

    window.location.href = `mailto:${artistInfo.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">
                {t("contact_heading")}
              </h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                {t("contact_sub")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14 items-start">
              {/* DIRECT LINES */}
              <ScrollReveal className="lg:col-span-4">
                <h2 className="font-serif text-3xl font-bold text-slate-900 pb-5 border-b border-slate-900">
                  {t("contact_direct")}
                </h2>

                <dl className="text-sm">
                  {/* The Telefon row is withheld until artistInfo.phone holds a
                      real number; a listed line that nobody answers is worse
                      than no listed line. Restore from git history. */}
                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-semibold">Email</dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${artistInfo.email}`}
                        className="font-mono text-sm text-slate-900 hover:text-amber-800 transition-colors inline-flex items-center gap-2 break-all"
                      >
                        <Mail className="h-4 w-4 text-amber-700 shrink-0" />
                        <span>{artistInfo.email}</span>
                      </a>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {t("contact_email_sub")}
                      </p>
                    </dd>
                  </div>

                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                      {t("contact_studio")}
                    </dt>
                    <dd className="mt-2 text-slate-800">{artistInfo.location}</dd>
                  </div>

                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-semibold">
                      {t("contact_response_time")}
                    </dt>
                    <dd className="mt-2 text-slate-800">
                      {t("contact_response_val")}
                    </dd>
                  </div>
                </dl>
              </ScrollReveal>

              {/* FORM */}
              <ScrollReveal delay={0.08} className="lg:col-span-8">
                <h2 className="font-serif text-3xl font-bold text-slate-900 pb-5 border-b border-slate-900">
                  {t("contact_form_heading")}
                </h2>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  {t("contact_form_sub")}
                </p>

                {opened && (
                  <div
                    role="status"
                    className="mt-6 bg-slate-900 text-white p-5 flex items-start gap-4"
                  >
                    <span className="h-px w-8 bg-amber-500 shrink-0 mt-3" />
                    <div className="text-sm">
                      <strong className="block font-semibold">{t("contact_form_status_ready")}</strong>
                      <span className="text-slate-300 mt-1 block">
                        {t("contact_form_status_sub")}
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-semibold">
                        {t("contact_field_name")}
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        placeholder={t("contact_placeholder_name")}
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-semibold">
                        {t("contact_field_email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        placeholder={t("contact_placeholder_email")}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-semibold">
                        {t("contact_field_phone")}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder={t("contact_placeholder_phone")}
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-semibold">
                        {t("contact_field_type")}
                      </Label>
                      <select
                        id="inquiryType"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className={`${fieldClass} w-full px-3 border rounded-none focus:outline-none focus:border-slate-900`}
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.14em] text-slate-600 font-semibold">
                      {t("contact_field_message")}
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      placeholder={t("contact_placeholder_message")}
                      className="bg-white border-slate-300 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-4 transition-colors"
                  >
                    <span>{t("contact_submit_btn")}</span>
                    <span className="w-8 h-8 bg-amber-700 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
