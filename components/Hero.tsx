import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Menu } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <div className="flex items-center gap-2 text-white font-display font-bold text-xl tracking-tight">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
               <span className="text-white text-lg">U</span>
             </div>
             One Tapp University
           </div>
           
           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
             <button onClick={() => scrollToSection('curriculum')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Curriculum</button>
             <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Pricing</button>
             <button 
               onClick={onRegister} 
               className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg transition-all border border-brand-500 shadow-lg shadow-brand-500/20 font-semibold hover:scale-105 active:scale-95"
             >
               Register Now
             </button>
           </div>
           
           {/* Mobile menu placeholder - hidden for now */}
           <div className="md:hidden text-white">
             <Menu className="w-6 h-6" />
           </div>
        </div>
      </nav>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-sm text-red-400 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            High Demand: Cohort filling fast
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-tight">
            Build Real <span className="text-brand-500">AI Systems</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 font-medium mb-10 tracking-wide">
             Not Just Prompts
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            A Guided Weekend + Build Sprint on Generative & Agentic AI.
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

          <div className="mt-8 flex items-center justify-center gap-3 animate-fade-in">
             <div className="flex -space-x-2">
                 {[
                   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=32&h=32",
                   "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=32&h=32",
                   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=32&h=32",
                   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32"
                 ].map((src, i) => (
                    <img key={i} src={src} alt="User" className="w-6 h-6 rounded-full border border-black object-cover" />
                 ))}
             </div>
             <p className="text-xs text-slate-400 font-medium">
               <span className="text-brand-400 font-bold">24 people</span> are viewing this page
             </p>
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