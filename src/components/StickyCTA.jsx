import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[90] flex flex-col space-y-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-secondary rounded-full shadow-2xl flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all"
          >
            <ArrowUp size={20} className="md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/918800855340?text=Hi, I want to know more about Oxxy's cancer support plans."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <div className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl shadow-xl font-bold whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
          Chat with us!
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white animate-bounce" />
      </motion.a>
    </div>
  );
};

export default StickyCTA;
