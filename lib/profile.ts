export type Locale = "en" | "ru";

export type Experience = {
  company: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  href?: string;
  links?: { label: string; href: string }[];
};

export type Project = {
  index: string;
  title: string;
  kind: string;
  description: string;
  href?: string;
  links?: { label: string; href: string }[];
};

type Profile = {
  nav: { about: string; experience: string; projects: string; contact: string };
  availability: string;
  eyebrow: string;
  title: string;
  intro: string;
  resume: string;
  schedule: string;
  terminalTitle: string;
  terminalHint: string;
  sectionExperience: string;
  sectionProjects: string;
  sectionStack: string;
  sectionEducation: string;
  sectionContact: string;
  contactCopy: string;
  footer: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: { year: string; title: string; detail: string }[];
  terminal: Record<string, string[]>;
};

export const profile: Record<Locale, Profile> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    availability: "Open to strong product teams",
    eyebrow: "Moscow · Backend-first full stack",
    title: "I build reliable products from Rails backend to the final screen.",
    intro:
      "Full Stack Ruby on Rails Engineer with 5+ years of experience in PostgreSQL-heavy systems, external integrations and product platforms. I combine hands-on engineering with AI-assisted, contract-driven delivery.",
    resume: "Download resume",
    schedule: "Schedule a call",
    terminalTitle: "andrew@portfolio:~",
    terminalHint: "Type help and press Enter",
    sectionExperience: "Selected experience",
    sectionProjects: "Work projects",
    sectionStack: "Tools I use",
    sectionEducation: "Education",
    sectionContact: "Let’s build something solid.",
    contactCopy:
      "I’m interested in Ruby on Rails roles where backend depth, ownership and thoughtful product work matter.",
    footer: "Designed and built by Andrew Titov",
    skills: [
      "Ruby", "Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "REST / SOAP", "RSpec",
      "Docker", "CI/CD", "Vue", "Hotwire", "Vite", "Turbo Native", "Telegram Mini Apps",
      "Traefik", "Consul", "Linux", "AI coding agents"
    ],
    experience: [
      {
        company: "Pinecode",
        period: "Jun 2026 — Present",
        role: "Full Stack Developer",
        summary:
          "Building an omnichannel poker platform across Rails, web, mobile and Telegram Mini App scenarios. Using ADRs, business contracts, worktrees and AI coding agents to deliver and verify changes safely.",
        tags: ["Rails", "Hotwire", "Turbo Native", "Telegram Mini App", "AI-assisted delivery"],
      },
      {
        company: "DRCT",
        period: "Jan — Apr 2026",
        role: "Backend Engineer / L2–L3 Integration Support",
        summary:
          "Developed and supported NDC integrations through REST, SOAP and complex XML. Diagnosed production flows and improved gateway error handling, retries, timeouts, fallbacks and logging.",
        tags: ["Ruby", "Laravel", "NDC", "REST / SOAP", "Gateway"],
        href: "https://drct.aero",
      },
      {
        company: "Rubetek",
        period: "Aug — Dec 2025",
        role: "Backend Developer",
        summary:
          "Developed an internal product lifecycle platform covering development, manufacturing, sales and analytics. Improved APIs, data flows, dashboards and legacy components.",
        tags: ["Backend", "APIs", "Analytics", "Legacy modernization"],
        href: "https://rubetek.com",
      },
      {
        company: "DRCT",
        period: "Feb — Apr 2025",
        role: "Ruby Backend Developer",
        summary:
          "Integrated airline, GDS and NDC provider APIs and strengthened error and retry handling in integration-heavy workflows.",
        tags: ["Ruby", "Airline APIs", "GDS", "NDC"],
        href: "https://drct.aero",
      },
      {
        company: "ODIN",
        period: "Apr 2021 — Jan 2025",
        role: "Ruby on Rails Developer",
        summary:
          "Built SaaS/PaaS property-management products: REST APIs, PostgreSQL optimization, WebSocket notifications, Sidekiq jobs, monitoring, billing, Vue interfaces and cross-platform mobile scenarios.",
        tags: ["Rails 7", "PostgreSQL", "Sidekiq", "Vue", "Ionic", "Docker"],
        links: [
          { label: "o-din.ru", href: "https://o-din.ru/" },
          { label: "ord-in.com", href: "https://ord-in.com/" },
        ],
      },
      {
        company: "Softproekt",
        period: "Jan — Mar 2021",
        role: "Ruby on Rails Developer Intern",
        summary: "Completed a Rails development internship and contributed basic MVC and backend functionality.",
        tags: ["Ruby", "Ruby on Rails", "MVC"],
      },
    ],
    education: [
      { year: "2018", title: "Moscow Pedagogical State University", detail: "Bachelor’s degree · Advertising and Public Relations" },
      { year: "2019", title: "Thinknetica", detail: "Ruby on Rails Developer" },
      { year: "2024", title: "HTB Academy", detail: "Information security coursework" },
    ],
    projects: [
      {
        index: "01",
        title: "Skyline / Poker",
        kind: "Product platform",
        description:
          "A full-stack platform for poker tournaments and customer experience: Rails backend, web interfaces, mobile flows, Telegram Mini App and admin tools.",
      },
      {
        index: "02",
        title: "DRCT NDC Gateway",
        kind: "Travel integrations",
        description:
          "A gateway layer unifying external airline and provider integrations, with resilient error handling and operational diagnostics.",
        href: "https://drct.aero",
      },
      {
        index: "03",
        title: "Rubetek Platform",
        kind: "Internal product operations",
        description:
          "A client-server platform connecting product development, manufacturing, sales, analytics and internal workflows.",
        href: "https://rubetek.com",
      },
      {
        index: "04",
        title: "ODIN Property Platform",
        kind: "SaaS / PaaS",
        description:
          "Property and facility management products with applications, notifications, analytics, payments and mobile tools for service teams.",
        links: [
          { label: "o-din.ru", href: "https://o-din.ru/" },
          { label: "ord-in.com", href: "https://ord-in.com/" },
        ],
      },
    ],
    terminal: {
      help: ["Commands: whoami, cat profile.yml, about, skills, experience, projects, contact, resume, clear"],
      whoami: ["> Andrew Titov"],
      "cat profile.yml": [
        "# Core profile",
        'role: "Full Stack Ruby on Rails Engineer"',
        'focus: ["Rails Backend", "Full Stack", "Integrations"]',
        'stack: ["PostgreSQL", "Redis", "Sidekiq", "Docker"]',
        'experience: "5+ years"',
        'location: "Moscow / Remote"',
      ],
      about: ["Andrew Titov", "Full Stack Ruby on Rails Engineer", "Moscow, Russia · English B1"],
      skills: ["Rails · PostgreSQL · Redis · Sidekiq", "REST/SOAP · Docker · CI/CD", "Vue · Hotwire · Turbo Native · Telegram Mini Apps"],
      experience: ["5+ years building product platforms and integration-heavy systems.", "Current: Full Stack Developer at Pinecode."],
      projects: ["Skyline / Poker", "DRCT NDC Gateway", "Rubetek Platform", "ODIN Property Platform"],
      contact: ["Email: tit22an@gmail.com", "Telegram: @andrewcomrade", "LinkedIn: /in/andrew-titov-046248203"],
      resume: ["Use the Download resume button below the introduction."],
    },
  },
  ru: {
    nav: { about: "Обо мне", experience: "Опыт", projects: "Проекты", contact: "Контакты" },
    availability: "Открыт к сильным продуктовым командам",
    eyebrow: "Москва · Full stack с сильным backend",
    title: "Создаю надёжные продукты — от Rails-бэкенда до финального экрана.",
    intro:
      "Full Stack Ruby on Rails разработчик с опытом более 5 лет: PostgreSQL-нагруженные системы, внешние интеграции и продуктовые платформы. Совмещаю практическую разработку с AI-assisted и контрактным подходом.",
    resume: "Скачать резюме",
    schedule: "Назначить встречу",
    terminalTitle: "andrew@portfolio:~",
    terminalHint: "Введите help и нажмите Enter",
    sectionExperience: "Опыт работы",
    sectionProjects: "Рабочие проекты",
    sectionStack: "Инструменты",
    sectionEducation: "Образование",
    sectionContact: "Давайте сделаем что-то надёжное.",
    contactCopy:
      "Рассматриваю Ruby on Rails позиции, где важны глубокий backend, ответственность за результат и вдумчивая продуктовая работа.",
    footer: "Дизайн и разработка — Андрей Титов",
    skills: [
      "Ruby", "Ruby on Rails", "PostgreSQL", "Redis", "Sidekiq", "REST / SOAP", "RSpec",
      "Docker", "CI/CD", "Vue", "Hotwire", "Vite", "Turbo Native", "Telegram Mini Apps",
      "Traefik", "Consul", "Linux", "AI coding agents"
    ],
    experience: [
      {
        company: "Pinecode",
        period: "Июнь 2026 — настоящее время",
        role: "Full Stack разработчик",
        summary:
          "Разрабатываю омниканальную платформу для покерной сети: Rails, web, mobile и Telegram Mini App. Использую ADR, бизнес-контракты, worktree и AI-агентов для безопасной разработки и проверки изменений.",
        tags: ["Rails", "Hotwire", "Turbo Native", "Telegram Mini App", "AI-assisted разработка"],
      },
      {
        company: "DRCT",
        period: "Январь — апрель 2026",
        role: "Backend-разработчик / L2–L3 поддержка интеграций",
        summary:
          "Разрабатывал и поддерживал NDC-интеграции через REST, SOAP и сложный XML. Диагностировал production-процессы и улучшал gateway: ошибки, retry, timeout, fallback и логирование.",
        tags: ["Ruby", "Laravel", "NDC", "REST / SOAP", "Gateway"],
        href: "https://drct.aero",
      },
      {
        company: "Rubetek",
        period: "Август — декабрь 2025",
        role: "Backend-разработчик",
        summary:
          "Разрабатывал внутреннюю платформу жизненного цикла продуктов: разработка, производство, продажи и аналитика. Улучшал API, потоки данных, дашборды и legacy-компоненты.",
        tags: ["Backend", "API", "Аналитика", "Legacy modernization"],
        href: "https://rubetek.com",
      },
      {
        company: "DRCT",
        period: "Февраль — апрель 2025",
        role: "Ruby Backend разработчик",
        summary:
          "Интегрировал API авиакомпаний, GDS и NDC-провайдеров, улучшал обработку ошибок и повторных запросов.",
        tags: ["Ruby", "Airline API", "GDS", "NDC"],
        href: "https://drct.aero",
      },
      {
        company: "ODIN",
        period: "Апрель 2021 — январь 2025",
        role: "Ruby on Rails разработчик",
        summary:
          "Разрабатывал SaaS/PaaS для управления недвижимостью: REST API, оптимизация PostgreSQL, WebSocket-уведомления, Sidekiq, мониторинг, биллинг, Vue и мобильные сценарии.",
        tags: ["Rails 7", "PostgreSQL", "Sidekiq", "Vue", "Ionic", "Docker"],
        links: [
          { label: "o-din.ru", href: "https://o-din.ru/" },
          { label: "ord-in.com", href: "https://ord-in.com/" },
        ],
      },
      {
        company: "Софтпроект",
        period: "Январь — март 2021",
        role: "Стажёр Ruby on Rails разработчик",
        summary: "Прошёл стажировку по Rails и участвовал в доработке базовой MVC- и backend-функциональности.",
        tags: ["Ruby", "Ruby on Rails", "MVC"],
      },
    ],
    education: [
      { year: "2018", title: "Московский педагогический государственный университет", detail: "Высшее образование · Реклама и связи с общественностью" },
      { year: "2019", title: "Thinknetica", detail: "Ruby on Rails Developer" },
      { year: "2024", title: "HTB Academy", detail: "Информационная безопасность" },
    ],
    projects: [
      {
        index: "01",
        title: "Skyline / Poker",
        kind: "Продуктовая платформа",
        description:
          "Full-stack платформа для покерных турниров и клиентского опыта: Rails backend, web-интерфейсы, мобильные сценарии, Telegram Mini App и административные инструменты.",
      },
      {
        index: "02",
        title: "DRCT NDC Gateway",
        kind: "Travel-интеграции",
        description:
          "Gateway-слой для унификации интеграций с авиакомпаниями и провайдерами, с устойчивой обработкой ошибок и диагностикой.",
        href: "https://drct.aero",
      },
      {
        index: "03",
        title: "Платформа Rubetek",
        kind: "Внутренние продуктовые процессы",
        description:
          "Клиент-серверная платформа, связывающая разработку продуктов, производство, продажи, аналитику и внутренние процессы.",
        href: "https://rubetek.com",
      },
      {
        index: "04",
        title: "Платформа ODIN",
        kind: "SaaS / PaaS",
        description:
          "Продукты для управления недвижимостью: заявки, уведомления, аналитика, платежи и мобильные инструменты сервисных команд.",
        links: [
          { label: "o-din.ru", href: "https://o-din.ru/" },
          { label: "ord-in.com", href: "https://ord-in.com/" },
        ],
      },
    ],
    terminal: {
      help: ["Команды: whoami, cat profile.yml, about, skills, experience, projects, contact, resume, clear"],
      whoami: ["> Андрей Титов"],
      "cat profile.yml": [
        "# Профиль",
        'role: "Full Stack Ruby on Rails разработчик"',
        'focus: ["Rails Backend", "Full Stack", "Интеграции"]',
        'stack: ["PostgreSQL", "Redis", "Sidekiq", "Docker"]',
        'experience: "5+ лет"',
        'location: "Москва / Remote"',
      ],
      about: ["Андрей Титов", "Full Stack Ruby on Rails разработчик", "Москва · English B1"],
      skills: ["Rails · PostgreSQL · Redis · Sidekiq", "REST/SOAP · Docker · CI/CD", "Vue · Hotwire · Turbo Native · Telegram Mini Apps"],
      experience: ["Более 5 лет в продуктовых платформах и интеграционных системах.", "Сейчас: Full Stack разработчик в Pinecode."],
      projects: ["Skyline / Poker", "DRCT NDC Gateway", "Платформа Rubetek", "Платформа ODIN"],
      contact: ["Email: tit22an@gmail.com", "Telegram: @andrewcomrade", "LinkedIn: /in/andrew-titov-046248203"],
      resume: ["Используйте кнопку Скачать резюме под вводным текстом."],
    },
  },
};
