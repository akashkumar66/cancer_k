import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, User, CheckCircle } from 'lucide-react';

const LeadCapture = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="bg-background-soft rounded-[3rem] p-8 md:p-20 relative overflow-hidden border border-gray-100">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">Reduce Your Cancer Treatment Costs Today</h2>
            <p className="text-md text-gray-600 mb-8 leading-relaxed">
              Don't Let Medical Bills Come in the Way of Your Recovery. Join India's Largest Cancer Support Network.
            </p>

            <ul className="space-y-4">
              {[
                "Works on Chemo, Radiology & Surgery",
                "No Medical Tests or Waiting Periods",
                "Valid for All Pre-existing Cancers"
              ].map((text, i) => (
                <li key={i} className="flex items-center space-x-3 text-secondary font-semibold">
                  <CheckCircle className="text-primary" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-premium border border-gray-100">
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-accent" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                <p className="text-gray-500">A Specialized Cancer Support Advisor Will Call You Within 15 Minutes.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wider">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 tracking-wider">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      required
                      type="tel"
                      placeholder="Enter 10-digit number"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <button
                  disabled={formState === 'loading'}
                  className="w-full btn-gradient py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Get Free Callback</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">By Clicking, You Agree to Our Terms & Privacy Policy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
