import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsent');
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a24] border-t border-gray-800 p-4 md:p-6 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 pr-8">
                    <p className="text-sm text-gray-400 leading-relaxed">
                        When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email. We (or service providers on our behalf) may then send communications and marketing to these email. You may opt out of receiving this advertising by visiting <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">https://app.retention.com/optout</a>.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        By using our site, you agree to our <Link to="/privacy-policy" className="text-[#00f0ff] hover:underline">Privacy Policy</Link>.
                    </p>
                </div>
                <button
                    onClick={handleDismiss}
                    className="flex items-center gap-2 px-4 py-2 bg-[#00f0ff] text-black font-semibold rounded hover:bg-[#00d0df] transition-colors whitespace-nowrap"
                >
                    <span>I Understand</span>
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
