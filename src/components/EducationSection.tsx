"use client";
import { EDUCATION } from "../data/content";
import MotionWrapper from "./MotionWrapper";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Education Journey
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
        </MotionWrapper>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[19px] md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className={`relative flex items-start md:items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(var(--accent),0.3)] shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div
                  className={`pl-16 md:pl-0 w-full md:w-1/2 ${
                    idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <MotionWrapper
                    delay={idx * 0.2}
                    direction={idx % 2 === 0 ? "right" : "left"}
                  >
                    <div className="glass-card p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all duration-300 relative group">
                      {/* Decorative glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-10 rounded-2xl transition duration-500 blur-lg"></div>

                      <div className="relative">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                          <Calendar size={12} />
                          {edu.year}
                        </span>

                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>

                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <Award size={16} />
                          <span className="font-medium">{edu.institution}</span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.details}
                        </p>
                      </div>
                    </div>
                  </MotionWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
