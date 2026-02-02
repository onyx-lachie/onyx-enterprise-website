import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import AnimatedCounter from './ui/AnimatedCounter';
import DashboardCarousel from './DashboardCarousel';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    window.location.hash = 'pricing';
    const element = document.getElementById('pricing');
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
    <section className="min-h-[calc(100vh-72px)] mt-[72px] bg-gradient-to-b from-white via-[#E6FFF8] to-[#D1FFF0] flex items-center justify-center px-6 py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1C1C1E 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="bg-[#E6FFF8] border border-[#00F0B5]/30 rounded-full px-6 py-3 inline-flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <span className="text-sm font-medium text-[#1C1C1E]">
              Trusted by 300+ insurance agents across the USA
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#1C1C1E] leading-[1.1] mb-6"
        >
          Stop Losing Deals to<br />
          <span className="text-[#00F0B5]">Slow Follow-Up.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#6E7180] max-w-[680px] mx-auto leading-relaxed mb-10"
        >
          Onyx is the AI-powered CRM built for insurance agents. It follows up instantly, books appointments automatically, and keeps your entire book of business organized — so you can focus on closing, not chasing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="primary" className="text-base px-8 shadow-[0_4px_20px_rgba(0,240,181,0.3)] hover:shadow-[0_6px_30px_rgba(0,240,181,0.4)] w-full sm:w-auto" onClick={scrollToPricing}>
            Start Your 14-Day Trial →
          </Button>
          <Button
            variant="secondary"
            className="text-base px-8 w-full sm:w-auto"
            onClick={() => navigate('/book-demo')}
          >
            Book a Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-[#9DA2B3] mb-16"
        >
          <Shield size={16} />
          <span>14-day money-back guarantee. No questions asked.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#E8EAF0]/50"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={2000} suffix="+" duration={3.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              Appointments Booked
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={10} prefix="$" suffix="M+" duration={3.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              In Premiums Written
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={300} suffix="+" duration={3.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              Active Agents
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 w-full flex justify-center"
        >
          <div className="relative w-[99vw] max-w-[2471px]">
            <DashboardCarousel />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-[#00F0B5] text-[#1C1C1E] rounded-full p-4 shadow-lg hidden lg:block"
            >
              <div className="text-2xl">🔔</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-5 -left-5 bg-white border border-[#E8EAF0] rounded-full p-4 shadow-lg hidden lg:block"
            >
              <div className="text-2xl">📅</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
