import React from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 pt-20 pb-20 lg:pt-32 lg:pb-32 min-h-[80vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-300 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next Cohort Starts Jan 5th
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            No Fluff. No Mastery. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Just Real Workflows.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We don't promise you'll become an AI Master overnight. We promise you'll become comfortable building tools that actually solve your problems. Join the workshop designed for utility, not theory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToPricing} className="group px-8 py-4 text-lg">
              Secure Your Seat
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 border-t border-slate-800/60 pt-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-800/50 rounded-lg">
                <Calendar className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">2 Weeks</p>
                <p className="text-slate-400 text-sm">Guided Execution</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-800/50 rounded-lg">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">50+ Peers</p>
                <p className="text-slate-400 text-sm">Community Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};