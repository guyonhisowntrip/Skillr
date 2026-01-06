import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface RegistrationModalSMBProps {
  isOpen: boolean;
  onClose: () => void;
}

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
  'February 2026 (Dates TBA)',
  'March 2026 (Dates TBA)',
  'Flexible',
];


const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  company: '',
  programOption: '',
  cohortDate: '',
  teamSize: '',
  message: '',
};

export const RegistrationModalSMB: React.FC<RegistrationModalSMBProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(INITIAL_DATA);
      setErrors({});
      setSubmitError(null);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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

    if (!formData.teamSize.trim()) {
      newErrors.teamSize = 'Team size is required';
    } else {
      const teamSizeNum = parseInt(formData.teamSize, 10);
      if (isNaN(teamSizeNum) || teamSizeNum <= 0) {
        newErrors.teamSize = 'Please enter a number greater than 0';
      }
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

      const response = await fetch('https://n8n.agiworkflow.in/webhook-test/registration-smb', {
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

  // Render Success View
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
        <div className="relative bg-white rounded-2xl w-full max-w-lg p-8 text-center shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-5 h-5" stroke-current stroke-2 />
          </button>
          
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Thanks for registering your interest.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We'll reach out shortly with cohort details and next steps.
          </p>

          <button 
            onClick={onClose}
            className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    );
  }

  // Render Form View
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-5 flex justify-between items-start sm:items-center">
          <div>
            <h2 className="text-xl font-display font-bold text-slate-900">Register Your Interest</h2>
            <p className="text-sm text-slate-500 mt-1">Join the next cohort of our AI program for SMBs.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors"
          >
            <X className="w-5 h-5 stroke-current stroke-2" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div id="field-name">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`${inputBaseClasses} ${errors.name ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Work Email */}
            <div id="field-email">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Work email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`${inputBaseClasses} ${errors.email ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div id="field-company">
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className={`${inputBaseClasses} ${errors.company ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.company}
                </p>
              )}
            </div>

            {/* Program Option */}
            <div id="field-programOption">
              <label htmlFor="programOption" className="block text-sm font-semibold text-slate-700 mb-2">
                Which program option are you interested in? <span className="text-red-500">*</span>
              </label>
              <select
                id="programOption"
                value={formData.programOption}
                onChange={(e) => handleInputChange('programOption', e.target.value)}
                className={`${inputBaseClasses} ${errors.programOption ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
              >
                <option value="">Select an option</option>
                {PROGRAM_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.programOption && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.programOption}
                </p>
              )}
            </div>

            {/* Preferred Cohort Date */}
            <div id="field-cohortDate">
              <label htmlFor="cohortDate" className="block text-sm font-semibold text-slate-700 mb-2">
                Preferred cohort start date <span className="text-red-500">*</span>
              </label>
              <select
                id="cohortDate"
                value={formData.cohortDate}
                onChange={(e) => handleInputChange('cohortDate', e.target.value)}
                className={`${inputBaseClasses} ${errors.cohortDate ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
              >
                <option value="">Select an option</option>
                {COHORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.cohortDate && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.cohortDate}
                </p>
              )}
            </div>

            {/* Team Size */}
            <div id="field-teamSize">
              <label htmlFor="teamSize" className="block text-sm font-semibold text-slate-700 mb-2">
                How many people from your team might join? <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="teamSize"
                value={formData.teamSize}
                onChange={(e) => handleInputChange('teamSize', e.target.value)}
                min="1"
                step="1"
                className={`${inputBaseClasses} ${errors.teamSize ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'}`}
                placeholder="Enter a number > 0"
              />
              <p className="mt-1 text-xs text-slate-500">Enter a number &gt; 0</p>
              {errors.teamSize && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.teamSize}
                </p>
              )}
            </div>

            {/* Optional Message */}
            <div id="field-message">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Anything specific you're looking to solve? <span className="text-slate-500 text-xs font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className={`${inputBaseClasses} resize-none border-slate-200 focus:border-brand-500 focus:ring-brand-500/20`}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-4 text-lg font-bold bg-brand-600 text-white hover:bg-brand-500 border-none rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 inline-flex items-center justify-center"
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
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

