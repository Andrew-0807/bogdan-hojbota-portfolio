"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // The server cannot know the stored preference; render identical placeholder until mounted.
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch theme"
        className={cn(
          "inline-flex items-center justify-center h-[26px] w-[26px] p-0.5 bg-slate-100 border border-slate-200/90 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors duration-150",
          className,
        )}
      >
        <Moon className="h-3.5 w-3.5 opacity-0" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "inline-flex items-center justify-center h-[26px] w-[26px] p-0.5 bg-slate-100 border border-slate-200/90 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors duration-150",
        className,
      )}
    >
      {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
    </button>
  )
}

