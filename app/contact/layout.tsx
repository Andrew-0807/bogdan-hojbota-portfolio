import type React from "react"
import { pageMetadata } from "@/lib/seo"

// The page itself is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Contact atelier",
  description:
    "Contactați atelierul sculptorului Bogdan Severin Hojbotă pentru o lucrare monumentală, un bust comemorativ, o piesă de atelier sau un trofeu metalic unicat.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
