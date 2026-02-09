import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Layers,
  Shield,
  Brain,
  Zap,
  Database,
  FileText,
  Bell,
  Target,
  LineChart,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (!cards) return;

      // Set initial state
      gsap.set(cards, { opacity: 1, y: 0 });

      // Cards stagger animation on scroll
      gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Tools organized by value flow stage
  const tools = [
    {
      number: '01',
      stage: 'DETECTION',
      name: 'Pulse AI',
      tagline: 'Leakage Detection & Guardrails',
      description:
        'Real-time alerts and threshold guardrails that catch revenue leakages before they compound. Your early warning system.',
      features: [
        'Anomaly detection across KPIs',
        'Threshold breach alerts',
        'Deviation signal monitoring',
      ],
      icon: Bell,
      color: '#ef4444',
      borderColor: 'hover:border-red-500/50',
      bgGradient: 'from-red-500/10 to-orange-500/10',
    },
    {
      number: '02',
      stage: 'DIAGNOSTICS',
      name: 'Converse AI',
      tagline: 'Root Cause Intelligence',
      description:
        'LLM-powered diagnostic conversations that drill into why leakages occur. Multi-perspective analysis to uncover where value is trapped.',
      features: [
        'Natural language queries',
        'Multi-angle root cause exploration',
        'Contextual follow-ups',
      ],
      icon: Brain,
      color: '#a855f7',
      borderColor: 'hover:border-purple-500/50',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      number: '03',
      stage: 'ACTION',
      name: 'Problem Solver',
      tagline: 'Action Plans & Closure',
      description:
        'Convert diagnostic findings into corrective actions with defined ownership and timelines. Drive closure, not just awareness.',
      features: [
        'Action plan generation',
        'Ownership assignment',
        'Closure tracking',
      ],
      icon: Target,
      color: '#22c55e',
      borderColor: 'hover:border-green-500/50',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      number: '04',
      stage: 'ACTION',
      name: 'Data Cube',
      tagline: 'Segmentation & Targeting',
      description:
        'Isolate and target specific customer segments for interventions. Visual segment builder with experiment tracking.',
      features: [
        'Visual segment builder',
        'Cohort analysis',
        'Experiment tracking',
      ],
      icon: Database,
      color: '#f59e0b',
      borderColor: 'hover:border-amber-500/50',
      bgGradient: 'from-amber-500/10 to-yellow-500/10',
    },
    {
      number: '05',
      stage: 'MONITORING',
      name: 'Narratives',
      tagline: 'Outcome Narratives',
      description:
        'Auto-generated outcome narratives that track whether corrective actions delivered expected value. Not just reports—verification.',
      features: [
        'Auto-generated summaries',
        'Trend analysis',
        'Value verification',
      ],
      icon: FileText,
      color: '#3b82f6',
      borderColor: 'hover:border-blue-500/50',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      number: '06',
      stage: 'MONITORING',
      name: 'Value Reports',
      tagline: 'Continuous Value Tracking',
      description:
        'Outcome tracking and continuous monitoring with feedback loops for optimization. See the value you have realized.',
      features: [
        'Value realized metrics',
        'Continuous tracking',
        'Feedback loops',
      ],
      icon: LineChart,
      color: '#10b981',
      borderColor: 'hover:border-emerald-500/50',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-black to-[#0a0a0f]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-sm text-[#00f0ff] tracking-widest">
            [CAPABILITIES] VALUE_REALIZATION_TOOLS
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Six Capabilities.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-purple-500">
              One Value Engine.
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Each tool powers a stage in the value realization journey. Together,
            they convert detection into measurable outcomes.
          </p>
        </div>

        {/* Omnis Orchestration Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#00f0ff]/10 via-[#00f0ff]/5 to-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 bg-[#00f0ff]/10 rounded-xl flex items-center justify-center">
              <Layers className="w-7 h-7 text-[#00f0ff]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold text-[#00f0ff]">
                Omnis — The Orchestration Layer
              </h3>
              <p className="text-gray-400 text-sm">
                Omnis connects all six capabilities, providing a single pane of glass
                for the entire value realization journey. This is FalconDive.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${tool.bgGradient} border border-gray-800 ${tool.borderColor} p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]`}
            >
              {/* Stage Badge */}
              <div
                className="absolute top-4 right-4 font-mono text-[10px] px-2 py-1 rounded"
                style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
              >
                {tool.stage}
              </div>

              {/* Number Badge */}
              <div
                className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center text-lg font-bold font-mono"
                style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
              >
                {tool.number}
              </div>

              {/* Icon */}
              <div className="mb-4">
                <tool.icon
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  style={{ color: tool.color }}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-1 text-white">
                {tool.name}
              </h3>
              <p
                className="font-mono text-xs mb-3"
                style={{ color: tool.color }}
              >
                {tool.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {tool.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 text-xs font-mono text-gray-500">
                {tool.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: tool.color }}>▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Value Flow Reminder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-[#1a1a24] border border-gray-800 rounded-full px-6 py-3">
            <span className="flex items-center gap-2 text-xs font-mono text-red-400">
              <Shield className="w-4 h-4" /> Detect
            </span>
            <span className="text-gray-600">→</span>
            <span className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Brain className="w-4 h-4" /> Diagnose
            </span>
            <span className="text-gray-600">→</span>
            <span className="flex items-center gap-2 text-xs font-mono text-green-400">
              <Zap className="w-4 h-4" /> Act
            </span>
            <span className="text-gray-600">→</span>
            <span className="flex items-center gap-2 text-xs font-mono text-blue-400">
              <LineChart className="w-4 h-4" /> Monitor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
