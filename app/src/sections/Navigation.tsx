import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, Target } from 'lucide-react';
import CalendlyModal from '../components/CalendlyModal';
import LeadCaptureModal from '../components/LeadCaptureModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#platform', label: 'PLATFORM', isAnchor: true },
    { href: '#solutions', label: 'SOLUTIONS', isAnchor: true },
    { href: '#impact', label: 'IMPACT', isAnchor: true },
    { href: '#deployment', label: 'DEPLOY', isAnchor: true },
    // { href: '/case-studies', label: 'CASE STUDIES', isAnchor: false }, // Hidden per client feedback
    { href: '/pricing', label: 'PRICING', isAnchor: false },
    { href: '/about', label: 'ABOUT', isAnchor: false },
    { href: '/architecture', label: 'ARCHITECTURE', isAnchor: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isAnchor) {
      e.preventDefault();
      const targetId = link.href.replace('#', '');

      if (!isHomePage) {
        // Signal to ScrollToTop: do NOT reset scroll — we have a target
        (window as Window & { __pendingScrollTarget?: string }).__pendingScrollTarget = targetId;
        navigate('/');
      } else {
        // Already on homepage — scroll directly
        const element = document.getElementById(targetId);
        if (element) {
          const lenis = (window as Window & { __lenis?: any }).__lenis;
          if (lenis) {
            lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
      setIsMobileMenuOpen(false);
    } else {
      // For page links, scroll to top after navigation
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800'
        : 'border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/falcondive-logo-white.svg"
            alt="FalconDive"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          {/* AI-First Badge */}
          <span className="hidden sm:flex items-center gap-1.5 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-2 py-1 rounded-full">
            <Zap className="w-3 h-3 text-[#00f0ff]" />
            <span className="text-[10px] font-mono text-[#00f0ff]">AI-FIRST</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-3 text-xs font-mono text-gray-400">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="hover:text-[#00f0ff] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="hover:text-[#00f0ff] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="hidden xl:flex gap-2 items-center">
          <Link
            to="https://platform.falcondive.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-gray-400 hover:text-white transition-colors"
          >
            LOGIN
          </Link>
          <button
            onClick={() => setIsLeadModalOpen(true)}
            className="px-2 py-1.5 bg-[#00f0ff]/10 border border-[#00f0ff]/50 text-[#00f0ff] font-mono text-[10px] hover:bg-[#00f0ff]/20 transition-all animate-pulse-glow rounded whitespace-nowrap flex items-center gap-1"
          >
            <Target className="w-3 h-3" />
            UNCOVER REVENUE LEAKAGES
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="block font-mono text-xs text-gray-400 hover:text-[#00f0ff] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-mono text-xs text-gray-400 hover:text-[#00f0ff] transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-3 border-t border-gray-800 space-y-2">
              <a
                href="https://platform.falcondive.io/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-xs text-gray-400"
              >
                LOGIN
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLeadModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#00f0ff]/10 border border-[#00f0ff]/50 text-[#00f0ff] font-mono text-xs rounded"
              >
                <Target className="w-3 h-3" />
                UNCOVER REVENUE LEAKAGES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      {/* Lead Capture Modal */}
      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} triggerAction="Nav CTA" />
    </nav>
  );
};

export default Navigation;
