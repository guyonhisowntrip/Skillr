import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
             <button onClick={() => scrollToSection('curriculum')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Curriculum</button>
             <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Pricing</button>
             <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Talk to Us</button>
             <button 
               onClick={onRegister} 
               className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg transition-all border border-brand-500 shadow-lg shadow-brand-500/20 font-semibold hover:scale-105 active:scale-95"
             >
               Register Now
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
               onClick={() => scrollToSection('curriculum')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               Curriculum
             </button>
             <button 
               onClick={() => scrollToSection('pricing')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               Pricing
             </button>
             <button 
               onClick={() => scrollToSection('faq')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               FAQ
             </button>
             <button 
               onClick={() => scrollToSection('contact')} 
               className="text-slate-300 hover:text-white transition-colors w-full text-center py-2"
             >
               Talk to Us
             </button>
             <div className="w-full h-px bg-white/10 my-2" />
             <button 
               onClick={handleRegisterClick} 
               className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-500/20 w-full"
             >
               Register Now
             </button>
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Next Cohort Badge */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-bold uppercase tracking-wide animate-fade-in backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              🖥️ 100% Virtual / Online
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Cohort: Jan 31 &amp; Feb 1 • Limited seats • Filling fast
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-tight">
            Build Real <span className="text-brand-500">AI Systems</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 font-medium mb-10 tracking-wide">
             Not Just Prompts
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            A Guided <span className="text-white font-medium">Virtual Weekend</span> + <span className="text-white font-medium">Virtual Build Sprint</span> on Generative & Agentic AI.
            <br />
            <span className="text-slate-500">For non-technical professionals, students, and builders.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              className="group min-w-[180px]"
              onClick={() => scrollToSection('pricing')}
            >
              View Pricing
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="min-w-[180px]"
              onClick={() => scrollToSection('curriculum')}
            >
              View Curriculum
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-slate-500 text-sm font-medium uppercase tracking-wider">
            <div>No Coding Required</div>
            <div>Live Mentorship</div>
            <div>Real Projects</div>
            <div>Lifetime Access</div>
          </div>
        </div>
      </div>
    </section>
  );
};