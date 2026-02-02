import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const sessionShown = sessionStorage.getItem('exitPopupShown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (hasShown) return;

      const movingUp = e.clientY < lastY;
      lastY = e.clientY;

      if (e.clientY <= 20 && movingUp && window.innerWidth >= 768) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-50%', x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 z-[201] w-[90%] sm:w-auto"
          >
            <div className="bg-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.2)] p-8 md:p-12 relative max-w-[480px] mx-auto max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-6 right-6 text-[#9DA2B3] hover:text-[#1C1C1E] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-2">
                  Wait — Before You Go
                </h2>
                <p className="text-base text-[#6E7180] mb-1">
                  Get our free guide:
                </p>
                <h3 className="text-xl font-bold text-[#1C1C1E] mb-6">
                  7 Follow-Up Sequences That Book Appointments on Autopilot
                </h3>

                <div className="w-32 h-40 mx-auto mb-6 bg-gradient-to-br from-[#00F0B5] to-[#1C1C1E] rounded-lg shadow-lg flex items-center justify-center">
                  <FileText size={64} className="text-white" strokeWidth={1.5} />
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-4 border border-[#E8EAF0] rounded-lg text-base focus:outline-none focus:border-[#00F0B5] transition-colors mb-3"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#00F0B5] text-[#1C1C1E] rounded-lg font-semibold text-base hover:bg-[#00D9A0] transition-colors"
                  >
                    Send Me the Guide
                  </button>
                </form>

                <p className="text-xs text-[#9DA2B3] mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
