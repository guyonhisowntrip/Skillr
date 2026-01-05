import React from 'react';
import { Calendar, Rocket, Target, Workflow } from 'lucide-react';

export const ProgramOverview: React.FC = () => {
  return (
    <section id="program-overview" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The program</h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium mb-8">
            A 15-week, hands-on AI program built for businesses that want real outcomes, not theory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
            <Target className="w-10 h-10 text-brand-400 mx-auto mb-4" />
            <p className="text-slate-300">Improve productivity and efficiency across everyday work</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
            <Rocket className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <p className="text-slate-300">Use AI tools immediately with minimal setup</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 text-center">
            <Workflow className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <p className="text-slate-300">Progress from ready-to-use tools to simple automation using n8n</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xl text-slate-400 font-medium">
            You won't learn AI concepts in isolation.
          </p>
          <p className="text-xl text-white font-bold">
            You'll learn how to apply AI to the work you already do.
          </p>
        </div>
      </div>
    </section>
  );
};

