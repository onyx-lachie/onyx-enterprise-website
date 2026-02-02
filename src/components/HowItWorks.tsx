import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Plug, Rocket, CalendarCheck } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import SocialProofTicker from './SocialProofTicker';

export default function HowItWorks() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToSection = (id: string) => {
    window.location.hash = id;
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

  const steps = [
    {
      number: "01",
      icon: <Plug size={48} className="text-[#00F0B5]" />,
      title: "Connect Your Tools",
      description: "Link your calendar, email, and lead sources. We set everything up on your first onboarding call — takes 30 minutes, no tech skills required."
    },
    {
      number: "02",
      icon: <Rocket size={48} className="text-[#00F0B5]" />,
      title: "Activate Your Stack",
      description: "Choose your insurance vertical. Your Stack comes pre-loaded with AI agents, follow-up sequences, and automations. Most agents go live within 48 hours."
    },
    {
      number: "03",
      icon: <CalendarCheck size={48} className="text-[#00F0B5]" />,
      title: "Watch Your Calendar Fill Up",
      description: "Onyx contacts leads instantly, qualifies with AI, handles objections, and books appointments. You just show up and close."
    }
  ];

  return (
    <section className="bg-[#F8FAFB] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          headline="From 'Lead In' to 'Appointment Booked'"
          subheadline="Here's how agents are booking 15–20+ extra appointments every month with Onyx."
        />

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-[#E8EAF0]">
            <motion.div
              initial={{ width: '0%' }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-[#00F0B5]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="text-7xl font-extrabold text-[#00F0B5] mb-4 opacity-20">
                  {step.number}
                </div>
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#E8EAF0]">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-[#6E7180] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <Button variant="primary" onClick={() => scrollToSection('pricing')}>Start Your 14-Day Trial</Button>
          <Button variant="secondary" onClick={() => navigate('/book-demo')}>Book a Demo</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <SocialProofTicker />
      </motion.div>
    </section>
  );
}
