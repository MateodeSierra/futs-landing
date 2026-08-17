import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import FloatingStar from '../components/FloatingStar';
import { staggerContainer, useRevealVariants, viewportOnce } from '../lib/motion';
import { ROADMAP } from '../data/roadmap';

/** Visually distinct from FeatureGrid on purpose — these are announced, not shipped. */
export default function Roadmap() {
  const fadeUp = useRevealVariants();

  return (
    <section className="relative overflow-hidden border-t border-app-border/60 py-16">
      <FloatingStar size={100} color="#a4d618" opacity={0.35} className="left-[8%] top-[6%]" drift={150} />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="flex items-center gap-2.5"
        >
          <h2 className="text-base font-bold text-app-text">Novedades</h2>
          <span className="rounded-full bg-app-accent/[0.15] px-2 py-0.5 text-[11px] font-bold text-app-accent">{ROADMAP.length}</span>
        </motion.div>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {ROADMAP.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex gap-3.5 rounded-2xl border border-dashed border-app-border bg-app-surface/60 p-4"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-app-accent/[0.12] text-xl" aria-hidden="true">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-app-text">{item.title}</h3>
                  <span className="flex-shrink-0 text-[11px] text-app-muted">{item.status}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-app-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
