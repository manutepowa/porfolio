import type { PortfolioConfig } from "../types/portfolio"

export const portfolio: PortfolioConfig = {
  identity: {
    name: "Manuel Tercero",
    nickname: "manutepowa",
    role: "Full Stack Engineer | AI Integration | AI SDKs · Node.js · ReactJS · TypeScript",
    location: {
      city: "Granada",
      country: "ES",
      alternateCity: "Remote",
      alternateCountry: "EU",
    },
    avatar: "/avatar.webp",
    logo: "MT",
  },

  seo: {
    title: "Manuel Tercero | Full Stack Engineer",
    description:
      "Portfolio personal de Manuel Tercero, desarrollador full-stack centrado en interfaces, producto y arquitectura frontend.",
  },

  hero: {
    eyebrow: "Portafolio / 2026",
    greeting: "Hola. Soy Manuel —",
    headline:
      "Full Stack Engineer | AI Integration | AI SDKs · Node.js · ReactJS · TypeScript",
    description:
      "Diseño y construyo productos web completos: desde la experiencia de usuario y el sistema visual hasta la arquitectura frontend, APIs y despliegue. Me gusta convertir ideas complejas en interfaces claras, rápidas y mantenibles.",
  },

  social: {
    email: {
      label: "Email",
      url: "mailto:hola@manutercero.dev",
      icon: "✉",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/manutepowa",
      icon: "↗",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com/in/manuel-tercero",
      icon: "↗",
    },
    website: {
      label: "web",
      url: "https://manutercero.dev",
      icon: "↗",
    },
  },

  projects: [
    {
      id: "inet2you",
      name: "Inet2you",
      url: "https://comunicacion.umh.es/2025/10/31/el-parque-cientifico-de-la-umh-lanza-inet2you-una-red-digital-que-conecta-empresas-inversores-e-investigadores/",
      year: "2025",
      description:
        "Red digital impulsada por el Parque Científico de la UMH que conecta start-ups, pymes, investigadores, inversores y entidades para fomentar la cooperación y la innovación. Integra recomendaciones personalizadas con IA, una agenda de eventos del ecosistema, un repositorio vivo de contenidos exclusivos y un entorno seguro para compartir información estratégica con accesos controlados.",
      tags: ["React", "TypeScript", "Node.js", "AI", "Red de Innovación"],
      featured: true,
    },
    {
      id: "atlas-ui",
      name: "Atlas UI",
      url: "https://example.com/atlas-ui",
      year: "2026",
      description:
        "Un sistema de componentes para dashboards técnicos con tablas densas, estados de carga claros, filtros persistentes y patrones accesibles para productos B2B.",
      tags: ["React", "TypeScript", "Tailwind", "Design System"],
      featured: true,
    },
    {
      id: "signal-notes",
      name: "Signal Notes",
      url: "https://example.com/signal-notes",
      year: "2025",
      description:
        "Aplicación local-first para organizar notas de investigación, convertirlas en tareas y mantener trazabilidad entre decisiones, fuentes y resultados.",
      tags: ["Vite", "IndexedDB", "UX", "Local-first"],
      featured: true,
    },
    {
      id: "deploy-lab",
      name: "Deploy Lab",
      url: "https://example.com/deploy-lab",
      year: "2025",
      description:
        "Laboratorio de despliegue para experimentar con pipelines, previews automáticos y checks de calidad antes de publicar productos frontend.",
      tags: ["CI/CD", "Vercel", "Testing", "Automation"],
    },
  ],

  experience: [
    {
      id: "northstar-studio",
      organization: "Northstar Studio",
      organizationUrl: "https://example.com/northstar",
      role: "Ingeniero Frontend Senior",
      period: "2024-2026",
      description:
        "Lideré la construcción de plataformas internas para equipos de operaciones, transformando flujos manuales en herramientas web medibles, rápidas y fáciles de mantener.",
      highlights: [
        "Arquitectura frontend basada en módulos de dominio",
        "Sistema visual reutilizable para productos internos",
        "Mejoras de rendimiento en pantallas con datos densos",
      ],
    },
    {
      id: "quiet-products",
      organization: "Quiet Products",
      organizationUrl: "https://example.com/quiet",
      role: "Desarrollador Full-Stack",
      period: "2021-2024",
      description:
        "Construí productos SaaS desde cero, conectando investigación de usuario, diseño de interfaz, APIs, bases de datos y despliegues continuos.",
      highlights: [
        "Prototipado rápido con feedback real de usuarios",
        "Integraciones con servicios externos y sistemas de pago",
        "Documentación técnica para reducir dependencia del equipo fundador",
      ],
    },
    {
      id: "freelance-lab",
      organization: "Independent Lab",
      organizationUrl: "https://example.com/lab",
      role: "Desarrollador de Producto",
      period: "2018-2021",
      description:
        "Colaboré con pequeñas empresas y creadores para convertir ideas iniciales en MVPs funcionales, priorizando velocidad de aprendizaje sin sacrificar estructura técnica.",
      highlights: [
        "Landing pages orientadas a conversión",
        "MVPs con React, Node y APIs REST",
        "Diseño de contenido y posicionamiento de producto",
      ],
    },
  ],

  education: [
    {
      id: "open-learning",
      organization: "Open Source + Aprendizaje Continuo",
      organizationUrl: "https://github.com/manutepowa",
      role: "Arquitectura de Software, Diseño de Producto e Ingeniería Web",
      period: "2017-2026",
      description:
        "Formación continua basada en proyectos reales, lectura técnica, contribuciones open source y práctica deliberada en arquitectura frontend, diseño de sistemas y producto digital.",
      highlights: [
        "React, TypeScript, tooling moderno y accesibilidad",
        "Arquitectura de aplicaciones mantenibles",
        "Diseño de interfaces centradas en claridad y velocidad",
      ],
    },
  ],

  contact: {
    title: "¿Te interesa colaborar?",
    description:
      "Si tienes un producto que necesita claridad, buen diseño técnico o una interfaz difícil de simplificar, hablemos.",
    links: [
      {
        label: "Email",
        url: "mailto:hola@manutercero.dev",
        icon: "✉",
      },
      {
        label: "GitHub",
        url: "https://github.com/manutepowa",
        icon: "↗",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/manuel-tercero",
        icon: "↗",
      },
    ],
  },
}
