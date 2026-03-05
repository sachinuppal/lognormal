import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: 'Mayank Pachauri',
        title: 'Founder & CEO',
        background: [
            'Ex-PartyGaming',
            'Ex-Bwin.Party',
            '15+ years iGaming',
            'Built analytics for billion-dollar platforms',
        ],
        linkedIn: 'https://www.linkedin.com/in/mayank-pachauri-abb8717/',
        image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/1-Mayank.png',
    },
    {
        name: 'Navneeth Srinivas',
        title: 'Sr. Vice President',
        background: [
            'Ex-Ivy Comptech',
            'Ex-Games24x7',
            'Ex-Bunga 365',
            'Ex-PokerHigh',
        ],
        linkedIn: 'https://www.linkedin.com/in/navneethsrinivas/',
        image: 'https://www.falcondive.io/images/navneeth-srinivas.jpg',
    },
    {
        name: 'Vamsi Chandra',
        title: 'SVP, Product',
        background: [
            'Ex-PartyGaming',
            'Ex-Bwin.Party',
            'Ex-GVC',
            'Product leadership across major platforms',
        ],
        linkedIn: 'https://www.linkedin.com/in/vamsi-chandra/',
        image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/3-Vamsi.png',
    },
    {
        name: 'Srinivas Rao',
        title: 'VP, Client Services',
        background: [
            'Ex-Entain',
            'Enterprise relationships',
            'Client success at scale',
            'Revenue growth partnerships',
        ],
        linkedIn: 'https://www.linkedin.com/in/athotasrini/',
        image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/5-Srini.png',
    },
];

const TeamCredibility = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.team-heading',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
                }
            );
            gsap.fromTo(
                '.team-card',
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.team-grid', start: 'top 80%' },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="team-credibility"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
            <div className="absolute inset-0 dot-grid opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="team-heading text-center mb-16">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
                        [LEADERSHIP] COMMAND_TEAM
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        The <span className="text-[#00f0ff]">Command Team</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        Industry legends who've built billion-dollar platforms and transformed data into profits.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => {
                        const hasLinkedIn = member.linkedIn && member.linkedIn.trim() !== '';
                        const Wrapper = hasLinkedIn ? 'a' : 'div';
                        const wrapperProps = hasLinkedIn
                            ? { href: member.linkedIn, target: '_blank' as const, rel: 'noopener noreferrer' }
                            : {};

                        return (
                            <Wrapper
                                key={i}
                                {...wrapperProps}
                                className={`team-card group p-6 bg-[#0f1724]/80 border border-[#00e5ff]/10 rounded-2xl backdrop-blur-sm hover:border-[#00e5ff]/30 transition-all duration-300 text-center block ${hasLinkedIn ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                {/* Profile badge */}
                                <div className="font-mono text-[10px] text-gray-700 mb-4">
                                    [PROFILE] TEAM_MEMBER_{String(i + 1).padStart(2, '0')}
                                </div>

                                {/* Photo */}
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-[#00e5ff]/30 overflow-hidden group-hover:border-[#00e5ff]/60 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Name & Title */}
                                <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">{member.name}</h3>
                                <p className="font-mono text-xs text-[#00f0ff] mb-4">{member.title}</p>

                                {/* Background points */}
                                <div className="space-y-2 text-left mb-4">
                                    {member.background.map((point, pi) => (
                                        <div key={pi} className="flex items-center gap-2">
                                            <span className="text-[#00f0ff] text-xs">▸</span>
                                            <span className="text-gray-400 text-xs">{point}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* LinkedIn */}
                                {hasLinkedIn && (
                                    <div className="inline-flex items-center gap-1.5 text-gray-600 group-hover:text-[#00f0ff] transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                        <span className="font-mono text-[10px]">LinkedIn</span>
                                    </div>
                                )}
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamCredibility;
