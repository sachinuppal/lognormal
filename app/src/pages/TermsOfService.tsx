import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const TermsOfService = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                            [LEGAL] TERMS_OF_SERVICE
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Terms of <span className="text-[#00f0ff]">Service</span>
                        </h1>
                        <p className="text-gray-400 text-sm font-mono">
                            Last Updated: March 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                By accessing or using the FalconDive platform ("Service"), operated by Lognormal Analytics Pvt. Ltd. ("Company", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                FalconDive is an AI-First Value Realization Platform that provides decision intelligence, revenue leakage detection, root cause diagnostics, and value monitoring services for businesses, with a focus on the iGaming sector.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                All content, features, and functionality of the Service — including but not limited to text, graphics, logos, icons, images, software, data models, AI algorithms, and analytics outputs — are the exclusive property of Lognormal Analytics Pvt. Ltd. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                You agree not to:
                            </p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">×</span>
                                    Use the Service in violation of any applicable laws or regulations
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">×</span>
                                    Attempt to reverse-engineer, decompile, or disassemble any part of the Service
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">×</span>
                                    Share, redistribute, or sublicense access to the Service without authorization
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">×</span>
                                    Interfere with or disrupt the integrity or performance of the Service
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">6. Data and Analytics</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Insights, analytics, and recommendations generated by FalconDive are for informational purposes and should be evaluated in the context of your specific business requirements. While we strive for accuracy, we do not guarantee that all outputs will be error-free or suitable for all business decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                To the maximum extent permitted by applicable law, Lognormal Analytics Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">8. Termination</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on the Service with a revised "Last Updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                For questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-xl font-mono text-sm text-gray-400">
                                <p>Lognormal Analytics Pvt. Ltd.</p>
                                <p>402, 4th Floor, CSR Estate, Plot No.8, Sector 1</p>
                                <p>HUDA Techno Enclave, Madhapur</p>
                                <p>Hyderabad, Telangana 500081, India</p>
                                <p className="mt-2">
                                    Email: <a href="mailto:info@lognormal.io" className="text-[#00f0ff] hover:underline">info@lognormal.io</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
