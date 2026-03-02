import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Metric {
    value: string;
    numericValue: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

const platformMetrics: Metric[] = [
    { value: '45', numericValue: 45, prefix: '€', suffix: 'M+', label: 'Revenue Recovered' },
    { value: '18', numericValue: 18, suffix: '%', label: 'Avg. Margin Uplift' },
    { value: '2400', numericValue: 2400, suffix: '+', label: 'Leakages Detected' },
    { value: '94', numericValue: 94, suffix: '%', label: 'Actions Closed' },
    { value: '95', numericValue: 95, suffix: '%', label: 'Time to Act Reduced' },
];

const companyMetrics: Metric[] = [
    { value: '12', numericValue: 12, suffix: '+', label: 'Years in iGaming' },
    { value: '20', numericValue: 20, suffix: '+', label: 'Markets Served' },
    { value: '100', numericValue: 100, suffix: '+', label: 'Data Experts' },
    { value: '4', numericValue: 4, suffix: '+ Year', label: 'Avg. Client Retention' },
    { value: '50', numericValue: 50, suffix: '%', label: 'Cost Reduction vs In-House' },
];

const outcomeMetrics: Metric[] = [
    { value: '28', numericValue: 28, prefix: '€', suffix: 'M', label: 'Fraud Prevented' },
    { value: '28', numericValue: 28, suffix: '%', label: 'Churn Reduced' },
    { value: '99.7', numericValue: 99.7, suffix: '%', label: 'Anomalies Caught' },
    { value: '4.5', numericValue: 4.5, suffix: 'x', label: 'ROI Achieved' },
    { value: '3', numericValue: 3, suffix: ' Weeks', label: 'Deployment Time' },
];

const AnimatedCounter = ({ metric, isVisible }: { metric: Metric; isVisible: boolean }) => {
    const [display, setDisplay] = useState('0');
    const counterRef = useRef<HTMLDivElement>(null);

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

            if (isFloat) {
                setDisplay(current.toFixed(1));
            } else {
                setDisplay(Math.floor(current).toLocaleString());
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, metric.numericValue]);

    return (
        <div ref={counterRef} className="font-display text-3xl md:text-4xl font-bold text-[#00f0ff]">
            {metric.prefix || ''}{display}{metric.suffix || ''}
        </div>
    );
};

const MetricRow = ({ title, metrics, isVisible }: { title: string; metrics: Metric[]; isVisible: boolean }) => (
    <div className="mb-8">
        <div className="font-mono text-xs text-gray-600 tracking-wider mb-4 uppercase">
            {title}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {metrics.map((metric, i) => (
                <div
                    key={i}
                    className="metric-card p-5 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-xl hover:border-[#00e5ff]/30 transition-all duration-300 text-center"
                >
                    <AnimatedCounter metric={metric} isVisible={isVisible} />
                    <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-2">
                        {metric.label}
                    </div>
                    {/* Decorative mini bar */}
                    <div className="mt-3 h-1 bg-[#00e5ff]/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#00e5ff]/40 rounded-full transition-all duration-[2s] ease-out"
                            style={{ width: isVisible ? '100%' : '0%' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const MetricsDashboard = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top 75%',
                onEnter: () => setIsVisible(true),
            });

            gsap.fromTo(
                '.metrics-heading',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                }
            );

            gsap.fromTo(
                '.metric-card',
                { opacity: 0, y: 20, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="metrics-dashboard"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#080c14] to-[#0a0a0f]" />

            {/* Scan-line overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.1) 2px, rgba(0,229,255,0.1) 4px)',
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="metrics-heading text-center mb-12">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                        [METRICS] VALUE_REALIZED_DASHBOARD
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Value Realized <span className="text-[#00f0ff]">Dashboard</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        Real numbers. Real impact. Measured across every engagement.
                    </p>
                </div>

                {/* Terminal frame */}
                <div className="bg-[#0a0e17]/80 border border-[#00e5ff]/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00e5ff]/10">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="ml-3 font-mono text-xs text-gray-600">metrics_dashboard.exe — LIVE</span>
                    </div>

                    <MetricRow title="Platform Impact" metrics={platformMetrics} isVisible={isVisible} />
                    <MetricRow title="Company Credentials" metrics={companyMetrics} isVisible={isVisible} />
                    <MetricRow title="Specific Outcomes" metrics={outcomeMetrics} isVisible={isVisible} />
                </div>
            </div>
        </section>
    );
};

export default MetricsDashboard;
