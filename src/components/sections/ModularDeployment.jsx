import { motion } from 'framer-motion';

const configs = [
  {
    name: "Compact",
    size: "2.5ft × 2ft",
    useCase: "Gyms & Studios",
    renderStyle: "w-32 h-48"
  },
  {
    name: "Standard",
    size: "3ft × 2ft",
    useCase: "Corporate Campuses",
    renderStyle: "w-40 h-56"
  },
  {
    name: "High Capacity",
    size: "4ft × 2.5ft",
    useCase: "Malls & Airports",
    renderStyle: "w-48 h-64"
  }
];

const ModularDeployment = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F5F5F5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for Flexible Deployment
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            BlendYeh kiosks are modular and configurable based on location type, ingredient capacity, operational demand, and footprint requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12 lg:gap-16 pt-10">
          {configs.map((config, idx) => {
            const isPurple = idx % 2 !== 0;
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center group w-full md:w-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Abstract Machine Render */}
                <div className={`relative mb-8 flex items-end justify-center ${config.renderStyle}`}>
                  <div className={`absolute bottom-0 w-full h-full bg-gradient-to-t ${isPurple ? 'from-blend-purple/30' : 'from-blend-orange/30'} to-transparent opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500`} />
                  <div className={`w-full h-full bg-[#111111] border border-white/10 rounded-t-lg relative overflow-hidden flex flex-col justify-end transition-colors ${isPurple ? 'group-hover:border-blend-purple/30' : 'group-hover:border-blend-orange/30'}`}>
                    <div className="h-1/3 w-full bg-[#0a0a0a] border-t border-white/5 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Info Text */}
                <div className="text-center glass-card p-6 w-full min-w-[200px]">
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">{config.name}</h3>
                  <div className={`font-mono text-sm mb-3 font-bold ${isPurple ? 'text-blend-purple' : 'text-blend-orange'}`}>{config.size}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">{config.useCase}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ModularDeployment;
