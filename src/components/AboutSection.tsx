import React, { useState } from 'react';
import { Sparkles, Utensils, ShieldCheck, Coffee, ArrowRight, X, Heart, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#161412] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      {/* Subtle background light effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content & Features (matching Delish reference layout) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div 
              id="about-badge"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>{t.about.badge}</span>
            </div>

            {/* Main Heading */}
            <h2 
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase"
            >
              {t.about.heading}
            </h2>

            {/* Descriptive paragraphs */}
            <p className="mt-6 text-[#C2BAB0] leading-relaxed text-base sm:text-lg">
              {t.about.story1}
            </p>
            <p className="mt-3 text-[#A0988E] leading-relaxed text-sm">
              {t.about.story2}
            </p>

            {/* Feature List Items with Custom Left Borders & Icons */}
            <div className="mt-8 space-y-6 w-full">
              {/* Feature 1: Quality Food */}
              <div 
                id="about-feature-quality"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border-l-4 border-l-[#C89B3C] border-y border-r border-white/5 transition-all hover:bg-white/[0.06]"
              >
                <div className="p-2.5 rounded-xl bg-[#C89B3C]/15 text-[#D4A745] shrink-0 mt-0.5">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black text-white tracking-wide uppercase">
                    {t.about.features[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0988E] mt-1 leading-relaxed">
                    {t.about.features[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2: Supply Chain & Freshness */}
              <div 
                id="about-feature-supply"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border-l-4 border-l-[#E6CCA0] border-y border-r border-white/5 transition-all hover:bg-white/[0.06]"
              >
                <div className="p-2.5 rounded-xl bg-[#D4A745]/15 text-[#D4A745] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black text-white tracking-wide uppercase">
                    {t.about.features[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0988E] mt-1 leading-relaxed">
                    {t.about.features[1].description}
                  </p>
                </div>
              </div>

              {/* Feature 3: Artisan Coffee */}
              <div 
                id="about-feature-coffee"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border-l-4 border-l-[#C89B3C] border-y border-r border-white/5 transition-all hover:bg-white/[0.06]"
              >
                <div className="p-2.5 rounded-xl bg-[#C89B3C]/15 text-[#D4A745] shrink-0 mt-0.5">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black text-white tracking-wide uppercase">
                    {t.about.features[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A0988E] mt-1 leading-relaxed">
                    {t.about.features[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Read More / Our Story Button */}
            <div className="mt-8">
              <button
                id="about-read-more-btn"
                onClick={() => setShowStoryModal(true)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-transparent hover:bg-white/5 text-[#D4A745] hover:text-[#E6CCA0] text-xs font-black uppercase tracking-widest border border-[#C89B3C]/40 hover:border-[#D4A745] transition-all duration-300 cursor-pointer"
              >
                <span>{t.about.readMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Culinary Image (matching Delish layout) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Outer decorative card shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C89B3C]/20 via-transparent to-[#D4A745]/20 rounded-3xl blur-xl opacity-70"></div>

              {/* Main Image Frame */}
              <div 
                id="about-hero-image-card"
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#201D1A]"
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                  alt="Sizzling steak and fresh side skewers at McMunnys Restaurant"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating highlight badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#C89B3C] text-black">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-wider">
                        Erickson\'s Favorite Gathering Spot
                      </p>
                      <p className="text-[11px] text-[#A0988E]">
                        Serving quality meals with pride &amp; passion
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-[#D4A745]/20 text-[#D4A745] text-[10px] font-extrabold uppercase tracking-wide">
                    Est. Local Pride
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Story Heritage Modal */}
      {showStoryModal && (
        <div 
          id="story-heritage-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-xl bg-[#1E1B18] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            <button
              id="close-story-modal-btn"
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 p-2 text-[#A0988E] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-[#D4A745] mb-3">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-xs font-black uppercase tracking-widest">McMunnys Heritage</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              {t.about.modalTitle}
            </h3>

            <div className="space-y-4 text-sm text-[#C2BAB0] leading-relaxed">
              <p>{t.about.modalText}</p>
              <p>
                {lang === 'en' 
                  ? 'Located right on Main Street in Erickson, Manitoba, our kitchen is proud to welcome everyone from hardworking local farmers and families to visitors taking in the stunning wilderness of Riding Mountain National Park. We make our gravies, season our cuts, and brew every pot of coffee with genuine care.'
                  : 'Situé sur Main Street à Erickson, au Manitoba, notre établissement est fier d\'accueillir résidents, familles et voyageurs explorant le magnifique parc national du Mont-Riding. Nous préparons nos sauces, assaisonnons nos viandes et infusons chaque carafe de café avec une attention sincère.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Close Window' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
