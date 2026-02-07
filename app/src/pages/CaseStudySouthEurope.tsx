import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const CaseStudySouthEurope = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { value: '35%', label: 'Campaign ROI Improvement', icon: TrendingUp },
    { value: '3', label: 'Leading iGaming Brands', icon: Target },
    { value: '40%', label: 'Faster Decision Making', icon: Zap },
  ];

  const challenges = [
    'Multiple brands with different player profiles',
    'Inefficient campaign targeting',
    'Lack of real-time performance insights',
    'Manual campaign optimization processes',
    'Difficulty measuring true campaign impact',
  ];

  const solutions = [
    { title: 'AI-Powered Campaign Insights', desc: 'Machine learning models identifying high-value player segments' },
    { title: 'Real-Time Performance Dashboards', desc: 'Live visibility into campaign metrics across all brands' },
    { title: 'Predictive Player Scoring', desc: 'AI models predicting player lifetime value and churn risk' },
    { title: 'Automated A/B Testing', desc: 'Self-service experimentation platform for campaign optimization' },
    { title: 'Cross-Brand Analytics', desc: 'Unified view of performance across multiple iGaming brands' },
  ];

  const results = [
    { metric: '35%', label: 'Campaign ROI Improvement', change: 'Marketing Efficiency' },
    { metric: '28%', label: 'Player Retention Increase', change: 'Churn Reduction' },
    { metric: '40%', label: 'Faster Decision Making', change: 'Time-to-Insight' },
    { metric: '50%', label: 'Manual Work Reduction', change: 'Automation Impact' },
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
              <span className="font-mono text-xs text-gray-400">SOUTH EUROPE</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leading iGaming Brands
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Optimize Campaigns with AI-Powered Insights
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mb-8">
              How three leading iGaming brands in South Europe transformed their marketing campaigns
              through AI-driven decision intelligence and real-time analytics.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full">AI-POWERED</span>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">CAMPAIGN OPTIMIZATION</span>
              <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full">ROI GROWTH</span>
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
                Managing multiple iGaming brands across South Europe, the client struggled with
                campaign optimization. Each brand had different player profiles, and manual campaign
                management was inefficient and time-consuming. They needed AI-powered insights to
                maximize marketing ROI.
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
              FalconDive implemented AI-powered campaign analytics that transformed how the client
              approached marketing optimization across all their brands.
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
                "FalconDive's AI-powered insights have completely transformed our approach to campaign
                optimization. We're now making data-driven decisions in real-time, and the results speak
                for themselves."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00f0ff]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#00f0ff] font-bold">SR</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Sofia Rossi</div>
                  <div className="text-gray-500 text-xs">Head of Marketing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Optimize Your Campaigns?
            </h2>
            <p className="text-gray-400 mb-8">
              See how FalconDive's AI-powered insights can transform your marketing ROI.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CaseStudySouthEurope;
