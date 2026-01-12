"use client";

import { PROJECTS } from "../data/content";
import { Github, ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Featured Projects
          </h2>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.1} className="h-full">
              <div className="glass-card rounded-xl p-8 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col">
                <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {project.features && (
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-6 space-y-2 opacity-90">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/ruwani425"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              <Github size={20} />
              Visit My GitHub Profile
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
