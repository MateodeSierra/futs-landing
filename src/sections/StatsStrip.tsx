import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import AnimatedCounter from '../components/AnimatedCounter';
import { staggerContainer, useRevealVariants, viewportOnce } from '../lib/motion';
import { STATS } from '../data/stats';

export default function StatsStrip() {
  const fadeUp = useRevealVariants();

  return (
    <section className="border-y border-app-border/60 py-14">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="text-4xl font-black text-app-accent sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-[13px] leading-snug text-app-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
