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
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiFigma,
  SiSpringboot,
  SiSpring,
  SiExpress,
  SiHibernate,
  SiPostman,
  SiApache,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { DiMongodb, DiDatabase } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

// Icon Mapping
const skillIcons: Record<string, React.ReactNode> = {
  // Languages
  Java: <FaJava className="text-[#007396]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Python: <FaPython className="text-[#3776AB]" />,
  "HTML/CSS": <SiHtml5 className="text-[#E34F26]" />,
  SQL: <DiDatabase className="text-gray-400" />,

  // Frameworks & Tech
  Spring: <SiSpring className="text-[#6DB33F]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
  JavaFX: <FaJava className="text-[#007396]" />, // Using Java icon as fallback/related
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-foreground" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-foreground" />,
  "React Native": <FaReact className="text-[#61DAFB]" />,
  Hibernate: <SiHibernate className="text-[#59666C]" />,
  JPA: <TbApi className="text-gray-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  jQuery: <SiJquery className="text-[#0769AD]" />,

  // Databases
  MySQL: <GrMysql className="text-[#4479A1]" />,
  MongoDB: <DiMongodb className="text-[#47A248]" />,

  // Tools
  Git: <FaGitAlt className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-foreground" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Linux: <FaLinux className="text-foreground" />,
  Windows: <FaWindows className="text-[#0078D6]" />,
  macOS: <FaApple className="text-foreground" />,
  "IntelliJ IDEA": (
    <span className="font-bold text-xs border border-current px-1 rounded">
      IJ
    </span>
  ),
  "VS Code": <VscVscode className="text-[#007ACC]" />,
  "NetBeans IDE": <SiApache className="text-[#D32F2F]" />,
  "Google Antigravity": <FcGoogle className="text-foreground" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  "JasperSoft Studio": (
    <span className="font-bold text-xs border border-current px-1 rounded">
      JS
    </span>
  ),
  "RESTful APIs": <TbApi className="text-blue-500" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            Skills & Technologies
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 1. Languages */}
          <MotionWrapper delay={0.1}>
            <div className="glass-card p-5 rounded-xl hover:bg-card/80 transition-colors h-full flex flex-col">
              <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.languages.map((skill) => (
                  <div
                    key={skill}
                    className="bg-background/40 hover:bg-background/60 border border-white/5 hover:border-accent/30 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>

          {/* 2. Databases */}
          <MotionWrapper delay={0.2}>
            <div className="glass-card p-5 rounded-xl hover:bg-card/80 transition-colors h-full flex flex-col">
              <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.databases.map((skill) => (
                  <div
                    key={skill}
                    className="bg-background/40 hover:bg-background/60 border border-white/5 hover:border-accent/30 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>

          {/* 3. Frameworks & Technologies */}
          <MotionWrapper delay={0.3}>
            <div className="glass-card p-5 rounded-xl hover:bg-card/80 transition-colors h-full flex flex-col">
              <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Frameworks & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frameworks.map((skill) => (
                  <div
                    key={skill}
                    className="bg-background/40 hover:bg-background/60 border border-white/5 hover:border-accent/30 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>

          {/* 4. Tools & Platforms */}
          <MotionWrapper delay={0.4}>
            <div className="glass-card p-5 rounded-xl hover:bg-card/80 transition-colors h-full flex flex-col">
              <h3 className="font-bold text-base md:text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill) => (
                  <div
                    key={skill}
                    className="bg-background/40 hover:bg-background/60 border border-white/5 hover:border-accent/30 rounded-lg px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
