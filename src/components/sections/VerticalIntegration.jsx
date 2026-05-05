import { motion } from 'framer-motion';
import { Lightbulb, Wrench, RefreshCcw } from 'lucide-react';

const pillars = [
  {
    icon: <Lightbulb size={32} className="text-blend-purple" />,
    title: "In-House R&D",
    desc: "From proprietary robotics to custom dispensing algorithms, all hardware and software is engineered entirely under one roof."
  },
  {
    icon: <Wrench size={32} className="text-blend-orange" />,
    title: "Precision Manufacturing",
    desc: "Rapid prototyping and final assembly line scale-up controlled strictly by our internal engineering team."
  },
  {
    icon: <RefreshCcw size={32} className="text-blue-400" />,
    title: "Full-Stack Operations",
    desc: "We own the ecosystem. From ingredient supply chain to daily kiosk maintenance and predictive telemetry monitoring."
  }
];

const VerticalIntegration = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            End-to-End Vertical Integration
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just assemble parts. BlendYeh is a deep-tech infrastructure company that controls every variable of the value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalIntegration;
