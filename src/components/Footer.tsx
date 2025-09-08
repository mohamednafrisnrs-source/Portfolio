import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Mohamed Nafris</span>
            </p>
            <p className="text-slate-400 text-sm mt-1">
              © 2025 All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;