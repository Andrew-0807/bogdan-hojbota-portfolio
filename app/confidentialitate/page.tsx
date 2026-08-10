import { ConfidentialitateContent } from "@/components/confidentialitate-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Politica de confidențialitate",
  description:
    "Cum sunt tratate datele pe site-ul sculptorului Bogdan Severin Hojbotă: formularul de contact nu trimite date către server, iar statisticile sunt anonime.",
  path: "/confidentialitate",
})

export default function ConfidentialitatePage() {
  return <ConfidentialitateContent />
}
