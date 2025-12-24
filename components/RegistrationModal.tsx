import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Star, Users, User, Building2, Phone, Loader2, PartyPopper, ChevronDown, AlertCircle, Minus, Plus } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRegType?: 'individual' | 'team';
}

type RegistrationType = 'individual' | 'team';

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

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryIso: string;
  orgName: string;
  teamSize: number;
  experience: string;
  referral: string;
  newsletter: boolean;
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
  teamSize: 3,
  experience: '',
  referral: '',
  newsletter: true,
};

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, initialRegType = 'individual' }) => {
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

    if (regType === 'team') {
      if (formData.teamSize < 3) newErrors.teamSize = "Minimum team size is 3";
    }

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
        regType, // 'individual' or 'team'
        submittedAt: new Date().toISOString(),
        // Normalize fields based on type
        // orgName is now sent for both types
        teamSize: regType === 'team' ? formData.teamSize : undefined,
        experience: regType === 'individual' ? formData.experience : undefined,
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

  const totalTeamPrice = formData.teamSize * 1000;
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
          
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Registration Complete!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for registering, <span className="font-semibold text-slate-900">{formData.name}</span>. 
            We've sent a confirmation email to <span className="font-semibold text-slate-900">{formData.email}</span> with the next steps and payment link.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-8 text-left">
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Next Steps:</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                Check your inbox (and spam folder)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                Join the Discord community link in email
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                Complete the payment within 24 hours
              </li>
            </ul>
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
              <h2 className="text-xl font-display font-bold text-slate-900">Secure Your Spot</h2>
            </div>
            <p className="text-sm text-slate-500 pl-10">Join the next cohort of AI builders.</p>
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
              onClick={() => setRegType('individual')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                regType === 'individual' 
                  ? 'bg-white text-brand-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <User className="w-4 h-4" />
              Individual (₹1,500)
            </button>
            <button
              type="button"
              onClick={() => setRegType('team')}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                regType === 'team' 
                  ? 'bg-white text-purple-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              Team (₹1,000/seat)
            </button>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            
            {/* Section 1: Core Info (Shared) */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="field-name" className="text-sm font-semibold text-slate-700">
                  {regType === 'team' ? 'Team Lead Name' : 'Full Name'} <span className="text-brand-500">*</span>
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
                <label htmlFor="field-email" className="text-sm font-semibold text-slate-700">Work Email <span className="text-brand-500">*</span></label>
                <input 
                  id="field-email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="jane@company.com" 
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
                  {/* Country Dropdown */}
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

                  {/* Number Input */}
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

                {errors.phone ? (
                   <p className="text-xs text-red-500 font-medium">{errors.phone}</p>
                ) : (
                  <p className="text-[10px] text-slate-400">
                    We will send the workshop calendar invite here.
                  </p>
                )}
              </div>

              {/* Organization Name (Shared for both Individual and Team) */}
              <div className="space-y-1.5">
                <label htmlFor="field-orgName" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  Organization / Company
                </label>
                <input 
                  id="field-orgName"
                  type="text" 
                  value={formData.orgName}
                  onChange={(e) => handleInputChange('orgName', e.target.value)}
                  placeholder="Acme Inc." 
                  className={`${inputBaseClasses} border-slate-200 focus:border-brand-500 focus:ring-brand-500/20`}
                />
              </div>
            </div>

            {/* TEAM SPECIFIC FIELDS */}
            {regType === 'team' && (
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 space-y-6 animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-1.5">
                    <label htmlFor="field-teamSize" className="text-sm font-semibold text-slate-700">Team Size (Min 3)</label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => {
                          const newVal = formData.teamSize - 1;
                          if (newVal >= 3) handleInputChange('teamSize', newVal);
                        }}
                        disabled={formData.teamSize <= 3}
                        className={`w-12 h-[50px] flex items-center justify-center border border-r-0 rounded-l-xl transition-all ${
                          formData.teamSize <= 3 
                            ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed' 
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-purple-600'
                        }`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input 
                        id="field-teamSize"
                        type="number" 
                        min="3"
                        value={formData.teamSize}
                        onChange={(e) => handleInputChange('teamSize', parseInt(e.target.value) || 0)}
                        onBlur={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          if (val < 3) handleInputChange('teamSize', 3);
                        }}
                        className={`w-full h-[50px] text-center border-y border-slate-200 focus:z-10 focus:ring-0 outline-none font-bold text-slate-900 ${
                          errors.teamSize ? 'bg-red-50 text-red-900 border-red-500' : 'bg-white'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => handleInputChange('teamSize', formData.teamSize + 1)}
                        className="w-12 h-[50px] flex items-center justify-center bg-white border border-l-0 border-slate-200 rounded-r-xl text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                     {errors.teamSize && <p className="text-xs text-red-500 font-medium">{errors.teamSize}</p>}
                  </div>
                   <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Total Price Estimate</label>
                    <div className="w-full px-4 h-[50px] bg-purple-100 border border-purple-200 rounded-xl text-purple-900 font-bold flex justify-between items-center">
                      <span>{formData.teamSize} × ₹1,000</span>
                      <span className="text-lg">₹{totalTeamPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-purple-700 bg-white/50 p-3 rounded-lg border border-purple-100">
                   <strong>Note:</strong> We will send a single consolidated invoice to the email provided above. You can add team member details later.
                </div>
              </div>
            )}

            {/* INDIVIDUAL SPECIFIC FIELDS (Experience, Tools, etc) */}
            {regType === 'individual' && (
              <>
                {/* Section 2: Experience Level (Cards) */}
                <div className="space-y-3 animate-fade-in" id="field-experience">
                  <label className="block text-sm font-semibold text-slate-700">Familiarity with GenAI</label>
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
              </>
            )}

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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
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
                  <div className={`w-5 h-5 border-2 border-slate-300 rounded bg-white peer-checked:border-transparent transition-all ${regType === 'team' ? 'peer-checked:bg-purple-600' : 'peer-checked:bg-brand-600'}`} />
                  <svg className="absolute left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-500 leading-tight group-hover:text-slate-700 transition-colors">
                  Send me the <span className={`font-medium ${regType === 'team' ? 'text-purple-600' : 'text-brand-600'}`}>"AI Systems Cheat Sheet"</span> and future updates.
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
                  regType === 'team' 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 shadow-purple-500/25 hover:shadow-purple-500/40'
                    : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-brand-500/25 hover:shadow-brand-500/40'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : regType === 'team' ? (
                  <>
                    <Users className="w-5 h-5" />
                    Register Team ({formData.teamSize})
                  </>
                ) : (
                  <>
                    Complete Registration
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