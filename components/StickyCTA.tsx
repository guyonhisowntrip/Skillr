import React, { useEffect, useState } from 'react';
import { Button } from './Button';

interface StickyCTAProps {
  onRegister: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onRegister }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show earlier to ensure it's visible when content starts
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hide component if not scrolled
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] bg-black/90 backdrop-blur-md border-t border-brand-500/20 py-3 animate-fade-in-up shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center">
              <img 
                src="https://storage.googleapis.com/onetapp/brand%20%26%20favicon/Button.svg" 
                alt="One Tapp University" 
                className="h-8 w-auto object-contain" 
              />
           </div>
        </div>
        <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-end items-center">
          <span className="hidden lg:inline text-xs text-slate-400 font-medium">Upcoming cohort dates to be decided</span>
          <Button variant="primary" className="py-2 text-sm bg-white text-black hover:bg-slate-200 border-none font-bold shadow-lg shadow-white/10" onClick={onRegister}>
            Register Your Interest
          </Button>
        </div>
      </div>
    </div>
  );
};