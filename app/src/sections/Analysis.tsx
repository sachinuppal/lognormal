import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Brain, Wrench, FileSpreadsheet, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Analysis = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set visible first
      gsap.set('.problem-item', { opacity: 1, x: 0 });
      gsap.set('.analysis-image', { opacity: 1, x: 0 });
      gsap.set('.pattern-box', { opacity: 1, y: 0 });

      // Problem items animation
      gsap.fromTo('.problem-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.problems-list', start: 'top 85%', toggleActions: 'play none none none' },
        }
      );

      // Image animation
      gsap.fromTo('.analysis-image',
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.analysis-image', start: 'top 85%' },
        }
      );

      // Pattern box animation
      gsap.fromTo('.pattern-box',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.pattern-box', start: 'top 90%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: Database,
      title: 'Traditional BI',
      description: 'Shows what happened—no diagnosis of why',
      color: 'text-gray-400',
      bgColor: 'bg-gray-800/50',
    },
    {
      icon: Brain,
      title: 'Generic AI Tools',
      description: "Can't explore root causes in context",
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Wrench,
      title: 'Custom Builds',
      description: 'Months to deploy, slow to diagnose',
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: FileSpreadsheet,
      title: 'Manual Analysis',
      description: 'Your team chasing symptoms, not causes',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="analysis"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="font-mono text-sm text-[#00f0ff] tracking-widest">
              [DIAGNOSTICS] ROOT_CAUSE_ANALYSIS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8">
              Diagnose & Solve:
              <br />
              <span className="text-[#ff4444]">Find the Why</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Detection tells you <em>what</em> is leaking. Diagnostics tells you <em>why</em>.
              Converse AI conducts multi-perspective root cause analysis through natural language conversations.
            </p>

            {/* Problem Cards */}
            <div className="problems-list space-y-3">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="problem-item group flex items-center gap-4 bg-[#1a1a24]/80 border border-gray-800 p-4 rounded-xl hover:border-gray-700 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${problem.bgColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <problem.icon className={`w-5 h-5 ${problem.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-bold text-white text-sm">
                      {problem.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500">
                      {problem.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Root Cause Terminal */}
            <div className="pattern-box mt-6 bg-[#1a1a24]/80 border border-[#00f0ff]/30 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-[#00f0ff]" />
                <span className="font-mono text-xs text-[#00f0ff]">
                  ROOT CAUSE IDENTIFIED
                </span>
              </div>
              <p className="font-mono text-base text-white font-bold">
                Detection-to-Diagnosis Gap
              </p>
              <p className="font-mono text-xs text-gray-500 mt-2">
                Problem: Teams see leakages but can't determine root causes fast enough
              </p>
            </div>
          </div>

          {/* Right Content - Falcon Analysis Image */}
          <div className="analysis-image relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="/images/falcon-analysis.jpg"
                alt="Falcon analyzing data"
                className="w-full h-auto"
              />
              {/* Data Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

              {/* Floating Stats */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-[#00f0ff]/30 px-3 py-2 rounded-lg">
                <div className="text-[#00f0ff] font-mono text-xs">DIAGNOSIS: COMPLETE</div>
                <div className="text-gray-400 font-mono text-[10px]">ROOT CAUSE: IDENTIFIED</div>
              </div>

              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-[#ffb800]/30 px-3 py-2 rounded-lg">
                <div className="text-[#ffb800] font-mono text-xs">PERSPECTIVES: 5</div>
                <div className="text-gray-400 font-mono text-[10px]">CONFIDENCE: 98%</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm border border-gray-700 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-gray-500">
                      CONVERSE_AI_PROCESSING
                    </span>
                    <span className="font-mono text-xs text-[#00f0ff]">
                      LLM ACTIVE
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded overflow-hidden">
                    <div className="h-full bg-[#00f0ff] w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border border-[#00f0ff]/20 rounded-full" />
            <div className="absolute -bottom-3 -left-3 w-14 h-14 border border-[#00f0ff]/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
