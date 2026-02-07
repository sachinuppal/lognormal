import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Shield,
  Package,
  Building2,
  Check,
  Layers,
  Activity,
  Gamepad2,
  Crown,
  ShieldAlert,
  CreditCard,
  Filter,
  LifeBuoy,
  Fingerprint,
  Brain,
  Megaphone,
  BarChart3,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVertical, setActiveVertical] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set all elements visible first
      gsap.set('.persona-card', { opacity: 1, y: 0 });
      gsap.set('.b2b-section', { opacity: 1, y: 0 });
      gsap.set('.verticals-section', { opacity: 1, y: 0 });

      // Header animation
      gsap.from('.solutions-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solutions-header',
          start: 'top 85%',
        },
      });

      // Persona cards animation
      gsap.from('.persona-card', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.personas-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // B2B comparison animation
      gsap.from('.b2b-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.b2b-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Vertical tabs animation
      gsap.from('.verticals-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.verticals-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Persona-based solutions
  const personas = [
    {
      icon: TrendingUp,
      title: 'Revenue Leaders',
      focus: 'Margin Protection & Uplift',
      description: 'Detect revenue leakages across all channels. Protect margins with AI-driven guardrails and realize measurable uplift.',
      outcomes: ['€45M+ revenue recovered', '18% avg. margin uplift', '2,400+ leakages detected'],
      color: 'cyan',
    },
    {
      icon: Shield,
      title: 'Risk & Compliance',
      focus: 'Automated Guardrails',
      description: 'Early warning systems for anomalies, threshold breaches, and compliance deviations. Prevent issues before they escalate.',
      outcomes: ['Real-time anomaly detection', 'Automated threshold alerts', '94% actions closed'],
      color: 'red',
    },
    {
      icon: Package,
      title: 'Product Heads',
      focus: 'Product-Level Value Tracking',
      description: 'Track performance at the product level. Identify which offerings drive value and which need intervention.',
      outcomes: ['Product ROI visibility', 'Feature performance tracking', 'Lifecycle optimization'],
      color: 'purple',
    },
    {
      icon: Building2,
      title: 'Business Owners',
      focus: 'End-to-End Value Realization',
      description: 'Complete visibility across operations. From detection through resolution, track the entire value journey.',
      outcomes: ['Unified value dashboard', 'Cross-vertical insights', 'Outcome verification'],
      color: 'amber',
    },
  ];

  // Industry verticals
  const verticals = [
    {
      name: 'Sportsbook Margin',
      icon: Activity,
      traditional: 'Strategic margin planning, odds benchmarking, market design.',
      accelerated: 'Real-time alerting for negative margins, sharp bettor detection, pricing errors.',
      value_creation: 'Proactive margin defense, market-level profitability improvement.',
      leakage: '1–3% margin erosion per market per day due to undetected leaks.',
    },
    {
      name: 'Casino Performance',
      icon: Gamepad2,
      traditional: 'Monthly bonus planning, game profitability analysis.',
      accelerated: 'Real-time detection of bonus abuse, game overuse, RTP anomaly.',
      value_creation: 'Higher ROI on bonuses, reduced abuse, optimized bonus cost.',
      leakage: 'Bonus spend wastage 15–25% on low-quality or abusive redemptions.',
    },
    {
      name: 'VIP Management',
      icon: Crown,
      traditional: 'Personalized strategies, manual VIP cohorting.',
      accelerated: 'Instant alerts on VIP inactivity, risk behavior, wallet balance drop.',
      value_creation: 'Revenue retention, faster intervention, better VIP experience.',
      leakage: '20–40% potential VIP revenue loss due to late or no reaction.',
    },
    {
      name: 'Player Risk',
      icon: ShieldAlert,
      traditional: 'Manual profiling, fraud trend reviews.',
      accelerated: 'AI-based suspicious behavior detection, early abuse flagging.',
      value_creation: 'Fraud mitigation with precision, reduced false positives.',
      leakage: 'Losses per abusive player could exceed €1,000/month.',
    },
    {
      name: 'Payments Efficiency',
      icon: CreditCard,
      traditional: 'Monthly tracking of payment performance.',
      accelerated: 'Real-time alerts on payment failures, slow withdrawals, deposit decline spikes.',
      value_creation: 'Enhanced user experience, better retention and trust.',
      leakage: 'Conversion drop & churn due to delayed or failed payments.',
    },
    {
      name: 'Conversion Funnel',
      icon: Filter,
      traditional: 'Funnel review from acquisition to FTD weekly/monthly.',
      accelerated: 'Real-time drop-off detection, friction points, KYC abandonment alerts.',
      value_creation: 'Better acquisition ROI, higher FTD conversion rates.',
      leakage: '10–15% drop in FTDs due to unresolved frictions or slowness.',
    },
    {
      name: 'High Risk Bettors',
      icon: LifeBuoy,
      traditional: 'Manual detection via reports, RG flagging after damage.',
      accelerated: 'Early warning based on behavioral changes, spending patterns.',
      value_creation: 'Timely RG interventions, reduced compliance risks.',
      leakage: 'Reputational & regulatory risk, delayed RG flagging.',
    },
    {
      name: 'Fraud & Collusion',
      icon: Fingerprint,
      traditional: 'Forensics-based reviews by Risk/Compliance teams.',
      accelerated: 'AI-powered detection of bot behavior, game collusion, coordinated attacks.',
      value_creation: 'Reduced financial exposure, faster mitigation.',
      leakage: 'High-value loss events (e.g., roulette collusion) can cost €10K+.',
    },
    {
      name: 'Customer Intel',
      icon: Brain,
      traditional: 'Segmentation design, LTV modeling, lifecycle stage definitions.',
      accelerated: 'Auto-updated segments, churn prediction alerts, CLV tracking.',
      value_creation: 'Lifecycle automation, better bonus allocation, CRM ROI growth.',
      leakage: 'Missed reactivation/reengagement windows, over/underbonus spend.',
    },
    {
      name: 'Campaign ROI',
      icon: Megaphone,
      traditional: 'Post-campaign analysis, uplift measurement.',
      accelerated: 'Instant detection of underperforming/abused campaigns.',
      value_creation: 'Live optimizations, cost control, better spend-to-value alignment.',
      leakage: '20–30% of CRM budget leakage due to poor response or abuse.',
    },
  ];

  const colorStyles: Record<string, { text: string; border: string; bg: string }> = {
    cyan: { text: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
    red: { text: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
    purple: { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
    amber: { text: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' },
    green: { text: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/10' },
  };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative py-24 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="solutions-header text-center mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
            [SOLUTIONS] YOUR_ROLE_YOUR_OUTCOME
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for <span className="text-[#00f0ff]">Outcome-Accountable</span> Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            FalconDive serves CXOs, Product Heads, Risk Leaders, and Business Owners
            who are accountable for margins, revenue, and growth.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="personas-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {personas.map((persona, index) => {
            const styles = colorStyles[persona.color];
            return (
              <div
                key={index}
                className={`persona-card group bg-[#1a1a24] border border-gray-800 hover:${styles.border} p-6 rounded-xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${styles.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <persona.icon className={`w-6 h-6 ${styles.text}`} />
                  </div>
                  <div className="flex-1">
                    <span className={`font-mono text-xs ${styles.text} uppercase tracking-wider`}>
                      {persona.focus}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-1 mb-2">
                      {persona.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {persona.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {persona.outcomes.map((outcome, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-mono ${styles.bg} ${styles.text} px-2 py-1 rounded`}
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* B2B Comparison Section */}
        <div className="b2b-section mb-20">
          <div className="bg-gradient-to-r from-[#1a1a24] to-[#0f0f14] border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold mb-2">
                Already Using BI? <span className="text-[#00f0ff]">FalconDive Goes Further.</span>
              </h3>
              <p className="text-gray-400 text-sm">
                We don't replace your BI. We add the AI-driven action layer it lacks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional BI */}
              <div className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-5 h-5 text-gray-500" />
                  <h4 className="font-display font-bold text-gray-400">Traditional BI</h4>
                </div>
                <ul className="space-y-3">
                  {['Passive analytics & dashboards', 'Manual report generation', 'Reactive issue identification', 'Insights without action paths'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-gray-600">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FalconDive */}
              <div className="bg-gradient-to-br from-[#00f0ff]/10 to-blue-500/5 border border-[#00f0ff]/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-5 h-5 text-[#00f0ff]" />
                  <h4 className="font-display font-bold text-[#00f0ff]">FalconDive Layer</h4>
                </div>
                <ul className="space-y-3">
                  {['Active decision intelligence', 'AI-driven actions & closure', 'Proactive leakage detection', 'End-to-end value realization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-[#00f0ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                <span className="text-[#00f0ff]">B2B:</span> Uplift margins across affiliates, payments, and betting verticals.{' '}
                <span className="text-[#00f0ff]">B2C:</span> Purpose-built value realization for direct operations.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Verticals */}
        <div className="verticals-section">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold mb-2">
              Value Realization by <span className="text-[#00f0ff]">Vertical</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Specialized detection, diagnostics, and action for key revenue streams.
            </p>
          </div>

          {/* Vertical Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {verticals.map((vertical, i) => (
              <button
                key={i}
                onClick={() => setActiveVertical(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs transition-all ${activeVertical === i
                  ? 'bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff]'
                  : 'bg-[#1a1a24] border border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
              >
                <vertical.icon className="w-4 h-4" />
                {vertical.name}
              </button>
            ))}
          </div>

          {/* Active Vertical Content */}
          {/* Active Vertical Content */}
          <div className="bg-[#1a1a24] border border-gray-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column: Traditional / Status Quo */}
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-800 bg-[#15151a]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-300">Traditional Approach</h4>
                    <p className="font-mono text-[10px] text-gray-500">MANUAL • REACTIVE • SLOW</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Process</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {verticals[activeVertical].traditional}
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <h5 className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                    <ShieldAlert size={14} /> Value Leakage
                  </h5>
                  <p className="text-red-400/90 text-sm font-medium">
                    {verticals[activeVertical].leakage}
                  </p>
                </div>
              </div>

              {/* Right Column: FalconDive / Accelerated */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-[#1a1a24] to-[#00f0ff]/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center">
                    {(() => {
                      const Icon = verticals[activeVertical].icon;
                      return <Icon className="w-5 h-5 text-[#00f0ff]" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">FalconDive AI</h4>
                    <p className="font-mono text-[10px] text-[#00f0ff]">REAL-TIME • PROACTIVE • AUTOMATED</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-bold text-[#00f0ff] uppercase tracking-wider mb-2">Accelerated Analytics</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {verticals[activeVertical].accelerated}
                  </p>
                </div>

                <div className="bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-lg p-4">
                  <h5 className="flex items-center gap-2 text-xs font-bold text-[#00f0ff] uppercase tracking-wider mb-2">
                    <TrendingUp size={14} /> Value Creation
                  </h5>
                  <p className="text-[#00f0ff] text-sm font-medium">
                    {verticals[activeVertical].value_creation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
