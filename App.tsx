import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Curriculum } from './components/Curriculum';
import { Instructors } from './components/Instructors';
import { Pricing } from './components/Pricing';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className={`font-bold text-2xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Skillr<span className="text-indigo-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
             <button onClick={() => document.getElementById('curriculum')?.scrollIntoView({behavior: 'smooth'})} className={`text-sm font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Curriculum</button>
             <button onClick={scrollToPricing} className={`text-sm font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Pricing</button>
             <Button size="sm" onClick={scrollToPricing}>Register Now</Button>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Curriculum />
      <Instructors />
      <Pricing />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;