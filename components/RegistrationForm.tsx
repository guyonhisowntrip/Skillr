import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { Check, Send, Loader2 } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // INSTRUCTIONS FOR GOOGLE FORMS INTEGRATION:
  // 1. Create a Google Form with the questions matching the fields below.
  // 2. Go to the form, click the three dots > "Get pre-filled link".
  // 3. Fill in dummy data and click "Get Link".
  // 4. Copy the link and look for 'entry.1234567' for each field.
  // 5. Replace the 'name' attributes in the inputs below with your specific entry IDs.
  // 6. Replace the GOOGLE_FORM_ACTION_URL below with your form's action URL 
  //    (it looks like https://docs.google.com/forms/u/0/d/e/.../formResponse)

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse";

  const handleSubmit = (e: React.FormEvent) => {
    // We let the form submit naturally to the hidden iframe
    // but we intercept the visual state to show success
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1500); // Fake delay to simulate network request
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-indigo-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Registration Received!</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Thank you for signing up for the Skillr Workshop. check your inbox shortly for a confirmation email and the detailed schedule.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Register Another Colleague
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading 
          title="Secure Your Spot" 
          subtitle="Join the next cohort of AI builders. Limited seats available."
          center
        />

        {/* Hidden Iframe to catch Google Form submission without redirecting */}
        <iframe 
          name="hidden_iframe" 
          id="hidden_iframe" 
          style={{ display: 'none' }} 
        ></iframe>

        <form 
          action={GOOGLE_FORM_ACTION_URL} 
          method="POST" 
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8"
        >
          {/* 1. Full Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="name"
              name="entry.123456789" // REPLACE WITH REAL ENTRY ID
              placeholder="e.g. Jane Doe"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
            />
          </div>

          {/* 2. Email Address */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
              Work Email Address <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="entry.987654321" // REPLACE WITH REAL ENTRY ID
              placeholder="jane@company.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
            />
          </div>

          {/* 3. GenAI Experience Level */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-900">
              How would you rate your familiarity with GenAI tools? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['None (Newbie)', 'Beginner (Tried once)', 'Intermediate (Regular user)', 'Advanced (Power user)'].map((level) => (
                <label key={level} className="flex items-center space-x-3 p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-colors">
                  <input
                    required
                    type="radio"
                    name="entry.112233445" // REPLACE WITH REAL ENTRY ID
                    value={level}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <span className="text-slate-700 text-sm">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. Tools Used */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-900">
              Which of these AI tools have you used? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['ChatGPT', 'Claude / Gemini', 'Midjourney / DALL-E', 'Github Copilot / Cursor', 'Perplexity', 'n8n / Zapier'].map((tool) => (
                <label key={tool} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="entry.556677889" // REPLACE WITH REAL ENTRY ID
                    value={tool}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                  />
                  <span className="text-slate-700 text-sm">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. Topics of Interest */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-900">
              Which AI use-cases interest you most?
            </label>
            <div className="space-y-2">
              {[
                'Content Creation (Writing, Emails, Marketing)',
                'Data Research & Analysis',
                'Visual Design & Media',
                'Automation & AI Agents',
                'Coding Assistance'
              ].map((topic) => (
                <label key={topic} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="entry.998877665" // REPLACE WITH REAL ENTRY ID
                    value={topic}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                  />
                  <span className="text-slate-700 text-sm">{topic}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. How Did You Hear? */}
          <div className="space-y-2">
            <label htmlFor="source" className="block text-sm font-semibold text-slate-900">
              How did you hear about us?
            </label>
            <div className="relative">
              <select
                id="source"
                name="entry.443322110" // REPLACE WITH REAL ENTRY ID
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white appearance-none"
              >
                <option value="" disabled selected>Select an option</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Email Newsletter">Email Newsletter</option>
                <option value="Colleague / Friend">Colleague / Friend</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 7. Email Opt-In */}
          <div className="pt-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="entry.000111222" // REPLACE WITH REAL ENTRY ID
                value="Yes"
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
              />
              <span className="text-sm text-slate-600 leading-snug">
                Yes, I’d like to receive future email updates, cheat sheets, and resources.
              </span>
            </label>
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              fullWidth 
              size="lg" 
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Complete Registration <Send className="h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-center text-xs text-slate-400 mt-4">
              By registering, you agree to our Terms of Service.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};