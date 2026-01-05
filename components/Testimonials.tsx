import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We finally stopped talking about AI and started using it. The biggest win was saving time every week on reporting and follow-ups.",
      author: "Operations Lead",
      company: "Mid-sized Services Company",
    },
    {
      quote: "The sessions were short but very practical. We could apply things the same day without any technical setup.",
      author: "Business Owner",
      company: "Contract-driven SME",
    },
    {
      quote: "The automation part helped us rethink how work flows across the team. n8n felt approachable, not intimidating.",
      author: "Finance and Ops Manager",
      company: "",
    },
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Testimonials from our Pilots</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-white/10 rounded-xl p-8 relative hover:border-white/20 transition-all"
            >
              <Quote className="w-8 h-8 text-brand-400 mb-4 opacity-50" />
              <blockquote className="text-lg text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{testimonial.author}</div>
                {testimonial.company && (
                  <div className="text-sm text-slate-400">{testimonial.company}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

