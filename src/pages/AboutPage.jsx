import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6">Built by FoodYeh</h1>
        <p className="text-gray-400 text-lg">
          We are a deep-tech robotics startup based in Bangalore, engineering the future of automated dining.
        </p>
      </motion.div>

      <motion.div 
        className="glass-card p-8 md:p-12 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Access to fresh, personalized nutrition shouldn't be limited by labor shortages or high real estate costs. BlendYeh was built to democratize high-quality beverages through intelligent automation.
        </p>
        <p className="text-gray-300 leading-relaxed">
          By combining modular hardware, precision robotics, and AI-driven operating systems, we've created a zero-human dependency kiosk that delivers consistent, preservative-free drinks in under a minute.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row items-center gap-8 glass-card p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blend-purple to-blend-orange flex items-center justify-center overflow-hidden shrink-0">
          <div className="text-center text-white/50 text-sm">Founder<br/>Image</div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Samrudh R.</h3>
          <div className="text-blend-orange font-medium mb-4">Founder & CEO</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            With a background in robotics and AI, Samrudh founded FoodYeh to bridge the gap between deep tech and consumer dining. BlendYeh is the first manifestation of a broader vision to build autonomous operating systems for physical retail.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
