import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Clock, Clipboard, XCircle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function ProblemSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const problems = [
    {
      icon: <DollarSign size={32} className="text-[#00F0B5]" />,
      title: "Paying for 5 different tools that don't talk to each other",
      description: "A CRM here. A scheduler there. Follow-up software somewhere else. You're bleeding money and wasting time switching between tabs."
    },
    {
      icon: <Clock size={32} className="text-[#00F0B5]" />,
      title: "Leads go cold while you're on another call",
      description: "That $30 lead you just bought? Dead. Because you couldn't get to it within 5 minutes."
    },
    {
      icon: <Clipboard size={32} className="text-[#00F0B5]" />,
      title: "Your book of business is a disaster",
      description: "Clients slipping through the cracks. Annual reviews not happening. Easy money left on the table."
    },
    {
      icon: <XCircle size={32} className="text-[#00F0B5]" />,
      title: "You've tried other CRMs. They didn't work.",
      description: "Too complex. Not enough support. AI that felt more like a gimmick than a solution."
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="THE PROBLEM"
          headline="Sound Familiar?"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#E8EAF0] p-8 hover:border-[#00F0B5] hover:shadow-[0_8px_32px_rgba(0,240,181,0.12)] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-3">
                {problem.title}
              </h3>
              <p className="text-base text-[#6E7180] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-semibold text-[#00F0B5]">
            There's a better way.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-[#00F0B5] text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
