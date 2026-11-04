"use client";

import { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  colors?: string[];
  lineColor?: string;
  maxDistance?: number;
  className?: string;
}

const DEFAULT_PALETTE = ["#833AB4", "#E1306C", "#FD1D1D", "#FCAF45"];
const DEFAULT_LINE = "#E1306C";

export default function ParticleNetwork({
  colors = DEFAULT_PALETTE,
  lineColor = DEFAULT_LINE,
  maxDistance = 350,
  className = "",
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Convert hex string to {r, g, b}
    function parseColor(input: string): { r: number; g: number; b: number } {
      if (input.startsWith("#")) {
        const hex = input.replace("#", "");
        if (hex.length === 3) {
          return {
            r: parseInt(hex[0] + hex[0], 16),
            g: parseInt(hex[1] + hex[1], 16),
            b: parseInt(hex[2] + hex[2], 16),
          };
        }
        return {
          r: parseInt(hex.substring(0, 2), 16),
          g: parseInt(hex.substring(2, 4), 16),
          b: parseInt(hex.substring(4, 6), 16),
        };
      }
      return { r: 225, g: 48, b: 108 };
    }

    const palette = colors.map(parseColor);
    const lineRgb = parseColor(lineColor);

    // Setup High-DPI Canvas
    function setCanvasSize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.scale(dpr, dpr);
      return { w, h };
    }

    let { w: width, h: height } = setCanvasSize() || {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    interface FloatingCircle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      baseRadius: number;
      color: { r: number; g: number; b: number };
      projX: number;
      projY: number;
      scale: number;
    }

    // 20-22 Sparse Circles evenly distributed across the entire hero space
    const count = 22;
    const circles: FloatingCircle[] = [];

    const cols = 5;
    const rows = 4;
    const cellW = width / cols;
    const cellH = height / rows;
    let idx = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (idx >= count) break;

        // Organic starting positions across the full hero section
        const startX = (c + 0.5 + (Math.random() - 0.5) * 0.7) * cellW;
        const startY = (r + 0.5 + (Math.random() - 0.5) * 0.7) * cellH;
        const startZ = (Math.random() - 0.5) * 160;

        // Smooth, calm independent floating velocities
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.35 + Math.random() * 0.35;

        circles.push({
          x: startX,
          y: startY,
          z: startZ,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          vz: (Math.random() - 0.5) * 0.3,
          baseRadius: Math.random() * 1.2 + 2.4, // Clean 2.4px - 3.6px circle dots
          color: palette[idx % palette.length],
          projX: startX,
          projY: startY,
          scale: 1,
        });
        idx++;
      }
    }

    // Add 2 extra accent circles for beautiful asymmetry
    while (circles.length < count) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.4 + Math.random() * 0.3;
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: (Math.random() - 0.5) * 160,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: (Math.random() - 0.5) * 0.3,
        baseRadius: 2.8,
        color: palette[circles.length % palette.length],
        projX: 0,
        projY: 0,
        scale: 1,
      });
    }

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 220,
      tiltX: 0,
      tiltY: 0,
      targetTiltX: 0,
      targetTiltY: 0,
    };

    const parent = canvas.parentElement || window;

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Subtle 3D mouse parallax tilt
      mouse.targetTiltX = (mouse.x / width - 0.5) * 35;
      mouse.targetTiltY = (mouse.y / height - 0.5) * 25;
    }

    function onMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.targetTiltX = 0;
      mouse.targetTiltY = 0;
    }

    parent.addEventListener("mousemove", onMouseMove as EventListener);
    parent.addEventListener("mouseleave", onMouseLeave as EventListener);

    function onResize() {
      const size = setCanvasSize();
      if (size) {
        width = size.w;
        height = size.h;
      }
    }

    window.addEventListener("resize", onResize);

    const fov = 850;

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      // Smooth mouse parallax lerp
      mouse.tiltX += (mouse.targetTiltX - mouse.tiltX) * 0.05;
      mouse.tiltY += (mouse.targetTiltY - mouse.tiltY) * 0.05;

      // 1. Animate circles floating organically (NO rigid cage rotation!)
      for (let i = 0; i < circles.length; i++) {
        const c = circles[i];

        // Move individual circle
        c.x += c.vx;
        c.y += c.vy;
        c.z += c.vz;

        // Smooth boundary bounce with padding
        const pad = 40;
        if (c.x < pad) {
          c.x = pad;
          c.vx *= -1;
        } else if (c.x > width - pad) {
          c.x = width - pad;
          c.vx *= -1;
        }

        if (c.y < pad) {
          c.y = pad;
          c.vy *= -1;
        } else if (c.y > height - pad) {
          c.y = height - pad;
          c.vy *= -1;
        }

        if (c.z < -130) {
          c.z = -130;
          c.vz *= -1;
        } else if (c.z > 130) {
          c.z = 130;
          c.vz *= -1;
        }

        // 3D perspective projection + parallax
        const scale = fov / (fov + c.z);
        const parallaxOffset = (c.z / 130);

        c.projX = c.x + mouse.tiltX * parallaxOffset;
        c.projY = c.y + mouse.tiltY * parallaxOffset;
        c.scale = scale;
      }

      // 2. Connect nearby floating circles with long, elegant lines
      for (let i = 0; i < circles.length; i++) {
        const c1 = circles[i];

        for (let j = i + 1; j < circles.length; j++) {
          const c2 = circles[j];

          const dx = c1.projX - c2.projX;
          const dy = c1.projY - c2.projY;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            // Smooth distance fade
            const alpha =
              Math.pow(1 - dist / maxDistance, 0.8) * 0.35 * ((c1.scale + c2.scale) / 2);

            ctx!.beginPath();
            ctx!.moveTo(c1.projX, c1.projY);
            ctx!.lineTo(c2.projX, c2.projY);
            ctx!.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${alpha.toFixed(3)})`;
            ctx!.lineWidth = Math.max(0.65, 0.85 * ((c1.scale + c2.scale) / 2));
            ctx!.stroke();
          }
        }

        // Connect to mouse cursor if near
        const mDist = Math.hypot(c1.projX - mouse.x, c1.projY - mouse.y);
        if (mDist < mouse.radius) {
          const alpha = (1 - mDist / mouse.radius) * 0.65;
          ctx!.beginPath();
          ctx!.moveTo(c1.projX, c1.projY);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.strokeStyle = `rgba(${c1.color.r}, ${c1.color.g}, ${c1.color.b}, ${alpha.toFixed(3)})`;
          ctx!.lineWidth = 1.1;
          ctx!.stroke();
        }

        // Draw individual floating circle dot
        const nodeRadius = c1.baseRadius * Math.max(0.75, c1.scale);
        const nodeAlpha = Math.max(0.45, Math.min(1.0, 0.88 * c1.scale));

        ctx!.beginPath();
        ctx!.arc(c1.projX, c1.projY, nodeRadius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${c1.color.r}, ${c1.color.g}, ${c1.color.b}, ${nodeAlpha.toFixed(2)})`;
        ctx!.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener("mousemove", onMouseMove as EventListener);
      parent.removeEventListener("mouseleave", onMouseLeave as EventListener);
      window.removeEventListener("resize", onResize);
    };
  }, [maxDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
      }}
    />
  );
}
