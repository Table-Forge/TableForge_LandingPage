"use client";

import { useEffect, useRef } from "react";
import { createForgeSparksRenderer } from "./forge-sparks-renderer";

const MAX_PIXEL_RATIO = 2;
const MAX_FRAME_SECONDS = 1 / 30;

export const ForgeSparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const renderer = createForgeSparksRenderer(canvas);
    if (!renderer) return;

    let frame = 0;
    let previousTime = 0;

    const tick = (now: number) => {
      const delta = previousTime ? Math.min((now - previousTime) / 1000, MAX_FRAME_SECONDS) : 0;
      previousTime = now;
      renderer.render(delta);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      previousTime = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resizeObserver = new ResizeObserver(() => {
      renderer.resize(
        canvas.clientWidth,
        canvas.clientHeight,
        Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO),
      );
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
      } else {
        stop();
      }
    });
    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full pointer-events-none z-10 flex justify-center">
      {/* Glow / Divider */}
      <div className="h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-[#ff2400]/50 to-transparent drop-shadow-[0_-8px_24px_rgba(255,36,0,0.6)]" />

      {/* Sparks container */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[380px] w-full"
      />
    </div>
  );
};
