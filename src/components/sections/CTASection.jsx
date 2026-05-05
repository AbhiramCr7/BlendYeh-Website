import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blend-purple/10 to-dark-bg" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let’s Redefine Access to <br />
          <span className="text-gradient">Fresh Beverages</span>
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/partner" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blend-orange text-white font-bold text-lg hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(244,108,34,0.4)]">
            Partner With BlendYeh
          </Link>
          <Link to="/menu" className="group w-full sm:w-auto px-8 py-4 rounded-full glass-card flex items-center justify-center gap-2 hover:bg-white/10 transition-colors font-semibold border border-white/20">
            Explore Menu
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
