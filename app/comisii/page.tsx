import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"
import { ARTIST_INFO, COMMISSION_SERVICES } from "@/lib/data/artist-data"
import { Phone, ArrowRight, ArrowUpRight } from "lucide-react"

// The sequence itself is the information here: a commission runs in this order.
const PROCESS = [
  {
    step: "01",
    title: "Consultanță și schiță",
    body: "Discuție directă (telefon, email sau întâlnire la atelier) pentru stabilirea ideii, a dimensiunilor, a stilului și a materialului: inox, bronz sau piatră.",
  },
  {
    step: "02",
    title: "Modelare și prelucrare",
    body: "Execuția machetei, debitarea și sudura foilor de oțel ori inox, sau modelajul în lut și turnarea în bronz patinat, în atelier.",
  },
  {
    step: "03",
    title: "Finisaj și montaj",
    body: "Polisarea suprafețelor, brunarea sau patinarea finală și montajul pe soclu ori în amplasamentul ambiental dedicat.",
  },
]

export default function ComisiiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900">
                  Comandă o sculptură
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <span className="edge-mark mt-8" />
                <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
                  Prof. univ. dr. Bogdan Severin Hojbotă realizează lucrări unicat la comandă:
                  monumente de for public din oțel inoxidabil și bronz, busturi omagiale pe soclu,
                  piese de atelier pentru colecționari și trofee metalice de prestigiu corporativ.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <a
                    href={`tel:${ARTIST_INFO.phone}`}
                    className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-center gap-3 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-amber-400" />
                    <span>{ARTIST_INFO.phone}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="group h-12 pl-6 pr-1 border border-slate-300 hover:border-slate-900 text-slate-800 font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>Trimite o solicitare</span>
                    <span className="w-10 h-10 bg-amber-700 text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 pb-8 border-b border-slate-900">
              Tipologii de lucrare
            </h2>

            <div className="divide-y divide-slate-200">
              {COMMISSION_SERVICES.map((serv, idx) => (
                <ScrollReveal key={serv.id} delay={idx * 0.06}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-5 py-10">
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-3xl font-bold text-slate-900">{serv.title}</h3>
                      <Link
                        href={`/contact?type=${serv.id}`}
                        className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-amber-800 hover:text-slate-900 transition-colors group"
                      >
                        <span>Solicită detalii</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <p className="md:col-span-5 text-sm text-slate-600 leading-relaxed">
                      {serv.description}
                    </p>

                    <ul className="md:col-span-3 font-mono text-[11px] text-slate-500 space-y-2">
                      {serv.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 pb-8 border-b border-slate-900">
              Cum se derulează o comisie
            </h2>

            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 pt-10">
              {PROCESS.map((p, idx) => (
                <ScrollReveal key={p.step} delay={idx * 0.08}>
                  <li className="border-t border-slate-300 pt-5">
                    <span className="font-mono text-[11px] text-amber-800 tracking-[0.14em]">
                      {p.step}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mt-3">{p.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.body}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
