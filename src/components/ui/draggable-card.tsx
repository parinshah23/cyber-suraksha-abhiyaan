"use client";
import React from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

export const DraggableCard = ({
  children,
  className,
  onDrop,
}: {
  children: React.ReactNode;
  className?: string;
  onDrop: (direction: "left" | "right") => void;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      onDrop("right");
    } else if (info.offset.x < -100) {
      onDrop("left");
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      style={{ x, rotate, opacity }}
      whileTap={{ cursor: "grabbing" }}
      className={cn("cursor-grab origin-bottom shadow-2xl", className)}
    >
      {children}
    </motion.div>
  );
};
