import React from 'react';
import { BookOpen, Mail, Workflow, FileText, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export const ProgramModules: React.FC = () => {
  const modules = [
    {
      number: 1,
      title: 'Everyday AI for Business Work',
      icon: BookOpen,
      timeline: 'Weeks 1-4',
      abilities: [
        'Create SOPs, reports, proposals, and presentations in minutes',
        'Use AI to analyze spreadsheets and business information using plain language',
        'Get consistent, structured outputs you can actually use',
        'Extract insights from documents, contracts, and long files like contracts and emails',
      ],
      tools: [
        'ChatGPT, Copilot, or Gemini for business tasks',
        'Research and document analysis with Perplexity and NotebookLM',
        'Prompt patterns for reliability and structure',
        'Custom GPT creation for recurring work',
        'Analysis of spreadsheet data with Gemini Workspace',

      ],
      color: 'blue',
    },
    {
      number: 2,
      title: 'Explore AI for Operational Efficiency',
      icon: Mail,
      timeline: 'Weeks 5-9',
      abilities: [
        'Automate email follow-ups, and coordination',
        'Create simple voice bots for customer and vendor communication',
        'Summarize and respond to customer and vendor communication faster',
        'Generate marketing materials like banners, videos and social media posts',
        'Explore specific use cases for AI in your business',
      ],
      tools: [
        'Email and document AI inside Gemini Workspace',
        'Vapi and Eleven Labs for voice bots',
        'Nano Banana for image generation',
        'HeyGen and Veo 3 for video content generation'
      ],
      color: 'purple',
    },
    {
      number: 3,
      title: 'Build AI Workflows and Automations for your business',
      icon: Workflow,
      timeline: 'Weeks 10-15',
      abilities: [
        'Connect email, spreadsheets, and AI into end-to-end workflows',
        'Build simple AI-powered automations without writing code',
        'Collaborate and build real AI workflows for common business use cases',
      ],
      tools: [
        'n8n for no-code workflow automation',
        'Triggers, conditions, and AI nodes',
        'Practical agent-style workflows for real business use cases',
      ],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          text: 'text-blue-600',
          border: 'border-blue-500/30',
          iconBg: 'bg-blue-500/10',
          iconText: 'text-blue-400',
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          text: 'text-purple-600',
          border: 'border-purple-500/30',
          iconBg: 'bg-purple-500/10',
          iconText: 'text-purple-400',
        };
      case 'green':
        return {
          bg: 'bg-green-600',
          text: 'text-green-600',
          border: 'border-green-500/30',
          iconBg: 'bg-green-500/10',
          iconText: 'text-green-400',
        };
      default:
        return {
          bg: 'bg-brand-600',
          text: 'text-brand-600',
          border: 'border-brand-500/30',
          iconBg: 'bg-brand-500/10',
          iconText: 'text-brand-400',
        };
    }
  };

  return (
    <section id="program-structure" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How the program is structured</h2>
        </div>

        <div className="space-y-8 mb-16">
          {modules.map((module) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            return (
              <div
                key={module.number}
                className={`bg-white text-slate-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[400px] border-l-4 ${colors.bg}`}
              >
                {/* Left Sidebar */}
                <div className={`${colors.bg} md:w-64 lg:w-80 p-6 md:p-8 flex flex-col justify-between text-white shrink-0 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className={`${colors.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${colors.iconText}`} />
                    </div>
                    <div className="text-3xl font-bold font-display mb-1">Module {module.number}</div>
                    <div className="text-white/90 font-medium text-sm mb-3">{module.title}</div>
                    {module.timeline && (
                      <div className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-bold text-white uppercase tracking-wide">
                        {module.timeline}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow bg-white flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">What you will be able to do</h3>
                    <ul className="space-y-3">
                      {module.abilities.map((ability, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{ability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">Tools and techniques you'll work with</h3>
                    <ul className="space-y-2">
                      {module.tools.map((tool, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-brand-500 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

