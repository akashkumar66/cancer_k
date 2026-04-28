import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Meera Iyer",
      role: "Breast Cancer Survivor",
      content: "My treatment involved 12 cycles of chemo. Oxxy saved us over ₹3 Lakhs. But more than money, their priority booking at Tata Memorial was a blessing.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Suresh Prabhu",
      role: "Lung Cancer Patient",
      content: "Insurance rejected my claim because I was a former smoker. Oxxy didn't ask any questions. They covered my radiation from day one.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      name: "Dr. Anjali Gupta",
      role: "Oncologist",
      content: "I recommend Oxxy to my patients who are struggling with treatment costs. It's the only platform that truly covers pre-existing cancers immediately.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Real Stories from Real Families</h2>
          <p className="text-xl text-white/70">Join millions of Indians who are already saving on their healthcare costs with Oxxy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 text-white/10 group-hover:text-primary/20 transition-colors" size={60} />
              <div className="flex mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-white text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-primary/30" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/10">
          <h2 className="text-center text-white text-3xl font-bold mb-12 uppercase tracking-wider">Media Coverage</h2>
          <div className="flex overflow-x-auto pb-10 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { img: "/1_toi1.png", title: "The Times of India", desc: "Oxxy launches affordable health plan for entire family" },
              { img: "/2_core.png", title: "Core Sector Communique", desc: "OXXY launches its plan to give nightmare to Health Insurance Companies" },
              { img: "/7_tele.png", title: "Telecompaper", desc: "OnePlus, Oxxy partner on health project in India" },
              { img: "/8_toi2.png", title: "The Times of India", desc: "Oxxy moves to launch world's largest transparent, affordable" },
              { img: "/9_et.png", title: "Economic Times", desc: "Oxxy to launch chain of hospitals across India" },
              { img: "/14_firstpost.png", title: "Firstpost", desc: "Uber-Oxxy tie up: Free cab rides to all hospitals" },
              { img: "/16_toi3.png", title: "The Times of India", desc: "Oxxy to hold 500 free health camps under Swastha Bharat" },
              { img: "/18_toi4.png", title: "The Times of India", desc: "Oxxy medical partner for Blind Cricket World Cup T20" },
              { img: "/25_live.png", title: "Mint", desc: "Uber, Oxxy tie up to provide cab rides to Delhi hospitals" },
              { img: "/40_oneindia.png", title: "One India", desc: "Oxxy to make FD of ₹11,000 for every girl child born" },
              { img: "/41_inkhabar.png", title: "Inkhabar", desc: "Good news for every girl child born in India - Oxxy FD" },
              { img: "/45_naiduniya.png", title: "Naidunia Jagran", "desc": "FD of ₹11,000 on birth of every girl child in India" }
            ].map((media, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] bg-[#E0F2F1] rounded-2xl p-4 flex flex-col items-center text-center shadow-lg border border-teal-100 group transition-all duration-300 hover:scale-105 snap-center">
                <div className="bg-white w-full h-32 rounded-xl border border-gray-800 flex items-center justify-center p-2 mb-4 overflow-hidden">
                  <img src={media.img} alt={media.title} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="text-[#00796B] font-bold text-lg mb-2">{media.title}</h4>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-snug h-12 overflow-hidden">
                  {media.desc}
                </p>
                <a
                  href="#"
                  className="bg-[#009688] text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center space-x-2 transition-colors hover:bg-[#00796B]"
                >
                  <span className="w-5 h-5 bg-white text-[#009688] rounded-full flex items-center justify-center text-xs">+</span>
                  <span>View More</span>
                </a>
              </div>
            ))}
          </div>
          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
