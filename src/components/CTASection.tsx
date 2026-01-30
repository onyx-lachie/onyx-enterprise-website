import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-12 md:py-20 px-6 overflow-hidden">
      <motion.div
        animate={{
          background: [
            'linear-gradient(135deg, #00F0B5 0%, #1C1C1E 100%)',
            'linear-gradient(135deg, #00F0B5 10%, #1C1C1E 90%)',
            'linear-gradient(135deg, #00F0B5 0%, #1C1C1E 100%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          You Didn't Get Into Insurance to Chase Leads All Day.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed"
        >
          Join 300+ agents booking more appointments, recovering dead leads, and finally getting organized.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -4, boxShadow: '0 20px 60px rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 rounded-lg font-semibold text-base bg-white text-[#1C1C1E] shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            Start Your 14-Day Trial
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 rounded-lg font-semibold text-base bg-transparent border-2 border-white/30 text-white hover:border-white transition-all duration-300"
          >
            See Pricing
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm text-white/70"
        >
          14-day full refund if you're not booking more. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
