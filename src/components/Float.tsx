"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px. Negative = floats up first. */
  distance?: number;
  /** Loop duration in seconds. */
  duration?: number;
  /** Phase offset so neighbouring cards drift in counter-phase. */
  delay?: number;
}

/**
 * Gentle infinite floating wrapper (hyliox "floating side cards" idiom).
 * Renders a static wrapper when the user prefers reduced motion.
 */
export default function Float({
  children,
  className = "",
  distance = 10,
  duration = 6,
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
