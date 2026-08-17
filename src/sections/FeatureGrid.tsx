import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import FloatingStar from '../components/FloatingStar';
import { staggerContainer, useRevealVariants, viewportOnce } from '../lib/motion';
import { FEATURES } from '../data/features';

export default function FeatureGrid() {
  const fadeUp = useRevealVariants();

  return (
    <section className="relative overflow-hidden border-t border-app-border/60 py-20 sm:py-28">
      <FloatingStar size={160} color="#defea4" opacity={0.3} className="bottom-[6%] right-[10%]" drift={-220} />
      <FloatingStar size={90} color="#a4d618" opacity={0.3} className="left-[4%] top-[8%]" drift={180} />
      <Container>
        <SectionHeading title="Todo lo que necesitás para competir" accentWord="competir" />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="rounded-2xl border border-app-border bg-app-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-app-accent/40 hover:shadow-[0_8px_30px_-4px_rgba(164,214,24,0.18)]"
            >
              <h3 className="text-[15px] font-bold text-app-text">{feature.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-app-muted">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
