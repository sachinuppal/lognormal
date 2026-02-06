import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Zap, LineChart, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ValueFlow = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.valueflow-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Pipeline steps animation
      gsap.from('.flow-step', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.flow-pipeline',
          start: 'top 80%',
        },
      });

      // Connector lines animation
      gsap.from('.flow-connector', {
        scaleX: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.flow-pipeline',
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const flowSteps = [
    {
      num: '01',
      title: 'Detection & Guardrails',
      desc: 'AI-driven anomaly identification across revenue streams, margins, and KPIs. Early warning system that catches leakages before they compound.',
      icon: Shield,
      products: 'Pulse AI',
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      iconColor: 'text-red-400',
    },
    {
      num: '02',
      title: 'Root Cause Diagnostics',
      desc: 'LLM-powered diagnostic conversations that drill into why leakages occur. Multi-perspective analysis to uncover where value is trapped.',
      icon: Brain,
      products: 'Converse AI',
      color: 'from-amber-500/20 to-yellow-500/20',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
    {
      num: '03',
      title: 'Action & Resolution',
      desc: 'Convert findings into corrective actions with defined ownership and timelines. Segment isolation and targeted interventions.',
      icon: Zap,
      products: 'Problem Solver + Data Cube',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      iconColor: 'text-green-400',
    },
    {
      num: '04',
      title: 'Visibility & Monitoring',
      desc: 'Continuous tracking of value realized with feedback loops for optimization. Outcome verification and trend monitoring.',
      icon: LineChart,
      products: 'Narratives + Reports',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="valueflow-title text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
            [VALUE REALIZATION FLOW]
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From <span className="text-[#ff4444]">Leakage</span> to{' '}
            <span className="text-[#00f0ff]">Value</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            FalconDive operates one level above passive intelligence. Our 4-stage 
            pipeline converts signals into measurable business outcomes.
          </p>
        </div>

        {/* Flow Pipeline */}
        <div className="flow-pipeline relative">
          {/* Desktop Pipeline - Horizontal */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-4">
            {flowSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < flowSteps.length - 1 && (
                  <div className="flow-connector absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#00f0ff]/30 to-[#00f0ff]/10 z-0" />
                )}

                {/* Step Card */}
                <div className={`flow-step relative z-10 bg-gradient-to-br ${step.color} border ${step.borderColor} rounded-2xl p-6 h-full hover:scale-105 transition-transform`}>
                  {/* Step Number */}
                  <div className="font-mono text-xs text-gray-500 mb-4">
                    STAGE {step.num}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.borderColor} border rounded-xl flex items-center justify-center mb-4 bg-[#0a0a0f]/50`}>
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Products */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Powered by
                    </span>
                    <div className={`font-mono text-xs ${step.iconColor} mt-1`}>
                      {step.products}
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile/tablet */}
                {i < flowSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-[#00f0ff]/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Pipeline - Vertical */}
          <div className="lg:hidden space-y-0">
            {flowSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector Line */}
                {i < flowSteps.length - 1 && (
                  <div className="flow-connector absolute left-8 top-[100%] w-0.5 h-8 bg-gradient-to-b from-[#00f0ff]/30 to-[#00f0ff]/10 z-0" />
                )}

                {/* Step Card */}
                <div className={`flow-step relative z-10 bg-gradient-to-br ${step.color} border ${step.borderColor} rounded-2xl p-5 flex gap-4`}>
                  {/* Left - Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 ${step.borderColor} border rounded-lg flex items-center justify-center mb-2 bg-[#0a0a0f]/50`}>
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                    <div className="font-mono text-[10px] text-gray-500 text-center">
                      {step.num}
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                      {step.desc}
                    </p>
                    <div className={`font-mono text-[10px] ${step.iconColor}`}>
                      {step.products}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline Label */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-[#1a1a24] border border-gray-800 rounded-full px-6 py-3">
              <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
              <span className="font-mono text-xs text-gray-400">
                Omnis orchestrates the entire value realization journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueFlow;
