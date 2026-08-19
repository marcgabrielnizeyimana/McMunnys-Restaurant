import React from 'react';
import { Star, Sparkles, Quote, ThumbsUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { testimonials } from '../data/testimonialsData';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="reviews" className="py-24 bg-[#121110] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            id="reviews-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.reviews.badge}</span>
          </div>

          <h2 
            id="reviews-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.reviews.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>

          <p className="text-sm sm:text-base text-[#A0988E]">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              id={`testimonial-${test.id}`}
              className="bg-[#1C1917] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#C89B3C]/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
            >
              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D4A745] mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A745]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#D5CEC5] leading-relaxed italic">
                  "{test.content[lang]}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#C89B3C]"
                />
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    {test.name}
                  </h3>
                  <p className="text-[11px] text-[#D4A745] font-medium">
                    {test.role[lang]} &bull; {test.location}
                  </p>
                </div>
              </div>

              {/* Background watermark quote */}
              <Quote className="w-16 h-16 absolute top-4 right-4 text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Facebook Community Callout */}
        <div className="mt-12 text-center">
          <a
            id="facebook-review-link"
            href="https://www.facebook.com/mcmunnys/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8E2D9] hover:text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-all duration-200"
          >
            <ThumbsUp className="w-4 h-4 text-[#1877F2]" />
            <span>{t.reviews.writeReview}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
