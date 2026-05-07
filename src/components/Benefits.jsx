import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, TrendingUp, FileText, History, Infinity, Stethoscope } from 'lucide-react';

const Benefits = () => {
  const leftBenefits = [
    {
      icon: <ClipboardCheck className="text-teal-500" size={40} />,
      title: "Valid on all pre-existing diseases",
      desc: "Oxxy works on all pre-existing diseases like diabetes, cancer etc."
    },
    {
      icon: <TrendingUp className="text-teal-500" size={40} />,
      title: "No age limit",
      desc: "Oxxy health services can be availed by any age group from 0 to 120 years."
    },
    {
      icon: <FileText className="text-teal-500" size={40} />,
      title: "No limit on medical expenses",
      desc: "Oxxy works seamlessly on all your medical expenses, from bill of Rs. 5000 to Rs. 5 crores."
    }
  ];

  const rightBenefits = [
    {
      icon: <History className="text-teal-500" size={40} />,
      title: "Works on OPD & IPD",
      desc: "Most medical protections work after 24 hours hospitalization. Oxxy caters from small tests to expensive medical surgeries."
    },
    {
      icon: <Infinity className="text-teal-500" size={40} />,
      title: "Unlimited usage",
      desc: "Use unlimited time. Get discounts on any tests, treatments & surgeries."
    },
    {
      icon: <Stethoscope className="text-teal-500" size={40} />,
      title: "Includes Eye, Dental & Derma",
      desc: "Also get discounts on eye surgeries, dental procedures, derma & cosmetic treatments."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#F4F7F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#3CB3AD] font-semibold mb-2 tracking-widest uppercase text-sm">The Amazing Benefits</p>
          <h2 className="text-4xl md:text-5xl premium-heading text-[#1A3C34]">
            Oxxy Offers More <span className="text-gray-500 font-normal">Than Any Health Insurance</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {leftBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-xl flex items-start space-x-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="shrink-0 pt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A3C34] mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative flex justify-center order-first lg:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="/center_image.png"
                alt="Doctor"
                className="w-full max-w-md h-auto object-contain mx-auto"
              />
            </motion.div>
            {/* Background Circle Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3CB3AD]/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-xl flex items-start space-x-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="shrink-0 pt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A3C34] mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
