import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

interface Metric {
    value: string;
    numericValue: number;
    prefix?: string;
    suffix?: string;
    label: string;
    description: string;
}

const platformMetrics: Metric[] = [
    { value: '45', numericValue: 45, prefix: '€', suffix: 'M+', label: 'Revenue Recovered', description: 'Cumulative value recovered across all client engagements' },
    { value: '18', numericValue: 18, suffix: '%', label: 'Avg. Margin Uplift', description: 'Average improvement in operating margins' },
    { value: '2400', numericValue: 2400, suffix: '+', label: 'Leakages Detected', description: 'Total revenue leakages identified by Pulse AI' },
    { value: '94', numericValue: 94, suffix: '%', label: 'Actions Closed', description: 'Percentage of detected issues resolved' },
    { value: '95', numericValue: 95, suffix: '%', label: 'Time to Act Reduced', description: 'Reduction in time from detection to action' },
];

const companyMetrics: Metric[] = [
    { value: '12', numericValue: 12, suffix: '+', label: 'Years in iGaming', description: 'Deep industry experience since founding' },
    { value: '20', numericValue: 20, suffix: '+', label: 'Markets Served', description: 'Across 4 continents globally' },
    { value: '100', numericValue: 100, suffix: '+', label: 'Data Experts', description: 'Analysts, engineers & AI specialists' },
    { value: '4', numericValue: 4, suffix: '+ Year', label: 'Avg. Client Retention', description: 'Long-term partnership model' },
    { value: '50', numericValue: 50, suffix: '%', label: 'Cost Reduction', description: 'vs. in-house implementation' },
];

const outcomeMetrics: Metric[] = [
    { value: '28', numericValue: 28, prefix: '€', suffix: 'M', label: 'Fraud Prevented', description: 'Risk mitigation through anomaly detection' },
    { value: '28', numericValue: 28, suffix: '%', label: 'Churn Reduced', description: 'Improvement in player retention' },
    { value: '99.7', numericValue: 99.7, suffix: '%', label: 'Anomalies Caught', description: 'Detection rate accuracy' },
    { value: '4.5', numericValue: 4.5, suffix: 'x', label: 'ROI Achieved', description: 'Average return on investment' },
    { value: '3', numericValue: 3, suffix: ' Weeks', label: 'Deployment Time', description: 'Time to go live' },
];

const AnimCounter = ({ metric, isVisible }: { metric: Metric; isVisible: boolean }) => {
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (!isVisible) return;
        const target = metric.numericValue;
        const duration = 2000;
        const startTime = Date.now();
        const isFloat = target % 1 !== 0;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            setDisplay(isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString());
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isVisible, metric.numericValue]);

    return (
        <span className="font-display text-4xl md:text-5xl font-bold text-[#00f0ff]">
            {metric.prefix || ''}{display}{metric.suffix || ''}
        </span>
    );
};

const ImpactPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const ctx = gsap.context(() => {
            gsap.fromTo('.impact-heading', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
            gsap.fromTo('.impact-metric-card', { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out', delay: 0.3 });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const renderRow = (title: string, metrics: Metric[]) => (
        <div className="mb-10">
            <div className="font-mono text-xs text-gray-600 tracking-wider mb-4 uppercase">{title}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {metrics.map((m, i) => (
                    <div key={i} className="impact-metric-card p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-xl hover:border-[#00e5ff]/30 transition-all duration-300">
                        <AnimCounter metric={m} isVisible={isVisible} />
                        <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mt-2">{m.label}</div>
                        <p className="text-gray-600 text-[10px] mt-2">{m.description}</p>
                        <div className="mt-3 h-1 bg-[#00e5ff]/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00e5ff]/40 rounded-full transition-all duration-[2s] ease-out" style={{ width: isVisible ? '100%' : '0%' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div ref={pageRef} className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
            <Navigation />

            <main className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="impact-heading text-center mb-16">
                        <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                            [METRICS] VALUE_REALIZED_DASHBOARD
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Impact <span className="text-[#00f0ff]">Dashboard</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comprehensive metrics across platform performance, company credentials, and client outcomes.
                        </p>
                    </div>

                    {/* Terminal frame */}
                    <div className="bg-[#0a0e17]/80 border border-[#00e5ff]/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00e5ff]/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            <span className="ml-3 font-mono text-xs text-gray-600">impact_dashboard.exe — LIVE</span>
                        </div>

                        {renderRow('PLATFORM IMPACT', platformMetrics)}
                        {renderRow('COMPANY CREDENTIALS', companyMetrics)}
                        {renderRow('SPECIFIC OUTCOMES', outcomeMetrics)}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ImpactPage;
