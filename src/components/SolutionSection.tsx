import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Bot, BarChart3 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function SolutionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Zap size={48} className="text-[#00F0B5]" />,
      title: "Instant Follow-Up",
      description: "Leads contacted in seconds, not hours"
    },
    {
      icon: <Bot size={48} className="text-[#00F0B5]" />,
      title: "AI That Books",
      description: "Real appointments on your calendar, automatically"
    },
    {
      icon: <BarChart3 size={48} className="text-[#00F0B5]" />,
      title: "Total Organization",
      description: "Clients, policies, renewals — all in one place"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#F0FDF9] to-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          headline={
            <>
              <span className="text-[#00F0B5]">One</span> Platform. Not Seven.
            </>
          }
          subheadline="Onyx replaces your CRM, scheduler, follow-up tools, and spreadsheets with one AI-powered system built specifically for insurance agents. Stop juggling. Start closing."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E6FFF8] rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-[#6E7180]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
