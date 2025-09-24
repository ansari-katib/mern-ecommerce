import React from 'react';
import { Home, ShoppingCart, Info, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white py-6'>
      <div className='max-w-6xl mx-auto  md:flex md:justify-between md:items-center px-4 mb-10'>

        <div className='text-4xl font-bold text-emerald-400 mb-10'>
          Outfit-Trend
        </div>

        <div className='flex space-x-6 mb-10'>
          <a href='#' className='flex items-center text-gray-400 space-x-1 hover:text-emerald-400'>
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href='#' className='flex items-center text-gray-400 space-x-1 hover:text-emerald-400'>
            <ShoppingCart size={18} />
            <span>Shop</span>
          </a>
          <a href='#' className='flex items-center text-gray-400 space-x-1 hover:text-emerald-400'>
            <Info size={18} />
            <span>About</span>
          </a>
          <a href='#' className='flex items-center text-gray-400 space-x-1 hover:text-emerald-400'>
            <Mail size={18} />
            <span>Contact</span>
          </a>
        </div>

      </div>

      <div className='mt-4 text-center text-emerald-500 text-sm'>
        © 2025 OutfitTrend. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
