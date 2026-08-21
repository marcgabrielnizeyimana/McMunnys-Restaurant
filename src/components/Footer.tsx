import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Facebook, Heart, Check, ArrowRight, Shield, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenPrivacy, onOpenTerms }) => {
  const t = translations[lang];
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  return (
    <footer id="main-footer" className="bg-[#0A0908] text-[#C2BAB0] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid (matching Delish 4-column footer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" showTagline />
            
            <p className="text-xs sm:text-sm text-[#A0988E] leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="space-y-2 text-xs text-[#D5CEC5]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>30 Main St, Erickson, MB R0J 0P0, Canada</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A745] shrink-0" />
                <a href="tel:+12046362601" className="hover:text-white font-bold transition-colors">
                  +1 (204) 636-2601
                </a>
              </p>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-facebook-btn"
                href="https://www.facebook.com/search/top?q=Midnight%20Annie%27s"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                id="footer-phone-btn"
                href="tel:+12046362601"
                aria-label="Phone"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] text-white flex items-center justify-center transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                id="footer-email-btn"
                href="mailto:midnightannies@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4A745] text-white flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0988E]">
              <li>
                <a href="#about" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.about}</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.menu}</span>
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.categories}</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.gallery}</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.whyUs}</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.faq}</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C89B3C]" />
                  <span>{t.nav.location}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Highlights (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider">
              {t.footer.menuHighlights}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0988E]">
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D4A745]" />
                  <span>McMunnys Bacon Deluxe</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D4A745]" />
                  <span>10oz Manitoba AAA Ribeye</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D4A745]" />
                  <span>Authentic Canadian Poutine</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D4A745]" />
                  <span>Erickson Fresh Roast Coffee</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4A745] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#D4A745]" />
                  <span>Warm Apple Berry Crumble</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-black text-white uppercase tracking-wider">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#A0988E] leading-relaxed">
              {t.footer.newsletterDesc}
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                className="w-full pl-3.5 pr-12 py-3 rounded-xl bg-[#181614] border border-white/15 text-white placeholder-[#787068] text-xs focus:outline-none focus:border-[#C89B3C] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black flex items-center justify-center transition-colors cursor-pointer"
              >
                {subscribed ? <Check className="w-4 h-4 text-[#121110]" /> : <Send className="w-4 h-4 text-[#121110]" />}
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 font-bold animate-fade-in">
                {t.footer.subscribedMsg}
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787068]">
          <p>{t.footer.copyright}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
