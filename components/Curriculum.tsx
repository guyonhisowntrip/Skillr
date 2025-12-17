import React from 'react';
import { BookOpen, Cpu, Rocket, PlayCircle, CheckSquare } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Curriculum: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="curriculum">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="The Masterclass Roadmap" 
          subtitle="A structured journey from understanding tools to deploying autonomous agents."
        />

        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Day 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-indigo-600 p-8 md:w-1/4 text-white flex flex-col justify-center items-center md:items-start">
              <BookOpen className="h-10 w-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-1">Day 1</h3>
              <p className="text-indigo-100 text-sm font-medium">Ideation & Tools</p>
            </div>
            <div className="p-8 md:w-3/4">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Foundation: Learn the Tools + Use Cases</h4>
              <p className="text-slate-600 mb-6 italic">"Master the most useful GenAI tools and apply them to real everyday tasks."</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-indigo-600" /> Core Modules
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• The 4P Framework for prompting</li>
                    <li>• Hallucination control (The 5 Rules)</li>
                    <li>• Productivity Tools: ChatGPT, Gemini</li>
                    <li>• Research Tools: Perplexity, NotebookLM</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-indigo-600" /> Hands-On Outcomes
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Rewrite emails in 3 distinct tones</li>
                    <li>• Build a "Personal Tutor" with NotebookLM</li>
                    <li>• Create a research brief with citations</li>
                    <li>• <strong>Mini Project:</strong> Produce a full content kit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-purple-600 p-8 md:w-1/4 text-white flex flex-col justify-center items-center md:items-start">
              <Cpu className="h-10 w-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-1">Day 2</h3>
              <p className="text-purple-100 text-sm font-medium">Agents & Systems</p>
            </div>
            <div className="p-8 md:w-3/4">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Advanced: Workflows, Reasoning & Agents</h4>
              <p className="text-slate-600 mb-6 italic">"Combine tools, think better with AI, and automate your first workflow."</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-purple-600" /> Core Modules
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Chain-of-Thought reasoning prompts</li>
                    <li>• Evaluation metrics for AI outputs</li>
                    <li>• Intro to Automation (n8n / Make)</li>
                    <li>• Building multi-step agents</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-purple-600" /> Hands-On Outcomes
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Build a Daily Digest Bot</li>
                    <li>• Automate LinkedIn content generation</li>
                    <li>• Connect Perplexity → ChatGPT → Email</li>
                    <li>• <strong>Capstone:</strong> Present your working agent</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

           {/* 2 Weeks */}
           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-xl border border-slate-700 overflow-hidden p-8 md:p-12 text-center md:text-left relative">
             <div className="absolute top-0 right-0 p-32 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
             
             <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
               <div className="md:w-1/3 flex flex-col items-center">
                 <div className="bg-white/10 p-6 rounded-full mb-4">
                   <PlayCircle className="h-12 w-12 text-white" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">2-Week Clinic</h3>
                 <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Execution Phase</span>
               </div>
               
               <div className="md:w-2/3 border-l border-slate-700 md:pl-8">
                 <h4 className="text-xl font-bold text-white mb-4">Where Learning Becomes Building</h4>
                 <p className="text-slate-300 mb-6">
                   Most workshops end when the Zoom call drops. Ours just begins. Over two weeks, you enter the <strong>Guided Execution Window</strong>.
                 </p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-green-400" /> Dedicated Mentor Feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-green-400" /> Debugging "Stuck" Workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-green-400" /> Refining Prompts for Production
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-green-400" /> Final Showcase Presentation
                    </li>
                 </ul>
               </div>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};