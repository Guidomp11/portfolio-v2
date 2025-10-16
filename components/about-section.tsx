import { Card } from "@/components/ui/card"

interface AboutSectionProps {
  translations: any
}

const skills = {
  frontend: ["React", "React Native + Expo", "Next.js", "Vite.js", "TypeScript", "Tailwind CSS", "Material UI"],
  backend: ["Node.js", "MySQL", "MongoDB", "DynamoDB", "EXpress.js", "NestJS"],
  tools: ["Git", "Docker", "AWS", "Vercel"],
}

export function AboutSection({ translations }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">{translations.about.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {translations.about.description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{translations.about.skills}</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4">
                <h4 className="font-semibold text-accent">Frontend</h4>
                <ul className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 space-y-4">
                <h4 className="font-semibold text-accent">Backend</h4>
                <ul className="space-y-2">
                  {skills.backend.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 space-y-4">
                <h4 className="font-semibold text-accent">Tools</h4>
                <ul className="space-y-2">
                  {skills.tools.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
