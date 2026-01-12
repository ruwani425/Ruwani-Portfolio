"use client";

import { EXPERTISE } from "../data/content";
import MotionWrapper from "./MotionWrapper";
import { Globe, Building2, Monitor, Smartphone, Zap } from "lucide-react";

const icons = {
  Globe: Globe,
  Zap: Zap,
  Building: Building2,
  Monitor: Monitor,
  Smartphone: Smartphone,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <MotionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              My Expertise
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I deliver comprehensive software solutions across multiple
              platforms, leveraging modern technologies to build efficient and
              scalable applications.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE.map((item, idx) => {
            const Icon = icons[item.icon as keyof typeof icons] || Globe;

            return (
              <MotionWrapper key={idx} delay={idx * 0.1}>
                <div className="glass-card p-6 rounded-2xl h-full hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
