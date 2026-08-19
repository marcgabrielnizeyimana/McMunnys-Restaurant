import React from 'react';
import { Calendar, Phone, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaBannerProps {
  lang: Language;
  onOpenReservation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang, onOpenReservation }) => {
  const t = translations[lang];

  return (
    <section 
      id="cta-banner"
      className="relative py-20 sm:py-24 bg-[#141210] text-white overflow-hidden border-y border-white/10"
    >
      {/* Background Image with Dark Tint (Matching the Delish bottom banner) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt="Dining at McMunnys Restaurant Erickson"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/95 via-[#121110]/70 to-[#121110]/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text Block (Delish screenshot style) */}
          <div className="text-center lg:text-left max-w-2xl">
            <span 
              id="cta-badge"
              className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#D4A745] block mb-2"
            >
              {t.cta.badge}
            </span>

            <h2 
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight"
            >
              {t.cta.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#D5CEC5] mt-3 leading-relaxed">
              {t.cta.subtitle}
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              id="cta-book-table-btn"
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest border-2 border-[#D4A745]/70 hover:border-[#D4A745] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 shadow-2xl"
            >
              <Calendar className="w-4 h-4 text-[#D4A745]" />
              <span>{t.cta.bookBtn}</span>
            </button>

            <a
              id="cta-phone-call-btn"
              href="tel:+12046362601"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#C89B3C]/25 border border-[#F0DCB4]/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t.cta.callBtn}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
