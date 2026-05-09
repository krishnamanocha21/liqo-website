
import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'ZIRAKPUR',
    address: 'SCO 12-13, Chandigarh-Ambala Highway, Zirakpur, Punjab 140603',
    phone: '+91 98765 43210',
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=200&q=80'
  },
  {
    id: 2,
    name: 'PANCHKULA',
    address: 'Sector 11 Market, Near Rally Ground, Panchkula, Haryana 134109',
    phone: '+91 98765 43211',
    distance: '5.8 km',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=200&q=80'
  },
  {
    id: 3,
    name: 'KHARAR',
    address: 'Chandigarh Road, Near Bus Stand, Kharar, Punjab 140301',
    phone: '+91 98765 43212',
    distance: '12.4 km',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&q=80'
  },
  {
    id: 4,
    name: 'CHANDIGARH',
    address: 'Elante Mall, Industrial Area Phase I, Chandigarh 160002',
    phone: '+91 98765 43213',
    distance: '8.1 km',
    image: 'https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?w=200&q=80'
  },
  {
    id: 5,
    name: 'SOLAN',
    address: 'Mall Road, Near Old Bus Stand, Solan, Himachal Pradesh 173212',
    phone: '+91 98765 43214',
    distance: '45.2 km',
    image: 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?w=200&q=80'
  },
  {
    id: 6,
    name: 'PINJORE',
    address: 'Kalka-Shimla Highway, Near Yadavindra Gardens, Pinjore 134102',
    phone: '+91 98765 43215',
    distance: '18.7 km',
    image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=200&q=80'
  }
];

function StoreLocator() {
  return (
    <div className="bg-muted/50 rounded-2xl p-5 sm:p-6 border border-border/50">
      <div className="flex items-start gap-3 mb-2">
        <div className="bg-primary/10 p-2 rounded-lg mt-1">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
            Visit Your Nearest Liqo Stores
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Find a store near you and explore the best deals in person.
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
        {stores.map((store) => (
          <a
            key={store.id}
            href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 bg-[hsl(var(--store-card-bg))] p-3 sm:p-4 rounded-xl border border-border/40 shadow-sm hover:shadow-md hover:bg-[hsl(var(--store-card-hover))] transition-all duration-200 group"
          >
            <img
              src={store.image}
              alt={`${store.name} store`}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold text-sm sm:text-base group-hover:text-primary/80 transition-colors">
                {store.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                {store.address}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs font-medium text-foreground/80">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary/70" />
                  {store.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-primary/70" />
                  {store.distance}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default StoreLocator;
