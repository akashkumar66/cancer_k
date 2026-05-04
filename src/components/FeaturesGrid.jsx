import React from 'react';
import { motion } from 'framer-motion';
import { ShieldOff, Zap, Activity, Stethoscope, IndianRupee, Banknote, ArrowRight } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <img src="/allcancer.png" alt="All Cancer" className="w-24 h-24 object-contain" />,
      title: "With No Medical Cover",
      desc: "Perfect for patients who don't have any oncology insurance or medical cover."
    },
    {
      icon: <img src="/nlonmedical.png" alt="No Limit" className="w-24 h-24 object-contain" />,
      title: "Who Need 10x Coverage",
      desc: "Amplify your existing medical cover for complete peace of mind during long treatments."
    },
    {
      icon: <img src="/effectiveage.png" alt="Effective" className="w-24 h-24 object-contain" />,
      title: "With Pre-Existing Diseases",
      desc: "Cut cancer treatment costs even if you are already suffering from a pre-existing condition."
    },
    {
      icon: <img src="/careathome.png" alt="Care at Home" className="w-24 h-24 object-contain" />,
      title: "Who Need Specialized Care",
      desc: "Get huge discounts on PET Scans, MRI, Biopsies, and Senior Oncologist consultations."
    },
    {
      icon: <img src="/discounted.png" alt="Discounted" className="w-24 h-24 object-contain" />,
      title: "With High-Treatment Cost",
      desc: "Oxxy helps you save money on every expensive surgery, chemo cycle, and radiation."
    },
    {
      icon: <img src="/freestorage.png" alt="Free Storage" className="w-24 h-24 object-contain" />,
      title: "Who Want Long-term Savings",
      desc: "Reduce recurring expenses on lifelong diagnostics, treatments, and post-care surgeries."
    }
  ];

  return (
    <section className="py-20 bg-[#1A3C34] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Oxxy is Best for people</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 flex flex-col items-center text-center relative group hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {feature.desc}
              </p>

              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-0  transition-opacity">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                  <ArrowRight size={20} />
                </div>
              </div>

              {/* Icon corner from image */}
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-all">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
