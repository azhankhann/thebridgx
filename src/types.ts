export interface NavItem {
  label: string;
  href: string;
}

export interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  badge?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  agencyName: string;
  niche: string;
  message: string;
}
