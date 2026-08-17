import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import PitchBackground from '../components/PitchBackground';
import ScrollStars from '../components/ScrollStars';
import HeroPlayerCard from '../components/HeroPlayerCard';
import { AppleIcon, PlayIcon } from '../components/StoreIcons';
import { staggerContainer, useRevealVariants } from '../lib/motion';

// Store listings aren't live yet — swap these for the real App Store / Play Store URLs at launch.
const APP_STORE_HREF = '#';
const PLAY_STORE_HREF = '#';

/**
 * Full-viewport cinematic hero — copy + CTA alongside a showcase card built
 * from the real app's PlayerCard shape/colors. Content fades/scales out as
 * the user scrolls past it (useScroll tied to this section) so the
 * transition into the features feels continuous.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const fadeUp = useRevealVariants();

  const opacity = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);
  // The card drifts up faster than the text as the page scrolls — a second
  // parallax depth layer on top of PitchBackground's floodlights/lines.
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -70]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <PitchBackground scrollYProgress={scrollYProgress} />
      <ScrollStars containerRef={ref} />

      <motion.div style={{ opacity, scale, y }} className="relative w-full xl:-mt-[32vh]">
        <Container>
          <motion.div
            variants={staggerContainer(0.14)}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-8"
          >
            <div className="flex max-w-2xl flex-col items-center text-center xl:items-start xl:text-left">
              <motion.div variants={fadeUp}>
                <Badge>Disponible en Uruguay</Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-app-text sm:text-7xl"
              >
                Fútbol 5 <span className="text-app-accent">Rankeado</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-md text-base leading-relaxed text-app-secondary">
                Jugá fútbol como nunca antes lo jugaste: competí por tu posición en el ranking, ganá premios y
                demostrá tu nivel.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={APP_STORE_HREF} variant="primary">
                    <AppleIcon />
                    Descargar para iOS
                  </Button>
                  <Button href={PLAY_STORE_HREF} variant="primary">
                    <PlayIcon />
                    Descargar para Android
                  </Button>
                </div>
                <a
                  href="mailto:support@futs.app"
                  className="rounded text-sm text-app-muted underline-offset-4 transition-colors hover:text-app-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
                >
                  o escribinos directamente
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              style={{ y: cardY }}
              className="shrink-0"
            >
              <HeroPlayerCard />
            </motion.div>
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
