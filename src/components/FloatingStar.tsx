import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const STAR_PATH =
  'M300.7,359.05c-21.9-52.69-60.82-92.55-114.95-115.41,53.36-21.94,92.53-62.36,115.1-114.9,' +
  '22.33,53.68,61.6,92.06,114.42,114.99-53.48,23.28-92.53,62.13-114.58,115.32Z';

interface FloatingStarProps {
  size: number;
  color: string;
  opacity: number;
  /** Tailwind position classes (top/bottom/left/right) — placed by the caller near a section seam. */
  className?: string;
  /** Pixels drifted while the star crosses the viewport — positive drifts down, negative up. */
  drift?: number;
}

/**
 * One brand-mark diamond that fades in/out every time it crosses into/out of
 * view (useInView, `once: false`) AND drifts vertically the whole time it's
 * visible (its own local useScroll, independent of the other stars) — so it
 * keeps appearing, moving, and disappearing as the section boundaries pass.
 */
export default function FloatingStar({ size, color, opacity, className = '', drift = -120 }: FloatingStarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, drift]);

  if (reduced) return null;

  return (
    <div ref={ref} className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.svg
        style={{ y }}
        width={size}
        height={size}
        viewBox="0 0 614.41 538.57"
        initial={false}
        animate={{ opacity: inView ? opacity : 0, scale: inView ? 1 : 0.6 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <path d={STAR_PATH} fill={color} />
      </motion.svg>
    </div>
  );
}
