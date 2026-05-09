
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
      >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold">
            {product.discount}% OFF
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{product.brand}</p>
          <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 leading-snug">
            {product.name}
          </h3>
          
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.mrp)}
              </span>
            </div>
            <p className="text-xs text-green-600 font-medium">
              Save {formatPrice(product.mrp - product.price)}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
