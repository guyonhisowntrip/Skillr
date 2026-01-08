import React, { useState, useMemo } from 'react';
import { Plus, Minus, Search, Sparkles } from 'lucide-react';

type Category = 'All' | 'Eligibility' | 'Curriculum' | 'Projects' | 'Logistics';

interface FAQItem {
  q: string;
  a: React.ReactNode;
  category: Exclude<Category, 'All'>;
}

const faqs: FAQItem[] = [
  {
    category: 'Eligibility',
    q: "Do I need a technical or coding background to join?",
    a: (
      <>
        No. This program is designed for <strong className="text-white">non-technical participants</strong>.
        You won’t be expected to write code, understand algorithms, or set up complex infrastructure.
        We focus on <strong className="text-white">concepts, reasoning, workflows, and no-code / low-code tools</strong>.
        If you can explain a problem clearly, you can build with AI here.
      </>
    )
  },
  {
    category: 'Curriculum',
    q: "Is this just a ChatGPT or prompt engineering workshop?",
    a: (
      <>
        No. While you will learn <strong className="text-white">how to design effective prompts</strong>, that’s only one part of the program.
        The core focus is on <strong className="text-white">building AI systems and workflows</strong>, not isolated prompts or tricks.
        <br /><br />
        You’ll learn how to:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Combine tools</li>
          <li>Design decision logic</li>
          <li>Evaluate outputs</li>
          <li>Build repeatable systems</li>
        </ul>
      </>
    )
  },
  {
    category: 'Projects',
    q: "What exactly will I build by the end?",
    a: (
      <>
        You will build <strong className="text-white">at least one real, working AI system</strong>, such as:
        <ul className="list-disc pl-5 mt-2 space-y-1 mb-4">
          <li>A personal decision & planning assistant that helps you reflect, prioritize, and plan</li>
          <li>An AI-powered customer query resolution workflow that classifies, responds, and escalates safely</li>
        </ul>
        You’ll also have a reusable workflow, a clear explanation of how it works, and something you can actually demo or reuse.
      </>
    )
  },
  {
    category: 'Logistics',
    q: "Is this a hackathon?",
    a: (
      <>
        No. This is a <strong className="text-white">guided build program</strong>, not a competitive hackathon.
        There’s no pressure to rush, no judging on technical complexity, and no “winner takes all” dynamic.
        The emphasis is on <strong className="text-white">learning, building thoughtfully, and finishing something meaningful</strong>.
      </>
    )
  },
  {
    category: 'Logistics',
    q: "How is this different from online courses or YouTube tutorials?",
    a: (
      <>
        Most courses teach tools in isolation, focus on features not systems, and leave you alone after the videos end.
        <br /><br />
        This program:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Is <strong className="text-white">live and guided</strong></li>
          <li>Uses <strong className="text-white">real, end-to-end use cases</strong></li>
          <li>Includes <strong className="text-white">mentorship clinics</strong></li>
          <li>Helps you finish what you start</li>
        </ul>
        <br />
        You’re not just learning — you’re building.
      </>
    )
  },
  {
    category: 'Curriculum',
    q: "What tools will we use?",
    a: (
      <>
        You’ll work with modern, practical AI tools for:
        <ul className="list-disc pl-5 mt-2 space-y-1 mb-4">
          <li>Reasoning and synthesis</li>
          <li>Research and contextual memory</li>
          <li>Workflow automation</li>
          <li>Optional UI layers for showcasing projects</li>
        </ul>
        The emphasis is <strong className="text-white">not on mastering tools</strong>, but on learning <strong className="text-white">how to choose and combine them intelligently</strong>.
      </>
    )
  },
  {
    category: 'Curriculum',
    q: "Will we be building “agents”?",
    a: (
      <>
        Yes — but in a <strong className="text-white">practical, grounded way</strong>.
        We won’t dive into complex multi-agent frameworks or theory-heavy setups.
        <br /><br />
        Instead, you’ll learn:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>What makes a system agentic</li>
          <li>How decision loops work</li>
          <li>How automation and evaluation fit together</li>
        </ul>
        <br />
        Agents will feel like a <em>natural extension</em> of workflows, not a buzzword.
      </>
    )
  },
  {
    category: 'Logistics',
    q: "How much time do I need to commit?",
    a: (
      <>
        We want to be transparent: this is an <strong>intense, outcome-focused sprint</strong>.
        <ul className="list-disc pl-5 mt-3 space-y-2 text-white/90">
          <li><strong>Day 1 (Saturday):</strong> ~5 Hours Live Training</li>
          <li><strong>Day 2 (Sunday):</strong> ~5 Hours Live Training</li>
          <li><strong>Guided Sprint (2 Weeks):</strong> ~10 Hours / week</li>
        </ul>
        <p className="mt-3 text-slate-400 text-sm">
          The sprint hours include building your project, testing workflows, and attending mentor clinics. You get out what you put in.
        </p>
      </>
    )
  },
  {
    category: 'Logistics',
    q: "Can I manage this alongside a full-time job?",
    a: (
      <>
        <strong>Yes.</strong> The program is specifically designed for working professionals.
        <br /><br />
        The live sessions are on weekends, and the 10-hour weekly sprint workload is self-paced (evenings/weekends). 
        However, please ensure you can clear this time on your calendar to get the full value.
      </>
    )
  },
  {
    category: 'Logistics',
    q: "What if I fall behind or feel stuck?",
    a: (
      <>
        That’s exactly why clinics exist. The mentorship sessions are designed to:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Unblock you</li>
          <li>Help debug prompts or workflows</li>
          <li>Improve clarity and scope</li>
          <li>Prevent dead ends</li>
        </ul>
        <br />
        You won’t be left alone to figure things out.
      </>
    )
  },
  {
    category: 'Projects',
    q: "Will my project be showcased publicly?",
    a: "Selected projects may be showcased as examples for future cohorts or case studies based on practical value and clarity. This is optional; there is no pressure to participate in public showcases."
  },
  {
    category: 'Eligibility',
    q: "Who is this program best suited for?",
    a: "This program is ideal if you are curious about AI but overwhelmed by tools, want to build something real, prefer hands-on guided learning, and care about outcomes over hype. It works well for professionals, students, founders, consultants, and operators across domains."
  },
  {
    category: 'Eligibility',
    q: "Do I need a paid ChatGPT subscription?",
    a: "Yes, we recommend ChatGPT Plus or a similar premium model (Claude Pro/Gemini Advanced) for the best results, but free versions can work for 80% of the material."
  },
  {
    category: 'Projects',
    q: "Can I bring my own work problems to solve?",
    a: "Absolutely! This is highly encouraged. The workshop is designed to help you apply AI to your real work challenges. During the 2-week execution phase, you'll work on a project relevant to your own domain with mentor guidance."
  },
  {
    category: 'Logistics',
    q: "Is there ongoing support after the workshop?",
    a: "Yes, you'll get lifetime access to course materials, templates, and our private community. The community provides ongoing peer support and on request basis connect for any deep dive."
  },
  {
    category: 'Curriculum',
    q: "What this program is NOT",
    a: (
      <>
        To avoid confusion, this program is <strong className="text-white">not</strong>:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>A deep coding bootcamp</li>
          <li>A research-heavy AI theory course</li>
          <li>A certification program</li>
          <li>A one-day crash course</li>
        </ul>
        <br />
        It’s a <strong className="text-white">practical, guided build experience</strong>.
      </>
    )
  }
];

