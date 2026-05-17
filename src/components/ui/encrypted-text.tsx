"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptedText = ({
  text,
  interval = 50,
}: {
  text: string;
  interval?: number;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovering) {
      let iteration = 0;
      timer = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (iteration >= text.length) {
          clearInterval(timer);
        }
        iteration += 1 / 3;
      }, interval);
    } else {
      // eslint-disable-next-line
      setDisplayText(text);
    }

    return () => clearInterval(timer);
  }, [isHovering, text, interval]);

  return (
    <motion.span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="inline-block"
    >
      {displayText}
    </motion.span>
  );
};
