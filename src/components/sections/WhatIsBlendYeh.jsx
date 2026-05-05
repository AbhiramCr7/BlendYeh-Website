import { motion } from 'framer-motion';
import { Cpu, Settings2, ShieldCheck, Activity } from 'lucide-react';

const features = [
  {
    icon: <Cpu size={32} className="text-blend-purple" />,
    title: "Autonomous Preparation",
    desc: "Robotic gantry system dispenses, blends, and cleans with zero human intervention."
  },
  {
    icon: <Settings2 size={32} className="text-blend-orange" />,
    title: "Personalized Drinks",
    desc: "AI-driven recipes allow micro-adjustments for taste, calories, and specific nutrition goals."
  },
  {
    icon: <Activity size={32} className="text-blend-purple" />,
    title: "Predictive Maintenance",
    desc: "Cloud-connected telemetry predicts hardware needs before they impact operations."
  },
  {
    icon: <ShieldCheck size={32} className="text-blend-orange" />,
    title: "Scalable Deployment",
    desc: "Modular 5x3 sqft footprint installs anywhere with standard power and water lines."
  }
];

const WhatIsBlendYeh = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Redefining Retail Beverage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            BlendYeh is a deep-tech robotics platform disguised as a premium beverage kiosk. We eliminate labor dependency while elevating the consumer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsBlendYeh;