const categories: Category[] = ['All', 'Eligibility', 'Curriculum', 'Projects', 'Logistics'];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [openItemKey, setOpenItemKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (typeof faq.a === 'string' && faq.a.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (q: string) => {
    setOpenItemKey(prev => prev === q ? null : q);
  };

  return (
    <section className="py-24 bg-slate-900/20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-400">Everything you need to know about the workshop and clinic.</p>
        </div>

        {/* Controls Container */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-white placeholder-slate-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                   setActiveCategory(cat);
                   setOpenItemKey(null); // Close active item when switching tabs
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-brand-600 border-brand-500 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4 min-h-[400px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div 
                key={faq.q} 
                className="border border-white/5 rounded-xl bg-black/40 overflow-hidden transition-all duration-200 hover:border-white/10"
              >
                <button
                  onClick={() => toggleItem(faq.q)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                     {activeCategory === 'All' && (
                       <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/5 text-slate-500 border border-white/5 shrink-0">
                         {faq.category}
                       </span>
                     )}
                     <span className={`text-base sm:text-lg font-medium transition-colors pr-4 ${openItemKey === faq.q ? 'text-brand-400' : 'text-slate-200 group-hover:text-white'}`}>
                       {faq.q}
                     </span>
                  </div>
                  {openItemKey === faq.q ? (
                    <Minus className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-500 flex-shrink-0 group-hover:text-white transition-colors" />
                  )}
                </button>
                
                {openItemKey === faq.q && (
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4 animate-fade-in pl-6 sm:pl-20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                  <Search className="w-6 h-6 text-slate-600" />
               </div>
               <p className="text-slate-500">No matching questions found.</p>
               <button 
                 onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                 className="text-brand-500 hover:text-brand-400 text-sm font-medium mt-2"
               >
                 Clear filters
               </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};