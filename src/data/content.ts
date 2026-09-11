export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  apk?: string;
  features?: string[];
  githubLinks?: { label: string; url: string }[];
}

export interface Code3xProject {
  title: string;
  subtitle: string;
  url?: string;
  impactBadge: string;
  points: string[];
  tech: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  location: string;
  duration: string;
  type: string;
}

export const WORK_EXPERIENCE: WorkExperience = {
  role: "Software Engineering Intern",
  company: "Code3x (Pvt) Ltd.",
  companyUrl: "https://code3x.tech/",
  logo: "/code3x.jpeg",
  location: "Colombo, Sri Lanka",
  duration: "Mar 2026 – Sep 2026",
  type: "Full-Time | Remote",
};

export const CODE3X_PROJECTS: Code3xProject[] = [
  {
    title: "RentEaze",
    subtitle: "Multi-Tenant Vehicle Rental Platform",
    url: "https://rentzee.lk",
    impactBadge: "Primary Backend · 200+ REST APIs · 800+ Commits",
    points: [
      "Engineered 200+ production-ready REST APIs across 15 core domains as primary backend developer (52%+ codebase ownership).",
      "Built real-time cloud infra: live multi-currency exchange engine, push notifications, and customer-vendor messaging.",
      "Managed 190+ tag-based CI/CD deployments via GitHub Actions within Agile Scrum sprints."
    ],
    tech: ["Node.js", "Fastify", "TypeScript", "Prisma ORM", "MongoDB", "Redis", "React"]
  },
  {
    title: "Digital Tourism",
    subtitle: "Backend Service Migration",
    url: "https://digitaltourism.travel",
    impactBadge: "93 Database Entities · Unified ERD & Migration",
    points: [
      "Analyzed existing Spring Boot & Node.js services to design a unified consolidated backend architecture.",
      "Reverse-engineered and modeled 93 database entities, designing a comprehensive ERD and migration strategy.",
      "Developed target Prisma schema and collaborated on the complete migration architecture report."
    ],
    tech: ["Node.js", "TypeScript", "Prisma ORM", "MySQL", "Spring Boot", "Java", "ERD"]
  },
  {
    title: "MOOC Platform",
    subtitle: "Multilingual Online Learning Platform",
    impactBadge: "Reusable UI System · Sinhala/English Localization · PWA",
    points: [
      "Built reusable UI component library and centralized design system following Figma specifications.",
      "Implemented API client & state management architecture using Redux Toolkit with optimistic updates and caching.",
      "Delivered English/Sinhala localization, core course interfaces, and progressive web app (PWA) support."
    ],
    tech: ["React 19", "TypeScript", "Vite", "Material UI", "Redux Toolkit", "PWA", "Firebase"]
  }
];

export const FREELANCE_WORK = [
  {
    title: "Freelance Full-Stack Developer",
    client: "Theta Lounge – Floating Therapy Business",
    url: "https://thetalounge.com",
    duration: "Oct 2025 – Present",
    type: "Freelance",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    description: "Developed a commercial full-stack wellness management platform featuring automated session scheduling, zero double-booking transaction safety, and an analytics-rich admin dashboard."
  }
];

export const ADDITIONAL_EXPERIENCE = [
  {
    title: "Marketing Promotion Officer",
    client: "Astra & Link Natural",
    duration: "Dec 2024 – Aug 2025",
    type: "Part-Time",
    description: "Customer engagement and promotional support for Astra and Link Natural."
  }
];

