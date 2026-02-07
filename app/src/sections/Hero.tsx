import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ChevronDown, TrendingUp, Shield, Zap, Target } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const tl = gsap.timeline();

      tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from('.hero-title-line', {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }, '-=0.3')
        .from('.hero-subtitle', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-terminal', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-cta', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')
        .from('.hero-stats', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3');

      // Parallax scroll effect for background
      gsap.to('.hero-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/images/falcon-observation.jpg"
          alt="Falcon at altitude"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-[#00f0ff] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-[15%] w-1 h-1 bg-[#00f0ff] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[60%] left-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-30" />
        <div className="absolute bottom-[30%] right-[25%] w-1 h-1 bg-[#00f0ff] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        {/* AI-First Badge */}
        <div className="hero-badge mb-6">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/80 border border-[#00f0ff]/30 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Zap size={12} className="text-[#00f0ff]" />
            AI-FIRST VALUE REALIZATION PLATFORM
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight leading-tight">
          <span className="hero-title-line block glitch" data-text="DETECT. DIAGNOSE. ACT.">
            DETECT. DIAGNOSE. ACT.
          </span>
          <span className="hero-title-line block text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500 mt-2">
            REALIZE VALUE.
          </span>
        </h1>

        {/* Subtitle - Value Proposition */}
        <p className="hero-subtitle text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          AI-powered platform that detects revenue leakages, diagnoses root causes,
          drives corrective actions, and continuously monitors outcomes.
        </p>

        {/* Terminal Container */}
        <div className="hero-terminal max-w-xl mx-auto p-5 mt-6 bg-[#0a0a0f]/80 border border-[#00f0ff]/30 backdrop-blur-sm rounded-xl">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#00f0ff]/20">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="font-mono text-[10px] text-gray-500 ml-2">
              falcondive_value.exe
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs font-mono">
            <span className="flex items-center gap-2 text-[#00f0ff]">
              <Shield size={12} />
              Detect & Guard
            </span>
            <span className="hidden sm:block text-gray-600">→</span>
            <span className="flex items-center gap-2 text-[#00f0ff]">
              <Target size={12} />
              Diagnose & Solve
            </span>
            <span className="hidden sm:block text-gray-600">→</span>
            <span className="flex items-center gap-2 text-[#00f0ff]">
              <TrendingUp size={12} />
              Act & Realize
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider overflow-hidden rounded-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Play size={16} />
            <span className="relative z-10">SEE HOW WE RECOVER REVENUE</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 border border-gray-700 hover:border-[#00f0ff] font-mono text-xs transition-colors rounded-lg text-gray-400 hover:text-white"
          >
            START YOUR VALUE ASSESSMENT
          </button>
        </div>

        {/* Stats Row - Value Focused KPIs */}
        <div className="hero-stats mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
          {[
            { value: '€45M+', unit: '', label: 'Revenue Recovered' },
            { value: '18', unit: '%', label: 'Avg. Margin Uplift' },
            { value: '2,400+', unit: '', label: 'Leakages Detected' },
            { value: '94', unit: '%', label: 'Actions Closed' },
            { value: '95', unit: '%', label: 'Time to Act Reduced' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-xl md:text-2xl font-bold text-white">
                {stat.value}
                <span className="text-[#00f0ff]">{stat.unit}</span>
              </div>
              <div className="font-mono text-[10px] text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-5 h-5 text-[#00f0ff]/50" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-[2]" />

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
