"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

interface HeroSectionProps {
  translations: any
}

export function HeroSection({ translations }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">{translations.hero.greeting}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {translations.hero.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground font-light">{translations.hero.title}</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            {translations.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="gap-2">
              {translations.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="gap-2">
              <Mail className="w-4 h-4" />
              {translations.hero.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
