import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity } from 'lucide-react';

const scenarios = [
  {
    feature: "Prompt-Based Creation",
    prompt: "Forgot my breakfast. Provide me an oats and fruits breakfast replacement.",
    resultName: "Morning Oats & Fruit Blend",
    match: "98%",
    matchColor: "text-green-400",
    matchBg: "bg-green-500/20",
    matchBorder: "border-green-500/50",
    sliders: [
      { label: "Oats & Fiber", val: "High", percent: "90%", color: "bg-amber-500" },
      { label: "Mixed Berries", val: "Extra", percent: "85%", color: "bg-red-500" },
      { label: "Protein", val: "20g", percent: "50%", color: "bg-blue-500" }
    ],
    ingredients: ['🌾', '🍓', '🫐', '🥛']
  },
  {
    feature: "Texture Customization",
    prompt: "Cold coffee chocolate milkshake, make it extremely thick.",
    resultName: "Thick Mocha Frost Shake",
    match: "99%",
    matchColor: "text-purple-400",
    matchBg: "bg-purple-500/20",
    matchBorder: "border-purple-500/50",
    sliders: [
      { label: "Thickness", val: "Max", percent: "95%", color: "bg-purple-500" },
      { label: "Espresso Shot", val: "Double", percent: "85%", color: "bg-amber-700" },
      { label: "Dark Chocolate", val: "Extra", percent: "90%", color: "bg-orange-800" }
    ],
    ingredients: ['☕', '🍫', '🧊', '🥛']
  },
  {
    feature: "Nutrition Personalization",
    prompt: "Played badminton, tired. Give me a hydration drink rich in Vitamin C.",
    resultName: "Citrus Recovery Hydrator",
    match: "99%",
    matchColor: "text-yellow-400",
    matchBg: "bg-yellow-500/20",
    matchBorder: "border-yellow-500/50",
    sliders: [
      { label: "Vitamin C", val: "Max", percent: "95%", color: "bg-yellow-500" },
      { label: "Electrolytes", val: "High", percent: "85%", color: "bg-blend-orange" },
      { label: "Hydration Base", val: "Extra", percent: "90%", color: "bg-cyan-500" }
    ],
    ingredients: ['🍋', '🍊', '🧊', '💧']
  }
];

const ProductExperience = () => {
  const [phase, setPhase] = useState(0); // 0: typing, 1: generating, 2: result
  const [typedText, setTypedText] = useState("");
  const [scenarioIndex, setScenarioIndex] = useState(0);

  // Animation Loop Effect
  useEffect(() => {
    let timeout;
    let isActive = true;
    
    const runSequence = async (index) => {
      if (!isActive) return;
      const currentScenario = scenarios[index];
      
      // 1. Reset
      setPhase(0);
      setTypedText("");
      
      // 2. Typing effect
      for (let i = 0; i <= currentScenario.prompt.length; i++) {
        if (!isActive) return;
        await new Promise(r => setTimeout(r, 35));
        setTypedText(currentScenario.prompt.substring(0, i));
      }
      
      if (!isActive) return;
      // 3. Generating state
      await new Promise(r => setTimeout(r, 500));
      setPhase(1);
      
      if (!isActive) return;
      // 4. Result state
      await new Promise(r => setTimeout(r, 1200));
      setPhase(2);
      
      if (!isActive) return;
      // 5. Hold result, then loop to next scenario
      timeout = setTimeout(() => {
        setScenarioIndex((prev) => (prev + 1) % scenarios.length);
      }, 5000);
    };
    
    runSequence(scenarioIndex);
    
    return () => {
      isActive = false;
      clearTimeout(timeout);
    };
  }, [scenarioIndex]);

  const activeScenario = scenarios[scenarioIndex];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Personalized Beverage Intelligence
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Explanation */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl font-medium leading-relaxed">
              Create beverages tailored to your lifestyle, nutrition goals, and taste preferences.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Nutrition Personalization", desc: "Adjust macros on the fly." },
                { title: "Flavor Generation", desc: "Perfectly balanced taste profiles." },
                { title: "Texture Customization", desc: "From silky smooth to icy thick." },
                { title: "Prompt-Based Creation", desc: "Tell the kiosk what you need." }
              ].map((item, idx) => (
                <li key={idx} className="flex flex-col relative">
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-2 h-2 rounded-full ${activeScenario.feature === item.title ? 'bg-blend-orange animate-pulse shadow-[0_0_10px_rgba(244,108,34,0.8)]' : 'bg-blend-purple'}`} />
                    <span className={`text-lg font-semibold transition-colors ${activeScenario.feature === item.title ? 'text-white' : 'text-gray-200'}`}>{item.title}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-5">{item.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Visual Prompt Simulator */}
          <motion.div 
            className="flex-1 w-full max-w-lg relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(155,114,196,0.15)] bg-gradient-to-b from-gray-900 to-black h-[480px] flex flex-col relative overflow-hidden">
              
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-blend-purple/20 rounded-full blur-[80px] transition-opacity duration-1000 ${phase === 2 ? 'opacity-100' : 'opacity-0'}`} />

              {/* Prompt Input Box */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-4 mb-6 relative z-10">
                <div className="flex items-center gap-2 mb-2 text-xs text-blend-purple font-mono uppercase tracking-widest">
                  <Sparkles size={14} />
                  Tell BlendYeh what you want
                </div>
                <div className="text-gray-300 min-h-[60px] text-lg">
                  {typedText}
                  <span className="inline-block w-2 h-5 bg-blend-orange ml-1 animate-pulse align-middle" />
                </div>
              </div>

              {/* Generation State */}
              <AnimatePresence mode="wait">
                {phase === 1 && (
                  <motion.div 
                    key="generating"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex-1 flex flex-col items-center justify-center space-y-4"
                  >
                    <Activity className="text-blend-orange animate-pulse" size={32} />
                    <div className="text-sm font-mono text-gray-400">Synthesizing Formulation...</div>
                  </motion.div>
                )}

                {/* Result State */}
                {phase === 2 && (
                  <motion.div 
                    key={`result-${scenarioIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 flex flex-col justify-end relative z-10"
                  >
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <div>
                        <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Target Match</div>
                        <div className="text-lg font-bold text-white mt-1">{activeScenario.resultName}</div>
                      </div>
                      <div className={`w-11 h-11 rounded-full ${activeScenario.matchBg} flex items-center justify-center border ${activeScenario.matchBorder}`}>
                        <span className={`${activeScenario.matchColor} text-xs font-bold`}>{activeScenario.match}</span>
                      </div>
                    </div>

                    {/* Dynamic Sliders */}
                    <div className="space-y-5 mb-6">
                      {activeScenario.sliders.map((slider, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-gray-300 font-medium">{slider.label}</span>
                            <span className="text-gray-500 font-mono">{slider.val}</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full ${slider.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: slider.percent }}
                              transition={{ duration: 1, delay: idx * 0.2, type: "spring" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Generated Ingredients */}
                    <div className="flex items-center gap-3">
                      <div className="text-xs text-gray-500 uppercase tracking-widest">Base:</div>
                      {activeScenario.ingredients.map((emoji, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + (idx * 0.1), type: "spring" }}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shadow-lg"
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductExperience;
