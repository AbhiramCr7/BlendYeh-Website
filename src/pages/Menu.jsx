import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Zap, Heart, Leaf } from 'lucide-react';

const categories = ["All", "Smoothies", "Milkshakes", "Protein Drinks", "Functional Drinks", "Boba Tea"];

const beverages = [
  {
    id: 1,
    name: "Berry Antioxidant Fusion",
    category: "Smoothies",
    cal: "240 kcal",
    ingredients: "Wild Blueberries, Strawberries, Açai, Almond Milk, Chia Seeds",
    tags: ["Low Sugar", "Vegan"],
    color: "bg-purple-500/20 text-purple-400"
  },
  {
    id: 2,
    name: "Post-Workout Recovery",
    category: "Protein Drinks",
    cal: "320 kcal",
    ingredients: "Whey Isolate, Banana, Peanut Butter, Oat Milk, Cacao",
    tags: ["High Protein", "Energy Boost"],
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    id: 3,
    name: "Matcha Zen Focus",
    category: "Functional Drinks",
    cal: "180 kcal",
    ingredients: "Ceremonial Matcha, L-Theanine, Coconut Milk, Agave",
    tags: ["Energy Boost", "Vegan"],
    color: "bg-green-500/20 text-green-400"
  },
  {
    id: 4,
    name: "Classic Taro Boba",
    category: "Boba Tea",
    cal: "380 kcal",
    ingredients: "Taro Root, Black Tea, Whole Milk, Tapioca Pearls, Brown Sugar",
    tags: ["Indulgent"],
    color: "bg-pink-500/20 text-pink-400"
  },
  {
    id: 5,
    name: "Golden Mango Lassi",
    category: "Smoothies",
    cal: "290 kcal",
    ingredients: "Alphonso Mango, Greek Yogurt, Cardamom, Honey",
    tags: ["Probiotic", "Indulgent"],
    color: "bg-yellow-500/20 text-yellow-400"
  },
  {
    id: 6,
    name: "Dark Chocolate Engine",
    category: "Milkshakes",
    cal: "450 kcal",
    ingredients: "70% Dark Chocolate, Vanilla Bean Ice Cream, Whole Milk",
    tags: ["Indulgent", "Energy Boost"],
    color: "bg-orange-500/20 text-orange-400"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" 
    ? beverages 
    : beverages.filter(b => b.category === activeCategory);

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Beverage <span className="text-blend-orange">OS</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Personalize every variable. From protein grams to sweetness levels. 
          Autonomously blended to your exact biological needs.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <div className="mr-4 text-gray-500 flex items-center gap-2"><Filter size={18}/> Filter:</div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-white text-black' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((drink) => (
            <motion.div
              key={drink.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card flex flex-col overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-black to-gray-900 border-b border-white/10 relative flex items-center justify-center p-6">
                {/* Abstract Drink Rep */}
                <div className={`w-24 h-32 rounded-lg border border-white/20 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ${drink.color.split(' ')[0]}`}>
                  <div className="absolute inset-x-0 bottom-0 top-1/3 bg-white/10 backdrop-blur-sm" />
                </div>
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs font-mono border border-white/10">
                  {drink.cal}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-blend-orange mb-2 font-mono uppercase">{drink.category}</div>
                <h3 className="text-xl font-bold mb-3">{drink.name}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1 line-clamp-2">{drink.ingredients}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {drink.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
