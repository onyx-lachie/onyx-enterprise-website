import { motion } from 'framer-motion';

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFB] py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[#9DA2B3] mb-8"
        >
          Powering insurance agents at
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-base text-[#6E7180] max-w-[800px] mx-auto"
        >
          Works with Google Calendar, Outlook, Twilio, Zapier, and 50+ integrations
        </motion.p>
      </div>
    </section>
  );
}
