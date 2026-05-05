import { motion } from 'framer-motion';

const locations = [
  "Gyms",
  "Hospitals",
  "Universities",
  "Sports Arenas",
  "Corporate Campuses",
  "Transit Environments"
];

const PartnerDeploy = () => {
  return (
    <section id="partner" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Deploy BlendYeh</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Partner with us to transform your empty space into a high-margin autonomous beverage destination.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {locations.map((loc, idx) => (
                <div key={idx} className="px-4 py-2 rounded-full glass-card border border-white/10 text-sm font-medium text-gray-300">
                  {loc}
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6 border-l-4 border-l-blend-orange">
              <h3 className="font-bold text-white mb-2">Direct Inquiry</h3>
              <a href="mailto:samrudh.r@foodyeh.io" className="text-blend-orange hover:text-white transition-colors">
                samrudh.r@foodyeh.io
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full glass-card p-8 md:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Partnership Form</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" />
                <input type="text" placeholder="Last Name" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" />
              </div>
              <input type="email" placeholder="Work Email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" />
              <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors appearance-none">
                <option value="" disabled>Select Location Type...</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                <option value="Other">Other</option>
              </select>
              <textarea placeholder="Tell us about your space..." rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors"></textarea>
              <button className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnerDeploy;
