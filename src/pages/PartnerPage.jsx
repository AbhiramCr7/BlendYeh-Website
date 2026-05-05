import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerPage = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Deploy <span className="text-blend-orange">BlendYeh</span> <br/>
          at Your Location
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Transform a 5x3 sqft empty space into a high-margin autonomous beverage destination.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {[
          { icon: <TrendingUp />, title: "Revenue Share", desc: "Zero capex models available for premium high-footfall real estate partners." },
          { icon: <Building2 />, title: "Franchise Expansion", desc: "Own and operate a fleet of BlendYeh kiosks with predictable unit economics." },
          { icon: <Users />, title: "Corporate Wellness", desc: "Subsidized deployments for corporate campuses and hospital networks." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            className="glass-card p-8 flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-blend-orange group-hover:bg-blend-orange group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Unit Economics Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-sm text-gray-400 mb-2">Avg Selling Price</div>
            <div className="text-3xl font-bold text-blend-purple">$5.50 - $8.00</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">Gross Margin</div>
            <div className="text-3xl font-bold text-blend-orange">~65% - 75%</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">Operational Dependency</div>
            <div className="text-3xl font-bold text-white">&lt; 30 mins / day</div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blend-orange text-white font-bold hover:bg-orange-600 transition-colors">
            Request Partnership Deck
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
