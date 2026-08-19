import React, { useMemo } from 'react';
import { Clock, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ lang, onToggleLang }) => {
  const t = translations[lang];

  // Calculate live open status in Manitoba time zone (America/Winnipeg)
  const isOpen = useMemo(() => {
    try {
      const now = new Date();
      // Format to Winnipeg / Central Time
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Winnipeg',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        weekday: 'short'
      });
      const parts = formatter.formatToParts(now);
      const weekday = parts.find(p => p.type === 'weekday')?.value; // e.g. "Mon", "Sun"
      const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
      
      // Closed on Sundays
      if (weekday === 'Sun') return false;
      // Open Mon-Sat 11:00 to 20:00
      return hour >= 11 && hour < 20;
    } catch {
      return true;
    }
  }, []);

  return (
    <div id="restaurant-topbar" className="bg-[#0D0C0B] text-[#B8B0A5] text-xs border-b border-white/5 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Schedule & Live Status */}
        <div className="flex items-center flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>{t.topbar.hoursMonSat}</span>
            <span className="text-[#686058]">({t.topbar.sundayClosed})</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span 
              id="live-status-badge"
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                isOpen 
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-amber-950/80 text-[#D4A745] border border-[#C89B3C]/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-[#D4A745]'}`}></span>
              {isOpen ? t.topbar.openNow : t.topbar.closedNow}
            </span>
          </div>
        </div>

        {/* Right: Contact details & Language Switcher */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          <a 
            id="topbar-phone-link"
            href="tel:+12046362601"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            title="Call McMunnys Restaurant"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span className="font-semibold text-[#E8E2D9]">{t.topbar.phone}</span>
          </a>

          <a 
            id="topbar-address-link"
            href="https://www.google.com/maps/place/McMunnys+Restaurant/@50.4981293,-99.9162067,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4A745]" />
            <span className="truncate max-w-[220px]">{t.topbar.address}</span>
          </a>

          {/* Language Switcher */}
          <button
            id="language-toggle-btn"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-200 border border-white/10 hover:border-[#C89B3C]/50 cursor-pointer shadow-sm"
            aria-label="Toggle language between English and French"
          >
            <Globe className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span className="uppercase">{lang === 'en' ? 'EN 🇨🇦' : 'FR 🇨🇦'}</span>
            <span className="text-[10px] text-[#A0988E] font-normal">
              ({lang === 'en' ? 'Passer en Français' : 'Switch to English'})
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
