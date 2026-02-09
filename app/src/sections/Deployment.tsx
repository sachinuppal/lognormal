import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, CheckCircle, Lock, Shield, Server, ArrowRight, Database, HardDrive, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Deployment = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set visible first
      gsap.set('.cloud-card', { opacity: 1, y: 0 });
      gsap.set('.onprem-banner', { opacity: 1, y: 0 });
      gsap.set('.compliance-badge', { opacity: 1, y: 0 });

      // Cards animation with stagger
      gsap.fromTo('.cloud-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.cloud-cards-grid', start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      // On-prem banner animation
      gsap.fromTo('.onprem-banner',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.onprem-banner', start: 'top 90%' },
        }
      );

      // Compliance badges animation
      gsap.fromTo('.compliance-badge',
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: '.compliance-badges', start: 'top 90%' },
        }
      );

      // Status dots pulse
      gsap.to('.status-dot', {
        opacity: 0.4,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cloudProviders = [
    {
      name: 'AWS',
      badge: 'POPULAR',
      latency: '<50ms',
      status: 'OPERATIONAL',
      tag: 'REGION_GLOBAL',
      color: '#ffb800',
      icon: Cloud,
    },
    {
      name: 'Azure',
      badge: null,
      latency: '<45ms',
      status: 'OPERATIONAL',
      tag: 'ENTERPRISE_READY',
      color: '#00f0ff',
      icon: Cloud,
    },
    {
      name: 'GCP',
      badge: null,
      latency: '<55ms',
      status: 'OPERATIONAL',
      tag: 'AI_OPTIMIZED',
      color: '#ef4444',
      icon: Cloud,
    },
    {
      name: 'On-Prem',
      badge: 'SECURE',
      latency: '<5ms',
      status: 'AIR_GAPPED',
      tag: 'PRIVATE_CLOUD',
      color: '#10b981',
      icon: HardDrive,
    },
  ];

  const complianceBadges = [
    { label: 'ISO 27001', icon: Shield },
    { label: 'ISO 9001', icon: CheckCircle },
    { label: 'GDPR', icon: Lock },
    { label: 'E2E Encryption', icon: Lock },
    { label: 'SOC 2', icon: CheckCircle },
  ];

  return (
    <section
      ref={sectionRef}
      id="deployment"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/15 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite' }}
        />
        <div
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f0ff]/15 to-transparent"
          style={{ animation: 'scan-line 8s linear infinite', animationDelay: '4s' }}
        />
      </div>

      <style>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-mono text-sm text-[#00f0ff] tracking-widest">
            [INTEGRATION] SEAMLESS_STACK
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Seamless Integration
            <br />
            <span className="text-[#00f0ff]">With Your Existing Stack</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            FalconDive layers on top of your existing BI platform. No rip-and-replace.
            Just add the AI-driven action layer your current tools lack.
          </p>
        </div>

        {/* B2B Message */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Layers className="w-5 h-5 text-[#00f0ff]" />
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <span className="text-[#00f0ff] font-bold">Already have BI?</span> Perfect.
                FalconDive adds the AI-driven decision intelligence layer that turns
                passive analytics into active value realization.
              </p>
            </div>
          </div>
        </div>

        {/* Cloud Provider Cards */}
        <div className="cloud-cards-grid grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cloudProviders.map((provider, index) => (
            <div
              key={index}
              className="cloud-card group relative bg-[#1a1a24] border border-gray-800 hover:border-opacity-50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 rounded-xl overflow-hidden"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${provider.color}, transparent 70%)`
                }}
              />

              {/* Badge */}
              {provider.badge && (
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-black text-[9px] font-bold px-2 py-0.5 rounded-b z-10"
                  style={{ backgroundColor: provider.color }}
                >
                  {provider.badge}
                </div>
              )}

              <div className="relative p-4 pt-5">
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <provider.icon
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    style={{ color: provider.color }}
                  />
                </div>

                {/* Provider Name */}
                <div className="text-center mb-3">
                  <span className="font-display text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {provider.name}
                  </span>
                </div>

                {/* Stats */}
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Latency:</span>
                    <span className="text-white">{provider.latency}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Status:</span>
                    <div className="flex items-center gap-1">
                      <span
                        className="status-dot w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: provider.color }}
                      />
                      <span
                        className="font-bold"
                        style={{ color: provider.color }}
                      >
                        {provider.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tag */}
                <div className="mt-3 pt-2 border-t border-gray-800">
                  <div
                    className="font-mono text-[9px] flex items-center justify-center gap-1"
                    style={{ color: provider.color }}
                  >
                    <ArrowRight className="w-3 h-3" />
                    {provider.tag}
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div
                className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ borderColor: provider.color }}
              />
            </div>
          ))}
        </div>

        {/* On-Prem Highlight Banner */}
        <div className="onprem-banner mt-6 max-w-xl mx-auto">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white mb-1">
                On-Prem Installations in Your Private Cloud
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Data Never Leaves Your Systems. Deploy FalconDive entirely within your own
                infrastructure with complete air-gapped security.
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {['Zero Data Exposure', 'Full Control', 'Custom Compliance'].map((tag, i) => (
                  <span key={i} className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Connection Visualization */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <svg
              className="w-full h-16"
              viewBox="0 0 400 70"
              fill="none"
            >
              {/* Connection Lines */}
              <path
                d="M40 35 L120 20 L200 35 L280 20 L360 35"
                stroke="rgba(0, 240, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M40 35 L120 50 L200 35 L280 50 L360 35"
                stroke="rgba(0, 240, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              {/* Center Node */}
              <circle cx="200" cy="35" r="8" fill="#00f0ff" className="animate-pulse" />
              <circle
                cx="200"
                cy="35"
                r="12"
                stroke="#00f0ff"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
              />
              {/* Satellite Nodes */}
              <circle cx="40" cy="35" r="6" fill="#ffb800" />
              <circle cx="120" cy="35" r="6" fill="#00f0ff" />
              <circle cx="280" cy="35" r="6" fill="#ef4444" />
              <circle cx="360" cy="35" r="6" fill="#10b981" />
            </svg>

            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
              <div className="bg-black/90 border border-[#00f0ff]/40 px-3 py-1.5 rounded-lg">
                <span className="font-mono text-[10px] text-[#00f0ff] tracking-wider">
                  FALCONDIVE_CORE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-8">
          <div className="text-center mb-3">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest">
              COMPLIANCE & SECURITY
            </span>
          </div>
          <div className="compliance-badges flex flex-wrap justify-center gap-2">
            {complianceBadges.map((badge, index) => (
              <div
                key={index}
                className="compliance-badge flex items-center gap-1.5 bg-[#1a1a24] border border-gray-700 hover:border-[#00f0ff]/40 px-2.5 py-1.5 rounded-lg transition-all duration-300"
              >
                <badge.icon className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span className="font-mono text-[10px] text-gray-300 whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Benefits */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-2xl mx-auto">
          {[
            { icon: Layers, text: 'Layer on existing BI' },
            { icon: Lock, text: 'Meet compliance requirements' },
            { icon: Server, text: 'Stay in control of data' },
            { icon: Database, text: 'On-prem options available' },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-gray-400 bg-[#1a1a24]/50 border border-gray-800 px-3 py-2 rounded-lg"
            >
              <benefit.icon className="w-3.5 h-3.5 text-[#00f0ff] flex-shrink-0" />
              <span className="text-[10px]">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deployment;
