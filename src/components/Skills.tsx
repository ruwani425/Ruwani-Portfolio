"use client";
import { SKILLS } from "../data/content";
import MotionWrapper from "./MotionWrapper";

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
              <h3 className="font-bold text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Frontend
              </h3>
              <ul className="space-y-3">
                {SKILLS.frontend.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_8px_rgba(var(--accent))]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          {/* Backend */}
          <MotionWrapper delay={0.2}>
            <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors h-full">
              <h3 className="font-bold text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Backend
              </h3>
              <ul className="space-y-3">
                {SKILLS.backend.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_8px_rgba(var(--accent))]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          {/* Tools */}
          <MotionWrapper delay={0.3}>
            <div className="glass-card p-6 rounded-xl hover:bg-card/80 transition-colors h-full">
              <h3 className="font-bold text-lg text-primary mb-4 border-b border-white/10 pb-2">
                Tools & Others
              </h3>
              <ul className="space-y-3">
                {SKILLS.tools.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shadow-[0_0_8px_rgba(var(--accent))]"></span>
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
