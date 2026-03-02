import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  // Row 1
  { name: 'Fortuna Entertainment Group', logo: '/images/client-logos/FEG.png' },
  { name: 'Tipico', logo: '/images/client-logos/tipico.png' },
  { name: 'Entain', logo: '/images/client-logos/entain.png' },
  { name: 'Sportsbet.io', logo: '/images/client-logos/sportsbet.png' },
  { name: 'DAZN', logo: '/images/client-logos/dazn.png' },
  { name: 'Kaizen Gaming', logo: '/images/client-logos/kaizen.png' },
  // Row 2
  { name: '888 Holdings', logo: '/images/client-logos/888.com-logo.png' },
  { name: 'William Hill', logo: '/images/client-logos/williamhill.png' },
  { name: 'BetVictor', logo: '/images/client-logos/betvictor.jpeg' },
  { name: 'Bitcasino.io', logo: '/images/client-logos/bitcasino.png' },
  { name: 'OlyBet', logo: '/images/client-logos/olybet.png' },
  { name: 'PlayStar', logo: '/images/client-logos/playstar.png' },
];

const ClientLogos = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.client-logos-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );

      // Staggered reveal for logo cards
      gsap.fromTo(
        '.logo-card',
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5, ease: 'power2.out',
          stagger: 0.07,
          scrollTrigger: { trigger: '.logo-grid', start: 'top 85%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const row1 = clients.slice(0, 6);
  const row2 = clients.slice(6, 12);

  return (
    <section
      ref={sectionRef}
      id="client-logos"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Tag */}
        <div className="client-logos-heading text-center mb-12">
          <span className="font-mono text-xs tracking-[0.2em] text-[#00f0ff]/60 mb-4 block">
            [SOCIAL_PROOF] TRUSTED_BY_INDUSTRY_LEADERS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-[#00f0ff]">Billion-Dollar</span> Enterprises
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Our clients include publicly listed, regulated enterprises who rely on deep expertise,
            security-first architecture, and measurable outcomes.
          </p>
        </div>

        {/* Two-Row Logo Grid */}
        <div className="logo-grid">
          {/* Row 1 */}
          <div className="logo-row">
            {row1.map((client) => (
              <div key={client.name} className="logo-card">
                <div className="client-card-shimmer group cursor-pointer">
                  <div className="client-card-content">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="logo-row">
            {row2.map((client) => (
              <div key={client.name} className="logo-card">
                <div className="client-card-shimmer group cursor-pointer">
                  <div className="client-card-content">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        /* === Two-row grid === */
        .logo-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .logo-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .logo-card {
          flex-shrink: 0;
        }

        /* === Register custom property for conic gradient animation === */
        @property --shimmer-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes shimmer-rotate {
          from { --shimmer-angle: 0deg; }
          to   { --shimmer-angle: 360deg; }
        }

        /* === DUAL-TONE SHIMMER (SILVER + GOLD) === */
        .client-card-shimmer {
          position: relative;
          background: rgba(15, 23, 42, 0.85);
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          isolation: isolate;
          width: 176px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .client-card-shimmer::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          background: conic-gradient(
            from var(--shimmer-angle, 0deg),
            transparent 0%,
            transparent 20%,
            #708090 24%,
            #c0c0c0 27%,
            #f0f0f0 29%,
            #c0c0c0 31%,
            #708090 34%,
            transparent 38%,
            transparent 45%,
            #b8860b 49%,
            #ffd700 52%,
            #fff8dc 54%,
            #ffd700 56%,
            #b8860b 59%,
            transparent 63%,
            transparent 100%
          );
          animation: shimmer-rotate 5s linear infinite;
          z-index: -2;
        }

        .client-card-shimmer::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.95);
          z-index: -1;
        }

        .client-card-shimmer:hover::before {
          animation-duration: 2.5s;
          filter: brightness(1.4);
        }

        .client-card-shimmer:hover {
          box-shadow:
            0 0 20px rgba(255, 215, 0, 0.1),
            0 0 20px rgba(192, 192, 192, 0.08),
            0 0 50px rgba(255, 215, 0, 0.05);
          transform: translateY(-2px) scale(1.05);
          transition: all 0.3s ease;
        }

        /* === Logo image styling === */
        .client-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          border-radius: 8px;
          overflow: hidden;
        }

        .client-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px 14px;
          background: white;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .client-card-shimmer:hover .client-logo-img {
          transform: scale(1.05);
        }

        /* Responsive: stack smaller on mobile */
        @media (max-width: 768px) {
          .client-card-shimmer {
            width: 140px;
            height: 64px;
          }
          .logo-row {
            gap: 12px;
          }
          .client-logo-img {
            padding: 6px 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
