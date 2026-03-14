import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import Button from './ui/Button';

export default function FAQSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "Most agents are live within 48 hours. We do a 1-on-1 onboarding call to set up your calendar, phone, and integrations — no tech skills needed. Once your A2P registration clears (2–5 business days), we run group training to get you fully up to speed."
    },
    {
      question: "I've already got GoHighLevel. Why switch?",
      answer: "Onyx is built on GHL — but we've added custom integrations and AI systems that 99% of GHL setups can't touch. Our AI actually books appointments, our Stacks are pre-built for insurance, and our support team actually understands your business. Most agents who switch say they're finally getting what they expected from their old CRM."
    },
    {
      question: "I'm not tech-savvy. Can I use this?",
      answer: "Yes. We literally set it up with you on a call. You don't configure anything yourself. The day-to-day is simpler than most email apps. If you can send a text, you can use Onyx."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "You've got 14 days risk-free. If you're not booking more appointments, email us and we'll refund you completely. No questions asked. We're confident because we've seen it work for 300+ agents."
    },
    {
      question: "How is your AI different from other CRMs?",
      answer: "Most CRM 'AI' sends reminders or basic templates. Onyx's AI actually engages leads in conversation, qualifies them, handles objections, reschedules no-shows, and books appointments directly into your calendar. It's not a gimmick — it's an appointment-setting machine."
    },
    {
      question: "Can I customize the workflows?",
      answer: "Absolutely. The Stacks work great out of the box, but everything is customizable. Change messaging, adjust timing, add sequences — whatever you need."
    },
    {
      question: "What insurance verticals do you support?",
      answer: "We have Stacks for Mortgage Protection, Final Expense, Life Insurance, Medicare, Health Insurance, IULs, and Annuities. If you sell it, we've probably built for it."
    },
    {
      question: "What's the cancellation policy?",
      answer: "No long-term contracts. Let us know 2 business days before renewal. Most agents stay because they see results — but you're never locked in."
    }
  ];

  return (
    <section className="bg-[#F8FAFB] py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#1C1C1E] text-center mb-16"
        >
          Questions? Answers.
        </motion.h2>

        <div ref={ref} className="max-w-[800px] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-b border-[#E8EAF0] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className={`w-full py-6 flex items-center justify-between text-left transition-all duration-300 ${
                  openIndex === index ? 'border-l-[3px] border-l-[#00F0B5] pl-4' : 'pl-0'
                }`}
              >
                <span className={`text-lg font-semibold pr-8 transition-colors ${
                  openIndex === index ? 'text-[#00F0B5]' : 'text-[#1C1C1E]'
                }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Plus size={24} className={openIndex === index ? "text-[#00F0B5]" : "text-[#6E7180]"} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-[#6E7180] leading-relaxed pb-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-[#1C1C1E] mb-2">
            Still have questions?
          </h3>
          <p className="text-base text-[#6E7180] mb-6">
            Our team is here to help.
          </p>
          <Button variant="primary" href="mailto:admin@onyx-crm.com">Contact Us</Button>
        </motion.div>
      </div>
    </section>
  );
}
