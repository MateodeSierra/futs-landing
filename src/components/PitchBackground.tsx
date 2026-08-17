import { motion, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';

/**
 * Stylized night-pitch scene for the hero — CSS/SVG only, no stock photography
 * (none exists in the repo, and stock/fabricated player photos aren't appropriate here).
 * Perspective pitch lines + two floodlight glows + a vignette for text contrast.
 *
 * Each layer moves at a different fraction of the hero's own scroll (passed
 * in from Hero's useScroll) — the actual definition of parallax, distinct
 * from the foreground content's fade/scale-out.
 */
export default function PitchBackground({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const yFar = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 160]);
  const yLines = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-app-bg" />

      {/* floodlight glows — slowest layer drifts least, "nearest" glow drifts most */}
      <motion.div
        style={{ y: yFar }}
        className="absolute -top-24 left-[15%] h-[420px] w-[420px] rounded-full bg-app-accent/[0.14] blur-[110px]"
      />
      <motion.div
        style={{ y: yNear }}
        className="absolute -top-10 right-[10%] h-[320px] w-[320px] rounded-full bg-app-gold/[0.1] blur-[100px]"
      />

      {/* a single faint halfway-line arc hugging the bottom edge — kept low and
          subtle so it reads as ambient texture, not a line cutting through the text */}
      <motion.svg
        style={{ y: yLines }}
        className="absolute bottom-0 left-1/2 h-[22%] w-full max-w-[900px] -translate-x-1/2 opacity-[0.08]"
        viewBox="0 0 900 200"
        preserveAspectRatio="xMidYMax meet"
      >
        <line x1="0" y1="200" x2="900" y2="200" stroke="#F7FBEA" strokeWidth="1.5" />
        <path d="M280 200 A170 170 0 0 1 620 200" fill="none" stroke="#F7FBEA" strokeWidth="1.5" />
      </motion.svg>

      {/* vignette so text stays legible over the scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-app-bg via-transparent to-app-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-app-bg/70 via-transparent to-app-bg/70" />
    </div>
  );
}
