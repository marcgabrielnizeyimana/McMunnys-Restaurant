import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { faqItems } from '../data/faqData';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#161412] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            id="faq-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.faq.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>

          <p className="text-sm sm:text-base text-[#A0988E]">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#201D1A] rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                    {faq.question[lang]}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-[#D4A745] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C89B3C] text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#C2BAB0] leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
