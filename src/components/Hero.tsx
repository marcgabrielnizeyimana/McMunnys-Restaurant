import React from 'react';
import { Calendar, Utensils, Navigation, Coffee, Accessibility, Car, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenReservation }) => {
  const t = translations[lang];

  return (
    <section 
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#121110] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5"
    >
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
          alt="McMunnys Restaurant Interior Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-[#121110]/50 to-[#121110]/90"></div>
        {/* Subtle decorative glow in logo gold */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Eyebrow Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24201A] border border-[#C89B3C]/40 text-[#D4A745] text-xs font-bold uppercase tracking-widest shadow-md mb-6 animate-fade-in"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4A745]" />
          <span>{t.hero.badge}</span>
          <span className="text-[#8E8478]">&bull;</span>
          <span className="text-[#D5CEC5]">Erickson, Manitoba</span>
        </div>

        {/* Hero Main Heading */}
        <h1 
          id="hero-main-heading"
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          {t.hero.title1}{' '}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E6CCA0] via-[#D4A745] to-[#C89B3C]">
            {t.hero.title2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#C8C0B5] max-w-2xl font-normal leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons Group */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-book-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-sm uppercase tracking-wider shadow-xl shadow-[#C89B3C]/20 border border-[#F0DCB4]/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.hero.bookTableBtn}</span>
          </button>

          <a
            id="hero-menu-btn"
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm uppercase tracking-wider border border-white/15 hover:border-[#D4A745]/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Utensils className="w-4 h-4 text-[#D4A745]" />
            <span>{t.hero.viewMenuBtn}</span>
          </a>

          <a
            id="hero-directions-btn"
            href="https://www.google.com/maps/place/McMunnys+Restaurant/@50.4981293,-99.9162067,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1D1A18] hover:bg-[#25211E] text-[#D5CEC5] hover:text-white font-bold text-sm tracking-wide border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#D4A745]" />
            <span>{t.hero.getDirectionsBtn}</span>
          </a>
        </div>

        {/* Feature Highlights Row */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div 
            id="hero-feature-coffee"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1816]/80 border border-white/5 text-left"
          >
            <div className="p-2 rounded-lg bg-[#C89B3C]/15 text-[#D4A745]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.quickHighlights.coffee}</p>
              <p className="text-[11px] text-[#A0988E]">Fresh Roasts All Day</p>
            </div>
          </div>

          <div 
            id="hero-feature-takeout"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1816]/80 border border-white/5 text-left"
          >
            <div className="p-2 rounded-lg bg-[#D4A745]/15 text-[#D4A745]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.quickHighlights.takeout}</p>
              <p className="text-[11px] text-[#A0988E]">Lunch &amp; Dinner Service</p>
            </div>
          </div>

          <div 
            id="hero-feature-accessible"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1816]/80 border border-white/5 text-left"
          >
            <div className="p-2 rounded-lg bg-[#C89B3C]/15 text-[#D4A745]">
              <Accessibility className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.quickHighlights.accessible}</p>
              <p className="text-[11px] text-[#A0988E]">Ramp &amp; Wide Access</p>
            </div>
          </div>

          <div 
            id="hero-feature-parking"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1A1816]/80 border border-white/5 text-left"
          >
            <div className="p-2 rounded-lg bg-[#D4A745]/15 text-[#D4A745]">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.quickHighlights.parking}</p>
              <p className="text-[11px] text-[#A0988E]">Convenient &amp; On-Site</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
