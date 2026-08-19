import { MenuItem, MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'burgers',
    name: {
      en: 'Burgers & Handhelds',
      fr: 'Burgers & Sandwiches'
    },
    subtitle: {
      en: 'Fresh 100% Canadian Beef & Crispy Chicken',
      fr: '100% Bœuf Canadien & Poulet Croustillant'
    },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    description: {
      en: 'Juicy, flame-seared burgers served on toasted artisan brioche buns with golden french fries or house coleslaw.',
      fr: 'Burgers juteux saisis à la flamme servis sur pain brioché toasté avec frites dorées ou salade de chou maison.'
    }
  },
  {
    id: 'mains',
    name: {
      en: 'Mains & Charbroiled Steaks',
      fr: 'Plats & Steaks Grillés'
    },
    subtitle: {
      en: 'Hearty Homestyle Dinners & Grilled Cuts',
      fr: 'Plats Maison Consistants & Grillades'
    },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    description: {
      en: 'Tender AAA Canadian ribeyes, slow-smoked ribs, traditional country meatloaf, and crispy battered fish & chips.',
      fr: 'Ribeye canadien AAA tendre, travers de porc fumés, pain de viande traditionnel et fish & chips croustillant.'
    }
  },
  {
    id: 'appetizers',
    name: {
      en: 'Appetizers & Poutine',
      fr: 'Entrées & Poutines'
    },
    subtitle: {
      en: 'Crisp Starters & Squeaky Cheese Curds',
      fr: 'Entrées Dorées & Fromage en Grains'
    },
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop',
    description: {
      en: 'Classic Canadian poutines with rich beef gravy, loaded potato skins, crispy chicken wings, and warm cheese dips.',
      fr: 'Poutines canadiennes classiques à la sauce brune onctueuse, peaux de pommes de terre garnies et ailes de poulet.'
    }
  },
  {
    id: 'coffee',
    name: {
      en: 'Artisan Coffee & Drinks',
      fr: 'Café Artisanal & Boissons'
    },
    subtitle: {
      en: 'Erickson\'s Famous Fresh Brewed Roasts',
      fr: 'Le Café Frais Réputé d\'Erickson'
    },
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    description: {
      en: 'Freshly roasted signature house drip coffee, creamy lattes, iced coffees, hot cocoa, and iced refreshments.',
      fr: 'Café filtre maison fraîchement torréfié, lattes onctueux, cafés glacés, chocolat chaud et boissons rafraîchissantes.'
    }
  },
  {
    id: 'desserts',
    name: {
      en: 'Homemade Desserts',
      fr: 'Desserts Maison'
    },
    subtitle: {
      en: 'Warm Crumbles, Pies & Sundaes',
      fr: 'Crumbles Chauds, Tartes & Sundaes'
    },
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    description: {
      en: 'Traditional prairie butter tarts, warm apple crumble with vanilla ice cream, and decadent chocolate fudge brownies.',
      fr: 'Tartes au beurre traditionnelles des Prairies, crumble aux pommes chaud avec glace vanille et brownie au fudge.'
    }
  }
];

