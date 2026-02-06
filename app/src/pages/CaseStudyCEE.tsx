import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, BarChart3, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyCEE = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Set all elements visible first
      gsap.set('.highlight-card', { opacity: 1, y: 0 });
      gsap.set('.about-card', { opacity: 1, y: 0 });
      gsap.set('.challenge-item', { opacity: 1, x: 0 });
      gsap.set('.solution-item', { opacity: 1, x: 0 });
      gsap.set('.result-card', { opacity: 1, y: 0 });
      
      gsap.from('.hero-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.highlight-card', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.highlights-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.about-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.challenge-item', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.challenges-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.solution-item', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solutions-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.result-card', {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.results-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Key Highlights from original
  const keyHighlights = [
    { value: '2.5X', label: 'Lower Development Cost', icon: TrendingUp },
    { value: '€45 Million +', label: 'Estimated Value Generated', icon: BarChart3 },
    { value: '6+', label: 'Years Of Continued Engagement', icon: Clock },
  ];

  // Challenges from original (4 bullet points)
  const challenges = [
    'The company sought to elevate their data infrastructure to a comprehensive platform, empowering them to unlock deeper customer insights, optimize lifecycle management, and fuel growth across operations, product development, and financial analysis.',
    'The expansion into new markets, integration of new platforms, and launch of new products resulted in a significant increase in data volume and complexity. The previous Financial Reporting Suite struggled to manage and analyse this data effectively, hindering timely decision-making and limiting business agility.',
    'The absence of a unified data platform led to disparate reporting across markets. Each region operated with its own data format and KPI definitions, creating inconsistencies and hindering the consolidation of insights. This lack of a single source of truth eroded trust in data-driven decision-making and incurred significant overhead costs in reconciling discrepancies.',
    'The business required expert guidance in leveraging their Customer Data Platform for personalised marketing promotions and campaigns.',
  ];

  // Solutions from original (4 bullet points)
  const solutions = [
    "FalconDive's unified data platform eliminates the need for a large internal BI & analytics team. Its pre-built features and intuitive interface empowered the company to consolidate data sources, create visualisations, and analyse data without coding expertise.",
    "FalconDive's cloud-based platform can integrate data from any source, regardless of location, format, or complexity. This enabled them to consolidate data from all its markets, platforms, and product providers into a single platform for a holistic view of their business.",
    "FalconDive's centralised management and automated workflows reduce BI & analytics management, maintenance, and development costs by up to 3x with every data source integrated into FalconDive – which became the company's single source of truth.",
    "FalconDive's CDP provides a comprehensive view of each customer, enabling personalised experiences and targeted campaigns across all channels. The company was able to use FalconDive to feed data into customer service, marketing, risk management, VIP teams, and retail shops.",
  ];

  // Results from original (3 metrics)
  const results = [
    { value: '2.5X', label: 'Lower Development Cost' },
    { value: '€45 Million +', label: 'Estimated Value Generated' },
    { value: '6+', label: 'Years Of Continued Engagement' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 hero-content text-center">
            <div className="mb-6">
              <span className="font-mono text-xs text-[#00f0ff] tracking-wider">iGaming Giant</span>
              <span className="text-gray-600 mx-2">|</span>
              <span className="font-mono text-xs text-gray-400">CEE</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              iGaming Giant in CEE Drives €45 Million
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Revenue in 6 Years With BI Initiatives
              </span>
            </h1>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="highlights-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Key <span className="text-[#00f0ff]">Highlights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyHighlights.map((highlight, i) => (
                <div key={i} className="highlight-card bg-[#1a1a24] border border-gray-800 p-8 rounded-xl text-center hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <highlight.icon className="w-10 h-10 text-[#00f0ff] mx-auto mb-4" />
                  <div className="font-display text-4xl font-bold text-[#00f0ff] mb-2">{highlight.value}</div>
                  <div className="text-gray-400 text-sm">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About The Company Section */}
        <section className="about-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              About The <span className="text-[#00f0ff]">Company</span>
            </h2>
            <div className="about-card bg-[#1a1a24] border border-gray-800 p-8 rounded-2xl" style={{ opacity: 1 }}>
              <p className="text-gray-400 leading-relaxed">
                Established in 1990 in Prague, it has become one of the first-ever joint-stock companies in the 
                country's modern history. It is providing innovative world-class entertainment in betting and 
                gaming across multiple product verticals like Sports Betting, Online Casinos, Lotteries, Virtual 
                Sports, and Slot Machines. The group employs a workforce of more than 6,000 and their footprint 
                now extends to the Slovakian, Polish, Romanian, and Croatian markets. The company has an estimated 
                annual revenue of €500 million.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              <span className="text-[#00f0ff]">Challenges</span>
            </h2>
            <div className="space-y-6">
              {challenges.map((challenge, i) => (
                <div key={i} className="challenge-item flex items-start gap-4" style={{ opacity: 1 }}>
                  <span className="w-2 h-2 bg-[#ff4444] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-400 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="solutions-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              <span className="text-[#00f0ff]">Solutions</span>
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, i) => (
                <div key={i} className="solution-item flex items-start gap-4" style={{ opacity: 1 }}>
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-400 leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              <span className="text-[#00f0ff]">Results</span>
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              FalconDive empowered data-driven decision making faster and more cost-effectively, 
              unlocking significant revenue growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {results.map((result, i) => (
                <div key={i} className="result-card bg-[#1a1a24] border border-gray-800 p-8 rounded-xl text-center hover:border-[#00f0ff]/30 transition-all" style={{ opacity: 1 }}>
                  <div className="font-display text-4xl font-bold text-[#00f0ff] mb-2">{result.value}</div>
                  <div className="text-gray-400 text-sm">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Turn Success Stories Into Your Reality.
            </h2>
            <button className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto mt-8">
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

export default CaseStudyCEE;
