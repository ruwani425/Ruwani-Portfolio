"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Freelancer",
  "AI-Assisted Developer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-8 px-4 sm:px-6 md:px-8 relative overflow-hidden w-full">
      {/* Dynamic Ambient Theme Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] bg-primary/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[220px] h-[220px] md:w-[380px] md:h-[380px] bg-accent/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

      <div className="max-w-5xl lg:max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 relative z-10">
        {/* Left Col: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <MotionWrapper direction="up" delay={0.1}>
            <div className="inline-block mb-3 md:mb-4 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <span className="text-accent font-semibold text-xs sm:text-sm tracking-wide">
                Available for Freelance
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2}>
            <h1 className="hero-desktop-heading text-3xl xxs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="text-gradient-primary">Ruwani Ranthika</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.3}>
            <div className="h-7 sm:h-8 md:h-9 mb-3 md:mb-4 overflow-hidden relative w-full flex justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-lg sm:text-xl lg:text-2xl text-foreground font-semibold"
                >
                  {titles[index]}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg leading-relaxed">
              I engineer scalable web applications and deliver robust software
              solutions, specializing in modern technologies and industry best
              practices.
            </p>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transform flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/Ruwani_Ranthika_Resume_v2.pdf"
                download="Ruwani_Ranthika_Resume_v2.pdf"
                className="px-6 sm:px-8 py-3 sm:py-3.5 border border-border bg-background/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition backdrop-blur-sm flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Download My CV
                <Download size={18} />
              </a>
            </div>
          </MotionWrapper>
        </div>

        {/* Right Col: Circular Profile Image with Glowing Rim */}
        <div className="flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient Purple/Pink Glow behind circular avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FCAF45] rounded-full blur-[35px] md:blur-[45px] opacity-60 scale-105 pointer-events-none" />

            {/* Circular Image Frame */}
            <div className="hero-desktop-avatar relative w-[240px] h-[240px] xxs:w-[270px] xxs:h-[270px] sm:w-[320px] sm:h-[320px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl z-10">
              <Image
                src="/ruwani.png"
                alt="Ruwani Ranthika"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
