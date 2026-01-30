import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-[100px] right-8 z-[100] w-[60px] h-[60px] rounded-full bg-[#00F0B5] shadow-[0_4px_24px_rgba(0,240,181,0.4)] flex items-center justify-center text-white hover:shadow-[0_6px_32px_rgba(0,240,181,0.5)] transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-[172px] right-8 z-[100] w-[350px] h-[450px] bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
          >
            <div className="bg-[#1C1C1E] p-5 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-base">Chat with Onyx</h3>
                <p className="text-white/70 text-xs mt-1">We typically reply in minutes</p>
              </div>
            </div>

            <div className="flex-1 p-5 bg-[#F8FAFB] overflow-y-auto">
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm">
                <p className="text-sm text-[#6E7180] leading-relaxed">
                  Hey! 👋 Got questions about Onyx? I'm here to help. Are you currently using a CRM, or looking for your first one?
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-[#E8EAF0] bg-white">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 border border-[#E8EAF0] rounded-lg text-sm focus:outline-none focus:border-[#00F0B5] transition-colors"
                />
                <button
                  aria-label="Send message"
                  className="w-12 h-12 rounded-lg bg-[#00F0B5] flex items-center justify-center text-white hover:bg-[#00D9A0] transition-colors flex-shrink-0"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
