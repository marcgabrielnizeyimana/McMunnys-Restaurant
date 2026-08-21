import React, { useState, useEffect } from 'react';
import { Language, MenuItem, CartItem } from './types';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { InteractiveMenu } from './components/InteractiveMenu';
import { FoodGallery } from './components/FoodGallery';
import { CtaBanner } from './components/CtaBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { TakeoutOrderModal } from './components/TakeoutOrderModal';
import { LegalModals } from './components/LegalModals';
import { Phone, ChevronUp, ShoppingBag } from 'lucide-react';

export function App() {
  // 1. Language state with localStorage support (Default: English)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('midnight_annies_lang') || localStorage.getItem('mcmunnys_lang');
    return (saved === 'fr' ? 'fr' : 'en') as Language;
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'fr' : 'en';
      localStorage.setItem('midnight_annies_lang', next);
      return next;
    });
  };

  // 2. Cart & Takeout State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('midnight_annies_cart') || localStorage.getItem('mcmunnys_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('midnight_annies_cart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.menuItem.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((c) => {
          if (c.menuItem.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((c) => c.menuItem.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // 3. Modals state
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isTakeoutOpen, setIsTakeoutOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  // 4. Menu category selection sync
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');

  const handleSelectCategoryFromDiscover = (categoryId: string) => {
    setSelectedMenuCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5. Active section scroll spy
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'categories', 'menu', 'gallery', 'why-us', 'reviews', 'faq', 'location'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121110] text-[#E8E2D9] selection:bg-[#C89B3C] selection:text-black flex flex-col font-body antialiased">
      {/* Top Bar */}
      <TopBar lang={lang} onToggleLang={toggleLanguage} />

      {/* Main Sticky Navbar */}
      <Navbar
        lang={lang}
        cartItems={cartItems}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenTakeout={() => setIsTakeoutOpen(true)}
        activeSection={activeSection}
      />

      {/* Page Sections (Delish Template Structure) */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 2. About McMunnys Section (with Delish layout) */}
        <AboutSection lang={lang} />

        {/* 3. Discover Categories Section */}
        <CategoriesSection
          lang={lang}
          onSelectCategory={handleSelectCategoryFromDiscover}
        />

        {/* 4. Interactive Menu Section */}
        <InteractiveMenu
          lang={lang}
          selectedCategory={selectedMenuCategory}
          onSelectCategory={setSelectedMenuCategory}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* 5. Food Gallery Posts Section */}
        <FoodGallery lang={lang} />

        {/* 6. Mid-Page Call To Action Reservation Banner */}
        <CtaBanner
          lang={lang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 7. Why Choose McMunnys */}
        <WhyChooseUs lang={lang} />

        {/* 8. Customer Testimonials & Reviews */}
        <TestimonialsSection lang={lang} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection lang={lang} />

        {/* 10. Location, Google Maps & Operating Schedule */}
        <LocationHoursSection lang={lang} />

        {/* 11. Contact Inquiries & Direct Message Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Cart Button on Mobile */}
        {totalCartCount > 0 && (
          <button
            id="floating-takeout-cart-btn"
            onClick={() => setIsTakeoutOpen(true)}
            className="md:hidden w-13 h-13 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] shadow-2xl flex items-center justify-center relative hover:scale-110 active:scale-95 transition-all border-2 border-white/20"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalCartCount}
            </span>
          </button>
        )}

        {/* Floating Call Shortcut */}
        <a
          id="floating-call-btn"
          href="tel:+12046362601"
          aria-label="Call McMunnys"
          className="w-12 h-12 rounded-full bg-[#C89B3C] hover:bg-[#D4A745] text-[#121110] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            id="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to Top"
            className="w-12 h-12 rounded-full bg-[#201D1A] hover:bg-[#2C2723] text-white border border-white/10 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer animate-fade-in"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
      />

      <TakeoutOrderModal
        isOpen={isTakeoutOpen}
        onClose={() => setIsTakeoutOpen(false)}
        lang={lang}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <LegalModals
        privacyOpen={privacyOpen}
        termsOpen={termsOpen}
        onClosePrivacy={() => setPrivacyOpen(false)}
        onCloseTerms={() => setTermsOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
