import React from 'react';
import { GraduationCap, Target, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      title: "Run by Industry Experts",
      description: "Our team, featuring BITS Pilani & Oxford alumni, brings real-world Enterprise AI experience, understanding both the supply and demand sides of the industry through direct implementation."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Outcome-Oriented",
      description: "Every engagement yields concrete results—functional projects, polished pitches, or demonstrable skills—with success measured by the quality and impact of student creations, not just attendance."
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: "Inclusive Capability",
      description: "We empower all students to be AI builders, irrespective of their major or technical background, fostering innovation through a team-based approach that embraces diverse perspectives from business, design, and humanities."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why This Workshop?" 
          subtitle="A pedagogical approach designed for real skill acquisition."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="mb-6 bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 bg-orange-100/50 px-2 py-1 -ml-2 rounded">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};