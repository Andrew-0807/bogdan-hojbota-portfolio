import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Prof. Univ. Dr. Bogdan Severin Hojbotă | Sculptor Metalist & Artist Vizual",
  description:
    "Portofoliul oficial și catalogul de sculptură al lui Bogdan Severin Hojbotă, sculptor specializat în artele metalului (inox, bronz, piatră) și Profesor Universitar Dr. la UNArte București.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${plex.variable} ${cormorant.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-amber-700 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
