"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { ARTIST_INFO } from "@/lib/data/artist-data"
import { useLanguage } from "@/lib/context/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    { href: "/", label: t("nav_home") },
    { href: "/profil", label: t("nav_profile") },
    { href: "/galerie", label: t("nav_portfolio") },
    { href: "/cronologie", label: t("nav_timeline") },
    { href: "/contact", label: t("nav_contact") },
  ]

  return (
    /* Architrave, not a floating pill: a flush rail closed by one hairline. */
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Maker's stamp */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-sm tracking-tight group-hover:bg-amber-700 transition-colors">
              BH
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base font-bold tracking-tight text-slate-900 group-hover:text-amber-800 transition-colors">
                {ARTIST_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-medium mt-1 hidden sm:inline-block">
                {t("header_artist_role")}
              </span>
            </div>
          </Link>

          <nav aria-label="Principal" className="hidden xl:flex items-center gap-7">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors relative py-5",
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navEdge"
                      className="absolute left-0 right-0 h-px bg-amber-700 bottom-4"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`mailto:${ARTIST_INFO.email}`}
              className="hidden 2xl:flex items-center gap-2 text-[11px] text-slate-600 hover:text-amber-800 transition-colors font-mono"
            >
              <Mail className="h-3.5 w-3.5 text-amber-700" />
              <span>{ARTIST_INFO.email}</span>
            </a>

            <LanguageToggle />
            <ThemeToggle />

            <Link
              href="/contact"
              className="group h-9 pl-4 pr-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] uppercase tracking-[0.12em] flex items-center gap-3 transition-colors"
            >
              <span>{t("header_contact_btn")}</span>
              <span className="w-7 h-7 bg-amber-700 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t("header_close_menu") : t("header_open_menu")}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <button
            className="hidden sm:block xl:hidden -mr-2 p-2 text-slate-700 hover:text-slate-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t("header_close_menu") : t("header_open_menu")}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6 space-y-6">
              <div className="divide-y divide-slate-100 border-y border-slate-100">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between px-1 py-4 text-xs uppercase tracking-[0.12em] font-semibold transition-colors",
                      pathname === link.href
                        ? "text-slate-900"
                        : "text-slate-500 hover:text-slate-900",
                    )}
                  >
                    <span>{link.label}</span>
                    {pathname === link.href && <span className="h-px w-8 bg-amber-700" />}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${ARTIST_INFO.email}`}
                  className="flex items-center justify-center gap-2 w-full h-12 border border-slate-400 text-slate-800 text-xs font-mono"
                >
                  <Mail className="h-4 w-4 text-amber-700" />
                  <span>{ARTIST_INFO.email}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full h-12 bg-slate-900 text-white font-semibold text-xs uppercase tracking-[0.12em]"
                >
                  <span>{t("commissions_send_msg")}</span>
                  <ArrowUpRight className="h-4 w-4 text-amber-400" />
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
