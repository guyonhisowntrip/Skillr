import React, { useState } from 'react';
import { HeroSMB } from '../components/HeroSMB';
import { ProblemUrgency } from '../components/ProblemUrgency';
import { ProgramOverview } from '../components/ProgramOverview';
import { ToolStackSMB } from '../components/ToolStackSMB';
import { Outcomes } from '../components/Outcomes';
import { ProgramModules } from '../components/ProgramModules';
import { WorkflowCarousel } from '../components/WorkflowCarousel';
import { PricingSMB } from '../components/PricingSMB';
import { TrainerSection } from '../components/TrainerSection';
import { Testimonials } from '../components/Testimonials';
import { FAQSMB } from '../components/FAQSMB';
import { Footer } from '../components/Footer';
import { RegistrationModalSMB } from '../components/RegistrationModalSMB';

export const SMBLanding: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500/30">
      <RegistrationModalSMB isOpen={isModalOpen} onClose={closeModal} />
      <main>
        <HeroSMB onRegister={openModal} />
        <ProblemUrgency />
        <ProgramOverview />
        <ToolStackSMB />
        <ProgramModules />
        <Outcomes />
        <WorkflowCarousel />
        <PricingSMB onRegister={openModal} />
        <TrainerSection />
        <Testimonials />
        <FAQSMB />
      </main>
      <Footer />
    </div>
  );
};

