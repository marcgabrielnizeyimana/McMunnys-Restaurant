import { FaqItem } from '../types';

export const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: {
      en: 'What are your operating hours and days?',
      fr: 'Quels sont vos horaires et jours d\'ouverture ?'
    },
    answer: {
      en: 'McMunnys Restaurant is open Monday through Saturday from 11:00 AM to 8:00 PM for lunch and dinner service. We are closed on Sundays to allow our dedicated culinary team to rest with family.',
      fr: 'Le restaurant McMunnys est ouvert du lundi au samedi de 11h00 à 20h00 pour les services du midi et du soir. Nous sommes fermés le dimanche.'
    },
    category: 'general'
  },
  {
    id: 'faq-2',
    question: {
      en: 'Do you offer takeout (take away) and dine-in?',
      fr: 'Proposez-vous la vente à emporter et le service sur place ?'
    },
    answer: {
      en: 'Yes! We offer full dine-in table service in our comfortable dining room as well as quick takeout (take away). You can place your takeout order via our online form or by calling us directly at +1 (204) 636-2601.',
      fr: 'Oui ! Nous proposons le service complet en salle à manger ainsi que la vente à emporter rapide. Vous pouvez commander via notre formulaire ou en appelant au +1 (204) 636-2601.'
    },
    category: 'dining'
  },
  {
    id: 'faq-3',
    question: {
      en: 'Is McMunnys Restaurant wheelchair accessible?',
      fr: 'Le restaurant McMunnys est-il accessible aux personnes à mobilité réduite ?'
    },
    answer: {
      en: 'Yes, absolutely. We have designated wheelchair-accessible parking, a step-free entrance ramp, spacious seating aisles, and clean accessible public restrooms.',
      fr: 'Oui, tout à fait. Nous disposons d\'un stationnement adapté, d\'une rampe d\'accès sans marche, d\'allées spacieuses et de toilettes publiques accessibles.'
    },
    category: 'location'
  },
  {
    id: 'faq-4',
    question: {
      en: 'What payment methods do you accept?',
      fr: 'Quels modes de paiement acceptez-vous ?'
    },
    answer: {
      en: 'We accept all major Credit Cards (Visa, Mastercard), Interac Debit Cards, and Cash. Contactless tap-to-pay is fully supported.',
      fr: 'Nous acceptons les principales cartes de crédit (Visa, Mastercard), les cartes de débit Interac et les espèces. Le paiement sans contact est disponible.'
    },
    category: 'general'
  },
  {
    id: 'faq-5',
    question: {
      en: 'Where can I park when visiting McMunnys in Erickson?',
      fr: 'Où puis-je me garer lors de ma visite à Erickson ?'
    },
    answer: {
      en: 'We have free on-site parking stalls as well as ample free street parking directly along Main St in Erickson, MB. Parking is convenient and hassle-free even during peak lunch and dinner hours.',
      fr: 'Nous disposons d\'emplacements de stationnement gratuits sur place ainsi que d\'un stationnement gratuit dans la rue le long de Main St à Erickson.'
    },
    category: 'location'
  },
  {
    id: 'faq-6',
    question: {
      en: 'Can you accommodate dietary restrictions and allergies?',
      fr: 'Pouvez-vous vous adapter aux régimes et allergies alimentaires ?'
    },
    answer: {
      en: 'Yes! We offer gluten-free friendly options (such as our AAA Ribeye Steak and loaded potato dishes) and vegetarian selections (like our Garden Harvest Veggie Burger, fresh salads, and vegetarian poutine options). Please inform your server or mention any allergies in your reservation request.',
      fr: 'Oui ! Nous proposons des options adaptées sans gluten (comme notre steak ribeye AAA) et des plats végétariens (comme le burger aux légumes et salades). Veuillez nous signaler vos allergies.'
    },
    category: 'dining'
  },
  {
    id: 'faq-7',
    question: {
      en: 'Do you accept table reservations for large groups?',
      fr: 'Acceptez-vous les réservations pour les grands groupes ?'
    },
    answer: {
      en: 'Yes! We warmly welcome group reservations, family celebrations, and touring coaches. Please use our online "Book a Table" feature or call us in advance at +1 (204) 636-2601 to ensure the best table arrangement.',
      fr: 'Oui ! Nous accueillons chaleureusement les groupes, réunions de famille et voyageurs. Utilisez notre bouton "Réserver une Table" ou appelez le +1 (204) 636-2601.'
    },
    category: 'dining'
  }
];
