"use client"

import type { Language } from "@/lib/i18n"
import { LanguageSwitcher } from "./language-switcher"

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  translations: any
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold hover:text-accent transition-colors"
          >
            Portfolio
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.experience}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.contact}
            </button>
          </nav>

          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  )
}
