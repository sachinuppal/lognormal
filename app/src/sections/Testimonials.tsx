import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "Lognormal transformed our data operations from fragmented silos into a unified intelligence platform. Over 6 years, they've generated €45M+ in measurable value — they're not vendors, they're strategic partners.",
        name: 'Founder',
        title: 'Sports Gaming Company',
        company: 'Fortuna Entertainment Group',
        industry: 'iGaming (CEE)',
        metric: '€45M+ Value Generated',
        stars: 5,
    },
    {
        quote: "The Management Scorecard tracking 32 KPIs across 1,200+ betting shops gave us operational visibility we never had before. The 18% margin uplift speaks for itself — FalconDive delivers outcomes, not dashboards.",
        name: 'Head of Analytics',
        title: 'Analytics Leader',
        company: 'Tipico',
        industry: 'Sportsbook (Germany)',
        metric: '18% Margin Uplift',
        stars: 5,
    },
    {
        quote: "What sets FalconDive apart is the operator mindset. They understand our business because they've been in our shoes. The AI-driven insights on player lifecycle management gave us a genuine competitive edge.",
        name: 'Senior Executive',
        title: 'C-Suite',
        company: 'Leading iGaming Operator',
        industry: 'iGaming',
        metric: '28% Churn Reduced',
        stars: 5,
    },
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.testimonial-heading',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                }
            );
            gsap.fromTo(
                '.testimonial-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.testimonial-grid', start: 'top 80%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
            <div className="absolute inset-0 dot-grid opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="testimonial-heading text-center mb-16">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                        [TESTIMONIALS] CLIENT_VOICES
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        What Our <span className="text-[#00f0ff]">Clients</span> Say
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        Trusted by enterprise leaders across regulated industries.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="testimonial-card group p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-2xl backdrop-blur-sm hover:border-[#00e5ff]/30 transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-[#00f0ff]/30 mb-4" />

                            {/* Quote text */}
                            <p className="text-gray-300 italic text-sm leading-relaxed mb-6">
                                "{t.quote}"
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-[#00e5ff]/20 to-transparent mb-4" />

                            {/* Client info */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="font-mono text-sm text-[#00f0ff]">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.title}</div>
                                    <div className="text-xs text-gray-400 mt-1 font-medium">{t.company}</div>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.stars }).map((_, si) => (
                                        <Star key={si} className="w-3 h-3 text-[#00f0ff] fill-[#00f0ff]" />
                                    ))}
                                </div>
                            </div>

                            {/* Metric badge */}
                            <div className="mt-4">
                                <span className="inline-flex items-center gap-1.5 bg-[#00e5ff]/10 border border-[#00e5ff]/20 px-3 py-1 rounded text-[10px] font-mono text-[#00f0ff] tracking-wider">
                                    {t.metric}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
