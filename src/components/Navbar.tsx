import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      window.location.hash = id;
      const element = document.getElementById(id);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Stacks', id: 'stacks' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Success Stories', id: 'testimonials' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#E8EAF0] shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={handleLogoClick} aria-label="Onyx home" className="text-2xl font-extrabold">
              <span className="text-[#00F0B5]">o</span>
              <span className="text-[#1C1C1E]">nyx</span>
              <span className="text-[#1C1C1E] text-xs align-super">®</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <a href="https://blog.onyx-crm.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300">
              Blog
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.onyx-crm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300"
            >
              Login
            </a>
            <Button variant="primary" className="text-sm" onClick={() => scrollToSection('pricing')}>
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-[#1C1C1E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-[72px] right-0 bottom-0 w-[280px] bg-white border-l border-[#E8EAF0] z-40 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-base font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <a href="https://blog.onyx-crm.com" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300">
                Blog
              </a>
              <div className="border-t border-[#E8EAF0] pt-6 flex flex-col gap-3">
                <a
                  href="https://app.onyx-crm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-[#6E7180] hover:text-[#1C1C1E] transition-colors duration-300"
                >
                  Login
                </a>
                <Button variant="primary" className="w-full" onClick={() => scrollToSection('pricing')}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
