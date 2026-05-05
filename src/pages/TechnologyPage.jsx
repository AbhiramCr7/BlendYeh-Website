import { motion } from 'framer-motion';
import { Cpu, Server, ShieldCheck, Activity } from 'lucide-react';

const TechnologyPage = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Engineered for <span className="text-blend-purple">Scale</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          BlendYeh integrates advanced robotics, AI-driven recipe optimization, and cloud telemetry into a single unified hardware platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          className="glass-card h-[400px] flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Abstract Architecture Diagram */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          <div className="relative z-10 w-full max-w-sm">
            <div className="p-4 border border-blend-orange/50 rounded-xl bg-black/50 text-center text-sm font-mono text-blend-orange shadow-[0_0_20px_rgba(244,108,34,0.2)] mb-4">Cloud Telemetry OS</div>
            <div className="flex justify-center mb-4">
              <div className="w-px h-8 bg-gradient-to-b from-blend-orange to-blend-purple" />
            </div>
            <div className="p-6 border border-blend-purple/50 rounded-xl bg-black/50 text-center shadow-[0_0_30px_rgba(155,114,196,0.2)]">
              <div className="text-lg font-bold text-white mb-2">Robotic Gantry Node</div>
              <div className="text-xs text-gray-400">Micro-precision dispensing</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Truly Autonomous Operations</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Our proprietary robotic gantry system moves cups through dispensing, blending, capping, and delivery stations with zero human touch. The self-cleaning mechanism activates between every cycle to ensure 100% cross-contamination prevention.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Activity className="text-blend-orange" />
              <span className="font-medium">Real-time inventory tracking</span>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-blend-purple" />
              <span className="font-medium">Automated CIP (Clean-in-Place)</span>
            </div>
            <div className="flex items-center gap-4">
              <Server className="text-blend-orange" />
              <span className="font-medium">OTA (Over-the-Air) Recipe Updates</span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default TechnologyPage;
