"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, LayoutList, Baseline as Timeline } from "lucide-react"
import Image from "next/image"
import type { Event } from "@/lib/types"

export default function TimelinePage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"list" | "timeline">("timeline")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchEvents() {
      const supabase = createClient()
      const { data, error } = await supabase.from("events").select("*").order("start_date", { ascending: false })

      if (data && !error) {
        setEvents(data)
        setFilteredEvents(data)
      }
      setIsLoading(false)
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    if (typeFilter === "all") {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((event) => event.type === typeFilter))
    }
  }, [typeFilter, events])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "solo_exhibition":
        return "Solo Exhibition"
      case "group_show":
        return "Group Show"
      case "public_commission":
        return "Public Commission"
      default:
        return type
    }
  }

  const getTypeBadgeVariant = (type: string): "default" | "secondary" | "outline" => {
    switch (type) {
      case "solo_exhibition":
        return "default"
      case "group_show":
        return "secondary"
      case "public_commission":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 bg-muted/30 border-b">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-5xl font-bold mb-4">Events & Exhibitions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A chronicle of exhibitions, commissions, and public presentations spanning a distinguished career in metal
              arts.
            </p>
          </div>
        </section>

        <section className="py-8 bg-background sticky top-16 z-40 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button variant={typeFilter === "all" ? "default" : "outline"} onClick={() => setTypeFilter("all")}>
                  All Events
                </Button>
                <Button
                  variant={typeFilter === "solo_exhibition" ? "default" : "outline"}
                  onClick={() => setTypeFilter("solo_exhibition")}
                >
                  Solo Exhibitions
                </Button>
                <Button
                  variant={typeFilter === "group_show" ? "default" : "outline"}
                  onClick={() => setTypeFilter("group_show")}
                >
                  Group Shows
                </Button>
                <Button
                  variant={typeFilter === "public_commission" ? "default" : "outline"}
                  onClick={() => setTypeFilter("public_commission")}
                >
                  Commissions
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "timeline" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("timeline")}
                  title="Timeline View"
                >
                  <Timeline className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  title="List View"
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading events...</p>
              </div>
            ) : filteredEvents.length > 0 ? (
              viewMode === "list" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEvents.map((event) => (
                    <Card key={event.id}>
                      {event.image_url && (
                        <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                          <Image
                            src={event.image_url || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="font-serif text-2xl">{event.title}</CardTitle>
                          <Badge variant={getTypeBadgeVariant(event.type)}>{getTypeLabel(event.type)}</Badge>
                        </div>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(event.start_date)}
                              {event.end_date && ` - ${formatDate(event.end_date)}`}
                            </span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </CardDescription>
                      </CardHeader>
                      {event.description && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
                  <div className="space-y-8">
                    {filteredEvents.map((event, index) => (
                      <div key={event.id} className="relative pl-20">
                        <div className="absolute left-0 w-16 h-16 bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {new Date(event.start_date).getFullYear()}
                        </div>
                        <Card>
                          <CardHeader>
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <CardTitle className="font-serif text-2xl">{event.title}</CardTitle>
                              <Badge variant={getTypeBadgeVariant(event.type)}>{getTypeLabel(event.type)}</Badge>
                            </div>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {formatDate(event.start_date)}
                                  {event.end_date && ` - ${formatDate(event.end_date)}`}
                                </span>
                              </div>
                              {event.location && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{event.location}</span>
                                </div>
                              )}
                            </CardDescription>
                          </CardHeader>
                          {(event.description || event.image_url) && (
                            <CardContent>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {event.description && (
                                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                                )}
                                {event.image_url && (
                                  <div className="aspect-video relative overflow-hidden bg-muted">
                                    <Image
                                      src={event.image_url || "/placeholder.svg"}
                                      alt={event.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
