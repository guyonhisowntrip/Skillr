import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Curriculum } from './components/Curriculum';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { RegistrationModal } from './components/RegistrationModal';
import { Pricing } from './components/Pricing';
import { Mentors } from './components/Mentors';
import { ToolStack } from './components/ToolStack';
import { Contact } from './components/Contact';
import { SMBLanding } from './pages/SMBLanding';
import { 
  StickyNote, GitFork, Clock, Sparkles, Calendar, Bell, ArrowRight, ArrowDown, ArrowLeft,
  MessageSquare, Tag, ShieldCheck, Bot, UserCheck, Brain, Zap
} from 'lucide-react';

// Helper component for workflow steps (Compact / Horizontal)
const CompactWorkflowStep = ({ 
  icon: Icon, 
  title, 
  sub, 
  iconColor, 
  iconBg, 
  mobileOrder,
  mobileArrow
}: { 
  icon: any, 
  title: string, 
  sub: string, 
  iconColor: string, 
  iconBg: string,
  mobileOrder?: number,
  mobileArrow?: 'right' | 'left' | 'down'
}) => (
  <div 
    className={`flex flex-col items-center text-center gap-2 md:gap-3 relative z-10 group w-full md:w-auto md:min-w-[120px] order-${mobileOrder} md:order-none`}
    style={{ order: mobileOrder }} // Inline style fallback for dynamic values if Tailwind classes aren't generated
  >
    <div className={`p-3 md:p-4 rounded-2xl ${iconBg} ${iconColor} shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-brand-500/50 bg-slate-900 relative`}>
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
      
      {/* Mobile Arrows positioned relative to the icon box */}
      {mobileArrow === 'right' && (
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 text-slate-600 md:hidden z-0">
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      )}
      {mobileArrow === 'left' && (
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-slate-600 md:hidden z-0">
          <ArrowLeft className="w-4 h-4 animate-pulse" />
        </div>
      )}
      {mobileArrow === 'down' && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-600 md:hidden z-0 flex flex-col items-center h-8 justify-center">
          <div className="h-full w-px bg-slate-800"></div>
          <ArrowDown className="w-4 h-4 -mt-1" />
        </div>
      )}
    </div>
    <div className="px-1">
      <div className="text-white font-bold text-xs md:text-sm mb-0.5 md:mb-1">{title}</div>
      <div className="text-slate-500 text-[10px] md:text-xs font-medium uppercase tracking-wider leading-tight">{sub}</div>
    </div>
  </div>
);

