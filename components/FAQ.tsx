import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "I'm not a coder. Can I still participate?",
    answer: "Absolutely. We focus on low-code/no-code tools like n8n and natural language prompting. If you can use Excel, you can build AI agents."
  },
  {
    question: "What is the time commitment?",
    answer: "The kickoff weekend requires ~4 hours per day (Sat/Sun). The following 2-week clinic is flexible, requiring about 3-5 hours per week to execute your project."
  },
  {
    question: "Do I need a paid ChatGPT subscription?",
    answer: "Yes, we recommend ChatGPT Plus or a similar premium model (Claude Pro/Gemini Advanced) for the best results, but free versions can work for 80% of the material."
  },
  {
    question: "Will I get a certificate?",
    answer: "We can tell you from our own experience that what you will learn in this workshop will have a value beyond what you get on the certificate. We are not promising you that you will become Master in AI but we promise you that you will become comfortable using tools for your own work."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" center />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-indigo-600" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">Still have questions?</p>
          <a href="mailto:support@genaiworkshop.com" className="text-indigo-600 font-semibold hover:underline">Chat with us</a>
        </div>
      </div>
    </section>
  );
};