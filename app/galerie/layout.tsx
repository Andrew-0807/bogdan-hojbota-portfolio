import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Portofoliu de sculptură",
  description:
    "Catalogul complet al lucrărilor lui Bogdan Severin Hojbotă: monumente de for public, busturi în bronz, piese de atelier în inox și trofee metalice.",
  path: "/galerie",
})

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children
}
