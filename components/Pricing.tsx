import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Clock } from 'lucide-react';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-900 text-white" id="pricing">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Invest in Skills, Not Credentials" 
          subtitle="Value beyond paper. Prices in INR."
          light={true}
        />

        {/* Scarcity Banner */}
        <div className="max-w-4xl mx-auto bg-indigo-900/40 border border-indigo-500/30 rounded-lg p-4 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-indigo-400" />
            <div>
              <p className="font-bold text-indigo-100">Early Bird Offer Ends Soon</p>
              <p className="text-xs text-indigo-300">Save 30% when you register before Sunday</p>
            </div>
          </div>
          <div className="flex gap-2 font-mono text-xl font-bold">
            <div className="bg-indigo-950 px-3 py-1 rounded text-indigo-200">{timeLeft.days}d</div>
            <div className="bg-indigo-950 px-3 py-1 rounded text-indigo-200">:</div>
            <div className="bg-indigo-950 px-3 py-1 rounded text-indigo-200">{timeLeft.hours}h</div>
            <div className="bg-indigo-950 px-3 py-1 rounded text-indigo-200">:</div>
            <div className="bg-indigo-950 px-3 py-1 rounded text-indigo-200">{timeLeft.minutes}m</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Standard Pass</h3>
              <p className="text-slate-400 text-sm">For individuals getting started</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹2,000</span>
              <span className="text-slate-500 line-through ml-3 text-lg">₹3,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-slate-300 text-sm"><Check className="h-5 w-5 text-indigo-500 flex-shrink-0" /> Full 2-Day Workshop Access</li>
              <li className="flex gap-3 text-slate-300 text-sm"><Check className="h-5 w-5 text-indigo-500 flex-shrink-0" /> Workbook & Prompt Templates</li>
              <li className="flex gap-3 text-slate-300 text-sm"><Check className="h-5 w-5 text-indigo-500 flex-shrink-0" /> Access to Mentor Q&A during sessions</li>
              <li className="flex gap-3 text-slate-300 text-sm"><Check className="h-5 w-5 text-indigo-500 flex-shrink-0" /> Lifetime Recording Access</li>
            </ul>
            <Button variant="secondary" fullWidth onClick={scrollToRegister}>Select Standard</Button>
          </div>

          {/* Premium */}
          <div className="bg-gradient-to-b from-indigo-900 to-slate-800 rounded-2xl p-8 border-2 border-indigo-500 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Execution Masterclass</h3>
              <p className="text-indigo-200 text-sm">Workshop + 2-Week Clinic</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹4,000</span>
              <span className="text-indigo-300 line-through ml-3 text-lg">₹6,000</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-white text-sm"><Check className="h-5 w-5 text-green-400 flex-shrink-0" /> <strong>Everything in Standard</strong></li>
              <li className="flex gap-3 text-white text-sm"><Check className="h-5 w-5 text-green-400 flex-shrink-0" /> <strong>2-Week Guided Clinic</strong></li>
              <li className="flex gap-3 text-white text-sm"><Check className="h-5 w-5 text-green-400 flex-shrink-0" /> 1-on-1 Workflow Code Review</li>
              <li className="flex gap-3 text-white text-sm"><Check className="h-5 w-5 text-green-400 flex-shrink-0" /> Private Mentor WhatsApp/Slack</li>
              <li className="flex gap-3 text-white text-sm"><Check className="h-5 w-5 text-green-400 flex-shrink-0" /> Advanced Agent Templates Library</li>
            </ul>
            <Button variant="primary" fullWidth size="lg" onClick={scrollToRegister}>Select Premium</Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">
            <ShieldCheck className="h-4 w-4" />
            <span>100% Money-Back Guarantee if you don't build a working workflow.</span>
          </div>
        </div>
      </div>
    </section>
  );
};