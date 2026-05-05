import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const dynamicPhrases = [
  "Cold coffee chocolate milkshake.",
  "Forgot breakfast, need oats & fruits.",
  "Mango and blueberry with protein.",
  "I just played badminton, I am tired.",
  "Add some dry fruits.",
  "Extra Vitamin C."
];

const deploymentChips = [
  { icon: "🏋", label: "Gyms" },
  { icon: "🏟", label: "Sports Arenas" },
  { icon: "🏥", label: "Hospitals" },
  { icon: "🏢", label: "Corporate Campuses" },
  { icon: "🛍", label: "Malls" },
  { icon: "✈", label: "Airports" },
  { icon: "🚇", label: "Metro Stations" }
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % dynamicPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-dark-bg">
      {/* Industrial Directional Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glow-orange opacity-40 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-purple opacity-30 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-[#F5F5F5]">
              Autonomous Beverage <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blend-orange via-[#FF8540] to-blend-purple pr-2">
                Kiosk
              </span> <br />
              <span className="text-4xl md:text-5xl text-gray-400 font-bold">for High-Footfall Environments</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Fresh smoothies, protein drinks, milkshakes, hydration beverages, and personalized functional drinks — autonomously prepared in under 60 seconds.
            </p>

            <div className="h-16 mb-8 flex items-center justify-center lg:justify-start border-l-4 border-blend-orange pl-6 ml-4 lg:ml-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-bold text-[#F5F5F5] italic"
                >
                  “{dynamicPhrases[currentPhrase]}”
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Imagine creating beverages personalized for:{' '}
              <span className="text-blend-orange font-bold">nutrition, flavor, texture, energy, recovery, hydration</span>{' '}
              in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <a href="#technology" className="btn-primary w-full sm:w-auto">
                Explore Technology
                <ArrowRight size={20} />
              </a>
              <a href="#partner" className="btn-secondary w-full sm:w-auto">
                Partner With BlendYeh
              </a>
            </div>
          </motion.div>

          {/* Floating UI Elements / Render Area */}
          <motion.div 
            className="flex-1 relative w-full h-[500px] flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Deployment Chips Area */}
            <div className="relative w-full max-w-md h-full flex flex-col justify-center gap-6">
              <div className="flex flex-wrap justify-center lg:justify-end gap-3">
                {deploymentChips.map((chip, idx) => (
                  <motion.div
                    key={chip.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.4 }}
                    className="glass-card px-5 py-3 flex items-center gap-3 cursor-default"
                  >
                    <span className="text-xl">{chip.icon}</span>
                    <span className="text-sm font-bold text-[#F5F5F5] tracking-wide uppercase">{chip.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="text-center lg:text-right mt-6 text-sm text-gray-500 font-mono tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Interested deployment partners can connect with us.
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
