export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  features?: string[];
  githubLinks?: { label: string; url: string }[];
}

export const EDUCATION = [
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

]

export const SKILLS = {
  languages: ["Java", "JavaScript", "Python"],
  frameworks: ["Spring", "Spring Boot", "JavaFX", "React", "Next.js", "Node.js", "Express.js", "React Native", "HTML/CSS", "Hibernate", "JPA", "Tailwind CSS", "Bootstrap", "jQuery"],
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
