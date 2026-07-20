import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import FloatingStar from '../components/FloatingStar';
import { staggerContainer, useRevealVariants, viewportOnce } from '../lib/motion';
import { RANKS } from '../data/ranks';

export default function RanksSection() {
  const fadeUp = useRevealVariants();

  return (
    <section className="relative overflow-hidden border-t border-app-border/60 py-20 text-center sm:py-28">
      <FloatingStar size={130} color="#c9920a" opacity={0.3} className="bottom-[8%] right-[6%]" drift={-170} />
      <FloatingStar size={80} color="#defea4" opacity={0.3} className="left-[6%] top-[10%]" drift={200} />
      <Container>
        <SectionHeading title="Escalá los rangos" accentWord="rangos" align="center" subtitle="¿En qué nivel estás realmente?" />
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-9 flex max-w-2xl flex-wrap justify-center gap-2"
        >
          {RANKS.map((rank) => (
            <motion.span
              key={rank.tier}
              variants={fadeUp}
              className="rounded-full border px-4 py-1.5 text-[13px] font-bold"
              style={{ background: `${rank.color}26`, color: rank.color, borderColor: `${rank.color}4d` }}
            >
              {rank.tier === 'MASTER' && '✦ '}
              {rank.label}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
