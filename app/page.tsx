"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { type Language, getTranslations } from "@/lib/i18n"

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const translations = getTranslations(currentLang)

  return (
    <div className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} translations={translations} />
      <main>
        <HeroSection translations={translations} />
        <AboutSection translations={translations} />
        <ExperienceSection translations={translations} />
        <ProjectsSection translations={translations} />
        <ContactSection translations={translations} />
      </main>
      <Footer translations={translations} />
    </div>
  )
}
