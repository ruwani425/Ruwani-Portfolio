"use client";

import { SKILLS } from "../data/content";
import MotionWrapper from "./MotionWrapper";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaWindows,
  FaApple,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiFigma,
  SiSpringboot,
  SiSpring,
  SiExpress,
  SiFastify,
  SiHibernate,
  SiPostman,
  SiApache,
  SiAngular,
  SiPrisma,
  SiRedis,
  SiVercel,
  SiFirebase,
  SiGooglecloud,
  SiMui,
  SiJira,
  SiSwagger,
} from "react-icons/si";
import { TbApi, TbBrandRedux } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { DiMongodb, DiDatabase } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

// Icon Mapping
const skillIcons: Record<string, React.ReactNode> = {
  // Languages & Backend
  Java: <FaJava className="text-[#007396]" />,
  "Java EE": <FaJava className="text-[#007396]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  Python: <FaPython className="text-[#3776AB]" />,
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  "HTML/CSS": <SiHtml5 className="text-[#E34F26]" />,
  Spring: <SiSpring className="text-[#6DB33F]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-foreground" />,
  Fastify: <SiFastify className="text-foreground" />,
  Hibernate: <SiHibernate className="text-[#59666C]" />,
  JPA: <TbApi className="text-gray-500" />,
  "REST APIs": <TbApi className="text-blue-500" />,
  JWT: <span className="font-bold text-[10px] bg-accent/20 text-accent px-1 rounded">JWT</span>,

  // Frontend
  React: <FaReact className="text-[#61DAFB]" />,
  "Material UI": <SiMui className="text-[#007FFF]" />,
  "React Native": <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-foreground" />,
  JavaFX: <FaJava className="text-[#007396]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  jQuery: <SiJquery className="text-[#0769AD]" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  PWA: <span className="font-bold text-[10px] bg-primary/20 text-primary px-1 rounded">PWA</span>,

  // Databases
  MySQL: <GrMysql className="text-[#4479A1]" />,
  MongoDB: <DiMongodb className="text-[#47A248]" />,
  JDBC: <DiDatabase className="text-gray-400" />,
  ORM: <DiDatabase className="text-gray-400" />,
  "Prisma ORM": <SiPrisma className="text-foreground" />,
  Redis: <SiRedis className="text-[#DC382D]" />,
  Firestore: <SiFirebase className="text-[#FFCA28]" />,

  // Cloud & Tools
  "Google Cloud Platform": <SiGooglecloud className="text-[#4285F4]" />,
  Firebase: <SiFirebase className="text-[#FFCA28]" />,
  Vercel: <SiVercel className="text-foreground" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  Git: <FaGitAlt className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-foreground" />,
  "GitHub Actions": <FaGithub className="text-accent" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  "Swagger UI": <SiSwagger className="text-[#85EA2D]" />,
  "MongoDB Compass": <DiMongodb className="text-[#47A248]" />,
  Jira: <SiJira className="text-[#0052CC]" />,
  "AWS S3": <FaAws className="text-[#FF9900]" />,
  Linux: <FaLinux className="text-foreground" />,
  Windows: <FaWindows className="text-[#0078D6]" />,
  macOS: <FaApple className="text-foreground" />,
  "IntelliJ IDEA": <span className="font-bold text-xs border border-current px-1 rounded">IJ</span>,
  "VS Code": <VscVscode className="text-[#007ACC]" />,
  "NetBeans IDE": <SiApache className="text-[#D32F2F]" />,
  "Google Antigravity": <FcGoogle className="text-foreground" />,
  "JasperSoft Studio": <span className="font-bold text-xs border border-current px-1 rounded">JS</span>,
};

const skillCategories = [
  { title: "Backend Development", key: "backend" as const, delay: 0.1 },
  { title: "Frontend Development", key: "frontend" as const, delay: 0.2 },
  { title: "Databases & Persistence", key: "databases" as const, delay: 0.3 },
  { title: "Cloud, Tools & Platforms", key: "cloudAndTools" as const, delay: 0.4 },
  { title: "Architecture & Concepts", key: "architecture" as const, delay: 0.5 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 xxs:px-3 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </MotionWrapper>

        {/* Top Row: Core 3 Categories (Backend, Frontend, Databases) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {skillCategories.slice(0, 3).map((cat) => (
            <MotionWrapper key={cat.key} delay={cat.delay} className="h-full">
              <div className="glass-card p-6 rounded-2xl hover:bg-card/80 transition-all duration-300 h-full flex flex-col">
                <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS[cat.key].map((skill) => (
                    <div
                      key={skill}
                      className="bg-background/50 hover:bg-background/80 border border-white/5 hover:border-accent/40 rounded-xl px-3 py-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group cursor-default shadow-sm"
                    >
                      <span className="text-base group-hover:scale-110 transition-transform duration-200">
                        {skillIcons[skill] || (
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_6px_rgba(var(--accent))]"></span>
                        )}
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Bottom Section: Wide & Compact Horizontal Boxes for Cloud Tools and Architecture */}
        <div className="space-y-5">
          {skillCategories.slice(3).map((cat) => (
            <MotionWrapper key={cat.key} delay={cat.delay}>
              <div className="glass-card p-6 rounded-2xl hover:bg-card/80 transition-all duration-300">
                <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS[cat.key].map((skill) => (
                    <div
                      key={skill}
                      className="bg-background/50 hover:bg-background/80 border border-white/5 hover:border-accent/40 rounded-xl px-3 py-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group cursor-default shadow-sm"
                    >
                      <span className="text-base group-hover:scale-110 transition-transform duration-200">
                        {skillIcons[skill] || (
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_6px_rgba(var(--accent))]"></span>
                        )}
                      </span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
