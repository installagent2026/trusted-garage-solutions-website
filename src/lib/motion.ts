// Shared Framer Motion presets — the hyliox idiom vocabulary, adapted for TGS.
// Spread these into a <motion.*> element, e.g. <motion.div {...fadeUpBlur(0.2)} />.
// For looping float animations use the <Float> component (it honors reduced-motion).

/** Standard scroll-triggered fade-up entrance. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/** Premium cinematic entrance — fade up with a blur dissolve. */
export const fadeUpBlur = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

/** Above-the-fold variant of fadeUpBlur that fires on mount (no viewport gate). */
export const fadeUpBlurOnMount = (delay = 0) => ({
  initial: { opacity: 0, y: 26, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});
