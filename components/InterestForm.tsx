import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  programOption: string;
  cohortDate: string;
  teamSize: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const PROGRAM_OPTIONS = [
  'Module 1: Everyday AI for Business Work',
  'Module 1 + Module 2',
  'Full program (Module 1 + 2 + 3)',
  'Not sure yet',
];

const COHORT_OPTIONS = [
  'Next cohort (Month, Year)',
  'Following cohort (Month, Year)',
  'Flexible',
];

const TEAM_SIZE_OPTIONS = [
  'Just me',
  '2–3 people',
  '4–6 people',
  '7–10 people',
  'More than 10',
];

export const InterestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    programOption: '',
    cohortDate: '',
    teamSize: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    setSubmitError(null);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.programOption) {
      newErrors.programOption = 'Please select a program option';
    }

    if (!formData.cohortDate) {
      newErrors.cohortDate = 'Please select a preferred cohort start date';
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select team size';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError('Please complete the required fields highlighted above.');

      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch('https://n8n.agiworkflow.in/webhook/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError("We couldn't process your registration. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses = "w-full px-4 py-3 bg-white border rounded-xl focus:bg-white focus:ring-2 outline-none transition-all placeholder:text-slate-400 text-slate-900 [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:-webkit-text-fill-color:black";

  if (isSuccess) {
    return (
      <section id="interest-form" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Thanks for registering your interest.</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We'll reach out shortly with cohort details and next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="interest-form" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-slate-400 mb-6">
            If you want to reduce manual work, save time, and make AI work for your business, this program is designed for you.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div id="field-name">
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Full name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`${inputBaseClasses} ${errors.name ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Work Email */}
            <div id="field-email">
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Work email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`${inputBaseClasses} ${errors.email ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div id="field-company">
              <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                Company name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={`${inputBaseClasses} ${errors.company ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.company}
                </p>
              )}
            </div>

            {/* Program Option */}
            <div id="field-programOption">
              <label htmlFor="programOption" className="block text-sm font-semibold text-white mb-2">
                Which program option are you interested in? <span className="text-red-400">*</span>
              </label>
              <select
                id="programOption"
                value={formData.programOption}
                onChange={(e) => handleInputChange('programOption', e.target.value)}
                className={`${inputBaseClasses} ${errors.programOption ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
              >
                <option value="">Select an option</option>
                {PROGRAM_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.programOption && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.programOption}
                </p>
              )}
            </div>

            {/* Preferred Cohort Date */}
            <div id="field-cohortDate">
              <label htmlFor="cohortDate" className="block text-sm font-semibold text-white mb-2">
                Preferred cohort start date <span className="text-red-400">*</span>
              </label>
              <select
                id="cohortDate"
                value={formData.cohortDate}
                onChange={(e) => handleInputChange('cohortDate', e.target.value)}
                className={`${inputBaseClasses} ${errors.cohortDate ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
              >
                <option value="">Select an option</option>
                {COHORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.cohortDate && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.cohortDate}
                </p>
              )}
            </div>

            {/* Team Size */}
            <div id="field-teamSize">
              <label htmlFor="teamSize" className="block text-sm font-semibold text-white mb-2">
                How many people from your team might join? <span className="text-red-400">*</span>
              </label>
              <select
                id="teamSize"
                value={formData.teamSize}
                onChange={(e) => handleInputChange('teamSize', e.target.value)}
                className={`${inputBaseClasses} ${errors.teamSize ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
              >
                <option value="">Select an option</option>
                {TEAM_SIZE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.teamSize && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.teamSize}
                </p>
              )}
            </div>

            {/* Optional Message */}
            <div id="field-message">
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Anything specific you're looking to solve? <span className="text-slate-500 text-xs font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className={`${inputBaseClasses} resize-none ${errors.message ? 'border-red-500 ring-red-500' : 'border-slate-300'}`}
                placeholder="Tell us about specific challenges or goals..."
              />
              <p className="mt-1 text-xs text-slate-500">This helps us tailor conversations and better support you.</p>
            </div>

            {submitError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{submitError}</p>
              </div>
            )}

            <Button
              type="submit"
              variant="secondary"
              fullWidth
              disabled={isSubmitting}
              className="mt-8 py-4 text-lg font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Register Your Interest
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

