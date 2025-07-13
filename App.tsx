import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import LeadershipSection from './components/LeadershipSection';
import EducationSection from './components/EducationSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <PortfolioSection />
        <LeadershipSection />
        <EducationSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;