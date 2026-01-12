"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Col: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <MotionWrapper direction="up" delay={0.1}>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
              <span className="text-accent font-semibold text-sm tracking-wide">
                Available for Freelance
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-gradient-primary">Ruwani Ranthika</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.3}>
            <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
              <span className="text-foreground font-semibold">
                Software Engineering Student
              </span>{" "}
              | Part-Time Freelancer
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
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
                href="/cv.pdf"
                className="px-8 py-3.5 border border-border bg-background/50 text-foreground rounded-full font-semibold hover:bg-accent/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Download CV
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
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-orange-600 p-1.5 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <div className="relative w-full h-full rounded-[2.1rem] overflow-hidden bg-background">
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
