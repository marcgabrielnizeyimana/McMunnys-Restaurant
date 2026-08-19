import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Check, Info, Flame, Heart, Leaf, X } from 'lucide-react';
import { Language, MenuItem, CartItem } from '../types';
import { translations } from '../data/translations';
import { menuItems, menuCategories } from '../data/menuData';

interface InteractiveMenuProps {
  lang: Language;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onAddToCart: (item: MenuItem) => void;
  cartItems: CartItem[];
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  lang,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  cartItems
}) => {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'popular' | 'veg' | 'gf'>('all');
  const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1800);
  };

  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary filter match
      let matchesDietary = true;
      if (dietaryFilter === 'popular') matchesDietary = !!item.isPopular;
      if (dietaryFilter === 'veg') matchesDietary = !!item.isVegetarian;
      if (dietaryFilter === 'gf') matchesDietary = !!item.isGlutenFree;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name[lang].toLowerCase().includes(query) ||
        item.description[lang].toLowerCase().includes(query) ||
        (item.tags && item.tags[lang].some(tag => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery, lang]);

  const categories = [
    { id: 'all', label: t.menu.filterAll },
    { id: 'burgers', label: t.menu.filterBurgers },
    { id: 'mains', label: t.menu.filterMains },
    { id: 'appetizers', label: t.menu.filterAppetizers },
    { id: 'coffee', label: t.menu.filterCoffee },
    { id: 'desserts', label: t.menu.filterDesserts }
  ];

  return (
    <section id="menu" className="py-24 bg-[#121110] text-[#E8E2D9] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            id="menu-badge"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C89B3C] text-black text-xs font-black uppercase tracking-widest shadow-md shadow-[#C89B3C]/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{t.menu.badge}</span>
          </div>

          <h2 
            id="menu-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase"
          >
            {t.menu.heading}
          </h2>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-2 h-2 rotate-45 bg-[#C89B3C]"></span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C89B3C]"></span>
          </div>

          <p className="text-sm sm:text-base text-[#A0988E]">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-[#181614] p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0988E]" />
            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#201D1A] border border-white/10 text-white placeholder-[#8E8478] text-xs sm:text-sm focus:outline-none focus:border-[#C89B3C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0988E] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/5 text-[#A0988E] hover:text-white'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => setDietaryFilter('popular')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                dietaryFilter === 'popular'
                  ? 'bg-[#C89B3C] text-black shadow-md'
                  : 'bg-white/5 text-[#A0988E] hover:text-white'
              }`}
            >
              <Flame className="w-3 h-3 text-black" />
              <span>{t.menu.badges.popular}</span>
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white/5 text-[#A0988E] hover:text-white'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-300" />
              <span>{t.menu.badges.vegetarian}</span>
            </button>
            <button
              onClick={() => setDietaryFilter('gf')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                dietaryFilter === 'gf'
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-white/5 text-[#A0988E] hover:text-white'
              }`}
            >
              <Heart className="w-3 h-3 text-amber-300" />
              <span>{t.menu.badges.glutenFree}</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`menu-tab-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] font-black shadow-lg shadow-[#C89B3C]/20 border border-[#F0DCB4]/40 scale-105'
                  : 'bg-[#1C1A18] text-[#C2BAB0] hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredMenuItems.length === 0 ? (
          <div className="text-center py-16 bg-[#181614] rounded-2xl border border-white/5">
            <p className="text-base text-[#A0988E]">No dishes matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#C89B3C] text-black text-xs font-bold uppercase rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMenuItems.map((item) => {
              const inCart = cartItems.find(c => c.menuItem.id === item.id);
              const isJustAdded = recentlyAddedId === item.id;

              return (
                <div
                  key={item.id}
                  id={`menu-item-${item.id}`}
                  className="group bg-[#1C1917] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C89B3C]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative h-52 w-full overflow-hidden bg-black cursor-pointer" onClick={() => setActiveDetailItem(item)}>
                      <img
                        src={item.image}
                        alt={item.name[lang]}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent opacity-80"></div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-[#C89B3C] text-black font-black text-sm sm:text-base tracking-wide shadow-lg">
                        ${item.price.toFixed(2)} <span className="text-[10px] font-bold uppercase text-black/70">CAD</span>
                      </div>

                      {/* Dietary / Feature Tags */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        {item.isHouseSpecialty && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#E6CCA0] text-black font-black text-[10px] uppercase tracking-wider shadow-md">
                            {t.menu.badges.chefChoice}
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#C89B3C] text-black font-black text-[10px] uppercase tracking-wider shadow-md">
                            {t.menu.badges.popular}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 
                          onClick={() => setActiveDetailItem(item)}
                          className="font-display text-lg font-black text-white hover:text-[#D4A745] transition-colors leading-snug cursor-pointer"
                        >
                          {item.name[lang]}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A0988E] mt-2.5 leading-relaxed line-clamp-3">
                        {item.description[lang]}
                      </p>

                      {/* Tag badges */}
                      {item.tags && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {item.tags[lang].map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-[#C2BAB0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-5 pt-0 mt-2 flex items-center justify-between gap-3">
                    <button
                      id={`menu-details-btn-${item.id}`}
                      onClick={() => setActiveDetailItem(item)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#A0988E] hover:text-white transition-colors cursor-pointer py-2"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{t.menu.viewDish}</span>
                    </button>

                    <button
                      id={`add-to-order-btn-${item.id}`}
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white scale-105'
                          : inCart
                          ? 'bg-[#C89B3C]/20 text-[#D4A745] border border-[#C89B3C]/40 hover:bg-[#C89B3C] hover:text-black'
                          : 'bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] font-black hover:from-[#D4A745] hover:to-[#B88830]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{inCart ? `Add More (${inCart.quantity})` : t.menu.addToOrder}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Menu Footer Note */}
        <div className="mt-12 text-center text-xs text-[#8E8478] max-w-xl mx-auto">
          <p>{t.menu.taxNote}</p>
        </div>
      </div>

      {/* Dish Details Modal */}
      {activeDetailItem && (
        <div
          id="dish-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveDetailItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#1E1B18] border border-white/20 rounded-2xl overflow-hidden shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveDetailItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 w-full bg-black">
              <img
                src={activeDetailItem.image}
                alt={activeDetailItem.name[lang]}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#C89B3C] text-black font-black text-sm">
                ${activeDetailItem.price.toFixed(2)} CAD
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A745] px-2 py-0.5 rounded bg-white/5">
                  {activeDetailItem.category.toUpperCase()}
                </span>
                {activeDetailItem.isPopular && (
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A745]">
                    &bull; Popular Choice
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-black text-white">
                {activeDetailItem.name[lang]}
              </h3>

              <p className="text-sm text-[#C2BAB0] mt-3 leading-relaxed">
                {activeDetailItem.description[lang]}
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="text-xs text-[#8E8478]">
                  Cooked fresh to order in Erickson, MB
                </div>

                <button
                  onClick={() => {
                    handleAdd(activeDetailItem);
                    setActiveDetailItem(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E28] text-[#121110] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t.menu.addToOrder}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
