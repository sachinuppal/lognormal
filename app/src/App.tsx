import { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

    return () => {
      lenisRef.current?.destroy();
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

// Main App Component
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
