"use client"

import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="gap-2"
      >
        <span className="text-lg">🇺🇸</span>
        <span className="hidden sm:inline">EN</span>
      </Button>
      <Button
        variant={currentLang === "es" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("es")}
        className="gap-2"
      >
        <span className="text-lg">🇪🇸</span>
        <span className="hidden sm:inline">ES</span>
      </Button>
    </div>
  )
}
