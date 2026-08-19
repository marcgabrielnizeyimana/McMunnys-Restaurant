import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Clock, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, CartItem } from '../types';
import { translations } from '../data/translations';

interface TakeoutOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const TakeoutOrderModal: React.FC<TakeoutOrderModalProps> = ({
  isOpen,
  onClose,
  lang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const t = translations[lang];

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [pickupTime, setPickupTime] = useState('ASAP (approx. 20-30 mins)');
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  // Manitoba Sales Tax (5% GST + 7% PST = 12%)
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || cartItems.length === 0) return;

    const ref = 'MCM-' + Math.floor(1000 + Math.random() * 9000);
    setOrderRef(ref);
    setIsOrdered(true);
  };

  const handleFinish = () => {
    onClearCart();
    setIsOrdered(false);
    onClose();
  };

  return (
    <div
      id="takeout-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        id="takeout-modal-content"
        className="relative max-w-2xl w-full bg-[#181614] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-takeout-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#A0988E] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isOrdered ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="px-3 py-1 rounded-full bg-[#C89B3C]/20 text-[#D4A745] text-xs font-black uppercase tracking-widest border border-[#C89B3C]/30">
              Order Reference #{orderRef}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              {t.takeout.confirmedTitle}
            </h3>

            <p className="text-sm text-[#C2BAB0] max-w-md mx-auto leading-relaxed">
              {t.takeout.confirmedMsg}
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#201D1A] border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-[#D4A745] font-bold">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Pickup Location: 30 Main St, Erickson, MB</span>
              </div>
              <div className="flex items-center gap-2 text-[#D4A745] font-bold">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Estimated Time: {pickupTime}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm">
                <span>Total Due at Pickup:</span>
                <span>${total.toFixed(2)} CAD</span>
              </div>
            </div>

            <p className="text-xs text-[#8E8478]">
              Need to add or modify items? Call our kitchen directly at <a href="tel:+12046362601" className="text-[#D4A745] font-bold">+1 (204) 636-2601</a>.
            </p>

            <button
              onClick={handleFinish}
              className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close &amp; Finish
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#D4A745] mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">McMunnys Takeout</span>
            </div>

            <h3 className="font-display text-2xl font-black text-white">
              {t.takeout.modalTitle}
            </h3>

            <p className="text-xs sm:text-sm text-[#A0988E] mt-1 mb-6">
              {t.takeout.modalSubtitle}
            </p>

            {cartItems.length === 0 ? (
              <div className="py-12 text-center space-y-3 bg-[#201D1A] rounded-xl border border-white/5">
                <ShoppingBag className="w-12 h-12 text-[#686058] mx-auto" />
                <p className="text-sm text-[#A0988E] font-medium">{t.takeout.emptyCart}</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Cart Items List */}
                <div className="divide-y divide-white/10 max-h-60 overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div key={item.menuItem.id} className="py-3.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name[lang]}
                          className="w-12 h-12 rounded-lg object-cover bg-black"
                        />
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                            {item.menuItem.name[lang]}
                          </p>
                          <p className="text-xs text-[#D4A745] font-semibold mt-0.5">
                            ${item.menuItem.price.toFixed(2)} CAD
                          </p>
                        </div>
                      </div>

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded-lg bg-[#201D1A] border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                            className="p-1.5 text-[#A0988E] hover:text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                            className="p-1.5 text-[#A0988E] hover:text-white transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.menuItem.id)}
                          className="p-1.5 text-[#8E8478] hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal & Breakdown */}
                <div className="p-4 rounded-xl bg-[#201D1A] border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-[#C2BAB0]">
                    <span>{t.takeout.subtotal}:</span>
                    <span className="font-bold text-white">${subtotal.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between text-[#A0988E]">
                    <span>{t.takeout.tax} (12% MB GST/PST):</span>
                    <span>${tax.toFixed(2)} CAD</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-white/10">
                    <span>{t.takeout.total}:</span>
                    <span className="text-[#D4A745]">${total.toFixed(2)} CAD</span>
                  </div>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.takeout.customerName} <span className="text-[#D4A745]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs focus:outline-none focus:border-[#C89B3C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                        {t.takeout.customerPhone} <span className="text-[#D4A745]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+1 (204) 555-0188"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs focus:outline-none focus:border-[#C89B3C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                      {t.takeout.pickupTime}
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#C89B3C]"
                    >
                      <option value="ASAP (approx. 20-30 mins)">ASAP (approx. 20-30 mins)</option>
                      <option value="In 45 minutes">In 45 minutes</option>
                      <option value="In 1 hour">In 1 hour</option>
                      <option value="Tonight at 6:00 PM">Tonight at 6:00 PM</option>
                      <option value="Tonight at 7:00 PM">Tonight at 7:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D5CEC5] mb-1.5">
                      {t.takeout.specialNotes}
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Extra napkins, dressing on the side, no onions"
                      className="w-full px-4 py-2 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#787068] text-xs focus:outline-none focus:border-[#C89B3C] resize-none"
                    />
                  </div>

                  <button
                    id="submit-takeout-order-btn"
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] hover:from-[#D4A745] hover:to-[#B88830] text-[#121110] font-black text-xs uppercase tracking-wider shadow-lg shadow-[#C89B3C]/25 border border-[#F0DCB4]/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t.takeout.placeOrderBtn} &bull; ${total.toFixed(2)} CAD</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
