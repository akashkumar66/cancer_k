import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Activity, ShieldPlus, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary-dark px-4 py-2 rounded-full mb-6 font-semibold">
            <Activity size={18} />
            <span>India's Largest Healthcare Network</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-secondary mb-6">
            Save Up to <span className="text-primary">40% on Cancer Treatment</span> Bills Instantly
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            India is the Largest Capital of Cancer in the World, With 1.5 million new cancer cases every year, making it a global health priority.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <button className="btn-gradient w-full sm:w-auto px-10 py-4 rounded-full text-lg flex items-center justify-center space-x-2">
              <span>Check Plans Now</span>
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto border-2 border-secondary/10 hover:border-secondary/30 px-10 py-4 rounded-full text-lg font-semibold text-secondary transition-all">
              Watch How it Works
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">1000+ Hospitals</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">20,000+ Labs</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">Nationwide Network</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mt-16 mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/family.png"
              alt="Happy Indian Family"
              className="w-full h-full object-cover"
            />
            {/* Float Cards */}
            <div className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-premium animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <ShieldPlus className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Instant Saving</p>
                  <p className="text-lg font-bold text-secondary">₹45,000 Saved</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-premium animate-float [animation-delay:2s]">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Trusted By</p>
                  <p className="text-lg font-bold text-secondary">2Cr+ Families</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
