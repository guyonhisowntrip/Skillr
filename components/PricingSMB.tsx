import React from 'react';
import { Check, Crown, Zap } from 'lucide-react';
import { Button } from './Button';

interface PricingSMBProps {
  onRegister: () => void;
}

export const PricingSMB: React.FC<PricingSMBProps> = ({ onRegister }) => {
  const bundles = [
    {
      id: 'module1',
      title: 'Everyday AI for Business Work',
      subtitle: 'Module 1',
      price: '$25',
      priceLabel: 'per learner',
      bestFor: 'Teams getting started with AI for everyday work',
      features: [
        'Immediate productivity gains using AI tools',
        'Faster creation of SOPs, reports, and presentations',
        'Better structured and more reliable outputs',
      ],
      roi: "If one person saves even 30 minutes a day, this pays for itself within weeks.",
      highlighted: false,
    },
    {
      id: 'module1+2',
      title: 'AI for Productivity and Operational Efficiency',
      subtitle: 'Module 1 + Module 2',
      price: '$100',
      priceLabel: 'per learner',
      bestFor: 'Teams looking to reduce manual effort across operations. This is where AI starts saving time across the team, not just for individuals.',
      features: [
        'Everything in Module 1',
        'Faster email handling and communication',
        'Better use of AI for documents, research, and decision support',
      ],
      roi: 'Reducing repetitive work by 15–20% typically pays back the cost within weeks.',
      highlighted: true,
      badge: 'Most popular',
    },
    {
      id: 'full',
      title: 'AI Workflows and Automation',
      subtitle: 'Module 1 + Module 2 + Module 3',
      price: '$200',
      priceLabel: 'per learner',
      bestFor: 'Businesses ready to automate repeatable work',
      features: [
        'Everything in Module 1 and Module 2',
        'No-code workflow automation using n8n',
        'End-to-end AI workflows that reduce manual coordination',
      ],
      roi: 'Automating even one recurring process can save dozens of hours every month.',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Pricing</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
            Start small or go all in. Choose what fits your business today.
          </p>
          <p className="text-slate-500 text-sm">
            All pricing is per learner and includes live sessions, recordings, and hands-on exercises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {bundles.map((bundle, index) => (
            <div
              key={bundle.id}
              className={`bg-black/40 border rounded-3xl p-8 relative hover:border-white/20 transition-all flex flex-col h-full ${
                bundle.highlighted
                  ? 'border-brand-500/50 shadow-2xl shadow-brand-900/20 md:scale-105 z-10 bg-gradient-to-b from-brand-900/20 to-black'
                  : 'border-slate-800 opacity-90 hover:opacity-100'
              }`}
            >
              {bundle.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5" />
                  {bundle.badge.toUpperCase()}
                </div>
              )}

              <div className="mb-6 mt-4">
                <h3 className="text-xl font-bold text-white mb-2">{bundle.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{bundle.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`${bundle.highlighted ? 'text-5xl' : 'text-4xl'} font-bold text-white`}>
                    {bundle.price}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">{bundle.priceLabel}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Best for:</div>
                <p className="text-sm text-slate-300">{bundle.bestFor}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">What you get:</div>
                <ul className="space-y-3">
                  {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <Check className={`w-5 h-5 ${bundle.highlighted ? 'text-brand-400' : 'text-slate-500'} mr-3 shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 bg-slate-900/50 rounded-lg border border-white/10">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">ROI snapshot:</div>
                <p className="text-sm text-slate-300 italic">{bundle.roi}</p>
              </div>

              <Button
                variant={bundle.highlighted ? 'primary' : 'outline'}
                fullWidth
                onClick={onRegister}
                className={bundle.highlighted ? 'bg-white text-black hover:bg-slate-200 font-bold py-4 shadow-xl shadow-white/10 border-none' : 'border-slate-700 hover:bg-slate-800 hover:text-white'}
              >
                {bundle.highlighted && <Zap className="w-5 h-5 mr-2 text-brand-600" />}
                Register Your Interest
              </Button>
            </div>
          ))}
        </div>

        {/* Upgrades and Flexibility - Text Only */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-slate-300 mb-2">
            You can start with any bundle and upgrade later.
          </p>
          <p className="text-slate-400">
            You only pay for what you haven't already completed.
          </p>
        </div>

        {/* Team Pricing */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Team pricing</h3>
          <p className="text-center text-slate-400 mb-8">
            Training works best when teams learn together.
            <br />
            Automatic discounts apply for team enrollments:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">3–5 learners</div>
              <div className="text-brand-400 font-bold text-xl mb-2">15% off</div>
              <div className="text-sm text-slate-400">per learner</div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">6–10 learners</div>
              <div className="text-brand-400 font-bold text-xl mb-2">30% off</div>
              <div className="text-sm text-slate-400">per learner</div>
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">More than 10</div>
              <div className="text-brand-400 font-bold text-xl mb-2">Custom pricing</div>
              <div className="text-sm text-slate-400">available</div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500">
            Team pricing applies across all program bundles.
          </p>
        </div>
      </div>
    </section>
  );
};

