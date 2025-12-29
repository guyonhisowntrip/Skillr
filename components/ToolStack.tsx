import React from 'react';

export const ToolStack: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
            <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
                Build with the modern AI stack
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
                {/* OpenAI */}
                <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" 
                      alt="OpenAI" 
                      className="h-6 md:h-8 invert"
                    />
                </div>

                {/* Perplexity */}
                <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                    <img 
                      src="https://logo.clearbit.com/perplexity.ai" 
                      onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                      alt="Perplexity" 
                      className="h-6 md:h-8 rounded-md"
                    />
                    <span className="text-lg font-bold text-white hidden md:block">Perplexity</span>
                </div>

                {/* Google AI Studio */}
                <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                     <img 
                       src="https://storage.googleapis.com/onetapp/tool%20logos/google%20ai%20studio.jpg"
                       alt="Google AI Studio"
                       className="h-8 md:h-10 rounded-lg"
                     />
                     <span className="text-lg font-bold text-white hidden md:block">AI Studio</span>
                </div>

                {/* n8n */}
                <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                    <img 
                      src="https://storage.googleapis.com/onetapp/tool%20logos/n8n.png" 
                      alt="n8n" 
                      className="h-8 md:h-10 rounded-md"
                    />
                    <span className="text-lg font-bold text-white hidden md:block">n8n</span>
                </div>

                 {/* Gamma */}
                 <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                    <img 
                      src="https://storage.googleapis.com/onetapp/tool%20logos/gamma.png" 
                      alt="Gamma" 
                      className="h-8 md:h-10 rounded-lg"
                    />
                    <span className="text-lg font-bold text-white hidden md:block">Gamma</span>
                </div>

                {/* NotebookLM */}
                <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                    <img 
                      src="https://storage.googleapis.com/onetapp/tool%20logos/notebooklm.png" 
                      alt="NotebookLM" 
                      className="h-8 md:h-10 rounded-lg"
                    />
                    <span className="text-lg font-bold text-white hidden md:block">NotebookLM</span>
                </div>

                 {/* Vercel */}
                 <div className="group transition-all duration-300 hover:opacity-100 opacity-60 flex items-center gap-3 cursor-default hover:grayscale-0 grayscale">
                    <img 
                      src="https://storage.googleapis.com/onetapp/tool%20logos/vercel.png" 
                      alt="Vercel" 
                      className="h-6 md:h-8 invert"
                    />
                    <span className="text-lg font-bold text-white hidden md:block">Vercel</span>
                </div>
            </div>
        </div>
    </section>
  );
};