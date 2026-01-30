import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: ReactNode;
  subheadline?: string;
  centered?: boolean;
}

export default function SectionHeader({ eyebrow, headline, subheadline, centered = true }: SectionHeaderProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold text-[#00F0B5] uppercase tracking-[2px] mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6"
      >
        {headline}
      </motion.h2>
      {subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#6E7180] max-w-[700px] leading-relaxed mx-auto"
        >
          {subheadline}
        </motion.p>
      )}
    </div>
  );
}
