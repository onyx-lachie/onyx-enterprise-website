import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Shield } from 'lucide-react';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';

export default function PricingSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const plan = {
    name: "Prime",
    price: 65,
    tagline: "Everything you need to scale your insurance business.",
    features: [
      "All 7 Onyx Stacks",
      "Pre-Built Text Campaigns",
      "Unified Inbox",
      "AI Appointment Booking",
      "Advanced AI Features",
      "Database Reactivation",
      "Annual Review Automation",
      "Priority Support",
      "Custom Workflows",
      "Done-For-You Onboarding"
    ],
    cta: "Get Started",
    variant: "primary" as const,
    highlighted: true,
    href: "https://prime.onyx-crm.com/checkout-page-onyx-prime"
  };

  return (
    <section id="pricing" className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="PRICING"
          headline="Simple Pricing. Serious Results."
          subheadline="No hidden fees. No long-term contracts. 14-day full refund if it's not for you."
        />

        <div ref={ref} className="max-w-md mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 flex flex-col border-2 border-[#00F0B5] shadow-[0_0_40px_rgba(0,240,181,0.15)]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1C1C1E] mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-[#1C1C1E]">${plan.price}</span>
                  <span className="text-base text-[#9DA2B3]">/month</span>
                </div>
                <p className="text-sm text-[#6E7180] leading-relaxed">{plan.tagline}</p>
              </div>

              <div className="border-t border-[#E8EAF0] pt-6 mb-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-[#00F0B5] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#6E7180]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={plan.variant} className="w-full" href={plan.href}>
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E6FFF8] rounded-xl p-6 md:p-8 border border-[#00F0B5]/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#00F0B5] flex items-center justify-center flex-shrink-0">
              <Shield size={24} className="text-[#1C1C1E]" />
            </div>
            <p className="text-base font-medium text-[#1C1C1E] leading-relaxed flex-grow">
              14-Day Money-Back Guarantee — Try Onyx risk-free. If you're not booking more appointments within 14 days, we'll refund every cent. No questions. No hassle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
