import { useState, useEffect, useCallback } from 'react';
import { X, ArrowLeft, ArrowRight, Check, Lock, Dice1, HeartPulse, Zap, CreditCard, Cog } from 'lucide-react';

// --- Types ---
interface LeadData {
    industry: string;
    role: string;
    seniority: string;
    fullName: string;
    email: string;
    company: string;
    phone: string;
    agreedToTerms: boolean;
}

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    triggerAction?: string;
    triggerPage?: string;
    caseStudyName?: string;
    prefillEmail?: string;
}


// Lead capture completion check (sessionStorage removed — always returns false)
export function isLeadCaptureCompleted(): boolean {
    return false;
}

// --- Data ---
const industries = [
    { label: 'iGaming', icon: Dice1 },
    { label: 'Healthcare', icon: HeartPulse },
    { label: 'Energy', icon: Zap },
    { label: 'Financial Technology', icon: CreditCard },
    { label: 'Manufacturing', icon: Cog },
];

const roles = [
    'Executive & P&L Owners',
    'Data & Analytics Leaders',
    'Data & Analytics Practitioners (Power Users)',
    'Product, Growth & Revenue Stakeholders',
    'IT, Platform & Governance Stakeholders',
];

const seniorities = [
    'C-Level (CEO, CTO, CDO, CRO, CMO)',
    'VP, Director, Head-of',
    'Architect, Senior IC, Lead',
    'Director, Senior Manager',
];

// --- Email sending via Vercel serverless function (Resend) ---
async function sendLeadEmail(data: LeadData, triggerAction: string, triggerPage: string, caseStudyName?: string) {
    const payload = {
        _subject: `[FalconDive Lead] ${data.fullName || 'Anonymous'} (${data.industry})${caseStudyName ? ` [${caseStudyName}]` : ''}`,
        name: data.fullName,
        email: data.email,
        company: data.company,
        phone: data.phone || 'Not provided',
        industry: data.industry,
        role: data.role,
        seniority: data.seniority,
        triggerAction,
        caseStudyName: caseStudyName || 'N/A',
        triggerPage,
        timestamp: new Date().toISOString(),
    };

    // Log to console for debugging
    console.log('[FalconDive Lead Capture]', JSON.stringify(payload, null, 2));

    try {
        // Use the Vercel serverless function (Resend-powered)
        const response = await fetch('/api/lead-capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('[FalconDive] Lead submitted successfully via Resend:', result);
        } else {
            const errorText = await response.text();
            console.error('[FalconDive] API error:', response.status, errorText);
        }
    } catch (err) {
        console.error('[FalconDive] Lead submission error (API may not be available in local dev):', err);
    }
}

