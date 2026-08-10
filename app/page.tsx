import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import { ARTIST_INFO, ARTWORKS, COMMISSION_SERVICES } from "@/lib/data/artist-data"
import { Mail, ArrowRight, ArrowUpRight, MapPin } from "lucide-react"

const RECORD = [
  { value: "45+", label: "Ani de activitate artistică" },
  { value: "100+", label: "Expoziții naționale și internaționale" },
  { value: "20+", label: "Simpozioane de sculptură monumentală" },
  { value: "8+", label: "Premii și distincții majore" },
]

export default function HomePage() {
  const featuredArtworks = ARTWORKS.filter((art) => art.featured)

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO — the work first, the claim second */}
        <section className="relative border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="@container order-2 lg:order-1 lg:col-span-7 pt-10 pb-12 lg:py-28 flex flex-col">
                <ScrollReveal>
                  {/* Sized to its column, not the viewport: the hard break is gone so
                      `text-wrap: balance` can set the ragging itself. */}
                  <h1 className="font-serif text-[clamp(2.5rem,12cqw,5.5rem)] font-bold text-slate-900">
                    Modelând metalul în semnificație
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.08}>
                  <span className="edge-mark mt-8" />
                  <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed">
                    Portofoliul oficial al sculptorului{" "}
                    <strong className="text-slate-900 font-semibold">{ARTIST_INFO.name}</strong>.
                    Patru decenii de creație monumentală nonfigurativă în oțel inoxidabil, bronz
                    turnat, piatră și monumente de for public.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.16}>
                  <div className="flex flex-wrap items-stretch gap-3 mt-10">
                    <Link
                      href="/contact"
                      className="group h-12 pl-6 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-4 transition-colors"
                    >
                      <span>Contactează atelierul</span>
                      <span className="w-10 h-10 bg-amber-700 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>

                    <Link
                      href="/galerie"
                      className="h-12 px-6 border border-slate-400 hover:border-slate-900 text-slate-800 hover:text-slate-900 font-semibold text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-3 transition-colors"
                    >
                      <span>Explorează portofoliul</span>
                      <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                    </Link>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.24}>
                  <dl className="mt-12 pt-8 border-t border-slate-200 grid gap-x-10 gap-y-4 sm:grid-cols-2 text-xs">
                    <div className="flex flex-col gap-1">
                      <dt className="uppercase tracking-[0.16em] text-[10px] text-slate-500">
                        Afiliere
                      </dt>
                      <dd className="text-slate-800">
                        UAPR Arte Decorative · Prof. univ. dr., UNArte București
                      </dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="uppercase tracking-[0.16em] text-[10px] text-slate-500">
                        Contact direct
                      </dt>
                      <dd className="font-mono">
                        <a
                          href={`mailto:${ARTIST_INFO.email}`}
                          className="inline-flex items-center gap-2 py-1.5 text-slate-800 hover:text-amber-800 transition-colors"
                        >
                          <Mail className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                          <span className="break-words">{ARTIST_INFO.email}</span>
                        </a>
                      </dd>
                    </div>
                  </dl>
                </ScrollReveal>
              </div>

              {/* Held inside the container gutter and topped out with the text
                  column, so the plate reads as a mounted work rather than a
                  bleed. Its own aspect ratio sets the height; nothing stretches. */}
              <div className="order-1 lg:order-2 lg:col-span-5 pt-8 lg:pt-28">
                <Link href="/galerie/strajer-al-apelor" className="group block">
                  <figure className="flex flex-col">
                    {/* Square frame because the source is 1024×1024: any other
                        ratio is object-cover eating the sculpture's edges. */}
                    <div className="specular relative aspect-square bg-slate-100">
                      <Image
                        src="/industrial-metal-sculpture-welded-steel.jpg"
                        alt="Străjer al Apelor: figură tutelară nonfigurativă din foi tectonice de oțel sudat, cu linii de forță verticale și goluri prin care trece aerul."
                        fill
                        sizes="(min-width: 1024px) 38vw, 100vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <figcaption className="py-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-slate-200 lg:border-b-0">
                      <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        Străjer al Apelor
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">
                        2022 · oțel fasonat și sudat · Buzău
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PLIN — the one solid mass on the page, against everything else's void */}
        <section className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
            <ScrollReveal>
              <blockquote className="max-w-4xl">
                <p className="font-serif text-[clamp(1.75rem,4.5vw,3.25rem)] font-light leading-[1.15] text-white max-w-none">
                  {ARTIST_INFO.quote}
                </p>
                <footer className="mt-10 flex items-center gap-5">
                  <span className="h-px w-16 bg-amber-500 shrink-0" />
                  <div className="text-[11px] uppercase tracking-[0.16em]">
                    <cite className="not-italic font-semibold text-white block">
                      {ARTIST_INFO.name}
                    </cite>
                    <span className="text-slate-400 mt-1 block normal-case tracking-normal text-xs">
                      Profesor universitar doctor, sculptor metalist
                    </span>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* CATALOGUE */}
        <section className="py-24 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 mb-12 border-b border-slate-900">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
                Opere sculpturale de referință
              </h2>
              <Link
                href="/galerie"
                className="text-[11px] uppercase tracking-[0.14em] font-semibold text-amber-800 hover:text-slate-900 transition-colors flex items-center gap-2 shrink-0"
              >
                <span>Catalogul complet · {ARTWORKS.length}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {featuredArtworks.map((art, idx) => (
                <ScrollReveal key={art.id} delay={idx * 0.06}>
                  <Link href={`/galerie/${art.id}`} className="group flex flex-col h-full">
                    <div className="specular relative aspect-[4/3] bg-slate-100 border border-slate-200 group-hover:border-slate-400 transition-colors">
                      <Image
                        src={art.image_url}
                        alt={art.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="pt-5 flex flex-col flex-1">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        {art.title}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] text-slate-500">
                        {art.year} · {art.materials} · {art.dimensions}
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
                          <span>Detalii</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMMISSIONS — a register of work accepted, not four identical tiles */}
        <section className="py-24 sm:py-28 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl pb-8 mb-4 border-b border-slate-900">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
                Comisii sculpturale
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Prof. dr. Bogdan Severin Hojbotă preia comisii private, monumente de for public,
                busturi memoriale și trofee corporative.
              </p>
            </div>

            <dl className="divide-y divide-slate-200">
              {COMMISSION_SERVICES.map((serv, idx) => (
                <ScrollReveal key={serv.id} delay={idx * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-8">
                    <dt className="md:col-span-4 font-serif text-2xl font-bold text-slate-900">
                      {serv.title}
                    </dt>
                    <dd className="md:col-span-5 text-sm text-slate-600 leading-relaxed">
                      {serv.description}
                    </dd>
                    <dd className="md:col-span-3 font-mono text-[11px] text-slate-500 space-y-1.5">
                      {serv.examples.map((ex, i) => (
                        <span key={i} className="block">
                          {ex}
                        </span>
                      ))}
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>

            <div className="mt-16 bg-slate-50 border border-slate-200 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h3 className="font-serif text-3xl font-bold text-slate-900">
                  Discutăm direct despre proiect?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Scrieți-ne pentru a stabili detaliile tehnice ale lucrării.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`mailto:${ARTIST_INFO.email}`}
                  className="h-12 px-6 border border-slate-400 hover:border-slate-900 text-slate-900 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="h-4 w-4 text-amber-700" />
                  <span>{ARTIST_INFO.email}</span>
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
            </div>
          </div>
        </section>

        {/* RECORD */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-slate-900">
              {RECORD.map((item) => (
                <div
                  key={item.label}
                  className="py-8 pr-6 border-b border-slate-200 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0"
                >
                  <dt className="font-serif text-5xl font-bold text-slate-900">{item.value}</dt>
                  <dd className="mt-2 text-xs text-slate-600 leading-relaxed max-w-[22ch]">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
