import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: "Who is this program for?",
    a: (
      <p>
        This program is designed for small and medium business owners, operations teams, and functional leads who want to use AI in day-to-day work without needing a technical background.
      </p>
    ),
  },
  {
    q: "Do I need prior AI or technical experience?",
    a: (
      <p>
        No. The program assumes no prior AI knowledge. Everything is taught through practical business use cases.
      </p>
    ),
  },
  {
    q: "How much time do I need to commit?",
    a: (
      <p>
        Sessions are 30 minutes, three times a week, with optional hands-on assignments you can do at your own pace.
      </p>
    ),
  },
  {
    q: "Will this disrupt my existing tools or systems?",
    a: (
      <p>
        No. We focus on tools you already use or can easily adopt. Automation is introduced gradually and safely.
      </p>
    ),
  },
  {
    q: "Is this about building custom AI solutions?",
    a: (
      <p>
        No. The focus is on using what already works, and only introducing custom workflows where it makes sense.
      </p>
    ),
  },
  {
    q: "What happens after the program ends?",
    a: (
      <>
        <p>You'll walk away with:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Practical AI skills you can keep using</li>
          <li>Ready workflows you can extend</li>
          <li>A clear understanding of where AI fits in your business</li>
        </ul>
      </>
    ),
  },
];

export const FAQSMB: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/10 rounded-xl overflow-hidden transition-all hover:border-white/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-white text-lg pr-8">{faq.q}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <div className="text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

