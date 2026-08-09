"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import type { Artwork } from "@/lib/types"

export default function GalleryPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchArtworks() {
      const supabase = createClient()
      const { data, error } = await supabase.from("artworks").select("*").order("year", { ascending: false })

      if (data && !error) {
        setArtworks(data)
        setFilteredArtworks(data)

        // Extract unique categories
        const uniqueCategories = Array.from(new Set(data.map((a) => a.category)))
        setCategories(uniqueCategories)
      }
      setIsLoading(false)
    }

    fetchArtworks()
  }, [])

  useEffect(() => {
    let filtered = artworks

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter((artwork) => artwork.category === categoryFilter)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artwork.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artwork.narrative?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredArtworks(filtered)
  }, [searchQuery, categoryFilter, artworks])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 bg-muted/30 border-b">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore a comprehensive collection of metal sculptures spanning decades of creative practice and technical
              innovation.
            </p>
          </div>
        </section>

        <section className="py-8 bg-background sticky top-16 z-40 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading artworks...</p>
              </div>
            ) : filteredArtworks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((artwork) => (
                  <Link href={`/gallery/${artwork.id}`} key={artwork.id}>
                    <Card className="group overflow-hidden hover:transition-shadow">
                      <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                        <Image
                          src={artwork.image_url || "/placeholder.svg"}
                          alt={artwork.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-semibold mb-2">{artwork.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{artwork.year}</p>
                        <p className="text-sm text-muted-foreground">{artwork.materials}</p>
                        {artwork.category && (
                          <span className="inline-block mt-3 text-xs px-2 py-1 bg-muted rounded">
                            {artwork.category}
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No artworks found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
