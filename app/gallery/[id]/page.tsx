import { createClient } from "@/lib/supabase/server"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default async function ArtworkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: artwork, error } = await supabase.from("artworks").select("*").eq("id", id).single()

  if (error || !artwork) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/gallery">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                <Image
                  src={artwork.image_url || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-5xl font-bold mb-6">{artwork.title}</h1>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Year</h3>
                    <p className="text-lg">{artwork.year}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Materials</h3>
                    <p className="text-lg">{artwork.materials}</p>
                  </div>

                  {artwork.dimensions && (
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Dimensions</h3>
                      <p className="text-lg">{artwork.dimensions}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Category</h3>
                    <p className="text-lg">{artwork.category}</p>
                  </div>
                </div>

                {artwork.narrative && (
                  <div className="border-t pt-8">
                    <h3 className="font-serif text-2xl font-semibold mb-4">Artist's Statement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{artwork.narrative}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
