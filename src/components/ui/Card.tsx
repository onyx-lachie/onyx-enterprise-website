import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl border border-[#E8EAF0] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
