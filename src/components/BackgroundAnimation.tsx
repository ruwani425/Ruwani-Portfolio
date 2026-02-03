"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Circle properties interface
interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function BackgroundAnimation() {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    // Generate random circles on the client side only to avoid hydration mismatch
    const generateCircles = () => {
      const newCircles: Circle[] = [];
      const circleCount = 20; // Increased count slightly

      for (let i = 0; i < circleCount; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100, // Random percentage for x position
          y: -20, // Start above the viewport
          size: Math.random() * 60 + 10, // Random size between 10px and 70px
          duration: Math.random() * 15 + 10, // Duration between 10s and 25s for slow fall
          delay: Math.random() * 20, // Random delay to stagger starts
          opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1 and 0.4 for better visibility testing
        });
      }
      return newCircles;
    };

    setCircles(generateCircles());
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
          style={{
            left: `${circle.x}%`,
            width: circle.size,
            height: circle.size,
            opacity: circle.opacity,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: "110vh", // Fall to below the viewport
            opacity: [0, circle.opacity, 0], // Fade in, stay visible, fade out
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
