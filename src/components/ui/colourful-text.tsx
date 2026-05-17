"use client";
import React from "react";
import { motion } from "framer-motion";

export const ColourfulText = ({ text, className }: { text: string; className?: string }) => {
  const colors = ["#1a56db", "#f05252", "#0e9f6e", "#ff5a1f", "#1a56db"];

  return (
    <motion.span
      animate={{
        color: colors,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
};
