import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-4 block w-fit">
              <img src="/logo.png" alt="BlendYeh" className="h-10 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Autonomous beverage kiosk for high-footfall spaces. Fresh smoothies, milkshakes, and functional drinks prepared in under 60 seconds.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bangalore, India</li>
              <li><a href="mailto:samrudh.r@foodyeh.io" className="hover:text-blend-orange transition-colors">samrudh.r@foodyeh.io</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} BlendYeh. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
