import { motion } from 'framer-motion';
import { Leaf, Dumbbell, Zap, Heart } from 'lucide-react';

const categories = [
  { name: 'Smoothies', icon: <Leaf size={24} />, color: 'text-green-400', bg: 'bg-green-400/10' },
  { name: 'Protein', icon: <Dumbbell size={24} />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Functional', icon: <Zap size={24} />, color: 'text-blend-orange', bg: 'bg-blend-orange/10' },
  { name: 'Indulgent', icon: <Heart size={24} />, color: 'text-blend-purple', bg: 'bg-blend-purple/10' }
];

const ConsumerLifestyle = () => {
  return (
    <section className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nutrition that Fits Your Lifestyle</h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you need a post-workout recovery shake, a mid-day functional energy boost, or a custom boba drink, our OS tailors every ingredient to your exact preference.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Customizable macronutrients",
                "Flavor personalization profiles",
                "Hygienic, touchless preparation",
                "100% consistent quality every time"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blend-orange" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="flex-1 w-full grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((cat, i) => (
              <div key={i} className="glass-card p-6 aspect-square flex flex-col justify-center items-center text-center group cursor-pointer hover:border-blend-purple/50">
                <div className={`w-16 h-16 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h4 className="font-semibold text-lg">{cat.name}</h4>
                <div className="mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ConsumerLifestyle;
