import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: '100+', label: 'Years in iGaming & Data', suffix: '' },
    { value: '20+', label: 'Markets Across 4 Continents', suffix: '' },
    { value: '6+', label: 'Tier-1 Operators', suffix: '' },
    { value: '€500M+', label: 'Decisions Powered', suffix: '' },
    { value: '100+', label: 'Data Experts', suffix: '' },
];

const pastBrands: { name: string; logo?: string }[] = [
    { name: 'PartyGaming', logo: '/images/client-logos/partygaming.png' },
    { name: 'Bwin.Party', logo: '/images/client-logos/bwinparty.png' },
    { name: 'Entain', logo: '/images/client-logos/entain.png' },
    { name: 'Fortuna', logo: '/images/client-logos/FEG.png' },
    { name: '888 Holdings', logo: '/images/client-logos/888.com-logo.png' },
    { name: 'William Hill', logo: '/images/client-logos/williamhill.png' },
];

const GamingVeterans = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.veterans-left',
                { opacity: 0, x: -40 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
                }
            );
            gsap.fromTo(
                '.veterans-stat',
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.veterans-stats-grid', start: 'top 85%' },
                }
            );
            gsap.fromTo(
                '.veterans-brand',
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
                    scrollTrigger: { trigger: '.veterans-brands', start: 'top 90%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="gaming-veterans"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
            <div className="absolute inset-0 dot-grid opacity-5" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section tag */}
                <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-8 block">
                    [BUILT_BY_OPERATORS] GAMING_VETERANS
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Copy */}
                    <div className="veterans-left">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Built by <span className="text-[#00f0ff]">Gaming Veterans.</span>
                            <br />
                            <span className="text-gray-400">Not Consultants.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                            FalconDive wasn't built by outsiders looking in. It was forged by operators
                            who spent decades inside the world's largest iGaming companies — building
                            the platforms, running the P&L, and solving the problems that FalconDive
                            now automates.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 bg-[#00e5ff]/10 border border-[#00e5ff]/30 px-3 py-1.5 rounded">
                            <span className="font-mono text-xs text-[#00f0ff] tracking-wider">[OPERATOR_DNA] VERIFIED</span>
                        </div>
                    </div>

                    {/* Right — Stats Grid */}
                    <div className="veterans-stats-grid grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`veterans-stat p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-xl hover:border-[#00e5ff]/30 transition-all duration-300 ${i === 4 ? 'col-span-2' : ''}`}
                            >
                                <div className="font-display text-3xl md:text-4xl font-bold text-[#00f0ff] mb-2">
                                    {stat.value}
                                </div>
                                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Brands */}
                <div className="veterans-brands mt-16 pt-8 border-t border-gray-800/50">
                    <p className="text-center font-mono text-xs text-gray-600 mb-6 tracking-wider">
                        OUR TEAM HAS BUILT AND SCALED AT
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        {pastBrands.map((brand) => (
                            <div
                                key={brand.name}
                                className="veterans-brand rounded-lg overflow-hidden"
                                style={{ height: '48px' }}
                            >
                                {brand.logo ? (
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        style={{
                                            height: '100%',
                                            width: 'auto',
                                            objectFit: 'contain',
                                            background: 'white',
                                            borderRadius: '8px',
                                            padding: '6px 16px',
                                        }}
                                    />
                                ) : (
                                    <div className="h-full px-5 flex items-center bg-[#0f1724]/60 border border-gray-800/50 rounded-lg">
                                        <span className="font-mono text-sm text-gray-500 tracking-wider">
                                            {brand.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GamingVeterans;


