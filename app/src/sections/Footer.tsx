import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Shield, CheckCircle, Lock, Mail, Phone, MapPin } from 'lucide-react';
import Lenis from 'lenis';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const platformLinks = [
    { label: 'Omnis', href: '#tools' },
    { label: 'Converse', href: '#tools' },
    { label: 'Narratives', href: '#tools' },
    { label: 'Pulse', href: '#tools' },
    { label: 'Data Cube', href: '#tools' },
    { label: 'BI Reports', href: '#tools' },
  ];

  const solutionLinks = [
    { label: 'For Startups', href: '#solutions' },
    { label: 'For Growing Operators', href: '#solutions' },
    { label: 'For Enterprises', href: '#solutions' },
    { label: 'For B2B Providers', href: '#solutions' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Impact', href: '/impact' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Architecture', href: '/architecture' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Data Processing', href: '/data-processing-agreement' },
  ];

  const scrollToTopForce = () => {
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.destroy();
      (window as Window & { __lenis?: Lenis }).__lenis = undefined;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate('/' + href);
      return;
    }
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/falcondive-logo-white.svg"
                alt="FalconDive"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm mb-2 font-mono">
              AI-Powered Decision Intelligence for iGaming operators.
            </p>
            <p className="text-gray-600 text-xs mb-4">
              A product of <span className="text-gray-400">Lognormal Analytics</span>
            </p>

            {/* Company Registration */}
            <div className="text-gray-600 font-mono text-xs space-y-1.5 mb-4 border-t border-gray-900 pt-4">
              <p className="text-gray-400 font-bold text-[10px] tracking-wider mb-2">COMPANY</p>
              <p className="text-gray-500">Lognormal Analytics Pvt. Ltd.</p>
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3 h-3 text-gray-700 mt-0.5 flex-shrink-0" />
                <p>402, 4th Floor, CSR Estate, Plot No.8, Sector 1, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana 500081, India</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-gray-600 font-mono text-xs space-y-1.5">
              <p className="text-gray-400 font-bold text-[10px] tracking-wider mb-2">CONTACT</p>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-gray-700" />
                <a href="mailto:info@lognormal.io" className="hover:text-[#00f0ff] transition-colors">info@lognormal.io</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-gray-700" />
                <span>(+91) 40-4896-0174</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-mono text-sm text-[#00f0ff] mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-mono text-sm text-[#00f0ff] mb-4">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-sm text-[#00f0ff] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={scrollToTopForce}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-mono text-sm text-[#00f0ff] mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={scrollToTopForce}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Compliance Badges */}
            <h4 className="font-mono text-[10px] text-gray-600 tracking-wider mb-3">COMPLIANCE</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Shield, label: 'ISO 27001' },
                { icon: CheckCircle, label: 'ISO 9001' },
                { icon: Lock, label: 'GDPR' },
                { icon: Shield, label: 'E2E' },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1 bg-[#0f1724]/60 border border-gray-800/50 px-2 py-1 rounded text-[10px] text-gray-600 font-mono">
                  <badge.icon className="w-2.5 h-2.5" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 font-mono text-xs">
            © 2026 Lognormal Analytics. All rights reserved. | falcondive.io | lognormal.io
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-600">
            <a
              href="https://x.com/FalconDive_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f0ff] transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/falcon-dive/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f0ff] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/falcon.dive?igsh=Z2p0NDJhd242MXbi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f0ff] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
