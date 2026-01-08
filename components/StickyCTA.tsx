import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Clock } from 'lucide-react';

interface StickyCTAProps {
  onRegister: () => void;
}

// Target date: January 14th at 10 PM (adjust year as needed)
// Format: Year, Month (0-indexed), Day, Hour, Minute
const getTargetDate = (): Date => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetDate = new Date(currentYear, 0, 14, 22, 0, 0); // Jan 14, 10 PM
  
  // If the date has passed this year, use next year
  if (targetDate < now) {
    return new Date(currentYear + 1, 0, 14, 22, 0, 0);
  }
  
  return targetDate;
};

const calculateTimeLeft = (targetDate: Date): { d: number; h: number; m: number; s: number; expired: boolean } => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { d: 0, h: 0, m: 0, s: 0, expired: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { d: days, h: hours, m: minutes, s: seconds, expired: false };
};

const formatTargetDate = (targetDate: Date): string => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  };
  return targetDate.toLocaleDateString('en-US', options);
};

export const StickyCTA: React.FC<StickyCTAProps> = ({ onRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number; expired: boolean }>({ d: 0, h: 0, m: 0, s: 0, expired: false });
  const [targetDate] = useState<Date>(getTargetDate());

  useEffect(() => {
    const handleScroll = () => {
      // Show earlier to ensure it's visible when content starts
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Calculate initial time left
    setTimeLeft(calculateTimeLeft(targetDate));
    
    // Update timer every second
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      
      // If expired, stop the interval
      if (newTimeLeft.expired) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [targetDate]);

  // Hide component if expired or not scrolled
  if (!isVisible || timeLeft.expired) return null;

  // Format time display: show days if > 0, otherwise show hours:minutes:seconds
  const timeDisplay = timeLeft.d > 0
    ? `${timeLeft.d}d ${String(timeLeft.h).padStart(2, '0')}:${String(timeLeft.m).padStart(2, '0')}:${String(timeLeft.s).padStart(2, '0')}`
    : `${String(timeLeft.h).padStart(2, '0')}:${String(timeLeft.m).padStart(2, '0')}:${String(timeLeft.s).padStart(2, '0')}`;

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
           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
             <div className="flex items-center gap-2 text-amber-400 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-500/30 text-xs font-bold uppercase tracking-wide animate-pulse">
               <Clock className="w-3 h-3" />
               <span>Prices increase in {timeDisplay}</span>
             </div>
             <span className="text-[10px] sm:text-xs text-slate-500 ml-0 sm:ml-1 font-medium">
               ({formatTargetDate(targetDate)})
             </span>
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