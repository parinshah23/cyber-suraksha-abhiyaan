"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("relative inline-block cursor-pointer", className)}
    >
      <span className="relative z-10">{text}</span>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl rounded-full"
      />
    </div>
  );
};
