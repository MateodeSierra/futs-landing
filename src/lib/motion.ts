import { useReducedMotion, type Variants } from 'framer-motion';

/**
 * Every entrance in the page reuses these two variant sets so the whole
 * scroll experience feels like one system instead of per-section tweaks.
 * `useReducedMotion()` upstream should swap these for `reducedVariants`.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

export function staggerContainer(staggerChildren = 0.12): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren } },
  };
}

export const viewportOnce = { once: true, amount: 0.3 } as const;

/** Single gate every section uses so a reduced-motion user never gets transforms. */
export function useRevealVariants(): Variants {
  const reduced = useReducedMotion();
  return reduced ? reducedFadeUp : fadeUp;
}
