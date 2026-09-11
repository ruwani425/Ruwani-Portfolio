"use client";
import Image from "next/image";
import { WORK_EXPERIENCE, CODE3X_PROJECTS, FREELANCE_WORK, ADDITIONAL_EXPERIENCE } from "../data/content";
import MotionWrapper from "./MotionWrapper";
import { ExternalLink, Sparkles } from "lucide-react";

export default function Freelance() {
  return (
    <section
      id="experience"
      className="py-20 px-4 xxs:px-3 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </MotionWrapper>

        {/* 1. Work Experience (Code3x + 3-Box Row) */}
        <div className="mb-14">
          <MotionWrapper delay={0.1} direction="left">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
              <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
              Work Experience
            </h3>
          </MotionWrapper>

          {/* Company Header Banner */}
          <MotionWrapper delay={0.15}>
            <div className="glass-card rounded-2xl p-5 sm:p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                {WORK_EXPERIENCE.logo && (
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-border shrink-0 shadow-md bg-card">
                    <Image
                      src={WORK_EXPERIENCE.logo}
                      alt={WORK_EXPERIENCE.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-extrabold text-xl text-foreground">
                    {WORK_EXPERIENCE.role}
                  </h4>
                  <p className="text-sm font-semibold text-primary mt-0.5 flex items-center gap-1.5 flex-wrap">
                    {WORK_EXPERIENCE.companyUrl ? (
                      <a
                        href={WORK_EXPERIENCE.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent transition-colors inline-flex items-center gap-1"
                      >
                        {WORK_EXPERIENCE.company}
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      WORK_EXPERIENCE.company
                    )}
                    <span className="text-muted-foreground font-normal">
                      • {WORK_EXPERIENCE.location}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {WORK_EXPERIENCE.duration}
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full whitespace-nowrap">
                {WORK_EXPERIENCE.type}
              </span>
            </div>
          </MotionWrapper>

          {/* 3 Separate Experience Boxes Ordered in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CODE3X_PROJECTS.map((proj, idx) => (
              <MotionWrapper key={idx} delay={0.2 + idx * 0.1} className="h-full">
                <div className="glass-card rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] h-full flex flex-col justify-between">
                  <div>
                    {/* Project Header */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                        {proj.title}
                      </h5>
                      {proj.url && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors p-1"
                          aria-label={proj.title}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-primary font-medium mb-3">
                      {proj.subtitle}
                    </p>

                    {/* Impact Badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent rounded-lg px-2.5 py-1 text-[11px] font-semibold">
                      <Sparkles size={12} className="shrink-0" />
                      <span>{proj.impactBadge}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                      {proj.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags at the bottom */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mt-auto">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium bg-background/50 border border-white/5 text-muted-foreground px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* 2. Freelance & Technical Experience */}
        {FREELANCE_WORK && FREELANCE_WORK.length > 0 && (
          <div className="mb-14">
            <MotionWrapper delay={0.25} direction="left">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent))]"></span>
                Freelance & Technical
              </h3>
            </MotionWrapper>

            <div className="grid grid-cols-1 gap-6">
              {FREELANCE_WORK.map((work, idx) => (
                <MotionWrapper key={idx} delay={0.3 + idx * 0.1}>
                  <div className="glass-card rounded-2xl p-6 sm:p-7 hover:bg-card/80 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-lg sm:text-xl text-foreground">
                          {work.title}
                        </h4>
                        <p className="text-sm font-semibold text-primary mt-0.5 flex items-center gap-1.5 flex-wrap">
                          <span>{work.client}</span>
                          {work.url && (
                            <a
                              href={work.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-accent hover:underline inline-flex items-center gap-1 font-mono"
                            >
                              {work.url.replace(/^https?:\/\//, "")}
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">
                          {work.duration}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                        {work.type}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {work.description}
                    </p>

                    {work.tech && work.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {work.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium bg-background/50 border border-white/5 text-muted-foreground px-2.5 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        )}

        {/* 3. Additional Experience */}
        {ADDITIONAL_EXPERIENCE && ADDITIONAL_EXPERIENCE.length > 0 && (
          <div>
            <MotionWrapper delay={0.35} direction="left">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></span>
                Additional Experience
              </h3>
            </MotionWrapper>

            <div className="grid grid-cols-1 gap-6">
              {ADDITIONAL_EXPERIENCE.map((work, idx) => (
                <MotionWrapper key={idx} delay={0.4 + idx * 0.1}>
                  <div className="glass-card rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 opacity-90">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                      <div>
                        <h4 className="font-bold text-lg text-foreground">
                          {work.title}
                        </h4>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {work.client}
                        </p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">
                          {work.duration}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {work.type}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
