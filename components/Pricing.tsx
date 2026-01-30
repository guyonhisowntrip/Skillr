import React from 'react';
import { Check, X, Flame, Crown, Zap } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
  onRegister: (type: 'weekend' | 'builder') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRegister }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Register Your Interest</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Register your interest to receive teaser slides and YouTube videos covering our workflows and discussions.
            <br className="hidden md:block" />
            <span className="text-brand-400 font-medium">Choose to pay once you understand what we're offering.</span>
            <br className="hidden md:block" />
            <span className="text-slate-500 text-base">Upcoming cohort dates to be decided.</span>
          </p>
          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-amber-200">
              <span className="font-semibold">Note:</span> The prices shown below were for the Jan 31st cohort (now closed). 
              The next cohort will have updated pricing announced soon.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Option 1: Weekend Pass (Basic) */}
          <div className="order-2 md:order-1 bg-black/40 border border-slate-800 rounded-3xl p-8 relative hover:border-slate-600 transition-all group flex flex-col h-full opacity-90 hover:opacity-100">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-[10px] font-bold px-3 py-1 rounded-b-lg border-b border-x border-slate-700">
              LEARNING ONLY
            </div>

            <div className="mb-6 mt-4">
              <h3 className="text-xl font-bold text-white mb-2">Weekend Pass</h3>
              <p className="text-slate-500 text-sm">For those who want to watch & learn.</p>
            </div>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">₹199</span>
              <span className="text-sm text-slate-400 font-medium">+ GST</span>
              <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-xs font-bold rounded ml-2">70% OFF</span>
            </div>
            <div className="text-slate-600 line-through text-sm mb-8">Original Price: ₹999</div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Includes</div>
              <ul className="space-y-3">
                {[
                  "2-Day Live Training (Sat & Sun)",
                  "Access to Templates & Prompts",
                  "Q&A during sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <Check className="w-5 h-5 text-slate-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/5 my-4"></div>
              
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Missing</div>
              <ul className="space-y-3 opacity-60">
                 <li className="flex items-start text-sm text-slate-500">
                    <X className="w-5 h-5 text-red-900/50 mr-3 shrink-0" />
                    No Execution Clinic
                 </li>
                 <li className="flex items-start text-sm text-slate-500">
                    <X className="w-5 h-5 text-red-900/50 mr-3 shrink-0" />
                    No Mentor Reviews
                 </li>
                 <li className="flex items-start text-sm text-slate-500">
                    <X className="w-5 h-5 text-red-900/50 mr-3 shrink-0" />
                    No Certification
                 </li>
              </ul>
            </div>

            <Button variant="outline" fullWidth onClick={() => onRegister('weekend')} className="border-slate-700 hover:bg-slate-800 hover:text-white">
              Register Interest for Weekend Pass
            </Button>
          </div>

          {/* Option 2: Builder Pass (Premium) - Highlighted */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-brand-900/20 to-black border border-brand-500/50 rounded-3xl p-8 relative shadow-2xl shadow-brand-900/20 transform md:scale-105 z-10 flex flex-col h-full">
            {/* Badges */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-purple-500" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Crown className="w-3.5 h-3.5" />
              RECOMMENDED FOR BUILDERS
            </div>
            <div className="absolute top-4 right-4 animate-pulse">
               <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
               </span>
            </div>

            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
                The Builder Pass
              </h3>
              <p className="text-brand-200 text-sm">For those who want results & certification.</p>
            </div>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white tracking-tight">₹999</span>
              <span className="text-sm text-slate-400 font-medium">+ GST</span>
              <span className="px-2 py-0.5 bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold rounded ml-2">80% OFF</span>
            </div>
             <div className="text-slate-500 line-through text-sm mb-8">Original Price: ₹4,999</div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-sm text-white font-medium bg-brand-500/10 p-2 rounded-lg border border-brand-500/20">
                  <Check className="w-5 h-5 text-brand-400 mr-3 shrink-0" />
                  Includes Weekend Pass Access
              </li>
              {[
                "2-Week Guided Execution Clinic",
                "Personal Mentor Review of Your Build",
                "Private Builder Community Access",
                "Certificate of Completion",
                "Lifetime Recording Access"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-200">
                  <Check className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="primary" fullWidth onClick={() => onRegister('builder')} className="bg-white text-black hover:bg-slate-200 font-bold py-4 text-lg shadow-xl shadow-white/10 border-none">
              <Zap className="w-5 h-5 mr-2 text-brand-600" />
              Register Interest for Builder Pass
            </Button>
            
            <p className="text-center text-xs text-slate-500 mt-4">
              Most popular choice among professionals
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
                Prices exclusive of taxes. Need a custom enterprise plan? <a href="mailto:workshops@onetappuni.in" className="text-slate-400 underline hover:text-white">Contact Sales</a>
            </p>
        </div>
      </div>
    </section>
  );
};