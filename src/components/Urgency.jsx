import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, Zap } from 'lucide-react';

const Urgency = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <section className="bg-primary py-12 px-6 overflow-hidden relative">
      <motion.div
        animate={{ x: [-100, 100] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-12 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center space-x-4 mb-8 md:mb-0">
          <div className="bg-white p-3 rounded-2xl shadow-lg">
            <Zap className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">Cancer support initiative</h3>
            <p className="text-white/80">Get 10% OFF on infinity plans this month. Use code <span className="font-bold text-white bg-secondary/20 px-2 py-0.5 rounded">FIGHTCANCER</span></p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 text-white">
            <Timer size={24} className="animate-pulse" />
            <span className="font-semibold tracking-wider">Offer ends in:</span>
          </div>

          <div className="flex space-x-2">
            {[
              { val: h, label: "HRS" },
              { val: m, label: "MIN" },
              { val: s, label: "SEC" }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-secondary text-white w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg border border-white/10">
                  {unit.val.toString().padStart(2, '0')}
                </div>
                <span className="text-[10px] font-bold text-white/60 mt-1 uppercase">{unit.label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden lg:block bg-white text-primary font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Claim offer now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
