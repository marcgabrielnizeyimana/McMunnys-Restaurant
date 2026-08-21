import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah & Dave Miller',
    role: {
      en: 'Local Erickson Residents',
      fr: 'Résidents d\'Erickson'
    },
    location: 'Erickson, MB',
    rating: 5,
    content: {
      en: 'McMunnys\'s is our weekly Friday dinner tradition! The steaks are always grilled to perfection, the burger portions are enormous, and the coffee is without question the best in town. Wonderful, friendly staff.',
      fr: 'McMunnys\'s est notre tradition du vendredi soir ! Les steaks sont toujours parfaitement grillés, les portions de burgers sont généreuses et le café est sans conteste le meilleur de la région. Personnel adorable.'
    },
    date: 'August 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Marc Tremblay',
    role: {
      en: 'Riding Mountain Traveler',
      fr: 'Voyageur au Parc du Mont-Riding'
    },
    location: 'Winnipeg, MB',
    rating: 5,
    content: {
      en: 'Stopped here on our way back from Clear Lake / Riding Mountain National Park. The burger was insanely flavorful, the poutine had authentic squeaky curds, and the apple crumble dessert was divine. Highly recommend!',
      fr: 'Nous nous sommes arrêtés sur le chemin du retour de Clear Lake / Mont-Riding. Le burger était exceptionnel, la poutine avait de vrais grains qui couinent et le crumble aux pommes était divin. Je recommande vivement !'
    },
    date: 'July 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Jennifer Kowalchuk',
    role: {
      en: 'Family Road Tripper',
      fr: 'En Voyage en Famille'
    },
    location: 'Brandon, MB',
    rating: 5,
    content: {
      en: 'Great spot with easy wheelchair accessibility and plenty of free parking right in front. The kids loved the chicken tenders and fries, while my husband and I had the BBQ ribs. Clean restrooms and fast takeout too!',
      fr: 'Superbe endroit avec un accès très facile en fauteuil roulant et plein de places de parking gratuites. Les enfants ont adoré les tenders de poulet et mon mari a dévoré les côtes levées. Très propre et rapide !'
    },
    date: 'June 2026',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  }
];
