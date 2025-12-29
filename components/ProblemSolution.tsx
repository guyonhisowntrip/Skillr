import React from 'react';
import { AlertCircle, BrainCircuit, Layers, Workflow } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Ever feel busy — but still unsure what actually mattered?
            </h2>
            <div className="space-y-6 text-slate-400">
              <p>
                Your emails, meetings, notes, and tools are full of information. 
                But decisions still feel fuzzy. Work still feels reactive.
              </p>
              <div className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-red-500/20">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  And AI tools? Useful — but <span className="text-white font-medium">disconnected</span>. 
                  Most workshops teach you how to use tools. We teach you how to <span className="text-white font-medium">design systems</span>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-white mb-6">You'll learn how to:</h3>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800">
                <BrainCircuit className="w-6 h-6 text-brand-500" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Turn messy inputs into decisions</h4>
                <p className="text-slate-500 mt-1">Don't just summarize. Analyze and decide.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800">
                <Layers className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Combine tools into workflows</h4>
                <p className="text-slate-500 mt-1">Chain multiple AI steps for reliable output.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800">
                <Workflow className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Build Agent-like Systems</h4>
                <p className="text-slate-500 mt-1">Create loops that work repeatedly for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};