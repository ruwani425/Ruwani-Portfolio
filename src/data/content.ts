export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  features?: string[];
  githubLinks?: { label: string; url: string }[];
}

export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  type: string;
  project?: string;
  points: string[];
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Software Engineering Intern",
    company: "Code3x (Pvt) Ltd.",
    companyUrl: "https://code3x.tech/",
    location: "Colombo, Sri Lanka",
    duration: "Mar 2026 – Sep 2026",
    type: "Full-Time | Remote",
    project: "Rentzee – Vehicle Rental Platform",
    points: [
      "Developed and maintained scalable backend services and RESTful APIs using Node.js, Fastify, and TypeScript, while contributing to frontend development with React.",
      "Implemented new features and resolved bugs based on business requirements, collaborating with the development team to deliver reliable and high-quality software.",
      "Worked extensively with Git and GitHub, including branch management, creating and reviewing pull requests, resolving merge conflicts, and maintaining code quality through peer reviews.",
      "Followed Agile Scrum practices by participating in daily stand-up meetings, sprint planning, and retrospective sessions, while managing development tasks using Jira.",
      "Assisted with CI/CD workflows by deploying application updates to the staging environment using GitHub Actions and validating features before release.",
      "Collaborated with cross-functional team members to test, debug, and maintain applications while following clean code principles and software engineering best practices."
    ]
  }
]

export const EDUCATION = [
  {
    degree: "BSc (Hons) Computing Science (Level 6 Top-up)",
    institution: "Wrexham University (UK)",
    year: "Sep 2026 - Present",
    details: "Pursuing a UK-accredited Honours degree in Computing, focusing on advanced software engineering, systems development, database management, and emerging computing technologies to build upon diploma qualifications.",
  },
  {
    degree: "Graduate Diploma in Software Engineering (GDSE-72)",
    institution: "Institute of Java and Software Engineering (IJSE)",
    year: "Feb 2024 - Present",
    details: "Completed three semesters of a four-semester higher diploma program. Maintained a GPA of 3.52 in the first semester.",
  },
  {
    degree: "G.C.E. Advanced Level (Biological Science)",
    institution: "Wanduramba Central College - Galle",
    year: "Oct 2020",
    details: "Subjects: Physics (S), Biology (S), General English (S), Common General Test (Pass)",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Wanduramba Central College - Galle",
    year: "Dec 2017",
    details: "6A, 2B, 1C",
  },
]

export const FREELANCE_WORK = [
  {
    title: "Freelance Full-Stack Developer",
    description: "Self-Employed part-time developer working on diverse projects including Theta Lounge floating therapy business.",
    duration: "Oct 2025 - Present",
    type: "Self-Employed",
  },
]

export const ADDITIONAL_EXPERIENCE = [
  {
    title: "Marketing Promotion Officer",
    description: "Customer engagement and promotional support for Astra and Link Natural.",
    duration: "Dec 2024 - Aug 2025",
    type: "Part-Time",
  },
]

