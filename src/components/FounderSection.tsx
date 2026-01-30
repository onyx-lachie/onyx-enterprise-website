import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FounderSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#00F0B5] opacity-10 rounded-full blur-3xl"></div>
            <div className="relative w-full max-w-[400px] mx-auto">
              <img
                src="/lachie_portrait_2.jpg"
                alt="Lachie McLeish, Founder of Onyx CRM"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-[#00F0B5] text-[120px] opacity-10 font-serif leading-none">"</div>
            <p className="text-xs font-semibold text-[#00F0B5] uppercase tracking-[2px] mb-4 relative z-10">
              MEET THE FOUNDER
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-8 relative z-10">
              Why I Built Onyx
            </h2>
            <div className="space-y-4 text-base text-[#6E7180] leading-relaxed">
              <p>
                I've always been obsessed with technology — especially when it can solve real problems for real people.
              </p>
              <p>
                When ChatGPT launched in 2023, I saw the opportunity immediately. I dove headfirst into AI, spent months studying large language models, and started building.
              </p>
              <p>
                But I didn't want to build another generic AI tool. I wanted to solve a specific problem for a specific group of people who were being underserved by existing software.
              </p>
              <p>
                That's when I reconnected with an old college friend — an insurance agent running his entire business off Google Sheets. No CRM. No automations. Just hustle, chaos, and leads slipping through the cracks.
              </p>
              <p>
                I offered to build him something better. But I didn't just build what I <em>thought</em> he needed. I spent months embedded in his world — shadowing calls, studying his sales process, learning the difference between final expense and mortgage protection, understanding why speed-to-lead matters so much, and figuring out exactly where deals were dying.
              </p>
              <p>
                I talked to dozens of agents across different verticals. I learned about AEP chaos, the importance of annual reviews, why most CRMs feel like they were built by people who've never sold a policy in their lives.
              </p>
              <p>
                Every feature in Onyx exists because an agent told me they needed it. Every automation was tested in real pipelines with real leads. Every AI prompt was refined until it actually converted.
              </p>
              <p>
                Since then, we've supported over 300 agents across the USA. The platform has evolved massively — but the mission hasn't changed:
              </p>
              <p className="font-bold text-[#1C1C1E] text-lg">
                Give independent insurance agents the same AI-powered tools that big agencies have — without the complexity or the price tag.
              </p>
              <p>
                I'm not an insurance agent. But I've made it my job to understand this industry better than any other software founder in the space. And I'm just getting started.
              </p>
              <p className="mt-8 text-[#6E7180] italic text-lg">
                — Lachie McLeish, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
