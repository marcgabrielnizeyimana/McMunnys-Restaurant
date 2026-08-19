import React, { useState } from 'react';
import { Eye, Sparkles, Filter, X } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { translations } from '../data/translations';
import { galleryItems } from '../data/galleryData';

interface FoodGalleryProps {
  lang: Language;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: t.gallery.all },
    { id: 'mains', label: t.gallery.mains },
    { id: 'burgers', label: t.gallery.burgers },
    { id: 'coffee', label: t.gallery.coffee },
    { id: 'interior', label: t.gallery.interior }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => {
        const cat = item.category.en.toLowerCase();
        if (selectedCategory === 'mains') return cat.includes('mains') || cat.includes('steak');
        if (selectedCategory === 'burgers') return cat.includes('burger') || cat.includes('wrap');
        if (selectedCategory === 'coffee') return cat.includes('coffee') || cat.includes('drink');
        if (selectedCategory === 'interior') return cat.includes('atmosphere');
        return true;
      });

  return (
    <section id="gallery" className="py-24 bg-[#121110] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Centered Badge (Delish reference style) */}
        <div 
          id="gallery-badge"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>{t.gallery.badge}</span>
        </div>

        {/* Heading */}
        <h2 
          id="gallery-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
        >
          {t.gallery.heading}
        </h2>

        {/* Decorative Diamond Divider (matching reference) */}
        <div className="flex items-center justify-center gap-1.5 my-4">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#A0988E] mb-10">
          {t.gallery.subtitle}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] font-black shadow-lg shadow-[#C89B3C]/20 border border-[#F0DCB4]/40 scale-105'
                  : 'bg-white/5 text-[#B8B0A5] hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Food Gallery 3-Column Grid (matching the 6/8 block layout in reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#1A1816] border border-white/10 shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gold Gradient Overlay on Hover (Matching the Delish active eye tile in reference screenshot) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8C6527]/95 via-[#C89B3C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                
                {/* Center Eye Action Button */}
                <div className="w-12 h-12 rounded-full bg-white text-[#8C6527] flex items-center justify-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 mb-3">
                  <Eye className="w-6 h-6" strokeWidth={2.2} />
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F8F8F0]">
                  {item.category[lang]}
                </span>
                
                <h3 className="font-display text-base font-bold text-white mt-1 leading-snug">
                  {item.title[lang]}
                </h3>

                <p className="text-xs text-white/90 mt-1 line-clamp-2 max-w-xs">
                  {item.caption[lang]}
                </p>
              </div>

              {/* Subtle bottom badge when not hovered */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 group-hover:opacity-0 transition-opacity">
                <span className="text-xs font-bold text-white truncate">{item.title[lang]}</span>
                <span className="text-[10px] text-[#D4A745] uppercase font-bold tracking-wider">{item.category[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Gallery */}
      {activeItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#181614] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96 w-full bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title[lang]}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#181614] text-left">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E05A36]">
                  {activeItem.category[lang]}
                </span>
                <span className="text-xs text-[#A0988E]">McMunnys Culinary Showcase</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {activeItem.title[lang]}
              </h3>

              <p className="text-sm text-[#C2BAB0] leading-relaxed">
                {activeItem.caption[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
