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
    <section className="relative min-h-[100dvh] flex items-start lg:items-center justify-center overflow-hidden pt-10 lg:pt-12 pb-12 bg-dark-bg">
      {/* Industrial Directional Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glow-orange opacity-40 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-purple opacity-30 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-[#F5F5F5] w-full text-center lg:text-left mx-auto lg:mx-0">
              <span className="block lg:inline w-full">Autonomous Beverage</span>
              <span className="block lg:inline w-full bg-clip-text text-transparent bg-gradient-to-r from-blend-orange via-[#FF8540] to-blend-purple lg:ml-2">Kiosk</span>
              <span className="block w-full text-2xl md:text-4xl lg:text-5xl text-gray-400 font-bold mt-2 md:mt-4 leading-tight">for High-Footfall Environments</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 w-full max-w-2xl mx-auto lg:mx-0 font-medium text-center lg:text-left">
              Fresh smoothies, protein drinks, milkshakes, hydration beverages, and personalized functional drinks — autonomously prepared in under 60 seconds.
            </p>

            <div className="min-h-[4rem] py-2 mb-8 flex items-center justify-center lg:justify-start border-l-0 lg:border-l-4 border-blend-orange pl-0 lg:pl-6 mx-auto lg:mx-0 w-full lg:max-w-none text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5F5F5] italic w-full text-center lg:text-left"
                >
                  “{dynamicPhrases[currentPhrase]}”
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-sm sm:text-base text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium px-4 md:px-0">
              Imagine creating beverages personalized for:{' '}
              <span className="text-blend-orange font-bold block sm:inline mt-1 sm:mt-0">nutrition, flavor, texture, energy, recovery, hydration</span>{' '}
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
            <div className="relative w-full max-w-lg h-full flex flex-col items-center justify-center">
              
              {/* Kiosk Image */}
              <motion.img 
                src="/kiosk.png" 
                alt="BlendYeh Autonomous Kiosk" 
                className="w-full h-auto object-contain max-h-[450px] drop-shadow-[0_0_50px_rgba(255,106,26,0.25)] relative z-10"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Deployment Chips underneath */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 w-full relative z-20">
                {deploymentChips.map((chip, idx) => (
                  <motion.div
                    key={chip.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (idx * 0.1), duration: 0.4 }}
                    className="glass-card px-3 py-1.5 flex items-center gap-2 cursor-default bg-black/50 backdrop-blur-md"
                  >
                    <span className="text-base">{chip.icon}</span>
                    <span className="text-[10px] font-bold text-[#F5F5F5] tracking-widest uppercase">{chip.label}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
