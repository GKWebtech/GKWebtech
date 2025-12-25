import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string; // Unique slug for routing
  image: string;
  title: string;
  description: string;
  fullDescription: string; // Detailed description for the page
  features: string[]; // List of benefits/features
  detailImage: string; // Larger image for the detail page
}

export interface Project {
  id: string; // Changed to string for URL slugs
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  mediaStats: { photos: number; videos: number };
  // Detailed fields
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  gallery: string[]; // Array of image URLs
  youtubeIds?: string[]; // Array of video URLs
}

export interface Stat {
  value: string;
  label: string;
}

export interface Tool {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
}

export interface TeamMember {
  name: string;
  education: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: string; // HTML or Markdown string for the full article
  tags?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}