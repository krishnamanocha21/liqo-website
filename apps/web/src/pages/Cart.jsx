
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'tv-1',
      name: 'Samsung 55" Crystal 4K UHD Smart TV',
      brand: 'Samsung',
      price: 42990,
      mrp: 64990,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80',
      quantity: 1,
    },
    {
      id: 'fridge-1',
      name: 'Samsung 253L Frost Free Double Door',
      brand: 'Samsung',
      price: 24990,
      mrp: 38990,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80',
      quantity: 1,
    },
  ]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const discount = totalMrp - subtotal;
  const deliveryCharges = subtotal > 10000 ? 0 : 500;
  const total = subtotal + deliveryCharges;

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - Liqo</title>
          <meta name="description" content="View and manage your shopping cart at Liqo" />
        </Helmet>

        <Header />

        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Add some products to get started
            </p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-200 active:scale-[0.98]">
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Liqo</title>
        <meta name="description" content="View and manage your shopping cart at Liqo" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ letterSpacing: '-0.02em' }}
          >
            Shopping Cart
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-6 flex gap-6 border-b last:border-0">
                      <Link to={`/product/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                      </Link>

                      <div className="flex-grow">
                        <Link to={`/product/${item.id}`}>
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                            {item.brand}
                          </p>
                          <h3 className="text-base font-medium text-gray-900 mb-2 hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Link>

                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-xl font-bold text-primary">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(item.mrp)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 transition-all duration-200 active:scale-[0.98]"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-base font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 transition-all duration-200 active:scale-[0.98]"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200 active:scale-[0.98]"
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/" className="inline-block mt-6 text-primary font-medium hover:underline">
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm p-6 sticky top-20"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Charges</span>
                    <span>{deliveryCharges === 0 ? 'FREE' : formatPrice(deliveryCharges)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-200 active:scale-[0.98]">
                  Proceed to Checkout
                </Button>

                {deliveryCharges > 0 && (
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Add {formatPrice(10000 - subtotal)} more for free delivery
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
