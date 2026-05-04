import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Heart, Globe, TestTube, Baby } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <img src="/allcancer.png" alt="All Cancers" className="w-16 h-16 object-contain" />,
      title: "All Cancers Covered",
      desc: "Valid for Breast, Lung, Oral, Blood, and all other types of cancer."
    },
    {
      icon: <img src="/effectiveage.png" alt="Immediate" className="w-16 h-16 object-contain" />,
      title: "Immediate Start",
      desc: "No waiting period. Get discounts from the very first day of membership."
    },
    {
      icon: <img src="/allcancer.png" alt="Pre-existing" className="w-16 h-16 object-contain" />,
      title: "Pre-existing Cancer",
      desc: "Already diagnosed? No problem. We cover all pre-existing conditions."
    },
    {
      icon: <img src="/freepickup.png" alt="Diagnostics" className="w-16 h-16 object-contain" />,
      title: "Onco-Diagnostics",
      desc: "Discounts on PET-CT, MRI, Biopsy, and specialized lab tests."
    },
    {
      icon: <img src="/noagelimit.png" alt="No Age Limit" className="w-16 h-16 object-contain" />,
      title: "No Upper Age Limit",
      desc: "Support for everyone from children to senior citizens up to 120 years."
    },
    {
      icon: <img src="/careathome.png" alt="Holistic" className="w-16 h-16 object-contain" />,
      title: "Holistic Care",
      desc: "Discounts on supportive care, nutrition, and post-treatment recovery."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-background-soft">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-secondary mb-6">Why 2 Crore+ Indians Trust Us</h2>
        <p className="text-xl text-gray-600">CareSave is designed to provide complete peace of mind for every family member, from 0 to 120 years old.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start"
          >
            <div className="bg-white shadow-sm rounded-2xl mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
