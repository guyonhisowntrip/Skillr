import React, { useState } from 'react';
import { Search, Loader2, ExternalLink, Sparkles } from 'lucide-react';
import { queryAI } from '../services/geminiService';
import { AIResponse } from '../types';

export const LiveDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await queryAI(query);
    setResponse(result);
    setLoading(false);
  };

  const suggestion = "What are the latest agentic AI frameworks released this month?";

  return (
    <section className="py-24 bg-slate-900/50 relative border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-brand-500/10 rounded-xl">
            <Sparkles className="w-6 h-6 text-brand-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience Grounded AI</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our workshop teaches you to build systems that research and verify. Try this demo powered by Gemini 3 Flash to see how AI can synthesize real-time web information.
          </p>
        </div>

        <div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 md:p-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about an AI trend, tool, or recent event..."
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-4 pl-12 pr-32 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder-slate-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Research'}
              </button>
            </form>
            
            {!response && !loading && (
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                <span>Try asking:</span>
                <button 
                  onClick={() => setQuery(suggestion)}
                  className="text-brand-500 hover:text-brand-400 hover:underline text-left"
                >
                  "{suggestion}"
                </button>
              </div>
            )}
          </div>

          {(response || loading) && (
            <div className="bg-slate-900/50 border-t border-white/5 p-6 md:p-8 min-h-[200px]">
              {loading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                </div>
              ) : response ? (
                <div className="animate-fade-in">
                  <div className="prose prose-invert prose-slate max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed">{response.text}</p>
                  </div>
                  
                  {response.sources.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Sources Verified</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {response.sources.map((source, idx) => (
                          <a
                            key={idx}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 group"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-300 truncate group-hover:text-white transition-colors">
                                {source.title}
                              </p>
                              <p className="text-xs text-slate-500 truncate">{new URL(source.url).hostname}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-500 ml-2" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};