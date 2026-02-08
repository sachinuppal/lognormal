import React, { useState } from 'react';
import { useConsent } from '../context/ConsentContext';
import { X, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsentManager: React.FC = () => {
    const { consent, updateConsent, acceptAll, rejectAll, isOpen, setIsOpen } = useConsent();
    const [showDetails, setShowDetails] = useState(false);

    if (!isOpen) return (
        <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 left-4 z-40 p-2 bg-[#1a1a24]/80 backdrop-blur-sm border border-gray-800 rounded-full text-gray-400 hover:text-[#00f0ff] transition-all"
            title="Cookie Settings"
        >
            <ShieldCheck className="w-5 h-5" />
        </button>
    );

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a24] border-t border-gray-800 shadow-2xl animate-in slide-in-from-bottom duration-500 max-h-[90vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto p-4 md:p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white">We value your privacy</h3>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-4xl">
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                Read our <Link to="/privacy-policy" className="text-[#00f0ff] hover:underline" onClick={() => setIsOpen(false)}>Privacy Policy</Link>.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {showDetails && (
                        <div className="grid gap-4 py-4 border-y border-gray-800/50">
                            <div className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
                                <div className="opacity-70">
                                    <p className="font-semibold text-white text-sm">Necessary</p>
                                    <p className="text-xs text-gray-500">Required for the website to function.</p>
                                </div>
                                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">
                                    Always Active
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
                                <div>
                                    <p className="font-semibold text-white text-sm">Analytics</p>
                                    <p className="text-xs text-gray-500">Helps us understand how you use our site.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={consent.analytics}
                                        onChange={(e) => updateConsent({ analytics: e.target.checked })}
                                    />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f0ff]"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
                                <div>
                                    <p className="font-semibold text-white text-sm">Marketing</p>
                                    <p className="text-xs text-gray-500">Used to deliver relevant advertisements.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={consent.marketing}
                                        onChange={(e) => updateConsent({ marketing: e.target.checked })}
                                    />
                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f0ff]"></div>
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={acceptAll}
                            className="flex-1 px-6 py-2.5 bg-[#00f0ff] text-black font-semibold rounded-lg hover:bg-[#00d0df] transition-colors"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={rejectAll}
                            className="flex-1 px-6 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="px-6 py-2.5 bg-transparent text-gray-400 font-semibold rounded-lg hover:text-white transition-colors border border-gray-700 flex items-center justify-center gap-2"
                        >
                            <span>{showDetails ? 'Hide Details' : 'Customize'}</span>
                            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsentManager;