// Helper component for arrows (Desktop)
const DesktopArrow = () => (
  <div className="hidden md:flex items-center justify-center px-2 opacity-20 text-slate-400 shrink-0">
    <ArrowRight className="w-6 h-6" />
  </div>
);

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialRegType, setInitialRegType] = useState<'weekend' | 'builder'>('builder');
  const [activeTab, setActiveTab] = useState<'decision' | 'customer'>('decision');

  const openModal = (type: 'weekend' | 'builder' = 'builder') => {
    setInitialRegType(type);
    setIsModalOpen(true);
  };

  const decisionSteps = [
    { icon: StickyNote, title: "Input Block", sub: "Capture anything", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: GitFork, title: "Decision Type", sub: "Classify it", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Clock, title: "Delay Check", sub: "Pending?", color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: Sparkles, title: "AI Help", sub: "Next step", color: "text-brand-400", bg: "bg-brand-500/10" },
    { icon: Calendar, title: "Planner", sub: "Auto-schedule", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Bell, title: "Nudge", sub: "Reminder", color: "text-pink-400", bg: "bg-pink-500/10" },
  ];

  const customerSteps = [
    { icon: MessageSquare, title: "Input", sub: "Customer msg", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Tag, title: "Intent", sub: "Classify", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: ShieldCheck, title: "Policy", sub: "Check rules", color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: Bot, title: "AI Draft", sub: "Safe reply", color: "text-brand-400", bg: "bg-brand-500/10" },
    { icon: GitFork, title: "Decision", sub: "Auto/Human", color: "text-pink-400", bg: "bg-pink-500/10" },
    { icon: UserCheck, title: "Escalation", sub: "Human agent", color: "text-red-400", bg: "bg-red-500/10" },
  ];

  // Helper to determine mobile layout props (Snake pattern: 0->1, 1->2(down), 2->3(left), 3->4(down), 4->5(right))
  const getMobileProps = (index: number) => {
    let order = index + 1; // Default order
    let arrow: 'right' | 'left' | 'down' | undefined = undefined;

    // Snake Layout Logic for 6 items in 2 columns
    // Row 1: [0] [1]
    // Row 2: [3] [2] (Reversed visually)
    // Row 3: [4] [5]

    if (index === 0) { order = 1; arrow = 'right'; }
    if (index === 1) { order = 2; arrow = 'down'; }
    if (index === 2) { order = 4; arrow = 'left'; } // Visually bottom-right in 2x2 block
    if (index === 3) { order = 3; arrow = 'down'; } // Visually bottom-left in 2x2 block
    if (index === 4) { order = 5; arrow = 'right'; }
    if (index === 5) { order = 6; arrow = undefined; }

    return { mobileOrder: order, mobileArrow: arrow };
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-500/30">
      <StickyCTA onRegister={() => openModal('builder')} />
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialRegType={initialRegType}
      />
      
      <main>
        <Hero onRegister={() => openModal('builder')} />
        <ToolStack />
        <ProblemSolution />
        <Curriculum />
        
        <section className="py-20 bg-gradient-to-b from-black to-slate-900 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Examples of What You'll Build</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10">
              Move beyond simple chat. Here are blueprint examples of the types of autonomous systems you will design.
            </p>

            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
              <div className="bg-slate-900/80 p-1.5 rounded-xl border border-white/10 inline-flex shadow-xl backdrop-blur-sm">
                <button 
                  onClick={() => setActiveTab('decision')}
                  className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2.5 ${
                    activeTab === 'decision' 
                      ? 'bg-blue-600 text-white shadow-lg ring-1 ring-white/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Brain className="w-4 h-4" />
                  Personal Assistant
                </button>
                <button 
                  onClick={() => setActiveTab('customer')}
                  className={`px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2.5 ${
                    activeTab === 'customer' 
                      ? 'bg-purple-600 text-white shadow-lg ring-1 ring-white/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Query Resolver
                </button>
              </div>
            </div>
            
            {/* Active Content Area */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 relative overflow-hidden transition-all duration-500">
                {/* Background Decor */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeTab === 'decision' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'}`} />
                <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none ${activeTab === 'decision' ? 'bg-blue-500' : 'bg-purple-500'}`} />
                
                {/* Project Header */}
                <div className="text-center mb-8 md:mb-12">
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                     {activeTab === 'decision' ? 'Personal Decision Assistant' : 'Customer Query Resolver'}
                   </h3>
                   <p className="text-slate-400 text-xs md:text-sm uppercase tracking-wider font-semibold">
                     {activeTab === 'decision' ? 'System Architecture Example' : 'Workflow Example'}
                   </p>
                </div>

                {/* Responsive Workflow Visualization */}
                <div className="relative">
                  {/* Connector Line (Desktop only) */}
                  <div className="absolute top-[28px] left-10 right-10 h-0.5 bg-white/5 hidden md:block" />

                  {/* Mobile: Grid (2 cols) with Snake Order, Desktop: Flex row */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:flex md:flex-row md:justify-between relative z-10 md:gap-0">
                    {(activeTab === 'decision' ? decisionSteps : customerSteps).map((step, idx, arr) => {
                      const { mobileOrder, mobileArrow } = getMobileProps(idx);
                      return (
                        <React.Fragment key={idx}>
                          <CompactWorkflowStep 
                            icon={step.icon}
                            title={step.title}
                            sub={step.sub}
                            iconColor={step.color}
                            iconBg={step.bg}
                            mobileOrder={mobileOrder}
                            mobileArrow={mobileArrow}
                          />
                          {/* Desktop Arrow */}
                          {idx < arr.length - 1 && <DesktopArrow />}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 text-center">
                   <p className="text-slate-300 font-medium italic text-sm md:text-lg leading-relaxed">
                     {activeTab === 'decision' 
                       ? <>“You don't manage decisions. <br className="md:hidden"/>AI makes sure they don't pile up.”</>
                       : <>“Fast responses without breaking the rules.”</>
                     }
                   </p>
                </div>
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
              <br />
              <span className="text-brand-400 font-medium">Register your interest to receive teaser slides and videos.</span>
            </p>
            <div className="inline-flex flex-col items-center">
               <button 
                onClick={() => openModal('builder')}
                className="px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
               >
                Register Your Interest
              </button>
              <p className="mt-4 text-sm text-slate-500 font-medium">
                Upcoming cohort dates to be decided
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-for-smbs" element={<SMBLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;