import { motion } from 'framer-motion';

const pillars = [
  {
    num: "01",
    title: "Autonomous Preparation & Cleaning",
    tags: ["Precision dispensing", "Automated workflows", "Self-cleaning systems"]
  },
  {
    num: "02",
    title: "Self-Healing Infrastructure",
    tags: ["Adaptive firmware", "Auto recalibration", "Predictive fault detection"]
  },
  {
    num: "03",
    title: "Intelligent Fleet Operations",
    tags: ["Predictive inventory", "Logistics optimization", "OTA cloud management"]
  },
  {
    num: "04",
    title: "Centralized Cloud Platform",
    tags: ["Remote monitoring", "Deployment management", "Internal & external surveillance"]
  }
];

const TechnologyPillars = () => {
  return (
    <section id="technology" className="py-24 bg-black relative">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6 uppercase tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            System Architecture
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Truly Autonomous Operations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const isPurple = idx % 2 !== 0;
            return (
              <motion.div
                key={idx}
                className={`glass-card p-8 md:p-10 border-l-[3px] border-l-white/10 transition-all duration-300 ${isPurple ? 'hover:border-l-blend-purple' : 'hover:border-l-blend-orange'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-black mb-4 font-mono text-white/5">
                  {pillar.num}
                </div>
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
                  {pillar.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {pillar.tags.map((tag, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-sm ${isPurple ? 'bg-blend-purple/80' : 'bg-blend-orange/80'}`} />
                      <span className="text-gray-400 font-medium tracking-wide">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPillars;
