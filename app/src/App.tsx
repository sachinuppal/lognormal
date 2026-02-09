import { useEffect, useLayoutEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Home Page Sections
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ValueFlow from './sections/ValueFlow';
import Problem from './sections/Problem';
import Analysis from './sections/Analysis';
import Platform from './sections/Platform';
import Tools from './sections/Tools';
import Impact from './sections/Impact';
import Deployment from './sections/Deployment';
import Solutions from './sections/Solutions';
import CTA from './sections/CTA';
import BookDemo from './sections/BookDemo';
import Footer from './sections/Footer';

// New Pages
import Pricing from './pages/Pricing';
import About from './pages/About';
import Architecture from './pages/Architecture';
import CaseStudyCEE from './pages/CaseStudyCEE';
import CaseStudyGermany from './pages/CaseStudyGermany';
import CaseStudySouthEurope from './pages/CaseStudySouthEurope';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataProcessingAgreement from './pages/DataProcessingAgreement';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component — kills stale ScrollTriggers and resets scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect runs SYNCHRONOUSLY after DOM mutation, before browser paint
  useLayoutEffect(() => {
    // Kill every ScrollTrigger so sections re-create them fresh
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Destroy Lenis first — it intercepts all scroll methods
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.destroy();
      (window as Window & { __lenis?: Lenis }).__lenis = undefined;
    }

    // Force scroll to top synchronously (before paint)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // Separate useEffect for async tasks (delayed scroll fallback & ScrollTrigger refresh)
  useEffect(() => {
    // Post-paint scroll reset fallback
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    // Allow the new page's effects to create their ScrollTriggers, then refresh
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(refreshTimer);
  }, [pathname]);

  return null;
};

// Home Page Component
const HomePage = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // Expose Lenis globally so ScrollToTop can destroy it before scroll reset
    (window as Window & { __lenis?: Lenis }).__lenis = lenisRef.current;

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after Lenis initializes so all section triggers register
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      clearTimeout(refreshTimer);
      lenisRef.current?.destroy();
      (window as Window & { __lenis?: Lenis }).__lenis = undefined;
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />

      <main>
        <Hero />
        <ValueFlow />
        <Problem />
        <Analysis />
        <Platform />
        <Tools />
        <Impact />
        <Deployment />
        <Solutions />
        <CTA />
        <BookDemo />
      </main>

      <Footer />
    </div>
  );
};

// ... (existing imports)

import { ConsentProvider } from './context/ConsentContext';
import ConsentManager from './components/ConsentManager';
import ScriptsManager from './components/ScriptsManager';

// ... (existing imports)

// Main App Component
function App() {
  return (
    <ConsentProvider>
      <ScriptsManager />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/case-studies/igaming-giant-cee" element={<CaseStudyCEE />} />
          <Route path="/case-studies/top-bookmarker-germany" element={<CaseStudyGermany />} />
          <Route path="/case-studies/igaming-innovators-south-europe" element={<CaseStudySouthEurope />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-processing-agreement" element={<DataProcessingAgreement />} />
        </Routes>
        <ConsentManager />
      </Router>
    </ConsentProvider>
  );
}

export default App;
