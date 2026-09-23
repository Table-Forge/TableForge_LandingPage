"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ForgeSparks = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [sparks] = useState(() =>
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage position across width
      size: Math.random() * 3 + 2, // 2px to 5px size
      duration: Math.random() * 3 + 2, // 2s to 5s animation
      delay: Math.random() * 3, // random start delay
      targetX: Math.random() * 60 - 30, // Drift horizontally
      targetY: -150 - Math.random() * 150, // Move upwards significantly
    }))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full pointer-events-none z-10 flex justify-center">
      {/* Glow / Divider */}
      <div className="h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-[#ff2400]/50 to-transparent drop-shadow-[0_-8px_24px_rgba(255,36,0,0.6)]" />

      {/* Sparks container */}
      <div className="absolute bottom-0 w-full max-w-5xl">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute bottom-0 rounded-full bg-[#ffb700]"
            style={{
              left: `${spark.left}%`,
              width: spark.size,
              height: spark.size,
              boxShadow: "0 0 10px 2px rgba(255, 36, 0, 0.9)",
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: spark.targetY,
              opacity: [0, 1, 0.8, 0],
              x: spark.targetX,
            }}
            transition={{
              duration: spark.duration,
              repeat: Infinity,
              delay: spark.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
