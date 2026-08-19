import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Accessibility, CreditCard, Sparkles, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LocationHoursSectionProps {
  lang: Language;
}

export const LocationHoursSection: React.FC<LocationHoursSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const googleMapsUrl =
    'https://www.google.com/maps/place/McMunnys+Restaurant/@50.4981293,-99.9162067,17z/data=!4m17!1m10!3m9!1s0x52e639920f7fe111:0xf1749bdda9c64906!2sMcMunnys+Restaurant!8m2!3d50.4981293!4d-99.9162067!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11ywwryvb1!3m5!1s0x52e639920f7fe111:0xf1749bdda9c64906!8m2!3d50.4981293!4d-99.9162067!16s%2Fg%2F11ywwryvb1?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D';

  const scheduleDays = [
    { day: lang === 'en' ? 'Monday' : 'Lundi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Tuesday' : 'Mardi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Wednesday' : 'Mercredi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Thursday' : 'Jeudi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Friday' : 'Vendredi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Saturday' : 'Samedi', hours: '11:00 AM – 8:00 PM', open: true },
    { day: lang === 'en' ? 'Sunday' : 'Dimanche', hours: lang === 'en' ? 'Closed' : 'Fermé', open: false }
  ];

  return (
    <section id="location" className="py-24 bg-[#121110] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            id="location-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.location.badge}</span>
          </div>

          <h2 
            id="location-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.location.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Essential Details, Hours & Amenities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Address & Phone */}
            <div className="bg-[#1C1917] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Address block */}
                <div>
                  <div className="flex items-center gap-2 text-[#D4A745] mb-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-wider">{t.location.addressLabel}</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    30 Main St
                  </p>
                  <p className="text-xs sm:text-sm text-[#A0988E] mt-0.5">
                    Erickson, MB R0J 0P0, Canada
                  </p>
                  <p className="text-[11px] text-[#D4A745] mt-2 font-medium">
                    (In the heart of Erickson near Hwy 10)
                  </p>
                </div>

                {/* Telephone block */}
                <div>
                  <div className="flex items-center gap-2 text-[#D4A745] mb-2">
                    <Phone className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-wider">{t.location.phoneLabel}</span>
                  </div>
                  <a
                    id="location-phone-btn"
                    href="tel:+12046362601"
                    className="text-base sm:text-lg font-extrabold text-white hover:text-[#D4A745] transition-colors block"
                  >
                    +1 (204) 636-2601
                  </a>
                  <p className="text-xs text-[#A0988E] mt-1">
                    Direct line for takeout orders &amp; bookings
                  </p>
                </div>

              </div>

              {/* Action Get Directions Button (Requirement 15) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <a
                  id="get-directions-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#C89B3C]/25 border border-[#F0DCB4]/30 transition-all duration-200 hover:scale-105 flex items-center gap-2.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.location.getDirections}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  id="call-direct-btn"
                  href="tel:+12046362601"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8E2D9] hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all duration-200 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D4A745]" />
                  <span>{t.location.callDirect}</span>
                </a>
              </div>
            </div>

            {/* Card 2: Hours Breakdown */}
            <div className="bg-[#1C1917] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-[#D4A745] mb-5">
                <Clock className="w-5 h-5" />
                <h3 className="font-display text-base font-black text-white uppercase tracking-wider">
                  {t.location.hoursLabel}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {scheduleDays.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-lg border ${
                      item.open
                        ? 'bg-white/[0.02] border-white/5 text-[#D5CEC5]'
                        : 'bg-red-950/20 border-red-500/20 text-red-400 font-bold'
                    }`}
                  >
                    <span className="font-bold">{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Amenities & Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1C1917] p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <Car className="w-5 h-5 text-[#D4A745] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">Free Parking</p>
                  <p className="text-[11px] text-[#A0988E] mt-0.5">Street &amp; Lot spaces</p>
                </div>
              </div>

              <div className="bg-[#1C1917] p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <Accessibility className="w-5 h-5 text-[#D4A745] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">Accessibility</p>
                  <p className="text-[11px] text-[#A0988E] mt-0.5">Wheelchair access</p>
                </div>
              </div>

              <div className="bg-[#1C1917] p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#D4A745] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase">Easy Payment</p>
                  <p className="text-[11px] text-[#A0988E] mt-0.5">Cards, Debit &amp; Cash</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#1C1917] rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full flex flex-col">
              
              {/* Map Preview Embed */}
              <div className="relative w-full h-[380px] sm:h-[450px] bg-[#121110]">
                <iframe
                  title="McMunnys Restaurant Google Map"
                  src="https://maps.google.com/maps?q=50.4981293,-99.9162067&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 filter contrast-110 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Overlaid Location Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-white/10 shadow-lg pointer-events-none">
                  <div className="flex items-center gap-2 text-white text-xs font-black uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping"></span>
                    <span>McMunnys Restaurant</span>
                  </div>
                  <p className="text-[10px] text-[#A0988E] mt-0.5">Erickson, Manitoba</p>
                </div>
              </div>

              {/* Map card footer */}
              <div className="p-5 bg-[#181614] border-t border-white/10 flex items-center justify-between gap-4">
                <div className="text-xs text-[#A0988E]">
                  Latitude: 50.4981 &bull; Longitude: -99.9162
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D4A745] hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
