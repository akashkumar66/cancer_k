import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Wallet, Stethoscope, Clock, TrendingDown, Quote } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: <Stethoscope className="w-12 h-12 text-red-500" />,
      title: "Expensive Radiology",
      description: "Cancer treatments like chemotherapy and radiology can cost lakhs per session, often exceeding insurance limits."
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "Wait & exclusion",
      description: "Most policies have a 2-4 year waiting period for cancer, leaving patients vulnerable when they need help now."
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-red-500" />,
      title: "Savings wipeout",
      description: "A full cancer treatment cycle can wipe out a family's lifetime savings, leading to immense financial stress."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl premium-heading text-secondary mb-6">Why modern healthcare is failing you?</h2>
        <p className="text-xl text-gray-600">The traditional healthcare system is designed to benefit hospitals, not patients. Here's the reality most families face:</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-red-50 border border-red-100 transition-all duration-300"
          >
            <div className="bg-white w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center shadow-sm mb-6">
              {point.icon}
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-secondary rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Quote className="absolute -top-8 -left-6 text-white/10 w-16 h-16" />
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-[1.3] tracking-tight">
              "My wife's <span className="italic font-bold text-primary">chemotherapy</span> was costing ₹80,000 per cycle. Without <span className="italic font-bold text-primary">Oxxy</span>, we would have had to sell our ancestral home."
            </h3>
            <div className="flex items-center space-x-4">
              <p className="text-white/80 text-lg font-semibold tracking-wide">Arvind Mehta, Retired Teacher</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <p className="text-white text-xl font-medium mb-4">Don't let this be your story.</p>
            <p className="text-white/80 mb-6">Oxxy provides guaranteed savings without the hidden clauses of traditional insurance.</p>
            <button className="bg-white text-secondary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
              Save my savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
