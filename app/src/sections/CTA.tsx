import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Shield, CheckCircle, Calendar } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.set(contentRef.current, { opacity: 1, y: 0 });
      }
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustBadges = [
    { label: '€45M+ Recovered', icon: TrendingUp },
    { label: 'ISO 27001', icon: Shield },
    { label: 'GDPR Compliant', icon: CheckCircle },
  ];

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f1117] to-[#0a0a0f]" />

      {/* Falcon Eye Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px] animate-pulse" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/falcon-strike.jpg"
          alt="Falcon strike"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Section Badge */}
        <span className="font-mono text-sm text-[#00f0ff] tracking-widest mb-4 block">
          [VALUE REALIZATION] START TODAY
        </span>

        {/* Main Title */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Start <span className="text-[#00f0ff] glow-laser">Recovering Revenue</span>
          <br />
          Today
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join CXOs and Revenue Leaders who have recovered millions in leaked value
          through AI-driven detection, diagnostics, and action.
        </p>

        {/* Value Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { value: '€45M+', label: 'Revenue Recovered' },
            { value: '18%', label: 'Avg. Margin Uplift' },
            { value: '2,400+', label: 'Leakages Closed' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl font-bold text-[#00f0ff]">{stat.value}</div>
              <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal Input */}
        <div className="terminal max-w-xl mx-auto p-1 mb-8 rounded-lg">
          <div className="flex items-center bg-black/50 rounded p-4">
            <span className="text-[#00f0ff] font-mono mr-3">➜</span>
            <span className="text-gray-500 font-mono mr-2 hidden sm:inline">
              root@falcondive:~$
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER_EMAIL_FOR_VALUE_ASSESSMENT"
              className="bg-transparent border-none outline-none text-white font-mono flex-1 placeholder-gray-700 focus:placeholder-gray-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg overflow-hidden hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span className="relative z-10 flex items-center gap-2">
              BOOK DEMO
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 border border-gray-700 hover:border-[#00f0ff] font-mono text-xs transition-colors rounded-lg text-gray-400 hover:text-white flex items-center justify-center gap-2"
          >
            SEE HOW WE RECOVER REVENUE
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-600 font-mono text-xs"
            >
              <badge.icon className="w-4 h-4 text-[#00f0ff]" />
              {badge.label}
            </div>
          ))}
        </div>

        {/* Demo Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Leakage Detection', desc: 'See where value is leaking' },
            { label: 'Root Cause Analysis', desc: 'Understand why it happens' },
            { label: 'Action Planning', desc: 'Get closure recommendations' },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 bg-[#1a1a24]/50 border border-gray-800 rounded-lg"
            >
              <div className="font-mono text-sm text-[#00f0ff] mb-1">
                {feature.label}
              </div>
              <div className="text-xs text-gray-500">{feature.desc}</div>
            </div>
          ))}
        </div>

        {/* No Commitment Note */}
        <p className="mt-8 text-gray-600 font-mono text-xs">
          No commitment required • Value assessment within 24 hours
        </p>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefillEmail={email}
      />
    </section>
  );
};

export default CTA;
