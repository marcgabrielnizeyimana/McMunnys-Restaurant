import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Calendar, Phone, ArrowRight, ChevronRight } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  cartItems: CartItem[];
  onOpenReservation: () => void;
  onOpenTakeout: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  cartItems,
  onOpenReservation,
  onOpenTakeout,
  activeSection
}) => {
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#categories', label: t.nav.categories, id: 'categories' },
    { href: '#menu', label: t.nav.menu, id: 'menu' },
    { href: '#gallery', label: t.nav.gallery, id: 'gallery' },
    { href: '#why-us', label: t.nav.whyUs, id: 'why-us' },
    { href: '#reviews', label: t.nav.reviews, id: 'reviews' },
    { href: '#faq', label: t.nav.faq, id: 'faq' },
    { href: '#location', label: t.nav.location, id: 'location' }
  ];

  return (
    <nav
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#151311]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/10 py-3'
          : 'bg-[#181614] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" id="nav-brand-link" className="group flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#D4A745]'
                    : 'text-[#D5CEC5] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C89B3C] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          {/* Takeout Cart Button */}
          <button
            id="nav-takeout-cart-btn"
            onClick={onOpenTakeout}
            className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8E2D9] border border-white/10 hover:border-[#C89B3C]/50 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            aria-label="View Takeout Order"
          >
            <ShoppingBag className="w-5 h-5 text-[#D4A745] group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline text-xs font-bold text-white tracking-wider uppercase">
              {t.nav.orderTakeout}
            </span>
            {totalCartCount > 0 && (
              <span 
                id="cart-badge-count"
                className="absolute -top-1.5 -right-1.5 bg-[#C89B3C] text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#181614] shadow-md animate-bounce"
              >
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Book Table Button (Gold Theme) */}
          <button
            id="nav-book-table-btn"
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#C89B3C]/20 border border-[#F0DCB4]/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookTable}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-[#181614] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold ${
                  activeSection === link.id
                    ? 'bg-[#C89B3C]/15 text-[#D4A745] font-bold border border-[#C89B3C]/30'
                    : 'text-[#D5CEC5] hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookTable}</span>
            </button>

            <a
              id="mobile-drawer-call-btn"
              href="tel:+12046362601"
              className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8E2D9] border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-[#D4A745]" />
              <span>{t.nav.quickCall}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
