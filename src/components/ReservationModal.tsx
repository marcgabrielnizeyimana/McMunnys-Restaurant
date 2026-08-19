import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, Mail, User, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { Language, ReservationPayload } from '../types';
import { translations } from '../data/translations';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<ReservationPayload>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    partySize: 2,
    specialRequests: '',
    seatingPreference: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      id="reservation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={handleResetAndClose}
    >
      <div
        id="reservation-modal-content"
        className="relative max-w-xl w-full bg-[#181614] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-reservation-modal-btn"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-[#A0988E] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl font-black text-white">
              {t.reservation.successTitle}
            </h3>

            <p className="text-sm text-[#C2BAB0] max-w-md mx-auto leading-relaxed">
              {t.reservation.successMsg}
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#201D1A] border border-white/10 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#8E8478]">Name:</span>
                <span className="font-bold text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8478]">Date &amp; Time:</span>
                <span className="font-bold text-[#D4A745]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8478]">Party Size:</span>
                <span className="font-bold text-white">{formData.partySize} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E8478]">Contact:</span>
                <span className="font-bold text-white">{formData.phone}</span>
              </div>
            </div>

            <p className="text-xs text-[#8E8478]">
              Need to modify or cancel? Call us directly at <a href="tel:+12046362601" className="text-[#D4A745] font-bold">+1 (204) 636-2601</a>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#D4A745] mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">McMunnys Dining</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              {t.reservation.modalTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#A0988E] mt-1 mb-6">
              {t.reservation.modalSubtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                    {t.reservation.name} <span className="text-[#D4A745]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                    {t.reservation.phone} <span className="text-[#D4A745]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (204) 555-0123"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                    {t.reservation.date} <span className="text-[#D4A745]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                    {t.reservation.time} <span className="text-[#D4A745]">*</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option value="11:30">11:30 AM (Lunch)</option>
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:00">1:00 PM (Lunch)</option>
                    <option value="17:00">5:00 PM (Dinner)</option>
                    <option value="17:30">5:30 PM (Dinner)</option>
                    <option value="18:00">6:00 PM (Dinner)</option>
                    <option value="18:30">6:30 PM (Dinner)</option>
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="19:30">7:30 PM (Dinner)</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                    {t.reservation.partySize} <span className="text-[#D4A745]">*</span>
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: parseInt(e.target.value, 10) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="8">8+ Large Party</option>
                  </select>
                </div>
              </div>

              {/* Seating preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                  {t.reservation.seating}
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'standard', label: t.reservation.standard },
                    { id: 'booth', label: t.reservation.booth },
                    { id: 'window', label: t.reservation.window }
                  ].map((seat) => (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, seatingPreference: seat.id as any })}
                      className={`py-2 px-3 rounded-xl border text-center font-bold transition-colors cursor-pointer ${
                        formData.seatingPreference === seat.id
                          ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] border-[#F0DCB4]'
                          : 'bg-[#201D1A] text-[#A0988E] border-white/10 hover:text-white'
                      }`}
                    >
                      {seat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                  {t.reservation.specialRequests}
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder={lang === 'en' ? 'e.g. Wheelchair ramp requested, highchair needed, anniversary table' : 'ex. Besoin de chaise haute, accès fauteuil roulant...'}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs focus:outline-none focus:border-[#C89B3C] resize-none"
                />
              </div>

              {/* Info Note */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-[#A0988E]">
                <AlertCircle className="w-4 h-4 text-[#D4A745] shrink-0 mt-0.5" />
                <span>We hold tables for 15 minutes past reservation time. Walk-ins are always welcomed subject to availability.</span>
              </div>

              {/* Submit CTA */}
              <button
                id="submit-reservation-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#C89B3C]/25 border border-[#F0DCB4]/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>{t.reservation.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
