import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Button } from './Button';

interface HeroSMBProps {
  onRegister: () => void;
}

export const HeroSMB: React.FC<HeroSMBProps> = ({ onRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleRegisterClick = () => {
    setIsMobileMenuOpen(false);
    onRegister();
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
           <div className="flex items-center z-[70] relative">
             <img 
               src="https://storage.googleapis.com/onetapp/brand%20%26%20favicon/Button.svg" 
               alt="One Tapp University" 
               className="h-10 md:h-12 w-auto object-contain"
             />
           </div>
           
           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
             <button onClick={() => scrollToSection('program-overview')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Program</button>
             <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Pricing</button>
             <button onClick={() => scrollToSection('trainer-section')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">About Us</button>
             <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">FAQ</button>
             <button 
               onClick={onRegister} 
               className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg transition-all border border-brand-500 shadow-lg shadow-brand-500/20 font-semibold hover:scale-105 active:scale-95"
             >
               Register Your Interest
             </button>
           </div>
           
           {/* Mobile menu toggle */}
           <button 
             className="md:hidden text-white relative z-[70] p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[65] md:hidden transition-all duration-300 flex flex-col justify-center items-center ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-medium w-full px-8">
             <button 
               onClick={() => scrollToSection('program-overview')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               Program
             </button>
             <button 
               onClick={() => scrollToSection('pricing')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               Pricing
             </button>
             <button 
               onClick={() => scrollToSection('trainer-section')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               About Us
             </button>
             <button 
               onClick={() => scrollToSection('faq')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               FAQ
             </button>
             <div className="w-full h-px bg-white/10 my-2" />
             <button 
               onClick={handleRegisterClick} 
               className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-500/20 w-full"
             >
               Register Your Interest
             </button>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
            Make AI work for your business.
            <br />
            <span className="text-brand-500">Move beyond the hype.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4 max-w-3xl mx-auto">
            Learn how use AI to save time, reduce manual work, and improve everyday business operations — without being technical.
          </p>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            30-minute sessions. Real tools. Real usecases.
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">Up to 40%</div>
              <div className="text-sm text-slate-400">time savings in knowledge work and repetitive tasks</div>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <DollarSign className="w-8 h-8 text-brand-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">Up to 20%</div>
              <div className="text-sm text-slate-400">reduction in operational costs</div>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">Up to 50%</div>
              <div className="text-sm text-slate-400">faster customer response times</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="group min-w-[180px]"
              onClick={() => scrollToSection('program-structure')}
            >
              View Program Structure
            </Button>
            <Button 
              variant="outline" 
              className="group min-w-[180px]"
              onClick={() => scrollToSection('pricing')}
            >
              See Pricing
            </Button>
            <Button 
              variant="secondary" 
              className="group min-w-[200px]"
              onClick={onRegister}
            >
              Join the next cohort
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

