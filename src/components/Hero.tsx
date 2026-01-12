"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Freelancer",
  "Software Engineering Student",
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
    <section className="min-h-screen flex items-center pt-24 pb-20 px-4 xxs:px-3 sm:px-6 relative overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

      {/* Organic Wave Background - Right Side */}
      <div className="absolute top-0 right-0 w-[90%] md:w-[55%] h-full z-0 pointer-events-none opacity-20 md:opacity-100 mix-blend-multiply dark:mix-blend-lighten">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full fill-accent/10 dark:fill-primary/10"
        >
          <path d="M100 0V100H20C-20 70 50 50 20 0H100Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Col: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-8 md:pt-0">
          <MotionWrapper direction="up" delay={0.1}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <span className="text-accent font-semibold text-xs sm:text-sm tracking-wide">
                Available for Freelance
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2}>
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-gradient-primary">Ruwani Ranthika</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.3}>
            <div className="h-8 sm:h-10 mb-6 overflow-hidden relative w-full flex justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xl sm:text-2xl text-foreground font-semibold"
                >
                  {titles[index]}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I build responsive web applications and deliver custom software
              solutions. Specializing in modern technologies and best practices.
            </p>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-accent text-white rounded-full font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transform flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/Ruwani_Ranthika_CV.pdf"
                download="Ruwani_Ranthika_CV.pdf"
                className="px-8 py-3.5 border border-border bg-background/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Download My CV
                <Download size={18} />
              </a>
            </div>
          </MotionWrapper>
        </div>

        {/* Right Col: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Responsive image size: small on mobile, medium on tablet, large on desktop */}
            <div className="relative w-64 h-64 xxs:w-72 xxs:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Soft Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-primary opacity-20 blur-2xl animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-[6px] border-background shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 ring-4 ring-primary/20">
                <Image
                  src="/IMG_20260103_134927.png"
                  alt="Ruwani Ranthika"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative Elements around the frame - Orange Tint */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
