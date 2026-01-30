import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './ui/SectionHeader';

export default function DemoVideoSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="bg-[#F8FAFB] py-12 md:py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="2-MINUTE DEMO"
          headline="See How Agents Are Booking 15+ Extra Appointments"
          subheadline="Watch how Onyx contacts leads, qualifies with AI, and books appointments — automatically."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1080723411?h=9e72b49df4&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Onyx VSL"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-sm text-[#9DA2B3] mt-6"
          >
            No signup required. No credit card. Just see it work.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
