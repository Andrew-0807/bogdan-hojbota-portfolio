import { ProfilContent } from "@/components/profil-content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Profil și biografie",
  description:
    "Biografia sculptorului Bogdan Severin Hojbotă (n. 1954): cariera didactică la UNArte, principiile sculpturii nonfigurative în metal și premiile primite.",
  path: "/profil",
  image: "/images/bogdan-hojbota-profile.png",
  imageAlt: "Portret de atelier al sculptorului Bogdan Severin Hojbotă",
})

export default function ProfilPage() {
  return <ProfilContent />
}
