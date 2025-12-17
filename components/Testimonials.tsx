import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior Consultant",
    company: "Deloitte",
    quote: "I was skeptical about another 'AI course'. This was different. I built a research bot that saves me 10 hours a week. The ROI was immediate.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "TechFlow",
    quote: "The focus on workflows instead of just 'chatting' changed everything. My team now automates 80% of our first-draft content.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Strategist",
    company: "Self-Employed",
    quote: "The 2-week clinic was the game changer. Having an expert debug my n8n workflow ensured I actually launched my tool.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Alumni Say" 
          subtitle="Join 500+ professionals who have transformed their careers."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};