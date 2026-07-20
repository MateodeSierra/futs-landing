import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import FloatingStar from '../components/FloatingStar';
import { staggerContainer, useRevealVariants, viewportOnce } from '../lib/motion';
import { HOW_IT_WORKS } from '../data/howItWorks';

export default function HowItWorks() {
  const fadeUp = useRevealVariants();

  return (
    <section className="relative overflow-hidden border-t border-app-border/60 py-20 sm:py-28">
      <FloatingStar size={120} color="#c9920a" opacity={0.35} className="left-[6%] top-[4%]" drift={190} />
      <Container>
        <SectionHeading eyebrow="El proceso" title="Cómo funciona" accentWord="funciona" align="center" />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HOW_IT_WORKS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="rounded-2xl border border-app-border bg-app-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-app-accent/40 hover:shadow-[0_8px_30px_-4px_rgba(164,214,24,0.18)]"
            >
              <span className="text-3xl font-black text-app-accent/40">{step.number}</span>
              <h3 className="mt-3 text-[15px] font-bold text-app-text">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-app-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
