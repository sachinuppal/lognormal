import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

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
    { label: 'About Us', href: '/about', scrollToTop: true },
    { label: 'Pricing', href: '/pricing', scrollToTop: true },
    { label: 'Architecture', href: '/architecture', scrollToTop: true },
    { label: 'Privacy Policy', href: '/privacy-policy', scrollToTop: true },
    { label: 'Data Processing', href: '/data-processing-agreement', scrollToTop: true },
  ];

  const caseStudyLinks = [
    { label: 'iGaming Giant CEE', href: '/case-studies/igaming-giant-cee', scrollToTop: true },
    { label: 'Top Bookmarker Germany', href: '/case-studies/top-bookmarker-germany', scrollToTop: true },
    { label: 'iGaming Innovators South Europe', href: '/case-studies/igaming-innovators-south-europe', scrollToTop: true },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      e.preventDefault();
      navigate('/' + href);
      return;
    }
    // On home page - prevent default and scroll to section
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/falcondive-logo-white.svg"
                alt="FalconDive"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm mb-4 font-mono">
              AI-Powered Decision Intelligence for iGaming operators.
            </p>
            <div className="text-gray-600 font-mono text-xs space-y-1">
              <p>info@falcondive.io</p>
              <p>(+91) 4048960174</p>
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
                    onClick={() => {
                      if (link.scrollToTop) {
                        window.scrollTo(0, 0);
                      }
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Links */}
          <div>
            <h4 className="font-mono text-sm text-[#00f0ff] mb-4">CASE STUDIES</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              {caseStudyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (link.scrollToTop) {
                        window.scrollTo(0, 0);
                      }
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-700 font-mono text-xs">
            [EOF] FALCONDIVE_SYSTEMS © 2026 // LIVE
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
