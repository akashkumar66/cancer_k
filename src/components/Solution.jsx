import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Truck, Pill, Infinity, Sparkles, TrendingDown, Hospital } from 'lucide-react';

const Solution = () => {
  const highlights = [
    { icon: <TrendingDown className="w-8 h-8 text-primary" />, title: "Radiology savings", desc: "Save upto 40% off on chemo and radiology" },
    // { icon: <Hospital className="w-8 h-8 text-primary" />, title: "Priority Admissions", desc: "Skip the lines at top cancer centers" },
    { icon: <Truck className="w-8 h-8 text-primary" />, title: "Onco medicines", desc: "Free home delivery of specialized meds" },
    { icon: <Infinity className="w-8 h-8 text-primary" />, title: "No treatment cap", desc: "Unlimited usage for long-term care" }
  ];

  return (
    <section className="section-padding bg-background-soft">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center uppercase space-x-2 bg-accent/10 text-accent-dark px-4 py-2 rounded-full mb-6 font-semibold">
            <Sparkles size={18} />
            <span>A Smarter Alternative To Insurance</span>
          </div>
          <h2 className="text-4xl md:text-5xl premium-heading text-secondary mb-8">
            Oxxy: The <span className="text-primary">Cancer Support Network</span> You Can Rely on
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We've built India's most robust oncology network. From PET scans and biopsies to complex surgeries and immunotherapy, we ensure you get the best care at pre-negotiated, affordable rates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col space-y-2 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-primary group-hover:text-white transition-colors" })}
                </div>
                <h4 className="font-bold text-secondary text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] p-6 md:p-12">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full bg-white rounded-3xl shadow-premium overflow-hidden border border-white/40 p-6 md:p-8"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left pb-6 border-b border-gray-100 space-y-4 sm:space-y-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary">Save upto 40%</h3>
                  <span className="bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider whitespace-nowrap">PREMIUM PLAN</span>
                </div>

                {[
                  { label: "Chemotherapy (6 Cycles)", amount: "₹4,80,000", discount: "₹1,92,000", final: "₹2,88,000" },
                  { label: "PET Scan & Biopsy", amount: "₹25,000", discount: "₹10,000", final: "₹15,000" },
                  { label: "Onco-Medicines", amount: "₹15,000", discount: "₹3,000", final: "₹12,000" }
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 py-2">
                    <div>
                      <p className="text-lg font-bold text-secondary leading-tight">{row.label}</p>
                      <p className="text-sm font-bold text-gray-700 line-through">Original: {row.amount}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-xl font-black text-accent leading-none">-{row.discount}</p>
                      <p className="text-sm font-bold text-secondary opacity-80">{row.final}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                  <p className="text-xl font-bold text-secondary">Total onco-savings</p>
                  <p className="text-4xl font-black text-primary">₹2,05,000</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
