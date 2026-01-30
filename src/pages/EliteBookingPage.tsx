import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EliteBookingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.onyx-crm.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#E6FFF8] to-[#D1FFF0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1C1C1E 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Navbar />

      <div className="max-w-[1280px] mx-auto px-6 py-12 mt-[72px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4">
            Book Your Elite AI Consultation
          </h1>
          <p className="text-lg text-[#6E7180] max-w-[600px] mx-auto">
            Schedule a consultation to learn how our Elite AI plan can transform your business with voice AI and advanced automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[900px] mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-[#E8EAF0] p-6 md:p-8">
            <iframe
              id="W2Wu8sAkmIT6O4zeTByD_1769751574871"
              src="https://link.onyx-crm.com/widget/booking/oNDATZpqvmBgGQjeYMFm"
              style={{
                width: '100%',
                height: '700px',
                border: 'none',
                borderRadius: '12px'
              }}
              title="Book Elite AI Consultation"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center pb-12"
        >
          <p className="text-sm text-[#9DA2B3]">
            Have questions? Email us at{' '}
            <a href="mailto:support@onyx-crm.com" className="text-[#00F0B5] hover:underline">
              support@onyx-crm.com
            </a>
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
