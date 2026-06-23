"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Segment = { text: string; className?: string };

interface Props {
  /** Headline split into segments; give accent words their own className. */
  segments: Segment[];
  className?: string;
  /** Delay before the first word reveals. */
  delayStart?: number;
}

/**
 * Word-by-word headline reveal (hyliox "WordsPullUp" idiom). Each word pulls up
 * from below with a staggered delay. Accent segments keep their styling.
 * Falls back to a static headline under prefers-reduced-motion.
 */
export default function WordsPullUp({
  segments,
  className = "",
  delayStart = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={className}>
        {segments.map((seg, i) => (
          <span key={i} className={seg.className}>
            {i > 0 ? " " : ""}
            {seg.text}
          </span>
        ))}
      </span>
    );
  }

  // Flatten into words, each tagged with its segment's className.
  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text
      .split(" ")
      .filter(Boolean)
      .forEach((w) => words.push({ word: w, className: seg.className }));
  });

  return (
    <span
      ref={ref}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: delayStart + i * 0.08,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`mr-[0.25em] ${w.className ?? ""}`}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  );
}
