import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Zap, TrendingUp, Users, Building2 } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    // Clear any existing triggers
    triggersRef.current.forEach(st => st.kill());
    triggersRef.current = [];

    const ctx = gsap.context(() => {
      // Hero animation - runs immediately
      gsap.fromTo('.hero-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Pillar cards - ensure visibility first, then animate
      const pillarCards = gsap.utils.toArray<HTMLElement>('.pillar-card');
      pillarCards.forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 });
      });

      const pillarTrigger = ScrollTrigger.create({
        trigger: '.pillars-grid',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(pillarCards,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(pillarTrigger);

      // Plan cards - ensure visibility first, then animate
      const planCards = gsap.utils.toArray<HTMLElement>('.plan-card');
      planCards.forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 });
      });

      const planTrigger = ScrollTrigger.create({
        trigger: '.plans-grid',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(planCards,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(planTrigger);

      // FAQ items
      const faqItems = gsap.utils.toArray<HTMLElement>('.faq-item');
      faqItems.forEach((item) => {
        gsap.set(item, { opacity: 1, y: 0 });
      });

      const faqTrigger = ScrollTrigger.create({
        trigger: '.faq-list',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(faqItems,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(faqTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  const pillars = [
    { icon: Zap, title: 'No Upfront Costs', desc: 'Zero infrastructure or license investment required.' },
    { icon: TrendingUp, title: 'Pay-as-You-Grow', desc: 'Pricing scales with your active player base.' },
    { icon: Check, title: 'Modular & Flexible', desc: 'Start small with essentials, expand with advanced modules.' },
    { icon: Building2, title: 'Cloud-Hosted Simplicity', desc: 'Run on FalconDive managed cloud—no in-house BI/AI team needed.' },
  ];

  const plans = [
    {
      title: 'Start-Ups & New Entrants',
      subtitle: 'Designed for early-stage operators who need agility and cost efficiency.',
      icon: Zap,
      color: 'green',
      features: [
        'MVP launches',
        'Limited technical resources',
        'Bootstrap operations',
      ],
      outcomes: [
        'Professional-grade intelligence without enterprise cost',
        'Competitive parity from Day 1',
        'Reduced time to market',
      ],
      cta: 'Start Free Trial',
    },
    {
      title: 'Growing Operators',
      subtitle: 'Best suited for operators with established player bases looking to maximize BI + AI outcomes.',
      icon: TrendingUp,
      color: 'cyan',
      features: [
        'Regional expansion phases',
        '1,000-50,000 active players',
        'Adding new verticals',
        'Optimizing unit economics',
      ],
      outcomes: [
        'Sustainable growth with protected margins',
        'Enhanced operational efficiency',
        'Data-driven expansion strategies',
      ],
      cta: 'See Growth Tools',
    },
    {
      title: 'B2B Platform Providers',
      subtitle: 'Empower your B2C brands with next-gen AI + BI intelligence.',
      icon: Users,
      color: 'purple',
      features: [
        'Operator networks & groups',
        'White-label solution providers',
      ],
      outcomes: [
        '35% increase in partner retention',
        '25% reduction in support overhead',
        '40% faster partner onboarding',
        'Enhanced platform differentiation',
      ],
      cta: 'Explore Partnership',
    },
  ];

  const faqs = [
    { q: 'Do I need upfront infrastructure?', a: 'No. FalconDive is fully cloud-hosted with no upfront infra or license costs.' },
    { q: 'How does the pay-as-you-grow model work?', a: 'Your costs scale fairly with your active player base (APDs). Smaller operators pay less, and pricing scales as you grow.' },
    { q: 'Can I start small and add modules later?', a: 'Yes. Start with essentials like Pulse and Converse AI, and expand into Narratives and Omnis Command Center when ready.' },
    { q: 'What is included in setup?', a: 'Integration support, KPI registry deployment, and optional training workshops for your teams.' },
    { q: 'Is pricing the same for Start-ups and Growing Operators?', a: 'No. Pricing is tailored based on your growth stage and player base size. Contact us for details.' },
  ];

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    green: { text: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-500/10' },
    cyan: { text: 'text-cyan-400', border: 'border-cyan-500/50', bg: 'bg-cyan-500/10' },
    purple: { text: 'text-purple-400', border: 'border-purple-500/50', bg: 'bg-purple-500/10' },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />

      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center hero-content">
            <span className="font-mono text-sm text-[#00f0ff] tracking-widest mb-4 block">
              [PRICING] FLEXIBLE_PLANS
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Flexible Pricing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Aligned to Your Growth
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              FalconDive is designed to scale with your business. Our pricing model is simple,
              transparent, and aligned with your growth journey.
            </p>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Request Custom Quote + Live Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              The 4 Pillars of
              <br />
              <span className="text-[#00f0ff]">FalconDive Pricing</span>
            </h2>

            <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="pillar-card bg-[#1a1a24] border border-gray-800 p-6 rounded-xl hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <pillar.icon className="w-8 h-8 text-[#00f0ff] mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Plans Overview
            </h2>

            <div className="plans-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan, i) => {
                const colors = colorMap[plan.color];
                return (
                  <div key={i} className={`plan-card group bg-[#1a1a24] border border-gray-800 ${colors.border} p-6 rounded-xl hover:-translate-y-2 transition-all`} style={{ opacity: 1 }}>
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <plan.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.subtitle}</p>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Perfect For:</p>
                      <ul className="space-y-1">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-gray-500 mb-2">Key Outcomes:</p>
                      <ul className="space-y-1">
                        {plan.outcomes.map((o, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                            <Check className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setIsCalendlyOpen(true)}
                      className={`w-full py-3 border ${colors.border} ${colors.text} font-mono text-sm hover:${colors.bg} transition-colors rounded-lg`}
                    >
                      {plan.cta}
                    </button>

                    <p className="text-[10px] text-gray-500 mt-3 text-center">
                      Pricing scales with your player base. Contact us for a tailored plan.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why FalconDive Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Why <span className="text-[#00f0ff]">FalconDive?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1a1a24]/50 border border-gray-800 p-6 rounded-xl">
                <h3 className="font-mono text-sm text-gray-500 mb-4">Traditional BI/AI Stack</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2"><span className="text-red-400">×</span> Expensive infra and licenses</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">×</span> Heavy upfront costs</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">×</span> Dedicated in-house team required</li>
                  <li className="flex items-center gap-2"><span className="text-red-400">×</span> Tools and platforms</li>
                </ul>
              </div>

              <div className="bg-[#00f0ff]/5 border border-[#00f0ff]/30 p-6 rounded-xl">
                <h3 className="font-mono text-sm text-[#00f0ff] mb-4">FalconDive Model</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Cloud-hosted and modular</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> No upfront investment</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Pay-as-you-grow flexibility</li>
                  <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Outcomes delivered, not just tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-10">
              Frequently Asked <span className="text-[#00f0ff]">Questions</span>
            </h2>

            <div className="faq-list space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item bg-[#1a1a24] border border-gray-800 p-5 rounded-xl hover:border-gray-700 transition-all" style={{ opacity: 1 }}>
                  <h3 className="font-mono text-sm text-[#00f0ff] mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Align BI + AI with Your Growth?
            </h2>
            <p className="text-gray-400 mb-8">
              Talk to us today and explore a pricing model designed for fairness, flexibility, and scalability.
            </p>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Request Custom Quote + Live Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};

export default Pricing;
