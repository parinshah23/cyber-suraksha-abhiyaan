"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const StatefulButton = ({
  onClick,
  idleText,
  loadingText,
  successText,
  className,
  variant = "primary"
}: {
  onClick: () => Promise<void> | void;
  idleText: React.ReactNode;
  loadingText: React.ReactNode;
  successText: React.ReactNode;
  className?: string;
  variant?: "primary" | "danger" | "success" | "outline";
}) => {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async () => {
    if (state !== "idle") return;
    setState("loading");
    
    // Support both sync and async onClick
    const result = onClick();
    if (result instanceof Promise) {
      await result;
    } else {
      // simulate network delay for visual feedback if sync
      await new Promise(r => setTimeout(r, 600));
    }
    
    setState("success");
    setTimeout(() => setState("idle"), 2000);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "danger": return "bg-accent text-white hover:bg-red-600";
      case "success": return "bg-success text-white hover:bg-emerald-600";
      case "outline": return "bg-transparent border-2 border-primary text-primary hover:bg-primary/5";
      default: return "bg-primary text-white hover:bg-blue-700";
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== "idle"}
      className={cn(
        "relative overflow-hidden rounded-full font-semibold transition-all px-8 py-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-80 disabled:cursor-not-allowed",
        getVariantStyles(),
        className
      )}
    >
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex items-center justify-center gap-2"
          >
            {idleText}
          </motion.span>
        )}
        {state === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            {loadingText}
          </motion.span>
        )}
        {state === "success" && (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex items-center justify-center gap-2"
          >
            {successText}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
