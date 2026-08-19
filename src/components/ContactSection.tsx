import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Sparkles, CheckCircle2, Facebook, MessageSquare } from 'lucide-react';
import { Language, ContactPayload } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#161412] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            id="contact-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.contact.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>

          <p className="text-sm sm:text-base text-[#A0988E]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Social Media (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#201D1A] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-display text-xl font-black text-white uppercase">
                {lang === 'en' ? 'Direct Information' : 'Informations Directes'}
              </h3>

              {/* Phone item */}
              <a
                id="contact-direct-phone"
                href="tel:+12046362601"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#C89B3C]/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#C89B3C]/15 text-[#D4A745] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0988E] uppercase font-bold tracking-wider">{t.contact.phone}</p>
                  <p className="text-base font-extrabold text-white group-hover:text-[#D4A745] transition-colors mt-0.5">
                    +1 (204) 636-2601
                  </p>
                </div>
              </a>

              {/* Email item */}
              <a
                id="contact-direct-email"
                href="mailto:mcmunnys@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4A745]/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#D4A745]/15 text-[#D4A745] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0988E] uppercase font-bold tracking-wider">{t.contact.email}</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#D4A745] transition-colors mt-0.5">
                    mcmunnys@gmail.com
                  </p>
                </div>
              </a>

              {/* Location item */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-3 rounded-xl bg-white/5 text-[#D4A745]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#A0988E] uppercase font-bold tracking-wider">Erickson Location</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    30 Main St, Erickson, MB R0J 0P0
                  </p>
                </div>
              </div>

              {/* Social Media Link */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-[#A0988E] uppercase tracking-wider mb-3">
                  {t.contact.followUs}
                </p>
                <a
                  id="contact-facebook-link"
                  href="https://www.facebook.com/mcmunnys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1877F2]/15 text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-[#1877F2]/30 transition-all duration-200 text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook &bull; /mcmunnys</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#201D1A] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              
              {isSuccess ? (
                <div 
                  id="contact-success-banner"
                  className="py-12 px-6 text-center space-y-4 animate-fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-[#C2BAB0] max-w-md mx-auto">
                    {t.contact.successMsg}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.contact.name} <span className="text-[#D4A745]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#161412] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.contact.phone} <span className="text-[#D4A745]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (204) 555-0199"
                        className="w-full px-4 py-3 rounded-xl bg-[#161412] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.contact.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#161412] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.contact.subject}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={lang === 'en' ? 'e.g. Group Dinner / Special Event' : 'ex. Repas de groupe / Événement'}
                        className="w-full px-4 py-3 rounded-xl bg-[#161412] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                      {t.contact.message} <span className="text-[#D4A745]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Tell us how we can help you...' : 'Dites-nous comment nous pouvons vous aider...'}
                      className="w-full px-4 py-3 rounded-xl bg-[#161412] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#C89B3C]/25 border border-[#F0DCB4]/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sending}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.sendBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
