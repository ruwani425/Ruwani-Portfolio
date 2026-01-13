"use client";
import MotionWrapper from "./MotionWrapper";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left Column: Heading & Visuals */}
          <MotionWrapper direction="right" delay={0.1}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-9xl font-bold text-accent/5 select-none -z-10 hidden md:block">
                ABOUT
              </div>
              <h2 className="text-4xl xs:text-5xl font-extrabold text-foreground mb-6 relative">
                About <span className="text-accent">Me</span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-accent rounded-full"></span>
              </h2>
              <p className="text-lg font-medium text-muted-foreground mb-4">
                Full Stack Developer &<br /> Software Engineering Student
              </p>
            </div>
          </MotionWrapper>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <MotionWrapper direction="right" delay={0.2}>
              <div className="relative pl-6 border-l-4 border-accent/20 hover:border-accent transition-colors duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  My Background
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  I am a Software Engineering undergraduate currently pursuing a
                  Higher Diploma in Software Engineering, with hands-on
                  experience in developing desktop and web applications. I'm a
                  fast learner with strong full stack development skills, always
                  prioritizing clean code principles and industry best
                  practices.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="right" delay={0.3}>
              <div className="relative pl-6 border-l-4 border-primary/20 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  My Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  I actively adapt to new technologies and embrace AI-driven
                  development. My journey involves applying modern tools and
                  frameworks through both academic and freelance projects. I am
                  passionate about continuous learning and plan to pursue a
                  top-up degree while building a strong career as a full stack
                  software engineer.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
