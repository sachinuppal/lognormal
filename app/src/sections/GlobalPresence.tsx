import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Globe, ExternalLink, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        name: 'AI in Gaming Investment Seminar',
        city: 'Bangkok',
        country: 'Thailand',
        date: 'Nov 25, 2025',
        participation: 'Attending',
        link: 'https://winnamedia.com/ai-in-gaming-investment-seminar/',
        logo: '/images/event-logos/winna-media.svg',
        color: 'from-emerald-500/20 to-teal-500/20',
        borderColor: 'hover:border-emerald-500/40',
    },
    {
        name: 'SiGMA South Asia',
        city: 'Colombo',
        country: 'Sri Lanka',
        date: 'Nov 30 – Dec 2, 2025',
        participation: 'Speaking',
        link: 'https://sigma.world/summits/south-asia/',
        logo: '/images/event-logos/sigma-south-asia.png',
        color: 'from-purple-500/20 to-indigo-500/20',
        borderColor: 'hover:border-purple-500/40',
    },
    {
        name: 'SiGMA Dubai',
        city: 'Dubai',
        country: 'UAE',
        date: 'Feb 10 – 12, 2026',
        participation: 'Attending',
        sponsors: 'https://sigma.world/summits/eurasia/sponsors-and-exhibitors/',
        link: 'https://sigma.world/summits/eurasia/',
        logo: '/images/event-logos/sigma-dubai.png',
        color: 'from-amber-500/20 to-orange-500/20',
        borderColor: 'hover:border-amber-500/40',
    },
    {
        name: 'NEXT.io New York',
        city: 'New York',
        country: 'USA',
        date: 'Mar 10 – 11, 2026',
        participation: 'Attending',
        sponsors: 'soft2bet',
        link: 'https://next.io/summits/newyork/',
        logo: '/images/event-logos/next-io-nyc.png',
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'hover:border-blue-500/40',
    },
];

const GlobalPresence = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.presence-heading',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                }
            );
            gsap.fromTo(
                '.presence-card',
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.presence-grid', start: 'top 80%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="global-presence"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="presence-heading text-center mb-16">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                        [REAL_WORLD_PROOF] GLOBAL_PRESENCE
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Speaking &amp; <span className="text-[#00f0ff]">Attending Globally</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4 text-[#00f0ff]" />
                        Present at leading industry events across Asia, Middle East, and North America.
                    </p>
                </div>

                {/* Event Cards Grid */}
                <div className="presence-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {events.map((event, i) => (
                        <a
                            key={i}
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`presence-card group relative overflow-hidden rounded-2xl border border-[#00e5ff]/10 ${event.borderColor} transition-all duration-300 block`}
                        >
                            {/* Content area with gradient */}
                            <div className={`relative h-72 bg-gradient-to-br ${event.color} flex flex-col`}>
                                <div className="absolute inset-0 bg-[#0a0e17]/75" />

                                {/* Participation badge */}
                                <div className="relative z-10 flex justify-between items-start p-5">
                                    <span className={`font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border ${event.participation === 'Speaking'
                                            ? 'bg-[#00e5ff]/20 border-[#00e5ff]/40 text-[#00f0ff]'
                                            : 'bg-gray-800/50 border-gray-700/50 text-gray-400'
                                        }`}>
                                        {event.participation.toUpperCase()}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#00f0ff] transition-colors" />
                                </div>

                                {/* Logo area */}
                                <div className="relative z-10 flex-1 flex items-center justify-center px-8">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:bg-white/15 transition-all">
                                        <img
                                            src={event.logo}
                                            alt={event.name}
                                            className="h-12 md:h-14 max-w-[200px] object-contain"
                                            style={{ filter: 'brightness(1.1)' }}
                                        />
                                    </div>
                                </div>

                                {/* Bottom gradient overlay for text */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e17] to-transparent" />

                                {/* Location info */}
                                <div className="relative z-10 p-5 pt-0">
                                    <p className="text-white font-display text-lg font-bold mb-1.5 group-hover:text-[#00f0ff] transition-colors">
                                        {event.name}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                                            <span className="text-sm text-[#00f0ff]">{event.city}, {event.country}</span>
                                        </div>
                                        <span className="text-gray-700">•</span>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-gray-500" />
                                            <span className="font-mono text-[11px] text-gray-400">
                                                {event.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;

