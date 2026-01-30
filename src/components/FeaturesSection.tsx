import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Zap, Inbox, DollarSign, Folder, HandshakeIcon } from 'lucide-react';
import Badge from './ui/Badge';
import SectionHeader from './ui/SectionHeader';

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Calendar size={48} className="text-[#00F0B5]" />,
      title: "AI That Actually Books Appointments",
      description: "Not just reminders. Onyx's AI qualifies leads, handles objections, manages no-shows, and gets appointments on your calendar — even while you sleep.",
      badge: "42 appointments in first month",
      color: "mint"
    },
    {
      icon: <Zap size={48} className="text-[#5C33FF]" />,
      title: "Instant Speed-to-Lead",
      description: "New lead? Onyx contacts them immediately — text, email, or call. No more losing deals because you were busy when the lead came in.",
      badge: "150% faster response",
      color: "purple"
    },
    {
      icon: <Inbox size={48} className="text-[#00F0B5]" />,
      title: "Every Conversation in One Place",
      description: "Emails, texts, calls, voicemails — all in one inbox. Never lose track of a conversation or miss a hot lead buried in another app.",
      badge: "Zero leads falling through",
      color: "mint"
    },
    {
      icon: <DollarSign size={48} className="text-[#5C33FF]" />,
      title: "Turn Dead Leads Into Revenue",
      description: "Got a list of old leads collecting dust? Onyx's reactivation system re-engages them with AI and books appointments from prospects you'd written off.",
      badge: "$25k recovered in 6 weeks",
      color: "purple"
    },
    {
      icon: <Folder size={48} className="text-[#00F0B5]" />,
      title: "Finally Get Organized",
      description: "Track every client, policy, and renewal. Onyx books annual review appointments automatically — so you stop leaving easy money on the table.",
      badge: "Never miss a review",
      color: "mint"
    },
    {
      icon: <HandshakeIcon size={48} className="text-[#00F0B5]" />,
      title: "We Set It Up With You",
      description: "Not tech-savvy? No problem. We do a 1-on-1 setup call, handle integrations, and run group training. Most agents are live within 48 hours.",
      badge: "Done-for-you setup",
      color: "mint"
    }
  ];

  return (
    <section id="features" className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="FEATURES"
          headline="Everything You Need to Book More and Chase Less"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-[#E8EAF0] p-8 hover:border-[#00F0B5] hover:shadow-[0_8px_32px_rgba(0,240,181,0.12)] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                feature.color === 'mint' ? 'bg-[#E6FFF8]' : 'bg-[#F0EDFF]'
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1E] mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-[#6E7180] leading-relaxed mb-4">
                {feature.description}
              </p>
              <Badge variant="mint" className="text-xs">
                {feature.badge}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
