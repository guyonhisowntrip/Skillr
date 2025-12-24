import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Curriculum } from './components/Curriculum';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { RegistrationModal } from './components/RegistrationModal';
import { Pricing } from './components/Pricing';
import { Mentors } from './components/Mentors';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialRegType, setInitialRegType] = useState<'individual' | 'team'>('individual');

  const openModal = (type: 'individual' | 'team' = 'individual') => {
    setInitialRegType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500/30">
      <StickyCTA onRegister={() => openModal('individual')} />
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialRegType={initialRegType}
      />
      
      <main>
        <Hero onRegister={() => openModal('individual')} />
        <ProblemSolution />
        <Curriculum />
        
        <section className="py-20 bg-gradient-to-b from-black to-slate-900 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">What You'll Build</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/30 transition-colors">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="text-lg font-bold text-white mb-2">Personal Decision Assistant</h3>
                <p className="text-slate-400 text-sm">An "invisible" AI assistant that surfaces postponed decisions and organizes your week automatically.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/30 transition-colors">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="text-lg font-bold text-white mb-2">Customer Query Resolver</h3>
                <p className="text-slate-400 text-sm">A decision-aware system that classifies intent, drafts policy-aligned responses, and knows when to escalate.</p>
              </div>
            </div>
          </div>
        </section>

        <Mentors />
        <Pricing onRegister={openModal} />
        <FAQ />
        
        <section className="py-24 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Build Real AI Systems?</h2>
            <p className="text-xl text-slate-400 mb-8">
              Move beyond "using AI" and start <span className="text-white font-medium">designing with AI</span>.
            </p>
            <div className="inline-flex flex-col items-center">
               <button 
                onClick={() => openModal('individual')}
                className="px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
               >
                Register Now
              </button>
              <p className="mt-4 text-sm text-slate-500 font-medium">
                Limited seats available for the next cohort
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;