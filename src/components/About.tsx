"use client";
import MotionWrapper from "./MotionWrapper";
import BackgroundAnimation from "./BackgroundAnimation";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 overflow-hidden relative">
      <BackgroundAnimation />
      <div className="max-w-6xl mx-auto relative z-10">
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
                Software Engineer &<br /> Full-Stack Developer
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
                  I am a Software Engineer who has completed a Higher Diploma in
                  Software Engineering (IJSE) and is currently pursuing a BSc (Hons) in
                  Computing at Wrexham University (UK). With hands-on industry experience
                  through a six-month full-stack software engineering internship and
                  freelance development, I specialize in building scalable web applications,
                  RESTful APIs, and cloud-native solutions following clean code principles.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="right" delay={0.3}>
              <div className="relative pl-6 border-l-4 border-primary/20 hover:border-primary transition-colors duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  My Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  I actively adapt to emerging technologies and embrace AI-assisted
                  software development (such as Google Gemini, Next.js, and modern cloud
                  architectures). I am passionate about engineering high-quality, resilient
                  systems and growing as a world-class full-stack software engineer.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
