import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { Language } from '../types';

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClosePrivacy: () => void;
  onCloseTerms: () => void;
  lang: Language;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  privacyOpen,
  termsOpen,
  onClosePrivacy,
  onCloseTerms,
  lang
}) => {
  if (!privacyOpen && !termsOpen) return null;

  return (
    <>
      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          id="privacy-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={onClosePrivacy}
        >
          <div
            className="relative max-w-xl w-full bg-[#181614] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClosePrivacy}
              className="absolute top-4 right-4 p-2 text-[#A0988E] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4A745] mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {lang === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </span>
            </div>

            <h3 className="font-display text-2xl font-black text-white mb-4">
              McMunnys Restaurant Privacy Policy
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#C2BAB0] leading-relaxed">
              <p>
                {lang === 'en'
                  ? 'At McMunnys Restaurant (30 Main St, Erickson, MB R0J 0P0, Canada), we respect your personal privacy. We only collect the minimal customer contact information (such as your name, telephone number, and order details) strictly necessary to process your table reservations, takeout requests, and direct inquiries.'
                  : 'Chez McMunnys Restaurant (30 Main St, Erickson, MB R0J 0P0, Canada), nous respectons votre vie privée. Nous ne recueillons que les coordonnées minimales nécessaires pour traiter vos réservations de table, commandes à emporter et demandes directes.'}
              </p>
              <p>
                {lang === 'en'
                  ? 'We will never sell, rent, or lease your personal information to third parties. For any inquiries regarding your data, please contact us at mcmunnys@gmail.com or call +1 (204) 636-2601.'
                  : 'Nous ne vendrons, ne louerons ni ne divulguerons jamais vos informations personnelles à des tiers. Pour toute question, contactez-nous à mcmunnys@gmail.com ou au +1 (204) 636-2601.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClosePrivacy}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] text-xs font-black uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {termsOpen && (
        <div
          id="terms-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={onCloseTerms}
        >
          <div
            className="relative max-w-xl w-full bg-[#181614] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseTerms}
              className="absolute top-4 right-4 p-2 text-[#A0988E] hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D4A745] mb-2">
              <FileText className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {lang === 'en' ? 'Terms of Service' : 'Conditions Générales'}
              </span>
            </div>

            <h3 className="font-display text-2xl font-black text-white mb-4">
              Terms &amp; Dining Guidelines
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#C2BAB0] leading-relaxed">
              <p>
                {lang === 'en'
                  ? 'All food prices are stated in Canadian Dollars (CAD) and subject to applicable Manitoba taxes (5% GST + 7% PST). Menu items, pricing, and availability are subject to change based on seasonal availability and market conditions.'
                  : 'Tous les prix sont indiqués en dollars canadiens (CAD) et assujettis aux taxes applicables du Manitoba (TPS 5% + TVP 7%). Les articles et les prix peuvent varier selon les saisons.'}
              </p>
              <p>
                {lang === 'en'
                  ? 'Table reservations are held for up to 15 minutes past the scheduled arrival time. If you need to make changes or have specific dietary allergies, please inform our team in advance by phone at +1 (204) 636-2601.'
                  : 'Les réservations sont conservées pendant 15 minutes. Si vous avez des allergies alimentaires, veuillez en informer notre équipe à l\'avance.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onCloseTerms}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] text-xs font-black uppercase cursor-pointer"
              >
                Accept &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
