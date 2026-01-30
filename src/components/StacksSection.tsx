import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Shield, Heart, Plus, Pill, TrendingUp, DollarSign, Check } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import SectionHeader from './ui/SectionHeader';

export default function StacksSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stacks = [
    {
      icon: <Home size={40} className="text-[#00F0B5]" />,
      title: "Mortgage Protection Stack",
      description: "New homeowner urgency fades fast. This Stack strikes while the iron is hot with instant outreach and follow-ups timed around closing dates.",
      features: [
        "Instant speed-to-lead",
        "Closing date triggers",
        "\"I have lender coverage\" objection handling"
      ],
      popular: true
    },
    {
      icon: <Shield size={40} className="text-[#00F0B5]" />,
      title: "Final Expense Stack",
      description: "Final expense requires patience and trust. This Stack nurtures leads with compassionate, persistent follow-up until they're ready.",
      features: [
        "60+ day nurture sequences",
        "Sensitive conversation AI",
        "Beneficiary tracking"
      ]
    },
    {
      icon: <Heart size={40} className="text-[#00F0B5]" />,
      title: "Life Insurance Stack",
      description: "Life insurance is a longer journey. This Stack manages everything from needs analysis through underwriting with education-focused follow-ups.",
      features: [
        "Term vs whole life AI",
        "Underwriting status tracking",
        "Life event triggers"
      ]
    },
    {
      icon: <Plus size={40} className="text-[#00F0B5]" />,
      title: "Medicare Stack",
      description: "AEP is a sprint. This Stack is built for enrollment chaos with instant response and compliance-ready templates.",
      features: [
        "AEP/OEP surge mode",
        "Medicare terminology AI",
        "SOA tracking"
      ]
    },
    {
      icon: <Pill size={40} className="text-[#00F0B5]" />,
      title: "Health Insurance Stack",
      description: "Health clients expect to hear from you at renewal. This Stack manages enrollment and automates renewal reminders.",
      features: [
        "Open enrollment sequences",
        "60/30/15 day renewal alerts",
        "Plan comparison follow-ups"
      ]
    },
    {
      icon: <TrendingUp size={40} className="text-[#00F0B5]" />,
      title: "IUL Stack",
      description: "IUL sales require education first. This Stack nurtures prospects and automates illustration follow-ups until they're ready to see the numbers.",
      features: [
        "Education drip sequences",
        "Illustration follow-ups",
        "Cash value conversation AI"
      ]
    },
    {
      icon: <DollarSign size={40} className="text-[#00F0B5]" />,
      title: "Annuity Stack",
      description: "Annuity prospects don't rush — and shouldn't. This Stack builds trust over time with rate alerts and retirement-focused check-ins.",
      features: [
        "90+ day nurture cycles",
        "Rate update alerts",
        "Suitability automation"
      ]
    }
  ];

  return (
    <section id="stacks" className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="ONYX STACKS"
          headline="Built for Your Vertical. Ready to Go."
          subheadline="Pre-built systems designed for each insurance niche. Automated pipelines. AI booking. Follow-up sequences. Pick your Stack and start booking in minutes."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full hover:border-[#00F0B5] hover:shadow-[0_8px_32px_rgba(0,240,181,0.12)] hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                {stack.popular && (
                  <div className="absolute -top-3 right-6">
                    <Badge variant="mint">MOST POPULAR</Badge>
                  </div>
                )}
                <div className="mb-4">{stack.icon}</div>
                <h3 className="text-2xl font-bold text-[#1C1C1E] mb-3">
                  {stack.title}
                </h3>
                <p className="text-base text-[#6E7180] leading-relaxed mb-6">
                  {stack.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {stack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6E7180]">
                      <Check size={16} className="text-[#00F0B5] mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-[#00F0B5] font-semibold text-sm hover:text-[#00D9A0] transition-colors">
                  Explore Stack →
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
