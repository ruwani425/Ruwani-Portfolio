"use client";
import { WORK_EXPERIENCE, FREELANCE_WORK, ADDITIONAL_EXPERIENCE } from "../data/content";
import MotionWrapper from "./MotionWrapper";

export default function Freelance() {
  return (
    <section
      id="experience"
      className="py-20 px-4 xxs:px-3 sm:px-6 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            Professional Experience
          </h2>
        </MotionWrapper>

        {/* Work Experience Section */}
        {WORK_EXPERIENCE && WORK_EXPERIENCE.length > 0 && (
          <div className="mb-12">
            <MotionWrapper delay={0.1} direction="left">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
                Work Experience
              </h3>
            </MotionWrapper>
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <MotionWrapper key={idx} delay={0.2 + idx * 0.1}>
                  <div className="glass-card rounded-xl p-5 sm:p-6 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01]">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-primary">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline hover:text-accent transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}{" "}
                          <span className="text-muted-foreground font-normal">| {exp.location}</span>
                        </p>
                      </div>
                      <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between text-xs text-muted-foreground mb-4 font-mono gap-1">
                      <span>{exp.duration}</span>
                      {exp.project && (
                        <span className="text-accent font-semibold">{exp.project}</span>
                      )}
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <MotionWrapper delay={0.1} direction="left">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
              Freelance & Technical
            </h3>
          </MotionWrapper>
          <div className="space-y-6">
            {FREELANCE_WORK.map((work, idx) => (
              <MotionWrapper key={idx} delay={0.2 + idx * 0.1}>
                <div className="glass-card rounded-xl p-5 sm:p-6 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01]">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-bold text-lg text-foreground">
                      {work.title}
                    </h3>
                    <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
                      {work.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    {work.duration}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        <div>
          <MotionWrapper delay={0.4} direction="left">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
              Additional Experience
            </h3>
          </MotionWrapper>
          <div className="space-y-6">
            {ADDITIONAL_EXPERIENCE.map((work, idx) => (
              <MotionWrapper key={idx} delay={0.5 + idx * 0.1}>
                <div className="glass-card rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] opacity-90">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-bold text-lg text-foreground">
                      {work.title}
                    </h3>
                    <span className="text-xs font-bold text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {work.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    {work.duration}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
