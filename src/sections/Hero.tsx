import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PitchBackground from '../components/PitchBackground';
import ScrollStars from '../components/ScrollStars';

const WAITLIST_HREF =
  'mailto:support@futs.app?subject=Quiero%20entrar%20a%20FUTS&body=Avisenme%20cuando%20la%20app%20est%C3%A9%20disponible.';

/**
 * Full-viewport cinematic hero — text and CTA only, no app-UI mockups.
 * Content fades/scales out as the user scrolls past it (useScroll tied to
 * this section) so the transition into the features feels continuous.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <PitchBackground />
      <ScrollStars containerRef={ref} />

      <motion.div style={{ opacity, scale, y }} className="relative w-full">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 110, damping: 18 }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <Badge>⚽ Disponible en Uruguay</Badge>
            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-app-text sm:text-7xl">
              Fútbol 5 con <span className="text-app-accent">rango real</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-app-secondary">
              Verificación de identidad real, MMR tipo ELO y equipos balanceados por nivel.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Button href={WAITLIST_HREF} variant="primary">
                Avisame cuando esté lista
              </Button>
              <a
                href="mailto:support@futs.app"
                className="rounded text-sm text-app-muted underline-offset-4 transition-colors hover:text-app-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
              >
                o escribinos directamente
              </a>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      {!reduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-app-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
