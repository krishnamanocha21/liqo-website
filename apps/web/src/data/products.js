
export const products = [
  // LED TVs
  {
    id: 'tv-1',
    name: 'Samsung 55" Crystal 4K UHD Smart TV',
    brand: 'Samsung',
    price: 42990,
    mrp: 64990,
    discount: 34,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    category: 'televisions',
    specs: {
      screenSize: '55 inches',
      resolution: '4K UHD (3840 x 2160)',
      smartTV: 'Yes',
      hdmi: '3 ports',
      warranty: '1 year'
    },
    description: 'Experience stunning 4K clarity with Crystal Display technology. Smart TV features include built-in streaming apps and voice control.',
    rating: 4.5,
    reviews: 1247
  },
  {
    id: 'tv-2',
    name: 'LG 43" Full HD Smart LED TV',
    brand: 'LG',
    price: 28990,
    mrp: 49990,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    category: 'televisions',
    specs: {
      screenSize: '43 inches',
      resolution: 'Full HD (1920 x 1080)',
      smartTV: 'Yes',
      hdmi: '2 ports',
      warranty: '1 year'
    },
    description: 'Enjoy vibrant colors and smart features at an affordable price. Perfect for medium-sized rooms.',
    rating: 4.3,
    reviews: 892
  },
  {
    id: 'tv-3',
    name: 'Sony Bravia 65" 4K Android TV',
    brand: 'Sony',
    price: 79990,
    mrp: 134990,
    discount: 41,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    category: 'televisions',
    specs: {
      screenSize: '65 inches',
      resolution: '4K UHD (3840 x 2160)',
      smartTV: 'Android TV',
      hdmi: '4 ports',
      warranty: '1 year'
    },
    description: 'Premium viewing experience with X1 processor and Triluminos display. Android TV with Google Assistant.',
    rating: 4.7,
    reviews: 2134
  },
  {
    id: 'tv-4',
    name: 'Mi 32" HD Ready Smart LED TV',
    brand: 'Mi',
    price: 13990,
    mrp: 24990,
    discount: 44,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    category: 'televisions',
    specs: {
      screenSize: '32 inches',
      resolution: 'HD Ready (1366 x 768)',
      smartTV: 'Yes',
      hdmi: '3 ports',
      warranty: '1 year'
    },
    description: 'Compact smart TV with PatchWall interface and built-in Chromecast. Perfect for bedrooms.',
    rating: 4.2,
    reviews: 3421
  },
  {
    id: 'tv-5',
    name: 'OnePlus 50" 4K QLED Smart TV',
    brand: 'OnePlus',
    price: 34990,
    mrp: 59990,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    category: 'televisions',
    specs: {
      screenSize: '50 inches',
      resolution: '4K UHD (3840 x 2160)',
      smartTV: 'Android TV',
      hdmi: '3 ports',
      warranty: '1 year'
    },
    description: 'QLED display with Dolby Vision and Atmos. Gamma Engine for enhanced picture quality.',
    rating: 4.6,
    reviews: 1876
  },

  // Refrigerators
  {
    id: 'fridge-1',
    name: 'Samsung 253L Frost Free Double Door',
    brand: 'Samsung',
    price: 24990,
    mrp: 38990,
    discount: 36,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    category: 'refrigerators',
    specs: {
      capacity: '253 Liters',
      type: 'Frost Free',
      doors: 'Double Door',
      energyRating: '3 Star',
      warranty: '1 year + 9 years on compressor'
    },
    description: 'Digital inverter technology for energy efficiency. Convertible freezer with 5-in-1 modes.',
    rating: 4.4,
    reviews: 2341
  },
  {
    id: 'fridge-2',
    name: 'LG 190L Single Door Refrigerator',
    brand: 'LG',
    price: 14990,
    mrp: 24990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    category: 'refrigerators',
    specs: {
      capacity: '190 Liters',
      type: 'Direct Cool',
      doors: 'Single Door',
      energyRating: '4 Star',
      warranty: '1 year + 9 years on compressor'
    },
    description: 'Smart inverter compressor with energy savings. Base stand drawer for extra storage.',
    rating: 4.3,
    reviews: 1567
  },
  {
    id: 'fridge-3',
    name: 'Whirlpool 340L Triple Door Refrigerator',
    brand: 'Whirlpool',
    price: 32990,
    mrp: 52990,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    category: 'refrigerators',
    specs: {
      capacity: '340 Liters',
      type: 'Frost Free',
      doors: 'Triple Door',
      energyRating: '3 Star',
      warranty: '1 year + 10 years on compressor'
    },
    description: 'Intellisense inverter technology. Separate vegetable crisper and freezer compartments.',
    rating: 4.5,
    reviews: 987
  },
  {
    id: 'fridge-4',
    name: 'Haier 565L Side by Side Refrigerator',
    brand: 'Haier',
    price: 54990,
    mrp: 89990,
    discount: 39,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    category: 'refrigerators',
    specs: {
      capacity: '565 Liters',
      type: 'Frost Free',
      doors: 'Side by Side',
      energyRating: '3 Star',
      warranty: '1 year + 10 years on compressor'
    },
    description: 'Twin inverter technology. Water and ice dispenser. Premium stainless steel finish.',
    rating: 4.6,
    reviews: 743
  },
  {
    id: 'fridge-5',
    name: 'Godrej 236L Double Door Refrigerator',
    brand: 'Godrej',
    price: 19990,
    mrp: 32990,
    discount: 39,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    category: 'refrigerators',
    specs: {
      capacity: '236 Liters',
      type: 'Frost Free',
      doors: 'Double Door',
      energyRating: '2 Star',
      warranty: '1 year + 10 years on compressor'
    },
    description: 'Aqua Space for storing water bottles. Large vegetable tray with moisture control.',
    rating: 4.2,
    reviews: 1432
  },

  // Washing Machines
  {
    id: 'wm-1',
    name: 'IFB 6.5kg Front Load Washing Machine',
    brand: 'IFB',
    price: 22990,
    mrp: 38990,
    discount: 41,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'washing-machines',
    specs: {
      capacity: '6.5 kg',
      type: 'Front Load',
      energyRating: '5 Star',
      rpm: '1000 RPM',
      warranty: '2 years + 8 years on motor'
    },
    description: 'AI-powered fabric care. Steam wash for deep cleaning. Cradle wash for delicate fabrics.',
    rating: 4.5,
    reviews: 1876
  },
  {
    id: 'wm-2',
    name: 'Samsung 7kg Top Load Washing Machine',
    brand: 'Samsung',
    price: 16990,
    mrp: 27990,
    discount: 39,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'washing-machines',
    specs: {
      capacity: '7 kg',
      type: 'Top Load',
      energyRating: '5 Star',
      rpm: '700 RPM',
      warranty: '2 years + 10 years on motor'
    },
    description: 'Digital inverter technology. Magic filter for lint removal. Wobble technology prevents tangling.',
    rating: 4.4,
    reviews: 2341
  },
  {
    id: 'wm-3',
    name: 'LG 8kg Front Load Washing Machine',
    brand: 'LG',
    price: 29990,
    mrp: 49990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'washing-machines',
    specs: {
      capacity: '8 kg',
      type: 'Front Load',
      energyRating: '5 Star',
      rpm: '1200 RPM',
      warranty: '2 years + 10 years on motor'
    },
    description: 'AI Direct Drive technology. Steam wash and allergen removal. Smart diagnosis.',
    rating: 4.6,
    reviews: 1654
  },
  {
    id: 'wm-4',
    name: 'Whirlpool 6kg Semi-Automatic',
    brand: 'Whirlpool',
    price: 8990,
    mrp: 14990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'washing-machines',
    specs: {
      capacity: '6 kg',
      type: 'Semi-Automatic',
      energyRating: 'N/A',
      rpm: '1350 RPM',
      warranty: '2 years'
    },
    description: 'Ace super soak technology. Supersoak technology for tough stains. Compact design.',
    rating: 4.1,
    reviews: 3214
  },
  {
    id: 'wm-5',
    name: 'Bosch 7.5kg Front Load Washing Machine',
    brand: 'Bosch',
    price: 34990,
    mrp: 58990,
    discount: 41,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'washing-machines',
    specs: {
      capacity: '7.5 kg',
      type: 'Front Load',
      energyRating: '5 Star',
      rpm: '1200 RPM',
      warranty: '2 years + 10 years on motor'
    },
    description: 'VarioDrum technology for gentle fabric care. ActiveWater Plus for water efficiency.',
    rating: 4.7,
    reviews: 892
  },

  // Air Conditioners
  {
    id: 'ac-1',
    name: 'Daikin 1.5 Ton 5 Star Split AC',
    brand: 'Daikin',
    price: 38990,
    mrp: 62990,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=800&q=80',
    category: 'air-conditioners',
    specs: {
      capacity: '1.5 Ton',
      type: 'Split AC',
      energyRating: '5 Star',
      cooling: 'Inverter',
      warranty: '1 year + 5 years on compressor'
    },
    description: 'Inverter technology for energy savings. PM 2.5 filter for clean air. Coanda airflow.',
    rating: 4.6,
    reviews: 1432
  },
  {
    id: 'ac-2',
    name: 'LG 1 Ton 3 Star Window AC',
    brand: 'LG',
    price: 24990,
    mrp: 39990,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=800&q=80',
    category: 'air-conditioners',
    specs: {
      capacity: '1 Ton',
      type: 'Window AC',
      energyRating: '3 Star',
      cooling: 'Fixed Speed',
      warranty: '1 year + 5 years on compressor'
    },
    description: 'Ocean Black Protection for coastal areas. Auto restart and sleep mode.',
    rating: 4.3,
    reviews: 2187
  },
  {
    id: 'ac-3',
    name: 'Voltas 1.5 Ton 3 Star Split AC',
    brand: 'Voltas',
    price: 29990,
    mrp: 48990,
    discount: 39,
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=800&q=80',
    category: 'air-conditioners',
    specs: {
      capacity: '1.5 Ton',
      type: 'Split AC',
      energyRating: '3 Star',
      cooling: 'Fixed Speed',
      warranty: '1 year + 5 years on compressor'
    },
    description: 'Copper condenser for better cooling. Anti-dust filter and turbo mode.',
    rating: 4.2,
    reviews: 3421
  },
  {
    id: 'ac-4',
    name: 'Blue Star 2 Ton 5 Star Inverter AC',
    brand: 'Blue Star',
    price: 49990,
    mrp: 79990,
    discount: 38,
    image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?w=800&q=80',
    category: 'air-conditioners',
    specs: {
      capacity: '2 Ton',
      type: 'Split AC',
      energyRating: '5 Star',
      cooling: 'Inverter',
      warranty: '1 year + 5 years on compressor'
    },
    description: 'Precision cooling technology. Self-diagnosis and auto clean function.',
    rating: 4.5,
    reviews: 876
  },

  // Kitchen Appliances
  {
    id: 'kitchen-1',
    name: 'Philips Air Fryer HD9252/90',
    brand: 'Philips',
    price: 8990,
    mrp: 14995,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      capacity: '4.1 Liters',
      power: '1400W',
      features: 'Digital display, 7 presets',
      warranty: '2 years'
    },
    description: 'Rapid Air technology for healthier frying. Digital touchscreen with preset menus.',
    rating: 4.5,
    reviews: 2341
  },
  {
    id: 'kitchen-2',
    name: 'Prestige Induction Cooktop PIC 20',
    brand: 'Prestige',
    price: 1990,
    mrp: 3495,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      power: '1600W',
      features: 'Push button, Indian menu',
      warranty: '1 year'
    },
    description: 'Energy efficient cooking. Automatic voltage regulator and timer function.',
    rating: 4.2,
    reviews: 5432
  },
  {
    id: 'kitchen-3',
    name: 'Bajaj Majesty RCX 5 Rice Cooker',
    brand: 'Bajaj',
    price: 1490,
    mrp: 2495,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      capacity: '1.8 Liters',
      power: '500W',
      features: 'Auto cook, keep warm',
      warranty: '2 years'
    },
    description: 'Non-stick inner pot. Automatic keep warm function. Suitable for 4-5 people.',
    rating: 4.3,
    reviews: 3214
  },
  {
    id: 'kitchen-4',
    name: 'Butterfly Premium Mixer Grinder',
    brand: 'Butterfly',
    price: 2990,
    mrp: 5495,
    discount: 46,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      power: '750W',
      jars: '4 jars',
      features: 'Overload protection',
      warranty: '2 years'
    },
    description: 'Powerful motor with 4 stainless steel jars. Suitable for Indian cooking needs.',
    rating: 4.4,
    reviews: 2876
  },

  // Budget Items (Under ₹999)
  {
    id: 'budget-1',
    name: 'Havells Swing Pedestal Fan',
    brand: 'Havells',
    price: 899,
    mrp: 1495,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      size: '400mm',
      power: '55W',
      warranty: '2 years'
    },
    description: 'High air delivery with low noise. Rust-free body with thermal overload protection.',
    rating: 4.1,
    reviews: 4321
  },
  {
    id: 'budget-2',
    name: 'Crompton Arno Neo Desk Fan',
    brand: 'Crompton',
    price: 749,
    mrp: 1295,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      size: '300mm',
      power: '50W',
      warranty: '2 years'
    },
    description: 'Compact design for personal cooling. 3-speed control with tilt adjustment.',
    rating: 4.0,
    reviews: 2187
  },
  {
    id: 'budget-3',
    name: 'Philips LED Bulb 9W Pack of 4',
    brand: 'Philips',
    price: 399,
    mrp: 796,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      power: '9W',
      lumens: '900 lm',
      warranty: '1 year'
    },
    description: 'Energy-efficient LED bulbs. Cool daylight for bright illumination.',
    rating: 4.4,
    reviews: 6543
  },
  {
    id: 'budget-4',
    name: 'Syska Power Extension 4 Socket',
    brand: 'Syska',
    price: 299,
    mrp: 599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      sockets: '4 sockets',
      cord: '3 meter',
      warranty: '1 year'
    },
    description: 'Universal socket with surge protection. Heavy-duty cord for safety.',
    rating: 4.2,
    reviews: 3421
  },
  {
    id: 'budget-5',
    name: 'Usha Table Lamp LED',
    brand: 'Usha',
    price: 599,
    mrp: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      power: '5W LED',
      features: 'Adjustable arm',
      warranty: '1 year'
    },
    description: 'Flexible arm for directional lighting. Energy-efficient LED with long life.',
    rating: 4.3,
    reviews: 1876
  },

  // Hot Choice Items
  {
    id: 'hot-1',
    name: 'Kent Grand Plus RO Water Purifier',
    brand: 'Kent',
    price: 14990,
    mrp: 24990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      capacity: '8 Liters',
      technology: 'RO + UV + UF',
      warranty: '1 year'
    },
    description: 'Multi-stage purification with RO, UV, and UF technology. TDS controller included.',
    rating: 4.5,
    reviews: 3214
  },
  {
    id: 'hot-2',
    name: 'Eureka Forbes Vacuum Cleaner',
    brand: 'Eureka Forbes',
    price: 5990,
    mrp: 9990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      power: '1400W',
      capacity: '2 Liters',
      warranty: '1 year'
    },
    description: 'Powerful suction for deep cleaning. HEPA filter for allergen removal.',
    rating: 4.3,
    reviews: 2187
  },
  {
    id: 'hot-3',
    name: 'Bajaj Majesty Geyser 15L',
    brand: 'Bajaj',
    price: 6990,
    mrp: 11990,
    discount: 42,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      capacity: '15 Liters',
      power: '2000W',
      warranty: '2 years + 5 years on tank'
    },
    description: 'Titanium armour tank for durability. Multiple safety systems included.',
    rating: 4.4,
    reviews: 1876
  },
  {
    id: 'hot-4',
    name: 'Morphy Richards OTG 52L',
    brand: 'Morphy Richards',
    price: 7990,
    mrp: 13990,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      capacity: '52 Liters',
      power: '2000W',
      warranty: '2 years'
    },
    description: 'Motorized rotisserie and convection mode. Suitable for baking and grilling.',
    rating: 4.5,
    reviews: 1432
  },
  {
    id: 'hot-5',
    name: 'Prestige Iris Plus Gas Stove',
    brand: 'Prestige',
    price: 3990,
    mrp: 6995,
    discount: 43,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      burners: '3 burners',
      material: 'Toughened glass',
      warranty: '2 years'
    },
    description: 'Tri-pin brass burners for efficient cooking. Spill-proof design with auto ignition.',
    rating: 4.3,
    reviews: 2876
  },
  {
    id: 'hot-6',
    name: 'Pigeon Electric Kettle 1.5L',
    brand: 'Pigeon',
    price: 799,
    mrp: 1495,
    discount: 47,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'kitchen-appliances',
    specs: {
      capacity: '1.5 Liters',
      power: '1500W',
      warranty: '2 years'
    },
    description: 'Stainless steel body with auto shut-off. Boil-dry protection for safety.',
    rating: 4.2,
    reviews: 5432
  },
  {
    id: 'hot-7',
    name: 'Havells Instanio Instant Geyser',
    brand: 'Havells',
    price: 4990,
    mrp: 8495,
    discount: 41,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      capacity: '3 Liters',
      power: '3000W',
      warranty: '2 years + 5 years on element'
    },
    description: 'Instant hot water with color-changing LED indicator. Compact wall-mount design.',
    rating: 4.4,
    reviews: 1654
  },
  {
    id: 'hot-8',
    name: 'Usha Mist Air Cooler 50L',
    brand: 'Usha',
    price: 8990,
    mrp: 14990,
    discount: 40,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'home-appliances',
    specs: {
      capacity: '50 Liters',
      power: '230W',
      warranty: '1 year'
    },
    description: 'Powerful air throw with honeycomb cooling pads. Ice chamber for extra cooling.',
    rating: 4.1,
    reviews: 2341
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (category, limit = 5) => {
  const categoryProducts = category ? getProductsByCategory(category) : products;
  return categoryProducts.slice(0, limit);
};
