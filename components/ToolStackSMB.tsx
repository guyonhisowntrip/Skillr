import React from 'react';
import gammaLogo from '../images/gamma.png'; // Example: import local image
import notebookLM from '../images/notebooklm.png';
import supabaseLogo from '../images/supabase-logo-wordmark-dark.png';
import elevenLabsLogo from '../images/eleven-labs.png';
import heygenLogo from '../images/HeyGen_logo.png';
import vapiLogo from '../images/vapi.png';

export const ToolStackSMB: React.FC = () => {
  const toolsRow1 = [
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'Microsoft Copilot', logo: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Microsoft_Copilot_Icon.svg' },
    { name: 'Google Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'Perplexity', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg' },
    { name: 'n8n', logo: 'https://storage.googleapis.com/onetapp/tool%20logos/n8n.png' },
    { name: 'Google AI Studio', logo: 'https://storage.googleapis.com/onetapp/tool%20logos/google%20ai%20studio.jpg' },
  ];

  const toolsRow2 = [
    { name: 'Gamma', logo: gammaLogo },
    { name: 'NotebookLM', logo: notebookLM },
    { name: 'Eleven Labs', logo: elevenLabsLogo },
    {name: 'HeyGen', logo: heygenLogo },
    { name: 'Supabase', logo: supabaseLogo },
    { name: 'Vapi', logo: vapiLogo },
  ];

  return (
    <section className="border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
          Tools you'll use
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 mb-8">
          {toolsRow1.map((tool, i) => (
            <div key={i} className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
              <img 
                src={tool.logo}
                alt={tool.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-8 md:h-10 object-contain rounded-md"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 mb-6">
          {toolsRow2.map((tool, i) => (
            <div key={i} className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default">
              <img 
                src={tool.logo}
                alt={tool.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-6 md:h-8 object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 font-medium mt-8">
          Tool selection may vary based on your setup. The focus is on workflows and outcomes.
        </p>
      </div>
    </section>
  );
};

