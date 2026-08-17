import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { STAR_PATH, STAR_VIEWBOX } from '../lib/starPath';

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
        viewBox={STAR_VIEWBOX}
        initial={false}
        animate={{ opacity: inView ? opacity : 0, scale: inView ? 1 : 0.6 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <path d={STAR_PATH} fill={color} />
      </motion.svg>
    </div>
  );
}
