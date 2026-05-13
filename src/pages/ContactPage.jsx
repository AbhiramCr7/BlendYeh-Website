import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Build the <span className="text-blend-orange">Future</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Whether you're a real estate partner, investor, or simply want BlendYeh at your campus.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Contact Info */}
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="glass-card p-8 flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blend-orange/20 flex items-center justify-center shrink-0">
              <Mail className="text-blend-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email Us</h3>
              <p className="text-gray-400 mb-2">For partnerships and inquiries.</p>
              <a href="mailto:info@foodyeh.io" className="text-white hover:text-blend-orange transition-colors">info@foodyeh.io</a>
            </div>
          </div>



          <div className="glass-card p-8 flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Location</h3>
              <p className="text-gray-400">Bangalore, India</p>
              <p className="text-sm text-gray-500 mt-2">HQ & Engineering Center</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="flex-1 glass-card p-8 md:p-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
          <form action="https://formsubmit.co/samrudh.r@foodyeh.io" method="POST" className="space-y-6">
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            {/* Disable Captcha for smoother UX, optional */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Success redirect */}
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">First Name</label>
                <input type="text" name="First Name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Last Name</label>
                <input type="text" name="Last Name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input type="email" name="Email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" placeholder="john@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Interest</label>
              <select name="Interest" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors appearance-none">
                <option value="Deployment Partner">Deployment Partner</option>
                <option value="Investor">Investor</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea name="Message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blend-orange transition-colors" placeholder="How can we collaborate?"></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-lg bg-blend-orange text-white font-bold hover:bg-orange-600 transition-colors shadow-[0_0_15px_rgba(244,108,34,0.3)]">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
