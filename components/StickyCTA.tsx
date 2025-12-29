import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Clock } from 'lucide-react';

interface StickyCTAProps {
  onRegister: () => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ h: 11, m: 45, s: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // Show earlier to ensure it's visible when content starts
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Timer logic simulation
    const interval = setInterval(() => {
       setTimeLeft(prev => {
         let { h, m, s } = prev;
         if (s > 0) s--;
         else {
            s = 59;
            if (m > 0) m--;
            else {
                m = 59;
                if (h > 0) h--;
                else {
                    // Reset for demo purposes to keep urgency alive
                    h = 11; m = 59;
                }
            }
         }
         return { h, m, s };
       });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

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
           <div className="flex items-center gap-2 text-amber-400 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-500/30 text-xs font-bold uppercase tracking-wide animate-pulse">
             <Clock className="w-3 h-3" />
             <span>Prices increase in {String(timeLeft.h).padStart(2,'0')}:{String(timeLeft.m).padStart(2,'0')}:{String(timeLeft.s).padStart(2,'0')}</span>
           </div>
        </div>
        <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-end items-center">
          <span className="hidden lg:inline text-xs text-slate-400 font-medium"> <span className="text-red-400 font-bold">5 spots</span> left at this price</span>
          <Button variant="primary" className="py-2 text-sm bg-white text-black hover:bg-slate-200 border-none font-bold shadow-lg shadow-white/10" onClick={onRegister}>
            Secure Your Spot
          </Button>
        </div>
      </div>
    </div>
  );
};