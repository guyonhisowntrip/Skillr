import React from 'react';
import { Linkedin } from 'lucide-react';

const mentors = [
  {
    name: "Harsha Varun",
    role: "AI Expert & Lead Instructor",
    bio: "AI expert with experience in implementing enterprise AI solutions & developing capabilities. Specializes in machine learning, Generative AI and Agentic AI.",
    institution: "Ex BITS Pilani",
    image: "https://storage.googleapis.com/onetapp/presenters/harsha.png", 
    linkedin: "https://www.linkedin.com/in/harsha-varun-11a5382b/"
  },
  {
    name: "Nishant Sharma",
    role: "AI Product Strategist",
    bio: "AI implementation professional with a background in AI product management. Ensures AI adoption aligns with organizational values and client adoption.",
    institution: "IIT Roorkee Alumni",
    image: "https://storage.googleapis.com/onetapp/presenters/nishant.jpeg",
    linkedin: "https://www.linkedin.com/in/nishant-sharma-b1b49960"
  }
];

export const Mentors: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Team & Mentors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Learn from industry practitioners actively building in the space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/30 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-brand-500/50 transition-colors shadow-2xl bg-slate-800 relative">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <a 
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-[#0077b5] p-2.5 rounded-full text-white shadow-lg border-2 border-black transform translate-x-1 translate-y-1 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                <div className="text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 bg-brand-900/20 rounded-full border border-brand-500/20">
                  {mentor.institution}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {mentor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};