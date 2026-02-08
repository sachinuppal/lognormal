import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00f0ff] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back</span>
            </Link>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              <span className="text-[#00f0ff]">Privacy</span> Policy
            </h1>

            <div className="text-center text-gray-400 font-mono text-sm space-y-1">
              <p><span className="text-gray-500">Effective Date:</span> 4 December, 2024</p>
              <p><span className="text-gray-500">Last Updated:</span> 4 December, 2025</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-invert prose-gray max-w-none">
              <p className="text-gray-400 leading-relaxed mb-8">
                Welcome to FalconDive. Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect your information. It applies to all users of our platform, including clients, administrators, and end-users interacting with the platform.
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">1. Data We Collect</h2>
                <p className="text-gray-400 mb-4">We may collect the following types of information:</p>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <span className="text-white font-semibold">Account Information:</span> Name, email address, company details, and role.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Transactional Data:</span> Bets, deposits, withdrawals, bonus usage, and customer information, uploaded by clients as part of our analytics service.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Usage Data:</span> Logs, analytics, and interactions with our platform for system improvement.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Cookies:</span> Information about your device, browser, and online interactions collected via cookies (read Section 6 for details).
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">2. How We Use Your Data</h2>
                <p className="text-gray-400 mb-4">The data we collect is used to:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Provide and maintain the functionality of the FalconDive platform.</li>
                  <li>Perform analytics and generate business intelligence reports for clients.</li>
                  <li>Enhance user experience through system improvements and security updates.</li>
                  <li>Comply with legal obligations, including GDPR and other applicable privacy laws.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">3. Data Sharing</h2>
                <p className="text-gray-400 mb-4">We do not sell your data. However, we may share your information with:</p>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <span className="text-white font-semibold">Third-Party Providers:</span> For hosting (e.g., AWS S3), data processing (EC2 instances), and security (Cloudflare).
                  </li>
                  <li>
                    <span className="text-white font-semibold">Legal Authorities:</span> As required to comply with laws, regulations, or valid legal processes.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Sub-processors:</span> Listed in our DPA and only for processing activities on behalf of our clients.
                  </li>
                </ul>
                <p className="text-gray-400 mt-4">All data-sharing is conducted under strict agreements to ensure your data's confidentiality and security.</p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">4. Data Security</h2>
                <p className="text-gray-400 mb-4">We implement state-of-the-art security measures, including:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Encryption at rest (AES-256) and in transit (TLS/SSL).</li>
                  <li>OAuth2 for API access and secure authentication.</li>
                  <li>Cloudflare for DDoS protection, SSL management, and bot prevention.</li>
                  <li>Data isolation for each tenant, ensuring separation of client information.</li>
                </ul>
                <p className="text-gray-400 mt-4">For detailed technical measures, refer to our Service Agreement and DPA.</p>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">5. Your Rights</h2>
                <p className="text-gray-400 mb-4">As a user, you have the right to:</p>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <span className="text-white font-semibold">Access Your Data:</span> Request a copy of your data in a structured format.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Rectify Your Data:</span> Correct inaccuracies in your data.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Delete Your Data:</span> Request the deletion of data we hold, subject to legal or contractual obligations.
                  </li>
                  <li>
                    <span className="text-white font-semibold">Object to Processing:</span> Restrict certain uses of your data.
                  </li>
                </ul>
                <p className="text-gray-400 mt-4">To exercise these rights, contact us at <a href="mailto:info@falcondive.io" className="text-[#00f0ff] hover:underline">info@falcondive.io</a>.</p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-400 mb-4">We use cookies to:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside">
                  <li>Enhance the platform's performance.</li>
                  <li>Track usage for analytics purposes.</li>
                  <li>Ensure security through session management.</li>
                </ul>
                <p className="text-gray-400 mt-4">You can manage or disable cookies through your browser settings. Note that some features of FalconDive may not function properly without cookies.</p>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">7. Data Collection by Partners</h2>
                <p className="text-gray-400 mb-4">
                  When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email. You may opt out of receiving this advertising by visiting <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">https://app.retention.com/optout</a>.
                </p>
                <p className="text-gray-400">
                  You also have the option to opt out of the collection of your personal data in compliance with GDPR. To exercise this option, please visit <a href="https://www.rb2b.com/rb2b-gdpr-opt-out" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">https://www.rb2b.com/rb2b-gdpr-opt-out</a>.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">8. Data Retention</h2>
                <p className="text-gray-400">We retain your data:</p>
                <ul className="space-y-2 text-gray-400 list-disc list-inside mt-4">
                  <li>For as long as you use our services or as required by law.</li>
                  <li>Following contract termination, transactional data is deleted after 30 days unless otherwise specified.</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">9. International Data Transfers</h2>
                <p className="text-gray-400">Data processed by FalconDive may be transferred to and stored in regions outside the European Economic Area (EEA). Such transfers are safeguarded by Standard Contractual Clauses (SCCs) or other approved mechanisms.</p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">10. Updates to This Policy</h2>
                <p className="text-gray-400">We may update this Privacy Policy periodically. Significant changes will be communicated via email or platform notifications. Continued use of FalconDive constitutes acceptance of the updated policy.</p>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#00f0ff] mb-4">11. Contact Us</h2>
                <p className="text-gray-400 mb-4">For questions, concerns, or to exercise your privacy rights, contact us at:</p>
                <div className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl">
                  <p className="text-gray-400"><span className="text-gray-500">Email:</span> <a href="mailto:info@falcondive.io" className="text-[#00f0ff] hover:underline">info@falcondive.io</a></p>
                  <p className="text-gray-400"><span className="text-gray-500">Phone:</span> (+91) 4048960174</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
