import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Cloud, CheckCircle, Calendar } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';

gsap.registerPlugin(ScrollTrigger);

const BookDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.demo-content', { opacity: 1, y: 0 });
      gsap.set('.cert-badge', { opacity: 1, y: 0 });
      
      gsap.from('.demo-content', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.cert-badge', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cert-badges',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    { icon: Shield, label: 'ISO 27001', color: 'text-blue-400' },
    { icon: CheckCircle, label: 'ISO 9001', color: 'text-green-400' },
    { icon: Lock, label: 'GDPR Compliant', color: 'text-purple-400' },
    { icon: Shield, label: 'E2E Encryption', color: 'text-amber-400' },
    { icon: Cloud, label: 'AWS Cloud', color: 'text-orange-400' },
  ];

  return (
    <section
      ref={sectionRef}
      id="book-demo"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f1117] to-[#0a0a0f]" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="demo-content" style={{ opacity: 1 }}>
            <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
              [BOOK DEMO] SCHEDULE_WALKTHROUGH
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              See FalconDive in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500">
                Action
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Schedule a personalized demo with our team. We'll show you how FalconDive 
              detects revenue leakages, diagnoses root causes, and drives measurable outcomes.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#00f0ff] font-mono text-sm">30</span>
                </div>
                <span className="text-gray-400 text-sm">Minute personalized walkthrough</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#00f0ff] font-mono text-sm">1:1</span>
                </div>
                <span className="text-gray-400 text-sm">Direct conversation with our experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00f0ff]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#00f0ff] font-mono text-sm">Q&A</span>
                </div>
                <span className="text-gray-400 text-sm">Get your questions answered</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-[#00f0ff] text-black font-mono font-bold tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              <span>BOOK DEMO NOW</span>
            </button>
          </div>

          {/* Right - Calendly Inline */}
          <div className="demo-content" style={{ opacity: 1 }}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://calendly.com/lognormal-sales/falcondive-walk-through"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book FalconDive Demo"
                className="bg-white"
              />
            </div>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="cert-badges mt-16">
          <p className="text-center text-gray-500 text-xs font-mono mb-6 tracking-wider">
            TRUSTED BY INDUSTRY LEADERS // ENTERPRISE-GRADE SECURITY
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-badge flex items-center gap-2 bg-[#1a1a24] border border-gray-800 px-4 py-3 rounded-xl hover:border-gray-700 transition-colors"
                style={{ opacity: 1 }}
              >
                <cert.icon className={`w-5 h-5 ${cert.color}`} />
                <span className="text-gray-300 text-sm font-medium">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default BookDemo;
