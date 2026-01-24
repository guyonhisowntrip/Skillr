import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Star, Zap, User, BookOpen, Phone, Loader2, PartyPopper, ChevronDown, AlertCircle } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRegType?: 'weekend' | 'builder';
}

type RegistrationType = 'weekend' | 'builder';

interface CountryData {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
  length: number; // 0 means flexible validation
}

const COUNTRIES: CountryData[] = [
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91', length: 10 },
  { code: 'US', name: 'USA', flag: '🇺🇸', dialCode: '+1', length: 10 },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1', length: 10 },
  { code: 'GB', name: 'UK', flag: '🇬🇧', dialCode: '+44', length: 10 },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61', length: 9 },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65', length: 8 },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', dialCode: '+971', length: 9 },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49', length: 11 },
  { code: 'INTL', name: 'International', flag: '🌍', dialCode: '+', length: 0 },
];

interface CohortOption {
  id: string;
  dates: string;
  label?: string;
  sub?: string;
}

const COHORTS: CohortOption[] = [
  { 
    id: 'batch_jan31', 
    dates: 'Jan 31 & Feb 1', 
    sub: 'Sat & Sun • Limited seats • Cohort filling fast',
    label: 'Limited seats'
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryIso: string;
  orgName: string;
  experience: string;
  referral: string;
  newsletter: boolean;
  cohortId: string;
}

interface FormErrors {
  [key: string]: string;
}

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  countryIso: 'IN',
  orgName: '',
  experience: '',
  referral: '',
  newsletter: true,
  cohortId: COHORTS[0].id,
};

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, initialRegType = 'builder' }) => {
  const [regType, setRegType] = useState<RegistrationType>(initialRegType);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setRegType(initialRegType);
      setFormData(INITIAL_DATA);
      setErrors({});
      setSubmitError(null);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialRegType]);

  if (!isOpen) return null;

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user types
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    // Clear global submit error if user starts interacting
    if (submitError) setSubmitError(null);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, ''); // Only allow digits
    handleInputChange('phone', val);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone Validation
    const selectedCountry = COUNTRIES.find(c => c.code === formData.countryIso) || COUNTRIES[0];
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      if (selectedCountry.length > 0 && formData.phone.length !== selectedCountry.length) {
        newErrors.phone = `Enter exactly ${selectedCountry.length} digits for ${selectedCountry.name}`;
      } else if (selectedCountry.code === 'INTL' && formData.phone.length < 7) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.cohortId) newErrors.cohortId = "Please select a cohort date";
    if (!formData.experience) newErrors.experience = "Please select your experience level";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitError("Please complete the required fields highlighted above.");
      
      // Auto-scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Focus if it's an input
        if (element.tagName === 'INPUT') {
          (element as HTMLInputElement).focus();
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct the payload
      const payload = {
        ...formData,
        regType, // 'weekend' or 'builder'
        cohortName: COHORTS.find(c => c.id === formData.cohortId)?.dates || formData.cohortId,
        submittedAt: new Date().toISOString(),
        price: regType === 'builder' ? 999 : 199,
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

      // Success
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError("We couldn't process your registration. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = COUNTRIES.find(c => c.code === formData.countryIso) || COUNTRIES[0];
  const inputBaseClasses = "w-full px-4 py-3 bg-white border rounded-xl focus:bg-white focus:ring-2 outline-none transition-all placeholder:text-slate-400 text-slate-900 [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:-webkit-text-fill-color:black";

  // Render Success View
  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
        <div className="relative bg-white rounded-2xl w-full max-w-lg p-8 text-center shadow-2xl animate-fade-in-up">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PartyPopper className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Interest Registration Complete!</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you for registering your interest for the <span className="font-semibold text-brand-600">{regType === 'builder' ? 'Builder Pass' : 'Weekend Pass'}</span>, <span className="font-semibold text-slate-900">{formData.name}</span>. 
            We've sent a confirmation email to <span className="font-semibold text-slate-900">{formData.email}</span> with:
          </p>
          <ul className="text-slate-600 mb-6 leading-relaxed text-left list-disc list-inside space-y-2">
            <li>Teaser slides covering our workflows and discussions</li>
            <li>YouTube videos explaining our approach and methodologies</li>
            <li>QR code for easy access to resources</li>
          </ul>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Review the content and choose to pay once you understand what we're offering. <span className="font-semibold text-brand-600">Limited seats available.</span>
          </p>

          {/* Spam Folder Callout */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-grow">
              <p className="text-sm font-semibold text-amber-900 mb-1">Check Your Spam Folder</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Sometimes our emails end up in spam. Please check your spam/junk folder if you don't see the confirmation email in your inbox within a few minutes.
              </p>
            </div>
          </div>

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
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 animate-fade-in-up flex flex-col">
        
        {/* Header - Decorated */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-5 flex justify-between items-start sm:items-center">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-100 text-brand-600">
                <Star className="w-4 h-4 fill-brand-600" />
              </span>
              <h2 className="text-xl font-display font-bold text-slate-900">Register Your Interest</h2>
            </div>
            <p className="text-sm text-slate-500 pl-10">
              Register your interest to receive teaser slides, YouTube videos, and QR code.
              <span className="ml-1 font-semibold text-brand-600">You can choose to pay after reviewing the content.</span>
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Registration Type Toggle */}
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button
              type="button"
              onClick={() => setRegType('weekend')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                regType === 'weekend' 
                  ? 'bg-white text-slate-800 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <div className="flex flex-col leading-none items-start">
                <span>Weekend Pass</span>
                <span className="text-[10px] opacity-70 mt-1">₹199 (Learning Only)</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setRegType('builder')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                regType === 'builder' 
                  ? 'bg-brand-600 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Zap className="w-4 h-4 fill-current" />
              <div className="flex flex-col leading-none items-start">
                <span>Builder Pass</span>
                <span className="text-[10px] opacity-90 mt-1">₹999 (Sprint + Clinic)</span>
              </div>
            </button>
          </div>

          {/* Builder Pass Nudge */}
          {regType === 'weekend' && (
             <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm text-orange-800 flex gap-2 items-start cursor-pointer hover:bg-orange-100 transition-colors" onClick={() => setRegType('builder')}>
               <Star className="w-4 h-4 mt-0.5 shrink-0" />
               <p><strong>Recommendation:</strong> Get the Builder Pass to access the 2-week execution clinic, mentor reviews, and certification. <span className="underline">Switch to Builder Pass</span></p>
             </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit} noValidate>

            {/* Cohort Selection */}
            <div className="space-y-3" id="field-cohortId">
              <label className="block text-sm font-semibold text-slate-700">Preferred Cohort Date</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COHORTS.map((cohort) => (
                  <button
                    key={cohort.id}
                    type="button"
                    onClick={() => handleInputChange('cohortId', cohort.id)}
                    className={`relative p-3 rounded-xl border text-left transition-all ${
                      formData.cohortId === cohort.id
                        ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {formData.cohortId === cohort.id && (
                      <div className="absolute top-2 right-2 text-brand-600">
                        <CheckCircle2 className="w-4 h-4 fill-brand-100" />
                      </div>
                    )}
                    {cohort.label && (
                      <span className="inline-block px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide mb-1">
                        {cohort.label}
                      </span>
                    )}
                    <div className={`font-bold text-sm ${formData.cohortId === cohort.id ? 'text-brand-900' : 'text-slate-900'}`}>
                      {cohort.dates}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{cohort.sub}</div>
                  </button>
                ))}
              </div>
              {errors.cohortId && <p className="text-xs text-red-500 font-medium">{errors.cohortId}</p>}
            </div>
            
            <div className="border-t border-slate-100" />

            {/* Core Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="field-name" className="text-sm font-semibold text-slate-700">
                  Full Name <span className="text-brand-500">*</span>
                </label>
                <input 
                  id="field-name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Jane Doe" 
                  className={`${inputBaseClasses} ${
                    errors.name ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="field-email" className="text-sm font-semibold text-slate-700">Email <span className="text-brand-500">*</span></label>
                <input 
                  id="field-email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="jane@example.com" 
                  className={`${inputBaseClasses} ${
                    errors.email ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Phone Number <span className="text-brand-500">*</span>
                </label>
                
                <div className="flex gap-3">
                  <div className="relative shrink-0">
                    <select
                      value={formData.countryIso}
                      onChange={(e) => handleInputChange('countryIso', e.target.value)}
                      className="w-[110px] sm:w-[130px] pl-3 pr-8 py-3 bg-white border border-slate-200 rounded-xl focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-slate-900 appearance-none font-medium text-sm sm:text-base transition-all cursor-pointer"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.dialCode}
                        </option>
                      ))}
                    </select>
                     <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  <div className="relative flex-grow">
                    <input 
                      id="field-phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder={selectedCountry.code === 'IN' ? '98765 43210' : 'Mobile Number'} 
                      className={`${inputBaseClasses} tracking-wide font-medium ${
                        errors.phone ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                    />
                  </div>
                </div>
                 {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="field-orgName" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  Organization / Institution
                  <span className="text-xs font-normal text-slate-400 font-sans">(Optional)</span>
                </label>
                <input 
                  id="field-orgName"
                  type="text" 
                  value={formData.orgName}
                  onChange={(e) => handleInputChange('orgName', e.target.value)}
                  placeholder="Company or Institute name"
                  className={`${inputBaseClasses} border-slate-200 focus:border-brand-500 focus:ring-brand-500/20`}
                />
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-3 animate-fade-in" id="field-experience">
              <label className="block text-sm font-semibold text-slate-700">Familiarity with GenAI <span className="text-brand-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'None (Newbie)', desc: 'Total beginner' },
                  { label: 'Beginner', desc: 'Tried ChatGPT once' },
                  { label: 'Intermediate', desc: 'Use it weekly' },
                  { label: 'Advanced', desc: 'Building apps / workflows' }
                ].map((option) => (
                  <label key={option.label} className="relative cursor-pointer group">
                    <input 
                      type="radio" 
                      name="familiarity" 
                      checked={formData.experience === option.label}
                      onChange={() => handleInputChange('experience', option.label)}
                      className="peer sr-only" 
                    />
                    <div className={`p-3 rounded-xl border transition-all duration-200
                                  peer-checked:border-brand-500 peer-checked:bg-brand-50/50 peer-checked:shadow-sm ring-0 peer-checked:ring-1 peer-checked:ring-brand-500
                                  group-hover:shadow-sm ${errors.experience ? 'border-red-300 bg-red-50/10' : 'border-slate-200 bg-white group-hover:border-brand-200'}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 peer-checked:border-brand-500 peer-checked:bg-brand-500 flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-sm">{option.label}</div>
                          <div className="text-xs text-slate-500">{option.desc}</div>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
               {errors.experience && <p className="text-xs text-red-500 font-medium">{errors.experience}</p>}
            </div>

            {/* Source Select */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">How did you hear about us?</label>
              <div className="relative group">
                <select 
                  value={formData.referral}
                  onChange={(e) => handleInputChange('referral', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-slate-600 appearance-none transition-all cursor-pointer"
                >
                  <option value="">Select an option...</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="friend">Friend / Colleague</option>
                  <option value="search">Search Engine</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-slate-600">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <label className="flex items-start gap-3 cursor-pointer group mb-6">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="peer sr-only" 
                  />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:border-transparent transition-all peer-checked:bg-brand-600" />
                  <svg className="absolute left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-500 leading-tight group-hover:text-slate-700 transition-colors">
                  Send me the <span className="font-medium text-brand-600">"AI Systems Starter Kit"</span> and future updates.
                </span>
              </label>

              {/* Error Summary */}
              {submitError && (
                 <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 animate-fade-in-up">
                   <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                   <p className="text-sm text-red-600 font-medium">{submitError}</p>
                 </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed ${
                  regType === 'builder' 
                    ? 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-brand-500/25 hover:shadow-brand-500/40'
                    : 'bg-slate-800 hover:bg-slate-700 shadow-slate-900/10'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Register Your Interest
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-wider">
                Secure SSL Connection • No Spam Promise
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};