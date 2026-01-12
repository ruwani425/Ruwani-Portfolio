import { SKILLS } from "../data/content";
import MotionWrapper from "./MotionWrapper";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
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
  SiExpress,
  SiHibernate,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr"; // Fallback/extra if needed

// Icon Mapping
const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-foreground" />,
  "React Native": <FaReact className="text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  Bootstrap: <SiBootstrap className="text-[#7952B3]" />,
  "HTML/CSS": <SiHtml5 className="text-[#E34F26]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  jQuery: <SiJquery className="text-[#0769AD]" />,
  Figma: <SiFigma className="text-[#F24E1E]" />,
  Java: <FaJava className="text-[#007396]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express.js": <SiExpress className="text-foreground" />,
  Hibernate: <SiHibernate className="text-[#59666C]" />, // Using simplistic colored match
  JPA: <TbApi className="text-gray-500" />,
  Python: <FaPython className="text-[#3776AB]" />,
  "RESTful APIs": <TbApi className="text-blue-500" />,
  Git: <FaGitAlt className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-foreground" />,
  "IntelliJ IDEA": (
    <span className="font-bold text-xs border border-current px-1 rounded">
      IJ
    </span>
  ),
  "VS Code": <VscVscode className="text-[#007ACC]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  Linux: <FaLinux className="text-foreground" />,
  "JasperSoft Studio": (
    <span className="font-bold text-xs border border-current px-1 rounded">
      JS
    </span>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            Skills & Technologies
          </h2>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Frontend */}
          <MotionWrapper delay={0.1}>
            <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors h-full">
              <h3 className="font-bold text-lg text-primary mb-6 border-b border-white/10 pb-2">
                Frontend
              </h3>
              <ul className="space-y-4">
                {SKILLS.frontend.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    <span className="text-xl mr-3 w-6 flex justify-center shrink-0">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          {/* Backend */}
          <MotionWrapper delay={0.2}>
            <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors h-full">
              <h3 className="font-bold text-lg text-primary mb-6 border-b border-white/10 pb-2">
                Backend
              </h3>
              <ul className="space-y-4">
                {SKILLS.backend.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    <span className="text-xl mr-3 w-6 flex justify-center shrink-0">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          {/* Tools */}
          <MotionWrapper delay={0.3}>
            <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors h-full">
              <h3 className="font-bold text-lg text-primary mb-6 border-b border-white/10 pb-2">
                Tools & Others
              </h3>
              <ul className="space-y-4">
                {SKILLS.tools.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium hover:text-foreground transition-colors"
                  >
                    <span className="text-xl mr-3 w-6 flex justify-center shrink-0">
                      {skillIcons[skill] || (
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent))]"></span>
                      )}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
