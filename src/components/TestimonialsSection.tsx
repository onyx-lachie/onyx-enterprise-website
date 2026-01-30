import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Check } from 'lucide-react';
import Badge from './ui/Badge';
import AnimatedCounter from './ui/AnimatedCounter';
import SectionHeader from './ui/SectionHeader';

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const featuredTestimonials = [
    {
      quote: "I didn't believe in CRMs. I wanted to do things the old school way. But Onyx changed everything. The AI books appointments while I'm on calls, the organization is incredible, and I've been writing consistent $80k months since I started.",
      name: "Trevor F.",
      title: "Mortgage Protection Agent",
      badge: "$80k+ months",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "I was using multiple tools to stay organized. It was chaos. Within my first month on Onyx, I booked 30+ appointments from cold lead traffic through the AI messaging system. Wrote $65k that month.",
      name: "Damon R.",
      title: "Health Insurance Agent",
      badge: "30+ appointments month one",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const smallTestimonials = [
    {
      quote: "Recovered $18k from leads I thought were dead. The database reactivation alone paid for a year of Onyx.",
      name: "Mike T.",
      title: "Final Expense Agent, Texas",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "Setup took 30 minutes. I was booking AI-scheduled appointments within 48 hours. Easiest CRM I've ever used.",
      name: "Sarah K.",
      title: "Life Insurance Agent, Florida",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "I used to spend 3 hours a day on follow-up. Now I spend 20 minutes reviewing what Onyx did overnight.",
      name: "David R.",
      title: "Medicare Agent, Arizona",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "Finally, a CRM that actually understands insurance. The Stacks are game-changers.",
      name: "Lisa M.",
      title: "Mortgage Protection Agent, Ohio",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-[#F0FDF9] to-[#F8FAFB] py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="SUCCESS STORIES"
          headline="Agents Are Booking More. Here's Proof."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#E8EAF0]/50 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={4.9} duration={2.5} />/<AnimatedCounter end={5} duration={2.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={10} prefix="$" suffix="M+" duration={3.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              Premiums Written by Onyx Agents
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-2">
              <AnimatedCounter end={2000} suffix="+" duration={3.5} />
            </div>
            <div className="text-xs md:text-sm font-medium text-[#9DA2B3] uppercase tracking-wider">
              Appointments Booked
            </div>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E8EAF0]"
            >
              <div className="absolute top-6 right-6">
                <Badge variant="mint">{testimonial.badge}</Badge>
              </div>
              <div className="text-6xl text-[#00F0B5] mb-4">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#00F0B5" className="text-[#00F0B5]" />
                ))}
              </div>
              <p className="text-base text-[#6E7180] leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#E8EAF0]"
                />
                <div>
                  <div className="font-bold text-[#1C1C1E]">{testimonial.name}</div>
                  <div className="text-sm text-[#9DA2B3]">{testimonial.title}</div>
                  <div className="text-xs text-[#00F0B5] mt-1 flex items-center gap-1">
                    <Check size={12} />
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {smallTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E8EAF0]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#00F0B5" className="text-[#00F0B5]" />
                ))}
              </div>
              <p className="text-sm text-[#6E7180] leading-relaxed mb-4 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#E8EAF0]"
                />
                <div>
                  <div className="font-semibold text-[#1C1C1E] text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#9DA2B3]">{testimonial.title}</div>
                  <div className="text-xs text-[#00F0B5] mt-0.5 flex items-center gap-1">
                    <Check size={10} />
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
