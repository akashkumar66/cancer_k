import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Sparkles, ArrowRight } from 'lucide-react';

const ExitIntentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden grid md:grid-cols-5"
      >
        <div className="md:col-span-2 bg-primary p-12 flex flex-col items-center justify-center text-center text-white relative">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-y-12 -z-0" />
          <Gift size={80} className="mb-6 relative z-10" />
          <h3 className="text-3xl font-bold mb-2 relative z-10">Wait!</h3>
          <p className="text-white/80 relative z-10">Don't leave empty handed.</p>
        </div>

        <div className="md:col-span-3 p-12 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-secondary transition-colors"
          >
            <X size={24} />
          </button>

          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent-dark px-4 py-2 rounded-full mb-6 font-semibold">
            <Sparkles size={18} />
            <span>Exclusive offer</span>
          </div>

          <h2 className="text-3xl font-bold text-secondary mb-4">Get 40% OFF</h2>
          <p className="text-gray-600 mb-8">Use the code below at checkout to claim your upto 40% healthcare savings.</p>

          <div className="bg-gray-50 border-2 border-dashed border-primary/30 p-6 rounded-2xl flex items-center justify-between mb-8">
            <div>
              <p className="text-xs text-gray-400 font-bold tracking-wider">Your promo code</p>
              <p className="text-2xl font-bold text-primary tracking-widest">FIGHTCANCER</p>
            </div>
            <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-all">
              <ArrowRight size={24} />
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full btn-gradient py-4 rounded-2xl font-bold text-lg"
          >
            Claim Now
          </button>
          <p className="text-center mt-4 text-sm text-gray-400"></p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExitIntentPopup;
