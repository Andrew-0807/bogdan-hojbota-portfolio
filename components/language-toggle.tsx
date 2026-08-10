"use client"

import React from "react"
import { useLanguage, Language } from "@/lib/context/language-context"
import { cn } from "@/lib/utils"

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selection / Selectare limbă"
      className={cn(
        "inline-flex items-center p-0.5 bg-slate-100 border border-slate-200/90 rounded-none text-[11px] font-mono uppercase font-semibold",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("ro")}
        aria-pressed={language === "ro"}
        aria-label="Switch language to Romanian"
        className={cn(
          "px-2 py-0.5 transition-colors duration-150 select-none",
          language === "ro"
            ? "bg-slate-900 text-white"
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/60",
        )}
      >
        RO
      </button>

      <span className="h-3 w-px bg-slate-300 mx-0.5" aria-hidden="true" />

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
        className={cn(
          "px-2 py-0.5 transition-colors duration-150 select-none",
          language === "en"
            ? "bg-slate-900 text-white"
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/60",
        )}
      >
        EN
      </button>
    </div>
  )
}
