export interface FAQItem {
  question: string;
  answer: string;
}

export interface CurriculumModule {
  day: string;
  title: string;
  theme: string;
  topics: string[];
  outcome: string;
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}