// --- Component ---
const LeadCaptureModal = ({ isOpen, onClose, triggerAction = 'General Inquiry', triggerPage = window.location.href, caseStudyName, prefillEmail }: LeadCaptureModalProps) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<LeadData>({
        industry: '',
        role: '',
        seniority: '',
        fullName: '',
        email: '',
        company: '',
        phone: '',
        agreedToTerms: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailError, setEmailError] = useState('');

    // On open: reset wizard to step 1, lock body scroll
    // Issue #3 fix: always reset state instead of restoring from sessionStorage
    // Issue #2 fix: lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Reset wizard state fresh every time
            setStep(1);
            setData({
                industry: '',
                role: '',
                seniority: '',
                fullName: '',
                email: prefillEmail || '',
                company: '',
                phone: '',
                agreedToTerms: false,
            });
            setEmailError('');
            setIsSubmitting(false);

            // Lock body scroll
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restore body scroll
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        return () => {
            // Cleanup: ensure body scroll is restored if component unmounts while open
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [isOpen, prefillEmail]);

    // Keyboard nav
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Enter' && canProceed()) handleNext();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    });

    const canProceed = useCallback(() => {
        switch (step) {
            case 1: return data.industry !== '';
            case 2: return data.role !== '';
            case 3: return data.seniority !== '';
            case 4: return data.email.trim() !== '' && !emailError && data.agreedToTerms;
            default: return false;
        }
    }, [step, data, emailError]);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) { setEmailError(''); return; }
        if (!re.test(email)) setEmailError('Please enter a valid email address');
        else setEmailError('');
    };

    const handleNext = async () => {
        if (!canProceed()) return;
        if (step === 4) {
            setIsSubmitting(true);
            await sendLeadEmail(data, triggerAction, triggerPage, caseStudyName);
            setIsSubmitting(false);
            setStep(5);
        } else {
            setStep(step + 1);
        }
    };

    if (!isOpen) return null;

    const progressPercent = step <= 4 ? (step / 4) * 100 : 100;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0e17] to-[#111827] border border-[#00e5ff]/20 rounded-2xl shadow-[0_0_60px_rgba(0,229,255,0.1)]"
                style={{ overscrollBehavior: 'contain' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Progress bar */}
                <div className="h-[3px] bg-[#00e5ff]/10">
                    <div
                        className="h-full bg-[#00e5ff] transition-all duration-300 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-10">
                    {/* Step indicator */}
                    {step <= 4 && (
                        <div className="font-mono text-[#00e5ff]/60 text-xs tracking-wider mb-6">
                            STEP {step} of 4
                        </div>
                    )}

                    {/* --- STEP 1: Industry --- */}
                    {step === 1 && (
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white mb-2">SELECT YOUR INDUSTRY</h3>
                            <p className="text-gray-400 text-sm mb-8">Help us tailor the experience to your world.</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {industries.map((ind) => {
                                    const Icon = ind.icon;
                                    const isSelected = data.industry === ind.label;
                                    return (
                                        <button
                                            key={ind.label}
                                            onClick={() => setData({ ...data, industry: ind.label })}
                                            className={`p-4 rounded-xl border transition-all duration-200 text-center flex flex-col items-center gap-2 ${isSelected
                                                ? 'border-[#00e5ff]/60 bg-[#00e5ff]/10 shadow-[0_0_15px_rgba(0,229,255,0.1)]'
                                                : 'border-gray-800 bg-[#0f1724]/60 hover:border-gray-700'
                                                }`}
                                        >
                                            <Icon className={`w-6 h-6 ${isSelected ? 'text-[#00f0ff]' : 'text-gray-500'}`} />
                                            <span className={`font-mono text-xs tracking-wider ${isSelected ? 'text-[#00f0ff]' : 'text-gray-400'}`}>
                                                {ind.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* --- STEP 2: Role --- */}
                    {step === 2 && (
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white mb-2">WHAT'S YOUR FUNCTION?</h3>
                            <p className="text-gray-400 text-sm mb-8">So we can speak your language.</p>
                            <div className="space-y-3">
                                {roles.map((role) => {
                                    const isSelected = data.role === role;
                                    return (
                                        <button
                                            key={role}
                                            onClick={() => setData({ ...data, role })}
                                            className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${isSelected
                                                ? 'border-[#00e5ff]/60 bg-[#00e5ff]/10 border-l-4 border-l-[#00e5ff]'
                                                : 'border-gray-800 bg-[#0f1724]/60 hover:border-gray-700'
                                                }`}
                                        >
                                            <span className={`font-mono text-sm ${isSelected ? 'text-[#00f0ff]' : 'text-gray-400'}`}>
                                                {role}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* --- STEP 3: Seniority --- */}
                    {step === 3 && (
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white mb-2">YOUR LEVEL</h3>
                            <p className="text-gray-400 text-sm mb-8">To calibrate depth and detail.</p>
                            <div className="flex flex-wrap gap-3">
                                {seniorities.map((s) => {
                                    const isSelected = data.seniority === s;
                                    return (
                                        <button
                                            key={s}
                                            onClick={() => setData({ ...data, seniority: s })}
                                            className={`px-4 py-3 rounded-full border text-sm font-mono transition-all duration-200 ${isSelected
                                                ? 'bg-[#00e5ff] text-black border-[#00e5ff] font-bold'
                                                : 'border-gray-700 text-gray-400 hover:border-gray-600 bg-transparent'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* --- STEP 4: Contact Info --- */}
                    {step === 4 && (
                        <div>
                            <h3 className="font-display text-2xl font-bold text-white mb-2">ALMOST THERE — WHERE DO WE SEND IT?</h3>
                            <p className="text-gray-400 text-sm mb-8">Your details stay with us. No spam, ever.</p>
                            <div className="space-y-4">
                                <div>
                                    <label className="font-mono text-xs text-gray-500 mb-1.5 block">FULL NAME</label>
                                    <input
                                        type="text"
                                        value={data.fullName}
                                        onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                        placeholder="John Smith"
                                        className="w-full p-3 bg-[#0a0e17] border border-gray-800 rounded-lg text-white font-mono text-sm focus:border-[#00e5ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00e5ff]/30 placeholder-gray-700 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-mono text-xs text-gray-500 mb-1.5 block">WORK EMAIL *</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => {
                                            setData({ ...data, email: e.target.value });
                                            validateEmail(e.target.value);
                                        }}
                                        placeholder="john@company.com"
                                        className={`w-full p-3 bg-[#0a0e17] border rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-1 placeholder-gray-700 transition-colors ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-gray-800 focus:border-[#00e5ff]/50 focus:ring-[#00e5ff]/30'}`}
                                    />
                                    {emailError && <p className="text-red-400 text-xs mt-1 font-mono">{emailError}</p>}
                                </div>
                                {/* Terms of Service checkbox */}
                                <label className="flex items-start gap-3 cursor-pointer mt-4">
                                    <input
                                        type="checkbox"
                                        checked={data.agreedToTerms}
                                        onChange={(e) => setData({ ...data, agreedToTerms: e.target.checked })}
                                        className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-[#0a0e17] text-[#00e5ff] focus:ring-[#00e5ff]/30 focus:ring-offset-0 accent-[#00e5ff]"
                                    />
                                    <span className="text-gray-400 text-xs leading-relaxed">
                                        By submitting, I agree to the{' '}
                                        <a href="/#/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">Terms of Service</a>{' '}
                                        and{' '}
                                        <a href="/#/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">Privacy Policy</a>.
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* --- STEP 5: Confirmation --- */}
                    {step === 5 && (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00e5ff]/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                                <Check className="w-8 h-8 text-[#00f0ff]" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-2">ACCESS GRANTED ✓</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Thank you{data.fullName ? `, ${data.fullName}` : ''}! Our team will reach out to you at{' '}
                                <span className="text-[#00f0ff]">{data.email}</span> within 24 hours.
                            </p>
                            <p className="text-gray-500 text-xs font-mono mb-8">
                                Your value assessment is being prepared.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 bg-[#00e5ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform"
                            >
                                CLOSE
                            </button>
                        </div>
                    )}

                    {/* --- Navigation Buttons --- */}
                    {step <= 4 && (
                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-800/50">
                            {step > 1 ? (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-sm"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    BACK
                                </button>
                            ) : (
                                <div />
                            )}

                            <button
                                onClick={handleNext}
                                disabled={!canProceed() || isSubmitting}
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-bold tracking-wider transition-all ${canProceed() && !isSubmitting
                                    ? 'bg-[#00e5ff] text-black hover:scale-105'
                                    : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                                    }`}
                            >
                                {isSubmitting ? 'SUBMITTING...' : step === 4 ? (
                                    <>
                                        UNLOCK ACCESS
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        CONTINUE
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Security note */}
                    {step === 4 && (
                        <div className="flex items-center justify-center gap-2 mt-4 text-gray-600 text-xs font-mono">
                            <Lock className="w-3 h-3" />
                            Your data is secure. We never share your information.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadCaptureModal;
