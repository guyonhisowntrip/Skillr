import React from 'react';
import { Linkedin, Award } from 'lucide-react';

const mentors = [
  {
    name: "Harsha Varun",
    role: "AI Expert & Lead Instructor",
    experience: "building AI/ML accelerators & deploying live agents for enterprise clients.",
    years: "10+ Years",
    bio: "Specializes in deep-tech architecture, machine learning, Generative AI pipelines, and Agentic AI systems.",
    institution: "Ex BITS Pilani",
    image: "https://storage.googleapis.com/onetapp/presenters/harsha.png", 
    linkedin: "https://www.linkedin.com/in/harsha-varun-11a5382b/"
  },
  {
    name: "Nishant Sharma",
    role: "AI Product Strategist",
    experience: "driving AI product strategy & aligning tech with real business ROI.",
    years: "10+ Years",
    bio: "Ensures AI adoption aligns with organizational values, managing the lifecycle from concept to client adoption.",
    institution: "IIT Roorkee Alumni",
    image: "https://storage.googleapis.com/onetapp/presenters/nishant.jpeg",
    linkedin: "https://www.linkedin.com/in/nishant-sharma-b1b49960"
  }
];

export const Mentors: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Team & Mentors</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Learn from industry practitioners actively building in the space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="group relative bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-slate-900 hover:border-brand-500/30 transition-all duration-300 overflow-hidden">
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                  {/* Header: Image + Details */}
                  <div className="flex items-center gap-6 mb-8">
                      {/* Image */}
                      <div className="relative shrink-0">
                         <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-slate-700 overflow-hidden group-hover:border-brand-500/50 transition-colors shadow-lg bg-slate-800">
                            <img 
                              src={mentor.image} 
                              alt={mentor.name} 
                              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                         </div>
                         <a 
                           href={mentor.linkedin}
                           target="_blank"
                           rel="noopener noreferrer" 
                           className="absolute -bottom-2 -right-2 bg-[#0077b5] text-white p-1.5 rounded-lg border-2 border-black hover:scale-110 transition-transform shadow-lg"
                         >
                            <Linkedin className="w-3.5 h-3.5" />
                         </a>
                      </div>

                      {/* Name & Role */}
                      <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-brand-100 transition-colors">{mentor.name}</h3>
                          <p className="text-brand-400 font-medium text-sm mb-3">{mentor.role}</p>
                          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
                              {mentor.institution}
                          </span>
                      </div>
                  </div>

                  {/* Experience Box */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/5 mb-6 group-hover:bg-brand-900/10 group-hover:border-brand-500/20 transition-all">
                      <div className="flex items-start gap-4">
                          <div className="bg-brand-500/20 p-2 rounded-lg shrink-0">
                            <Award className="w-5 h-5 text-brand-400" />
                          </div>
                          <div>
                              <div className="text-white font-bold text-lg leading-none mb-1.5">{mentor.years}</div>
                              <div className="text-slate-300 text-sm leading-snug font-medium opacity-90">{mentor.experience}</div>
                          </div>
                      </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-auto">
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {mentor.bio}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};