export type Language = 'en' | 'fr';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  price: number;
  category: 'mains' | 'burgers' | 'appetizers' | 'coffee' | 'desserts';
  image: string;
  tags?: {
    en: string[];
    fr: string[];
  };
  isPopular?: boolean;
  isHouseSpecialty?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  calories?: string;
}

export interface MenuCategory {
  id: 'all' | 'mains' | 'burgers' | 'appetizers' | 'coffee' | 'desserts';
  name: {
    en: string;
    fr: string;
  };
  subtitle: {
    en: string;
    fr: string;
  };
  image: string;
  description: {
    en: string;
    fr: string;
  };
}

export interface GalleryItem {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  category: {
    en: string;
    fr: string;
  };
  image: string;
  caption: {
    en: string;
    fr: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: {
    en: string;
    fr: string;
  };
  location: string;
  rating: number;
  content: {
    en: string;
    fr: string;
  };
  date: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: {
    en: string;
    fr: string;
  };
  answer: {
    en: string;
    fr: string;
  };
  category?: 'general' | 'dining' | 'location';
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReservationPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: 'indoor' | 'quiet' | 'any';
  specialRequests?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
