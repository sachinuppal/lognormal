import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mic } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        name: 'iGaming Conference',
        city: 'Copenhagen',
        country: 'Denmark',
        year: '2024',
        type: 'Speaking',
        continent: 'Europe',
    },
    {
        name: 'SBC Summit',
        city: 'Lisbon',
        country: 'Portugal',
        year: '2024',
        type: 'Speaking',
        continent: 'Europe',
    },
    {
        name: 'Gaming Industry Summit',
        city: 'Bangkok',
        country: 'Thailand',
        year: '2024',
        type: 'Panel',
        continent: 'Asia',
    },
    {
        name: 'Data & Analytics Forum',
        city: 'Sri Lanka',
        country: 'Sri Lanka',
        year: '2024',
        type: 'Speaking',
        continent: 'Asia',
    },
];

const MediaMentions = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.media-heading',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                }
            );
            gsap.fromTo(
                '.event-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.events-grid', start: 'top 85%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="media-mentions"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="media-heading text-center mb-16">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                        [FEATURED] SPEAKING_AND_MEDIA
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Featured & <span className="text-[#00f0ff]">Speaking At</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        Sharing insights and driving conversations at leading industry events worldwide.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, i) => (
                        <div
                            key={i}
                            className="event-card group relative overflow-hidden p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-2xl hover:border-[#00e5ff]/30 transition-all duration-300"
                        >
                            {/* Decorative glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00e5ff]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Type badge */}
                            <div className="flex items-center gap-1.5 mb-4">
                                <Mic className="w-3 h-3 text-[#00f0ff]" />
                                <span className="font-mono text-[10px] text-[#00f0ff] tracking-wider uppercase">
                                    {event.type}
                                </span>
                            </div>

                            {/* Event placeholder */}
                            <div className="w-full h-20 mb-4 bg-[#0a0e17]/50 border border-[#00e5ff]/5 rounded-lg flex items-center justify-center">
                                <span className="font-mono text-xs text-gray-700 tracking-wider">
                                    [EVENT_LOGO]
                                </span>
                            </div>

                            {/* Event name */}
                            <h3 className="font-display text-lg font-bold text-white mb-2">
                                {event.name}
                            </h3>

                            {/* Location */}
                            <div className="flex items-center gap-1.5 mb-1">
                                <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                                <span className="text-sm text-[#00f0ff]">{event.city}, {event.country}</span>
                            </div>

                            {/* Year */}
                            <span className="inline-block mt-2 font-mono text-[10px] bg-[#00e5ff]/10 border border-[#00e5ff]/20 px-2 py-0.5 rounded text-[#00f0ff]">
                                {event.year}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaMentions;
