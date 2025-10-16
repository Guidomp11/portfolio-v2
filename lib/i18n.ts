export type Language = "en" | "es"

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Guido Ponce",
      title: "Fullstack Developer",
      description:
        "I build exceptional digital experiences that combine elegant design with robust engineering. Specialized in modern web technologies and scalable solutions.",
      cta: "View My Work",
      contact: "Get In Touch",
    },
    about: {
      title: "About Me",
      description:
        "I'm a passionate fullstack developer with expertise in building modern mobile & web applications. I love creating seamless user experiences and writing clean, maintainable code.",
      skills: "Skills & Technologies",
    },
    experience: {
      title: "Experience",
      present: "Present",
      company: "Company Name",
      position: "Senior Fullstack Developer",
      description:
        "Led development of multiple high-impact projects, implementing best practices and mentoring junior developers.",
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Let's Work Together",
      description: "I'm always interested in hearing about new projects and opportunities.",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message - Not Available",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js and Tailwind CSS",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Guido Ponce",
      title: "Desarrollador Fullstack",
      description:
        "Construyo experiencias digitales excepcionales que combinan diseño elegante con ingeniería robusta. Especializado en tecnologías web modernas y soluciones escalables.",
      cta: "Ver Mi Trabajo",
      contact: "Contactar",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un desarrollador fullstack apasionado con experiencia en la construcción de aplicaciones móviles y web modernas. Me encanta crear experiencias de usuario fluidas y escribir código limpio y mantenible.",
      skills: "Habilidades y Tecnologías",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
      company: "Nombre de la Empresa",
      position: "Desarrollador Fullstack Senior",
      description:
        "Lideré el desarrollo de múltiples proyectos de alto impacto, implementando mejores prácticas y mentorizando desarrolladores junior.",
    },
    projects: {
      title: "Proyectos Destacados",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
    },
    contact: {
      title: "Trabajemos Juntos",
      description: "Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades.",
      email: "Email",
      emailPlaceholder: "tu.email@ejemplo.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar Mensaje - No disponible",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Construido con Next.js y Tailwind CSS",
    },
  },
}

export function getTranslations(lang: Language) {
  return translations[lang]
}
