import React from 'react';
import { CheckCircle, BarChart3, Workflow, Sparkles } from 'lucide-react';

export const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: Sparkles,
      title: 'Automate everyday work like Contract creation, reporting, and follow-ups',
      color: 'text-brand-400',
      bg: 'bg-brand-500/10',
    },
    {
      icon: BarChart3,
      title: 'Analyze business data without being a data expert',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
    {
      icon: Workflow,
      title: 'Build simple AI workflows that save time and reduce manual effort',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What you'll be able to do</h2>
          <p className="text-xl text-slate-400 mb-4">
            By the end of the program, you will be able to:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/50 border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all"
              >
                <div className={`w-16 h-16 ${outcome.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <p className="text-lg text-white font-medium leading-relaxed">
                  {outcome.title}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-400 text-lg font-medium max-w-2xl mx-auto">
          These are not demos. These are workflows you'll actually use.
        </p>
      </div>
    </section>
  );
};

