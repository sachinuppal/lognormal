import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield, Brain, Zap, LineChart, Layers,
  Bell, MessageSquare, Database, BarChart3, FileText
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Platform = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set visible defaults
      gsap.set('.platform-header', { opacity: 1, y: 0 });
      gsap.set('.omnis-orchestration', { opacity: 1, y: 0 });
      gsap.set('.stage-card', { opacity: 1, y: 0 });

      // Section header animation
      gsap.fromTo('.platform-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      // Omnis orchestration animation
      gsap.fromTo('.omnis-orchestration',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.omnis-orchestration', start: 'top 85%' },
        }
      );

      // Stage cards animation
      gsap.fromTo('.stage-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.stages-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const valueStages = [
    {
      num: '01',
      title: 'Detection & Guardrails',
      desc: 'AI-driven anomaly identification across revenue streams, margins, and KPIs. Early warning system that catches leakages before they compound.',
      icon: Shield,
      products: [
        { name: 'Pulse AI', icon: Bell, desc: 'Real-time alerts, threshold guardrails, deviation signals' },
      ],
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      accentColor: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
    {
      num: '02',
      title: 'Root Cause Diagnostics',
      desc: 'LLM-powered diagnostic conversations that drill into why leakages occur. Multi-perspective analysis to uncover where value is trapped.',
      icon: Brain,
      products: [
        { name: 'Converse AI', icon: MessageSquare, desc: 'Intelligence layer for multi-angle root cause exploration' },
      ],
      color: 'from-amber-500/20 to-yellow-500/20',
      borderColor: 'border-amber-500/30',
      accentColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      num: '03',
      title: 'Action & Resolution',
      desc: 'Convert findings into corrective actions with defined ownership and timelines. Segment isolation and targeted interventions.',
      icon: Zap,
      products: [
        { name: 'Problem Solver', icon: Database, desc: 'Action plans and closure tracking' },
        { name: 'Data Cube', icon: BarChart3, desc: 'Segment isolation and targeting' },
      ],
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      accentColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      num: '04',
      title: 'Visibility & Monitoring',
      desc: 'Continuous tracking of value realized with feedback loops for optimization. Outcome verification and trend monitoring.',
      icon: LineChart,
      products: [
        { name: 'Narratives', icon: FileText, desc: 'Auto-generated outcome narratives' },
        { name: 'Value Reports', icon: LineChart, desc: 'Continuous value tracking & verification' },
      ],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      accentColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="platform-header text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
            [PLATFORM] VALUE_REALIZATION_ENGINE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Complete <span className="text-[#00f0ff]">Value Realization</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Six capabilities. One unified platform. Orchestrated by Omnis to deliver
            measurable business outcomes across the entire value chain.
          </p>
        </div>

        {/* Omnis Orchestration Layer */}
        <div className="omnis-orchestration mb-12">
          <div className="bg-gradient-to-r from-[#00f0ff]/10 via-[#00f0ff]/5 to-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-[#00f0ff]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-8 h-8 text-[#00f0ff]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-[#00f0ff] mb-2">
                  Omnis — The Orchestration Layer
                </h3>
                <p className="text-gray-400 text-sm">
                  Omnis is FalconDive. It connects all four stages of value realization,
                  providing a single pane of glass for detection, diagnostics, action, and monitoring.
                  The fabric that ties your entire value journey together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Stages Grid */}
        <div className="stages-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
          {valueStages.map((stage, i) => (
            <div
              key={i}
              className={`stage-card bg-gradient-to-br ${stage.color} border ${stage.borderColor} rounded-2xl overflow-hidden`}
            >
              {/* Stage Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${stage.bgColor} rounded-xl flex items-center justify-center`}>
                    <stage.icon className={`w-6 h-6 ${stage.accentColor}`} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 block">
                      STAGE {stage.num}
                    </span>
                    <h3 className="font-display font-bold text-lg">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {/* Products */}
              <div className="p-6 space-y-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  Capabilities
                </span>
                {stage.products.map((product, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 bg-[#0a0a0f]/50 rounded-xl p-4 hover:bg-[#0a0a0f]/70 transition-colors"
                  >
                    <div className={`w-10 h-10 ${stage.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <product.icon className={`w-5 h-5 ${stage.accentColor}`} />
                    </div>
                    <div>
                      <h4 className={`font-display font-bold text-sm ${stage.accentColor}`}>
                        {product.name}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        {product.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Modes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 hover:border-[#00f0ff]/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <h4 className="font-display font-bold">Managed Value Recovery</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Our team operates the platform for you. AI agents work 24/7 to detect issues,
              surface recommendations, and deliver executive-ready intelligence.
            </p>
          </div>

          <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="font-display font-bold">Self-Serve Decision Intelligence</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Your team directly interacts with data through intuitive tools. Ask questions,
              build segments, set alerts, and generate outcome reports.
            </p>
          </div>
        </div>

        {/* AI-First Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1a1a24] border border-gray-800 rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
            <span className="font-mono text-xs text-gray-400">
              AI/ML-powered • LLM-driven • Continuous learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
