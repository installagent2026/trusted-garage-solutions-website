"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PANEL_COUNT = 5;
const DURATION_MS = 2500;
const TICK_INTERVAL = 25;

export default function GarageDoorLoader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [opening, setOpening] = useState(false);

  // Hide immediately if already loaded this session
  useEffect(() => {
    if (sessionStorage.getItem("tgs-loaded")) {
      setShow(false);
      document.documentElement.classList.remove("tgs-loading");
      return;
    }
    document.body.style.overflow = "hidden";
  }, []);

  // Counter logic
  useEffect(() => {
    if (!show || opening) return;

    const increment = 100 / (DURATION_MS / TICK_INTERVAL);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [show, opening]);

  // Trigger door open at 100
  useEffect(() => {
    if (count < 100) return;
    const timeout = setTimeout(() => setOpening(true), 300);
    return () => clearTimeout(timeout);
  }, [count]);

  const handleAnimationComplete = useCallback(() => {
    setShow(false);
    sessionStorage.setItem("tgs-loaded", "1");
    document.body.style.overflow = "";
    document.documentElement.classList.remove("tgs-loading");
  }, []);

  if (!show) return null;

  const rounded = Math.floor(count);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="tgs-loader"
          className="fixed inset-0 z-[9999] flex flex-col"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background behind the door */}
          <div className="absolute inset-0 bg-charcoal" />

          {/* Garage door */}
          <motion.div
            className="relative z-10 flex flex-1 flex-col"
            animate={opening ? { y: "-100%" } : { y: 0 }}
            transition={
              opening
                ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                : undefined
            }
            onAnimationComplete={() => {
              if (opening) handleAnimationComplete();
            }}
          >
            {/* Door panels */}
            <div className="flex flex-1 flex-col">
              {Array.from({ length: PANEL_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="relative flex-1 border-b border-white/[0.06]"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(180deg, #292524 0%, #1c1917 100%)"
                        : "linear-gradient(180deg, #1c1917 0%, #171412 100%)",
                  }}
                >
                  {/* Horizontal groove lines on each panel */}
                  <div className="absolute inset-x-0 top-[30%] h-px bg-white/[0.04]" />
                  <div className="absolute inset-x-0 bottom-[30%] h-px bg-white/[0.04]" />
                </div>
              ))}
            </div>

            {/* Logo centered on door */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Image
                  src="/logos/main-logo-white.png"
                  alt="Trusted Garage Solutions"
                  width={280}
                  height={280}
                  className="w-44 h-auto sm:w-56 md:w-64 lg:w-72 select-none"
                  priority
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Bottom progress bar area */}
            <div className="absolute bottom-0 inset-x-0 z-20 px-6 pb-6 sm:px-10 sm:pb-8">
              {/* Percentage text */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
                  Loading
                </span>
                <span className="text-white font-semibold text-lg tabular-nums tracking-tight">
                  {rounded}%
                </span>
              </div>

              {/* Progress bar track */}
              <div className="relative h-1 w-full rounded-full bg-white/[0.08] overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #a16207 0%, #ca8a04 50%, #eab308 100%)",
                    boxShadow: "0 0 20px rgba(202, 138, 4, 0.5)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${rounded}%` }}
                  transition={{ duration: 0.05, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
