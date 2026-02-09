import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, DollarSign, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shockwave animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        onEnter: () => {
          gsap.to('.shockwave-ring', {
            opacity: 0.6,
            scale: 3,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
          });
        },
      });

      // Stats animation - set visible first
      if (statsRef.current?.children) {
        gsap.set(statsRef.current.children, { opacity: 1, y: 0 });
      }
      gsap.fromTo(statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        }
      );

      // Count up animations
      const countElements = document.querySelectorAll('.impact-count');
      countElements.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const isDecimal = target % 1 !== 0;

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          onEnter: () => {
            gsap.to(el, {
              innerHTML: target,
              duration: 2,
              ease: 'power2.out',
              snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
              onUpdate: function () {
                const current = parseFloat(
                  gsap.getProperty(el, 'innerHTML') as string
                );
                if (isDecimal) {
                  el.innerHTML = current.toFixed(1);
                } else {
                  el.innerHTML = Math.round(current).toString();
                }
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Value-realized metrics
  const mainStats = [
    { value: 45, suffix: 'M+', prefix: '€', label: 'Revenue Recovered' },
    { value: 18, suffix: '%', label: 'Avg. Margin Uplift' },
    { value: 2400, suffix: '+', label: 'Leakages Closed' },
    { value: 94, suffix: '%', label: 'Actions Closed' },
  ];

  const categoryStats = [
    {
      title: 'REVENUE_RECOVERY',
      icon: TrendingUp,
      color: 'text-[#00f0ff]',
      bgColor: 'bg-[#00f0ff]/10',
      stats: [
        { label: 'Total recovered', value: '€45M+' },
        { label: 'Avg. uplift', value: '+18%' },
        { label: 'Leakages detected', value: '2,400+' },
      ],
    },
    {
      title: 'MARGIN_PROTECTION',
      icon: DollarSign,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      stats: [
        { label: 'Margin protected', value: '0.8%' },
        { label: 'Cost reduction', value: '25%' },
        { label: 'ROI achieved', value: '4.5x' },
      ],
    },
    {
      title: 'RISK_MITIGATION',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      stats: [
        { label: 'Fraud prevented', value: '€28M' },
        { label: 'Churn reduced', value: '28%' },
        { label: 'Anomalies caught', value: '99.7%' },
      ],
    },
    {
      title: 'SPEED_TO_VALUE',
      icon: Zap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      stats: [
        { label: 'Deployment', value: '3 wks' },
        { label: 'First detection', value: 'Day 1' },
        { label: 'Time-to-action', value: '-70%' },
      ],
    },
  ];

  const caseStudies = [
    {
      title: 'iGaming Giant CEE',
      value: '€45M',
      metric: 'Revenue in 6 Years',
      description:
        'Drove measurable revenue through BI initiatives with 2.5x lower development cost.',
      link: '/case-studies/igaming-giant-cee',
    },
    {
      title: 'Top Bookmaker Germany',
      value: '18%',
      metric: 'Margin Uplift',
      description:
        'Achieved significant margin improvement through AI-driven value realization.',
      link: '/case-studies/top-bookmarker-germany',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Shockwave Animation */}
      <div
        ref={shockwaveRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="shockwave-ring absolute w-[200px] h-[200px] border-2 border-[#00f0ff] rounded-full opacity-0" />
        <div className="shockwave-ring absolute w-[400px] h-[400px] border-2 border-[#00f0ff] rounded-full opacity-0" />
        <div className="shockwave-ring absolute w-[600px] h-[600px] border-2 border-[#00f0ff] rounded-full opacity-0" />
      </div>

      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00f0ff]/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-[#00f0ff] tracking-widest glow-laser">
            [OUTCOMES] VALUE_REALIZED
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
            Measurable Value.
            <br />
            <span className="text-[#00f0ff]">Proven Results.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Revenue recovered. Margins protected. Leakages closed.
            See what FalconDive delivers for outcome-accountable leaders.
          </p>
        </div>

        {/* Main Stats - Value Realized */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {mainStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#00f0ff] mb-2 group-hover:scale-110 transition-transform">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span
                  className="impact-count"
                  data-target={stat.value}
                >
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="font-mono text-xs text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoryStats.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a24]/50 border border-gray-800 p-6 rounded-lg hover:border-gray-700 transition-colors"
            >
              <div
                className={`${category.color} font-mono text-xs mb-4 flex items-center gap-2`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </div>
              <div className="space-y-3 font-mono text-sm">
                {category.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between text-gray-400">
                    <span>{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies - Outcome Led */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              href={study.link}
              className="group relative overflow-hidden rounded-lg bg-[#1a1a24] border border-gray-800 p-8 hover:border-[#00f0ff]/50 transition-all cursor-pointer"
            >
              <div className="absolute top-0 right-0 bg-[#00f0ff] text-black text-xs font-mono px-3 py-1 rounded-bl">
                CASE STUDY
              </div>
              <h3 className="font-display text-xl font-bold mb-1">
                {study.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-3xl font-bold text-[#00f0ff]">
                  {study.value}
                </p>
                <span className="text-sm text-gray-400">{study.metric}</span>
              </div>
              <p className="text-gray-400 text-sm">{study.description}</p>
              <div className="mt-4 flex items-center gap-2 text-[#00f0ff] font-mono text-sm group-hover:gap-4 transition-all">
                <span>See Value Journey</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-gradient-to-r from-[#00f0ff]/10 via-[#00f0ff]/5 to-[#00f0ff]/10 border border-[#00f0ff]/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-[#00f0ff] flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 italic mb-4">
                "FalconDive didn't just give us dashboards—it gave us a complete value realization engine.
                We went from discovering leakages to closing them in days, not months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00f0ff]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#00f0ff] font-bold text-sm">MP</span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm">Mayank Pachauri</p>
                  <p className="text-gray-500 text-xs font-mono">Founder & CEO, FalconDive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
