export interface DifferentialCategory {
  id: string;
  title: string;
  iconName: string;
  badge: string;
  description: string;
  useCases: string[];
  accentColor: string;
}

export interface EbookModule {
  id: string;
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface PainPoint {
  id: string;
  pain: string;
  solution: string;
}

export interface MethodStep {
  step: number;
  label: string;
  action: string;
  role: 'human' | 'ai';
  description: string;
}

export interface TestimonialPlaceholder {
  id: string;
  quote: string;
  author: string;
  role: string;
  segment: string;
  verified: boolean;
  metricPlaceholder?: string;
}

export interface ObjectionItem {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BonusPlaceholder {
  id: string;
  slot: string;
  title: string;
  badge: string;
  description: string;
  status: string;
}
