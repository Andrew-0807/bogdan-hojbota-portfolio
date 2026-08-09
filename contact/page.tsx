"use client"

import type React from "react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ScrollReveal from "@/components/scroll-reveal"
import { ARTIST_INFO } from "@/lib/data/artist-data"
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [inquiryType, setInquiryType] = useState<string>("commission_monumental")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct mailto link as fallback so message opens directly in mail client
    const mailtoSubject = encodeURIComponent(`Solicitare Website: ${inquiryType} - ${name}`)
    const mailtoBody = encodeURIComponent(
      `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone || "Nespecificat"}\nTip solicitare: ${inquiryType}\n\nMesaj:\n${message}`,
    )

    setTimeout(() => {
      window.location.href = `mailto:${ARTIST_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`
      setSuccess(true)
      setIsSubmitting(false)
    }, 600)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 font-sans selection:bg-amber-600 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HEADER HERO */}
        <section className="relative py-16 sm:py-20 border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Ia Legătura cu Sculptorul
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Interesat să comanzi o sculptură monumentală, un bust omagial, o piesă de atelier sau un trofeu metalic custom? Apelează direct la telefon sau trimite un mesaj prin formular.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* DIRECT CONTACT CARDS */}
              <div className="lg:col-span-5 space-y-6">
                <ScrollReveal>
                  <div className="gallery-card space-y-4">
                    <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-amber-700" />
                      <span>Contact Telefonic Direct</span>
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Pentru consultanță rapidă privind comisii sculpturale sau disponibilitatea lucrărilor de atelier:
                    </p>
                    <a
                      href={`tel:${ARTIST_INFO.phone}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-slate-900 text-white font-mono text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      <Phone className="h-4 w-4 text-amber-400" />
                      <span>{ARTIST_INFO.phone}</span>
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="gallery-card space-y-4">
                    <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-amber-700" />
                      <span>Adresă Email Oficială</span>
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Trimiteți detalii tehnice, schițe sau caiete de sarcini direct la:
                    </p>
                    <a
                      href={`mailto:${ARTIST_INFO.email}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-slate-100 border border-slate-200 text-slate-800 hover:text-amber-700 text-xs font-semibold transition-colors"
                    >
                      <Mail className="h-4 w-4 text-amber-700" />
                      <span>{ARTIST_INFO.email}</span>
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="gallery-card space-y-3 text-xs text-slate-600 font-normal">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Atelier & Locație:</strong>
                        <span>{ARTIST_INFO.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                      <Clock className="h-4 w-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Timp de Răspuns:</strong>
                        <span>Mesajele transmise sunt verificate zilnic. Răspunsul este oferit de regulă în 24-48 ore.</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* EMAIL FORM CARD */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={0.1}>
                  <div className="gallery-card p-6 sm:p-8 space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                        Formular de Transmitere Mesaj / Solicitare
                      </h2>
                      <p className="text-xs text-slate-600 font-normal">
                        Completează câmpurile de mai jos pentru a genera un mesaj structurat direct către sculptor.
                      </p>
                    </div>

                    {success && (
                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-emerald-900 font-semibold mb-0.5">Mesajul a fost pregătit!</strong>
                          <span>Aplicația dumneavoastră de email s-a deschis cu mesajul presetat. Trimiteți direct la <strong>{ARTIST_INFO.email}</strong>.</span>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs text-slate-700 font-semibold">Numele Dumneavoastră *</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="ex: Popescu Ion"
                            className="bg-slate-50 border-slate-200 text-xs text-slate-900 rounded-lg"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="email" className="text-xs text-slate-700 font-semibold">Adresă Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="email@domeniu.ro"
                            className="bg-slate-50 border-slate-200 text-xs text-slate-900 rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-xs text-slate-700 font-semibold">Număr Telefon (Opțional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="07xx xxx xxx"
                            className="bg-slate-50 border-slate-200 text-xs text-slate-900 font-mono rounded-lg"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="inquiry-type" className="text-xs text-slate-700 font-semibold">Tipul Solicitării *</Label>
                          <Select value={inquiryType} onValueChange={setInquiryType}>
                            <SelectTrigger id="inquiry-type" className="bg-slate-50 border-slate-200 text-xs text-slate-900 rounded-lg">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-slate-200 text-slate-800 text-xs">
                              <SelectItem value="commission_monumental">Sculptură Monumentală & Spațiu Public</SelectItem>
                              <SelectItem value="commission_bust">Bust Comemorativ / Portret Bronz</SelectItem>
                              <SelectItem value="commission_atelier">Sculptură de Atelier / Colecție Privată</SelectItem>
                              <SelectItem value="commission_trophy">Trofeu Metalic Comisionat</SelectItem>
                              <SelectItem value="general">Solicitare Generală / Invitație Expoziție</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message" className="text-xs text-slate-700 font-semibold">Detaliile Mesajului sau Proiectului *</Label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          placeholder="Descrieți scurt proiectul, dimensiunile dorite, materialele (inox, bronz, piatră) sau întrebarea dumneavoastră..."
                          rows={5}
                          className="bg-slate-50 border-slate-200 text-xs text-slate-900 rounded-lg"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-full shadow-md"
                      >
                        {isSubmitting ? (
                          <span>Se trimite...</span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="h-4 w-4" />
                            <span>Trimite Solicitare prin Email</span>
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
