import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import ScrollReveal from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { ARTIST_INFO, AWARDS } from "@/lib/data/artist-data"
import { Phone, ArrowUpRight } from "lucide-react"

const PRINCIPLES = [
  {
    title: "Poli-muzicalitate",
    body: "Limbajul vizual se construiește pe contrapunctul dintre plin și gol, generând o continuitate spațială apropiată de polifonie.",
  },
  {
    title: "Fluiditate metalică",
    body: "Deși lucrează cu materiale grele — oțel, inox, bronz — autorul le imprimă lejeritate și aspirație spre verticalitate.",
  },
  {
    title: "Jocul luminii",
    body: "Suprafețele polizate și patinate reflectă și fracționează mediul ambiant, transformând sculptura într-un obiect dinamic.",
  },
]

const RECOGNITION = [
  { value: "100+", label: "Expoziții naționale și internaționale" },
  { value: "40+", label: "Ani de carieră academică la UNArte" },
  { value: "20+", label: "Simpozioane de sculptură monumentală" },
  { value: "UAPR", label: "Președinte de filială, fost vicepreședinte" },
]

export default function ProfilPage() {
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
                      alt={`Portret de atelier: ${ARTIST_INFO.name}`}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="pt-3 font-mono text-[11px] text-slate-500">
                    Fotografie de atelier
                  </figcaption>
                </figure>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="lg:col-span-7">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
                  {ARTIST_INFO.name}
                </h1>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-amber-800">
                  Sculptor metalist · Profesor universitar dr. · Președinte UAPR Arte Decorative
                </p>

                <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {ARTIST_INFO.summaryBio}
                </p>

                <dl className="mt-10 border-t border-slate-900 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5">
                      Studii
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">
                      Institutul de Arte Plastice „Nicolae Grigorescu”, 1978
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5">
                      Doctorat
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">Doctor în arte vizuale, 2006</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-slate-200">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:pt-0.5">
                      Pedagogie
                    </dt>
                    <dd className="sm:col-span-2 text-slate-800">
                      UNArte București, specializarea Metal
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <a
                    href={`tel:${ARTIST_INFO.phone}`}
                    className="h-12 px-6 border border-slate-300 hover:border-slate-900 text-slate-900 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-amber-700" />
                    <span>{ARTIST_INFO.phone}</span>
                  </a>

                  <Link
                    href="/contact"
                    className="group h-12 pl-6 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>Trimite un mesaj</span>
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
                  Metalul ca mijloc expresiv nonfigurativ
                </h2>
                <p className="mt-7 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {ARTIST_INFO.fullPhilosophy}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 mt-16">
                {PRINCIPLES.map((pr) => (
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
              Realizări instituționale
            </h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {RECOGNITION.map((item) => (
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
              Premii și distincții
            </h2>

            <dl className="divide-y divide-slate-200">
              {AWARDS.map((award, idx) => (
                <ScrollReveal key={award.id} delay={Math.min(idx, 6) * 0.04}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1.5 py-6">
                    <dt className="sm:col-span-2 font-mono text-sm text-amber-800 sm:pt-1.5">
                      {award.year}
                    </dt>
                    <dd className="sm:col-span-10">
                      <h3 className="font-serif text-xl font-bold text-slate-900">{award.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{award.institution}</p>
                      {award.description && (
                        <p className="mt-1.5 font-mono text-[11px] text-slate-500">
                          {award.description}
                        </p>
                      )}
                    </dd>
                  </div>
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
