import React from 'react';
import { BookOpen, Cpu, Play, CheckCircle2, PenTool, Sparkles } from 'lucide-react';

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="curriculum">
       {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The Masterclass Roadmap</h2>
          <p className="text-slate-400 text-lg">A structured journey from understanding tools to deploying autonomous agents.</p>
        </div>

        <div className="space-y-8">
          
          {/* Day 1 Card */}
          <div className="bg-white text-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
            {/* Left Sidebar */}
            <div className="bg-blue-600 md:w-72 p-8 flex flex-col justify-center text-white shrink-0 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-blue-500/20 rotate-12">
                 <BookOpen className="w-48 h-48" />
              </div>
              <BookOpen className="w-10 h-10 mb-6 relative z-10" />
              <div className="text-4xl font-bold font-display mb-2 relative z-10">Day 1</div>
              <div className="text-blue-100 font-medium text-lg relative z-10">Ideation & Tools</div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-10 flex-grow bg-white">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Foundation: Learn the Tools + Use Cases</h3>
              <p className="text-slate-500 italic mb-8 border-l-4 border-blue-200 pl-4 py-1 text-sm md:text-base">
                "Master the most useful GenAI tools and apply them to real everyday tasks."
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold uppercase text-xs tracking-wider">
                    <PenTool className="w-4 h-4" />
                    Core Modules
                  </div>
                  <ul className="space-y-3">
                    {[
                      "The 4P Framework for prompting",
                      "Hallucination control (The 5 Rules)",
                      "Productivity Tools: ChatGPT, Gemini",
                      "Research Tools: Perplexity, NotebookLM"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                        <span className="mr-2 text-blue-400 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-purple-700 font-bold uppercase text-xs tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Hands-On Outcomes
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Rewrite emails in 3 distinct tones",
                      'Build a "Personal Tutor" with NotebookLM',
                      "Create a research brief with citations",
                      "Mini Project: Produce a full content kit"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                        <span className="mr-2 text-purple-400 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 Card */}
          <div className="bg-white text-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300">
            {/* Left Sidebar */}
            <div className="bg-purple-600 md:w-72 p-8 flex flex-col justify-center text-white shrink-0 relative overflow-hidden">
               <div className="absolute -right-6 -bottom-6 text-purple-500/20 rotate-12">
                 <Cpu className="w-48 h-48" />
              </div>
              <Cpu className="w-10 h-10 mb-6 relative z-10" />
              <div className="text-4xl font-bold font-display mb-2 relative z-10">Day 2</div>
              <div className="text-purple-100 font-medium text-lg relative z-10">Agents & Systems</div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-10 flex-grow bg-white">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Advanced: Workflows, Reasoning & Agents</h3>
              <p className="text-slate-500 italic mb-8 border-l-4 border-purple-200 pl-4 py-1 text-sm md:text-base">
                "Combine tools, think better with AI, and automate your first workflow."
              </p>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="flex items-center gap-2 mb-4 text-purple-700 font-bold uppercase text-xs tracking-wider">
                    <PenTool className="w-4 h-4" />
                    Core Modules
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Chain-of-Thought reasoning prompts",
                      "Evaluation metrics for AI outputs",
                      "Intro to Automation (n8n / Make)",
                      "Building multi-step agents"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                        <span className="mr-2 text-purple-400 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-pink-700 font-bold uppercase text-xs tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Hands-On Outcomes
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Build a Daily Digest Bot",
                      "Automate LinkedIn content generation",
                      "Connect Perplexity → ChatGPT → Email",
                      "Capstone: Present your working agent"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                        <span className="mr-2 text-pink-400 font-bold">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-900/20 pointer-events-none" />
             
             <div className="text-center md:w-60 shrink-0 flex flex-col items-center relative z-10">
               <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-inner ring-4 ring-slate-800/50">
                 <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
               </div>
               <h3 className="text-2xl font-display font-bold text-white mb-2">2-Week Clinic</h3>
               <span className="px-3 py-1 bg-brand-600 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/20">Execution Phase</span>
             </div>

             <div className="flex-grow border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-10 relative z-10 text-center md:text-left">
               <h4 className="text-xl font-bold text-white mb-3">Where Learning Becomes Building</h4>
               <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                 Most workshops end when the Zoom call drops. Ours just begins. Over two weeks, you enter the <strong className="text-white">Guided Execution Window</strong>.
               </p>

               <div className="grid sm:grid-cols-2 gap-4 text-left">
                 {[
                   "Dedicated Mentor Feedback",
                   "Debugging \"Stuck\" Workflows",
                   "Refining Prompts for Production",
                   "Final Showcase Presentation"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center text-sm text-slate-300 bg-slate-800/30 p-2 rounded-lg border border-white/5">
                     <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                     {item}
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};