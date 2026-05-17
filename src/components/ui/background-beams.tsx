import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [paths, setPaths] = useState<{ d: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedPaths = [...Array(20)].map(() => ({
      d: `M0 ${Math.random() * 800} Q 400 ${Math.random() * 800} 1200 ${Math.random() * 800}`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    // eslint-disable-next-line
    setPaths(generatedPaths);
  }, []);
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden bg-slate-950 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-[800px] opacity-40">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a56db" stopOpacity="0" />
              <stop offset="50%" stopColor="#1a56db" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1a56db" stopOpacity="0" />
            </linearGradient>
          </defs>
          {paths.map((path, i) => (
            <motion.path
              key={i}
              d={path.d}
              fill="transparent"
              stroke="url(#beamGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "linear",
                delay: path.delay,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
