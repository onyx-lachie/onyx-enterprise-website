import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import DemoVideoSection from '../components/DemoVideoSection';
import StacksSection from '../components/StacksSection';
import HowItWorks from '../components/HowItWorks';
import FeaturesSection from '../components/FeaturesSection';
import ComparisonSection from '../components/ComparisonSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import FounderSection from '../components/FounderSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import SocialProofToast from '../components/SocialProofToast';
import ChatWidget from '../components/ChatWidget';
import ExitIntentPopup from '../components/ExitIntentPopup';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (id: string) => {
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
    };

    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => scrollToElement(state.scrollTo!), 100);
    } else if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => scrollToElement(hash), 100);
    }
  }, [location.state, location.hash]);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <DemoVideoSection />
      <StacksSection />
      <HowItWorks />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FounderSection />
      <CTASection />
      <Footer />
      <BackToTop />
      <SocialProofToast />
      <ChatWidget />
      <ExitIntentPopup />
    </>
  );
}
