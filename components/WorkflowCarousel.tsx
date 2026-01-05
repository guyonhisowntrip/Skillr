import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import workflowData from '../content-core/smb-landing-page/workflow-examples.json';

interface FlowStep {
  name: string;
  description?: string;
  tools: string[];
}

interface Workflow {
  name: string;
  description: string;
  tools: string[];
  'flow-wrapper': string;
  flow: FlowStep[];
}

export const WorkflowCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const workflows: Workflow[] = workflowData.workflows || [];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % workflows.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + workflows.length) % workflows.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (workflows.length === 0) {
    return null;
  }

  const currentWorkflow = workflows[currentIndex];

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Example workflows you'll build</h2>
          <p className="text-slate-400 text-lg">Real workflows for real business use cases.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-12 relative overflow-hidden">
          {/* Navigation Buttons */}
          {workflows.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-sm"
                aria-label="Previous workflow"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-sm"
                aria-label="Next workflow"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Workflow Content */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                {currentWorkflow.name}
              </h3>
              <p className="text-lg text-slate-300">{currentWorkflow.description}</p>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentWorkflow.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Flow Steps */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Flow ({currentWorkflow['flow-wrapper']})
              </h4>
              <div className="space-y-4">
                {currentWorkflow.flow.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-500/20 border border-brand-500/30 rounded-full flex items-center justify-center text-sm font-bold text-brand-400">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-white mb-1">{step.name}</h5>
                      {step.description && (
                        <p className="text-sm text-slate-400 mb-2">{step.description}</p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-brand-500/10 border border-brand-500/20 rounded text-xs text-brand-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Indicators */}
            {workflows.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {workflows.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-brand-500 w-8'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                    aria-label={`Go to workflow ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-lg text-slate-300 font-medium">The goal is not complexity.</p>
          <p className="text-lg text-white font-bold">The goal is less work, done better.</p>
        </div>
      </div>
    </section>
  );
};

