import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { STAR_PATH, STAR_VIEWBOX } from '../lib/starPath';

interface StarConfig {
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
  /** Fraction of the hero's own scroll travel this star moves — >1 overtakes
   * the page scroll (drifts down relative to it), <1 lags behind it (the
   * classic slow-background-layer parallax look). Sign flips direction. */
  speedFactor: number;
}

// Ported from futs-app/assets/star.svg — same diamond/sparkle mark as the crest logo.
const STARS: StarConfig[] = [
  { top: '6%', left: '6%', size: 180, color: '#a4d618', opacity: 0.45, speedFactor: -1.2 },
  { top: '60%', left: '84%', size: 130, color: '#defea4', opacity: 0.35, speedFactor: 2.2 },
  { top: '35%', left: '90%', size: 90, color: '#c9920a', opacity: 0.4, speedFactor: 1.8 },
  { top: '78%', left: '20%', size: 100, color: '#defea4', opacity: 0.3, speedFactor: -0.9 },
];

// Hero is min-h-screen — scrollYProgress 0→1 spans roughly one viewport height of scrolling.
const HERO_TRAVEL_PX = typeof window !== 'undefined' ? window.innerHeight : 900;

function Star({ config, scrollYProgress }: { config: StarConfig; scrollYProgress: MotionValue<number> }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, config.speedFactor * HERO_TRAVEL_PX]);

  return (
    <motion.svg
      style={{ top: config.top, left: config.left, y }}
      className="absolute"
      width={config.size}
      height={config.size}
      viewBox={STAR_VIEWBOX}
      initial={{ opacity: 0 }}
      animate={{ opacity: config.opacity }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <path d={STAR_PATH} fill={config.color} />
    </motion.svg>
  );
}

/** A few brand-mark diamonds drifting at different speeds as the hero scrolls past — same star used in the logo/rank emblems, not a new asset. No rotation, just translation. */
export default function ScrollStars({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {STARS.map((config, i) => (
        <Star key={i} config={config} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
