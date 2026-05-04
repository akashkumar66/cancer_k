import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Why should you buy Oxxy Health Plan?",
    answer: "Oxxy health plan helps you save money on your medical expenses, has no age limit, works on all pre-existing diseases, comes with no restriction to the amount of medical bills, and is usable for unlimited times."
  },
  {
    question: "Why choose Oxxy over other Health Plans & Health Insurances?",
    answer: "Traditional health insurances only work on treatment costs which may be reimbursed based on approval. In contrast, Oxxy goes beyond and helps in getting patients connected to all medical services. Patients get heavy discounts without any limit on the medical bill amount."
  },
  {
    question: "How can Oxxy Health Plan help me Live Longer?",
    answer: "By providing timely intervention of medical care, Oxxy can help save lives. It is observed that most patients die because of delay in treatment. Oxxy ensures you get treated in any medical center in the country immediately."
  },
  {
    question: "What all does Oxxy offer?",
    answer: "Oxxy offers discounts on all tests, treatments, and surgeries. It provides quick appointments to skip lines, assistance for any medical treatment, a free counselor, and cloud upload of medical records for quick referral."
  },
  {
    question: "How much money can my family save annually?",
    answer: "Depending on the disease, you can easily save up to Rs. 5,00,000 annually on an average household. In some cases, patients have saved up to Rs. 80,00,000."
  },
  {
    question: "What if I don't like Oxxy Health Plan after buying?",
    answer: "Oxxy works every time. However, if Oxxy is not able to offer discounts on any treatment or surgery, you may refund the health plan as per T&C."
  },
  {
    question: "How do I trust Oxxy?",
    answer: "Oxxy is the world's largest health-camps organizer. It has tie-ups with all renowned hospitals, diagnostic centers, and pathlabs. There are 2000+ articles in media about Oxxy, and it has 2,0,00,000+ customers."
  },
  {
    question: "What is Oxxy?",
    answer: "Oxxy is India's largest healthcare network, having tie-ups across the country for providing concessional rates to its patients. It currently has 2,00,000 hospitals, diagnostic centers, and path-labs in 1500 cities."
  },
  {
    question: "Where can I find list of hospitals & other medical centers where Oxxy Health Plan is valid?",
    answer: "Oxxy health plan works in 95% of the private healthcare market. Once the Health Plan is purchased Oxxy ensures that the prescribed treatment is given to the customer in and around their location. You may call 9999000102 for further assistance."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#3CB3AD] font-semibold mb-2 uppercase tracking-widest text-sm">FAQs for Patients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Got questions? We've got answers
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="/docind.png"
              alt="Doctor"
              className="w-full max-w-sm mx-auto relative z-10"
            />
            {/* Background Decor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[#3CB3AD]/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#3CB3AD] p-1 rounded-[2rem] shadow-xl"
            >
              <div className="bg-white rounded-[1.8rem] overflow-hidden">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-none">
                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-all group"
                    >
                      <span className="font-bold text-secondary text-sm md:text-base pr-4 group-hover:text-[#3CB3AD] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`text-[#3CB3AD] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                        size={18}
                      />
                    </button>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 text-gray-600 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* View More Button */}
                <div className="p-4 text-center bg-[#3CB3AD]">
                  <button className="bg-[#1A3C34] text-white px-8 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-all flex items-center space-x-2 mx-auto uppercase tracking-widest">
                    <span>View More</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
