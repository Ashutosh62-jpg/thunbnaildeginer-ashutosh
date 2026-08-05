export type Category = 
  | 'All' 
  | 'Gaming' 
  | 'Tech' 
  | 'Education' 
  | 'Finance' 
  | 'Documentary' 
  | 'AI' 
  | 'Sports' 
  | 'Travel';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  views: string;
  ctrIncrease: string;
  client: string;
  description: string;
  badge: string;
  gradient: string;
  accentColor: string;
  imageUrl?: string; // Add your real thumbnail image path here! (e.g. '/assets/thumbnails/gaming-thumb.jpg' or 'https://...')
  previewType?: 'gaming' | 'tech' | 'education' | 'finance' | 'doc' | 'ai' | 'sports' | 'travel';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  gradient: string;
  popular?: boolean;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  channel: string;
  subscribers: string;
  avatarBg: string;
  avatarInitial: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  turnaround: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
