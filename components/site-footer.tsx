import Link from "next/link"
import { ARTIST_INFO } from "@/lib/data/artist-data"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-900 bg-white text-slate-600 pt-14 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4 pb-12 border-b border-slate-200">
          {/* Col 1: Bio */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-xs">
                BH
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 leading-tight">{ARTIST_INFO.name}</h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-normal">
              Sculptor & Profesor Universitar Doctor, Președintele Filialei de Arte Decorative București UAPR.
              Specializat în sculptură monumentală din inox, bronz, piatră și cercetare conceptuală.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Navigare Rapidă
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-amber-700 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-amber-700 transition-colors">
                  Profil & Biografie
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-amber-700 transition-colors">
                  Portofoliu Sculptură
                </Link>
              </li>
              <li>
                <Link href="/cronologie" className="hover:text-amber-700 transition-colors">
                  Cronologie Expozițională
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Categorii Opere
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-normal">
              <li>Sculptură Monumentală & For Public</li>
              <li>Busturi & Portrete Comemorative</li>
              <li>Sculptură de Atelier (Inox & Bronz)</li>
              <li>Trofee & Design Metalic Comisionat</li>
              <li>Cicluri Conceptuale (Zbor, Cerc)</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-serif text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Contact Direct
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${ARTIST_INFO.email}`}
                className="flex items-center gap-2 text-slate-800 hover:text-amber-700 transition-colors group"
              >
                <Mail className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                <span className="group-hover:underline">{ARTIST_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-600">
                <MapPin className="h-3.5 w-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{ARTIST_INFO.location}</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors underline underline-offset-4"
                >
                  <span>Formular de contact</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Prof. Univ. Dr. Bogdan Severin Hojbotă. Toate drepturile rezervate.</p>
          <p className="uppercase tracking-[0.16em] text-[10px]">
            Sculptură și artele metalului · UAPR
          </p>
        </div>
      </div>
    </footer>
  )
}
