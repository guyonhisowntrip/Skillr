import React from 'react';
import { Linkedin } from 'lucide-react';

const instructors = [
  {
    name: "Harsha Varun",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "AI expert with experience in implementing enterprise AI solutions & developing capabilities. Ex BITS Pilani Specializes in machine learning, Generative AI and Agentic AI.",
    linkedin: "#"
  },
  {
    name: "Ajay Reddy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Serial business entrepreneur with deep corporate-governance expertise. Oxford & BITS Pilani alumnus. Brings experience in real estate, strategy, and building high-growth ventures.",
    linkedin: "#"
  },
  {
    name: "Bhargav Dutt",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Business Consultant with experience in delivering large scale analytics solutions for enterprises. Ex BITS Pilani Working with Paypal to build scalable analytics capabilities.",
    linkedin: "#"
  },
  {
    name: "Nishant Sharma",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "AI implementation professional with a background in AI product management. IIT Roorkee Alumni. Ensures AI adoption aligns with organizational values and client adoption.",
    linkedin: "#"
  }
];

export const Instructors: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="instructors">
      <div className="container mx-auto px-4">
        {/* Custom Header to match requested style */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            <span className="relative inline-block mr-0.5">
              <span className="absolute left-0 bottom-2 w-full h-4 bg-indigo-200/80 -z-10"></span>
              <span className="font-medium">O</span>
            </span>ur Team & Mentors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {instructors.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-slate-100">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <a 
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                  aria-label={`Connect with ${instructor.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              
              <h3 className="text-xl font-normal text-slate-900 mb-2">{instructor.name}</h3>
              
              <p className="text-slate-500 leading-relaxed font-light text-sm max-w-xs mb-4">
                {instructor.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};