export const menuItems: MenuItem[] = [
  // Burgers & Handhelds
  {
    id: 'burger-mcmunnys-deluxe',
    name: {
      en: 'McMunnys Classic Bacon Deluxe Burger',
      fr: 'Burger Classique Bacon Deluxe McMunnys'
    },
    description: {
      en: '6oz pure Canadian beef patty, thick-cut smoked maple bacon, aged cheddar, crisp lettuce, tomato, pickles, and our signature burger sauce on toasted brioche.',
      fr: 'Galette de 6oz de bœuf canadien pur, bacon épais à l\'érable, cheddar vieilli, laitue croquante, tomate, cornichons et sauce maison sur brioche toastée.'
    },
    price: 18.50,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isHouseSpecialty: true,
    tags: {
      en: ['House Specialty', 'Bacon & Cheddar', 'Fries Included'],
      fr: ['Spécialité Maison', 'Bacon & Cheddar', 'Frites Incluses']
    }
  },
  {
    id: 'burger-smokehouse-bbq',
    name: {
      en: 'Erickson Smokehouse BBQ Burger',
      fr: 'Burger BBQ Fumé d\'Erickson'
    },
    description: {
      en: 'Charbroiled beef patty stacked with crispy fried onion straws, smoky hickory BBQ sauce, melted Monterey Jack cheese, and smoked bacon.',
      fr: 'Bœuf grillé garni de rondelles d\'oignons croustillantes, sauce barbecue fumée au hickory, fromage Monterey Jack fondu et bacon.'
    },
    price: 19.25,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    tags: {
      en: ['Smoky BBQ', 'Crispy Onions', 'Hearty'],
      fr: ['BBQ Fumé', 'Oignons Croustillants', 'Généreux']
    }
  },
  {
    id: 'burger-crispy-chicken',
    name: {
      en: 'Crispy Country Buttermilk Chicken Sandwich',
      fr: 'Sandwich Poulet Croustillant au Babeurre'
    },
    description: {
      en: 'Golden breaded buttermilk chicken breast, creamy garlic aioli, crunchy coleslaw, and dill pickles on a toasted sesame bun.',
      fr: 'Poitrine de poulet panée au babeurre doré, aïoli crémeux à l\'ail, salade de chou croquante et cornichons à l\'aneth.'
    },
    price: 17.95,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    tags: {
      en: ['Crispy Chicken', 'Garlic Aioli'],
      fr: ['Poulet Croustillant', 'Aïoli à l\'ail']
    }
  },
  {
    id: 'burger-veggie-garden',
    name: {
      en: 'Garden Harvest Veggie Burger',
      fr: 'Burger Végétarien du Terroir'
    },
    description: {
      en: 'Handcrafted black bean, roasted corn and quinoa patty topped with sliced avocado, lettuce, ripe tomato, and herb mayo on a whole grain bun.',
      fr: 'Galette maison aux haricots noirs, maïs grillé et quinoa, garnie d\'avocat, laitue, tomate fraîche et mayonnaise aux herbes.'
    },
    price: 16.75,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    tags: {
      en: ['Vegetarian', 'Avocado', 'Wholesome'],
      fr: ['Végétarien', 'Avocat', 'Sain']
    }
  },
  {
    id: 'wrap-buffalo-chicken',
    name: {
      en: 'Crispy Buffalo Chicken Ranch Wrap',
      fr: 'Wrap Poulet Buffalo & Sauce Ranch'
    },
    description: {
      en: 'Crisp tenders tossed in zesty buffalo sauce, shredded cheddar, diced tomatoes, romaine lettuce, and buttermilk ranch in a grilled flour tortilla.',
      fr: 'Aiguillettes croustillantes enrobées de sauce buffalo piquante, cheddar râpé, tomates, romaine et ranch dans une tortilla grillée.'
    },
    price: 16.50,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    tags: {
      en: ['Zesty Buffalo', 'Grilled Wrap'],
      fr: ['Buffalo Piquant', 'Wrap Grillé']
    }
  },

  // Mains & Charbroiled Steaks
  {
    id: 'main-manitoba-ribeye',
    name: {
      en: '10oz Manitoba Charbroiled Ribeye Steak',
      fr: 'Steak Ribeye Grillé 10oz du Manitoba'
    },
    description: {
      en: 'Well-marbled AAA Canadian ribeye grilled to your liking with garlic-herb butter, loaded baked potato with sour cream & bacon, and seasonal sauteed vegetables.',
      fr: 'Ribeye canadien AAA persillé grillé à votre convenance avec beurre aux herbes et à l\'ail, pomme de terre au four garnie et légumes sautés.'
    },
    price: 34.50,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isHouseSpecialty: true,
    isGlutenFree: true,
    tags: {
      en: ['AAA Canadian Beef', 'Chef Cut', 'Gluten-Free Option'],
      fr: ['Bœuf Canadien AAA', 'Coupe du Chef', 'Option Sans Gluten']
    }
  },
  {
    id: 'main-bbq-ribs',
    name: {
      en: 'Slow-Smoked Prairie BBQ Pork Ribs',
      fr: 'Travers de Porc Fumés Sauce BBQ des Prairies'
    },
    description: {
      en: 'Full rack of tender fall-off-the-bone pork ribs glazed in our sweet & tangy honey garlic BBQ glaze, served with seasoned fries and creamy coleslaw.',
      fr: 'Travers de porc ultra tendres laqués à notre sauce BBQ miel et ail, accompagnés de frites assaisonnées et salade de chou.'
    },
    price: 28.95,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    tags: {
      en: ['Fall-Off-The-Bone', 'Honey BBQ', 'Crowd Favorite'],
      fr: ['Fondant', 'BBQ au Miel', 'Favori des Clients']
    }
  },
  {
    id: 'main-fish-and-chips',
    name: {
      en: 'Crispy Beer-Battered Haddock Fish & Chips',
      fr: 'Fish & Chips d\'Aiglefin à la Bière'
    },
    description: {
      en: 'Wild haddock fillet hand-dipped in golden craft batter, served with tartar sauce, fresh lemon wedge, and piping hot thick-cut chips.',
      fr: 'Filet d\'aiglefin sauvage enrobé de pâte dorée croustillante, servi avec sauce tartare, quartier de citron et frites épaisses.'
    },
    price: 21.50,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=800&auto=format&fit=crop',
    tags: {
      en: ['Crispy Golden', 'House Tartar Sauce'],
      fr: ['Doré & Croustillant', 'Sauce Tartare Maison']
    }
  },
  {
    id: 'main-homestyle-meatloaf',
    name: {
      en: 'Grandma\'s Homestyle Beef Meatloaf',
      fr: 'Pain de Viande Maison Traditionnel'
    },
    description: {
      en: 'Savory seasoned Canadian ground beef baked with a sweet tomato glaze, served with creamy roasted garlic mashed potatoes, rich brown gravy, and buttered corn.',
      fr: 'Bœuf haché canadien savoureux cuit au four avec un glaçage doux à la tomate, servi avec purée à l\'ail rôti, sauce brune et maïs au beurre.'
    },
    price: 19.95,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop',
    tags: {
      en: ['Comfort Classic', 'Garlic Mash', 'Rich Gravy'],
      fr: ['Classique Réconfort', 'Purée à l\'Ail', 'Sauce Brune']
    }
  },

  // Appetizers & Poutine
  {
    id: 'app-classic-poutine',
    name: {
      en: 'Authentic Canadian Squeaky Poutine',
      fr: 'Poutine Canadienne Authentique'
    },
    description: {
      en: 'Crispy russet fries topped with authentic fresh cheese curds from Manitoba dairies and smothered in piping hot, savory brown gravy.',
      fr: 'Frites croustillantes garnies de fromage en grains frais authentique et nappées d\'une sauce brune bien chaude.'
    },
    price: 12.95,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1586805608485-add336722759?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isVegetarian: true,
    tags: {
      en: ['Squeaky Curds', 'Canadian Classic', 'Vegetarian Gravy Option'],
      fr: ['Fromage en Grains', 'Classique Canadien', 'Option Végétarienne']
    }
  },
  {
    id: 'app-loaded-skins',
    name: {
      en: 'Loaded Crispy Potato Skins',
      fr: 'Peaux de Pommes de Terre Garnies'
    },
    description: {
      en: 'Crispy fried potato boats baked with melted cheddar & mozzarella blend, crispy bacon crumbles, green onions, and sour cream dip.',
      fr: 'Barquettes de pommes de terre croustillantes gratinées au cheddar et mozzarella, bacon émietté, oignons verts et crème sure.'
    },
    price: 13.50,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop',
    isGlutenFree: true,
    tags: {
      en: ['Melted Cheese', 'Smoked Bacon', 'Gluten-Free'],
      fr: ['Fromage Fondu', 'Bacon Fumé', 'Sans Gluten']
    }
  },
  {
    id: 'app-chicken-wings',
    name: {
      en: 'Crispy Prairie Chicken Wings (1 lb)',
      fr: 'Ailes de Poulet Croustillantes (1 lb)'
    },
    description: {
      en: 'Plump crispy wings tossed in your choice of Honey Garlic, Mild Buffalo, Smokey BBQ, or Salt & Pepper. Served with crunchy celery & ranch dip.',
      fr: 'Ailes croustillantes enrobées au choix : Miel & Ail, Buffalo, BBQ Fumé ou Sel & Poivre. Servies avec céleri et trempette ranch.'
    },
    price: 15.95,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop',
    tags: {
      en: ['Choice of Sauces', 'Crispy & Juicy'],
      fr: ['Choix de Sauces', 'Croustillant & Juteux']
    }
  },
  {
    id: 'app-caesar-salad',
    name: {
      en: 'Fresh Country Caesar Salad',
      fr: 'Salade César Champêtre'
    },
    description: {
      en: 'Crisp romaine hearts, toasted garlic herb croutons, crispy bacon bits, shaved parmesan, and our creamy homemade Caesar dressing.',
      fr: 'Cœurs de romaine croquants, croûtons à l\'ail et aux herbes, éclats de bacon, copeaux de parmesan et vinaigrette césar maison.'
    },
    price: 11.95,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop',
    isVegetarian: false,
    tags: {
      en: ['Crisp & Fresh', 'Parmesan', 'Garlic Croutons'],
      fr: ['Frais & Croquant', 'Parmesan', 'Croûtons Maison']
    }
  },

  // Great Coffee & Beverages (Featured highlight: "Ótimo café")
  {
    id: 'coffee-signature-roast',
    name: {
      en: 'McMunnys Signature Roast Coffee',
      fr: 'Café Signature Torréfaction Maison McMunnys'
    },
    description: {
      en: 'Our legendary house blend brewed fresh continuously throughout the day. Smooth, rich, with delicate notes of toasted hazelnut and dark cocoa. Free refills for dine-in.',
      fr: 'Notre mélange signature légendaire fraîchement infusé tout au long de la journée. Arôme riche, notes de noisette et cacao. Recharges gratuites sur place.'
    },
    price: 3.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isHouseSpecialty: true,
    tags: {
      en: ['Great Coffee', 'Free Dine-in Refills', 'Locally Famous'],
      fr: ['Excellent Café', 'Recharges Gratuites', 'Célèbre Localement']
    }
  },
  {
    id: 'coffee-vanilla-latte',
    name: {
      en: 'Warm Madagascar Vanilla Latte',
      fr: 'Latte Onctueux Vanille de Madagascar'
    },
    description: {
      en: 'Rich espresso poured over velvety steamed whole milk, lightly infused with real Madagascar vanilla and finished with a dusting of cinnamon.',
      fr: 'Espresso intense combiné à un lait velouté cuit à la vapeur, infusé à la vanille de Madagascar et saupoudré de cannelle.'
    },
    price: 5.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
    tags: {
      en: ['Espresso Bar', 'Steamed Milk', 'Vanilla'],
      fr: ['Bar Espresso', 'Lait Velouté', 'Vanille']
    }
  },
  {
    id: 'coffee-iced-caramel',
    name: {
      en: 'Iced Salted Caramel Cold Brew',
      fr: 'Café Infusé à Froid Caramel Salé'
    },
    description: {
      en: '16-hour slow steeped cold brew coffee poured over ice, swirled with salted caramel syrup, and topped with sweet cold cream foam.',
      fr: 'Café infusé à froid pendant 16 heures, servi sur glace avec sirop de caramel salé et surmonté d\'une mousse de crème douce.'
    },
    price: 5.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    tags: {
      en: ['Cold Brew', 'Salted Caramel', 'Refreshing'],
      fr: ['Infusion Froide', 'Caramel Salé', 'Rafraîchissant']
    }
  },
  {
    id: 'coffee-hot-chocolate',
    name: {
      en: 'Campfire Rich Hot Chocolate',
      fr: 'Chocolat Chaud Gourmand Feu de Camp'
    },
    description: {
      en: 'Silky melted Dutch cocoa with steamed whole milk, piled high with fluffy whipped cream and mini toasted marshmallows.',
      fr: 'Chocolat hollandais soyeux fondu dans du lait chaud, surmonté d\'une généreuse crème fouettée et de guimauves.'
    },
    price: 4.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    tags: {
      en: ['Whipped Cream', 'Marshmallows', 'Cozy Warm'],
      fr: ['Crème Fouettée', 'Guimauves', 'Chaleureux']
    }
  },

  // Homemade Desserts
  {
    id: 'dessert-apple-crumble',
    name: {
      en: 'Warm Spiced Apple Berry Crumble',
      fr: 'Crumble Chaud aux Pommes & Baies Épicées'
    },
    description: {
      en: 'Tender cinnamon-spiced apples and wild prairie berries baked under a golden brown buttery oat crust, served warm with a scoop of vanilla bean ice cream.',
      fr: 'Pommes fondantes parfumées à la cannelle et baies sauvages cuites sous une croûte d\'avoine croustillante au beurre, servi avec glace vanille.'
    },
    price: 8.95,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    isHouseSpecialty: true,
    isVegetarian: true,
    tags: {
      en: ['Baked Fresh', 'Vanilla Ice Cream', 'Warm & Sweet'],
      fr: ['Frais du Four', 'Glace Vanille', 'Chaud & Gourmand']
    }
  },
  {
    id: 'dessert-butter-tart',
    name: {
      en: 'Traditional Prairie Butter Tart',
      fr: 'Tartelette au Beurre des Prairies'
    },
    description: {
      en: 'Flaky handmade pastry filled with gooey brown sugar, butter, and Canadian maple syrup custard with roasted pecans.',
      fr: 'Pâte feuilletée artisanale garnie d\'un appareil fondant au sucre brun, beurre et sirop d\'érable pur avec pacanes grillées.'
    },
    price: 6.50,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    tags: {
      en: ['Canadian Heritage', 'Maple Custard', 'Pecans'],
      fr: ['Tradition Canadienne', 'Érable', 'Pacanes']
    }
  },
  {
    id: 'dessert-fudge-brownie',
    name: {
      en: 'Decadent Chocolate Fudge Sundae',
      fr: 'Sundae au Brownie et Fudge Chocolat'
    },
    description: {
      en: 'Warm chocolate walnut brownie topped with two scoops of creamy vanilla ice cream, hot chocolate fudge sauce, whipped cream, and a maraschino cherry.',
      fr: 'Brownie chaud au chocolat et noix garni de deux boules de glace vanille, coulis de fudge chaud, chantilly et cerise au marasquin.'
    },
    price: 9.25,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    isVegetarian: true,
    tags: {
      en: ['Rich Chocolate', 'Hot Fudge', 'Sundae'],
      fr: ['Chocolat Intense', 'Fudge Chaud', 'Sundae']
    }
  }
];
