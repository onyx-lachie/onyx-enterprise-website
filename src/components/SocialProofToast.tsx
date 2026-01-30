import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Toast {
  name: string;
  state: string;
  message: string;
  emoji: string;
}

export default function SocialProofToast() {
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);
  const [toastCount, setToastCount] = useState(0);

  const names = [
    { name: 'Trevor F.', gender: 'male' },
    { name: 'Sarah K.', gender: 'female' },
    { name: 'Mike T.', gender: 'male' },
    { name: 'David R.', gender: 'male' },
    { name: 'Lisa M.', gender: 'female' },
    { name: 'Jennifer P.', gender: 'female' },
    { name: 'Robert H.', gender: 'male' },
    { name: 'Amanda S.', gender: 'female' },
    { name: 'James B.', gender: 'male' },
    { name: 'Jessica L.', gender: 'female' },
    { name: 'Michael D.', gender: 'male' },
    { name: 'Emily W.', gender: 'female' },
    { name: 'Christopher N.', gender: 'male' },
    { name: 'Ashley G.', gender: 'female' },
    { name: 'Daniel M.', gender: 'male' },
    { name: 'Nicole R.', gender: 'female' },
    { name: 'Matthew C.', gender: 'male' },
    { name: 'Rachel V.', gender: 'female' },
    { name: 'Brandon J.', gender: 'male' },
    { name: 'Lauren T.', gender: 'female' },
    { name: 'Kevin A.', gender: 'male' },
    { name: 'Stephanie H.', gender: 'female' },
    { name: 'Brian K.', gender: 'male' },
    { name: 'Megan F.', gender: 'female' },
    { name: 'Ryan P.', gender: 'male' }
  ];

  const states = [
    'Texas', 'Florida', 'Arizona', 'California', 'Ohio',
    'New York', 'Georgia', 'North Carolina', 'Michigan', 'Colorado',
    'Virginia', 'Tennessee', 'Illinois', 'Pennsylvania', 'Washington',
    'Nevada', 'Oregon', 'Missouri', 'Wisconsin', 'Indiana'
  ];

  const messageTemplates = [
    { template: (gender: string) => `just revolutionized ${gender === 'male' ? 'his' : 'her'} agency with Onyx Prime`, emoji: '🎉' },
    { template: (gender: string) => `just transformed ${gender === 'male' ? 'his' : 'her'} insurance business with Onyx`, emoji: '🚀' },
    { template: (gender: string) => `just upgraded ${gender === 'male' ? 'his' : 'her'} agency to Onyx Prime`, emoji: '⚡' },
    { template: (gender: string) => `just streamlined ${gender === 'male' ? 'his' : 'her'} workflow with Onyx`, emoji: '✨' },
    { template: (gender: string) => `just scaled ${gender === 'male' ? 'his' : 'her'} agency with Onyx Prime`, emoji: '📈' }
  ];

  const getRandomToast = (): Toast => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];

    return {
      name: randomName.name,
      state: randomState,
      message: randomTemplate.template(randomName.gender),
      emoji: randomTemplate.emoji
    };
  };

  useEffect(() => {
    if (toastCount >= 5) return;

    const initialDelay = setTimeout(() => {
      setCurrentToast(getRandomToast());
      setToastCount(1);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [toastCount]);

  useEffect(() => {
    if (currentToast === null || toastCount >= 5) return;

    const hideTimer = setTimeout(() => {
      setCurrentToast(null);
    }, 5000);

    const showNextTimer = setTimeout(() => {
      if (toastCount < 5) {
        setCurrentToast(getRandomToast());
        setToastCount(prev => prev + 1);
      }
    }, 45000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(showNextTimer);
    };
  }, [currentToast, toastCount]);

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none hidden md:block">
      <AnimatePresence>
        {currentToast !== null && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="bg-white border border-[#E8EAF0] rounded-xl p-4 pr-5 shadow-[0_4px_24px_rgba(0,0,0,0.1)] max-w-[360px] pointer-events-auto"
          >
            <div className="flex items-start gap-2 text-sm text-[#6E7180]">
              <span className="text-lg mt-0.5">{currentToast.emoji}</span>
              <span>
                <strong className="text-[#1C1C1E] font-semibold">{currentToast.name}</strong> from{' '}
                <strong className="text-[#1C1C1E] font-semibold">{currentToast.state}</strong>{' '}
                {currentToast.message}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
