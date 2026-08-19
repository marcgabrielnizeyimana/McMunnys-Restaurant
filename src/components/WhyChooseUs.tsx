import React from 'react';
import { Coffee, HeartHandshake, Accessibility, Car, Sparkles, UtensilsCrossed, Award, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = translations[lang];

  const highlights = [
    {
      icon: Coffee,
      title: t.whyUs.items[0].title,
      desc: t.whyUs.items[0].desc,
      color: 'from-[#A87E28] to-[#684C15]'
    },
    {
      icon: HeartHandshake,
      title: t.whyUs.items[1].title,
      desc: t.whyUs.items[1].desc,
      color: 'from-[#C89B3C] to-[#8C6527]'
    },
    {
      icon: Accessibility,
      title: t.whyUs.items[2].title,
      desc: t.whyUs.items[2].desc,
      color: 'from-[#8C6527] to-[#543D15]'
    },
    {
      icon: Car,
      title: t.whyUs.items[3].title,
      desc: t.whyUs.items[3].desc,
      color: 'from-[#D4A745] to-[#A87E28]'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#161412] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            id="why-us-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 
            id="why-us-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.whyUs.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`why-card-${index}`}
                className="bg-[#201D1A] rounded-2xl p-6 border border-white/10 hover:border-[#C89B3C]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg shadow-black/40 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-lg font-black text-white uppercase tracking-wide group-hover:text-[#D4A745] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A0988E] mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-bold text-[#D4A745] uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>McMunnys Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audience / Hospitality banner */}
        <div className="mt-12 bg-gradient-to-r from-[#201D1A] via-[#2A2521] to-[#201D1A] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-[#C89B3C]/20 text-[#D4A745] shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white uppercase">
                {lang === 'en' ? 'Welcoming Every Kind of Diner' : 'Accueillant Tous les Convives'}
              </h4>
              <p className="text-xs text-[#A0988E] mt-0.5">
                {lang === 'en'
                  ? 'From solo lunch breaks and travelers on Hwy 10 to touring groups and large family dinners.'
                  : 'Des repas en solo aux groupes de voyageurs et grands dîners de famille.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-[#D5CEC5]">
              Family Friendly
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-[#D5CEC5]">
              Groups Welcome
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
