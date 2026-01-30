import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/Button';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
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

  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="pb-16 mb-16 border-b border-[#40424D]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-[400px]">
              <h3 className="text-2xl font-bold mb-2">Stay in the Loop</h3>
              <p className="text-[#9DA2B3]">
                Weekly tips on booking more appointments and growing your insurance business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-[#2C2C2E] border border-[#40424D] text-white placeholder-[#6E7180] focus:outline-none focus:border-[#00F0B5] transition-colors w-full sm:w-[280px]"
              />
              <Button variant="primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-extrabold mb-4">
              <span className="text-[#00F0B5]">o</span>
              <span>nyx</span>
              <span className="text-xs align-super">®</span>
            </div>
            <p className="text-[#9DA2B3] mb-6 text-sm">
              Insure Success, Automate Growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61574719604503" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/theonyxcrm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/theonyxcrm" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://au.linkedin.com/company/onyx-crm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('stacks')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Stacks
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://blog.onyx-crm.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <button onClick={() => navigate('/book-demo')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Book a Demo
                </button>
              </li>
              <li>
                <a href="mailto:support@onyx-crm.com" className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate('/privacy-policy')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms-of-service')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/refund-policy')} className="text-sm text-[#9DA2B3] hover:text-[#00F0B5] transition-colors">
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#40424D] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6E7180]">
            © {new Date().getFullYear()} Onyx. All rights reserved.
          </p>
          <p className="text-sm text-[#6E7180]">
            <a href="mailto:support@onyx-crm.com" className="hover:text-[#00F0B5] transition-colors">
              support@onyx-crm.com
            </a>
            {' '}|{' '}
            <a href="tel:737-325-8808" className="hover:text-[#00F0B5] transition-colors">
              737-325-8808
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
