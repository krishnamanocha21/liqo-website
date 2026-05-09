
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, ShieldCheck, CheckCircle, Headphones, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCarousel from '@/components/ProductCarousel.jsx';
import StoreLocator from '@/components/StoreLocator.jsx';
import ContactButtons from '@/components/ContactButtons.jsx';
import { products } from '@/data/products.js';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product not found</h2>
            <Link to="/" className="text-primary hover:underline">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} - ${product.brand} | Liqo`}</title>
        <meta name="description" content={`Buy ${product.name} by ${product.brand} at Liqo. Get best deals and quick customer support.`} />
      </Helmet>

      <Header />

      {/* Adjust padding bottom specifically on mobile to accommodate the sticky footer */}
      <main className="min-h-screen bg-gray-50 pb-28 md:pb-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b shadow-sm relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to={`/${product.category}`} className="text-gray-600 hover:text-primary capitalize transition-colors">
                {product.category.replace('-', ' ')}
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Main Layout: 60/40 Split */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            
            {/* Left Column: Huge Product Image (60%) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <div className="w-full aspect-[4/5] bg-white rounded-3xl p-6 shadow-sm border border-border/40 flex items-center justify-center group overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Floating Discount Badge */}
                  <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-primary/20 tracking-wide z-10">
                    {product.discount}% OFF
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Product Details, Trust Icons & Action Sections (40%) */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                
                {/* Product Core Details */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border/40">
                  <p className="text-sm text-primary uppercase tracking-wider mb-3 font-bold">
                    {product.brand}
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 leading-[1.15]" style={{ letterSpacing: '-0.02em' }}>
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-200/50">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price Box */}
                  <div className="bg-muted/40 p-5 rounded-2xl border border-border/60">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xl text-muted-foreground line-through font-semibold decoration-2">
                        {formatPrice(product.mrp)}
                      </span>
                    </div>
                    <p className="text-green-600 font-bold text-sm bg-green-50 inline-block px-3 py-1 rounded-md border border-green-200/50">
                      You save {formatPrice(product.mrp - product.price)}
                    </p>
                  </div>
                </div>

                {/* Trust Icons Section - Always Horizontal Row */}
                <div className="flex flex-row gap-2 sm:gap-3">
                  {/* Icon 1 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 bg-[hsl(var(--trust-icon-bg))] p-3 sm:p-5 rounded-2xl border border-[hsl(var(--trust-icon-fg))]/15 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm">
                      <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--trust-icon-fg))]" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-foreground/90 leading-snug">
                      Best Price<br/>Guarantee
                    </span>
                  </div>
                  
                  {/* Icon 2 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 bg-[hsl(var(--trust-icon-bg))] p-3 sm:p-5 rounded-2xl border border-[hsl(var(--trust-icon-fg))]/15 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm">
                      <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--trust-icon-fg))]" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-foreground/90 leading-snug">
                      100% Genuine<br/>Products
                    </span>
                  </div>
                  
                  {/* Icon 3 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 bg-[hsl(var(--trust-icon-bg))] p-3 sm:p-5 rounded-2xl border border-[hsl(var(--trust-icon-fg))]/15 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm">
                      <Headphones className="w-5 h-5 sm:w-7 sm:h-7 text-[hsl(var(--trust-icon-fg))]" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-foreground/90 leading-snug">
                      Quick Customer<br/>Support
                    </span>
                  </div>
                </div>

                {/* Actions & Location */}
                <div className="space-y-6 pt-2">
                   <StoreLocator />
                   <ContactButtons />
                </div>
                
              </motion.div>
            </div>

          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="pt-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Star className="w-6 h-6 text-primary fill-primary/20" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Related Products
                </h2>
              </div>
              <ProductCarousel products={relatedProducts} />
            </section>
          )}
        </div>
      </main>

      {/* Sticky Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border/60 shadow-[0_-4px_25px_-5px_rgba(0,0,0,0.1)] p-3 md:hidden">
  {/* Added w-full here so the buttons stretch nicely */}
  <div className="flex items-center gap-3 w-full max-w-md mx-auto">
    <ContactButtons />
  </div>
</div>

      <Footer />
    </>
  );
}

export default ProductDetailPage;d
