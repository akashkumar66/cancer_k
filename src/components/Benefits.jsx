import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Heart, Globe, TestTube, Baby } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Globe className="text-primary" size={28} />,
      title: "All Cancers Covered",
      desc: "Valid for Breast, Lung, Oral, Blood, and all other types of cancer."
    },
    {
      icon: <Clock className="text-primary" size={28} />,
      title: "Immediate Start",
      desc: "No waiting period. Get discounts from the very first day of membership."
    },
    {
      icon: <Heart className="text-primary" size={28} />,
      title: "Pre-existing Cancer",
      desc: "Already diagnosed? No problem. We cover all pre-existing conditions."
    },
    {
      icon: <TestTube className="text-primary" size={28} />,
      title: "Onco-Diagnostics",
      desc: "Discounts on PET-CT, MRI, Biopsy, and specialized lab tests."
    },
    {
      icon: <Shield className="text-primary" size={28} />,
      title: "No Upper Age Limit",
      desc: "Support for everyone from children to senior citizens up to 120 years."
    },
    {
      icon: <Baby className="text-primary" size={28} />,
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
            <div className="bg-primary/10 p-4 rounded-2xl mb-6">
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
