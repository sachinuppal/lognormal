import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyGermany = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Set all elements visible first
      gsap.set('.stat-card', { opacity: 1, y: 0 });
      gsap.set('.challenge-card', { opacity: 1, y: 0 });
      gsap.set('.solution-item', { opacity: 1, x: 0 });
      
      gsap.from('.hero-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.stat-card', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.challenge-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.challenge-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.solution-item', {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solutions-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '<4', label: 'Weeks TAT', icon: Clock },
    { value: '60%', label: 'Faster Delivery', icon: TrendingUp },
    { value: '2M+', label: 'Active Users', icon: BarChart3 },
  ];

  const challenges = [
    'Complex regulatory requirements in Germany',
    'Legacy data systems requiring modernization',
    'Need for real-time compliance reporting',
    'High competition demanding rapid insights',
    'Integration with multiple payment providers',
  ];

  const solutions = [
    { title: 'Rapid Deployment', desc: 'Complete BI platform deployed in under 4 weeks' },
    { title: 'Compliance Dashboards', desc: 'Real-time regulatory reporting and monitoring' },
    { title: 'Data Modernization', desc: 'Seamless migration from legacy systems' },
    { title: 'Unified Analytics', desc: 'Single source of truth across all business units' },
    { title: 'Automated Workflows', desc: 'Self-service reporting reducing IT dependency' },
  ];

  const results = [
    { metric: '<4 Weeks', label: 'Implementation Time', change: 'vs 12+ weeks industry average' },
    { metric: '60%', label: 'Faster Time-to-Insight', change: 'Decision Speed Improvement' },
    { metric: '45%', label: 'Operational Cost Reduction', change: 'Efficiency Gains' },
    { metric: '99.9%', label: 'System Uptime', change: 'Reliability' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 hero-content">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="font-mono text-xs text-[#00f0ff] tracking-wider">[CASE STUDY]</span>
              <span className="text-gray-600">|</span>
              <span className="font-mono text-xs text-gray-400">GERMANY</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              One of Germany's Largest Bookmakers
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Cuts TAT to Under 4 Weeks
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-3xl mb-8">
              How a major German bookmaker achieved rapid deployment and operational excellence 
              through FalconDive's AI-powered BI platform.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full">RAPID DEPLOYMENT</span>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">COMPLIANCE</span>
              <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full">EFFICIENCY</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card bg-[#1a1a24] border border-gray-800 p-6 rounded-xl text-center" style={{ opacity: 1 }}>
                  <stat.icon className="w-8 h-8 text-[#00f0ff] mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold text-[#00f0ff] mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="challenge-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="challenge-card bg-[#1a1a24] border border-gray-800 p-8 rounded-2xl" style={{ opacity: 1 }}>
              <h2 className="font-display text-2xl font-bold mb-6">
                The <span className="text-[#ff4444]">Challenge</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Operating in Germany's highly regulated iGaming market, the client needed a robust 
                BI solution that could meet strict compliance requirements while delivering rapid 
                insights. Their legacy systems were slow, fragmented, and unable to keep pace with 
                market demands.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-[#ff4444]">×</span>
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solutions-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-8">
              The <span className="text-[#00f0ff]">Solution</span>
            </h2>
            <p className="text-gray-400 mb-8">
              FalconDive delivered a comprehensive solution that addressed all compliance requirements 
              while dramatically reducing time-to-insight.
            </p>
            
            <div className="space-y-4">
              {solutions.map((solution, i) => (
                <div key={i} className="solution-item bg-[#1a1a24] border border-gray-800 p-5 rounded-xl hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#00f0ff] font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-1">{solution.title}</h3>
                      <p className="text-gray-400 text-sm">{solution.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold mb-8">
              The <span className="text-green-400">Results</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((result, i) => (
                <div key={i} className="bg-gradient-to-br from-[#1a1a24] to-[#0f0f14] border border-gray-800 p-6 rounded-xl">
                  <div className="font-display text-3xl font-bold text-[#00f0ff] mb-1">{result.metric}</div>
                  <div className="text-gray-400 text-sm mb-2">{result.label}</div>
                  <div className="text-green-400 text-xs font-mono">{result.change}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[#1a1a24] border border-gray-800 p-8 rounded-2xl">
              <p className="text-xl italic text-gray-300 mb-6">
                "The speed of deployment was remarkable. What typically takes months was accomplished 
                in weeks, without compromising on quality or compliance."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#00f0ff] font-bold">MK</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Michael Klein</div>
                  <div className="text-gray-500 text-xs">Head of Operations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready for Rapid Deployment?
            </h2>
            <p className="text-gray-400 mb-8">
              See how FalconDive can accelerate your time-to-insight while meeting all compliance requirements.
            </p>
            <button className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyGermany;
