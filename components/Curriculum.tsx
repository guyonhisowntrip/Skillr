import React from 'react';
import { BookOpen, Cpu, Rocket, CheckCircle2, PenTool, Sparkles, Trophy, Clock, Download, FileText } from 'lucide-react';

export const Curriculum: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="curriculum">
       {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">The AI Systems Sprint</h2>
          <p className="text-slate-400 text-lg">A structured journey from understanding tools to deploying autonomous agents.</p>
        </div>

        {/* Detailed Agenda Download Card */}
        <div className="mb-10 max-w-2xl mx-auto">
          <a 
            href="https://storage.googleapis.com/onetapp/worshop%20schedule/Workshop%20Detailed%20Agenda%20-%20OneTapp%20University.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Workshop Detailed Agenda - OneTapp University.pdf"
            className="group block bg-gradient-to-br from-brand-500/10 via-brand-600/5 to-purple-500/10 border border-brand-500/30 rounded-2xl p-6 hover:border-brand-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/20 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Icon Section */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              {/* Content Section */}
              <div className="flex-grow text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                    Download Detailed Workshop Agenda
                  </h3>
                  <Download className="w-5 h-5 text-brand-400 group-hover:text-brand-300 group-hover:translate-y-0.5 transition-all duration-300" />
                </div>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  Get the complete schedule with session timings, topics, and learning outcomes for Day 1, Day 2, and the 2-Week Sprint.
                </p>
              </div>
              
              {/* Download Button */}
              <div className="flex-shrink-0">
                <div className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-500/40 flex items-center gap-2 whitespace-nowrap">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">Download</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="space-y-5">
          
          {/* Day 1 Card */}
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 min-h-[320px]">
            {/* Left Sidebar */}
            <div className="bg-blue-600 md:w-48 lg:w-64 p-6 flex flex-col justify-between text-white shrink-0 relative overflow-hidden transition-all duration-300">
              <div className="absolute -right-6 -bottom-6 text-blue-500/20 rotate-12">
                 <BookOpen className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <BookOpen className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold font-display mb-1">Day 1</div>
                <div className="text-blue-100 font-medium text-sm">Getting Started</div>
              </div>
              
              {/* Time Commitment Badge - Enhanced */}
              <div className="relative z-10 mt-6 md:mt-0">
                <div className="inline-flex items-center gap-3 bg-black/10 rounded-xl p-2.5 pr-4 backdrop-blur-md border border-white/10 shadow-sm transition-transform group-hover:scale-105 origin-left">
                  <div className="bg-white/20 p-1.5 rounded-lg shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] uppercase tracking-wider font-medium text-blue-100/70 mb-1">Commitment</span>
                    <span className="text-sm font-bold text-white">~5 Hours Live</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-grow bg-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Getting Started with AI (The Right Way)</h3>
              <p className="text-slate-500 italic mb-5 border-l-4 border-blue-200 pl-3 py-1 text-sm">
                From experimenting with AI to creating real outcomes
              </p>

              <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 lg:gap-x-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold uppercase text-[10px] tracking-wider">
                    <PenTool className="w-3 h-3" />
                    What we’ll cover today
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "How AI actually works — simply explained",
                      "Choosing the right AI tool for specific tasks",
                      "Writing prompts that give reliable results",
                      "Refining outputs for real use cases"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700 leading-snug">
                        <span className="mr-2 text-blue-400 font-bold text-xs mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold uppercase text-[10px] tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    By the end of Day 1
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Confidently pick the right AI tool",
                      "Get structured, consistent outputs",
                      "Fix bad responses efficiently",
                      "Connect tools manually for end-to-end tasks"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700 leading-snug">
                        <span className="mr-2 text-purple-400 font-bold text-xs mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 Card */}
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl group hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 min-h-[320px]">
            {/* Left Sidebar */}
            <div className="bg-purple-600 md:w-48 lg:w-64 p-6 flex flex-col justify-between text-white shrink-0 relative overflow-hidden transition-all duration-300">
               <div className="absolute -right-6 -bottom-6 text-purple-500/20 rotate-12">
                 <Cpu className="w-32 h-32" />
              </div>
              
              <div className="relative z-10">
                <Cpu className="w-8 h-8 mb-3" />
                <div className="text-3xl font-bold font-display mb-1">Day 2</div>
                <div className="text-purple-100 font-medium text-sm">Systems & Workflows</div>
              </div>
              
              {/* Time Commitment Badge - Enhanced */}
              <div className="relative z-10 mt-6 md:mt-0">
                <div className="inline-flex items-center gap-3 bg-black/10 rounded-xl p-2.5 pr-4 backdrop-blur-md border border-white/10 shadow-sm transition-transform group-hover:scale-105 origin-left">
                  <div className="bg-white/20 p-1.5 rounded-lg shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px] uppercase tracking-wider font-medium text-purple-100/70 mb-1">Commitment</span>
                    <span className="text-sm font-bold text-white">~5 Hours Live</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-grow bg-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Building AI Systems & Workflows</h3>
              <p className="text-slate-500 italic mb-5 border-l-4 border-purple-200 pl-3 py-1 text-sm">
                From one-time experiments to repeatable AI systems
              </p>

              <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 lg:gap-x-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold uppercase text-[10px] tracking-wider">
                    <PenTool className="w-3 h-3" />
                    What we’ll cover today
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Manual vs. Automated: When to build a workflow",
                      "From prompts to multi-step agent systems",
                      "Designing reliable decision logic using n8n",
                      "Scoping a practical project for the build phase"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700 leading-snug">
                        <span className="mr-2 text-purple-400 font-bold text-xs mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-pink-700 font-bold uppercase text-[10px] tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    By the end of Day 2
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Understand structure of AI agents",
                      "Convert manual steps into repeatable systems",
                      "Design flows that make decisions",
                      "Leave with a clear project plan"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-slate-700 leading-snug">
                        <span className="mr-2 text-pink-400 font-bold text-xs mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Clinic Card - Aligned Sizing */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)] group mt-6 transform hover:scale-[1.005] transition-all duration-300 min-h-[320px]">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            
            <div className="bg-slate-950 rounded-[15px] overflow-hidden flex flex-col md:flex-row h-full relative">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />
              
              {/* Left Side: Impact Header (Matching Sidebar Width) */}
              <div className="md:w-48 lg:w-64 p-6 flex flex-col justify-center items-center text-center shrink-0 relative z-10 md:border-r border-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1 leading-tight">
                  2-Week <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Clinic</span>
                </h3>
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-6 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                  Execution Phase
                </span>

                {/* Time Commitment Badge - Enhanced for Dark BG */}
                <div className="relative z-10">
                   <div className="inline-flex items-center gap-3 bg-emerald-950/40 rounded-xl p-2.5 pr-4 backdrop-blur-md border border-emerald-500/30 shadow-lg transition-transform group-hover:scale-105">
                      <div className="bg-emerald-500/20 p-1.5 rounded-lg shrink-0">
                        <Clock className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex flex-col leading-none text-left">
                        <span className="text-[10px] uppercase tracking-wider font-medium text-emerald-400/70 mb-1">Sprint Effort</span>
                        <span className="text-sm font-bold text-emerald-100">~10h / Week</span>
                      </div>
                    </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="p-6 flex-grow flex flex-col justify-center text-center md:text-left relative z-10">
                 <h4 className="text-xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                   Where Learning Becomes Building
                   <Trophy className="w-5 h-5 text-yellow-400" />
                 </h4>
                 <p className="text-slate-300 text-sm mb-6 leading-relaxed max-w-2xl">
                   Most workshops end when the Zoom call drops. Ours just begins. 
                   <span className="hidden md:inline"> You enter the <strong className="text-white decoration-emerald-500 decoration-2 underline-offset-4 underline">Guided Execution Window</strong> to build your own system.</span>
                 </p>

                 {/* Tablet: 2 cols, Desktop: 3 cols */}
                 <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                   {[
                     "Alternate Day Mentor Feedback",
                     "Debug 'Stuck' Workflows",
                     "Refining Prompts",
                     "Final Showcase",
                     "Peer Review Sessions",
                     "Lifetime Community"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center text-xs font-medium text-slate-200 bg-emerald-900/10 p-2.5 rounded-lg border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-900/20 transition-all cursor-default justify-center md:justify-start">
                       <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
                       {item}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};