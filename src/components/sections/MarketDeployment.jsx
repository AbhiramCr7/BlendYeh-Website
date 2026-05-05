import { motion } from 'framer-motion';

const DeploymentTimeline = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">The Deployment Ecosystem</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "Pilot", desc: "MVP testing in high-density office parks.", num: "01" },
              { phase: "Scale", desc: "Franchise partnerships across gyms & hospitals.", num: "02" },
              { phase: "Ubiquity", desc: "Modular configurations for airports & malls.", num: "03" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                className="relative glass-card p-8 z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-bg border-2 border-blend-orange flex items-center justify-center font-bold text-blend-orange">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{step.phase}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimeline;
