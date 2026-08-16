import type { PortfolioConfig } from "../types/portfolio"

export const portfolio: PortfolioConfig = {
  identity: {
    name: "Manuel Tercero",
    nickname: "manutepowa",
    role: "Full Stack Engineer especializado en productos e integraciones con IA",
    location: {
      city: "Elda",
      country: "ES",
      alternateCity: "Remoto",
      alternateCountry: "ES",
    },
    avatar: "/avatar.webp",
    logo: "MT",
  },

  seo: {
    title: "Manuel Tercero | Full Stack Engineer",
    description:
      "Portfolio de Manuel Tercero, Full Stack Engineer especializado en productos web e integraciones con IA.",
  },

  hero: {
    description:
      "Convierto necesidades complejas en productos web claros y mantenibles, conectando experiencia de usuario, frontend, APIs e inteligencia artificial.",
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
          caption:
            "Integración del protocolo MCP para conectar el asistente con fuentes de datos y herramientas externas.",
        },
        {
          src: "/projects/perte-ai/uso-de-skills.png",
          alt: "Uso de skills en el asistente PERTE AI",
          caption:
            "Activación de skills especializadas para análisis hídrico, generación de informes y consultas estructuradas.",
        },
      ],
    },
    {
      id: "inet2you",
      name: "Inet2you",
      url: "https://comunicacion.umh.es/2025/10/31/el-parque-cientifico-de-la-umh-lanza-inet2you-una-red-digital-que-conecta-empresas-inversores-e-investigadores/",
      year: "2025",
      description:
        "Red digital del Parque Científico de la UMH que conecta empresas, investigadores e inversores. Reúne recomendaciones con IA, oportunidades, eventos y contenidos en un entorno con accesos controlados.",
      tags: ["React", "TypeScript", "Node.js", "AI", "Red de Innovación"],
      captures: [
        {
          src: "/projects/inet2you/descargables.png",
          alt: "Vista del repositorio de contenidos descargables de Inet2you",
          caption:
            "Biblioteca de recursos exclusivos con documentos y materiales descargables del ecosistema.",
        },
        {
          src: "/projects/inet2you/oportunidades.png",
          alt: "Panel de oportunidades de cooperación de Inet2you",
          caption:
            "Espacio donde descubrir y publicar oportunidades de colaboración e inversión.",
        },
        {
          src: "/projects/inet2you/perfil.png",
          alt: "Vista del perfil de usuario en Inet2you",
          caption:
            "Perfil con accesos controlados para compartir información estratégica de forma segura.",
        },
      ],
    },
    {
      id: "parque-cientifico-umh",
      name: "Parque Científico UMH",
      url: "https://www.parquecientificoumh.es/",
      year: "2025",
      description:
        "Plataforma digital del Parque Científico de la UMH para conectar empresas, startups, investigadores y agentes del ecosistema de innovación. Centraliza programas, eventos, noticias, recursos y oportunidades de colaboración.",
      tags: ["Innovación", "Emprendimiento", "Investigación"],
    },
    {
      id: "plataforma-idiomas-umh",
      name: "Plataforma de Idiomas UMH",
      url: "https://www.idiomasumh.es/",
      year: "2020",
      description:
        "Ecosistema EdTech del Centro de Idiomas de la UMH para formación online y semipresencial. Integra contenidos, ejercicios autocorregibles, tests de nivel, seguimiento y gestión académica para inglés, valenciano y español.",
      tags: [
        "EdTech",
        "E-learning",
        "Plataforma educativa",
        "Inglés",
        "Valenciano",
        "Español",
      ],
    },
  ],

  openSource: {
    profileUrl: "https://github.com/manutepowa",
    projects: [
      {
        id: "payload-plugin-masquerade",
        name: "Payload Plugin Masquerade",
        description:
          "Plugin para Payload CMS que permite a administradores cambiar temporalmente de usuario, navegar con sus permisos y regresar después a su propia sesión.",
        repositoryUrl:
          "https://github.com/manutepowa/payload-plugin-masquerade",
        packageUrl: "https://www.npmjs.com/package/payload-plugin-masquerade",
        installCommand: "pnpm add payload-plugin-masquerade",
        tags: ["Payload CMS", "TypeScript", "Plugin"],
        license: "MIT",
        status: "active",
      },
      {
        id: "payload-files-proxy",
        name: "Payload Files Proxy",
        description:
          "Plugin de desarrollo que recupera bajo demanda los archivos de producción que todavía no existen en una instalación local de Payload CMS.",
        repositoryUrl: "https://github.com/manutepowa/payload-files-proxy",
        packageUrl: "https://www.npmjs.com/package/payload-files-proxy",
        installCommand: "pnpm add payload-files-proxy",
        tags: ["Payload CMS", "TypeScript", "Developer tooling"],
        license: "MIT",
        status: "active",
      },
    ],
  },

  experience: [
    {
      id: "dropsense",
      organization: "Dropsense",
      organizationUrl: "https://dropsense.es",
      role: "Full Stack Engineer",
      period: "2025 — presente",
      description:
        "Desarrollo plataformas para administraciones, universidades y empresas combinando CMS open source, arquitecturas headless, automatización e integraciones con IA.",
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
        "Construyo plataformas que conectan el ecosistema de innovación, desde redes empresariales y portales institucionales hasta servicios backend e integraciones basadas en datos y modelos LLM.",
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
        "Base técnica en programación, algoritmos, datos, arquitectura de sistemas e ingeniería del software aplicada hoy a productos web, automatización e integraciones con IA.",
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
