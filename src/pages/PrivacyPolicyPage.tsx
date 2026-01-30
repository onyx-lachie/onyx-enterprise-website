import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1C1E] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#6E7180]">
              Last Updated: January 30, {new Date().getFullYear()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
