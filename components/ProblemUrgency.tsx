import React from 'react';
import { AlertCircle, Clock, FileText, RefreshCw } from 'lucide-react';

export const ProblemUrgency: React.FC = () => {
  return (
    <section className="py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">
            Is this you?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-white/10">
              <RefreshCw className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-lg">Too much time spent on repetitive work</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-white/10">
              <FileText className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-lg">Important insights buried in spreadsheets and emails</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-white/10">
              <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-lg">The same tasks repeated every week</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-white/10">
              <AlertCircle className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
              <p className="text-slate-300 text-lg">AI tools available, but unclear where they actually help</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-brand-900/20 to-purple-900/20 border border-brand-500/30 rounded-xl p-8 mb-8">
            <p className="text-xl md:text-2xl font-bold text-white mb-4">
              AI is no longer something to try later.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              Teams that start using AI today are not doing new work.
            </p>
            <p className="text-lg text-slate-400">
              They are doing the same work faster, with fewer errors, and with less manual effort.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-400 font-medium">
              The gap between teams using AI well and those that are not is already growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

