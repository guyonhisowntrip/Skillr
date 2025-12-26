import React from 'react';
import { Check, Users, Flame } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
  onRegister: (type: 'individual' | 'team') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRegister }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get access to the full Masterclass and 2-Week Clinic at a fraction of the standard cost.
            <br className="hidden md:block" />
            <span className="text-brand-400 font-medium">Limited time early-bird offer.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Pass */}
          <div className="bg-black/40 border border-slate-800 rounded-3xl p-8 relative hover:border-brand-500/50 transition-all group flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl shadow-lg shadow-brand-500/20">
              70% OFF
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Early Bird Pass</h3>
              <p className="text-slate-500 text-sm mb-3">For individuals ready to build.</p>
              
              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-xs font-bold text-red-400">
                <Flame className="w-3 h-3" />
                Only 9 spots left at this price
              </div>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">₹1,500</span>
              <span className="text-slate-600 line-through text-lg">₹5,000</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Access to 2-Day Live Masterclass",
                "Entry to 2-Week Execution Clinic",
                "Lifetime Recording Access",
                "All Templates, Prompts & Scripts",
                "Certificate of Completion"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-brand-500 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="secondary" fullWidth onClick={() => onRegister('individual')} className="bg-white hover:bg-slate-100 text-black border-none font-bold">
              Grab Early Bird Seat
            </Button>
          </div>

          {/* Team Pass */}
          <div className="bg-gradient-to-b from-slate-800/50 to-black/40 border border-slate-700 rounded-3xl p-8 relative hover:border-purple-500/50 transition-all overflow-hidden flex flex-col group">
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl z-10 shadow-lg shadow-purple-500/20">
              80% OFF
            </div>

            <div className="mb-8 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Team Bundle</h3>
                <span className="bg-purple-900/50 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-500/20">
                  3+ MEMBERS
                </span>
              </div>
              <p className="text-slate-500 text-sm">Best value for learning together.</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2 relative z-10">
              <span className="text-4xl font-bold text-white">₹1,000</span>
              <span className="text-slate-500 text-sm font-medium">/ member</span>
              <span className="text-slate-600 line-through text-lg ml-2">₹5,000</span>
            </div>

            <ul className="space-y-4 mb-8 relative z-10 flex-grow">
              {[
                "Everything in Early Bird Pass",
                "Dedicated Private Group Channel",
                "Priority Review for Team Projects",
                "Team Alignment Session",
                "Bulk Invoice Available"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-purple-500 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="primary" fullWidth onClick={() => onRegister('team')} className="relative z-10 bg-purple-600 hover:bg-purple-700 border-transparent text-white shadow-lg shadow-purple-900/20 font-bold">
              <Users className="w-4 h-4 mr-2" />
              Register Team
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
                Prices inclusive of GST. Need a custom enterprise plan? <a href="#" className="text-slate-400 underline hover:text-white">Contact Sales</a>
            </p>
        </div>
      </div>
    </section>
  );
};