export const PROJECTS: Project[] = [
  {
    title: "Theta Lounge - Floating Therapy Business",
    description: "Freelance Full-Stack Project | MERN Stack. Developed a full-stack web application for a floating therapy wellness center to manage client appointments and operational workflows.",
    tech: [],
    features: [
      "Built a session-based tank management system, enabling tank-wise scheduling and availability tracking.",
      "Implemented time slot calculation logic for accurate appointment booking and conflict prevention.",
      "Developed a client appointment booking system with real-time availability.",
      "Created an admin dashboard to manage tanks, operational days, appointments, and therapy packages.",
      "Implemented role-based access control for admin and client users.",
      "Integrated Google Authentication for secure user login."
    ],

    live: "https://thetalounge.com",
  },
  {
    title: "Adlync - Smart Classified Ads & Marketplace",
    description: "A full-stack web application built with Spring Boot (Java 21) and MySQL for managing classified ads. Features real-time chat, image uploads, and secure JWT authentication. (2nd Semester Final Project)",
    tech: ["Spring Boot", "Java 21", "React", "MySQL", "Firebase", "WebSocket", "JWT", "Bootstrap", "jQuery", "Swagger"],
    features: [
      "Layered Architecture for clean code and scalability.",
      "User Features: Account creation, Google login, ad posting, reporting, and live messaging.",
      "Admin Features: Ad moderation, report management, and role-based access.",
      "Responsive UI/UX using HTML, CSS, Bootstrap, and jQuery.",
      "API Testing with Swagger UI.",
      "Secure background implementation with JWT and cookies."
    ],
    github: "https://github.com",
    live: "https://youtu.be/GXPGD9f9S60?si=nnxOtfe3oj2NceIX",

  },
  {
    title: "Blood Bank Management System",
    description: "A comprehensive blood bank management system developed in two iterations: one using Layered Architecture and another using MVC Pattern. Features donor/patient management, inventory tracking, and dynamic reporting.",
    tech: ["Java", "MySQL", "JavaFX", "JDBC", "MVC Pattern", "Layered Architecture", "Object Oriented Programming (OOP)"],
    features: [
      "Two architectural implementations: MVC and Layered Architecture.",
      "Complete Donor and Patient management life-cycle.",
      "blood stock monitoring and inventory tracking.",
      "Hospital and Campaign management modules.",
      "User authentication and role-based authorization.",
      "Dynamic reporting and email notifications."
    ],
    github: "#", // Placeholder, will use githubLinks
    githubLinks: [
      { label: "MVC Repo", url: "https://github.com/ruwani425/Blood-Bank-Management-System.git" },
      { label: "Layered Repo", url: "https://github.com/ruwani425/Blood-Bank-layerd-architecture.git" }
    ],

  },
  {
    title: "Serenity Mental Health Therapy Center Management System",
    description: "A comprehensive desktop application built with JavaFX and Hibernate ORM for managing daily operations at a mental health therapy center. Digitizes registration, scheduling, and payment processes. (GDSE 71/72 ORM Concepts Coursework)",
    tech: ["JavaFX", "Hibernate ORM", "MySQL", "JasperSoft Studio", "BCrypt", "Figma", "Java"],
    features: [
      "Role-based Login System (Admin & Receptionist).",
      "Therapist and Therapy Program Management.",
      "Patient Registration, Profile Handling, and Session Scheduling.",
      "Payment Processing & Invoice Generation.",
      "Dynamic Reports with JasperSoft Studio.",
      "Secure Password Storage with BCrypt.",
      "Layered Architecture (Controller, BO, DAO, Entity, Util, View) and Design Patterns (Factory, Singleton)."
    ],
    github: "https://github.com/ruwani425/Mental-Health--Therapy-Center-Hibernate",

  },
]

export const SKILLS = {
  languages: ["Java", "JavaScript", "Python"],
  frameworks: ["Angular", "Spring", "Spring Boot", "JavaFX", "React", "Next.js", "Node.js", "Express.js", "React Native", "HTML/CSS", "Hibernate", "JPA", "Tailwind CSS", "Bootstrap", "jQuery"],
  databases: ["MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Postman", "Linux", "Windows", "macOS", "IntelliJ IDEA", "VS Code", "NetBeans IDE", "Google Antigravity", "Figma", "JasperSoft Studio"],
}

export const EXPERTISE = [
  {
    title: "Rapid Application Development",
    description: " delivering high-quality prototypes and MVPs at speed using modern frameworks like Next.js and Tailwind CSS to accelerate time-to-market.",
    icon: "Zap",
  },
  {
    title: "Enterprise Web Applications",
    description: "Architecting scalable, secure, and robust enterprise-grade web solutions using Spring Boot and Microservices for complex business needs.",
    icon: "Building",
  },
  {
    title: "Mobile App Development",
    description: "Designing and developing intuitive cross-platform mobile applications for Android and iOS using React Native, focused on performance.",
    icon: "Smartphone",
  },
  {
    title: "Desktop App Development",
    description: "Building efficient, standalone desktop software using JavaFX and Electron, ensuring seamless offline functionality and rich user experiences.",
    icon: "Monitor",
  },
];
