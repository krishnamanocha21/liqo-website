
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Sun, ShieldCheck, CreditCard, Truck, RotateCcw, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import Hero from '@/components/Hero.jsx';
import ProductCarousel from '@/components/ProductCarousel.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products.js';

function HomePage() {
  const ledOffers = products.filter(p => p.category === 'televisions').slice(0, 5);
  const fridgeOffers = products.filter(p => p.category === 'refrigerators').slice(0, 5);
  const washingMachineOffers = products.filter(p => p.category === 'washing-machines').slice(0, 5);
  const budgetOffers = products.filter(p => p.price < 1000).slice(0, 5);
  const hotChoice = products.filter(p => p.id.startsWith('hot-')).slice(0, 8);

  const trustBadges = [
    { icon: CreditCard, text: '0% No Cost EMI' },
    { icon: ShieldCheck, text: 'Trusted Brands 100% Genuine' },
    { icon: Truck, text: 'Free Delivery & Installation' },
    { icon: RotateCcw, text: '7 Days Easy Returns' },
    { icon: Phone, text: 'Call / Visit Liqo Near You' },
  ];

  return (
    <>
      <Helmet>
        <title>Liqo - Beat the Heat with Cool Deals & Hot Savings</title>
        <meta name="description" content="Shop premium home appliances at Liqo. Get up to 58% off on air conditioners, refrigerators, washing machines, TVs, and kitchen appliances. Free delivery and installation." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* LED Offers Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                    LED Offers
                  </h2>
                </div>
                <Link to="/televisions" className="text-primary font-medium hover:underline">
                  View All →
                </Link>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Experience stunning visuals with our premium LED TV collection
              </p>
            </motion.div>
            <ProductCarousel products={ledOffers} />
          </div>
        </section>

        {/* Refrigerator Offers Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                    Refrigerator Offers
                  </h2>
                </div>
                <Link to="/refrigerators" className="text-primary font-medium hover:underline">
                  View All →
                </Link>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Keep your food fresh with energy-efficient refrigerators
              </p>
            </motion.div>
            <ProductCarousel products={fridgeOffers} />
          </div>
        </section>

        {/* Washing Machine Offers Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                    Washing Machine Offers
                  </h2>
                </div>
                <Link to="/washing-machines" className="text-primary font-medium hover:underline">
                  View All →
                </Link>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Make laundry day easier with smart washing machines
              </p>
            </motion.div>
            <ProductCarousel products={washingMachineOffers} />
          </div>
        </section>

        {/* Under ₹999 Offers Section */}
        <section className="py-16 bg-[#FFF8DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Sun className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                    Under ₹999 Offers
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Amazing deals on essential home appliances
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {budgetOffers.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Choice Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
                  Hot Choice
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Most popular products chosen by our customers
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {hotChoice.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <badge.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-900">{badge.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Banner */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#FFD700]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                Stay Cool. Save Big.
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Visit your nearest Liqo store or call us today for exclusive deals
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-200 active:scale-[0.98]">
                <Phone className="w-5 h-5 mr-2" />
                Call / Visit Liqo Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
