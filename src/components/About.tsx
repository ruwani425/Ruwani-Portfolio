"use client";
import MotionWrapper from "./MotionWrapper";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            About Me
          </h2>
          <div className="glass-card p-8 rounded-xl space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Software Engineering undergraduate currently pursuing a Higher
              Diploma in Software Engineering, with hands on experience in
              developing desktop and web applications. A fast learner with
              strong full stack development skills, following clean code
              principles and best practices.
            </p>
            <p>
              Actively adapts to new technologies, embraces AI driven
              development, and applies modern tools and frameworks through
              academic and freelance projects. Passionate about continuous
              learning and planning to pursue a top up degree while building a
              strong career as a full stack software engineer.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