export const EDUCATION = [
  {
    degree: "BSc (Hons) Computing",
    institution: "Wrexham University (UK)",
    year: "Oct 2026 – Present",
    details: "Pursuing a UK-accredited Honours degree in Computing, focusing on advanced software engineering, systems development, database management, and emerging computing technologies.",
  },
  {
    degree: "Higher Diploma in Software Engineering (GDSE)",
    institution: "Institute of Java and Software Engineering (IJSE)",
    year: "Feb 2024 – Sep 2026",
    details: "Completed intensive higher diploma in software engineering covering Java enterprise development, full-stack web applications, database architecture, design patterns, and clean code principles.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Adlync – Smart Classified Ads & Marketplace System",
    subtitle: "Spring Boot · Java 21 · MySQL · WebSocket",
    description: "Developed a full-stack classified marketplace where users can post and manage ads, manage profiles, make payments, and chat with sellers in real time. Implemented role-based access for Admin, Moderator, and User, including ad approvals, payment reviews, report management, and ratings. Built secure authentication, image uploads, and responsive UI with support for Google login and JWT-based access.",
    tech: ["Spring Boot", "Java 21", "MySQL", "Bootstrap", "jQuery", "AJAX", "JSON", "Firebase", "JWT", "WebSocket", "Swagger UI", "Draw.io"],
    features: [
      "Layered Architecture for clean code, high cohesion, and scalability.",
      "User Features: Account creation, Google login, ad posting, reporting, and live messaging.",
      "Admin & Moderator: Ad moderation, payment reviews, report management, and role-based access.",
      "Real-time chat powered by WebSocket and secure background JWT authentication."
    ],
    live: "https://youtu.be/GXPGD9f9S60?si=nnxOtfe3oj2NceIX",
    github: "https://github.com/ruwani425/adlync-springboot-fullstack",
  },
  {
    title: "GoPlan – AI-Powered Travel Planning Mobile App",
    subtitle: "React Native · Expo · Google Gemini API",
    description: "Developed an AI-powered mobile travel planning application with user authentication, profile management, and cloud-based travel data. Integrated Google Gemini API to generate personalized travel plans and recommendations based on user requirements. Processed and managed large travel datasets using Python and integrated cloud image storage for destination content.",
    tech: ["React Native", "Expo", "Google Gemini API", "Firebase Auth", "Firestore", "Redux", "Python", "Cloudinary"],
    features: [
      "AI-driven itinerary generator using Google Gemini API for personalized recommendations.",
      "Cloud-based travel data with Firebase Auth and Firestore real-time synchronization.",
      "Custom Python data processing pipelines for travel and location datasets.",
      "Rich mobile UI built with React Native and Expo."
    ],
    github: "https://github.com/GDSE72/Go-Plan-Mobile-App",
    apk: "https://github.com/GDSE72/Go-Plan-Mobile-App/releases",
  },
  {
    title: "Theta Lounge – Floating Therapy Platform",
    subtitle: "MERN Stack · Full-Stack Commercial Solution",
    description: "Full-stack web application for a wellness therapy center featuring automated session scheduling, package credit redemptions, and an analytics-rich admin dashboard.",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose ORM", "JWT", "Firebase Auth"],
    features: [
      "Custom staggered slot scheduling algorithm based on operational parameters and capacity.",
      "MongoDB ACID transactions ensuring zero double-booking under concurrent traffic.",
      "Admin analytics dashboard visualizing revenue growth, tank utilization, and booking trends.",
      "Automated email notifications and background cron jobs for daily expiration checks."
    ],
    live: "https://thetalounge.com",
  },
  {
    title: "Blood Bank Management System",
    subtitle: "Java · JavaFX · MySQL",
    description: "A comprehensive blood bank management system developed in two iterations: one using Layered Architecture and another using MVC Pattern. Features donor/patient management, inventory tracking, and dynamic reporting.",
    tech: ["Java", "MySQL", "JavaFX", "JDBC", "MVC Pattern", "Layered Architecture", "OOP"],
    features: [
      "Dual architectural implementations: MVC and Layered Architecture.",
      "Complete Donor and Patient management life-cycle and blood stock monitoring.",
      "Hospital and Campaign management modules with dynamic JasperSoft reporting."
    ],
    githubLinks: [
      { label: "MVC Repo", url: "https://github.com/ruwani425/Blood-Bank-Management-System" },
      { label: "Layered Repo", url: "https://github.com/ruwani425/Blood-Bank-layerd-architecture" }
    ],
  },
  {
    title: "Serenity Mental Health Therapy Center",
    subtitle: "JavaFX · Hibernate ORM · MySQL",
    description: "A comprehensive desktop application built with JavaFX and Hibernate ORM for managing daily operations at a mental health therapy center. Digitizes registration, scheduling, and payment processes.",
    tech: ["JavaFX", "Hibernate ORM", "MySQL", "JasperSoft Studio", "BCrypt", "Figma", "Java"],
    features: [
      "Role-based Login System (Admin & Receptionist) with BCrypt encryption.",
      "Therapist and Therapy Program Management with invoice generation.",
      "Layered Architecture (Controller, BO, DAO, Entity, Util) with Factory & Singleton patterns."
    ],
    github: "https://github.com/ruwani425/Mental-Health--Therapy-Center-Hibernate",
  },
];

export const SKILLS = {
  backend: ["Java", "Spring", "Spring Boot", "Java EE", "Node.js", "Express.js", "Fastify", "Hibernate", "JPA", "Python", "REST APIs", "JWT"],
  frontend: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "Material UI", "jQuery", "JavaFX", "React Native", "Figma", "PWA"],
  databases: ["MySQL", "MongoDB", "JDBC", "ORM", "Prisma ORM", "Redis", "Firestore"],
  cloudAndTools: ["Google Cloud Platform", "Firebase", "Vercel", "Docker", "Git", "GitHub", "GitHub Actions", "Postman", "Swagger UI", "MongoDB Compass", "Jira", "AWS S3"],
  architecture: ["MVC Architecture", "Layered Architecture", "Design Patterns", "Object-Oriented Programming (OOP)", "Programming Fundamentals", "Computer Networking"]
};

export const EXPERTISE = [
  {
    title: "Full-Stack Web Development",
    description: "Engineering scalable web applications and high-performance RESTful APIs using Node.js, Fastify, Spring Boot, React, and TypeScript.",
    icon: "Zap",
  },
  {
    title: "Database Design & Migration",
    description: "Architecting complex relational & NoSQL schemas, reverse engineering entity relationships, and conducting large-scale database migrations with Prisma ORM.",
    icon: "Building",
  },
  {
    title: "Mobile App Development",
    description: "Designing and developing intuitive cross-platform mobile applications using React Native and Expo, integrating AI APIs like Google Gemini.",
    icon: "Smartphone",
  },
  {
    title: "Desktop App Development",
    description: "Building efficient, standalone desktop software using JavaFX and Hibernate ORM, following layered architecture and clean design patterns.",
    icon: "Monitor",
  },
];
