import type { PortfolioConfig } from "../types/portfolio"

export const portfolio: PortfolioConfig = {
  identity: {
    name: "Manuel Tercero",
    nickname: "manutepowa",
    role: "Full Stack Engineer & AI Integration · Node.js, ReactJS, TypeScript",
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
      "Full Stack Engineer & AI Integration · Node.js, ReactJS, TypeScript",
    description:
      "Diseño y construyo productos web completos: desde la experiencia de usuario y el sistema visual hasta la arquitectura frontend, APIs y despliegue. Me gusta convertir ideas complejas en interfaces claras, rápidas y mantenibles.",
  },

  social: {
    email: {
      label: "Email",
      url: "mailto:manutepowa@gmail.com",
      icon: "✉",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/manutepowa",
      icon: "↗",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manueltercero",
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
      name: "Digitalización del agua (Perte)",
      url: "https://sederegantes.es",
      year: "2026",
      description:
        "IA aplicada al agua. Asistente conversacional que unifica datos hídricos dispersos y los transforma en análisis inteligente: tendencias, anomalías, visualizaciones e informes exportables para comunidades de regantes.",
      tags: ["AI", "LLM", "Node.js", "TypeScript", "MCP", "Hidrología"],
      captures: [
        {
          src: "/projects/perte-ai/chat-mcp-bloque.png",
          alt: "Bloque de chat con integración MCP del asistente PERTE AI",
          caption: "Integración del protocolo MCP para conectar el asistente con fuentes de datos y herramientas externas.",
        },
        {
          src: "/projects/perte-ai/uso-de-skills.png",
          alt: "Uso de skills en el asistente PERTE AI",
          caption: "Activación de skills especializadas para análisis hídrico, generación de informes y consultas estructuradas.",
        },
      ],
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
      captures: [
        {
          src: "/projects/inet2you/descargables.png",
          alt: "Vista del repositorio de contenidos descargables de Inet2you",
          caption: "Biblioteca de recursos exclusivos con documentos y materiales descargables del ecosistema.",
        },
        {
          src: "/projects/inet2you/oportunidades.png",
          alt: "Panel de oportunidades de cooperación de Inet2you",
          caption: "Espacio donde descubrir y publicar oportunidades de colaboración e inversión.",
        },
        {
          src: "/projects/inet2you/perfil.png",
          alt: "Vista del perfil de usuario en Inet2you",
          caption: "Perfil con accesos controlados para compartir información estratégica de forma segura.",
        },
      ],
      featured: true,
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
        "En Dropsense, agencia digital especializada en Drupal, Payload CMS, integración con IA y desarrollo web, trabajo en proyectos complejos para administraciones públicas, universidades y empresas. Abordo desafíos de arquitectura, automatización inteligente, integración de modelos de IA y escalabilidad en entornos CMS tradicionales y headless, combinando la flexibilidad del ecosistema open source con prácticas modernas de desarrollo.",
      highlights: [
        "Integración de capacidades de IA en plataformas CMS para automatizar procesos, enriquecer contenidos y conectar datos con flujos de trabajo inteligentes",
        "Desarrollo de proyectos Drupal y Payload CMS para instituciones como la UMH, Ayuntamiento de Alicante y otras entidades públicas",
        "Migraciones y actualizaciones de plataformas Drupal legacy a versiones modernas",
        "Implementación de soluciones headless con Payload CMS para experiencias de contenido modernas, tipadas y escalables",
        "Integración de Drupal y Payload CMS con servicios externos, APIs, modelos de IA y entornos cloud",
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
        "En el Parque Científico de la UMH desarrollo soluciones web completas e integraciones con IA que conectan el ecosistema de innovación: plataformas de red empresarial, sistemas de gestión de contenido headless, portales institucionales y herramientas digitales para la transferencia de conocimiento. Trabajo en un entorno híbrido en Elche, combinando arquitectura frontend moderna, servicios backend robustos y capacidades inteligentes basadas en datos, automatización y modelos LLM.",
      highlights: [
        "Diseño e integración de funcionalidades con IA para recomendación, análisis de información, automatización de procesos y asistencia conversacional",
        "Headless CMS con Strapi y PayloadCMS para plataformas de contenido flexibles y escalables",
        "Conexión de modelos LLM, APIs y fuentes de datos internas para convertir información dispersa en experiencias digitales útiles",
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
        "Estudios de grado en Ingeniería Informática en la UMH, donde adquirí una base sólida en fundamentos de la computación, lenguajes de programación, arquitectura de sistemas, datos y metodologías de desarrollo. Esta formación me dio la base técnica para entender cómo funcionan las plataformas desde sus cimientos y para abordar hoy integraciones con IA, automatización y sistemas inteligentes sobre arquitecturas web robustas.",
      highlights: [
        "Fundamentos de lenguajes de programación y paradigmas de desarrollo",
        "Bases algorítmicas, modelado de datos e ingeniería del software aplicadas a sistemas inteligentes",
        "Arquitectura de computadores y sistemas operativos (Linux)",
        "Bases de datos, redes e ingeniería del software",
        "Proyectos y prácticas que conectaron la teoría con problemas reales, integración de sistemas y automatización",
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
        url: "mailto:manutepowa@gmail.com",
        icon: "✉",
      },
      {
        label: "GitHub",
        url: "https://github.com/manutepowa",
        icon: "↗",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/manueltercero",
        icon: "↗",
      },
    ],
  },
}
