import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Cronologie expozițională",
  description:
    "Peste 100 de expoziții naționale și internaționale, simpozioane de sculptură monumentală și distincții, ordonate cronologic din anii 1980 până astăzi.",
  path: "/cronologie",
})

export default function CronologieLayout({ children }: { children: React.ReactNode }) {
  return children
}
