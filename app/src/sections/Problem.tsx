import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set visible first
      gsap.set('.problem-card', { opacity: 1, y: 0 });
      gsap.set('.terminal-box', { opacity: 1, y: 0 });
      
      // Cards stagger animation
      gsap.from('.problem-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-cards-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Terminal animation
      gsap.from('.terminal-box', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.terminal-box',
          start: 'top 90%',
        },
      });

      // Count up animation for numbers
      const countElements = document.querySelectorAll('.count-up');
      countElements.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const isNegative = target < 0;
        const absTarget = Math.abs(target);
        const isDecimal = absTarget % 1 !== 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';

        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(el, {
              innerHTML: absTarget,
              duration: 2,
              ease: 'power2.out',
              snap: isDecimal ? { innerHTML: 0.1 } : { innerHTML: 1 },
              onUpdate: function () {
                const current = parseFloat(gsap.getProperty(el, 'innerHTML') as string);
                let display = isNegative ? '-' : '';
                display += prefix;
                if (isDecimal) {
                  display += current.toFixed(1);
                } else {
                  display += Math.round(current);
                }
                display += suffix;
                el.innerHTML = display;
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leakageData = [
    {
      hour: 'HOUR_01',
      value: '0.1',
      prefix: '-',
      suffix: '%',
      label: 'Margin erosion begins undetected',
      progress: 10,
      icon: TrendingDown,
    },
    {
      hour: 'HOUR_04',
      value: '50',
      prefix: '-€',
      suffix: 'K',
      label: 'Revenue leakage compounds',
      progress: 40,
      icon: AlertTriangle,
    },
    {
      hour: 'HOUR_08',
      value: '200',
      prefix: '-€',
      suffix: 'K',
      label: 'Customer LTV lost to churn',
      progress: 75,
      icon: Users,
    },
    {
      hour: 'HOUR_24',
      value: '2',
      prefix: '-',
      suffix: '%',
      label: 'Monthly revenue impact',
      progress: 100,
      icon: Clock,
      critical: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/threat-detection-bg.jpg"
          alt="Leakage detection radar"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]" />
      </div>

      {/* Animated Reticle Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-40">
        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-[#ff4444]/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          
          {/* Middle Ring (Dashed) */}
          <div className="absolute inset-8 border border-[#ff4444]/40 rounded-full border-dashed animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Inner Ring */}
          <div className="absolute inset-16 border-2 border-[#ffb800]/50 rounded-full" />
          
          {/* Crosshairs */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#ff4444]/30 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff4444]/30 to-transparent" />
          
          {/* Center Target */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-[#ffb800] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-[#ffb800] rounded-full" />
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff4444]/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#ff4444]/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ff4444]/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff4444]/50" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-mono text-sm text-[#ffb800] tracking-widest">
            [DETECTION] REVENUE_LEAKAGE_ALERT
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
            Revenue is Leaking
            <br />
            <span className="text-[#ff4444]">Right Now</span>
          </h2>
          <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-[#ff4444] to-transparent mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Our AI continuously scans your operations like a radar, detecting revenue 
            leakages before they compound and impact your bottom line.
          </p>
        </div>

        {/* Leakage Cards Grid */}
        <div className="problem-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {leakageData.map((item, index) => (
            <div
              key={index}
              className={`problem-card group relative bg-[#1a1a24]/90 backdrop-blur-sm border ${
                item.critical
                  ? 'border-[#ff4444]'
                  : 'border-gray-800 hover:border-[#ff4444]/50'
              } p-5 rounded-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {item.critical && (
                <div className="absolute top-0 right-0 bg-[#ff4444] text-black text-[10px] font-mono px-2 py-1 rounded-bl font-bold">
                  CRITICAL
                </div>
              )}

              <div className="flex justify-between items-start mb-3">
                <span className="font-mono text-[10px] text-gray-500">T-Minus</span>
                <span className="font-mono text-xs text-[#ff4444] font-bold">
                  {item.hour}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <item.icon
                  className={`w-4 h-4 ${
                    item.critical ? 'text-[#ff4444]' : 'text-gray-500'
                  }`}
                />
                <div className="text-2xl md:text-3xl font-display font-bold text-white">
                  <span 
                    className="count-up" 
                    data-target={item.value}
                    data-prefix={item.prefix}
                    data-suffix={item.suffix}
                  >
                    {item.prefix}0{item.suffix}
                  </span>
                </div>
              </div>

              <div className="font-mono text-[11px] text-gray-400 mb-3">
                {item.label}
              </div>

              <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                <div
                  className={`h-full ${
                    item.critical
                      ? 'bg-[#ff4444] animate-pulse'
                      : 'bg-gradient-to-r from-[#ff4444] to-[#ffb800]'
                  }`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Warning Terminal */}
        <div className="terminal-box mt-10 bg-[#1a1a24]/90 backdrop-blur-sm border border-gray-800 border-l-4 border-l-[#ff4444] rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-[#ff4444] flex-shrink-0 mt-1" />
            <div>
              <p className="font-mono text-sm text-gray-300 leading-relaxed mb-3">
                <span className="text-[#ff4444] font-bold">LEAKAGE ANALYSIS:</span>{' '}
                The persistent gap between detection and action causes{' '}
                <span className="text-white font-bold">20-25% revenue loss</span> in
                undetected leakages across operations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-gray-500">
                {[
                  'Margin erosion without alerts',
                  'Bonus abuse undetected',
                  'VIP churn without intervention',
                  'Campaign waste unchecked',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#ff4444]">×</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <span className="text-[#ffb800] font-mono text-xs">
                  ⚠ Result: An estimated 25-35% destruction of enterprise value through invisible leakages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detection Stats */}
        <div className="mt-10 flex justify-center gap-6 md:gap-10 flex-wrap">
          {[
            { label: 'SCAN_RATE', value: '10ms' },
            { label: 'LEAKAGE_DETECTION', value: '99.7%' },
            { label: 'LEAKAGES_CAUGHT', value: '2.4M+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-mono text-[10px] text-gray-500 mb-1">{stat.label}</div>
              <div className="font-display text-lg md:text-xl font-bold text-[#00f0ff]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
