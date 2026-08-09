"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ScrollReveal from "@/components/scroll-reveal"
import { ARTIST_INFO } from "@/lib/data/artist-data"
import { Phone, Mail, ArrowUpRight } from "lucide-react"

const INQUIRY_TYPES = [
  { value: "commission_monumental", label: "Sculptură monumentală și spațiu public" },
  { value: "commission_bust", label: "Bust comemorativ / portret în bronz" },
  { value: "commission_atelier", label: "Sculptură de atelier / colecție privată" },
  { value: "commission_trophy", label: "Trofeu metalic comisionat" },
  { value: "general", label: "Solicitare generală / invitație la expoziție" },
]

const fieldClass =
  "h-11 bg-white border-slate-300 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:ring-0"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [inquiryType, setInquiryType] = useState<string>("commission_monumental")
  const [message, setMessage] = useState("")
  const [opened, setOpened] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const label = INQUIRY_TYPES.find((t) => t.value === inquiryType)?.label ?? inquiryType
    const subject = encodeURIComponent(`Solicitare website: ${label} — ${name}`)
    const body = encodeURIComponent(
      `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone || "nespecificat"}\nTip solicitare: ${label}\n\nMesaj:\n${message}`,
    )

    window.location.href = `mailto:${ARTIST_INFO.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-slate-900">Contact</h1>
              <span className="edge-mark mt-7" />
              <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                Pentru o sculptură monumentală, un bust omagial, o piesă de atelier sau un trofeu
                metalic unicat: apelați direct sau completați formularul de mai jos.
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
                  Legătură directă
                </h2>

                <dl className="text-sm">
                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Telefon
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${ARTIST_INFO.phone}`}
                        className="font-mono text-lg text-slate-900 hover:text-amber-800 transition-colors inline-flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4 text-amber-700" />
                        <span>{ARTIST_INFO.phone}</span>
                      </a>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Pentru consultanță rapidă privind o comisie sau disponibilitatea lucrărilor
                        de atelier.
                      </p>
                    </dd>
                  </div>

                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Email</dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${ARTIST_INFO.email}`}
                        className="font-mono text-sm text-slate-900 hover:text-amber-800 transition-colors inline-flex items-center gap-2 break-all"
                      >
                        <Mail className="h-4 w-4 text-amber-700 shrink-0" />
                        <span>{ARTIST_INFO.email}</span>
                      </a>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        Pentru detalii tehnice, schițe sau caiete de sarcini.
                      </p>
                    </dd>
                  </div>

                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Atelier
                    </dt>
                    <dd className="mt-2 text-slate-800">{ARTIST_INFO.location}</dd>
                  </div>

                  <div className="py-5 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      Timp de răspuns
                    </dt>
                    <dd className="mt-2 text-slate-800">
                      Mesajele sunt verificate zilnic; răspunsul vine de regulă în 24–48 de ore.
                    </dd>
                  </div>
                </dl>
              </ScrollReveal>

              {/* FORM */}
              <ScrollReveal delay={0.08} className="lg:col-span-8">
                <h2 className="font-serif text-3xl font-bold text-slate-900 pb-5 border-b border-slate-900">
                  Formular de solicitare
                </h2>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  Câmpurile de mai jos compun un mesaj structurat pe care îl deschidem în aplicația
                  dumneavoastră de email, gata de trimis.
                </p>

                {opened && (
                  <div
                    role="status"
                    className="mt-6 bg-slate-900 text-white p-5 flex items-start gap-4"
                  >
                    <span className="h-px w-8 bg-amber-500 shrink-0 mt-3" />
                    <div className="text-sm">
                      <strong className="block font-semibold">Mesajul este pregătit.</strong>
                      <span className="text-slate-300 mt-1 block">
                        Aplicația de email s-a deschis cu mesajul precompletat. Dacă nu s-a deschis,
                        scrieți direct la{" "}
                        <a
                          href={`mailto:${ARTIST_INFO.email}`}
                          className="text-white underline underline-offset-4 break-all"
                        >
                          {ARTIST_INFO.email}
                        </a>
                        .
                      </span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
                        Nume *
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete="name"
                        placeholder="Popescu Ion"
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        placeholder="nume@domeniu.ro"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
                        Telefon (opțional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder="07xx xxx xxx"
                        className={`${fieldClass} font-mono`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type" className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
                        Tipul solicitării *
                      </Label>
                      <Select value={inquiryType} onValueChange={setInquiryType}>
                        <SelectTrigger id="inquiry-type" className={`${fieldClass} w-full`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-300 text-slate-800 text-sm">
                          {INQUIRY_TYPES.map((t) => (
                            <SelectItem key={t.value} value={t.value}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
                      Detaliile proiectului *
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Descrieți pe scurt proiectul, dimensiunile dorite, materialul (inox, bronz, piatră) sau întrebarea dumneavoastră."
                      rows={6}
                      className="bg-white border-slate-300 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-slate-900 focus-visible:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group h-12 w-full sm:w-auto pl-6 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>Deschide mesajul în email</span>
                    <span className="w-10 h-10 bg-amber-700 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
