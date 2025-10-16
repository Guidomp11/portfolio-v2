"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useState } from "react"

interface ContactSectionProps {
  translations: any
}

export function ContactSection({ translations }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">{translations.contact.title}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{translations.contact.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {translations.contact.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={translations.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {translations.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={translations.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                  />
                </div>
                <Button disabled type="submit" className="w-full">
                  {translations.contact.send}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Guidomp11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/Guidomp11</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/guido-ponce-38439a1b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/guido-ponce-38439a1b5</span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
