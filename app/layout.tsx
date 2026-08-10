import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ARTIST_INFO, SITE_URL } from "@/lib/data/artist-data"
import { LanguageProvider } from "@/lib/context/language-context"
import "./globals.css"

// Engineering-neutral body voice: the "rigoare inginerească" behind the lyricism.
const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
})

// Mono carries measurement only: dimensions, dates, catalogue numbers.
const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bogdan Severin Hojbotă | Sculptor metalist, inox și bronz",
  description:
    "Portofoliul oficial de sculptură al lui Bogdan Severin Hojbotă: lucrări monumentale în inox, bronz și piatră, busturi comemorative și comisii de atelier.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: ARTIST_INFO.name,
    url: "/",
    title: "Bogdan Severin Hojbotă | Sculptor metalist, inox și bronz",
    description:
      "Portofoliul oficial de sculptură al lui Bogdan Severin Hojbotă: lucrări monumentale în inox, bronz și piatră, busturi comemorative și comisii de atelier.",
    images: [
      {
        url: "/images/artworks/strajer-al-apelor.jpg",
        width: 1000,
        height: 1000,
        alt: "Străjer al Apelor, sculptură nonfigurativă din oțel fasonat și sudat de Bogdan Severin Hojbotă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogdan Severin Hojbotă | Sculptor metalist, inox și bronz",
    description:
      "Portofoliul oficial de sculptură al lui Bogdan Severin Hojbotă: lucrări monumentale în inox, bronz și piatră.",
    images: ["/images/artworks/strajer-al-apelor.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

// Establishes authorship for the whole site: one Person node every page inherits.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: ARTIST_INFO.shortName,
  honorificPrefix: "Prof. Univ. Dr.",
  url: SITE_URL,
  image: `${SITE_URL}/images/bogdan-hojbota-profile.png`,
  jobTitle: ARTIST_INFO.title,
  description: ARTIST_INFO.summaryBio,
  birthDate: String(ARTIST_INFO.birthYear),
  email: `mailto:${ARTIST_INFO.email}`,
  // telephone omitted deliberately: ARTIST_INFO.phone is still a placeholder and
  // publishing it here would put a dead number into Google's knowledge panel.
  nationality: "Romanian",
  knowsAbout: ["Sculptură monumentală", "Artele metalului", "Inox", "Bronz", "Sculptură nonfigurativă"],
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Universitatea Națională de Arte București",
    url: "https://www.unarte.org",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "București",
    addressCountry: "RO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${plex.variable} ${cormorant.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-amber-700 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
