import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectsSectionProps {
  translations: any
}

const projects = [
  {
    id: 1,
    title: "Real State Platform",
    description:
      "A full-featured real state platform with properties grid and admin dashboard.",
    image: "/draft.png",
    tags: ["React.js", "TypeScript", "Maps API", "MySQL"],
    liveUrl: "https://draft-krak.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "The Julia Tree",
    description:
      "Landing page for fundraising to plant trees in Africa.",
    image: "/julia-tree.png",
    tags: ["Next.js", "Stripe", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Elijo",
    description:
      "A full-featured platform to connect High School with University Students for a better understanding of their carrer.",
    image: "/elijo.png",
    tags: ["React.js", "MySQL", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Zafe by Tecnotrust",
    description: "Landing Page to promote Mobile App.",
    image: "/zafe.png",
    tags: ["React", "Node.js"],
    liveUrl: "https://zafe-tecnotrust.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Tecnotrust",
    description: "Landing Page to promote security services.",
    image: "/tecnotrust.png",
    tags: ["React.js", "Node.js"],
    liveUrl: "https://tecnotrust.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Construction Landing",
    description: "Landing Page to promote new buildings.",
    image: "/construction.png",
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://construction-landing-demo.netlify.app/",
    githubUrl: "#",
  },
]

export function ProjectsSection({ translations }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{translations.projects.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl !== '#' && (<div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        {translations.projects.viewProject}
                      </a>
                    </Button>
                    
                  </div>)}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
