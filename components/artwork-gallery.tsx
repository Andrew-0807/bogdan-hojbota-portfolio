"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X, Images } from "lucide-react"
import { useLanguage } from "@/lib/context/language-context"

interface ArtworkGalleryProps {
  images: string[]
  title: string
  materials: string
  year: number
  location?: string
}

export function ArtworkGallery({ images, title, materials, year, location }: ArtworkGalleryProps) {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const hasMultiple = images.length > 1
  const activeImage = images[activeIndex] || images[0] || "/placeholder.jpg"

  const handleNext = useCallback(() => {
    if (!hasMultiple) return
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [hasMultiple, images.length])

  const handlePrev = useCallback(() => {
    if (!hasMultiple) return
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [hasMultiple, images.length])

  // Keyboard navigation for gallery & lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleNext, handlePrev, isLightboxOpen])

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    setTouchStartX(null)
  }

  return (
    <div className="flex flex-col w-full">
      {/* MAIN FEATURED GALLERY VIEWPORT */}
      <div 
        className="group relative aspect-[4/5] bg-slate-100 border border-slate-200 overflow-hidden specular select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={activeImage}
          alt={`${title} - Photo ${activeIndex + 1} of ${images.length}`}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-contain transition-all duration-300"
          priority
        />

        {/* Counter Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded border border-white/10 shadow-sm">
          <Images className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {language === "en"
              ? `Photo ${activeIndex + 1} of ${images.length}`
              : `Fotografia ${activeIndex + 1} din ${images.length}`}
          </span>
        </div>

        {/* Zoom Lightbox Trigger */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-3 right-3 z-10 p-2 bg-slate-900/85 hover:bg-slate-900 text-white rounded border border-white/10 backdrop-blur-md transition-transform hover:scale-105 active:scale-95 shadow-sm"
          title={language === "en" ? "Expand view" : "Mărește imaginea"}
          aria-label={language === "en" ? "Expand view" : "Mărește imaginea"}
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Navigation Arrows for Main Viewport */}
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white border border-white/15 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-md"
              aria-label={language === "en" ? "Previous photo" : "Imaginea anterioară"}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white border border-white/15 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-md"
              aria-label={language === "en" ? "Next photo" : "Imaginea următoare"}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {hasMultiple && (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
            <span>
              {language === "en" ? "Artwork Gallery Angles" : "Perspective & Detalii Sculptură"}
            </span>
            <span>
              {activeIndex + 1}/{images.length}
            </span>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300">
            {images.map((img, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={img}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative shrink-0 w-20 h-20 bg-slate-100 border transition-all duration-200 overflow-hidden ${
                    isActive
                      ? "border-amber-700 ring-2 ring-amber-700/30 scale-[0.98] shadow-sm"
                      : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${title} - Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-amber-700 pointer-events-none" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-in fade-in duration-200">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">{title}</h3>
              <p className="font-mono text-xs text-amber-400 mt-0.5">
                {year} · {materials} {location ? `· ${location}` : ""}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-slate-400 hidden sm:inline">
                {activeIndex + 1} / {images.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                aria-label={t("header_close_menu")}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image */}
          <div 
            className="relative flex-1 my-4 flex items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={activeImage}
                alt={`${title} - Fullscreen View ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Prev / Next */}
            {hasMultiple && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white border border-slate-700 transition-all hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-slate-900/80 hover:bg-amber-600 text-white border border-slate-700 transition-all hover:scale-110 active:scale-95 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Bottom Strip */}
          {hasMultiple && (
            <div className="pt-3 border-t border-slate-800">
              <div className="flex gap-2 overflow-x-auto justify-center max-w-4xl mx-auto py-1 scrollbar-thin scrollbar-thumb-slate-700">
                {images.map((img, idx) => (
                  <button
                    key={`lb-${img}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative shrink-0 w-14 h-14 bg-slate-900 border transition-all overflow-hidden ${
                      idx === activeIndex
                        ? "border-amber-500 ring-2 ring-amber-500/50 opacity-100 scale-105"
                        : "border-slate-800 opacity-40 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
