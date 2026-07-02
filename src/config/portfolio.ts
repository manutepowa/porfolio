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
      id: "perte-ai",
      name: "Digitalizazión del agua (Perte)",
      url: "https://github.com/it-fumh/perte-ai",
      year: "2026",
      description:
        "IA aplicada al agua. Asistente conversacional que unifica datos hídricos dispersos y los transforma en análisis inteligente: tendencias, anomalías, visualizaciones e informes exportables para comunidades de regantes.",
      tags: ["AI", "LLM", "Node.js", "TypeScript", "MCP", "Hidrología"],
      featured: true,
    },
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
      id: "dropsense",
      organization: "Dropsense",
      organizationUrl: "https://dropsense.es",
      role: "Full Stack Engineer",
      period: "2025 — presente",
      description:
        "En Dropsense, agencia digital especializada en Drupal y desarrollo web, trabajo en proyectos complejos para administraciones públicas, universidades y empresas. Abordo desafíos de arquitectura, integración y escalabilidad en entornos Drupal, combinando la flexibilidad del ecosistema open source con prácticas modernas de desarrollo.",
      highlights: [
        "Desarrollo de proyectos Drupal para instituciones como la UMH, Ayuntamiento de Alicante y otras entidades públicas",
        "Migraciones y actualizaciones de plataformas Drupal legacy a versiones modernas",
        "Integración de Drupal con servicios externos, APIs y entornos cloud",
        "Mantenimiento proactivo y soporte evolutivo de plataformas críticas",
        "Colaboración en un equipo multidisciplinar con perfil tecnológico y estratégico",
      ],
    },
    {
      id: "pc-umh",
      organization: "Parque Científico UMH",
      organizationUrl: "https://parquecientificoumh.es",
      role: "Full Stack Engineer",
      period: "2017 — presente",
      description:
        "En el Parque Científico de la UMH desarrollo soluciones web completas que conectan el ecosistema de innovación: plataformas de red empresarial, sistemas de gestión de contenido headless, portales institucionales y herramientas digitales para la transferencia de conocimiento. Trabajo en un entorno híbrido en Elche, combinando arquitectura frontend moderna con integraciones backend robustas.",
      highlights: [
        "Headless CMS con Strapi y PayloadCMS para plataformas de contenido flexibles y escalables",
        "Aplicaciones web con Drupal 8/9, incluyendo arquitecturas Headless Drupal vía JSON:API",
        "Interfaces interactivas con TypeScript, ReactJS y NextJS",
        "APIs y servicios backend eficientes con Node.js",
        "Desarrollo de módulos y temas personalizados adaptados a necesidades específicas del proyecto",
        "Entornos de desarrollo containerizados con DDEV y Docker",
        "Integración continua con GitLab-CI y GitHub Actions para testing y despliegue automatizado",
        "Sistemas de pago con Stripe para transacciones seguras y sin fricción",
        "Infraestructura Linux como sistema principal, optimizando rendimiento y personalización del entorno",
        "Flujo de trabajo eficiente con Neovim como editor principal",
      ],
    },
  ],

  education: [
    {
      id: "ingenieria-informatica",
      organization: "Universidad Miguel Hernández",
      organizationUrl: "https://www.umh.es",
      role: "Grado en Ingeniería Informática",
      period: "2010 — 2016",
      description:
        "Estudios de grado en Ingeniería Informática en la UMH, donde adquirí una base sólida en fundamentos de la computación, lenguajes de programación, arquitectura de sistemas y metodologías de desarrollo. Durante estos años aprendí a entender cómo funcionan las plataformas desde sus cimientos, desde el hardware hasta las capas de abstracción del software, y construí los cimientos técnicos que sostienen mi trabajo actual.",
      highlights: [
        "Fundamentos de lenguajes de programación y paradigmas de desarrollo",
        "Arquitectura de computadores y sistemas operativos (Linux)",
        "Bases de datos, redes e ingeniería del software",
        "Proyectos y prácticas que conectaron la teoría con problemas reales",
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
