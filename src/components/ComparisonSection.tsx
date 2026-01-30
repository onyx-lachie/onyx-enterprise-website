import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, AlertTriangle } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function ComparisonSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const comparisons = [
    {
      feature: 'AI that actually books appointments',
      onyx: true,
      genericCRM: false,
      spreadsheets: false
    },
    {
      feature: 'Built specifically for insurance',
      onyx: true,
      genericCRM: false,
      spreadsheets: false
    },
    {
      feature: 'Instant speed-to-lead',
      onyx: true,
      genericCRM: 'warning',
      spreadsheets: false
    },
    {
      feature: 'Done-for-you setup',
      onyx: true,
      genericCRM: false,
      spreadsheets: false
    },
    {
      feature: 'Pre-built insurance pipelines',
      onyx: true,
      genericCRM: false,
      spreadsheets: false
    },
    {
      feature: 'Price',
      onyx: '$99-149/mo',
      genericCRM: '$200-500/mo',
      spreadsheets: 'Free but chaos'
    }
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check size={20} className="text-[#00F0B5] mx-auto" />;
    }
    if (value === false) {
      return <X size={20} className="text-[#EF4444] mx-auto" />;
    }
    if (value === 'warning') {
      return <AlertTriangle size={20} className="text-[#F59E0B] mx-auto" />;
    }
    return <span className="text-sm text-[#6E7180] text-center block">{value}</span>;
  };

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="WHY ONYX"
          headline="Built Different. Here's How."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto overflow-x-auto"
        >
          <div className="bg-white border border-[#E8EAF0] rounded-2xl overflow-hidden min-w-[640px]">
            <div className="grid grid-cols-4 bg-[#F8FAFB] border-b border-[#E8EAF0]">
              <div className="p-5 font-bold text-[#1C1C1E] text-sm"></div>
              <div className="p-5 font-bold text-[#1C1C1E] text-sm text-center bg-[#E6FFF8]">Onyx</div>
              <div className="p-5 font-bold text-[#1C1C1E] text-sm text-center">Generic CRMs</div>
              <div className="p-5 font-bold text-[#1C1C1E] text-sm text-center">Spreadsheets</div>
            </div>

            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-4 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFB]'
                } ${index !== comparisons.length - 1 ? 'border-b border-[#E8EAF0]' : ''}`}
              >
                <div className="p-5 text-sm text-[#6E7180] font-medium">
                  {comparison.feature}
                </div>
                <div className="p-5 bg-[#E6FFF8] flex items-center justify-center">
                  {renderIcon(comparison.onyx)}
                </div>
                <div className="p-5 flex items-center justify-center">
                  {renderIcon(comparison.genericCRM)}
                </div>
                <div className="p-5 flex items-center justify-center">
                  {renderIcon(comparison.spreadsheets)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
