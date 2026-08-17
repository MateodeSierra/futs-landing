import { motion } from 'framer-motion';
import { staggerContainer, useRevealVariants, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/** Splits `title` on `accentWord` so that one word can render in the brand green — matches the emphasis pattern used throughout the old landing's headings. */
export default function SectionHeading({ eyebrow, title, accentWord, subtitle, align = 'left' }: SectionHeadingProps) {
  const parts = accentWord ? title.split(accentWord) : [title];
  const fadeUp = useRevealVariants();

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="mb-2 text-sm font-semibold uppercase tracking-wide text-app-accent">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight text-app-text sm:text-4xl">
        {accentWord ? (
          <>
            {parts[0]}
            <span className="text-app-accent">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-3 text-[15px] text-app-secondary">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
