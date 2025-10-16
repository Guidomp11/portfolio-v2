import { Card } from "@/components/ui/card"

interface ExperienceSectionProps {
  translations: any
}

const experiences = [
  {
    id: 1,
    period: "2025",
    company: "BigID",
    position: "Fullstack Developer",
    description:
      "Developed and maintained web applications using modern technologies and frameworks.",
  },
  {
    id: 2,
    period: "2021 - 2024",
    company: "XCAD Network",
    position: "Fullstack Developer",
    description: "Led development of multiple high-impact projects, implementing best practices and mentoring junior developers.",
  },
  {
    id: 3,
    period: "2020 - 2023",
    company: "Freelancer",
    position: "Fullstack Developer",
    description:
      "Built responsive user interfaces and collaborated with design teams to create exceptional user experiences.",
  },
]

export function ExperienceSection({ translations }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{translations.experience.title}</h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
