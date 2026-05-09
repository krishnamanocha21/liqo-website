
import React from 'react';
import { Sun, ShieldCheck, CreditCard, Truck, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  const benefits = [
    { icon: ShieldCheck, text: '100% Genuine Products' },
    { icon: CreditCard, text: 'EMI Options' },
    { icon: Truck, text: 'Free Delivery & Installation' },
    { icon: BadgeCheck, text: 'Best Price Guarantee' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#FFF8DC] via-[#FFE4B5] to-[#FFD700] overflow-hidden">
      {/* Decorative Palm Leaves */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 Q120,40 100,60 Q80,40 100,20 M100,60 Q120,80 100,100 Q80,80 100,60 M100,100 Q120,120 100,140 Q80,120 100,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 Q120,40 100,60 Q80,40 100,20 M100,60 Q120,80 100,100 Q80,80 100,60 M100,100 Q120,120 100,140 Q80,120 100,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary block mb-4" style={{ letterSpacing: '-0.02em' }}>
                liqo
              </span>
              <div className="flex items-center gap-3 mb-3">
                <Sun className="w-10 h-10 text-red-600" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  BEAT THE HEAT
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white font-semibold mb-4">
                COOL DEALS. HOT SAVINGS.
              </p>
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl text-2xl md:text-3xl font-bold shadow-lg">
                UP TO 58% OFF
              </div>
            </div>
          </motion.div>

          {/* Right Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80"
                  alt="Black refrigerator"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="col-span-1 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80"
                  alt="Washing machine"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80"
                  alt="Colorful TV display"
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-200"
            >
              <benefit.icon className="w-10 h-10 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">{benefit.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
