import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, TrendingUp, Brain, Shield, Zap, ArrowRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

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

      // Story card - ensure visibility first, then animate
      const storyCard = gsap.utils.toArray<HTMLElement>('.story-card');
      storyCard.forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 });
      });

      const storyTrigger = ScrollTrigger.create({
        trigger: '.story-section',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(storyCard,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(storyTrigger);

      // Mission items - ensure visibility first, then animate
      const missionItems = gsap.utils.toArray<HTMLElement>('.mission-item');
      missionItems.forEach((item) => {
        gsap.set(item, { opacity: 1, y: 0 });
      });

      const missionTrigger = ScrollTrigger.create({
        trigger: '.mission-grid',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(missionItems,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(missionTrigger);

      // Team cards - ensure visibility first, then animate
      const teamCards = gsap.utils.toArray<HTMLElement>('.team-card');
      teamCards.forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 });
      });

      const teamTrigger = ScrollTrigger.create({
        trigger: '.team-grid',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(teamCards,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
          );
        }
      });
      triggersRef.current.push(teamTrigger);
    }, sectionRef);

    return () => {
      triggersRef.current.forEach(st => st.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, []);

  // Updated missions aligned with value realization
  const missions = [
    { icon: Target, title: 'Value Detection', desc: 'We help organizations detect revenue and efficiency leakages before they compound into significant losses.' },
    { icon: Brain, title: 'Root Cause Intelligence', desc: 'We deliver AI-powered diagnostics that uncover why value is leaking and where it is trapped.' },
    { icon: Zap, title: 'Action & Closure', desc: 'We convert insights into corrective actions with defined ownership, timelines, and measurable outcomes.' },
    { icon: TrendingUp, title: 'Continuous Optimization', desc: 'We enable ongoing tracking of value realized with feedback loops for continuous improvement.' },
    { icon: Shield, title: 'Outcome Accountability', desc: 'We serve leaders who are accountable for margins, revenue, and growth—not just analysts who report on them.' },
  ];

  const team = [
    {
      name: 'Mayank Pachauri',
      role: 'Founder, CEO',
      exp: 'Revenue Operations, Ex-PartyGaming, Bwin.Party, FEG',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/1-Mayank.png',
      linkedin: 'https://www.linkedin.com/in/mayank-pachauri-abb8717/'
    },
    {
      name: 'Prashanth Reddy',
      role: 'COO',
      exp: 'Business Strategy, Ex-PartyGaming, Bwin.Party',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/2-Prashanth.png',
      linkedin: 'https://www.linkedin.com/in/prashanthracharla/'
    },
    {
      name: 'Vamsi Chandra',
      role: 'SVP, Product',
      exp: 'Product Innovation, Ex-PartyGaming, Bwin.Party, GVC',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/3-Vamsi.png',
      linkedin: 'https://www.linkedin.com/in/vamsi-chandra/'
    },
    {
      name: 'Nikhil Reddy',
      role: 'VP, Data Engg. & AI',
      exp: 'AI/ML Systems, Ex-FEG',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/4-Nikhil.png',
      linkedin: 'https://www.linkedin.com/in/b-nikhileshwar-reddy-516a17110/'
    },
    {
      name: 'Srinivas Rao',
      role: 'VP, Client Success',
      exp: 'Value Realization, Ex-COZY, Ex-Entain',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/5-Srini.png',
      linkedin: 'https://www.linkedin.com/in/athotasrini/'
    },
    {
      name: 'Tarun Tiwari',
      role: 'Chief Data Architect',
      exp: 'Scalable Architecture, Ex-Bwin.Party, FEG',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/6-Tarun.png',
      linkedin: 'https://www.linkedin.com/in/tarun-tiwari-4974a61a6/'
    },
    {
      name: 'Piyusha Jain',
      role: 'VP, Value Analytics',
      exp: 'Outcome Measurement, Ex-FEG',
      image: 'https://d6jocfs79qs7r.cloudfront.net/website/teams/7-Piyusha.png',
      linkedin: 'https://www.linkedin.com/in/piyusha-jain-9b3696a2/'
    },
  ];

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
              [ABOUT] OUR_MISSION
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Exist to Help Organizations
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Realize Measurable Value
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stop losing revenue to invisible leakages. Start realizing measurable
              business value through AI-driven decision intelligence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="story-card bg-[#1a1a24] border border-gray-800 p-8 rounded-2xl" style={{ opacity: 1 }}>
              <h2 className="font-display text-3xl font-bold mb-6">
                Our <span className="text-[#00f0ff]">Story</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                With over <span className="text-white font-bold">100 years of combined experience</span> in iGaming
                revenue operations, business strategy, and AI/ML systems, we witnessed a fundamental gap in the industry:
                organizations had access to data, but they lacked the intelligence to turn that data into recovered revenue.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                FalconDive was born from this insight. We built a platform that doesn't just visualize data—it
                <span className="text-white font-bold"> detects leakages, diagnoses root causes, drives corrective actions,
                  and continuously monitors outcomes</span>. This is value realization, not data analytics.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a CXO protecting margins, a Product Head tracking value, or a Risk Leader managing
                exposure, FalconDive delivers the AI-driven decision intelligence you need to be accountable for outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Our <span className="text-[#00f0ff]">Mission</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              To enable every iGaming business with AI-driven value realization—from
              detection through continuous optimization.
            </p>

            <div className="mission-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((item, i) => (
                <div key={i} className="mission-item bg-[#1a1a24] border border-gray-800 p-6 rounded-xl hover:border-[#00f0ff]/30 transition-all group" style={{ opacity: 1 }}>
                  <item.icon className="w-10 h-10 text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Meet the Minds Behind <span className="text-[#00f0ff]">FalconDive</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
              Our leadership team combines expertise in revenue operations, business strategy,
              AI/ML systems, and outcome measurement. We're not just data scientists—we're
              value realization engineers.
            </p>

            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {team.map((member, i) => (
                <a
                  key={i}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card bg-[#1a1a24] border border-gray-800 p-5 rounded-xl hover:border-[#00f0ff]/30 hover:bg-[#1a1a24]/80 transition-all group block"
                  style={{ opacity: 1 }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-[#00f0ff]/50 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-bold text-lg mb-1 group-hover:text-[#00f0ff] transition-colors">{member.name}</h3>
                    <p className="text-[#00f0ff] text-xs font-mono mb-2">{member.role}</p>
                    <p className="text-gray-500 text-[10px] leading-tight">{member.exp}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Advisory Board: <span className="text-[#00f0ff]">Value Realization Leaders</span>
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              FalconDive's Advisory Board unites industry leaders who've driven measurable
              outcomes across billion-dollar operations. Their battle-tested insights power our value engine.
            </p>

            <a
              href="https://www.linkedin.com/in/jeffreyhaas/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a24] border border-gray-800 p-6 rounded-xl flex items-center gap-6 hover:border-[#00f0ff]/30 transition-all group max-w-xl mx-auto"
              style={{ opacity: 1 }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-[#00f0ff]/50 transition-colors shrink-0">
                <img
                  src="https://d6jocfs79qs7r.cloudfront.net/website/teams/8-JeffreyHaas.png"
                  alt="Jeffrey Haas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 group-hover:text-[#00f0ff] transition-colors">Jeffrey Haas</h3>
                <p className="text-gray-400 text-sm">Advisory Board Member</p>
              </div>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Realize Measurable Value?
            </h2>
            <p className="text-gray-400 mb-8">
              Connect with our team and discover how 100+ years of combined value realization
              expertise can help you recover lost revenue.
            </p>
            <button className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              <span>Start Your Value Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
