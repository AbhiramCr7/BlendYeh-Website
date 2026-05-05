import { motion } from 'framer-motion';

const MenuPreview = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-[#F5F5F5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Beverage Menu
          </motion.h2>
          <motion.div 
            className="inline-block px-6 py-2 rounded-lg bg-[#111111] text-blend-orange font-mono tracking-widest uppercase text-sm border border-blend-orange/30 shadow-[0_0_15px_rgba(255,106,26,0.15)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Coming Soon
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          
          {/* Overlay to enforce the 'Coming Soon' feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10 pointer-events-none" />

          {[
            "Protein Smoothie",
            "Recovery Shake",
            "Hydration Drink",
            "Functional Beverage"
          ].map((name, idx) => {
            const isPurple = idx % 2 !== 0;
            return (
              <motion.div
                key={idx}
                className="glass-card aspect-[3/4] p-6 flex flex-col items-center justify-end relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 blur-xl ${isPurple ? 'group-hover:from-blend-purple/10' : 'group-hover:from-blend-orange/10'} transition-colors`} />
                
                {/* Silhouette Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`w-24 h-40 bg-[#0a0a0a] rounded-xl border border-white/10 backdrop-blur-sm ${isPurple ? 'group-hover:border-blend-purple/30' : 'group-hover:border-blend-orange/30'} transition-colors shadow-2xl`} />
                </div>

                <div className={`relative z-10 text-center w-full bg-[#111111] py-3 rounded-lg border border-white/10 ${isPurple ? 'group-hover:border-blend-purple/30' : 'group-hover:border-blend-orange/30'} transition-colors`}>
                  <h3 className="text-sm md:text-base font-bold text-gray-300">{name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
