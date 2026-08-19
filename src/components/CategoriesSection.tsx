import React from 'react';
import { Sparkles, ArrowRight, Utensils, Flame, Coffee, Cake, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { menuCategories } from '../data/menuData';

interface CategoriesSectionProps {
  lang: Language;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ lang, onSelectCategory }) => {
  const t = translations[lang];

  return (
    <section id="categories" className="py-24 bg-[#181614] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge (matching Delish reference: "DISCOVER FOOD") */}
        <div 
          id="categories-badge"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>{t.categories.badge}</span>
        </div>

        {/* Heading */}
        <h2 
          id="categories-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
        >
          {t.categories.heading}
        </h2>

        {/* Decorative Diamond Divider */}
        <div className="flex items-center justify-center gap-1.5 my-4">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#A0988E] mb-14">
          {t.categories.subtitle}
        </p>

        {/* Categories Grid (matching the 3-card card row in Delish reference screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className="group bg-[#201D1A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C89B3C]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col text-left cursor-pointer"
            >
              {/* Category Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
                <img
                  src={cat.image}
                  alt={cat.name[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201D1A] via-transparent to-transparent opacity-80"></div>
                
                {/* Category tag badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#121110]/80 backdrop-blur-md border border-white/10 text-[10px] font-extrabold uppercase tracking-wider text-[#D4A745]">
                  {cat.id === 'mains' ? 'AAA Canadian Cuts' : cat.id === 'burgers' ? '100% Pure Beef' : cat.id === 'coffee' ? 'Great Coffee' : 'Fresh Daily'}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-black text-white uppercase tracking-wide group-hover:text-[#D4A745] transition-colors leading-tight">
                    {cat.name[lang]}
                  </h3>
                  <p className="text-xs text-[#E6CCA0] font-bold mt-1">
                    {cat.subtitle[lang]}
                  </p>
                  <p className="text-xs text-[#A0988E] mt-2.5 leading-relaxed line-clamp-3">
                    {cat.description[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#D4A745] group-hover:text-[#E6CCA0] transition-colors">
                  <span className="uppercase tracking-wider text-[11px]">{t.categories.viewCategory}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
