import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

export default function TermsOfServicePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1C1E] mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-[#6E7180]">
              Last Updated: January 30, {new Date().getFullYear()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#1C1C1E]">
              <section>
                <h2 className="text-2xl font-bold mb-4">Welcome to Onyx</h2>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your access to and use of the Onyx platform, website, and services (collectively, the "Service") operated by Quantum Automation Pty Ltd ("Onyx," "Company," "we," "us," or "our").
                </p>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li><strong className="text-[#1C1C1E]">"Account"</strong> means your registered account to access and use the Service.</li>
                  <li><strong className="text-[#1C1C1E]">"Content"</strong> means any data, text, files, information, usernames, images, graphics, or other materials you upload, post, or transmit through the Service.</li>
                  <li><strong className="text-[#1C1C1E]">"Customer Data"</strong> means any data, including personal data of your contacts and leads, that you input into or collect through the Service.</li>
                  <li><strong className="text-[#1C1C1E]">"Subscription"</strong> means your paid access to the Service under the Prime plan.</li>
                  <li><strong className="text-[#1C1C1E]">"User"</strong> or <strong className="text-[#1C1C1E]">"You"</strong> means the individual or entity accessing or using the Service.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  To use the Service, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>Be at least 18 years of age</li>
                  <li>Have the legal capacity to enter into a binding agreement</li>
                  <li>Not be prohibited from using the Service under applicable laws</li>
                  <li>If registering on behalf of a business, have the authority to bind that business to these Terms</li>
                </ul>
                <p className="text-[#6E7180] leading-relaxed mt-4">
                  By using the Service, you represent and warrant that you meet all eligibility requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">3.1 Account Creation</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  To access most features of the Service, you must create an Account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">3.2 Account Security</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activities that occur under your Account</li>
                  <li>Notifying us immediately of any unauthorized access or security breach</li>
                </ul>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We will not be liable for any loss or damage arising from your failure to protect your Account credentials.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">3.3 Account Restrictions</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>Create an Account using false or misleading information</li>
                  <li>Create multiple Accounts without our permission</li>
                  <li>Share your Account credentials with others</li>
                  <li>Use another person's Account without authorization</li>
                  <li>Sell, transfer, or assign your Account to any third party</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Service Description</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">4.1 Platform Overview</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  Onyx is an AI-powered customer relationship management (CRM) platform designed specifically for insurance agents. The Service includes features such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Lead management and pipeline tracking</li>
                  <li>AI-powered appointment booking</li>
                  <li>Automated follow-up sequences</li>
                  <li>SMS and email communication tools</li>
                  <li>Calendar integration</li>
                  <li>Reporting and analytics</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">4.2 Service Availability</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  We strive to maintain high availability of the Service but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Scheduled maintenance (we will provide reasonable notice when possible)</li>
                  <li>Unscheduled emergency maintenance</li>
                  <li>System failures or technical issues</li>
                  <li>Events beyond our reasonable control</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">4.3 Modifications to Service</h3>
                <p className="text-[#6E7180] leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice of material changes that may adversely affect your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Subscription Plans and Billing</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.1 Subscription Plans</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  We offer the following subscription plans:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li><strong className="text-[#1C1C1E]">Prime</strong> ($65/month): All 7 Onyx Stacks, pre-built text campaigns, unified inbox, AI appointment booking, advanced AI features, database reactivation, annual review automation, priority support, custom workflows, done-for-you onboarding</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.2 Billing</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Subscriptions are billed monthly in advance</li>
                  <li>Payment is due at the beginning of each billing cycle</li>
                  <li>All fees are quoted and payable in US Dollars (USD)</li>
                  <li>We accept major credit cards and other payment methods as indicated on our website</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.3 Automatic Renewal</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  Your Subscription will automatically renew at the end of each billing period unless you cancel before the renewal date. By subscribing, you authorize us to charge your payment method on a recurring basis.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.4 Price Changes</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We may change our prices at any time. Price changes will be communicated at least 30 days in advance and will take effect at the start of your next billing cycle. Your continued use of the Service after a price change constitutes acceptance of the new pricing.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.5 Taxes</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  All fees are exclusive of applicable taxes. You are responsible for paying any taxes associated with your use of the Service, excluding taxes based on our net income.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">5.6 Failed Payments</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  If payment fails, we may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>Retry the charge</li>
                  <li>Suspend your access to the Service</li>
                  <li>Downgrade your Account to a limited free tier</li>
                  <li>Terminate your Account after reasonable notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Cancellation and Refunds</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">6.1 Cancellation by You</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You may cancel your Subscription at any time through your Account settings or by contacting us at support@onyx-crm.com. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Your Subscription will remain active until the end of the current billing period</li>
                  <li>You will not be charged for subsequent billing periods</li>
                  <li>No prorated refunds will be issued for partial months</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">6.2 14-Day Money-Back Guarantee</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We offer a 14-day money-back guarantee for new subscribers. If you are not satisfied with the Service within the first 14 days of your initial Subscription, you may request a full refund by contacting support@onyx-crm.com. This guarantee applies only to your first Subscription and does not apply to renewals.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">6.3 Refund Policy</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  Except as provided in Section 6.2:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>All fees are non-refundable</li>
                  <li>No refunds will be issued for partial months of service</li>
                  <li>No refunds will be issued for unused features or downgraded plans</li>
                  <li>No refunds will be issued for add-on services or custom development work</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">6.4 Termination by Us</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  We may suspend or terminate your Account and access to the Service at any time if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>You breach these Terms</li>
                  <li>You engage in fraudulent or illegal activity</li>
                  <li>You fail to pay applicable fees</li>
                  <li>We are required to do so by law</li>
                  <li>We discontinue the Service</li>
                </ul>
                <p className="text-[#6E7180] leading-relaxed">
                  In the event of termination for cause, no refund will be issued. If we terminate your Account without cause, we will refund any prepaid fees for the unused portion of your Subscription.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Acceptable Use</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">7.1 Permitted Use</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You may use the Service only for lawful purposes and in accordance with these Terms. The Service is intended for use by insurance professionals for legitimate business purposes.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">7.2 Prohibited Conduct</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You agree not to:
                </p>
                <p className="text-[#1C1C1E] font-semibold mb-2">Illegal Activities:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Use the Service for any unlawful purpose or in violation of any laws</li>
                  <li>Violate any applicable telemarketing, anti-spam, or consumer protection laws</li>
                  <li>Engage in fraudulent, deceptive, or misleading practices</li>
                  <li>Infringe on intellectual property rights of others</li>
                </ul>

                <p className="text-[#1C1C1E] font-semibold mb-2">Harmful Activities:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to the Service or related systems</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  <li>Engage in any activity that could damage, disable, or impair the Service</li>
                </ul>

                <p className="text-[#1C1C1E] font-semibold mb-2">Misuse of Communications:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Send unsolicited bulk messages (spam)</li>
                  <li>Send messages without proper consent from recipients</li>
                  <li>Use the Service to harass, threaten, or abuse others</li>
                  <li>Impersonate any person or entity</li>
                </ul>

                <p className="text-[#1C1C1E] font-semibold mb-2">Data Misuse:</p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Collect or harvest user data without authorization</li>
                  <li>Use Customer Data for purposes other than your legitimate business purposes</li>
                  <li>Share, sell, or distribute Customer Data to third parties without proper consent</li>
                  <li>Upload or transmit data you do not have the right to use</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">7.3 Compliance with Laws</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You are solely responsible for ensuring your use of the Service complies with all applicable laws and regulations, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>Telephone Consumer Protection Act (TCPA)</li>
                  <li>CAN-SPAM Act</li>
                  <li>State insurance regulations and licensing requirements</li>
                  <li>Do-Not-Call regulations</li>
                  <li>HIPAA (if applicable to your business)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. SMS and Communication Services</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">8.1 SMS Messaging</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  The Service includes SMS messaging capabilities. By using these features, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Obtain proper consent from recipients before sending messages</li>
                  <li>Comply with all applicable laws regarding electronic communications</li>
                  <li>Honor opt-out requests promptly (within 24 hours)</li>
                  <li>Include proper identification in your messages</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">8.2 Message Content</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You are solely responsible for the content of messages sent through the Service. We do not review or approve message content before transmission.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">8.3 Carrier and Third-Party Terms</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  Your use of SMS features is subject to the terms and conditions of mobile carriers and our third-party messaging providers. Standard message and data rates may apply to recipients.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">8.4 Opt-Out Compliance</h3>
                <p className="text-[#6E7180] leading-relaxed">
                  Recipients may opt out of receiving messages by replying "STOP." You must honor all opt-out requests and maintain accurate records of consent and opt-outs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Customer Data and Privacy</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.1 Ownership of Customer Data</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You retain all ownership rights to your Customer Data. We do not claim any ownership interest in your Customer Data.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.2 License to Customer Data</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  By uploading Customer Data to the Service, you grant us a limited, non-exclusive license to use, process, and store your Customer Data solely for the purpose of providing the Service to you.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.3 Data Processing</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We will process your Customer Data in accordance with our Privacy Policy and applicable data protection laws.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.4 Data Export</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You may export your Customer Data at any time during your Subscription. Upon termination, you will have 30 days to export your data before it may be deleted.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.5 Data Security</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We implement reasonable technical and organizational measures to protect your Customer Data. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">9.6 Your Responsibilities</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>The accuracy and legality of your Customer Data</li>
                  <li>Obtaining necessary consents for collecting and processing personal data</li>
                  <li>Maintaining appropriate backups of your data</li>
                  <li>Complying with applicable privacy and data protection laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Intellectual Property</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">10.1 Our Intellectual Property</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  The Service, including all software, designs, text, graphics, logos, and other content (excluding Customer Data), is owned by Onyx or our licensors and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our written permission.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">10.2 Trademarks</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  "Onyx," the Onyx logo, and other Onyx trademarks are our property. You may not use our trademarks without our prior written consent.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">10.3 Feedback</h3>
                <p className="text-[#6E7180] leading-relaxed">
                  If you provide us with feedback, suggestions, or ideas regarding the Service, you grant us an unrestricted, perpetual, royalty-free license to use such feedback for any purpose without compensation to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Third-Party Services</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">11.1 Integrations</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  The Service may integrate with third-party services (e.g., Google Calendar, Outlook, Twilio, Zapier). Your use of such integrations is subject to the terms and privacy policies of those third parties.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">11.2 Third-Party Links</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  The Service may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or availability of such third-party services.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">11.3 No Endorsement</h3>
                <p className="text-[#6E7180] leading-relaxed">
                  The inclusion of any third-party link or integration does not imply endorsement by Onyx.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Disclaimer of Warranties</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">12.1 "As Is" Service</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2 uppercase font-semibold">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                  <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                  <li>NON-INFRINGEMENT</li>
                  <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">12.2 No Guarantee of Results</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4 uppercase font-semibold">
                  WE DO NOT GUARANTEE ANY SPECIFIC RESULTS FROM YOUR USE OF THE SERVICE. RESULTS MAY VARY BASED ON NUMEROUS FACTORS BEYOND OUR CONTROL.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">12.3 Third-Party Services</h3>
                <p className="text-[#6E7180] leading-relaxed uppercase font-semibold">
                  WE MAKE NO WARRANTIES REGARDING ANY THIRD-PARTY SERVICES INTEGRATED WITH OR ACCESSIBLE THROUGH THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Limitation of Liability</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">13.1 Exclusion of Damages</h3>
                <p className="text-[#6E7180] leading-relaxed mb-2 uppercase font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ONYX SHALL NOT BE LIABLE FOR ANY:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES</li>
                  <li>COST OF SUBSTITUTE SERVICES</li>
                  <li>DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">13.2 Cap on Liability</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4 uppercase font-semibold">
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR</li>
                  <li>ONE HUNDRED US DOLLARS ($100)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">13.3 Basis of the Bargain</h3>
                <p className="text-[#6E7180] leading-relaxed uppercase font-semibold">
                  THE LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE LIMITATIONS ARE A FUNDAMENTAL PART OF THE BARGAIN BETWEEN YOU AND ONYX.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Indemnification</h2>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You agree to indemnify, defend, and hold harmless Onyx and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180]">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your Customer Data or Content</li>
                  <li>Your infringement of any third-party rights</li>
                  <li>Any messages or communications sent through the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Dispute Resolution</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">15.1 Informal Resolution</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  Before filing any formal legal action, you agree to first contact us at support@onyx-crm.com and attempt to resolve the dispute informally for at least 30 days.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">15.2 Governing Law</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of Victoria, Australia, without regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">15.3 Jurisdiction</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  Any legal action or proceeding arising from these Terms shall be brought exclusively in the courts of Victoria, Australia, and you consent to the personal jurisdiction of such courts.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">15.4 Class Action Waiver</h3>
                <p className="text-[#6E7180] leading-relaxed uppercase font-semibold">
                  TO THE EXTENT PERMITTED BY LAW, YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. General Provisions</h2>
                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.1 Entire Agreement</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and Onyx regarding the Service.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.2 Severability</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.3 Waiver</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.4 Assignment</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.5 Notices</h3>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  We may provide notices to you via email, posting on the Service, or other reasonable means. You may provide notices to us at the contact information below.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-[#1C1C1E]">16.6 Force Majeure</h3>
                <p className="text-[#6E7180] leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including natural disasters, acts of government, internet outages, or third-party service failures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">17. Changes to Terms</h2>
                <p className="text-[#6E7180] leading-relaxed mb-2">
                  We may modify these Terms at any time. We will notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#6E7180] mb-4">
                  <li>Posting the updated Terms on our website</li>
                  <li>Sending an email to your registered email address</li>
                  <li>Providing notice through the Service</li>
                </ul>
                <p className="text-[#6E7180] leading-relaxed">
                  Your continued use of the Service after any changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">18. Contact Us</h2>
                <p className="text-[#6E7180] leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-[#E6FFF8] rounded-xl p-6 border border-[#00F0B5]/30">
                  <p className="text-[#1C1C1E] font-semibold mb-2">Quantum Automation Pty Ltd</p>
                  <p className="text-[#6E7180] mb-1">Email: support@onyx-crm.com</p>
                  <p className="text-[#6E7180] mb-1">Phone: 737-325-8808</p>
                  <p className="text-[#6E7180]">Address: Unit 607, 107 Beach Street, Port Melbourne, Victoria 3207, Australia</p>
                </div>
              </section>

              <section className="border-t border-[#E8EAF0] pt-8">
                <p className="text-[#9DA2B3] text-center italic">
                  By using Onyx, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
