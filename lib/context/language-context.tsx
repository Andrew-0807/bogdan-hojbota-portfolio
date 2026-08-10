"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { dictionary, DictionaryKey } from "@/lib/i18n/dictionary"

export type Language = "ro" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: DictionaryKey, params?: Record<string, string | number>) => string
}

const STORAGE_KEY = "hojbota_portfolio_lang"

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ro")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved === "ro" || saved === "en") {
        setLanguageState(saved)
      }
    } catch {
      // Fallback to 'ro' on storage error
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage errors
    }
  }

  const t = (key: DictionaryKey, params?: Record<string, string | number>): string => {
    const entry = dictionary[key]
    if (!entry) return key
    let text = entry[language] || entry["ro"] || key

    if (params) {
      Object.entries(params).forEach(([paramKey, paramVal]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(paramVal))
      })
    }

    return text
  }

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "ro", setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
